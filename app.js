import UBIGEO_DATA from "./ubigeo.js";

// ══════════════════════════════════════════════════
//  PARAMETROS POR VERSIÓN DE NORMA
// ══════════════════════════════════════════════════

let normaVersion = '2018';

// ── RNC 1977 ──────────────────────────────────────────
const ZONA_Z_1977 = { 1: 0.40, 2: 0.70, 3: 1.00 };
const SUELO_PARAMS_1977 = {
  S1: { S: 1.0, Tp: 0.40 },
  S2: { S: 1.2, Tp: 0.60 },
  S3: { S: 1.5, Tp: 0.90 },
};

// ── E.030 1997 ──────────────────────────────────────────
const ZONA_Z_1997 = { 1: 0.15, 2: 0.30, 3: 0.40 };
const SUELO_PARAMS_1997 = {
  S1: { S: 1.0, Tp: 0.4 },
  S2: { S: 1.2, Tp: 0.6 },
  S3: { S: 1.4, Tp: 0.9 },
  S4: { S: 1.4, Tp: 0.9 },
};

// ── E.030 2003 ──────────────────────────────────────────
const ZONA_Z_2003 = { 1: 0.15, 2: 0.30, 3: 0.40 };
const SUELO_PARAMS_2003 = {
  S1: { S: 1.0, Tp: 0.4 },
  S2: { S: 1.2, Tp: 0.6 },
  S3: { S: 1.4, Tp: 0.9 },
  S4: { S: 1.4, Tp: 0.9 },
};

// ── E.030 2016 / 2018 ──────────────────────────────────
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

// ── E.030 2026 ──────────────────────────────────────────
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



const VER_COLOR = {
  '1977': '#f72585',
  '1997': '#ffd166',
  '2003': '#ff6b35',
  '2016': '#c77dff',
  '2018': '#00e5ff',
  '2026': '#00ff88',
};

// ════════════════════════════════════════════════════════
//  UBIGEO — BUSCADOR
// ════════════════════════════════════════════════════════

let ubigeoSeleccionado = null;
let ubigeoHighlight    = -1;
let ubigeoResultados   = [];

function normalizar(str = "") {
  return str.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function cap(str) {
  return str.charAt(0) + str.slice(1).toLowerCase();
}

function posicionarDropdown() {
  const input = document.getElementById('ubigeo-input');
  const dd    = document.getElementById('ubigeo-dropdown');
  const rect  = input.getBoundingClientRect();
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
  dd.style.top   = (rect.bottom + scrollY) + 'px';
  dd.style.left  = (rect.left   + scrollX) + 'px';
  dd.style.width = rect.width + 'px';
}

function buscarUbigeo(q) {
  const exactas = [];
  const empieza = [];
  const contiene = [];
  
  const qn = normalizar(q);

  
  for (const dep of UBIGEO_DATA) {

    for (const prov of dep.provinces) {

      for (const dist of prov.districts) {

        const distrito = normalizar(dist.name);
        const provincia = normalizar(prov.name);
        const departamento = normalizar(dep.name);

        const item = {
          departamento: dep.name,
          provincia: prov.name,
          distrito: dist.name,
          zone: parseInt(dist.zone),      // <-- nuevo
          zFactor: dist.zFactor           // <-- nuevo
        };

        if (distrito === qn) {
          exactas.push(item);
          continue;
        }

        if (
          distrito.startsWith(qn) ||
          provincia.startsWith(qn) ||
          departamento.startsWith(qn)
        ) {
          if (empieza.length < 50) empieza.push(item);
          continue;
        }

        if (
          distrito.includes(qn) ||
          provincia.includes(qn) ||
          departamento.includes(qn)
        ) {
          if (contiene.length < 50) contiene.push(item);
        }
      }
    }
  }

  return [...exactas, ...empieza, ...contiene].slice(0, 12);
}


function renderDropdown() {
  const dd = document.getElementById('ubigeo-dropdown');
  if (!ubigeoResultados.length) {
    dd.innerHTML = '<div class="ubigeo-no-result">Sin resultados</div>';
    dd.style.display = 'block';
    return;
  }
  const zonaColors = { 1: 'var(--accent5)', 2: 'var(--accent3)', 3: 'var(--accent4)', 4: 'var(--accent6)' };
  dd.innerHTML = ubigeoResultados.map((e, i) => {
    const zc = zonaColors[e.zone] || 'var(--accent)';
    return `<div class="ubigeo-item${i === ubigeoHighlight ? ' highlighted' : ''}" data-idx="${i}">
      <div class="ubigeo-item-loc">
        <span class="ubigeo-dist">${cap(e.distrito)}</span>
        <span class="ubigeo-path">${cap(e.provincia)} · ${cap(e.departamento)}</span>
      </div>
      <div class="ubigeo-zona-badge" style="border-color:${zc};color:${zc}">Z${e.zone}</div>
    </div>`;
  }).join('');
  dd.style.display = 'block';
}

function seleccionarUbigeo(idx) {
  const e = ubigeoResultados[idx];
  if (!e) return;
  ubigeoSeleccionado = { dep: e.departamento, prov: e.provincia, dist: e.distrito, zone: e.zone };

  document.getElementById('ubigeo-input').value = cap(e.distrito) + ', ' + cap(e.provincia) + ', ' + cap(e.departamento);
  document.getElementById('ubigeo-dropdown').style.display = 'none';
  document.getElementById('ubigeo-clear').style.display = 'flex';

  const zonaColors = { 1: 'var(--accent5)', 2: 'var(--accent3)', 3: 'var(--accent4)', 4: 'var(--accent6)' };
  const zc = zonaColors[e.zone] || 'var(--accent)';
  const tag = document.getElementById('ubigeo-tag');
  tag.style.display = 'flex';
  tag.style.borderColor = zc;
  tag.innerHTML = '<span style="color:' + zc + ';font-weight:700;">✓ Zona ' + e.zone + ' asignada</span>'
    + '<span style="color:var(--muted);font-size:0.68rem;">&nbsp;— ' + cap(e.distrito) + ', ' + cap(e.provincia) + '</span>';

  applyZonaFromUbigeo(e.zone);
}

function applyZonaFromUbigeo(zone) {
  const zonaSelect = document.getElementById('zona');
  const zonaEfectiva = (['1977','1997','2003'].includes(normaVersion) && zone === 4) ? 3 : zone;
  for (const opt of zonaSelect.options) {
    if (parseInt(opt.value) === zonaEfectiva) { opt.selected = true; break; }
  }
  zonaSelect.style.borderColor = 'var(--accent2)';
  zonaSelect.style.boxShadow   = '0 0 0 1px rgba(0,255,136,0.3)';
  setTimeout(() => { zonaSelect.style.borderColor = ''; zonaSelect.style.boxShadow = ''; }, 1200);
}

function clearUbigeo() {
  ubigeoSeleccionado = null;
  ubigeoResultados   = [];
  ubigeoHighlight    = -1;
  document.getElementById('ubigeo-input').value = '';
  document.getElementById('ubigeo-dropdown').style.display = 'none';
  document.getElementById('ubigeo-clear').style.display = 'none';
  document.getElementById('ubigeo-tag').style.display = 'none';
  document.getElementById('ubigeo-input').focus();
}

// Inicializar eventos del buscador al cargar el DOM


function initSelects() {
  const depaSelect = document.getElementById('zonaDepartamento');
  const provSelect = document.getElementById('zonaProvincia');
  const distSelect = document.getElementById('zonaDistrito');

  depaSelect.addEventListener('change', function () {
    const depIdx = parseInt(this.value);
    provSelect.innerHTML = '';
    distSelect.innerHTML = '';
    distSelect.disabled = true;

    if (isNaN(depIdx)) { provSelect.disabled = true; return; }

    provSelect.disabled = false;
    provSelect.appendChild(makeOpt('', '— Provincia —', true));
    UBIGEO_DATA[depIdx].provinces.forEach((prov, i) =>
      provSelect.appendChild(makeOpt(i, prov.name)));
  });

  provSelect.addEventListener('change', function () {
    const depIdx  = parseInt(depaSelect.value);
    const provIdx = parseInt(this.value);
    distSelect.innerHTML = '';

    if (isNaN(provIdx)) { distSelect.disabled = true; return; }

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

    // Mostrar tag igual que el buscador de texto
    ubigeoSeleccionado = {
      dep:  UBIGEO_DATA[depIdx].name,
      prov: UBIGEO_DATA[depIdx].provinces[provIdx].name,
      dist: dist.name,
      zone,
    };

    const zonaColors = { 1:'var(--accent5)', 2:'var(--accent3)', 3:'var(--accent4)', 4:'var(--accent6)' };
    const zc  = zonaColors[zone] || 'var(--accent)';
    const tag = document.getElementById('ubigeo-tag');
    tag.style.display     = 'flex';
    tag.style.borderColor = zc;
    tag.innerHTML =
      `<span style="color:${zc};font-weight:700;">✓ Zona ${zone} asignada</span>` +
      `<span style="color:var(--muted);font-size:0.68rem;">&nbsp;— ${cap(dist.name)}, ${cap(UBIGEO_DATA[depIdx].provinces[provIdx].name)}</span>`;

    applyZonaFromUbigeo(zone);
  });
}
// ════════════════════════════════════════════════════════
//  SELECTOR DE VERSIÓN
// ════════════════════════════════════════════════════════

function setVersion(v) {
  normaVersion = v;

  document.querySelectorAll('.ver-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('btn' + v).classList.add('active');

  const tsGroup       = document.getElementById('ts-group');
  const recomend      = document.getElementById('recomendaciones-2026');
  const is2026        = v === '2026';
  tsGroup.style.display       = is2026 ? 'block' : 'none';

  
  const distSelect = document.getElementById('zonaDistrito');
  const provSelect = document.getElementById('zonaProvincia');
  const depaSelect = document.getElementById('zonaDepartamento');
  
  const zonaSelect  = document.getElementById('zona');
  const sueloSelect = document.getElementById('suelo');
  
  distSelect.innerHTML  = '';
  provSelect.innerHTML  = '';
  depaSelect.innerHTML  = '';

  depaSelect.appendChild(makeOpt('', '— Departamento —', true));
  UBIGEO_DATA.forEach((dep, i) => depaSelect.appendChild(makeOpt(i, dep.name)));
  
  zonaSelect.innerHTML  = '';
  sueloSelect.innerHTML = '';

  if (v === '1977') {
    [[1,'Z = 0.40'],[2,'Z = 0.70'],[3,'Z = 1.00']].forEach(([val, lbl]) =>
      zonaSelect.appendChild(makeOpt(val, `Zona ${val} — ${lbl}`, val === 3)));
    const labels1977 = { S1:'Roca o suelo rígido', S2:'Suelos intermedios', S3:'Suelos blandos' };
    ['S1','S2','S3'].forEach(s =>
      sueloSelect.appendChild(makeOpt(s, `${s} — ${labels1977[s]}`, s === 'S2')));

  } else if (v === '1997' || v === '2003') {
    [[1,'Z = 0.15'],[2,'Z = 0.30'],[3,'Z = 0.40']].forEach(([val, lbl]) =>
      zonaSelect.appendChild(makeOpt(val, `Zona ${val} — ${lbl}`, val === 3)));
    const labels9703 = { S1:'Roca o suelo muy rígido', S2:'Suelos intermedios', S3:'Suelos blandos', S4:'Condiciones excepcionales' };
    ['S1','S2','S3','S4'].forEach(s =>
      sueloSelect.appendChild(makeOpt(s, `${s} — ${labels9703[s]}`, s === 'S2')));

  } else {
    [[1,'Z = 0.10'],[2,'Z = 0.25'],[3,'Z = 0.35'],[4,'Z = 0.45']].forEach(([val, lbl]) =>
      zonaSelect.appendChild(makeOpt(val, `Zona ${val} — ${lbl}`, val === 4)));
    const suelos = v === '2026' ? ['S0','S1','S2','S3','S4','S5'] : ['S0','S1','S2','S3'];
    const labelsNew = { S0:'Roca dura', S1:'Roca o suelo muy rígido', S2:'Suelos rígidos', S3:'Suelos intermedios', S4:'Suelos blandos', S5:'Excepcional (estudio especial)' };
    suelos.forEach(s =>
      sueloSelect.appendChild(makeOpt(s, `${s} — ${labelsNew[s]}`, s === 'S2')));

    }

  // Re-aplicar zona del ubigeo si hay uno seleccionado
}

function makeOpt(val, text, selected) {
  const o = document.createElement('option');
  o.value = val;
  o.textContent = text;
  if (selected) o.selected = true;
  return o;
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
    if (T <= Tp)  return 2.5;
    if (T <= Tl)  return 2.5 * (Tp / T);
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

let chartInstance  = null;
let datosEspectro  = [];

function calcular() {
  const zonaVal  = parseInt(document.getElementById('zona').value);
  const sueloVal = document.getElementById('suelo').value;
  const U        = parseFloat(document.getElementById('uso').value);
  const R_base   = parseFloat(document.getElementById('sistema').value);
  const Ip       = parseFloat(document.getElementById('irreg_planta').value);
  const Ia       = parseFloat(document.getElementById('irreg_altura').value);
  const Tmax     = parseFloat(document.getElementById('tmax').value);
  const paso     = parseFloat(document.getElementById('paso').value);
  const Ts       = normaVersion === '2026' ? (parseFloat(document.getElementById('ts_value').value) || 0) : 0;

  const errEl = document.getElementById('error-msg');
  if (isNaN(Tmax) || isNaN(paso) || paso <= 0 || Tmax <= 0) {
    errEl.style.display = 'block';
    return;
  }
  errEl.style.display = 'none';

  let sueloS5Advertencia = false;
  if (normaVersion === '2026' && sueloVal === 'S5') {
    sueloS5Advertencia = true;
    errEl.innerHTML = '⚠ S5 (Excepcional): Requiere estudio geotécnico. Continuar solo con fines informativos.';
    errEl.style.display = 'block';
    alert(errEl.innerHTML);
  }

  let p = resolveParams(normaVersion, zonaVal, sueloVal);
  if (!p) { errEl.style.display = 'block'; return; }

  const { Tp } = p;

  let sueloEfectivo   = sueloVal;
  let sueloModificado = false;
  const sueloOriginal = sueloVal;

  if (normaVersion === '2026' && Ts > 0 && Ts > 0.65 * Tp && sueloVal !== 'S5') {
    const degradacion = { S0: 'S1', S1: 'S2', S2: 'S3', S3: 'S4', S4: 'S5' };
    if (degradacion[sueloVal]) {
      sueloEfectivo   = degradacion[sueloVal];
      sueloModificado = true;
      p = resolveParams(normaVersion, zonaVal, sueloEfectivo);
      if (!p) { errEl.style.display = 'block'; return; }
    }
  }

  const { Z: Z_eff, S: S_eff, Tp: Tp_eff, Tl: Tl_eff } = p;

  const IaEf = ['2016','2018','2026'].includes(normaVersion) ? Ia : 1.0;
  const IpEf = ['2016','2018','2026'].includes(normaVersion) ? Ip : 1.0;
  const R    = R_base * IaEf * IpEf;

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
  renderParams(Z_eff, U, S_eff, R, R_base, IaEf, IpEf, Tp_eff, Tl_eff, zonaVal, sueloVal, Ts, sueloModificado, sueloOriginal, sueloEfectivo, sueloS5Advertencia);
}

// ════════════════════════════════════════════════════════
//  RENDERIZADO
// ════════════════════════════════════════════════════════

function hexRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

function renderChart(datos, Tp, Tl) {
  document.getElementById('empty-state').style.display = 'none';
  const canvas = document.getElementById('myChart');
  canvas.style.display = 'block';

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
          backgroundColor: '#0f1528',
          borderColor: '#1e2d4a',
          borderWidth: 1,
          titleColor: color,
          bodyColor: '#c8d8f0',
          titleFont: { family: 'Share Tech Mono', size: 11 },
          bodyFont: { family: 'Share Tech Mono', size: 11 },
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
          title: { display: true, text: 'PERIODO T (s)', color: '#5a7090', font: { family: 'Share Tech Mono', size: 10 }, padding: { top: 8 } },
          ticks: { color: '#5a7090', font: { family: 'Share Tech Mono', size: 10 }, callback: v => v.toFixed(1) },
          grid: { color: 'rgba(30,45,74,0.6)' },
          border: { color: '#1e2d4a' }
        },
        y: {
          min: 0,
          title: { display: true, text: 'Sa (g)', color: '#5a7090', font: { family: 'Share Tech Mono', size: 10 }, padding: { bottom: 8 } },
          ticks: { color: '#5a7090', font: { family: 'Share Tech Mono', size: 10 }, callback: v => v.toFixed(3) },
          grid: { color: 'rgba(30,45,74,0.6)' },
          border: { color: '#1e2d4a' },
          beginAtZero: true,
        }
      }
    }
  });
}

function renderParams(Z, U, S, R, R0, Ia, Ip, Tp, Tl, zona, suelo, Ts, sueloModificado, sueloOriginal, sueloEfectivo, sueloS5Adv) {
  const el    = document.getElementById('params-out');
  el.style.display = 'grid';
  const SaMax = (Z * U * 2.5 * S / R).toFixed(4);
  const color = VER_COLOR[normaVersion] || '#00ff88';

  const tlRow = Tl !== null
    ? `<div class="param-card"><div class="pk">TL</div><div class="pv">${Tl.toFixed(2)} <span>s</span></div></div>`
    : `<div class="param-card"><div class="pk">TL</div><div class="pv" style="color:var(--muted);font-size:0.8rem">N/A</div></div>`;

  const tsRow = (normaVersion === '2026' && Ts > 0)
    ? `<div class="param-card"><div class="pk">Ts (entrada)</div><div class="pv">${Ts.toFixed(2)} <span>s</span></div></div>`
    : '';

  const tsValidation = (normaVersion === '2026' && sueloModificado)
    ? `<div class="param-card" style="grid-column:1/-1;border-color:var(--accent3);background:rgba(255,107,53,0.12)">
        <div class="pk" style="color:var(--accent3)">🔄 CONDICIÓN Ts > 0.65×Tp ACTIVADA</div>
        <div class="pv" style="font-size:0.75rem;color:var(--text)">Perfil original: ${sueloOriginal} → Perfil aplicado: <strong>${sueloEfectivo}</strong></div>
      </div>`
    : '';

  const espType = ['1977','1997','2003'].includes(normaVersion) ? '2 tramos' : '3 tramos (con TL)';

  const irredNote = ['2016','2018','2026'].includes(normaVersion)
    ? `<div class="param-card"><div class="pk">Ia × Ip</div><div class="pv">${(Ia * Ip).toFixed(2)}</div></div>`
    : `<div class="param-card"><div class="pk">Ia × Ip</div><div class="pv" style="color:var(--muted);font-size:0.75rem">N/A (pre-2016)</div></div>`;

  const ubigeoRow = ubigeoSeleccionado
    ? `<div class="param-card" style="grid-column:1/-1;border-color:var(--accent2);background:rgba(0,255,136,0.06)">
        <div class="pk">📍 Ubicación</div>
        <div class="pv" style="font-size:0.8rem">${cap(ubigeoSeleccionado.dist)}, ${cap(ubigeoSeleccionado.prov)}, ${cap(ubigeoSeleccionado.dep)}</div>
      </div>`
    : '';

  const bidireccional = normaVersion === '2026'
    ? `<div class="param-card" style="grid-column:1/-1;border-color:var(--accent);background:rgba(0,229,255,0.08)">
        <div class="pk">📐 ANÁLISIS BIDIRECCIONAL (Art. 28)</div>
        <div class="pv" style="font-size:0.75rem;color:var(--muted)">
          Cat. A1/A2: 100% en ambas direcciones simultáneas o 75%-75%<br>
          Cat. B: aplicar combinaciones según Art. 28
        </div>
      </div>`
    : '';

  const verificaciones2026 = normaVersion === '2026'
    ? `<div class="param-card" style="grid-column:1/-1;border-color:var(--accent3);background:rgba(255,107,53,0.08)">
        <div class="pk" style="color:var(--accent3)">✓ VERIFICACIONES E.030-2026</div>
        <div class="pv" style="font-size:0.75rem;color:var(--muted)">
          • Suelo clasificado por profesional (Vs30, N60, Su)<br>
          • Si Cat. A o B en Z4: Ts por estudio de microzonificación<br>
          • Ts > 0.65×Tp: perfil degradado automáticamente<br>
          • Coeficientes R: verificar Tabla Nº 10
        </div>
      </div>`
    : '';

  const s5Warning = sueloS5Adv
    ? `<div class="param-card" style="grid-column:1/-1;border-color:var(--accent6);background:rgba(247,37,133,0.12)">
        <div class="pk" style="color:var(--accent6)">⚠ SUELO S5 — EXCEPCIONAL</div>
        <div class="pv" style="font-size:0.75rem;color:var(--text)">
          Prohibido construir sin mejora de suelo. Requiere estudio geotécnico especializado (Anexo III).
        </div>
      </div>`
    : '';

  el.innerHTML = `
    <div class="param-card" style="grid-column:1/-1;border-color:${color}22;background:${color}09">
      <div class="pk">Norma activa</div>
      <div class="pv" style="font-size:0.9rem;color:${color}">E.030 — ${normaVersion}</div>
    </div>
    ${ubigeoRow}
    <div class="param-card highlight"><div class="pk">Z — Zona ${zona}</div><div class="pv">${Z.toFixed(2)} <span>g</span></div></div>
    <div class="param-card highlight"><div class="pk">S — ${sueloEfectivo}</div><div class="pv">${S.toFixed(2)}</div></div>
    <div class="param-card"><div class="pk">U — Uso</div><div class="pv">${U.toFixed(1)}</div></div>
    <div class="param-card"><div class="pk">R efectivo</div><div class="pv">${R.toFixed(2)}</div></div>
    <div class="param-card"><div class="pk">Tp</div><div class="pv">${Tp.toFixed(2)} <span>s</span></div></div>
    ${tlRow}
    ${tsRow}
    ${irredNote}
    <div class="param-card"><div class="pk">Espectro</div><div class="pv" style="font-size:0.8rem">${espType}</div></div>
    <div class="param-card highlight" style="grid-column:1/-1">
      <div class="pk">Sa máx. (T ≤ Tp)</div>
      <div class="pv">${SaMax} <span>g = ${(parseFloat(SaMax) * 9.81).toFixed(3)} m/s²</span></div>
    </div>
    ${tsValidation}
    ${bidireccional}
    ${verificaciones2026}
    ${s5Warning}`;
}

// ════════════════════════════════════════════════════════
//  RENDERIZAR TABLA
// ════════════════════════════════════════════════════════

function renderTable(datos) {
  document.getElementById('tabla-panel').style.display = 'block';
  const tbody   = document.getElementById('tabla-body');
  const pasoVal = parseFloat(document.getElementById('paso').value);

  const filas = datos.filter(d => {
    const multiple = Math.round(d.T / pasoVal);
    return Math.abs(d.T - multiple * pasoVal) < 1e-9;
  });

  tbody.innerHTML = filas.map(d => `
    <tr>
      <td>${d.T.toFixed(3)}</td>
      <td class="td-num">${d.Sa.toFixed(5)}</td>
      <td class="td-num">${d.C.toFixed(4)}</td>
      <td class="td-num">${d.SaMS2.toFixed(4)}</td>
    </tr>`).join('');
}

// ════════════════════════════════════════════════════════
//  EXPORTAR TXT
// ════════════════════════════════════════════════════════

function exportTXT() {
  if (!datosEspectro.length) return;

  const pasoVal = parseFloat(document.getElementById('paso').value);

  const datosFiltrados = datosEspectro.filter(d => {
    const multiple = Math.round(d.T / pasoVal);
    return Math.abs(d.T - multiple * pasoVal) < 1e-9;
  });

  const tableRows = datosFiltrados.map(d => `${d.T.toFixed(3)} ${d.Sa.toFixed(4)}`);

  // \r\n — saltos de línea Windows, compatible con NetCAD
  const txt = tableRows.join('\r\n');

  const encoder = new TextEncoder();
  const utf8    = encoder.encode(txt);
  const blob    = new Blob([utf8], { type: 'text/plain;charset=windows-1252' });
  const a       = document.createElement('a');
  a.href        = URL.createObjectURL(blob);
  a.download    = 'Espectro 1.txt';
  a.click();
}

// ── INICIALIZAR ──
initSelects();
setVersion('2026');

// Exponer globales (necesario por type="module")
window.setVersion = setVersion;
window.calcular   = calcular;
window.exportTXT  = exportTXT;