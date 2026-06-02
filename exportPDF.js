/**
 * exportPDF.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Genera un PDF técnico del Espectro de Diseño E.030 con:
 *   Pág 1   — Portada           (portrait)
 *   Pág 2   — Parámetros        (portrait)
 *   Pág 3   — Fórmulas + Notas  (portrait)
 *   Pág 4…n — Tabla de espectro (portrait, pagina si hay muchas filas)
 *   Última  — Gráfico SVG       (landscape)
 *
 * Dependencias CDN requeridas en index.html (antes de este script):
 *   <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
 *   <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
 *
 * Importa desde app.js los mismos exports que usa exportXLSX.js:
 *   datosEspectro, normaVersion, resolveParams
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { datosEspectro } from './app.js';
import { normaVersion }  from './app.js';
import { resolveParams } from './app.js';

// ── Paleta de color por versión (igual que exportXLSX) ────────────────────────
const VER_HEX = {
  '1977': '#F72585',
  '1997': '#FFD166',
  '2003': '#FF6B35',
  '2016': '#C77DFF',
  '2018': '#00E5FF',
  '2026': '#00C853',
};
const VER_DARK = {
  '1977': '#8B0057',
  '1997': '#7A5C00',
  '2003': '#7A2E00',
  '2016': '#5A008F',
  '2018': '#006B7A',
  '2026': '#005B25',
};

// ── Helpers de texto ──────────────────────────────────────────────────────────
function usarNombreUso(U) {
  const map = { 1.0:'Común (C)', 1.3:'Importante (B)', 1.5:'Esencial (A2)', 1.8:'Imp. mayor (A1)' };
  return map[U] || `U = ${U}`;
}
function nombreNorma(v) {
  if (v === '1977') return 'RNC — 1977';
  if (v === '2026') return 'NTE E.030 — 2026 (RM 183-2026)';
  return `NTE E.030 — ${v}`;
}
function buildFormulas(version, Tp, Tl) {
  if (version === '1977') return [
    ['T = 0',             'C = 2.5'],
    ['0 &lt; T ≤ ∞',     `C = min(2.5, (Tp/T)<sup>2/3</sup>)  [Tp = ${Tp.toFixed(2)} s]`],
    ['Sa',                'Sa = (Z · U · C · S) / R'],
  ];
  if (version === '1997' || version === '2003') return [
    ['T ≤ Tp',            `C = 2.5  [Tp = ${Tp.toFixed(2)} s]`],
    ['T &gt; Tp',         'C = 2.5 · (Tp/T)'],
    ['Sa',                'Sa = (Z · U · C · S) / R'],
  ];
  if (version === '2016' || version === '2018') return [
    ['T ≤ Tp',            `C = 2.5  [Tp = ${Tp.toFixed(2)} s]`],
    [`Tp &lt; T ≤ T<sub>L</sub>`, 'C = 2.5 · (Tp/T)'],
    [`T &gt; T<sub>L</sub>`,       `C = 2.5 · (Tp · T<sub>L</sub>) / T²  [T<sub>L</sub> = ${Tl?.toFixed(2) ?? '—'} s]`],
    ['Sa',                'Sa = (Z · U · C · S) / R'],
  ];
  // 2026
  return [
    ['T &lt; 0.2·Tp',     `C = 1 + 7.5·(T/Tp)  [Tp = ${Tp.toFixed(2)} s — Art. 18]`],
    ['0.2·Tp ≤ T ≤ Tp',  'C = 2.5'],
    [`Tp &lt; T ≤ T<sub>L</sub>`, 'C = 2.5 · (Tp/T)'],
    [`T &gt; T<sub>L</sub>`,       `C = 2.5 · (Tp · T<sub>L</sub>) / T²  [T<sub>L</sub> = ${Tl?.toFixed(2) ?? '—'} s]`],
    ['Sa',                'Sa = (Z · U · C · S) / R'],
  ];
}
function buildNotas(version, suelo, Tp, Tl, Ts, Ia, Ip) {
  const n = [
    'Sa = aceleración espectral como fracción de g (9.81 m/s²).',
    'Espectro para 5 % de amortiguamiento crítico (§4.5 de la norma).',
    'Tp y TL definen la plataforma espectral y zona de velocidad constante.',
    'R efectivo = R₀ × Ia × Ip.',
  ];
  if (['2016','2018','2026'].includes(version) && (Ia < 1 || Ip < 1))
    n.push(`⚠ Irregularidad detectada (Ia = ${Ia.toFixed(2)}, Ip = ${Ip.toFixed(2)}). Verificar restricciones de la norma.`);
  if (version === '2026') {
    n.push('★ E.030-2026 Art. 18: rama inicial C = 1.0 → 2.5 entre T = 0 y T = Tp.');
    n.push('★ E.030-2026 Art. 28: Cat. A1/A2 aplican 100 % en ambas direcciones (o 75 % + 75 %).');
    if (suelo === 'S5') n.push('⚠ S5 Excepcional: prohibido construir sin mejora de suelo (Anexo III).');
    if (Ts > 0 && Ts > 0.65 * Tp)
      n.push(`⚠ Ts = ${Ts.toFixed(2)} s > 0.65 × Tp → perfil degradado (Art. 10).`);
  }
  return n;
}

// ═════════════════════════════════════════════════════════════════════════════
//  CONSTRUCTOR DE HTML PARA CADA SECCIÓN
//  Cada función devuelve un <div> DOM ya insertado en un contenedor oculto.
//  El contenedor se destruye tras la captura.
// ═════════════════════════════════════════════════════════════════════════════

/**
 * Crea un iframe oculto DENTRO del viewport (html2canvas solo captura lo que
 * el navegador renderiza; coordenadas negativas o display:none producen canvas
 * en blanco). El iframe se posiciona a 0,0 cubierto por opacity:0 y
 * pointer-events:none para que sea invisible pero completamente renderizado.
 */
function crearContenedor(widthPx = 900) {
  const iframe = document.createElement('iframe');
  Object.assign(iframe.style, {
    position:       'fixed',
    top:            '0',
    left:           '0',
    width:          `${widthPx}px`,
    height:         '10px',          // crece con el contenido
    border:         'none',
    opacity:        '0',             // invisible pero renderizado
    pointerEvents:  'none',
    zIndex:         '99999',
    background:     '#ffffff',
    overflow:       'visible',
  });
  document.body.appendChild(iframe);

  // El iframe necesita su propio document
  const idoc = iframe.contentDocument || iframe.contentWindow.document;
  idoc.open();
  idoc.write('<!DOCTYPE html><html><body style="margin:0;padding:0;background:#fff;"></body></html>');
  idoc.close();

  // wrap = el <body> del iframe — es lo que html2canvas capturará
  const wrap = idoc.body;
  wrap.__iframe__ = iframe; // referencia para poder eliminar el iframe luego
  wrap.__idoc__   = idoc;
  return wrap;
}

/** CSS compartido inyectado en cada contenedor como <style>. */
function estilosBase(accent, dark) {
  return `
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { font-family: 'Segoe UI', Arial, sans-serif; }
      .pdf-wrap { padding: 32px 36px; background: #fff; }
      /* Cabecera de sección */
      .sec-title {
        background: #1A3A5C;
        color: #fff;
        font-size: 13px;
        font-weight: 700;
        padding: 7px 14px;
        letter-spacing: .6px;
        text-transform: uppercase;
        margin-top: 20px;
        margin-bottom: 0;
      }
      /* Tabla genérica */
      table { width: 100%; border-collapse: collapse; }
      th {
        background: #1A3A5C;
        color: #fff;
        font-size: 12px;
        font-weight: 700;
        padding: 7px 10px;
        text-align: center;
        border: 1px solid #1A3A5C;
      }
      td {
        font-size: 12px;
        padding: 5px 10px;
        border: 1px solid #dce4ee;
        vertical-align: middle;
      }
      tr:nth-child(even) td { background: #f4f8fc; }
      tr:nth-child(odd)  td { background: #ffffff; }
      /* Parámetros */
      .param-label { font-weight: 700; color: #1A3A5C; width: 220px; }
      .param-desc  { font-style: italic; color: #336699; }
      .param-val   { font-weight: 700; color: #1A7A45; text-align: center; width: 90px; }
      .param-unit  { color: #555; width: 130px; }
      /* Caja Sa máx */
      .samax-box {
        display: flex; align-items: center; justify-content: space-between;
        background: #FFF3E0; border: 2px solid ${accent};
        border-radius: 6px; padding: 10px 18px; margin: 12px 0;
      }
      .samax-label { font-weight: 700; font-size: 13px; color: #333; }
      .samax-val   { font-size: 20px; font-weight: 900; color: #C04000; }
      /* Fórmulas */
      .formula-row { display: flex; border-bottom: 1px solid #dce4ee; }
      .formula-zone {
        min-width: 200px; background: #ecf3fb; color: #2E5E8E;
        font-weight: 700; font-size: 12px; padding: 6px 12px;
        display: flex; align-items: center;
        border-right: 2px solid #2E5E8E;
      }
      .formula-expr {
        font-family: 'Courier New', monospace; font-size: 12px;
        padding: 6px 16px; display: flex; align-items: center;
      }
      /* Notas */
      .nota-item {
        font-size: 11px; color: #555; font-style: italic;
        padding: 4px 0 4px 12px; border-left: 3px solid ${accent};
        margin: 4px 0;
      }
      /* Footer */
      .pdf-footer {
        margin-top: 16px; font-size: 10px; color: #aaa;
        text-align: center; font-style: italic; border-top: 1px solid #eee;
        padding-top: 8px;
      }
      /* Chip de versión */
      .ver-chip {
        display: inline-block; background: ${accent}; color: ${dark};
        font-weight: 900; font-size: 12px; padding: 3px 12px;
        border-radius: 999px; letter-spacing: .5px;
      }
      /* Tabla espectro — colores por columna */
      .col-t   { font-family: 'Courier New', monospace; color: #1A3A5C; font-weight: 700; }
      .col-sa  { font-family: 'Courier New', monospace; color: #1A7A45; font-weight: 700; }
      .col-c   { font-family: 'Courier New', monospace; color: #7B5EA7; }
      .col-ms2 { font-family: 'Courier New', monospace; color: #C04000; }
    </style>
  `;
}

// ─────────────────────────────────────────────────────────────────────────────
//  SECCIÓN: PORTADA
// ─────────────────────────────────────────────────────────────────────────────
function htmlPortada({ version, zonaVal, sueloVal, U, Z, S, Tp, Tl, R, SaMax }) {
  const accent = VER_HEX[version] || '#0070C0';
  const dark   = VER_DARK[version] || '#003060';
  const fecha  = new Date().toLocaleDateString('es-PE', { day:'2-digit', month:'long', year:'numeric' });

  return `
    ${estilosBase(accent, dark)}
    <div class="pdf-wrap" style="min-height:520px; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center;">
      <!-- Logo banda superior -->
      <div style="width:100%; height:8px; background:linear-gradient(90deg,#1A3A5C,${accent}); border-radius:4px; margin-bottom:40px;"></div>

      <div style="font-size:11px; color:#888; letter-spacing:2px; text-transform:uppercase; margin-bottom:12px;">
        Reglamento Nacional de Edificaciones
      </div>

      <div style="font-size:32px; font-weight:900; color:#1A3A5C; line-height:1.1; margin-bottom:8px;">
        ESPECTRO DE DISEÑO<br>SÍSMICO
      </div>
      <div style="font-size:15px; color:#555; margin-bottom:24px;">
        Análisis de la Respuesta Sísmica de Diseño
      </div>

      <div class="ver-chip" style="font-size:15px; padding:6px 24px; margin-bottom:32px;">
        ${nombreNorma(version)}
      </div>

      <!-- Tarjetas de parámetros clave -->
      <div style="display:flex; gap:16px; flex-wrap:wrap; justify-content:center; margin-bottom:36px;">
        ${[
          ['Zona', `Z${zonaVal}`, `Z = ${Z.toFixed(2)} g`],
          ['Suelo', sueloVal,     `S = ${S.toFixed(2)}`],
          ['Uso',   usarNombreUso(U), `U = ${U.toFixed(1)}`],
          ['Tp',    `${Tp.toFixed(2)} s`, Tl ? `TL = ${Tl.toFixed(2)} s` : '—'],
          ['Sa máx', `${SaMax.toFixed(4)} g`, `R = ${R.toFixed(2)}`],
        ].map(([lbl, val, sub]) => `
          <div style="background:#F4F8FC; border:1px solid #dce4ee; border-top:3px solid ${accent};
                      border-radius:6px; padding:14px 20px; min-width:110px;">
            <div style="font-size:10px; color:#888; text-transform:uppercase; letter-spacing:1px;">${lbl}</div>
            <div style="font-size:20px; font-weight:900; color:#1A3A5C; margin:4px 0;">${val}</div>
            <div style="font-size:11px; color:#666;">${sub}</div>
          </div>
        `).join('')}
      </div>

      <div style="font-size:12px; color:#aaa;">Generado el ${fecha}</div>

      <!-- banda inferior -->
      <div style="width:100%; height:6px; background:linear-gradient(90deg,${accent},#1A3A5C); border-radius:4px; margin-top:40px;"></div>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────────────────────
//  SECCIÓN: PARÁMETROS SÍSMICOS
// ─────────────────────────────────────────────────────────────────────────────
function htmlParametros({ version, zonaVal, sueloVal, U, R_base, R, IaEf, IpEf, Z, S, Tp, Tl, Ts }) {
  const accent = VER_HEX[version] || '#0070C0';
  const dark   = VER_DARK[version] || '#003060';
  const SaMax  = Z * U * 2.5 * S / R;
  const applyIrr = ['2016','2018','2026'].includes(version);
  const fecha  = new Date().toLocaleDateString('es-PE', { day:'2-digit', month:'long', year:'numeric' });

  const filas = [
    ['Factor de zona (Z)',  `Zona ${zonaVal}`,               Z.toFixed(2),     'g'],
    ['Perfil de suelo',     sueloVal,                        S.toFixed(2),     'Factor S'],
    ['Factor de uso (U)',   usarNombreUso(U),                U.toFixed(1),     '—'],
    ['Sistema estructural (R₀)', `R₀ = ${R_base}`,           R_base.toFixed(0),'Básico'],
    ['Irreg. de planta (Ip)', applyIrr ? 'Ver E.030 §4.6' : 'No aplica',
                                                              IpEf.toFixed(2), applyIrr ? '§4.6' : 'N/A'],
    ['Irreg. de altura (Ia)', applyIrr ? 'Ver E.030 §4.6' : 'No aplica',
                                                              IaEf.toFixed(2), applyIrr ? '§4.6' : 'N/A'],
    ['R efectivo',          'R = R₀ × Ia × Ip',              R.toFixed(2),     'Coef. reducción'],
    ['Período Tp',          'Inicio de plataforma espectral', Tp.toFixed(2),    's'],
    Tl ? ['Período TL', 'Inicio de vel. constante', Tl.toFixed(2), 's'] : null,
    (version === '2026' && Ts > 0) ? ['Período Ts (microzon.)', 'Estudio de microzonificación', Ts.toFixed(2), 's'] : null,
    ['Sa máximo (T ≤ Tp)',  'C = 2.5 (plataforma)',          SaMax.toFixed(4), 'g'],
    ['Sa máximo',           'En m/s²',                       (SaMax*9.81).toFixed(4), 'm/s²'],
  ].filter(Boolean);

  return `
    ${estilosBase(accent, dark)}
    <div class="pdf-wrap">
      <!-- Encabezado -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
        <div>
          <div style="font-size:18px; font-weight:900; color:#1A3A5C;">PARÁMETROS SÍSMICOS</div>
          <div style="font-size:12px; color:#555;">Espectro de Diseño — ${nombreNorma(version)}</div>
        </div>
        <div class="ver-chip">${version}</div>
      </div>
      <div style="height:3px; background:linear-gradient(90deg,#1A3A5C,${accent}); margin-bottom:18px; border-radius:2px;"></div>

      <div class="sec-title">1. Parámetros de Diseño</div>
      <table>
        <thead>
          <tr>
            <th style="text-align:left; width:220px;">Parámetro</th>
            <th style="text-align:left;">Descripción</th>
            <th style="width:90px;">Valor</th>
            <th style="width:130px;">Unidad / Nota</th>
          </tr>
        </thead>
        <tbody>
          ${filas.map(([lbl, desc, val, unit]) => `
            <tr>
              <td class="param-label">${lbl}</td>
              <td class="param-desc">${desc}</td>
              <td class="param-val">${val}</td>
              <td class="param-unit">${unit}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <!-- Caja Sa máx destacada -->
      <div class="samax-box" style="margin-top:16px;">
        <div>
          <div class="samax-label">Aceleración Espectral Máxima</div>
          <div style="font-size:11px; color:#888; margin-top:2px;">Para T ≤ Tp  (C = 2.5)</div>
        </div>
        <div>
          <div class="samax-val">${SaMax.toFixed(4)} <span style="font-size:14px;">g</span></div>
          <div style="font-size:11px; color:#888; text-align:right;">${(SaMax*9.81).toFixed(3)} m/s²</div>
        </div>
      </div>

      <div class="pdf-footer">
        ${nombreNorma(version)} — Norma Técnica E.030 Diseño Sismorresistente — ${fecha}
      </div>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────────────────────
//  SECCIÓN: FÓRMULAS + NOTAS + REFERENCIAS
// ─────────────────────────────────────────────────────────────────────────────
function htmlFormulas({ version, sueloVal, Tp, Tl, Ts, IaEf, IpEf }) {
  const accent   = VER_HEX[version] || '#0070C0';
  const dark     = VER_DARK[version] || '#003060';
  const formulas = buildFormulas(version, Tp, Tl);
  const notas    = buildNotas(version, sueloVal, Tp, Tl, Ts, IaEf, IpEf);
  const fecha    = new Date().toLocaleDateString('es-PE', { day:'2-digit', month:'long', year:'numeric' });

  const refs = {
    '1977': 'RNC-1977. Primera norma sísmica nacional.',
    '1997': 'NTE E.030-1997. SENCICO, Lima, Perú.',
    '2003': 'NTE E.030-2003 (post-sismo Atico Mw 8.4). SENCICO, Lima, Perú.',
    '2016': 'NTE E.030-2016. DS 003-2016-Vivienda. SENCICO.',
    '2018': 'NTE E.030-2018. DS 003-2018-Vivienda. SENCICO.',
    '2026': 'NTE E.030-2026. RM 183-2026-Vivienda, 28 abril 2026. SENCICO.',
  };

  return `
    ${estilosBase(accent, dark)}
    <div class="pdf-wrap">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
        <div>
          <div style="font-size:18px; font-weight:900; color:#1A3A5C;">FÓRMULAS DEL ESPECTRO</div>
          <div style="font-size:12px; color:#555;">Expresiones del factor C y aceleración Sa</div>
        </div>
        <div class="ver-chip">${version}</div>
      </div>
      <div style="height:3px; background:linear-gradient(90deg,#1A3A5C,${accent}); margin-bottom:18px; border-radius:2px;"></div>

      <div class="sec-title">2. Espectro de Respuesta — Factor C</div>
      <div style="border:1px solid #dce4ee; border-radius:4px; overflow:hidden; margin-bottom:16px;">
        ${formulas.map(([zona, expr]) => `
          <div class="formula-row">
            <div class="formula-zone">${zona}</div>
            <div class="formula-expr">${expr}</div>
          </div>
        `).join('')}
      </div>

      <!-- Descripción de variables -->
      <div style="background:#f4f8fc; border-left:4px solid ${accent}; padding:10px 14px; border-radius:0 4px 4px 0; margin-bottom:16px; font-size:12px;">
        <strong>Donde:</strong>
        Z = factor de zona &nbsp;|&nbsp; U = factor de uso &nbsp;|&nbsp; C = factor de amplificación sísmica
        &nbsp;|&nbsp; S = factor de suelo &nbsp;|&nbsp; R = coeficiente de reducción efectivo
        &nbsp;|&nbsp; Tp = período de la plataforma &nbsp;|&nbsp; TL = período de inicio de zona de vel. constante
      </div>

      <div class="sec-title">3. Notas y Advertencias</div>
      <div style="padding:8px 0;">
        ${notas.map(n => `<div class="nota-item">${n}</div>`).join('')}
      </div>

      <div class="sec-title" style="margin-top:16px;">4. Referencia Normativa</div>
      <div style="padding:8px 0;">
        <div class="nota-item">[1] RNE, Norma Técnica E.030 Diseño Sismorresistente.</div>
        <div class="nota-item">[2] ${refs[version] || 'Ver norma vigente.'}</div>
        ${version === '2026' ? '<div class="nota-item">[3] RM 183-2026: perfiles S0–S5, rampa Art. 18, R muros = 3.5.</div>' : ''}
      </div>

      <div class="pdf-footer">
        ${nombreNorma(version)} — ${fecha}
      </div>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────────────────────
//  SECCIÓN: TABLA DE ESPECTRO (puede paginarse)
// ─────────────────────────────────────────────────────────────────────────────
function htmlTablaEspectro({ version, datos }) {
  const accent = VER_HEX[version] || '#0070C0';
  const dark   = VER_DARK[version] || '#003060';
  const fecha  = new Date().toLocaleDateString('es-PE', { day:'2-digit', month:'long', year:'numeric' });

  return `
    ${estilosBase(accent, dark)}
    <div class="pdf-wrap">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
        <div>
          <div style="font-size:18px; font-weight:900; color:#1A3A5C;">TABLA DE ESPECTRO DE DISEÑO</div>
          <div style="font-size:12px; color:#555;">${datos.length} puntos — 5 % de amortiguamiento</div>
        </div>
        <div class="ver-chip">${version}</div>
      </div>
      <div style="height:3px; background:linear-gradient(90deg,#1A3A5C,${accent}); margin-bottom:18px; border-radius:2px;"></div>

      <div class="sec-title">Valores del Espectro de Respuesta</div>
      <table>
        <thead>
          <tr>
            <th>T (s)</th>
            <th>C</th>
            <th>Sa (g)</th>
            <th>Sa (m/s²)</th>
          </tr>
        </thead>
        <tbody>
          ${datos.map((d, i) => `
            <tr>
              <td class="col-t"  style="text-align:center;">${d.T.toFixed(3)}</td>
              <td class="col-c"  style="text-align:center;">${d.C.toFixed(4)}</td>
              <td class="col-sa" style="text-align:center;">${d.Sa.toFixed(5)}</td>
              <td class="col-ms2" style="text-align:center;">${d.SaMS2.toFixed(4)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <div class="pdf-footer">
        ${nombreNorma(version)} — ${fecha}
      </div>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────────────────────
//  SECCIÓN: GRÁFICO SVG (landscape)
//  Genera un SVG vectorial del espectro — no depende de <canvas> del DOM.
// ─────────────────────────────────────────────────────────────────────────────
function htmlGrafico({ version, datos, Tp, Tl, SaMax, Z, S, U, R }) {
  const accent = VER_HEX[version] || '#0070C0';
  const dark   = VER_DARK[version] || '#003060';
  const fecha  = new Date().toLocaleDateString('es-PE', { day:'2-digit', month:'long', year:'numeric' });

  // Dimensiones del área de trazado
  const W = 780, H = 400;
  const mx = 60, my = 30, mr = 30, mb = 50; // márgenes
  const pw = W - mx - mr;   // ancho útil
  const ph = H - my - mb;   // alto útil

  const Tmax  = Math.max(...datos.map(d => d.T));
  const Samax = Math.max(...datos.map(d => d.Sa)) * 1.1; // +10% headroom

  const px = T  => mx + (T  / Tmax)  * pw;
  const py = Sa => my + (1 - Sa / Samax) * ph;

  // Línea del espectro
  const polyline = datos.map(d => `${px(d.T).toFixed(1)},${py(d.Sa).toFixed(1)}`).join(' ');

  // Grid horizontal (5 líneas)
  const gridH = Array.from({length:6}, (_,i) => {
    const saG = (i / 5) * Samax;
    const y   = py(saG);
    const lbl = saG.toFixed(3);
    return `<line x1="${mx}" y1="${y.toFixed(1)}" x2="${mx+pw}" y2="${y.toFixed(1)}" stroke="#ddd" stroke-width="1"/>
            <text x="${mx-4}" y="${(y+4).toFixed(1)}" text-anchor="end" font-size="10" fill="#888">${lbl}</text>`;
  }).join('');

  // Grid vertical (cada Tmax/5)
  const gridV = Array.from({length:6}, (_,i) => {
    const tG = (i / 5) * Tmax;
    const x  = px(tG);
    const lbl = tG.toFixed(1);
    return `<line x1="${x.toFixed(1)}" y1="${my}" x2="${x.toFixed(1)}" y2="${my+ph}" stroke="#ddd" stroke-width="1"/>
            <text x="${x.toFixed(1)}" y="${(my+ph+16).toFixed(1)}" text-anchor="middle" font-size="10" fill="#888">${lbl}</text>`;
  }).join('');

  // Línea Tp
  const xTp  = px(Tp);
  const lineTp = `
    <line x1="${xTp.toFixed(1)}" y1="${my}" x2="${xTp.toFixed(1)}" y2="${my+ph}" stroke="#808080" stroke-width="1.5" stroke-dasharray="6,3"/>
    <text x="${(xTp+4).toFixed(1)}" y="${(my+14).toFixed(1)}" font-size="10" fill="#606060" font-weight="bold">Tp=${Tp.toFixed(2)}s</text>`;

  // Línea TL
  const lineTl = Tl ? (() => {
    const xTl = px(Tl);
    return `<line x1="${xTl.toFixed(1)}" y1="${my}" x2="${xTl.toFixed(1)}" y2="${my+ph}" stroke="#A0A0A0" stroke-width="1.5" stroke-dasharray="6,3"/>
            <text x="${(xTl+4).toFixed(1)}" y="${(my+28).toFixed(1)}" font-size="10" fill="#707070" font-weight="bold">TL=${Tl.toFixed(2)}s</text>`;
  })() : '';

  // Anotación Sa máx
  const ySamax  = py(SaMax);
  const anotSa  = `
    <line x1="${mx}" y1="${ySamax.toFixed(1)}" x2="${mx+pw}" y2="${ySamax.toFixed(1)}" stroke="${accent}" stroke-width="1" stroke-dasharray="4,3" opacity="0.6"/>
    <text x="${(mx+pw-4).toFixed(1)}" y="${(ySamax-4).toFixed(1)}" text-anchor="end" font-size="10" fill="${accent}" font-weight="bold">Sa_max = ${SaMax.toFixed(4)} g</text>`;

  const svg = `
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg" font-family="'Segoe UI', Arial, sans-serif">
      <!-- Fondo -->
      <rect width="${W}" height="${H}" fill="#fff"/>
      <!-- Grid -->
      ${gridH}
      ${gridV}
      <!-- Ejes -->
      <line x1="${mx}" y1="${my}" x2="${mx}" y2="${my+ph}" stroke="#555" stroke-width="1.5"/>
      <line x1="${mx}" y1="${my+ph}" x2="${mx+pw}" y2="${my+ph}" stroke="#555" stroke-width="1.5"/>
      <!-- Labels ejes -->
      <text x="${(mx+pw/2).toFixed(1)}" y="${H-6}" text-anchor="middle" font-size="12" fill="#333" font-weight="bold">PERÍODO  T  (s)</text>
      <text transform="rotate(-90)" x="${-(my+ph/2).toFixed(1)}" y="14" text-anchor="middle" font-size="12" fill="#333" font-weight="bold">Sa  (g)</text>
      <!-- Líneas de referencia -->
      ${lineTp}
      ${lineTl}
      ${anotSa}
      <!-- Curva del espectro -->
      <polyline points="${polyline}" fill="none" stroke="${accent}" stroke-width="2.5" stroke-linejoin="round"/>
    </svg>
  `;

  return `
    ${estilosBase(accent, dark)}
    <div class="pdf-wrap" style="padding:24px 32px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
        <div>
          <div style="font-size:18px; font-weight:900; color:#1A3A5C;">GRÁFICO — ESPECTRO DE DISEÑO</div>
          <div style="font-size:12px; color:#555;">Sa vs T — Amortiguamiento 5 %</div>
        </div>
        <div class="ver-chip">${version}</div>
      </div>
      <div style="height:3px; background:linear-gradient(90deg,#1A3A5C,${accent}); margin-bottom:16px; border-radius:2px;"></div>

      <!-- SVG del gráfico -->
      <div style="border:1px solid #dce4ee; border-radius:6px; padding:12px; background:#fafcff;">
        ${svg}
      </div>

      <!-- Leyenda -->
      <div style="display:flex; gap:24px; margin-top:12px; font-size:11px; color:#555; justify-content:center;">
        <span><span style="display:inline-block;width:28px;height:3px;background:${accent};vertical-align:middle;margin-right:6px;border-radius:2px;"></span>Sa (g)</span>
        <span><span style="display:inline-block;width:28px;height:2px;background:#808080;vertical-align:middle;margin-right:6px;border-top:2px dashed #808080;"></span>Tp = ${Tp.toFixed(2)} s</span>
        ${Tl ? `<span><span style="display:inline-block;width:28px;height:2px;background:#A0A0A0;vertical-align:middle;margin-right:6px;border-top:2px dashed #A0A0A0;"></span>TL = ${Tl.toFixed(2)} s</span>` : ''}
      </div>

      <!-- Parámetros en banda inferior -->
      <div style="display:flex; gap:16px; margin-top:14px; padding:10px 14px; background:#f4f8fc; border-radius:6px; font-size:11px; color:#333; flex-wrap:wrap;">
        <span><strong>Z =</strong> ${Z.toFixed(2)}</span>
        <span><strong>U =</strong> ${U.toFixed(1)}</span>
        <span><strong>S =</strong> ${S.toFixed(2)}</span>
        <span><strong>R =</strong> ${R.toFixed(2)}</span>
        <span><strong>Tp =</strong> ${Tp.toFixed(2)} s</span>
        ${Tl ? `<span><strong>TL =</strong> ${Tl.toFixed(2)} s</span>` : ''}
        <span><strong>Sa_max =</strong> ${SaMax.toFixed(4)} g</span>
      </div>

      <div class="pdf-footer" style="margin-top:12px;">
        ${nombreNorma(version)} — ${fecha}
      </div>
    </div>
  `;
}

// ═════════════════════════════════════════════════════════════════════════════
//  MOTOR DE CAPTURA: renderiza HTML → captura con html2canvas → imagen PNG
// ═════════════════════════════════════════════════════════════════════════════

/**
 * Renderiza htmlString en un iframe oculto, espera layout completo
 * y devuelve un dataURL PNG via html2canvas.
 * @param {string} htmlString  — HTML completo (con <style> inline)
 * @param {number} widthPx     — ancho del contenedor de captura
 * @param {number} scale       — factor de resolución (2 = retina)
 */
async function capturarHtml(htmlString, widthPx = 900, scale = 2) {
  const wrap   = crearContenedor(widthPx);
  const iframe = wrap.__iframe__;

  // Inyectar HTML dentro del body del iframe
  wrap.innerHTML = htmlString;

  // Ajustar altura del iframe al contenido real
  await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  const contentH = wrap.scrollHeight;
  iframe.style.height = `${contentH}px`;

  // Segunda espera para que el navegador aplique el nuevo alto
  await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  // Delay extra para fuentes y backgrounds
  await new Promise(r => setTimeout(r, 80));

  const canvas = await html2canvas(wrap, {
    scale,
    useCORS:         true,
    allowTaint:      true,
    backgroundColor: '#ffffff',
    logging:         false,
    width:           widthPx,
    height:          wrap.scrollHeight,
    windowWidth:     widthPx,
    windowHeight:    wrap.scrollHeight,
    scrollX:         0,
    scrollY:         0,
  });

  // Limpiar: eliminar el iframe completo del DOM
  document.body.removeChild(iframe);

  return { dataUrl: canvas.toDataURL('image/png', 1.0), w: canvas.width, h: canvas.height };
}

// ═════════════════════════════════════════════════════════════════════════════
//  AÑADIR PÁGINA AL PDF
//  Calcula si la imagen cabe en una sola página o hay que dividirla.
// ═════════════════════════════════════════════════════════════════════════════

async function agregarImagenPDF(pdf, dataUrl, imgW, imgH, orientation = 'portrait') {
  // Dimensiones de la página en mm
  const pageW  = orientation === 'landscape' ? 297 : 210;
  const pageH  = orientation === 'landscape' ? 210 : 297;
  const margin = 8; // mm

  // Escalar imagen para que quepa el ancho.
  // imgW/imgH ya vienen en píxeles × scale (scale=2), así que dividimos por scale.
  const scale    = 2;
  const usableW  = pageW - 2 * margin;          // mm disponibles en ancho
  const ratio    = usableW / (imgW / scale);     // mm por px-real
  const scaledH  = (imgH / scale) * ratio;       // alto total de la imagen en mm

  // Cortar en páginas si el alto excede la página
  const usableH    = pageH - 2 * margin;
  const pxPerPage  = usableH / ratio;            // px-reales por página
  const totalPages = Math.ceil((imgH / scale) / pxPerPage);

  // Pre-cargar la imagen UNA sola vez (asíncrono — bug principal anterior)
  const imgEl = await new Promise((resolve, reject) => {
    const i = new Image();
    i.onload  = () => resolve(i);
    i.onerror = reject;
    i.src     = dataUrl;
  });

  for (let p = 0; p < totalPages; p++) {
    if (p > 0) pdf.addPage([pageW, pageH], orientation);

    // Coordenadas en px-canvas (× scale)
    const srcY      = Math.round(p * pxPerPage * scale);
    const srcH      = Math.min(pxPerPage * scale, imgH - srcY);

    const tmpCanvas        = document.createElement('canvas');
    tmpCanvas.width        = imgW;
    tmpCanvas.height       = Math.round(srcH);

    const ctx = tmpCanvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, tmpCanvas.width, tmpCanvas.height);
    ctx.drawImage(imgEl, 0, srcY, imgW, Math.round(srcH), 0, 0, imgW, Math.round(srcH));

    const sliceUrl = tmpCanvas.toDataURL('image/png', 1.0);
    const sliceHmm = (srcH / scale) * ratio;     // alto del slice en mm

    pdf.addImage(sliceUrl, 'PNG', margin, margin, usableW, Math.min(sliceHmm, usableH));
  }
}

// ═════════════════════════════════════════════════════════════════════════════
//  EXPORT PRINCIPAL
// ═════════════════════════════════════════════════════════════════════════════

async function exportPDF() {
  if (!datosEspectro.length) {
    console.warn('exportPDF: sin datos de espectro.');
    return;
  }

  // ── 1. Leer parámetros de la UI (igual que exportXLSX) ──────────────────
  const zonaVal  = parseInt(document.getElementById('zona').value);
  const sueloVal = document.getElementById('suelo').value;
  const U        = parseFloat(document.getElementById('uso').value);
  const R_base   = parseFloat(document.getElementById('sistema').value);
  const Ip       = parseFloat(document.getElementById('irreg_planta').value);
  const Ia       = parseFloat(document.getElementById('irreg_altura').value);
  const Ts       = normaVersion === '2026'
    ? (parseFloat(document.getElementById('ts_value')?.value) || 0) : 0;
  const pasoVal  = parseFloat(document.getElementById('paso').value);

  const p = resolveParams(normaVersion, zonaVal, sueloVal);
  if (!p) return;

  const { Z, S, Tp, Tl } = p;
  const applyIrr = ['2016','2018','2026'].includes(normaVersion);
  const IaEf = applyIrr ? Ia : 1.0;
  const IpEf = applyIrr ? Ip : 1.0;
  const R    = R_base * IaEf * IpEf;
  const SaMax = Z * U * 2.5 * S / R;

  // Filtrar datos al paso elegido (igual que exportXLSX)
  const datosFiltrados = datosEspectro.filter(d => {
    const m = Math.round(d.T / pasoVal);
    return Math.abs(d.T - m * pasoVal) < 1e-9;
  });

  // Payload compartido
  const ctx = { version: normaVersion, zonaVal, sueloVal, U, R_base, R, IaEf, IpEf,
                Z, S, Tp, Tl, Ts, SaMax, datos: datosFiltrados };

  // ── 2. Inicializar jsPDF (primera página portrait) ───────────────────────
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

  // ── 3. Portada (portrait, 900px) ─────────────────────────────────────────
  {
    const { dataUrl, w, h } = await capturarHtml(htmlPortada(ctx), 900);
    await agregarImagenPDF(pdf, dataUrl, w, h, 'portrait');
  }

  // ── 4. Parámetros sísmicos (portrait) ────────────────────────────────────
  {
    pdf.addPage([210, 297], 'portrait');
    const { dataUrl, w, h } = await capturarHtml(htmlParametros(ctx), 900);
    await agregarImagenPDF(pdf, dataUrl, w, h, 'portrait');
  }

  // ── 5. Fórmulas + Notas + Referencias (portrait) ─────────────────────────
  {
    pdf.addPage([210, 297], 'portrait');
    const { dataUrl, w, h } = await capturarHtml(htmlFormulas(ctx), 900);
    await agregarImagenPDF(pdf, dataUrl, w, h, 'portrait');
  }

  // ── 6. Tabla de espectro (portrait, puede multi-página) ──────────────────
  {
    pdf.addPage([210, 297], 'portrait');
    // Para tablas largas capturamos en un ancho más estrecho para legibilidad
    const { dataUrl, w, h } = await capturarHtml(htmlTablaEspectro(ctx), 700);
    await agregarImagenPDF(pdf, dataUrl, w, h, 'portrait');
  }

  // ── 7. Gráfico (landscape) ────────────────────────────────────────────────
  {
    pdf.addPage([297, 210], 'landscape');
    // Ancho mayor para aprovechar la orientación
    const { dataUrl, w, h } = await capturarHtml(htmlGrafico(ctx), 1100);
    await agregarImagenPDF(pdf, dataUrl, w, h, 'landscape');
  }

  // ── 8. Guardar ────────────────────────────────────────────────────────────
  const fecha = new Date().toISOString().slice(0, 10);
  pdf.save(`Espectro_E030-${normaVersion}_Z${zonaVal}${sueloVal}_${fecha}.pdf`);
}

export { exportPDF };