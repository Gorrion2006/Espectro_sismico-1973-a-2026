import UBIGEO_DATA from "./ubigeo.js";
import { exportTXT }  from "./exportTXT.js";
import { exportXLSX } from './exportXLSX.js';
import { exportPDF }  from './exportPDF.js';

// ══════════════════════════════════════════════════
//  PARÁMETROS POR VERSIÓN DE NORMA
// ══════════════════════════════════════════════════

let normaVersion = '2018';

const ZONA_Z_1977 = { 1: 0.40, 2: 0.70, 3: 1.00 };
const SUELO_PARAMS_1977 = {
  S1: { S: 1.0, Tp: 0.40 },
  S2: { S: 1.2, Tp: 0.60 },
  S3: { S: 1.5, Tp: 0.90 },
};

const ZONA_Z_1997 = { 1: 0.15, 2: 0.30, 3: 0.40 };
const SUELO_PARAMS_1997 = {
  S1: { S: 1.0, Tp: 0.4 },
  S2: { S: 1.2, Tp: 0.6 },
  S3: { S: 1.4, Tp: 0.9 },
  S4: { S: 1.4, Tp: 0.9 },
};

const ZONA_Z_2003 = { 1: 0.15, 2: 0.30, 3: 0.40 };
const SUELO_PARAMS_2003 = {
  S1: { S: 1.0, Tp: 0.4 },
  S2: { S: 1.2, Tp: 0.6 },
  S3: { S: 1.4, Tp: 0.9 },
  S4: { S: 1.4, Tp: 0.9 },
};

const ZONA_Z_2016 = { 1: 0.10, 2: 0.25, 3: 0.35, 4: 0.45 };
const FACTOR_S_2016 = {
  Z4_S0: 0.80, Z4_S1: 1.00, Z4_S2: 1.05, Z4_S3: 1.10,
  Z3_S0: 0.80, Z3_S1: 1.00, Z3_S2: 1.15, Z3_S3: 1.20,
  Z2_S0: 0.80, Z2_S1: 1.00, Z2_S2: 1.20, Z2_S3: 1.40,
  Z1_S0: 0.80, Z1_S1: 1.00, Z1_S2: 1.60, Z1_S3: 2.00,
};
const SUELO_PARAMS_2016 = {
  S0: { Tp: 0.3, Tl: 3.0 },
  S1: { Tp: 0.4, Tl: 2.5 },
  S2: { Tp: 0.6, Tl: 2.0 },
  S3: { Tp: 1.0, Tl: 1.6 },
};

const ZONA_Z_2026 = { 1: 0.10, 2: 0.25, 3: 0.35, 4: 0.45 };
const FACTOR_S_2026 = {
  Z4_S0: 0.80, Z4_S1: 1.00, Z4_S2: 1.05, Z4_S3: 1.10, Z4_S4: 1.10, Z4_S5: 1.10,
  Z3_S0: 0.80, Z3_S1: 1.00, Z3_S2: 1.15, Z3_S3: 1.20, Z3_S4: 1.20, Z3_S5: 1.20,
  Z2_S0: 0.80, Z2_S1: 1.00, Z2_S2: 1.20, Z2_S3: 1.40, Z2_S4: 1.40, Z2_S5: 1.40,
  Z1_S0: 0.80, Z1_S1: 1.00, Z1_S2: 1.60, Z1_S3: 2.00, Z1_S4: 2.00, Z1_S5: 2.00,
};
const SUELO_PARAMS_2026 = {
  S0: { Tp: 0.3, Tl: 3.0 },
  S1: { Tp: 0.4, Tl: 2.5 },
  S2: { Tp: 0.6, Tl: 2.0 },
  S3: { Tp: 1.0, Tl: 1.6 },
  S4: { Tp: 1.0, Tl: 1.6 },
  S5: { Tp: 1.0, Tl: 1.6 },
};

// Color por versión (para gráfico y acentos)
const VER_COLOR = {
  '1977': '#f72585',
  '1997': '#ffd166',
  '2003': '#ff6b35',
  '2016': '#c77dff',
  '2018': '#00e5ff',
  '2026': '#00ff88',
};

// ════════════════════════════════════════════════════════
//  UBIGEO — SELECTORES EN CASCADA
// ════════════════════════════════════════════════════════

let ubigeoSeleccionado = null;

function cap(str = '') {
  return str.charAt(0) + str.slice(1).toLowerCase();
}

function makeOpt(val, text, selected = false) {
  const o = document.createElement('option');
  o.value = val;
  o.textContent = text;
  if (selected) o.selected = true;
  return o;
}

function initSelects() {
  const depaSelect = document.getElementById('zonaDepartamento');
  const provSelect = document.getElementById('zonaProvincia');
  const distSelect = document.getElementById('zonaDistrito');

  // Poblar departamentos
  depaSelect.appendChild(makeOpt('', '— Departamento —', true));
  UBIGEO_DATA.forEach((dep, i) => depaSelect.appendChild(makeOpt(i, dep.name)));

  provSelect.appendChild(makeOpt('', '— Provincia —', true));
  provSelect.disabled = true;

  distSelect.appendChild(makeOpt('', '— Distrito —', true));
  distSelect.disabled = true;

  depaSelect.addEventListener('change', function () {
    const depIdx = parseInt(this.value);
    provSelect.innerHTML = '';
    distSelect.innerHTML = '';
    distSelect.disabled  = true;

    if (isNaN(depIdx)) {
      provSelect.disabled = true;
      provSelect.appendChild(makeOpt('', '— Provincia —', true));
      distSelect.appendChild(makeOpt('', '— Distrito —', true));
      return;
    }

    provSelect.disabled = false;
    provSelect.appendChild(makeOpt('', '— Provincia —', true));
    UBIGEO_DATA[depIdx].provinces.forEach((prov, i) =>
      provSelect.appendChild(makeOpt(i, prov.name)));

    distSelect.appendChild(makeOpt('', '— Distrito —', true));
  });

  provSelect.addEventListener('change', function () {
    const depIdx  = parseInt(depaSelect.value);
    const provIdx = parseInt(this.value);
    distSelect.innerHTML = '';

    if (isNaN(provIdx)) {
      distSelect.disabled = true;
      distSelect.appendChild(makeOpt('', '— Distrito —', true));
      return;
    }

    distSelect.disabled = false;
    distSelect.appendChild(makeOpt('', '— Distrito —', true));
    UBIGEO_DATA[depIdx].provinces[provIdx].districts.forEach((dist, i) =>
      distSelect.appendChild(makeOpt(i, dist.name)));
  });

  distSelect.addEventListener('change', function () {
    const depIdx  = parseInt(depaSelect.value);
    const provIdx = parseInt(provSelect.value);
    const distIdx = parseInt(this.value);
    if (isNaN(distIdx)) return;

    const dist = UBIGEO_DATA[depIdx].provinces[provIdx].districts[distIdx];
    const zone = parseInt(dist.zone);

    ubigeoSeleccionado = {
      dep:  UBIGEO_DATA[depIdx].name,
      prov: UBIGEO_DATA[depIdx].provinces[provIdx].name,
      dist: dist.name,
      zone,
    };

    mostrarTagUbigeo(zone, dist.name, UBIGEO_DATA[depIdx].provinces[provIdx].name);
    applyZonaFromUbigeo(zone);
  });
}

// Colores de zona como clases de texto Tailwind
const ZONA_TEXT_COLOR = {
  1: 'text-pink-500',
  2: 'text-yellow-400',
  3: 'text-orange-500',
  4: 'text-emerald-400',
};
// Colores de zona como clases de borde Tailwind
const ZONA_BORDER_COLOR = {
  1: 'border-pink-500',
  2: 'border-yellow-400',
  3: 'border-orange-500',
  4: 'border-emerald-400',
};

function mostrarTagUbigeo(zone, distNombre, provNombre) {
  const tag = document.getElementById('ubigeo-tag');
  const tc  = ZONA_TEXT_COLOR[zone]   || 'text-emerald-400';
  const bc  = ZONA_BORDER_COLOR[zone] || 'border-emerald-400';

  // Quitar clases de borde anteriores
  tag.className = tag.className
    .replace(/border-\S+/g, '')
    .replace(/hidden/g, '')
    .trim();

  tag.classList.remove('hidden');
  tag.classList.add(bc);

  tag.innerHTML =
    `<span class="font-bold ${tc}">✓ Zona ${zone} asignada</span>` +
    `<span class="text-gray-500 dark:text-gray-400 text-[0.68rem]">&nbsp;— ${cap(distNombre)}, ${cap(provNombre)}</span>`;
}

function applyZonaFromUbigeo(zone) {
  const zonaSelect   = document.getElementById('zona');
  const zonaEfectiva = (['1977', '1997', '2003'].includes(normaVersion) && zone === 4) ? 3 : zone;

  for (const opt of zonaSelect.options) {
    if (parseInt(opt.value) === zonaEfectiva) { opt.selected = true; break; }
  }

  // Flash verde en el select de zona
  zonaSelect.classList.add('border-emerald-400', 'ring-1', 'ring-emerald-400/30');
  setTimeout(() => {
    zonaSelect.classList.remove('border-emerald-400', 'ring-1', 'ring-emerald-400/30');
  }, 1200);
}

// ════════════════════════════════════════════════════════
//  SELECTOR DE VERSIÓN
// ════════════════════════════════════════════════════════

// Clases base y activas para los botones de versión
const VER_BTN_BASE   = 'ver-btn rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 py-2 text-center text-xs font-medium text-gray-700 dark:text-gray-300 transition hover:border-red-600 hover:bg-red-600 hover:text-white';
const VER_BTN_ACTIVE = 'border-red-600 bg-red-600 text-white';
const VER_BTN_INACTIVE = 'border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300';

function setVersion(v) {
  normaVersion = v;

  // Actualizar estilos de botones de versión
  document.querySelectorAll('.ver-btn').forEach(b => {
    const isActive = b.dataset.v === v;
    // Remover clases activas/inactivas y aplicar las correctas
    b.classList.remove('border-red-600', 'bg-red-600', 'text-white',
      'border-gray-300', 'dark:border-gray-700', 'bg-white', 'dark:bg-gray-800',
      'text-gray-700', 'dark:text-gray-300');
    if (isActive) {
      b.classList.add('border-red-600', 'bg-red-600', 'text-white');
    } else {
      b.classList.add('border-gray-300', 'bg-white', 'text-gray-700',
        'dark:border-gray-700', 'dark:bg-gray-800', 'dark:text-gray-300');
    }
  });

  // Mostrar/ocultar campo Ts (solo 2026)
  const tsGroup = document.getElementById('ts-group');
  tsGroup.classList.toggle('hidden', v !== '2026');

  // Resetear ubigeo tag si cambia versión
  ubigeoSeleccionado = null;
  document.getElementById('ubigeo-tag').classList.add('hidden');

  // Repoblar selects de zona y suelo
  const zonaSelect  = document.getElementById('zona');
  const sueloSelect = document.getElementById('suelo');
  zonaSelect.innerHTML  = '';
  sueloSelect.innerHTML = '';

  if (v === '1977') {
    [[1,'Z = 0.40'],[2,'Z = 0.70'],[3,'Z = 1.00']].forEach(([val, lbl]) =>
      zonaSelect.appendChild(makeOpt(val, `Zona ${val} — ${lbl}`, val === 3)));
    const lbl = { S1:'Roca o suelo rígido', S2:'Suelos intermedios', S3:'Suelos blandos' };
    ['S1','S2','S3'].forEach(s =>
      sueloSelect.appendChild(makeOpt(s, `${s} — ${lbl[s]}`, s === 'S2')));

  } else if (v === '1997' || v === '2003') {
    [[1,'Z = 0.15'],[2,'Z = 0.30'],[3,'Z = 0.40']].forEach(([val, lbl]) =>
      zonaSelect.appendChild(makeOpt(val, `Zona ${val} — ${lbl}`, val === 3)));
    const lbl = { S1:'Roca o suelo muy rígido', S2:'Suelos intermedios', S3:'Suelos blandos', S4:'Condiciones excepcionales' };
    ['S1','S2','S3','S4'].forEach(s =>
      sueloSelect.appendChild(makeOpt(s, `${s} — ${lbl[s]}`, s === 'S2')));

  } else {
    [[1,'Z = 0.10'],[2,'Z = 0.25'],[3,'Z = 0.35'],[4,'Z = 0.45']].forEach(([val, lbl]) =>
      zonaSelect.appendChild(makeOpt(val, `Zona ${val} — ${lbl}`, val === 4)));
    const suelos = v === '2026' ? ['S0','S1','S2','S3','S4','S5'] : ['S0','S1','S2','S3'];
    const lbl = {
      S0:'Roca dura', S1:'Roca o suelo muy rígido', S2:'Suelos rígidos',
      S3:'Suelos intermedios', S4:'Suelos blandos', S5:'Excepcional (estudio especial)',
    };
    suelos.forEach(s =>
      sueloSelect.appendChild(makeOpt(s, `${s} — ${lbl[s]}`, s === 'S2')));
  }

  // Re-aplicar zona del ubigeo seleccionado si existe
  if (ubigeoSeleccionado) applyZonaFromUbigeo(ubigeoSeleccionado.zone);
}

// ════════════════════════════════════════════════════════
//  FACTOR C
// ════════════════════════════════════════════════════════

function factorC(T, Tp, Tl, version) {
  if (version === '1977') {
    if (T === 0) return 2.5;
    return Math.min(2.5, Math.pow(Tp / T, 2 / 3));
  }
  if (version === '1997' || version === '2003') {
    return T < Tp ? 2.5 : 2.5 * (Tp / T);
  }
  if (version === '2016' || version === '2018') {
    if (T <= Tp) return 2.5;
    if (T <= Tl) return 2.5 * (Tp / T);
    return 2.5 * (Tp * Tl) / (T * T);
  }
  // 2026: rampa inicial Art. 18
  if (T < 0.2 * Tp) return 1 + 7.5 * (T / Tp);
  if (T <= Tp)      return 2.5;
  if (T <= Tl)      return 2.5 * (Tp / T);
  return 2.5 * (Tp * Tl) / (T * T);
}

// ════════════════════════════════════════════════════════
//  RESOLVER PARÁMETROS S, Tp, Tl
// ════════════════════════════════════════════════════════

function resolveParams(version, zonaVal, sueloVal) {
  if (version === '1977') {
    const sp = SUELO_PARAMS_1977[sueloVal];
    return sp ? { Z: ZONA_Z_1977[zonaVal], S: sp.S, Tp: sp.Tp, Tl: null } : null;
  }
  if (version === '1997') {
    const sp = SUELO_PARAMS_1997[sueloVal];
    return sp ? { Z: ZONA_Z_1997[zonaVal], S: sp.S, Tp: sp.Tp, Tl: null } : null;
  }
  if (version === '2003') {
    const sp = SUELO_PARAMS_2003[sueloVal];
    return sp ? { Z: ZONA_Z_2003[zonaVal], S: sp.S, Tp: sp.Tp, Tl: null } : null;
  }
  if (version === '2016' || version === '2018') {
    const key = `Z${zonaVal}_${sueloVal}`;
    const S   = FACTOR_S_2016[key];
    const sp  = SUELO_PARAMS_2016[sueloVal];
    return (S && sp) ? { Z: ZONA_Z_2016[zonaVal], S, Tp: sp.Tp, Tl: sp.Tl } : null;
  }
  if (version === '2026') {
    const key = `Z${zonaVal}_${sueloVal}`;
    const S   = FACTOR_S_2026[key];
    const sp  = SUELO_PARAMS_2026[sueloVal];
    return (S && sp) ? { Z: ZONA_Z_2026[zonaVal], S, Tp: sp.Tp, Tl: sp.Tl } : null;
  }
  return null;
}

// ════════════════════════════════════════════════════════
//  CALCULAR ESPECTRO
// ════════════════════════════════════════════════════════

let chartInstance = null;
let datosEspectro = [];

function calcular() {
  const zonaVal  = parseInt(document.getElementById('zona').value);
  const sueloVal = document.getElementById('suelo').value;
  const U        = parseFloat(document.getElementById('uso').value);
  const R_base   = parseFloat(document.getElementById('sistema').value);
  const Ip       = parseFloat(document.getElementById('irreg_planta').value);
  const Ia       = parseFloat(document.getElementById('irreg_altura').value);
  const Tmax     = parseFloat(document.getElementById('tmax').value);
  const paso     = parseFloat(document.getElementById('paso').value);
  const Ts       = normaVersion === '2026'
    ? (parseFloat(document.getElementById('ts_value').value) || 0)
    : 0;

  const errEl = document.getElementById('error-msg');
  if (isNaN(Tmax) || isNaN(paso) || paso <= 0 || Tmax <= 0) {
    errEl.classList.remove('hidden');
    errEl.textContent = '⚠ Verifique los parámetros ingresados';
    return;
  }
  errEl.classList.add('hidden');

  let sueloS5Advertencia = false;
  if (normaVersion === '2026' && sueloVal === 'S5') {
    sueloS5Advertencia = true;
    errEl.textContent = '⚠ S5 (Excepcional): Requiere estudio geotécnico. Continuar solo con fines informativos.';
    errEl.classList.remove('hidden');
    alert(errEl.textContent);
  }

  let p = resolveParams(normaVersion, zonaVal, sueloVal);
  if (!p) { errEl.classList.remove('hidden'); return; }

  const { Tp } = p;
  let sueloEfectivo   = sueloVal;
  let sueloModificado = false;
  const sueloOriginal = sueloVal;

  if (normaVersion === '2026' && Ts > 0 && Ts > 0.65 * Tp && sueloVal !== 'S5') {
    const degradacion = { S0:'S1', S1:'S2', S2:'S3', S3:'S4', S4:'S5' };
    if (degradacion[sueloVal]) {
      sueloEfectivo   = degradacion[sueloVal];
      sueloModificado = true;
      p = resolveParams(normaVersion, zonaVal, sueloEfectivo);
      if (!p) { errEl.classList.remove('hidden'); return; }
    }
  }

  const { Z: Z_eff, S: S_eff, Tp: Tp_eff, Tl: Tl_eff } = p;

  const IaEf = ['2016','2018','2026'].includes(normaVersion) ? Ia : 1.0;
  const IpEf = ['2016','2018','2026'].includes(normaVersion) ? Ip : 1.0;
  const R    = R_base * IaEf * IpEf;

  // Construir array de periodos
  const puntos = new Set();
  for (let t = 0; t <= Tmax + 1e-9; t = Math.round((t + paso) * 1000) / 1000) puntos.add(t);
  const puntosExtra = normaVersion === '2026'
    ? [0, 0.2 * Tp_eff, Tp_eff, Tl_eff]
    : [0, Tp_eff, Tl_eff];
  puntosExtra.forEach(t => {
    if (t !== null && t !== undefined && t <= Tmax) puntos.add(t);
  });
  const T_arr = Array.from(puntos).sort((a, b) => a - b);

  datosEspectro = T_arr.map(T => {
    const C  = factorC(T, Tp_eff, Tl_eff, normaVersion);
    const Sa = (Z_eff * U * C * S_eff) / R;
    return { T, C: +C.toFixed(4), Sa: +Sa.toFixed(5), SaMS2: +(Sa * 9.81).toFixed(4) };
  });

  renderChart(datosEspectro, Tp_eff, Tl_eff);
  renderTable(datosEspectro);
  renderParams(
    Z_eff, U, S_eff, R, R_base, IaEf, IpEf, Tp_eff, Tl_eff,
    zonaVal, sueloVal, Ts,
    sueloModificado, sueloOriginal, sueloEfectivo, sueloS5Advertencia
  );
}

// ════════════════════════════════════════════════════════
//  RENDERIZADO — GRÁFICO
// ════════════════════════════════════════════════════════

function hexRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function renderChart(datos, Tp, Tl) {
  document.getElementById('empty-state').classList.add('hidden');
  const canvas = document.getElementById('myChart');
  canvas.classList.remove('hidden');

  const color  = VER_COLOR[normaVersion] || '#00ff88';
  const points = datos.map(d => ({ x: d.T, y: d.Sa }));

  if (chartInstance) chartInstance.destroy();
  const ctx  = canvas.getContext('2d');
  const grad = ctx.createLinearGradient(0, 0, 0, 400);
  grad.addColorStop(0, hexRgba(color, 0.22));
  grad.addColorStop(1, hexRgba(color, 0.01));

  chartInstance = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Sa (g)',
        data: points,
        showLine: true,
        borderColor: color,
        backgroundColor: grad,
        borderWidth: 2.5,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: color,
        fill: true,
        tension: 0,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 700, easing: 'easeInOutQuart' },
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1f2937',   // gray-800
          borderColor: '#374151',        // gray-700
          borderWidth: 1,
          titleColor: color,
          bodyColor: '#d1d5db',          // gray-300
          titleFont: { size: 11 },
          bodyFont:  { size: 11 },
          callbacks: {
            title: items => `T = ${items[0].parsed.x.toFixed(3)} s`,
            label: item  => `Sa = ${item.parsed.y.toFixed(4)} g`,
          }
        },
      },
      scales: {
        x: {
          type: 'linear',
          min: 0,
          title: {
            display: true,
            text: 'PERIODO T (s)',
            color: '#6b7280',   // gray-500
            font: { size: 10 },
            padding: { top: 8 },
          },
          ticks: { color: '#6b7280', font: { size: 10 }, callback: v => v.toFixed(1) },
          grid:  { color: 'rgba(75,85,99,0.4)' },   // gray-600/40
          border: { color: '#374151' },
        },
        y: {
          min: 0,
          title: {
            display: true,
            text: 'Sa (g)',
            color: '#6b7280',
            font: { size: 10 },
            padding: { bottom: 8 },
          },
          ticks: { color: '#6b7280', font: { size: 10 }, callback: v => v.toFixed(3) },
          grid:  { color: 'rgba(75,85,99,0.4)' },
          border: { color: '#374151' },
          beginAtZero: true,
        }
      }
    }
  });
}

// ════════════════════════════════════════════════════════
//  RENDERIZADO — PARÁMETROS (params-out)
// ════════════════════════════════════════════════════════

// Clases Tailwind reutilizables para las tarjetas de parámetros
const CARD_BASE   = 'rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-3 py-2 flex flex-col gap-0.5';
const CARD_HL     = 'rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 px-3 py-2 flex flex-col gap-0.5';
const LABEL_CLS   = 'text-[0.65rem] font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400';
const VALUE_CLS   = 'text-base font-bold text-gray-900 dark:text-white font-mono';
const VALUE_SM    = 'text-xs text-gray-500 dark:text-gray-400 font-mono';

function paramCard(label, value, highlight = false, fullRow = false, customStyle = '') {
  const base = highlight ? CARD_HL : CARD_BASE;
  const col  = fullRow ? ' col-span-2' : '';
  const style = customStyle ? ` style="${customStyle}"` : '';
  return `<div class="${base}${col}"${style}>
    <span class="${LABEL_CLS}">${label}</span>
    <span class="${VALUE_CLS}">${value}</span>
  </div>`;
}

function renderParams(Z, U, S, R, R0, Ia, Ip, Tp, Tl, zona, suelo,
                      Ts, sueloModificado, sueloOriginal, sueloEfectivo, sueloS5Adv) {
  const el    = document.getElementById('params-out');
  el.classList.remove('hidden');

  const SaMax = (Z * U * 2.5 * S / R).toFixed(4);
  const color = VER_COLOR[normaVersion] || '#00ff88';

  const tlHtml = Tl !== null
    ? paramCard('TL', `${Tl.toFixed(2)} <span class="${VALUE_SM}">s</span>`)
    : paramCard('TL', '<span class="text-xs text-gray-400 font-mono">N/A</span>');

  const tsHtml = (normaVersion === '2026' && Ts > 0)
    ? paramCard('Ts (entrada)', `${Ts.toFixed(2)} <span class="${VALUE_SM}">s</span>`)
    : '';

  const irredHtml = ['2016','2018','2026'].includes(normaVersion)
    ? paramCard('Ia × Ip', (Ia * Ip).toFixed(2))
    : paramCard('Ia × Ip', '<span class="text-xs text-gray-400 font-mono">N/A pre-2016</span>');

  const espType = ['1977','1997','2003'].includes(normaVersion)
    ? '2 tramos'
    : '3 tramos (con TL)';

  // ── Tarjeta de norma activa ──
  const normaCard = `
    <div class="col-span-2 rounded-lg border px-3 py-2 flex flex-col gap-0.5"
      style="border-color:${color}33;background:${color}0d">
      <span class="${LABEL_CLS}">Norma activa</span>
      <span class="text-sm font-bold font-mono" style="color:${color}">E.030 — ${normaVersion}</span>
    </div>`;

  // ── Ubicación ubigeo ──
  const ubigeoHtml = ubigeoSeleccionado
    ? `<div class="col-span-2 rounded-lg border border-emerald-400/30 bg-emerald-400/5 px-3 py-2 flex flex-col gap-0.5">
        <span class="${LABEL_CLS}">📍 Ubicación</span>
        <span class="text-xs font-mono text-gray-700 dark:text-gray-300">
          ${cap(ubigeoSeleccionado.dist)}, ${cap(ubigeoSeleccionado.prov)}, ${cap(ubigeoSeleccionado.dep)}
        </span>
      </div>`
    : '';

  // ── Degradación de suelo 2026 ──
  const tsValidation = (normaVersion === '2026' && sueloModificado)
    ? `<div class="col-span-2 rounded-lg border border-orange-400/40 bg-orange-400/10 px-3 py-2 flex flex-col gap-1">
        <span class="${LABEL_CLS} text-orange-500">🔄 Condición Ts &gt; 0.65×Tp activada</span>
        <span class="text-xs font-mono text-gray-700 dark:text-gray-300">
          Perfil original: <strong>${sueloOriginal}</strong> → Perfil aplicado: <strong>${sueloEfectivo}</strong>
        </span>
      </div>`
    : '';

  // ── Bidireccional 2026 ──
  const bidireccional = normaVersion === '2026'
    ? `<div class="col-span-2 rounded-lg border border-sky-400/30 bg-sky-400/5 px-3 py-2 flex flex-col gap-1">
        <span class="${LABEL_CLS}">📐 Análisis Bidireccional (Art. 28)</span>
        <span class="text-xs text-gray-500 dark:text-gray-400 font-mono leading-relaxed">
          Cat. A1/A2: 100% en ambas direcciones o 75%–75%<br>
          Cat. B: combinaciones según Art. 28
        </span>
      </div>`
    : '';

  // ── Verificaciones 2026 ──
  const verif2026 = normaVersion === '2026'
    ? `<div class="col-span-2 rounded-lg border border-orange-300/30 bg-orange-400/5 px-3 py-2 flex flex-col gap-1">
        <span class="${LABEL_CLS} text-orange-500">✓ Verificaciones E.030-2026</span>
        <span class="text-xs text-gray-500 dark:text-gray-400 font-mono leading-relaxed">
          • Suelo clasificado por profesional (Vs30, N60, Su)<br>
          • Cat. A/B en Z4: Ts por microzonificación<br>
          • Ts &gt; 0.65×Tp: perfil degradado automáticamente<br>
          • Coeficientes R: verificar Tabla N° 10
        </span>
      </div>`
    : '';

  // ── Advertencia S5 ──
  const s5Warn = sueloS5Adv
    ? `<div class="col-span-2 rounded-lg border border-pink-500/40 bg-pink-500/10 px-3 py-2 flex flex-col gap-1">
        <span class="${LABEL_CLS} text-pink-500">⚠ Suelo S5 — Excepcional</span>
        <span class="text-xs text-gray-700 dark:text-gray-300 font-mono leading-relaxed">
          Prohibido construir sin mejora de suelo. Requiere estudio geotécnico especializado (Anexo III).
        </span>
      </div>`
    : '';

  el.innerHTML = `
    ${normaCard}
    ${ubigeoHtml}
    ${paramCard(`Z — Zona ${zona}`, `${Z.toFixed(2)} <span class="${VALUE_SM}">g</span>`, true)}
    ${paramCard(`S — ${sueloEfectivo}`, S.toFixed(2), true)}
    ${paramCard('U — Uso', U.toFixed(1))}
    ${paramCard('R efectivo', R.toFixed(2))}
    ${paramCard('Tp', `${Tp.toFixed(2)} <span class="${VALUE_SM}">s</span>`)}
    ${tlHtml}
    ${tsHtml}
    ${irredHtml}
    ${paramCard('Espectro', `<span class="text-xs font-mono text-gray-600 dark:text-gray-400">${espType}</span>`)}
    <div class="col-span-2 rounded-lg border border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20 px-3 py-2 flex flex-col gap-0.5">
      <span class="${LABEL_CLS}">Sa máx. (T ≤ Tp)</span>
      <span class="${VALUE_CLS}">${SaMax} <span class="${VALUE_SM}">g = ${(parseFloat(SaMax) * 9.81).toFixed(3)} m/s²</span></span>
    </div>
    ${tsValidation}
    ${bidireccional}
    ${verif2026}
    ${s5Warn}`;
}

// ════════════════════════════════════════════════════════
//  RENDERIZADO — TABLA
// ════════════════════════════════════════════════════════

function renderTable(datos) {
  const panel = document.getElementById('tabla-panel');
  panel.classList.remove('hidden');

  const tbody   = document.getElementById('tabla-body');
  const pasoVal = parseFloat(document.getElementById('paso').value);

  const filas = datos.filter(d => {
    const multiple = Math.round(d.T / pasoVal);
    return Math.abs(d.T - multiple * pasoVal) < 1e-9;
  });

  // Clases de celda Tailwind
  const tdBase = 'px-4 py-1.5 text-xs font-mono';
  const tdNum  = 'px-4 py-1.5 text-xs font-mono text-right tabular-nums';

  tbody.innerHTML = filas.map((d, i) => {
    const rowBg = i % 2 === 0
      ? 'bg-white dark:bg-gray-800'
      : 'bg-gray-50 dark:bg-gray-900/50';
    return `<tr class="${rowBg} border-b border-gray-100 dark:border-gray-700/50">
      <td class="${tdBase}">${d.T.toFixed(3)}</td>
      <td class="${tdNum}">${d.Sa.toFixed(5)}</td>
      <td class="${tdNum}">${d.C.toFixed(4)}</td>
      <td class="${tdNum}">${d.SaMS2.toFixed(4)}</td>
    </tr>`;
  }).join('');
}

// ════════════════════════════════════════════════════════
//  INICIALIZAR
// ════════════════════════════════════════════════════════

initSelects();
setVersion('2026');

// Listeners de botones de versión
['1977','1997','2003','2016','2018','2026'].forEach(v =>
  document.getElementById('btn' + v)
    .addEventListener('click', () => setVersion(v))
);

// Botón generar
document.getElementById('bot_accion')
  .addEventListener('click', () => {
    calcular();
    document.getElementById('tit_diagrama')
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

// Botones de exportación
document.getElementById('btn-exportTXT') .addEventListener('click', () => exportTXT());
document.getElementById('btn-exportXLSX').addEventListener('click', () => exportXLSX());
document.getElementById('btn-exportPDF') .addEventListener('click', () => exportPDF());

// ── EXPORTS ──────────────────────────────────────────
export { datosEspectro, normaVersion, resolveParams };