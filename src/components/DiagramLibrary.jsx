import { useState } from 'react'

// ── SVG DIAGRAM COMPONENTS ──────────────────────────────────

function Axes({ xLabel = 'Q', yLabel = 'P' }) {
  return (
    <>
      <line x1="50" y1="320" x2="390" y2="320" stroke="#1e293b" strokeWidth="2.5" />
      <line x1="50" y1="20" x2="50" y2="320" stroke="#1e293b" strokeWidth="2.5" />
      <polygon points="390,315 385,320 385,325" fill="#1e293b" />
      <polygon points="45,20 50,13 55,20" fill="#1e293b" />
      <text x="395" y="324" fontSize="14" fontWeight="bold" fill="#1e293b">{xLabel}</text>
      <text x="34" y="16" fontSize="14" fontWeight="bold" fill="#1e293b">{yLabel}</text>
    </>
  )
}

function SupplyDemandSVG() {
  return (
    <svg viewBox="0 0 420 350" style={{ width: '100%', maxWidth: 380 }}>
      <Axes />
      {/* Demand */}
      <line x1="80" y1="55" x2="370" y2="305" stroke="#2563eb" strokeWidth="2.5" />
      <text x="372" y="310" fontSize="13" fontWeight="bold" fill="#2563eb">D</text>
      {/* Supply */}
      <line x1="80" y1="305" x2="370" y2="55" stroke="#dc2626" strokeWidth="2.5" />
      <text x="372" y="60" fontSize="13" fontWeight="bold" fill="#dc2626">S</text>
      {/* Equilibrium */}
      <circle cx="225" cy="180" r="5" fill="#1e293b" />
      <line x1="50" y1="180" x2="225" y2="180" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6,4" />
      <line x1="225" y1="320" x2="225" y2="180" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6,4" />
      <text x="22" y="184" fontSize="12" fill="#1e293b">P*</text>
      <text x="218" y="338" fontSize="12" fill="#1e293b">Q*</text>
    </svg>
  )
}

function MonopolySVG() {
  return (
    <svg viewBox="0 0 420 350" style={{ width: '100%', maxWidth: 380 }}>
      <Axes />
      {/* AR / Demand */}
      <line x1="70" y1="50" x2="380" y2="310" stroke="#2563eb" strokeWidth="2.5" />
      <text x="382" y="314" fontSize="13" fontWeight="bold" fill="#2563eb">AR=D</text>
      {/* MR (steeper, hits x-axis at midpoint) */}
      <line x1="70" y1="50" x2="225" y2="320" stroke="#7c3aed" strokeWidth="2" strokeDasharray="8,4" />
      <text x="228" y="324" fontSize="13" fontWeight="bold" fill="#7c3aed">MR</text>
      {/* MC (upward sloping) */}
      <line x1="80" y1="280" x2="330" y2="110" stroke="#f97316" strokeWidth="2.5" />
      <text x="332" y="114" fontSize="13" fontWeight="bold" fill="#f97316">MC</text>
      {/* AC (U-shape approximated) */}
      <path d="M 80 260 Q 180 200 330 230" fill="none" stroke="#10b981" strokeWidth="2.5" />
      <text x="332" y="234" fontSize="13" fontWeight="bold" fill="#10b981">AC</text>
      {/* MR = MC intersection at Qm */}
      <line x1="160" y1="320" x2="160" y2="100" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6,4" />
      <text x="152" y="338" fontSize="12" fill="#1e293b">Qm</text>
      {/* Price Pm from AR at Qm */}
      <line x1="50" y1="157" x2="160" y2="157" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6,4" />
      <text x="22" y="161" fontSize="12" fill="#2563eb">Pm</text>
      {/* AC at Qm */}
      <line x1="50" y1="215" x2="160" y2="215" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6,4" />
      <text x="22" y="219" fontSize="12" fill="#10b981">ACm</text>
      {/* Supernormal profit rectangle */}
      <rect x="50" y="157" width="110" height="58" fill="rgba(99,102,241,0.15)" stroke="rgba(99,102,241,0.4)" strokeWidth="1" />
      <text x="65" y="191" fontSize="11" fill="#4f46e5">Supernormal</text>
      <text x="72" y="203" fontSize="11" fill="#4f46e5">profit</text>
      {/* Welfare loss triangle */}
      <polygon points="160,157 280,240 160,240" fill="rgba(239,68,68,0.2)" stroke="rgba(239,68,68,0.4)" strokeWidth="1" />
      {/* Competitive Q (where MC meets AR) */}
      <line x1="280" y1="320" x2="280" y2="240" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,4" />
      <text x="272" y="338" fontSize="12" fill="#64748b">Qpc</text>
    </svg>
  )
}

function NegExternalitySVG() {
  return (
    <svg viewBox="0 0 420 350" style={{ width: '100%', maxWidth: 380 }}>
      <Axes />
      {/* Demand = MPB */}
      <line x1="70" y1="55" x2="370" y2="295" stroke="#2563eb" strokeWidth="2.5" />
      <text x="372" y="300" fontSize="12" fontWeight="bold" fill="#2563eb">D=MPB</text>
      {/* MPC (private supply) */}
      <line x1="70" y1="290" x2="350" y2="90" stroke="#dc2626" strokeWidth="2.5" />
      <text x="352" y="95" fontSize="12" fontWeight="bold" fill="#dc2626">MPC</text>
      {/* MSC (above MPC — social supply) */}
      <line x1="70" y1="240" x2="350" y2="40" stroke="#7c3aed" strokeWidth="2.5" />
      <text x="352" y="45" fontSize="12" fontWeight="bold" fill="#7c3aed">MSC</text>
      {/* MEC bracket */}
      <line x1="360" y1="90" x2="360" y2="40" stroke="#7c3aed" strokeWidth="1.5" />
      <line x1="355" y1="90" x2="365" y2="90" stroke="#7c3aed" strokeWidth="1.5" />
      <line x1="355" y1="40" x2="365" y2="40" stroke="#7c3aed" strokeWidth="1.5" />
      <text x="367" y="70" fontSize="11" fill="#7c3aed">MEC</text>
      {/* Market output Qm */}
      <line x1="240" y1="320" x2="240" y2="170" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6,4" />
      <text x="233" y="338" fontSize="12" fill="#1e293b">Qm</text>
      {/* Social optimum Q* */}
      <line x1="185" y1="320" x2="185" y2="140" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6,4" />
      <text x="178" y="338" fontSize="12" fill="#1e293b">Q*</text>
      {/* Pm */}
      <line x1="50" y1="170" x2="240" y2="170" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,4" />
      <text x="22" y="174" fontSize="11" fill="#dc2626">Pm</text>
      {/* Welfare loss triangle */}
      <polygon points="185,140 240,170 185,170" fill="rgba(239,68,68,0.25)" stroke="rgba(239,68,68,0.5)" strokeWidth="1.5" />
      <text x="195" y="165" fontSize="11" fill="#dc2626">WL</text>
    </svg>
  )
}

function PosExternalitySVG() {
  return (
    <svg viewBox="0 0 420 350" style={{ width: '100%', maxWidth: 380 }}>
      <Axes />
      {/* Supply = MPC */}
      <line x1="70" y1="290" x2="360" y2="60" stroke="#dc2626" strokeWidth="2.5" />
      <text x="362" y="65" fontSize="12" fontWeight="bold" fill="#dc2626">S=MPC</text>
      {/* MPB (private demand) */}
      <line x1="70" y1="55" x2="360" y2="295" stroke="#2563eb" strokeWidth="2.5" />
      <text x="362" y="300" fontSize="12" fontWeight="bold" fill="#2563eb">MPB</text>
      {/* MSB (above MPB) */}
      <line x1="70" y1="30" x2="360" y2="270" stroke="#10b981" strokeWidth="2.5" />
      <text x="362" y="274" fontSize="12" fontWeight="bold" fill="#10b981">MSB</text>
      {/* MEB bracket */}
      <line x1="360" y1="295" x2="360" y2="270" stroke="#10b981" strokeWidth="1.5" />
      <line x1="355" y1="295" x2="365" y2="295" stroke="#10b981" strokeWidth="1.5" />
      <line x1="355" y1="270" x2="365" y2="270" stroke="#10b981" strokeWidth="1.5" />
      <text x="367" y="285" fontSize="11" fill="#10b981">MEB</text>
      {/* Market output Qm */}
      <line x1="185" y1="320" x2="185" y2="173" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6,4" />
      <text x="178" y="338" fontSize="12" fill="#1e293b">Qm</text>
      {/* Social optimum Q* */}
      <line x1="235" y1="320" x2="235" y2="148" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6,4" />
      <text x="228" y="338" fontSize="12" fill="#1e293b">Q*</text>
      {/* Welfare loss triangle */}
      <polygon points="185,173 235,148 235,173" fill="rgba(16,185,129,0.2)" stroke="rgba(16,185,129,0.5)" strokeWidth="1.5" />
      <text x="196" y="170" fontSize="11" fill="#065f46">WL</text>
    </svg>
  )
}

function ADASVg() {
  return (
    <svg viewBox="0 0 420 360" style={{ width: '100%', maxWidth: 380 }}>
      <Axes xLabel="Y" />
      {/* LRAS vertical */}
      <line x1="260" y1="30" x2="260" y2="320" stroke="#1e293b" strokeWidth="2.5" />
      <text x="256" y="22" fontSize="12" fontWeight="bold" fill="#1e293b">LRAS</text>
      {/* SRAS */}
      <line x1="60" y1="280" x2="360" y2="80" stroke="#f97316" strokeWidth="2.5" />
      <text x="362" y="84" fontSize="12" fontWeight="bold" fill="#f97316">SRAS</text>
      {/* AD1 */}
      <line x1="60" y1="90" x2="360" y2="280" stroke="#2563eb" strokeWidth="2.5" />
      <text x="362" y="285" fontSize="12" fontWeight="bold" fill="#2563eb">AD₁</text>
      {/* AD2 (rightward shift) */}
      <line x1="100" y1="90" x2="390" y2="270" stroke="#7c3aed" strokeWidth="2" strokeDasharray="8,4" />
      <text x="370" y="270" fontSize="12" fontWeight="bold" fill="#7c3aed">AD₂</text>
      {/* Arrow between AD1 and AD2 */}
      <text x="270" y="265" fontSize="18" fill="#7c3aed">→</text>
      {/* YFE label */}
      <text x="252" y="340" fontSize="12" fill="#1e293b">YFE</text>
      {/* Equilibrium P level */}
      <line x1="50" y1="185" x2="260" y2="185" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,4" />
      <text x="22" y="189" fontSize="11" fill="#1e293b">P*</text>
    </svg>
  )
}

function LabourMarketSVG() {
  return (
    <svg viewBox="0 0 420 350" style={{ width: '100%', maxWidth: 380 }}>
      <Axes xLabel="L" yLabel="W" />
      {/* Labour Demand */}
      <line x1="70" y1="55" x2="375" y2="295" stroke="#2563eb" strokeWidth="2.5" />
      <text x="377" y="300" fontSize="12" fontWeight="bold" fill="#2563eb">DL=MRP</text>
      {/* Labour Supply */}
      <line x1="70" y1="295" x2="375" y2="55" stroke="#dc2626" strokeWidth="2.5" />
      <text x="377" y="60" fontSize="12" fontWeight="bold" fill="#dc2626">SL</text>
      {/* Equilibrium */}
      <circle cx="222" cy="175" r="5" fill="#1e293b" />
      <line x1="50" y1="175" x2="222" y2="175" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6,4" />
      <line x1="222" y1="320" x2="222" y2="175" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6,4" />
      <text x="22" y="179" fontSize="12" fill="#1e293b">W*</text>
      <text x="215" y="338" fontSize="12" fill="#1e293b">L*</text>
      {/* NMW line */}
      <line x1="50" y1="130" x2="380" y2="130" stroke="#10b981" strokeWidth="2.5" />
      <text x="22" y="134" fontSize="12" fontWeight="bold" fill="#10b981">NMW</text>
      {/* Employment at NMW (intersection with DL) */}
      <line x1="175" y1="320" x2="175" y2="130" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,4" />
      <text x="162" y="338" fontSize="12" fill="#2563eb">L₁</text>
      {/* Supply at NMW */}
      <line x1="270" y1="320" x2="270" y2="130" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,4" />
      <text x="263" y="338" fontSize="12" fill="#dc2626">L₂</text>
      {/* Unemployment arrow */}
      <line x1="175" y1="125" x2="270" y2="125" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="195" y="118" fontSize="11" fill="#f59e0b">unemployment</text>
    </svg>
  )
}

function MonopsonyLabourSVG() {
  return (
    <svg viewBox="0 0 420 360" style={{ width: '100%', maxWidth: 380 }}>
      <Axes xLabel="L" yLabel="W" />
      {/* Labour Demand = MRP */}
      <line x1="70" y1="55" x2="360" y2="295" stroke="#2563eb" strokeWidth="2.5" />
      <text x="362" y="300" fontSize="12" fontWeight="bold" fill="#2563eb">MRP</text>
      {/* Labour Supply (ACL) */}
      <line x1="70" y1="295" x2="360" y2="130" stroke="#dc2626" strokeWidth="2.5" />
      <text x="362" y="135" fontSize="12" fontWeight="bold" fill="#dc2626">ACL=S</text>
      {/* MLC (steeper, above supply) */}
      <line x1="70" y1="295" x2="250" y2="55" stroke="#7c3aed" strokeWidth="2.5" />
      <text x="252" y="59" fontSize="12" fontWeight="bold" fill="#7c3aed">MLC</text>
      {/* Profit max: MLC = MRP at Lm */}
      <line x1="157" y1="320" x2="157" y2="175" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6,4" />
      <text x="148" y="338" fontSize="12" fill="#1e293b">Lm</text>
      {/* Monopsony wage (from ACL at Lm) */}
      <line x1="50" y1="242" x2="157" y2="242" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="6,4" />
      <text x="18" y="246" fontSize="12" fill="#dc2626">Wm</text>
      {/* Competitive wage (from MRP = ACL) */}
      <circle cx="213" cy="203" r="4" fill="#10b981" />
      <line x1="50" y1="203" x2="213" y2="203" stroke="#10b981" strokeWidth="1" strokeDasharray="5,4" />
      <text x="18" y="207" fontSize="12" fill="#10b981">W*</text>
      <line x1="213" y1="320" x2="213" y2="203" stroke="#10b981" strokeWidth="1" strokeDasharray="5,4" />
      <text x="204" y="338" fontSize="12" fill="#10b981">L*</text>
      {/* Exploitation area */}
      <rect x="50" y="203" width="107" height="39" fill="rgba(239,68,68,0.15)" stroke="rgba(239,68,68,0.3)" strokeWidth="1" />
    </svg>
  )
}

function KinkedDemandSVG() {
  return (
    <svg viewBox="0 0 420 360" style={{ width: '100%', maxWidth: 380 }}>
      <Axes />
      {/* Elastic section above kink */}
      <line x1="70" y1="60" x2="200" y2="155" stroke="#2563eb" strokeWidth="2.5" />
      {/* Inelastic section below kink */}
      <line x1="200" y1="155" x2="360" y2="285" stroke="#2563eb" strokeWidth="2.5" />
      <text x="362" y="290" fontSize="12" fontWeight="bold" fill="#2563eb">AR (D)</text>
      {/* Kink point */}
      <circle cx="200" cy="155" r="5" fill="#1e293b" />
      {/* MR — gap at kink */}
      <line x1="70" y1="60" x2="140" y2="285" stroke="#7c3aed" strokeWidth="2" strokeDasharray="8,4" />
      {/* MR gap */}
      <line x1="200" y1="220" x2="200" y2="310" stroke="#7c3aed" strokeWidth="2" strokeDasharray="8,4" />
      <text x="360" y="230" fontSize="12" fontWeight="bold" fill="#7c3aed">MR (gap)</text>
      {/* MC within the gap */}
      <line x1="100" y1="300" x2="320" y2="100" stroke="#f97316" strokeWidth="2.5" />
      <text x="322" y="104" fontSize="12" fontWeight="bold" fill="#f97316">MC</text>
      {/* Kink price P* */}
      <line x1="50" y1="155" x2="200" y2="155" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6,4" />
      <text x="20" y="159" fontSize="12" fill="#1e293b">P*</text>
      <line x1="200" y1="320" x2="200" y2="155" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6,4" />
      <text x="193" y="338" fontSize="12" fill="#1e293b">Q*</text>
      {/* Price rigidity note */}
      <text x="60" y="100" fontSize="11" fill="#2563eb">Elastic above:</text>
      <text x="60" y="112" fontSize="11" fill="#2563eb">rivals don't match rise</text>
      <text x="230" y="220" fontSize="11" fill="#2563eb">Inelastic below:</text>
      <text x="230" y="232" fontSize="11" fill="#2563eb">rivals match cut</text>
    </svg>
  )
}

function PerfectCompetitionLRSVG() {
  return (
    <svg viewBox="0 0 420 360" style={{ width: '100%', maxWidth: 380 }}>
      <Axes />
      {/* Horizontal demand/AR/MR */}
      <line x1="50" y1="180" x2="380" y2="180" stroke="#2563eb" strokeWidth="2.5" />
      <text x="340" y="168" fontSize="12" fontWeight="bold" fill="#2563eb">P=AR=MR</text>
      {/* U-shaped AC */}
      <path d="M 80 280 Q 200 120 330 200" fill="none" stroke="#10b981" strokeWidth="2.5" />
      <text x="332" y="204" fontSize="12" fontWeight="bold" fill="#10b981">AC</text>
      {/* MC */}
      <path d="M 80 290 Q 160 180 330 100" fill="none" stroke="#f97316" strokeWidth="2.5" />
      <text x="332" y="104" fontSize="12" fontWeight="bold" fill="#f97316">MC</text>
      {/* Long-run equilibrium: P = AC = MC */}
      <circle cx="215" cy="180" r="6" fill="#1e293b" />
      <line x1="215" y1="320" x2="215" y2="180" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6,4" />
      <text x="208" y="338" fontSize="12" fill="#1e293b">Q*</text>
      <text x="22" y="184" fontSize="12" fill="#1e293b">P*</text>
      {/* Labels */}
      <text x="60" y="50" fontSize="12" fill="#10b981">P = MC = min AC</text>
      <text x="60" y="64" fontSize="12" fill="#10b981">= Normal Profit</text>
    </svg>
  )
}

function NaturalMonopolySVG() {
  return (
    <svg viewBox="0 0 420 360" style={{ width: '100%', maxWidth: 380 }}>
      <Axes />
      {/* Demand */}
      <line x1="70" y1="55" x2="380" y2="305" stroke="#2563eb" strokeWidth="2.5" />
      <text x="382" y="310" fontSize="12" fontWeight="bold" fill="#2563eb">D=AR</text>
      {/* MR */}
      <line x1="70" y1="55" x2="225" y2="320" stroke="#7c3aed" strokeWidth="2" strokeDasharray="8,4" />
      <text x="228" y="324" fontSize="12" fontWeight="bold" fill="#7c3aed">MR</text>
      {/* Falling LRAC throughout */}
      <path d="M 70 80 Q 200 160 380 230" fill="none" stroke="#10b981" strokeWidth="2.5" />
      <text x="350" y="220" fontSize="12" fontWeight="bold" fill="#10b981">LRAC</text>
      {/* MC below LRAC and falling */}
      <path d="M 70 130 Q 200 190 380 250" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="6,3" />
      <text x="350" y="260" fontSize="12" fontWeight="bold" fill="#f97316">MC</text>
      {/* Profit max output */}
      <line x1="155" y1="320" x2="155" y2="108" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6,4" />
      <text x="144" y="338" fontSize="12" fill="#1e293b">Qpm</text>
      <line x1="50" y1="108" x2="155" y2="108" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,4" />
      <text x="22" y="112" fontSize="12" fill="#dc2626">Ppm</text>
      {/* Regulated price = LRAC */}
      <line x1="245" y1="320" x2="245" y2="168" stroke="#10b981" strokeWidth="1.5" strokeDasharray="6,4" />
      <text x="234" y="338" fontSize="12" fill="#10b981">Qreg</text>
      <line x1="50" y1="168" x2="245" y2="168" stroke="#10b981" strokeWidth="1.5" strokeDasharray="6,4" />
      <text x="22" y="172" fontSize="12" fill="#10b981">Preg</text>
    </svg>
  )
}

function PhillipsCurveSVG() {
  return (
    <svg viewBox="0 0 420 360" style={{ width: '100%', maxWidth: 380 }}>
      <Axes xLabel="U%" yLabel="π%" />
      {/* SRPC1 */}
      <path d="M 80 60 Q 180 200 360 300" fill="none" stroke="#2563eb" strokeWidth="2.5" />
      <text x="340" y="290" fontSize="12" fontWeight="bold" fill="#2563eb">SRPC₁</text>
      {/* SRPC2 (shifted up — higher inflation expectations) */}
      <path d="M 80 30 Q 180 160 360 270" fill="none" stroke="#7c3aed" strokeWidth="2" strokeDasharray="8,4" />
      <text x="340" y="258" fontSize="12" fontWeight="bold" fill="#7c3aed">SRPC₂</text>
      {/* LRPC vertical */}
      <line x1="230" y1="30" x2="230" y2="320" stroke="#dc2626" strokeWidth="2.5" />
      <text x="226" y="22" fontSize="12" fontWeight="bold" fill="#dc2626">LRPC</text>
      <text x="218" y="338" fontSize="12" fill="#dc2626">NAIRU</text>
      {/* Short-run trade-off arrow */}
      <line x1="140" y1="200" x2="105" y2="148" stroke="#10b981" strokeWidth="1.5" />
      <polygon points="105,148 108,160 115,155" fill="#10b981" />
      {/* Inflation target 2% line */}
      <line x1="50" y1="280" x2="380" y2="280" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,4" />
      <text x="355" y="276" fontSize="11" fill="#94a3b8">2% target</text>
      {/* Labels */}
      <text x="70" y="40" fontSize="11" fill="#2563eb">Expansion →</text>
      <text x="68" y="52" fontSize="11" fill="#2563eb">lower U, higher π</text>
    </svg>
  )
}

function PPFSvg() {
  return (
    <svg viewBox="0 0 420 360" style={{ width: '100%', maxWidth: 380 }}>
      <Axes xLabel="Good B" yLabel="Good A" />
      {/* PPF (concave — reflects increasing opportunity cost) */}
      <path d="M 60 50 Q 200 180 360 310" fill="none" stroke="#2563eb" strokeWidth="2.5" />
      <text x="300" y="330" fontSize="12" fontWeight="bold" fill="#2563eb">PPF₁</text>
      {/* Shifted PPF (supply-side growth) */}
      <path d="M 60 30 Q 220 170 380 300" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="8,4" />
      <text x="330" y="295" fontSize="12" fontWeight="bold" fill="#10b981">PPF₂</text>
      {/* Arrow showing shift */}
      <text x="310" y="215" fontSize="18" fill="#10b981">→</text>
      {/* Point inside PPF (unemployed resources) */}
      <circle cx="200" cy="230" r="5" fill="#dc2626" />
      <text x="205" y="235" fontSize="11" fill="#dc2626">X (inefficient)</text>
      {/* Point on PPF */}
      <circle cx="250" cy="200" r="5" fill="#2563eb" />
      <text x="255" y="205" fontSize="11" fill="#2563eb">A (efficient)</text>
      {/* Point outside PPF (unattainable) */}
      <circle cx="320" cy="150" r="5" fill="#94a3b8" />
      <text x="325" y="148" fontSize="11" fill="#94a3b8">B (unattainable)</text>
    </svg>
  )
}

function JCurveSVG() {
  return (
    <svg viewBox="0 0 420 360" style={{ width: '100%', maxWidth: 380 }}>
      <Axes xLabel="Time" yLabel="CA Balance" />
      {/* Zero line */}
      <line x1="50" y1="180" x2="390" y2="180" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6,4" />
      <text x="360" y="175" fontSize="11" fill="#94a3b8">CA = 0</text>
      {/* J-curve path */}
      <path d="M 80 180 L 130 180 Q 160 290 200 270 Q 250 250 310 150 L 370 110" fill="none" stroke="#2563eb" strokeWidth="3" />
      {/* Depreciation point */}
      <line x1="130" y1="30" x2="130" y2="320" stroke="#dc2626" strokeWidth="2" strokeDasharray="8,4" />
      <text x="132" y="22" fontSize="12" fontWeight="bold" fill="#dc2626">Depreciation</text>
      {/* Annotations */}
      <text x="140" y="280" fontSize="11" fill="#1e293b">Short run:</text>
      <text x="140" y="292" fontSize="11" fill="#dc2626">CA worsens</text>
      <text x="140" y="304" fontSize="11" fill="#94a3b8">(inelastic quantities)</text>
      <text x="280" y="145" fontSize="11" fill="#1e293b">Long run:</text>
      <text x="280" y="157" fontSize="11" fill="#10b981">CA improves</text>
      <text x="280" y="169" fontSize="11" fill="#94a3b8">(quantities adjust)</text>
    </svg>
  )
}

// ── DATA ────────────────────────────────────────────────────

const diagrams = [
  {
    id: 'supply-demand', paper: 'Paper 1 & 2', topic: 'Markets',
    title: 'Supply and Demand',
    summary: 'Shows how market equilibrium price and quantity are determined by the intersection of supply and demand curves.',
    render: SupplyDemandSVG,
    keyLabels: ['P* = equilibrium price', 'Q* = equilibrium quantity', 'D = demand curve (MB)', 'S = supply curve (MC)'],
    shiftRules: ['Demand shifts right: more income, substitute price rises, complement price falls, fashion change, population growth', 'Supply shifts right: lower costs, technology improvement, more firms, subsidies, better weather (agriculture)', 'Movement ALONG curve: change in own price only'],
    examApplication: 'Use for any price/quantity analysis. Always start by identifying which curve shifts and why. Apply to policy questions: a carbon tax shifts S left → higher P, lower Q.',
    commonMistakes: ['Saying "price rises causes demand to fall" — this is a MOVEMENT along the curve, not a shift', 'Confusing a shift IN supply vs a MOVE along supply', 'Forgetting that both curves shift simultaneously in some scenarios'],
  },
  {
    id: 'monopoly', paper: 'Paper 1', topic: 'Market Structures',
    title: 'Monopoly Diagram',
    summary: 'Shows profit-maximising monopolist pricing above MC, generating supernormal profit and deadweight welfare loss.',
    render: MonopolySVG,
    keyLabels: ['AR = Average Revenue = Demand curve (P read off here)', 'MR = Marginal Revenue (steeper than AR, cuts x-axis at half the AR intercept)', 'MC = Marginal Cost', 'Qm = profit-maximising output (MR = MC)', 'Pm = monopoly price (from AR at Qm)', 'ACm = average cost at Qm', 'Shaded rectangle = supernormal profit (P − AC) × Q', 'Triangle = deadweight welfare loss'],
    shiftRules: ['MC shifts up: higher input costs, increased regulation', 'Demand (AR) shifts: change in consumer preferences, income', 'AC shifts: technology change, economies of scale'],
    examApplication: 'Essential for monopoly harm essays. Show: (1) MR = MC → Qm; (2) Price from AR → Pm > ACm → supernormal profit; (3) Pm > MC → allocative inefficiency; (4) Welfare loss triangle. Then evaluate with natural monopoly, dynamic efficiency, regulation.',
    commonMistakes: ['Drawing MR with the same slope as AR — MR is twice as steep', 'Forgetting to shade the welfare loss triangle', 'Not explaining what the areas on the diagram represent in the text', 'Drawing MC above the AR curve (firm would not produce)'],
  },
  {
    id: 'neg-externality', paper: 'Paper 1', topic: 'Market Failure',
    title: 'Negative Externality (Production)',
    summary: 'MSC > MPC because production imposes external costs on third parties. Market overproduces at Qm vs social optimum Q*.',
    render: NegExternalitySVG,
    keyLabels: ['MPC = Marginal Private Cost (the firm\'s supply curve)', 'MSC = Marginal Social Cost = MPC + MEC', 'MEC = Marginal External Cost (vertical gap between MSC and MPC)', 'MPB = D = Demand = Marginal Private Benefit', 'Q* = social optimum (MSB = MSC)', 'Qm = free market output (MPB = MPC)', 'WL = Welfare loss triangle (between Q* and Qm)'],
    shiftRules: ['Pigouvian tax of MEC shifts MPC up to MSC → corrects to Q*', 'Tradeable permits set cap at Q* → guarantee quantity'],
    examApplication: 'Draw for any pollution/carbon/noise question. Show overproduction Qm > Q* and welfare loss triangle. Then discuss corrective policies: carbon tax (Pigouvian), UK ETS (permits), regulation (direct).',
    commonMistakes: ['Drawing MSC below MPC — should always be above', 'Forgetting to show the welfare loss triangle', 'Confusing production vs consumption externality (this diagram is for production)'],
  },
  {
    id: 'pos-externality', paper: 'Paper 1', topic: 'Market Failure',
    title: 'Positive Externality (Consumption)',
    summary: 'MSB > MPB because consumption generates external benefits to third parties. Market underproduces at Qm vs social optimum Q*.',
    render: PosExternalitySVG,
    keyLabels: ['MPB = Demand curve (private marginal benefit)', 'MSB = Marginal Social Benefit = MPB + MEB', 'MEB = Marginal External Benefit (gap between MSB and MPB)', 'MPC = S = Supply = Marginal Private Cost', 'Q* = social optimum (MSB = MPC)', 'Qm = free market output (MPB = MPC)', 'WL = Welfare loss (underproduction triangle)'],
    shiftRules: ['Subsidy to consumer: shifts MPB up toward MSB → increases Qm toward Q*', 'Government provision: supplies directly at Q*'],
    examApplication: 'Draw for education, healthcare, vaccination questions. Show underproduction and welfare loss. Corrective policies: subsidy, regulation (compulsion), merit good provision (NHS).',
    commonMistakes: ['Drawing MSB below MPB — it must be above (external benefit adds to private benefit)', 'Confusing positive externality in production (different diagram — MSC below MPC) with consumption'],
  },
  {
    id: 'ad-as', paper: 'Paper 2', topic: 'Macroeconomics',
    title: 'AD/AS Model',
    summary: 'Shows how equilibrium price level and national output are determined. LRAS is vertical at full employment output YFE.',
    render: ADASVg,
    keyLabels: ['AD = Aggregate Demand (C+I+G+X−M), downward sloping in P-Y space', 'SRAS = Short-Run Aggregate Supply, upward sloping', 'LRAS = Long-Run Aggregate Supply, VERTICAL at YFE (productive capacity)', 'YFE = Full employment output', 'P* = equilibrium price level'],
    shiftRules: ['AD shifts right: fiscal expansion (↑G, ↓T), monetary easing (↓i), export boost, consumer confidence rise', 'SRAS shifts: input cost changes (wages, oil)', 'LRAS shifts right: supply-side improvements (education, infrastructure, technology)'],
    examApplication: 'The foundation diagram for Paper 2. Use for: fiscal policy (AD shift), monetary policy (AD shift via I), supply-side policy (LRAS shift), inflation (P level change), output gap (distance between Y and YFE).',
    commonMistakes: ['Drawing LRAS as upward sloping — it is VERTICAL in the long run', 'Confusing shifts of AD with movements along AD', 'Not labelling YFE on the x-axis'],
  },
  {
    id: 'labour-market', paper: 'Paper 1', topic: 'Labour Markets',
    title: 'Competitive Labour Market & NMW',
    summary: 'Shows wage determination in a competitive market and the effect of a National Minimum Wage above equilibrium.',
    render: LabourMarketSVG,
    keyLabels: ['DL = Labour Demand = MRP (Marginal Revenue Product)', 'SL = Labour Supply', 'W* = equilibrium wage, L* = equilibrium employment', 'NMW = National Minimum Wage (set above W*)', 'L₁ = employment at NMW (less than L*)', 'L₂ = labour supplied at NMW (more than L*)', 'L₂ − L₁ = unemployment created by NMW'],
    shiftRules: ['Demand shifts right: higher output price, technology improvement raising MPL', 'Supply shifts right: immigration, population growth, reduced non-wage benefits of other jobs', 'NMW set higher: creates larger unemployment (L₂−L₁ grows)'],
    examApplication: 'Use for NMW essays (competitive market analysis). Then EVALUATE using the monopsony diagram — in monopsony markets, NMW can increase employment. Cite Card & Krueger empirical evidence.',
    commonMistakes: ['Not labelling both L₁ and L₂ — just showing "unemployment" as a gap', 'Forgetting that the unemployment gap (L₂−L₁) grows with elastic labour demand'],
  },
  {
    id: 'monopsony', paper: 'Paper 1', topic: 'Labour Markets',
    title: 'Monopsony Labour Market',
    summary: 'A single buyer of labour exploits its market power to pay below-competitive wages and hire fewer workers. Minimum wage can correct this.',
    render: MonopsonyLabourSVG,
    keyLabels: ['ACL = Average Cost of Labour = Supply curve (to hire more, must raise wages for ALL workers)', 'MLC = Marginal Labour Cost (steeper than ACL — extra worker costs more than their wage)', 'MRP = Labour Demand (Marginal Revenue Product)', 'Lm = monopsony employment (where MLC = MRP)', 'Wm = monopsony wage (below W* — exploitation)', 'W* = competitive equilibrium (where ACL = MRP)'],
    shiftRules: ['Minimum wage between Wm and W* → increases BOTH wages and employment', 'Minimum wage above W* → reduces employment (as in competitive model)'],
    examApplication: 'The KEY diagram for NMW evaluation. Shows how minimum wage can INCREASE employment in monopsony — reversing the competitive model prediction. "In a monopsonistic labour market, such as care homes dominated by NHS Trusts, a minimum wage moves the market toward the competitive equilibrium, raising both wages and employment."',
    commonMistakes: ['Drawing MLC = supply curve — MLC must be steeper/above ACL', 'Not distinguishing this from the competitive model diagram'],
  },
  {
    id: 'kinked-demand', paper: 'Paper 1', topic: 'Market Structures',
    title: 'Kinked Demand Curve (Oligopoly)',
    summary: 'Models price rigidity in oligopoly: rivals match price cuts but not price rises, creating a kink at the current price.',
    render: KinkedDemandSVG,
    keyLabels: ['Kink at current price P* and output Q*', 'Above kink: demand is ELASTIC (rivals don\'t match rise → firm loses market share)', 'Below kink: demand is INELASTIC (rivals match cut → firm doesn\'t gain share)', 'Discontinuous MR gap (between MR from elastic section and MR from inelastic)', 'MC can shift within the MR gap without changing P* or Q* → price rigidity'],
    shiftRules: ['If P* shifts: the whole kinked demand curve shifts', 'Kinked demand model cannot explain HOW the initial price P* is set'],
    examApplication: 'Draw to explain price rigidity in oligopoly — why oligopoly prices are stable even when costs change. Use with evaluation: "The kinked demand curve explains price STABILITY but not how price is initially SET, and does not predict price wars such as the UK supermarket price war of 2014-2016."',
    commonMistakes: ['Forgetting to show the discontinuity (gap) in MR', 'Claiming kinked demand explains collusion — it does NOT', 'Not showing MC in the MR gap (the key insight about price rigidity)'],
  },
  {
    id: 'perfect-competition-lr', paper: 'Paper 1', topic: 'Market Structures',
    title: 'Perfect Competition (Long Run)',
    summary: 'In perfect competition\'s long-run equilibrium: P = MC = minimum AC. No supernormal profit. Both allocative and productive efficiency achieved.',
    render: PerfectCompetitionLRSVG,
    keyLabels: ['Horizontal demand = AR = MR (firm is price taker — P is given by market)', 'AC = Average Cost (U-shaped)', 'MC = Marginal Cost (U-shaped, cuts AC at minimum)', 'Long-run equilibrium: P = MC = min AC', 'Normal profit only (P = AC)', 'Allocative efficiency: P = MC', 'Productive efficiency: P = min AC'],
    shiftRules: ['Supernormal profit in short run → attracts entry → S shifts right → P falls → back to normal profit', 'Losses in short run → exit → S shifts left → P rises → back to normal profit'],
    examApplication: 'Contrast with monopoly to show why monopoly causes market failure. "In perfect competition, P = MC = min AC (both efficient), but in monopoly P > MC and AC > min AC, resulting in allocative inefficiency and welfare loss."',
    commonMistakes: ['Drawing the demand curve as downward sloping — it is HORIZONTAL (firm is price taker)', 'Not labelling the long-run equilibrium point as P = AC = MC'],
  },
  {
    id: 'natural-monopoly', paper: 'Paper 1', topic: 'Market Structures',
    title: 'Natural Monopoly',
    summary: 'LRAC falls throughout — one firm can supply the entire market at lower cost than multiple smaller firms. Regulation needed to prevent monopoly pricing.',
    render: NaturalMonopolySVG,
    keyLabels: ['LRAC falls throughout (economies of scale persist over entire demand range)', 'MC is below LRAC and falling', 'Unregulated: MR = MC → Qpm, charges Ppm (monopoly price) → supernormal profit', 'Regulated: price set at LRAC → Preg, output Qreg (normal profit only)', 'P = MC pricing would cause losses (MC < LRAC)'],
    shiftRules: ['LRAC shifts down: technology improvement reduces network costs', 'Demand shifts: population growth, economic expansion'],
    examApplication: 'Use to justify why natural monopolies exist (water, electricity, rail) and why government regulates rather than breaks them up. "Regulation at Preg = LRAC achieves normal profit pricing without the losses of P = MC pricing, balancing efficiency with sustainability."',
    commonMistakes: ['Drawing an upward-sloping LRAC — in natural monopoly it MUST fall throughout', 'Not distinguishing unregulated vs regulated outcomes on the same diagram'],
  },
  {
    id: 'phillips-curve', paper: 'Paper 2', topic: 'Macroeconomics',
    title: 'Phillips Curve (SR & LR)',
    summary: 'Short-run inverse relationship between unemployment and inflation. Long-run curve is vertical at NAIRU — no permanent trade-off.',
    render: PhillipsCurveSVG,
    keyLabels: ['SRPC₁ = Short-Run Phillips Curve (downward sloping inverse relationship)', 'SRPC₂ = SRPC shifts up as inflation expectations rise', 'LRPC = Long-Run Phillips Curve (vertical at NAIRU)', 'NAIRU = Non-Accelerating Inflation Rate of Unemployment', 'Movement along SRPC: expansionary policy → lower U, higher π', '2% target line = BoE\'s inflation target'],
    shiftRules: ['SRPC shifts right: supply shocks (oil price rises), worsened inflation expectations', 'SRPC shifts left: supply-side improvements, improved expectations, technology gains', 'NAIRU moves: structural changes in labour market flexibility'],
    examApplication: 'Essential for Paper 2 macroeconomic objectives questions. "Expanding AD moves along SRPC — lower unemployment but higher inflation (short run). In the long run (Friedman), LRPC is vertical at NAIRU — the trade-off disappears as expectations adjust." Supply-side policies shift SRPC left (lower inflation at any unemployment rate).',
    commonMistakes: ['Confusing a movement along SRPC with a shift of SRPC', 'Drawing a downward-sloping LRPC — it is vertical', 'Forgetting that stagflation (1970s) shifted SRPC right (supply shock)'],
  },
  {
    id: 'ppf', paper: 'Paper 1 & 2', topic: 'Fundamentals',
    title: 'Production Possibility Frontier (PPF)',
    summary: 'Shows maximum combinations of two goods that can be produced given fixed resources. Points inside = inefficiency; outside = unattainable without growth.',
    render: PPFSvg,
    keyLabels: ['PPF₁ = original productive capacity', 'PPF₂ = expanded capacity (outward shift = economic growth)', 'Point X (inside) = productively inefficient (unemployed resources)', 'Point A (on PPF₁) = productively efficient', 'Point B (outside PPF₁) = unattainable until PPF shifts', 'Concave shape = increasing opportunity cost'],
    shiftRules: ['PPF shifts OUT: supply-side improvements (education, technology, capital investment)', 'PPF shifts IN: natural disasters, war, labour force decline', 'Movement along PPF: reallocation of resources between sectors'],
    examApplication: 'Use to illustrate economic growth (supply-side shift), opportunity cost (slope at any point), and the difference between growth and short-run demand changes. "Supply-side policies that improve labour productivity shift the PPF outward, enabling sustainable non-inflationary growth."',
    commonMistakes: ['Drawing a straight-line PPF — should be concave (increasing opportunity cost)', 'Confusing a movement along the PPF with an outward shift'],
  },
  {
    id: 'j-curve', paper: 'Paper 2', topic: 'International Economics',
    title: 'J-Curve',
    summary: 'Following currency depreciation, the current account initially worsens before improving — due to short-run quantity inelasticity of trade.',
    render: JCurveSVG,
    keyLabels: ['Depreciation: domestic currency weakens at the marked point', 'Short run: quantities fixed (contracts, habits) → import bills rise in domestic currency → CA worsens', 'Long run: quantities adjust → exports rise (cheaper), imports fall (expensive) → CA improves', 'Marshall-Lerner condition (|PEDx| + |PEDm| > 1) must hold for long-run improvement'],
    shiftRules: ['Steeper J: faster quantity adjustment, shorter worsening period', 'Flatter J: more inelastic trade flows, longer period of deterioration'],
    examApplication: 'Use in current account deficit or exchange rate policy essays. "Even if the Marshall-Lerner condition holds, the J-curve predicts that depreciation worsens the current account in the short run before improving it — meaning policy makers cannot expect immediate results from exchange rate adjustment."',
    commonMistakes: ['Drawing a smooth downward slope without the initial dip — the initial worsening is the key feature', 'Not explaining WHY the CA worsens first (short-run inelasticity of trade volumes)'],
  },
]

const diagramCategories = [
  { id: 'all', label: 'All', icon: '📐' },
  { id: 'Paper 1', label: 'Paper 1 (Micro)', icon: '🔬' },
  { id: 'Paper 2', label: 'Paper 2 (Macro)', icon: '📊' },
  { id: 'Paper 1 & 2', label: 'Both Papers', icon: '📋' },
]

function DiagramCard({ d }) {
  const [tab, setTab] = useState('diagram')
  const DiagramSVG = d.render

  return (
    <div style={{ background: 'white', borderRadius: 14, border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,.07)' }}>
      {/* Header */}
      <div style={{ padding: '16px 20px 12px' }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}>
          <span style={{ fontSize: '.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: 99, background: '#eef2ff', color: '#4f46e5', border: '1px solid #c7d2fe' }}>{d.paper}</span>
          <span style={{ fontSize: '.72rem', fontWeight: 600, padding: '3px 10px', borderRadius: 99, background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0' }}>{d.topic}</span>
        </div>
        <h3 style={{ margin: '0 0 6px', fontSize: '1rem', fontWeight: 800, color: '#1e293b' }}>{d.title}</h3>
        <p style={{ margin: 0, fontSize: '.83rem', color: '#64748b', lineHeight: 1.55 }}>{d.summary}</p>
      </div>

      {/* Tab bar */}
      <div style={{ display: 'flex', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        {[['diagram', '📐 Diagram'], ['labels', '🏷️ Key Labels'], ['shifts', '↕️ Shift Rules'], ['exam', '🎓 Exam Use'], ['mistakes', '⚠️ Mistakes']].map(([id, label]) => (
          <button key={id} onClick={() => setTab(id)} style={{ flex: 1, padding: '8px 4px', border: 'none', borderBottom: tab === id ? '2px solid #6366f1' : '2px solid transparent', background: tab === id ? '#eef2ff' : 'transparent', color: tab === id ? '#4f46e5' : '#64748b', fontSize: '.7rem', fontWeight: tab === id ? 700 : 500, cursor: 'pointer', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div style={{ padding: '16px 20px 18px' }}>
        {tab === 'diagram' && (
          <div style={{ display: 'flex', justifyContent: 'center', background: '#fafafa', borderRadius: 10, padding: '16px 8px' }}>
            <DiagramSVG />
          </div>
        )}
        {tab === 'labels' && (
          <ul style={{ margin: 0, padding: '0 0 0 16px', fontSize: '.84rem', color: '#374151', lineHeight: 2 }}>
            {d.keyLabels.map((l, i) => <li key={i}>{l}</li>)}
          </ul>
        )}
        {tab === 'shifts' && (
          <ul style={{ margin: 0, padding: '0 0 0 16px', fontSize: '.84rem', color: '#374151', lineHeight: 1.9 }}>
            {d.shiftRules.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        )}
        {tab === 'exam' && (
          <div style={{ background: '#eef2ff', borderRadius: 8, padding: '12px 16px', fontSize: '.85rem', color: '#312e81', lineHeight: 1.7 }}>
            {d.examApplication}
          </div>
        )}
        {tab === 'mistakes' && (
          <ul style={{ margin: 0, padding: '0 0 0 16px', fontSize: '.84rem', color: '#374151', lineHeight: 1.9 }}>
            {d.commonMistakes.map((m, i) => (
              <li key={i} style={{ color: '#991b1b' }}>⚠️ {m}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default function DiagramLibrary() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = diagrams.filter(d =>
    activeFilter === 'all' || d.paper.includes(activeFilter)
  )

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 48px' }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ margin: '0 0 6px', fontSize: '1.6rem', fontWeight: 800, color: '#1e293b' }}>📐 Diagram Library</h1>
        <p style={{ margin: 0, color: '#64748b', fontSize: '.9rem' }}>
          {diagrams.length} AQA Economics diagrams — with key labels, shift rules, exam application tips, and common mistakes.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
        {diagramCategories.map(cat => {
          const count = cat.id === 'all' ? diagrams.length : diagrams.filter(d => d.paper.includes(cat.id.replace(' & 2', ''))).length
          const active = activeFilter === cat.id
          return (
            <button key={cat.id} onClick={() => setActiveFilter(cat.id)} style={{ padding: '8px 18px', borderRadius: 10, border: active ? '2px solid #6366f1' : '2px solid #e2e8f0', background: active ? '#eef2ff' : 'white', color: active ? '#4f46e5' : '#475569', fontSize: '.84rem', fontWeight: active ? 700 : 500, cursor: 'pointer' }}>
              {cat.icon} {cat.label} ({count})
            </button>
          )
        })}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(420px, 100%), 1fr))', gap: 20 }}>
        {filtered.map(d => <DiagramCard key={d.id} d={d} />)}
      </div>
    </div>
  )
}
