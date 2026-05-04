import { useState } from 'react'

// AD-AS Model graph
// X-axis: Real Output (Y), 0-12
// Y-axis: Price Level (P), 0-12
// Yfe (potential output) = 8 (LRAS vertical line)
//
// AD: P = (10 + adShift) - 0.8*Y  → downward sloping
// SRAS: P = (1 + srasShift) + 0.6*Y → upward sloping (Keynesian slope)
// LRAS: vertical at Y = Yfe (8)

const W = 500, H = 360
const PL = 60, PR = 50, PT = 20, PB = 48
const GW = W - PL - PR
const GH = H - PT - PB
const YMAX = 12, PMAX = 12
const YFE_BASE = 8   // full employment output

function toSVG(y, p) {
  return [PL + (y / YMAX) * GW, PT + (1 - p / PMAX) * GH]
}

function adEquil(adShift, srasShift) {
  // AD: P = (10+adShift) - 0.8Y
  // SRAS: P = (1+srasShift) + 0.6Y
  // => (10+adShift) - 0.8Y = (1+srasShift) + 0.6Y
  // => 9 + adShift - srasShift = 1.4Y
  const Y = (9 + adShift - srasShift) / 1.4
  const P = (1 + srasShift) + 0.6 * Y
  return { Y: Math.max(0.5, Math.min(YMAX - 0.5, Y)), P: Math.max(0.5, Math.min(PMAX - 0.5, P)) }
}

function adLine(adShift) {
  // P = (10+adShift) - 0.8Y → Y = 0 gives P=10+adShift; P=0 gives Y=(10+adShift)/0.8
  const p0 = Math.min(PMAX, 10 + adShift)
  const yEnd = (10 + adShift) / 0.8
  const y1 = Math.min(YMAX, yEnd)
  const p1 = Math.max(0, (10 + adShift) - 0.8 * y1)
  return [toSVG(0, p0), toSVG(y1, p1)]
}

function srasLine(srasShift) {
  // P = (1+srasShift) + 0.6Y → at Y=0, P=1+srasShift; at Y=YMAX, P=1+srasShift+0.6*YMAX
  const p0 = Math.max(0, 1 + srasShift)
  const y0 = p0 === 0 ? -(1 + srasShift) / 0.6 : 0
  const y1 = Math.min(YMAX, (PMAX - (1 + srasShift)) / 0.6)
  const p1 = Math.min(PMAX, (1 + srasShift) + 0.6 * y1)
  return [toSVG(Math.max(0, y0), p0), toSVG(y1, p1)]
}

export default function ADASGraph() {
  const [adShift, setAdShift]     = useState(0)    // -3 to +3
  const [srasShift, setSrasShift] = useState(0)    // -2 to +2
  const [lrasShift, setLrasShift] = useState(0)    // -2 to +2

  const Yfe = YFE_BASE + lrasShift
  const { Y: Ye, P: Pe } = adEquil(adShift, srasShift)

  const [ad0, ad1] = adLine(adShift)
  const [sr0, sr1] = srasLine(srasShift)
  const [lrX] = toSVG(Yfe, 0)
  const [, lrYtop] = toSVG(Yfe, PMAX)
  const [, lrYbot] = toSVG(Yfe, 0)
  const [eX, eY] = toSVG(Ye, Pe)

  // Dashed lines to axes
  const [dashQx, dashQy] = toSVG(Ye, 0)
  const [, dashPy] = toSVG(0, Pe)

  const gap = Ye - Yfe
  const gapLabel = Math.abs(gap) < 0.3 ? null : gap > 0 ? 'Inflationary Gap' : 'Deflationary Gap'

  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: 520, display: 'block', margin: '0 auto' }}>
        {/* Background */}
        <rect x={PL} y={PT} width={GW} height={GH} fill="#f8fafc" rx="4" />

        {/* Grid */}
        {[2, 4, 6, 8, 10].map(y => {
          const [x] = toSVG(y, 0)
          return <line key={y} x1={x} y1={PT} x2={x} y2={PT + GH} stroke="#e2e8f0" strokeWidth="1" />
        })}
        {[2, 4, 6, 8, 10].map(p => {
          const [, yc] = toSVG(0, p)
          return <line key={p} x1={PL} y1={yc} x2={PL + GW} y2={yc} stroke="#e2e8f0" strokeWidth="1" />
        })}

        {/* Axes */}
        <line x1={PL} y1={PT} x2={PL} y2={PT + GH} stroke="#334155" strokeWidth="2" />
        <line x1={PL} y1={PT + GH} x2={PL + GW} y2={PT + GH} stroke="#334155" strokeWidth="2" />

        {/* Axis labels */}
        <text x={PL - 12} y={PT + GH / 2} textAnchor="middle" fontSize="12" fill="#475569" fontWeight="700"
          transform={`rotate(-90, ${PL - 12}, ${PT + GH / 2})`}>Price Level (P)</text>
        <text x={PL + GW / 2} y={H - 6} textAnchor="middle" fontSize="12" fill="#475569" fontWeight="700">
          Real Output (Y)
        </text>

        {/* Tick labels */}
        {[0, 2, 4, 6, 8, 10, 12].map(p => {
          const [, yc] = toSVG(0, p)
          return <text key={p} x={PL - 6} y={yc} textAnchor="end" dominantBaseline="middle" fontSize="9" fill="#64748b">{p}</text>
        })}
        {[0, 2, 4, 6, 8, 10, 12].map(y => {
          const [x] = toSVG(y, 0)
          return <text key={y} x={x} y={PT + GH + 14} textAnchor="middle" fontSize="9" fill="#64748b">{y}</text>
        })}

        {/* Equilibrium dashed lines */}
        <line x1={eX} y1={eY} x2={dashQx} y2={dashQy} stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,4" />
        <line x1={eX} y1={eY} x2={PL} y2={dashPy} stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,4" />

        {/* LRAS */}
        <line x1={lrX} y1={lrYtop} x2={lrX} y2={lrYbot} stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
        <text x={lrX + 5} y={lrYtop + 10} fontSize="12" fill="#7c3aed" fontWeight="800">LRAS</text>
        <text x={lrX + 3} y={lrYbot - 5} fontSize="10" fill="#7c3aed">Yfe={Yfe.toFixed(1)}</text>

        {/* SRAS */}
        <line x1={sr0[0]} y1={sr0[1]} x2={sr1[0]} y2={sr1[1]} stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
        <text x={sr1[0] + 4} y={sr1[1]} fontSize="12" fill="#d97706" fontWeight="700">SRAS</text>

        {/* AD */}
        <line x1={ad0[0]} y1={ad0[1]} x2={ad1[0]} y2={ad1[1]} stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
        <text x={ad1[0] - 4} y={ad1[1] - 8} fontSize="12" fill="#1d4ed8" fontWeight="700">AD</text>

        {/* Output gap shading */}
        {gapLabel && (
          <rect
            x={Math.min(eX, lrX)} y={lrYtop}
            width={Math.abs(eX - lrX)} height={lrYbot - lrYtop}
            fill={gap > 0 ? 'rgba(239,68,68,.1)' : 'rgba(59,130,246,.1)'}
          />
        )}

        {/* Equilibrium point */}
        <circle cx={eX} cy={eY} r={6} fill="#4f46e5" stroke="white" strokeWidth="2" />
        <text x={eX + 10} y={eY - 6} fontSize="10" fill="#4338ca" fontWeight="700">
          E (Y={Ye.toFixed(1)}, P={Pe.toFixed(1)})
        </text>
      </svg>

      {/* Sliders */}
      <div style={{ maxWidth: 460, margin: '12px auto 0', display: 'grid', gap: 14 }}>
        <SliderRow
          label="AD Shift" color="#3b82f6"
          value={adShift} onChange={setAdShift}
          min={-3} max={3}
          leftLabel="AD falls ←" rightLabel="→ AD rises"
        />
        <SliderRow
          label="SRAS Shift" color="#f59e0b"
          value={srasShift} onChange={setSrasShift}
          min={-2} max={2}
          leftLabel="Supply increases →" rightLabel="← Supply falls (cost-push)"
          invert
        />
        <SliderRow
          label="LRAS / Yfe Shift" color="#7c3aed"
          value={lrasShift} onChange={setLrasShift}
          min={-2} max={2}
          leftLabel="Output potential ↓" rightLabel="↑ Output potential"
        />

        <div style={{
          background: '#f5f3ff', border: '1px solid #c4b5fd',
          borderRadius: 8, padding: '10px 16px', textAlign: 'center',
        }}>
          <span style={{ fontSize: '.8rem', color: '#6d28d9', fontWeight: 600 }}>
            Equilibrium: Y* = {Ye.toFixed(2)}, P* = {Pe.toFixed(2)}
            {gapLabel && <> · <span style={{ color: gap > 0 ? '#ef4444' : '#3b82f6' }}>{gapLabel}</span></>}
          </span>
        </div>

        <button
          onClick={() => { setAdShift(0); setSrasShift(0); setLrasShift(0) }}
          style={{
            background: 'none', border: '1px solid var(--border)',
            borderRadius: 8, padding: '8px', cursor: 'pointer',
            color: 'var(--text-muted)', fontSize: '.8rem',
          }}
        >
          ↺ Reset
        </button>
      </div>

      <ADASAnalysis adShift={adShift} srasShift={srasShift} lrasShift={lrasShift} Ye={Ye} Pe={Pe} Yfe={Yfe} />
    </div>
  )
}

function SliderRow({ label, value, onChange, min, max, leftLabel, rightLabel, color, invert }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontSize: '.8rem', fontWeight: 700 }}>{label}</span>
        <span style={{ fontSize: '.8rem', fontWeight: 700, color }}>{value > 0 ? '+' : ''}{value.toFixed(1)}</span>
      </div>
      <input type="range" min={min} max={max} step={0.5} value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        style={{ width: '100%', accentColor: color }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.7rem', color: 'var(--text-muted)' }}>
        <span>{leftLabel}</span><span>{rightLabel}</span>
      </div>
    </div>
  )
}

function ADASAnalysis({ adShift, srasShift, lrasShift, Ye, Pe, Yfe }) {
  const lines = []
  if (adShift > 0) lines.push(`AD has increased — could be caused by: fiscal stimulus (G↑), lower interest rates boosting investment, rising consumer confidence. This raises both output (Y) and the price level (inflation).`)
  if (adShift < 0) lines.push(`AD has fallen — could be caused by: higher taxes (T↑), rising interest rates reducing investment, falling consumer confidence. This lowers output (risk of recession) and reduces inflationary pressure.`)
  if (srasShift < 0) lines.push(`SRAS has shifted left — a supply shock. Likely cause: rising energy or raw material costs, supply chain disruption. This creates stagflation: higher prices AND lower output.`)
  if (srasShift > 0) lines.push(`SRAS has shifted right — lower input costs or productivity improvements. Output rises and prices fall — a benign supply-side improvement.`)
  if (lrasShift > 0) lines.push(`LRAS has shifted right — long-run growth in productive capacity. Could be from investment in capital/technology, improved education, or immigration increasing labour force.`)
  if (lrasShift < 0) lines.push(`LRAS has shifted left — a fall in productive capacity. Could result from capital depreciation, emigration, or structural decline.`)

  const gap = Ye - Yfe
  if (Math.abs(gap) > 0.3) {
    lines.push(gap > 0
      ? `⚠️ Positive output gap: Economy producing beyond Yfe. This creates demand-pull inflation. Policy response: raise interest rates or tighten fiscal policy.`
      : `⚠️ Negative output gap: Economy below full capacity — unemployment above natural rate. Policy response: expansionary monetary or fiscal policy to boost AD.`)
  }

  if (!lines.length) return null

  return (
    <div style={{
      marginTop: 16, background: '#fefce8', border: '1px solid #fde047',
      borderRadius: 8, padding: '12px 16px', fontSize: '.825rem', color: '#854d0e',
    }}>
      <div style={{ fontWeight: 700, marginBottom: 8 }}>📝 AD-AS Analysis</div>
      {lines.map((l, i) => <p key={i} style={{ marginBottom: 6 }}>{l}</p>)}
    </div>
  )
}
