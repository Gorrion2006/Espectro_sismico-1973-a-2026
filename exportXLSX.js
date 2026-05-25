import { datosEspectro } from './app.js';
import { normaVersion }  from './app.js';
import { resolveParams }  from './app.js';

function usarNombreUso(U) {
  const map = { 1.0:'Común (C)', 1.3:'Importante (B)', 1.5:'Esencial (A2)', 1.8:'Imp. mayor (A1)' };
  return map[U] || `U = ${U}`;
}

function buildFormulas(version, Tp, Tl) {
  if (version === '1977') return [
    [`T = 0`,             `C = 2.5`],
    [`0 < T ≤ ∞`,         `C = min(2.5, (Tp/T)^(2/3))   [Tp = ${Tp.toFixed(2)}s]`],
    [`Sa`,                `Sa = (Z·U·C·S) / R`],
  ];
  if (version === '1997' || version === '2003') return [
    [`T ≤ Tp`,            `C = 2.5   [Tp = ${Tp.toFixed(2)}s]`],
    [`T > Tp`,            `C = 2.5·(Tp/T)`],
    [`Sa`,                `Sa = (Z·U·C·S) / R`],
  ];
  if (version === '2016' || version === '2018') return [
    [`T ≤ Tp`,            `C = 2.5   [Tp = ${Tp.toFixed(2)}s]`],
    [`Tp < T ≤ TL`,       `C = 2.5·(Tp/T)   [TL = ${Tl?.toFixed(2) ?? '—'}s]`],
    [`T > TL`,            `C = 2.5·(Tp·TL) / T²`],
    [`Sa`,                `Sa = (Z·U·C·S) / R`],
  ];
  return [
    [`T < 0.2·Tp`,        `C = 1 + 7.5·(T/Tp)   [Tp = ${Tp.toFixed(2)}s — Art. 18]`],
    [`0.2·Tp ≤ T ≤ Tp`,  `C = 2.5`],
    [`Tp < T ≤ TL`,       `C = 2.5·(Tp/T)   [TL = ${Tl?.toFixed(2) ?? '—'}s]`],
    [`T > TL`,            `C = 2.5·(Tp·TL) / T²`],
    [`Sa`,                `Sa = (Z·U·C·S) / R`],
  ];
}

function buildNotas(version, suelo, Tp, Tl, Ts, Ia, Ip) {
  const n = [
    `• Sa = aceleración espectral como fracción de g (9.81 m/s²).`,
    `• Espectro para 5% de amortiguamiento crítico (§4.5 de la norma).`,
    `• Tp y TL definen la plataforma espectral y zona de velocidad constante.`,
    `• R efectivo = R₀ × Ia × Ip.`,
  ];
  if (['2016','2018','2026'].includes(version) && (Ia < 1 || Ip < 1))
    n.push(`⚠ Irregularidad (Ia=${Ia.toFixed(2)}, Ip=${Ip.toFixed(2)}). Verificar restricciones.`);
  if (version === '2026') {
    n.push(`★ E.030-2026 Art. 18: rama inicial C=1.0→2.5 entre T=0 y T=Tp.`);
    n.push(`★ E.030-2026 Art. 28: Cat. A1/A2 aplican 100% en ambas direcciones (o 75%+75%).`);
    if (suelo === 'S5') n.push(`⚠ S5 Excepcional: prohibido construir sin mejora de suelo (Anexo III).`);
    if (Ts > 0 && Ts > 0.65 * Tp)
      n.push(`⚠ Ts=${Ts.toFixed(2)}s > 0.65×Tp → perfil degradado (Art. 10).`);
  }
  return n;
}

function buildRefs(version) {
  const base = [`[1] RNE, Norma Técnica E.030 Diseño Sismorresistente.`];
  const map = {
    '1977': [`[2] RNC-1977. Primera norma sísmica nacional.`],
    '1997': [`[2] NTE E.030-1997. SENCICO, Lima, Perú.`],
    '2003': [`[2] NTE E.030-2003 (post-sismo Atico Mw 8.4). SENCICO, Lima, Perú.`],
    '2016': [`[2] NTE E.030-2016. DS 003-2016-Vivienda. SENCICO.`],
    '2018': [`[2] NTE E.030-2018. DS 003-2018-Vivienda. SENCICO.`],
    '2026': [
      `[2] NTE E.030-2026. RM 183-2026-Vivienda, 28 abril 2026. SENCICO.`,
      `[3] RM 183-2026: S0–S5, rampa Art. 18, R muros = 3.5.`,
    ],
  };
  return [...base, ...(map[version] || [])];
}

const VER_HEX = {
  '1977':'F72585','1997':'FFD166','2003':'FF6B35',
  '2016':'C77DFF','2018':'00E5FF','2026':'00C853',
};

function applyStyle(cell, st) {
  if (st.font)      cell.font      = st.font;
  if (st.fill)      cell.fill      = st.fill;
  if (st.alignment) cell.alignment = st.alignment;
  if (st.border)    cell.border    = st.border;
  if (st.numFmt)    cell.numFmt    = st.numFmt;
}
const hairB = () => { const h={style:'hair',color:{argb:'FFCCCCCC'}}; return {bottom:h,right:h}; };
const thB   = () => { const m={style:'medium',color:{argb:'FF1A3A5C'}},t={style:'thin',color:{argb:'FF1A3A5C'}}; return {top:m,bottom:m,left:t,right:t}; };

const ST = {
  titulo:    { font:{bold:true,size:20,color:{argb:'FF1A3A5C'}}, alignment:{horizontal:'center',vertical:'middle'} },
  fecha:     { font:{size:11,color:{argb:'FF888888'}}, alignment:{horizontal:'center'} },
  seccion:   { font:{bold:true,size:12,color:{argb:'FFFFFFFF'}}, fill:{type:'pattern',pattern:'solid',fgColor:{argb:'FF1A3A5C'}}, alignment:{horizontal:'center',vertical:'middle'} },
  seccionAlt:{ font:{bold:true,size:12,color:{argb:'FFFFFFFF'}}, fill:{type:'pattern',pattern:'solid',fgColor:{argb:'FF2E5E8E'}}, alignment:{horizontal:'center',vertical:'middle'} },
  th:        { font:{bold:true,size:11,color:{argb:'FFFFFFFF'}}, fill:{type:'pattern',pattern:'solid',fgColor:{argb:'FF1A3A5C'}}, alignment:{horizontal:'center',vertical:'middle'}, border:thB() },
  nota:      { font:{italic:true,size:10,color:{argb:'FF666666'}}, alignment:{wrapText:true,vertical:'top'} },
  saMax:     { font:{bold:true,size:14,color:{argb:'FFC04000'}}, fill:{type:'pattern',pattern:'solid',fgColor:{argb:'FFFFF3E0'}}, alignment:{horizontal:'center',vertical:'middle'} },
  fZona:     { font:{bold:true,size:11,color:{argb:'FF2E5E8E'}}, fill:{type:'pattern',pattern:'solid',fgColor:{argb:'FFECF3FB'}}, alignment:{horizontal:'center',vertical:'middle'} },
  fExpr:     { font:{italic:true,size:11,name:'Courier New',color:{argb:'FF1A1A1A'}}, alignment:{horizontal:'left',vertical:'middle'} },
  pie:       { font:{italic:true,size:9,color:{argb:'FFAAAAAA'}}, alignment:{horizontal:'center'} },
};

function stLabel(bg){ return { font:{bold:true,size:12,color:{argb:'FF1A3A5C'}}, fill:{type:'pattern',pattern:'solid',fgColor:{argb:'FF'+bg}}, alignment:{horizontal:'left',vertical:'middle'} }; }
function stDesc(bg) { return { font:{italic:true,size:11,color:{argb:'FF336699'}}, fill:{type:'pattern',pattern:'solid',fgColor:{argb:'FF'+bg}}, alignment:{horizontal:'left',vertical:'middle'} }; }
function stVal(bg)  { return { font:{bold:true,size:13,color:{argb:'FF1A7A45'}}, fill:{type:'pattern',pattern:'solid',fgColor:{argb:'FF'+bg}}, alignment:{horizontal:'center',vertical:'middle'} }; }
function stUnit(bg) { return { font:{size:11,color:{argb:'FF555555'}}, fill:{type:'pattern',pattern:'solid',fgColor:{argb:'FF'+bg}}, alignment:{horizontal:'left',vertical:'middle'} }; }
function stTD(bg)   { return { font:{size:11,name:'Courier New'}, fill:{type:'pattern',pattern:'solid',fgColor:{argb:'FF'+bg}}, alignment:{horizontal:'right',vertical:'middle'}, border:hairB() }; }

function mg(ws, r1,c1,r2,c2){ ws.mergeCells(r1,c1,r2,c2); }

// ════════════════════════════════════════════════════════
//  EXPORT PRINCIPAL
// ════════════════════════════════════════════════════════

async function exportXLSX() {
  if (!datosEspectro.length) return;

  const zonaVal  = parseInt(document.getElementById('zona').value);
  const sueloVal = document.getElementById('suelo').value;
  const U        = parseFloat(document.getElementById('uso').value);
  const R_base   = parseFloat(document.getElementById('sistema').value);
  const Ip       = parseFloat(document.getElementById('irreg_planta').value);
  const Ia       = parseFloat(document.getElementById('irreg_altura').value);
  const Ts       = normaVersion === '2026' ? (parseFloat(document.getElementById('ts_value').value) || 0) : 0;
  const pasoVal  = parseFloat(document.getElementById('paso').value);

  const p = resolveParams(normaVersion, zonaVal, sueloVal);
  if (!p) return;

  const { Z, S, Tp, Tl } = p;
  const IaEf = ['2016','2018','2026'].includes(normaVersion) ? Ia : 1.0;
  const IpEf = ['2016','2018','2026'].includes(normaVersion) ? Ip : 1.0;
  const R    = R_base * IaEf * IpEf;
  const SaMax = Z * U * 2.5 * S / R;

  const datosFiltrados = datosEspectro.filter(d => {
    const m = Math.round(d.T / pasoVal);
    return Math.abs(d.T - m * pasoVal) < 1e-9;
  });

  const wb = new ExcelJS.Workbook();
  wb.creator = 'Espectro E.030';
  wb.created = new Date();

  await makeHojaInforme(wb, { normaVersion, zonaVal, sueloVal, U, R_base, R, IaEf, IpEf, Z, S, Tp, Tl, Ts, datosFiltrados });
  const dataStartRow = await makeHojaEspectro(wb, { datosFiltrados, normaVersion, Tp, Tl, Z, S, U, R, SaMax });
  await makeHojaParams(wb, { normaVersion, zonaVal, sueloVal, U, R_base, R, IaEf, IpEf, Z, S, Tp, Tl, Ts });

  const buffer = await wb.xlsx.writeBuffer();
  const zip = await JSZip.loadAsync(buffer);
  const nRows = datosFiltrados.length;
  const accentHex = VER_HEX[normaVersion] || '0070C0';

  await injectChart(zip, nRows, accentHex, dataStartRow, SaMax, Tp, Tl);

  const finalBuffer = await zip.generateAsync({ type:'arraybuffer', compression:'DEFLATE' });
  const blob  = new Blob([finalBuffer], { type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const fecha = new Date().toISOString().slice(0,10);
  saveAs(blob, `Espectro_E030-${normaVersion}_Z${zonaVal}${sueloVal}_${fecha}.xlsx`);
}

// ════════════════════════════════════════════════════════
//  INYECCIÓN DE GRÁFICO NATIVO XML
//
//  Estrategia para etiquetas Tp/TL:
//  Se usa <c:userShapes> — cuadros de texto flotantes sobre el
//  gráfico, posicionados en coordenadas de datos mediante
//  <xdr:from>/<xdr:to> con anclaje tipo "twoCell" relativo al
//  plot area. Esto es infalible: Excel siempre los renderiza.
// ════════════════════════════════════════════════════════

async function injectChart(zip, nRows, accentHex, dataStartRow, SaMax, Tp, Tl) {
  const dataEnd = dataStartRow + nRows - 1;

  const gridStyle = `<c:spPr>
      <a:ln w="9525">
        <a:solidFill><a:srgbClr val="C0C0C0"/></a:solidFill>
        <a:prstDash val="dash"/>
      </a:ln>
    </c:spPr>`;

  // ── serie: línea vertical simple (sin etiquetas) ──────
  function vertLine(idx, x, color, label) {
    // El data label se ancla en el punto superior (idx=1) usando dLbls.
    // showSerName + extLst con posición "t" es la forma más compatible con Excel.
    return `<c:ser>
    <c:idx val="${idx}"/>
    <c:order val="${idx}"/>
    <c:tx><c:strRef><c:f>ESPECTRO!$A$1</c:f>
      <c:strCache><c:ptCount val="1"/><c:pt idx="0"><c:v>${label}</c:v></c:pt></c:strCache>
    </c:strRef></c:tx>
    <c:spPr>
      <a:ln w="15875">
        <a:solidFill><a:srgbClr val="${color}"/></a:solidFill>
        <a:prstDash val="dash"/>
      </a:ln>
    </c:spPr>
    <c:dLbls>
      <c:numFmt formatCode="General" sourceLinked="0"/>
      <c:spPr><a:noFill/><a:ln><a:noFill/></a:ln></c:spPr>
      <c:txPr>
        <a:bodyPr/>
        <a:lstStyle/>
        <a:p><a:pPr><a:defRPr b="1" sz="900">
          <a:solidFill><a:srgbClr val="${color}"/></a:solidFill>
        </a:defRPr></a:pPr></a:p>
      </c:txPr>
      <c:showLegendKey val="0"/>
      <c:showVal val="0"/>
      <c:showCatName val="0"/>
      <c:showSerName val="0"/>
      <c:showPercent val="0"/>
      <c:showBubbleSize val="0"/>
      <c:dLbl>
        <c:idx val="1"/>
        <c:spPr><a:noFill/><a:ln><a:noFill/></a:ln></c:spPr>
        <c:tx>
          <c:rich>
            <a:bodyPr rot="-5400000"/>
            <a:lstStyle/>
            <a:p><a:r>
              <a:rPr lang="es-PE" b="1" sz="900" dirty="0">
                <a:solidFill><a:srgbClr val="${color}"/></a:solidFill>
              </a:rPr>
              <a:t>${label}</a:t>
            </a:r></a:p>
          </c:rich>
        </c:tx>
        <c:dlblPos val="t"/>
        <c:showLegendKey val="0"/>
        <c:showVal val="0"/>
        <c:showCatName val="0"/>
        <c:showSerName val="0"/>
        <c:showPercent val="0"/>
        <c:showBubbleSize val="0"/>
      </c:dLbl>
      <c:showLeaderLines val="0"/>
    </c:dLbls>
    <c:marker><c:symbol val="none"/></c:marker>
    <c:xVal>
      <c:numLit>
        <c:formatCode>0.000</c:formatCode>
        <c:ptCount val="2"/>
        <c:pt idx="0"><c:v>${x}</c:v></c:pt>
        <c:pt idx="1"><c:v>${x}</c:v></c:pt>
      </c:numLit>
    </c:xVal>
    <c:yVal>
      <c:numLit>
        <c:formatCode>0.00000</c:formatCode>
        <c:ptCount val="2"/>
        <c:pt idx="0"><c:v>0</c:v></c:pt>
        <c:pt idx="1"><c:v>${SaMax.toFixed(5)}</c:v></c:pt>
      </c:numLit>
    </c:yVal>
    <c:smooth val="0"/>
  </c:ser>`;
  }

  // ── series ────────────────────────────────────────────
  const seriesTp = vertLine(0, Tp.toFixed(3), '808080', `Tp=${Tp.toFixed(2)}s`);
  const seriesTl = Tl ? vertLine(1, Tl.toFixed(3), 'A0A0A0', `TL=${Tl.toFixed(2)}s`) : '';
  const idxEspectro = Tl ? 2 : 1;

  const serEspectro = `<c:ser>
    <c:idx val="${idxEspectro}"/>
    <c:order val="${idxEspectro}"/>
    <c:tx><c:strRef>
      <c:f>ESPECTRO!$B$2</c:f>
      <c:strCache><c:ptCount val="1"/><c:pt idx="0"><c:v>Sa (g)</c:v></c:pt></c:strCache>
    </c:strRef></c:tx>
    <c:spPr>
      <a:ln w="25400">
        <a:solidFill><a:srgbClr val="${accentHex}"/></a:solidFill>
        <a:prstDash val="solid"/>
      </a:ln>
    </c:spPr>
    <c:marker><c:symbol val="none"/></c:marker>
    <c:xVal>
      <c:numRef>
        <c:f>ESPECTRO!$A$${dataStartRow}:$A$${dataEnd}</c:f>
        <c:numCache><c:formatCode>0.000</c:formatCode><c:ptCount val="${nRows}"/></c:numCache>
      </c:numRef>
    </c:xVal>
    <c:yVal>
      <c:numRef>
        <c:f>ESPECTRO!$B$${dataStartRow}:$B$${dataEnd}</c:f>
        <c:numCache><c:formatCode>0.00000</c:formatCode><c:ptCount val="${nRows}"/></c:numCache>
      </c:numRef>
    </c:yVal>
    <c:smooth val="0"/>
  </c:ser>`;

  // ── userShapes: cuadros de texto flotantes sobre el gráfico ──
  // Coordenadas en EMU dentro del chartSpace (9144000 EMU = 1 pulgada).
  // El plot area ocupa aprox x:700000..6200000, y:200000..4500000 en EMU
  // dentro de un gráfico de ~18x12 cm.
  // Calculamos la posición X proporcional de Tp/TL respecto al eje T.
  // El eje T va de 0 a Tmax (último valor del espectro).
  // Usamos coordenadas de porcentaje del plot area.

  function textboxShape(id, texto, color, xEmu, yEmu) {
    return `<xdr:sp macro="" textlink="">
      <xdr:nvSpPr>
        <xdr:cNvPr id="${id}" name="Label${id}"/>
        <xdr:cNvSpPr><a:spLocks noGrp="1"/></xdr:cNvSpPr>
      </xdr:nvSpPr>
      <xdr:spPr>
        <a:xfrm>
          <a:off x="${xEmu}" y="${yEmu}"/>
          <a:ext cx="600000" cy="200000"/>
        </a:xfrm>
        <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
        <a:noFill/>
        <a:ln><a:noFill/></a:ln>
      </xdr:spPr>
      <xdr:txBody>
        <a:bodyPr anchor="b"/>
        <a:lstStyle/>
        <a:p>
          <a:pPr algn="ctr"/>
          <a:r>
            <a:rPr lang="es-PE" sz="900" b="1" dirty="0">
              <a:solidFill><a:srgbClr val="${color}"/></a:solidFill>
            </a:rPr>
            <a:t>${texto}</a:t>
          </a:r>
        </a:p>
      </xdr:txBody>
    </xdr:sp>`;
  }

  // userShapes XML — posicionado con coordenadas absolutas en EMU
  // El chartSpace mide aprox 6858000 x 4572000 EMU (18x12 cm)
  // Plot area interna: desde ~x=700000 hasta ~x=6100000 (ancho util=5400000)
  //                    desde ~y=3800000 hasta ~y=200000 (alto util=3600000, Y invertido)
  // Posición X de Tp: plotX_start + (Tp/Tmax)*plotWidth
  // Tmax aproximado = último T del espectro (estimamos 10s como max del eje)
  const Tmax = 10;
  const plotXstart = 700000;
  const plotWidth  = 5400000;
  const yEtiqueta  = 3750000; // cerca del eje X (parte baja del plot)

  const xTp = Math.round(plotXstart + (Tp / Tmax) * plotWidth - 300000);
  const userShapesContent = Tl
    ? (() => {
        const xTl = Math.round(plotXstart + (Tl / Tmax) * plotWidth - 300000);
        return textboxShape(10, `Tp=${Tp.toFixed(2)}s`, '606060', xTp, yEtiqueta)
             + textboxShape(11, `TL=${Tl.toFixed(2)}s`, '808080', xTl, yEtiqueta);
      })()
    : textboxShape(10, `Tp=${Tp.toFixed(2)}s`, '606060', xTp, yEtiqueta);

  const userShapesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xdr:wsDr xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing"
           xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">
  <xdr:absoluteAnchor>
    <xdr:pos x="0" y="0"/>
    <xdr:ext cx="6858000" cy="4572000"/>
    <xdr:sp macro="" textlink="">
      <xdr:nvSpPr>
        <xdr:cNvPr id="1" name="Dummy"/>
        <xdr:cNvSpPr><a:spLocks noGrp="1"/></xdr:cNvSpPr>
      </xdr:nvSpPr>
      <xdr:spPr>
        <a:xfrm><a:off x="0" y="0"/><a:ext cx="100" cy="100"/></a:xfrm>
        <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
        <a:noFill/><a:ln><a:noFill/></a:ln>
      </xdr:spPr>
      <xdr:txBody><a:bodyPr/><a:lstStyle/><a:p/></xdr:txBody>
    </xdr:sp>
    <xdr:clientData/>
  </xdr:absoluteAnchor>
  <xdr:absoluteAnchor>
    <xdr:pos x="${xTp}" y="${yEtiqueta}"/>
    <xdr:ext cx="600000" cy="220000"/>
    ${textboxShape(10, `Tp=${Tp.toFixed(2)}s`, '505050', 0, 0).replace(/<a:off[^\/]*\/>/, '<a:off x="0" y="0"/>')}
    <xdr:clientData/>
  </xdr:absoluteAnchor>
  ${Tl ? `<xdr:absoluteAnchor>
    <xdr:pos x="${Math.round(plotXstart + (Tl / Tmax) * plotWidth - 300000)}" y="${yEtiqueta}"/>
    <xdr:ext cx="600000" cy="220000"/>
    ${textboxShape(11, `TL=${Tl.toFixed(2)}s`, '707070', 0, 0).replace(/<a:off[^\/]*\/>/, '<a:off x="0" y="0"/>')}
    <xdr:clientData/>
  </xdr:absoluteAnchor>` : ''}
</xdr:wsDr>`;

  // ── chart XML ─────────────────────────────────────────
  const chartXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<c:chartSpace xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart"
              xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"
              xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <c:date1904 val="0"/>
  <c:lang val="es-PE"/>
  <c:chart>
    <c:autoTitleDeleted val="1"/>
    <c:plotArea>
      <c:layout/>
      <c:scatterChart>
        <c:scatterStyle val="smoothMarker"/>
        <c:varyColors val="0"/>
        ${seriesTp}
        ${seriesTl}
        ${serEspectro}
        <c:axId val="100"/>
        <c:axId val="101"/>
      </c:scatterChart>
      <c:valAx>
        <c:axId val="100"/>
        <c:scaling><c:orientation val="minMax"/><c:min val="0"/></c:scaling>
        <c:delete val="0"/>
        <c:axPos val="b"/>
        <c:title>
          <c:tx><c:rich>
            <a:bodyPr/><a:lstStyle/>
            <a:p><a:r>
              <a:rPr lang="es-PE" b="1" sz="1000"/>
              <a:t>PERIODO  T  (s)</a:t>
            </a:r></a:p>
          </c:rich></c:tx>
          <c:overlay val="0"/>
        </c:title>
        <c:numFmt formatCode="0.0" sourceLinked="0"/>
        <c:tickLblPos val="nextTo"/>
        <c:spPr>
          <a:ln w="19050"><a:solidFill><a:srgbClr val="808080"/></a:solidFill></a:ln>
        </c:spPr>
        <c:majorGridlines>${gridStyle}</c:majorGridlines>
        <c:crossAx val="101"/>
        <c:crosses val="autoZero"/>
      </c:valAx>
      <c:valAx>
        <c:axId val="101"/>
        <c:scaling><c:orientation val="minMax"/><c:min val="0"/></c:scaling>
        <c:delete val="0"/>
        <c:axPos val="l"/>
        <c:title>
          <c:tx><c:rich>
            <a:bodyPr rot="-5400000"/><a:lstStyle/>
            <a:p><a:r>
              <a:rPr lang="es-PE" b="1" sz="1000"/>
              <a:t>Sa  (g)</a:t>
            </a:r></a:p>
          </c:rich></c:tx>
          <c:overlay val="0"/>
        </c:title>
        <c:numFmt formatCode="0.000" sourceLinked="0"/>
        <c:tickLblPos val="nextTo"/>
        <c:spPr>
          <a:ln w="19050"><a:solidFill><a:srgbClr val="808080"/></a:solidFill></a:ln>
        </c:spPr>
        <c:majorGridlines>${gridStyle}</c:majorGridlines>
        <c:crossAx val="100"/>
        <c:crosses val="autoZero"/>
      </c:valAx>
    </c:plotArea>
    <c:legend>
      <c:legendPos val="b"/>
      <c:overlay val="0"/>
      <c:spPr><a:noFill/></c:spPr>
    </c:legend>
    <c:plotVisOnly val="1"/>
    <c:dispBlanksAs val="gap"/>
  </c:chart>
  <c:spPr>
    <a:solidFill><a:srgbClr val="FFFFFF"/></a:solidFill>
    <a:ln w="19050"><a:solidFill><a:srgbClr val="AAAAAA"/></a:solidFill></a:ln>
  </c:spPr>
</c:chartSpace>`;

  const drawingXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xdr:wsDr xmlns:xdr="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing"
           xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"
           xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <xdr:twoCellAnchor moveWithCells="0" sizeWithCells="0">
    <xdr:from><xdr:col>5</xdr:col><xdr:colOff>0</xdr:colOff><xdr:row>3</xdr:row><xdr:rowOff>0</xdr:rowOff></xdr:from>
    <xdr:to><xdr:col>16</xdr:col><xdr:colOff>0</xdr:colOff><xdr:row>26</xdr:row><xdr:rowOff>0</xdr:rowOff></xdr:to>
    <xdr:graphicFrame macro="">
      <xdr:nvGraphicFramePr>
        <xdr:cNvPr id="2" name="Espectro Sísmico E.030"/>
        <xdr:cNvGraphicFramePr><a:graphicFrameLocks noGrp="1"/></xdr:cNvGraphicFramePr>
      </xdr:nvGraphicFramePr>
      <xdr:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/></xdr:xfrm>
      <a:graphic>
        <a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/chart">
          <c:chart xmlns:c="http://schemas.openxmlformats.org/drawingml/2006/chart" r:id="rId1"/>
        </a:graphicData>
      </a:graphic>
    </xdr:graphicFrame>
    <xdr:clientData/>
  </xdr:twoCellAnchor>
</xdr:wsDr>`;

  const drawingRelsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart"
    Target="../charts/chart1.xml"/>
</Relationships>`;

  // chart1.xml.rels — apunta al userShapes
  const chartRelsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
</Relationships>`;

  // ── parchear sheet2.xml ───────────────────────────────
  const sheetPath     = 'xl/worksheets/sheet2.xml';
  const sheetRelsPath = 'xl/worksheets/_rels/sheet2.xml.rels';

  const sheetXml = await zip.file(sheetPath).async('string');
  if (!sheetXml.includes('<drawing')) {
    zip.file(sheetPath, sheetXml.replace(
      '</worksheet>',
      `<drawing xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" r:id="rId1"/></worksheet>`
    ));
  }

  const existingRels = zip.file(sheetRelsPath);
  if (existingRels) {
    const relsXml = await existingRels.async('string');
    if (!relsXml.includes('drawing1.xml')) {
      zip.file(sheetRelsPath, relsXml.replace(
        '</Relationships>',
        `<Relationship Id="rId1"
          Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing"
          Target="../drawings/drawing1.xml"/>
        </Relationships>`
      ));
    }
  } else {
    zip.file(sheetRelsPath,
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing"
    Target="../drawings/drawing1.xml"/>
</Relationships>`);
  }

  // ── agregar archivos ──────────────────────────────────
  zip.file('xl/charts/chart1.xml',                   chartXml);
  zip.file('xl/charts/_rels/chart1.xml.rels',        chartRelsXml);
  zip.file('xl/drawings/drawing1.xml',               drawingXml);
  zip.file('xl/drawings/_rels/drawing1.xml.rels',    drawingRelsXml);

  // ── parchear [Content_Types].xml ─────────────────────
  const ctXml = await zip.file('[Content_Types].xml').async('string');
  let newCt = ctXml;
  if (!newCt.includes('chart1.xml')) {
    newCt = newCt.replace('</Types>',
      `<Override PartName="/xl/charts/chart1.xml"
        ContentType="application/vnd.openxmlformats-officedocument.drawingml.chart+xml"/>
      <Override PartName="/xl/drawings/drawing1.xml"
        ContentType="application/vnd.openxmlformats-officedocument.drawing+xml"/>
      </Types>`);
    zip.file('[Content_Types].xml', newCt);
  }
}

// ════════════════════════════════════════════════════════
//  HOJA 1 — INFORME
// ════════════════════════════════════════════════════════

async function makeHojaInforme(wb, { normaVersion, zonaVal, sueloVal, U, R_base, R, IaEf, IpEf, Z, S, Tp, Tl, Ts, datosFiltrados }) {
  const ws = wb.addWorksheet('INFORME');
  ws.columns = [{width:28},{width:6},{width:24},{width:6},{width:16},{width:16},{width:18},{width:18}];
  let row = 1;
  const fecha = new Date().toLocaleDateString('es-PE',{day:'2-digit',month:'long',year:'numeric'});
  const nombreNorma = normaVersion==='1977'?'RNC — 1977':normaVersion==='2026'?'E.030 — 2026 (RM 183-2026)':`NTE E.030 — ${normaVersion}`;
  const accentArgb = 'FF' + (VER_HEX[normaVersion]||'00AA66');

  mg(ws,row,1,row+1,8);
  ws.getCell(row,1).value='ANÁLISIS SÍSMICO — ESPECTRO DE DISEÑO'; applyStyle(ws.getCell(row,1),ST.titulo);
  ws.getRow(row).height=35; ws.getRow(row+1).height=35; row+=2;

  mg(ws,row,1,row,8);
  ws.getCell(row,1).value=`Norma: ${nombreNorma}`;
  applyStyle(ws.getCell(row,1),{font:{bold:true,size:11,color:{argb:accentArgb}},alignment:{horizontal:'center',vertical:'middle'}});
  ws.getRow(row).height=22; row++;

  mg(ws,row,1,row,8);
  ws.getCell(row,1).value=`Fecha de emisión: ${fecha}`; applyStyle(ws.getCell(row,1),ST.fecha); row+=2;

  mg(ws,row,1,row,8); ws.getCell(row,1).value='1.  PARÁMETROS SÍSMICOS'; applyStyle(ws.getCell(row,1),ST.seccion); ws.getRow(row).height=20; row++;
  [[[1,2],'Parámetro'],[[3,5],'Descripción'],[[6,6],'Valor'],[[7,8],'Unidad / Nota']].forEach(([[c1,c2],txt])=>{
    mg(ws,row,c1,row,c2); ws.getCell(row,c1).value=txt; applyStyle(ws.getCell(row,c1),ST.th);
  });
  ws.getRow(row).height=20; row++;

  const params=[
    [`Factor de zona (Z)`,`Zona ${zonaVal}`,Z.toFixed(2),`g`],
    [`Perfil de suelo`,sueloVal,S.toFixed(2),`Factor S`],
    [`Factor de uso (U)`,usarNombreUso(U),U.toFixed(1),`-`],
    [`Sistema (R₀)`,`R₀ = ${R_base}`,R_base.toFixed(0),`Básico`],
    [`Irr. planta (Ip)`,IpEf.toFixed(2),IpEf.toFixed(2),['2016','2018','2026'].includes(normaVersion)?'Ver E.030 §4.6':'N/A'],
    [`Irr. altura (Ia)`,IaEf.toFixed(2),IaEf.toFixed(2),['2016','2018','2026'].includes(normaVersion)?'Ver E.030 §4.6':'N/A'],
    [`R efectivo`,`R = R₀ × Ia × Ip`,R.toFixed(2),`Coef. reducción`],
    [`Período Tp`,`Plataforma espectral`,Tp.toFixed(2),`s`],
    Tl?[`Período TL`,`Inicio vel. constante`,Tl.toFixed(2),`s`]:null,
    (normaVersion==='2026'&&Ts>0)?[`Período Ts`,`Estudio microzonif.`,Ts.toFixed(2),`s`]:null,
  ].filter(Boolean);

  params.forEach((pr,idx)=>{
    const bg=idx%2===0?'F4F8FC':'FFFFFF';
    mg(ws,row,1,row,2); mg(ws,row,3,row,5);
    ws.getCell(row,1).value=pr[0]; applyStyle(ws.getCell(row,1),stLabel(bg));
    ws.getCell(row,3).value=pr[1]; applyStyle(ws.getCell(row,3),stDesc(bg));
    ws.getCell(row,6).value=parseFloat(pr[2])||pr[2]; applyStyle(ws.getCell(row,6),stVal(bg));
    ws.getCell(row,7).value=pr[3]; applyStyle(ws.getCell(row,7),stUnit(bg));
    ws.getRow(row).height=20; row++;
  });
  row++;

  mg(ws,row,1,row,8); ws.getCell(row,1).value='2.  FÓRMULAS DEL ESPECTRO DE RESPUESTA'; applyStyle(ws.getCell(row,1),ST.seccion); ws.getRow(row).height=20; row++;
  buildFormulas(normaVersion,Tp,Tl).forEach(([z,e])=>{
    mg(ws,row,1,row,2); mg(ws,row,3,row,8);
    ws.getCell(row,1).value=z; applyStyle(ws.getCell(row,1),ST.fZona);
    ws.getCell(row,3).value=e; applyStyle(ws.getCell(row,3),ST.fExpr);
    ws.getRow(row).height=18; row++;
  });
  row++;
  const SaMax=Z*U*2.5*S/R;
  mg(ws,row,1,row,4); mg(ws,row,5,row,8);
  ws.getCell(row,1).value='Sa MÁXIMO (T ≤ Tp)';
  applyStyle(ws.getCell(row,1),{font:{bold:true,size:10,color:{argb:'FF333333'}},fill:{type:'pattern',pattern:'solid',fgColor:{argb:'FFFFF3E0'}},alignment:{horizontal:'center',vertical:'middle'}});
  const cSV=ws.getCell(row,5); cSV.value=SaMax; cSV.numFmt='0.0000 "g"'; applyStyle(cSV,ST.saMax);
  ws.getRow(row).height=18; row+=2;

  mg(ws,row,1,row,8); ws.getCell(row,1).value='3.  TABLA DE ESPECTRO DE DISEÑO'; applyStyle(ws.getCell(row,1),ST.seccion); ws.getRow(row).height=20; row++;
  [['T (s)',1,2],['Sa (g)',3,4],['C (factor)',5,6],['Sa (m/s²)',7,8]].forEach(([txt,c1,c2])=>{
    mg(ws,row,c1,row,c2); ws.getCell(row,c1).value=txt; applyStyle(ws.getCell(row,c1),ST.th);
  });
  ws.getRow(row).height=15; row++;
  datosFiltrados.forEach((d,idx)=>{
    const bg=idx%2===0?'FFFFFF':'F4F8FC';
    mg(ws,row,1,row,2); mg(ws,row,3,row,4); mg(ws,row,5,row,6); mg(ws,row,7,row,8);
    [[1,d.T,'0.000'],[3,d.Sa,'0.00000'],[5,d.C,'0.0000'],[7,d.SaMS2,'0.0000']].forEach(([col,val,fmt])=>{
      const c=ws.getCell(row,col); c.value=val; c.numFmt=fmt; applyStyle(c,stTD(bg));
    });
    ws.getRow(row).height=18; row++;
  });
  row++;

  mg(ws,row,1,row,8); ws.getCell(row,1).value='4.  NOTAS Y ADVERTENCIAS'; applyStyle(ws.getCell(row,1),ST.seccion); ws.getRow(row).height=20; row++;
  buildNotas(normaVersion,sueloVal,Tp,Tl,Ts,IaEf,IpEf).forEach(n=>{
    mg(ws,row,1,row,8); ws.getCell(row,1).value=n; applyStyle(ws.getCell(row,1),ST.nota); ws.getRow(row).height=18; row++;
  });
  row++;

  mg(ws,row,1,row,8); ws.getCell(row,1).value='5.  REFERENCIA NORMATIVA'; applyStyle(ws.getCell(row,1),ST.seccionAlt); ws.getRow(row).height=20; row++;
  buildRefs(normaVersion).forEach(r=>{
    mg(ws,row,1,row,8); ws.getCell(row,1).value=r; applyStyle(ws.getCell(row,1),ST.nota); ws.getRow(row).height=18; row++;
  });
  row++;
  mg(ws,row,1,row,8);
  ws.getCell(row,1).value=`Generado con Espectro E.030 — ${new Date().toLocaleString('es-PE')}`;
  applyStyle(ws.getCell(row,1),ST.pie);
}

// ════════════════════════════════════════════════════════
//  HOJA 2 — ESPECTRO
// ════════════════════════════════════════════════════════

async function makeHojaEspectro(wb, { datosFiltrados, normaVersion, Tp, Tl, Z, S, U, R, SaMax }) {
  const ws = wb.addWorksheet('ESPECTRO');
  ws.columns = [{width:16},{width:18},{width:16},{width:18}];

  mg(ws,1,1,1,4);
  ws.getCell(1,1).value=`ESPECTRO DE DISEÑO — NTE E.030-${normaVersion}`;
  applyStyle(ws.getCell(1,1),{font:{bold:true,size:14,color:{argb:'FF1A3A5C'}},alignment:{horizontal:'center',vertical:'middle'}});
  ws.getRow(1).height=25;

  [['T (s)',1],['Sa (g)',2],['C',3],['Sa (m/s²)',4]].forEach(([txt,col])=>{
    ws.getCell(2,col).value=txt; applyStyle(ws.getCell(2,col),ST.th);
  });
  ws.getRow(2).height=20;

  const dataStartRow = 3;
  datosFiltrados.forEach((d,idx)=>{
    const bg=idx%2===0?'FFFFFF':'F4F8FC';
    const r=idx+dataStartRow;
    [[1,d.T,'0.000'],[2,d.Sa,'0.00000'],[3,d.C,'0.0000'],[4,d.SaMS2,'0.0000']].forEach(([col,val,fmt])=>{
      const c=ws.getCell(r,col); c.value=val; c.numFmt=fmt; applyStyle(c,stTD(bg));
    });
    ws.getRow(r).height=17;
  });

  ws.views=[{state:'frozen',ySplit:2}];

  const notaRow = dataStartRow + datosFiltrados.length + 1;
  mg(ws,notaRow,1,notaRow,4);
  ws.getCell(notaRow,1).value=`Tp=${Tp.toFixed(2)}s${Tl?`  TL=${Tl.toFixed(2)}s`:''}  Sa_max=${SaMax.toFixed(4)}g`;
  applyStyle(ws.getCell(notaRow,1),{font:{italic:true,size:8,color:{argb:'FF555555'}},alignment:{horizontal:'center'}});

  return dataStartRow;
}

// ════════════════════════════════════════════════════════
//  HOJA 3 — PARÁMETROS
// ════════════════════════════════════════════════════════

async function makeHojaParams(wb, { normaVersion, zonaVal, sueloVal, U, R_base, R, IaEf, IpEf, Z, S, Tp, Tl, Ts }) {
  const ws=wb.addWorksheet('PARÁMETROS');
  ws.columns=[{width:26},{width:16},{width:12}];
  const SaMax=Z*U*2.5*S/R;

  const filas=[
    ['PARÁMETROS SÍSMICOS','',''],
    ['Norma',normaVersion==='2026'?'E.030-2026 (RM 183-2026)':`E.030-${normaVersion}`,''],
    ['Zona sísmica',zonaVal,''],
    ['Factor Z',Z,'g'],
    ['Perfil de suelo',sueloVal,''],
    ['Factor S',S,'-'],
    ['Factor U',U,'-'],
    ['R₀',R_base,'-'],
    ['Ia',IaEf,'-'],
    ['Ip',IpEf,'-'],
    ['R efectivo',R,'-'],
    ['Tp',Tp,'s'],
    Tl?['TL',Tl,'s']:['TL','N/A','-'],
    (normaVersion==='2026'&&Ts>0)?['Ts',Ts,'s']:['Ts','N/A','-'],
    ['C máx (T≤Tp)',2.5,'-'],
    ['Sa máx (T≤Tp)',SaMax,'g'],
    ['Sa máx',SaMax*9.81,'m/s²'],
  ].filter(Boolean);

  filas.forEach((fila,idx)=>{
    const r=idx+1; const isH=idx===0;
    const bg=isH?'1A3A5C':idx%2===0?'F4F8FC':'FFFFFF';
    fila.forEach((val,col)=>{
      const c=ws.getCell(r,col+1); c.value=val;
      applyStyle(c,isH
        ?{font:{bold:true,size:11,color:{argb:'FFFFFFFF'}},fill:{type:'pattern',pattern:'solid',fgColor:{argb:'FF1A3A5C'}},alignment:{horizontal:'center',vertical:'middle'}}
        :{font:{bold:col===0,size:10,color:{argb:'FF1A1A1A'}},fill:{type:'pattern',pattern:'solid',fgColor:{argb:'FF'+bg}},alignment:{horizontal:col===0?'left':'center',vertical:'middle'},border:hairB()}
      );
      if(!isH&&col===1&&typeof val==='number') c.numFmt='0.0000';
      ws.getRow(r).height=isH?20:15;
    });
  });
}

export { exportXLSX };