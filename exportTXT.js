import { datosEspectro } from './index.js';

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

export { exportTXT };