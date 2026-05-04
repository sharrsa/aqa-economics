import { useState } from 'react'

// Graph coordinate system
// Economics: Q in [0,10], P in [0,12]
// SVG canvas: 480 × 360
const W = 480, H = 360
const PL = 58, PR = 20, PT = 20, PB = 48   // padding
const GW = W - PL - PR   // graph width
const GH = H - PT - PB   // graph height
const QMAX = 10, PMAX = 12

function toSVG(q, p) {
  return [PL + (q / QMAX) * GW, PT + (1 - p / PMAX) * GH]
}

// Demand: P = (10 + dShift) - 1.5 * Q  → Q = ((10+dShift) - P) / 1.5
// Supply: P = (2 - sShift) + Q          → Q = P - (2 - sShift)
function equilibrium(dShift, sShift) {
  // (10+dShift) - 1.5Q = (2-sShift) + Q  =>  8+dShift+sShift = 2.5Q
  const Q = (8 + dShift + sShift) / 2.5
  const P = (2 - sShift) + Q
  return { Q: Math.max(0, Math.min(QMAX, Q)), P: Math.max(0, Math.min(PMAX, P)) }
}

function demandLine(dShift) {
  // from Q=0, P=10+dShift  to  P=0, Q=(10+dShift)/1.5
  const p0 = Math.min(PMAX, 10 + dShift)
  const q0 = 0
  const qEnd = (10 + dShift) / 1.5
  const q1 = Math.min(QMAX, qEnd)
  const p1 = (10 + dShift) - 1.5 * q1
  return [toSVG(q0, p0), toSVG(q1, Math.max(0, p1))]
}

function supplyLine(sShift) {
  // P = (2 - sShift) + Q  →  at Q=0, P=(2-sShift); at P=PMAX, Q=PMAX-(2-sShift)
  const intercept = 2 - sShift
  // start from where P=0 or Q=0 (whichever is first in domain)
  const q0 = intercept >= 0 ? 0 : -intercept     // Q where P=0 (if intercept negative, P=0 at Q=-intercept)
  const p0 = Math.max(0, intercept)
  const q1 = Math.min(QMAX, PMAX - intercept)
  const p1 = intercept + q1
  return [toSVG(q0, p0), toSVG(q1, Math.min(PMAX, p1))]
}

export default function SupplyDemandGraph() {
  const [dShift, setDShift] = useState(0)   // -3 to +3
  const [sShift, setSShift] = useState(0)   // -3 to +3

  const { Q: Qe, P: Pe } = equilibrium(dShift, sShift)
  const [d0, d1] = demandLine(dShift)
  const [s0, s1] = supplyLine(sShift)
  const [eX, eY] = toSVG(Qe, Pe)

  // Dashed lines to axes
  const [axQx, axQy] = toSVG(Qe, 0)
  const [axPx, axPy] = toSVG(0, Pe)

  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', maxWidth: 500, display: 'block', margin: '0 auto' }}>
        {/* Background */}
        <rect x={PL} y={PT} width={GW} height={GH} fill="#f8fafc" rx="4" />

        {/* Grid lines */}
        {[2, 4, 6, 8, 10].map(q => {
          const [x] = toSVG(q, 0)
          return <line key={q} x1={x} y1={PT} x2={x} y2={PT + GH} stroke="#e2e8f0" strokeWidth="1" />
        })}
        {[2, 4, 6, 8, 10, 12].map(p => {
          const [, y] = toSVG(0, p)
          return <line key={p} x1={PL} y1={y} x2={PL + GW} y2={y} stroke="#e2e8f0" strokeWidth="1" />
        })}

        {/* Axes */}
        <line x1={PL} y1={PT} x2={PL} y2={PT + GH} stroke="#334155" strokeWidth="2" />
        <line x1={PL} y1={PT + GH} x2={PL + GW} y2={PT + GH} stroke="#334155" strokeWidth="2" />

        {/* Axis labels — Price */}
        <text x={PL - 10} y={PT + GH / 2} textAnchor="middle" dominantBaseline="middle"
          fontSize="13" fill="#475569" fontWeight="700"
          transform={`rotate(-90, ${PL - 10}, ${PT + GH / 2})`}>Price (P)</text>

        {/* Axis labels — Quantity */}
        <text x={PL + GW / 2} y={H - 6} textAnchor="middle" fontSize="13" fill="#475569" fontWeight="700">
          Quantity (Q)
        </text>

        {/* Y-axis tick labels */}
        {[0, 2, 4, 6, 8, 10, 12].map(p => {
          const [, y] = toSVG(0, p)
          return <text key={p} x={PL - 6} y={y} textAnchor="end" dominantBaseline="middle" fontSize="10" fill="#64748b">{p}</text>
        })}

        {/* X-axis tick labels */}
        {[0, 2, 4, 6, 8, 10].map(q => {
          const [x] = toSVG(q, 0)
          return <text key={q} x={x} y={PT + GH + 14} textAnchor="middle" fontSize="10" fill="#64748b">{q}</text>
        })}

        {/* Dashed equilibrium guide lines */}
        <line x1={eX} y1={eY} x2={axQx} y2={axQy} stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,4" />
        <line x1={eX} y1={eY} x2={axPx} y2={axPy} stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,4" />

        {/* Demand curve */}
        <line
          x1={d0[0]} y1={d0[1]} x2={d1[0]} y2={d1[1]}
          stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round"
        />
        <text x={d1[0] - 4} y={d1[1] - 8} fontSize="13" fill="#2563eb" fontWeight="700">D</text>

        {/* Supply curve */}
        <line
          x1={s0[0]} y1={s0[1]} x2={s1[0]} y2={s1[1]}
          stroke="#f97316" strokeWidth="2.5" strokeLinecap="round"
        />
        <text x={s1[0] + 4} y={s1[1] + 4} fontSize="13" fill="#ea580c" fontWeight="700">S</text>

        {/* Equilibrium point */}
        <circle cx={eX} cy={eY} r={6} fill="#4f46e5" stroke="white" strokeWidth="2" />
        <text x={eX + 10} y={eY - 6} fontSize="11" fill="#4338ca" fontWeight="700">
          E (Q={Qe.toFixed(1)}, P={Pe.toFixed(1)})
        </text>
      </svg>

      {/* Sliders */}
      <div style={{ maxWidth: 440, margin: '16px auto 0', display: 'grid', gap: 16 }}>
        <SliderRow
          label="Demand Shift"
          value={dShift}
          onChange={setDShift}
          leftLabel="Decrease (← left)"
          rightLabel="Increase (right →)"
          color="#3b82f6"
        />
        <SliderRow
          label="Supply Shift"
          value={sShift}
          onChange={setSShift}
          leftLabel="Decrease (← left)"
          rightLabel="Increase (right →)"
          color="#f97316"
        />

        {/* Equilibrium readout */}
        <div style={{
          background: '#f0f4ff', border: '1px solid #c7d2fe',
          borderRadius: 8, padding: '10px 16px', textAlign: 'center',
        }}>
          <span style={{ fontSize: '.8rem', color: '#4338ca', fontWeight: 600 }}>
            Equilibrium: Q* = {Qe.toFixed(2)}, P* = £{Pe.toFixed(2)}
          </span>
        </div>

        <button
          onClick={() => { setDShift(0); setSShift(0) }}
          style={{
            background: 'none', border: '1px solid var(--border)',
            borderRadius: 8, padding: '8px', cursor: 'pointer',
            color: 'var(--text-muted)', fontSize: '.8rem',
          }}
        >
          ↺ Reset to baseline
        </button>
      </div>

      {/* Analysis text */}
      <AnalysisBox dShift={dShift} sShift={sShift} Qe={Qe} Pe={Pe} />
    </div>
  )
}

function SliderRow({ label, value, onChange, leftLabel, rightLabel, color }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontSize: '.8rem', fontWeight: 700, color: 'var(--text)' }}>{label}</span>
        <span style={{ fontSize: '.8rem', fontWeight: 700, color }}>
          {value > 0 ? '+' : ''}{value.toFixed(1)}
        </span>
      </div>
      <input
        type="range" min={-3} max={3} step={0.5}
        value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        style={{ width: '100%', accentColor: color }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.7rem', color: 'var(--text-muted)' }}>
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>
    </div>
  )
}

function AnalysisBox({ dShift, sShift, Qe, Pe }) {
  const lines = []

  if (dShift > 0) lines.push(`Demand has increased (rightward shift by +${dShift}). This could be due to higher income (normal good), a rise in the price of a substitute, or a positive advertising campaign.`)
  if (dShift < 0) lines.push(`Demand has decreased (leftward shift by ${dShift}). This could be due to falling consumer income, a fall in the price of a substitute, or a rise in the price of a complement.`)
  if (sShift > 0) lines.push(`Supply has increased (rightward shift by +${sShift}). This could be due to lower production costs, improved technology, or new firms entering the market.`)
  if (sShift < 0) lines.push(`Supply has decreased (leftward shift by ${sShift}). This could be due to higher input costs (e.g. energy prices) or adverse weather affecting agricultural output.`)

  if (!lines.length) return null

  return (
    <div style={{
      marginTop: 16, background: '#f0fdf4', border: '1px solid #86efac',
      borderRadius: 8, padding: '12px 16px', fontSize: '.825rem', color: '#166534',
    }}>
      <div style={{ fontWeight: 700, marginBottom: 6 }}>📝 Economic Analysis</div>
      {lines.map((l, i) => <p key={i} style={{ marginBottom: 4 }}>{l}</p>)}
      <p style={{ marginTop: 8, fontWeight: 600 }}>
        Result: Equilibrium moves to Q* = {Qe.toFixed(2)}, P* = £{Pe.toFixed(2)}.
      </p>
    </div>
  )
}
