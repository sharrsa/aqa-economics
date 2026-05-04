import { useState, useMemo } from 'react'
import { formulas, formulaCategories } from '../data/formulas'

function Calculator({ formula }) {
  const [inputs, setInputs] = useState({})
  const [result, setResult] = useState(null)

  if (formula.id === 'ped' || formula.id === 'pes' || formula.id === 'yed' || formula.id === 'xed') {
    const numeratorLabel = formula.id === 'yed' ? '% change in Quantity Demanded' : formula.id === 'xed' ? '% change in Qd of Good A' : '% change in Quantity'
    const denominatorLabel = formula.id === 'yed' ? '% change in Income' : formula.id === 'xed' ? '% change in Price of Good B' : '% change in Price'
    return (
      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: '14px 16px' }}>
        <div style={{ fontSize: '.78rem', fontWeight: 700, color: '#374151', marginBottom: 10 }}>🧮 Quick Calculator</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12 }}>
          <div>
            <label style={{ display: 'block', fontSize: '.75rem', color: '#64748b', marginBottom: 3 }}>{numeratorLabel} (%)</label>
            <input type="number" placeholder="e.g. -10" value={inputs.num || ''} onChange={e => setInputs(p => ({ ...p, num: e.target.value }))}
              style={{ width: '100%', padding: '6px 10px', border: '1px solid #e2e8f0', borderRadius: 6, fontSize: '.85rem', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '.75rem', color: '#64748b', marginBottom: 3 }}>{denominatorLabel} (%)</label>
            <input type="number" placeholder="e.g. 20" value={inputs.den || ''} onChange={e => setInputs(p => ({ ...p, den: e.target.value }))}
              style={{ width: '100%', padding: '6px 10px', border: '1px solid #e2e8f0', borderRadius: 6, fontSize: '.85rem', boxSizing: 'border-box' }} />
          </div>
        </div>
        <button onClick={() => {
          const n = parseFloat(inputs.num), d = parseFloat(inputs.den)
          if (!isNaN(n) && !isNaN(d) && d !== 0) setResult((n / d).toFixed(2))
        }} style={{ padding: '6px 14px', background: '#6366f1', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: '.82rem', fontWeight: 600 }}>Calculate</button>
        {result !== null && (
          <div style={{ marginTop: 10, padding: '8px 12px', background: '#eef2ff', borderRadius: 6, fontSize: '.85rem', fontWeight: 700, color: '#3730a3' }}>
            Result = {result}
            {formula.id === 'ped' && parseFloat(result) !== 0 && (
              <span style={{ fontWeight: 400, color: '#4f46e5', marginLeft: 8 }}>
                ({Math.abs(parseFloat(result)) > 1 ? 'Price Elastic' : Math.abs(parseFloat(result)) === 1 ? 'Unit Elastic' : 'Price Inelastic'})
              </span>
            )}
            {formula.id === 'yed' && parseFloat(result) !== 0 && (
              <span style={{ fontWeight: 400, color: '#4f46e5', marginLeft: 8 }}>
                ({parseFloat(result) > 1 ? 'Luxury' : parseFloat(result) > 0 ? 'Normal Good' : 'Inferior Good'})
              </span>
            )}
          </div>
        )}
      </div>
    )
  }

  if (formula.id === 'percentage-change') {
    return (
      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: '14px 16px' }}>
        <div style={{ fontSize: '.78rem', fontWeight: 700, color: '#374151', marginBottom: 10 }}>🧮 Quick Calculator</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12 }}>
          <div>
            <label style={{ display: 'block', fontSize: '.75rem', color: '#64748b', marginBottom: 3 }}>Old Value</label>
            <input type="number" placeholder="e.g. 100" value={inputs.old || ''} onChange={e => setInputs(p => ({ ...p, old: e.target.value }))}
              style={{ width: '100%', padding: '6px 10px', border: '1px solid #e2e8f0', borderRadius: 6, fontSize: '.85rem', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '.75rem', color: '#64748b', marginBottom: 3 }}>New Value</label>
            <input type="number" placeholder="e.g. 115" value={inputs.new || ''} onChange={e => setInputs(p => ({ ...p, new: e.target.value }))}
              style={{ width: '100%', padding: '6px 10px', border: '1px solid #e2e8f0', borderRadius: 6, fontSize: '.85rem', boxSizing: 'border-box' }} />
          </div>
        </div>
        <button onClick={() => {
          const o = parseFloat(inputs.old), n = parseFloat(inputs.new)
          if (!isNaN(o) && !isNaN(n) && o !== 0) setResult(((n - o) / o * 100).toFixed(2))
        }} style={{ padding: '6px 14px', background: '#6366f1', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: '.82rem', fontWeight: 600 }}>Calculate</button>
        {result !== null && (
          <div style={{ marginTop: 10, padding: '8px 12px', background: '#eef2ff', borderRadius: 6, fontSize: '.85rem', fontWeight: 700, color: '#3730a3' }}>
            % Change = {result}%
          </div>
        )}
      </div>
    )
  }

  return null
}

function FormulaCard({ formula }) {
  const [showWorkings, setShowWorkings] = useState(false)
  const [showCalc, setShowCalc] = useState(false)
  const hasCalc = ['ped', 'pes', 'yed', 'xed', 'percentage-change'].includes(formula.id)

  return (
    <div style={{ background: 'white', borderRadius: 12, border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,.06)' }}>
      <div style={{ padding: '18px 20px 14px' }}>
        <h3 style={{ margin: '0 0 10px', fontSize: '1rem', fontWeight: 800, color: '#1e293b' }}>{formula.name}</h3>
        <div style={{ background: '#1e293b', borderRadius: 8, padding: '12px 16px', marginBottom: 14 }}>
          <code style={{ color: '#a5f3fc', fontSize: '.9rem', fontFamily: 'monospace', whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>
            {formula.formula}
          </code>
        </div>

        {formula.interpretation && (
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: '.75rem', fontWeight: 700, color: '#64748b', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '.5px' }}>Interpretation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {formula.interpretation.map((interp, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, fontSize: '.82rem' }}>
                  <span style={{ color: '#6366f1', fontFamily: 'monospace', fontWeight: 700, flexShrink: 0 }}>{interp.range}</span>
                  <span style={{ color: '#64748b' }}>→ <strong>{interp.label}:</strong> {interp.meaning}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {formula.examTip && (
          <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 8, padding: '10px 14px', fontSize: '.82rem', color: '#78350f', lineHeight: 1.6 }}>
            <strong>Exam tip:</strong> {formula.examTip}
          </div>
        )}
      </div>

      <div style={{ borderTop: '1px solid #f1f5f9' }}>
        <div style={{ display: 'flex' }}>
          <button onClick={() => setShowWorkings(p => !p)} style={{ flex: 1, padding: '10px 16px', border: 'none', borderRight: hasCalc ? '1px solid #f1f5f9' : 'none', cursor: 'pointer', background: showWorkings ? '#f0fdf4' : 'transparent', fontSize: '.8rem', fontWeight: 600, color: showWorkings ? '#065f46' : '#64748b' }}>
            📋 Worked Example
          </button>
          {hasCalc && (
            <button onClick={() => setShowCalc(p => !p)} style={{ flex: 1, padding: '10px 16px', border: 'none', cursor: 'pointer', background: showCalc ? '#eef2ff' : 'transparent', fontSize: '.8rem', fontWeight: 600, color: showCalc ? '#4f46e5' : '#64748b' }}>
              🧮 Calculator
            </button>
          )}
        </div>

        {showWorkings && formula.workedExample && (
          <div style={{ padding: '14px 20px', background: '#f0fdf4' }}>
            <div style={{ marginBottom: 8, fontSize: '.83rem', fontWeight: 600, color: '#065f46' }}>{formula.workedExample.scenario}</div>
            <ol style={{ margin: 0, padding: '0 0 0 18px', fontSize: '.83rem', color: '#374151', lineHeight: 1.7 }}>
              {formula.workedExample.steps.map((s, i) => <li key={i} style={{ marginBottom: 3, fontFamily: 'monospace' }}>{s}</li>)}
            </ol>
            <div style={{ marginTop: 10, padding: '8px 12px', background: 'white', border: '1px solid #bbf7d0', borderRadius: 6, fontSize: '.85rem', fontWeight: 700, color: '#065f46' }}>
              ✅ {formula.workedExample.answer}
            </div>
          </div>
        )}

        {showCalc && hasCalc && (
          <div style={{ padding: '14px 20px' }}>
            <Calculator formula={formula} />
          </div>
        )}
      </div>
    </div>
  )
}

export default function FormulaSheet() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return formulas.filter(f => {
      const matchCat = activeCategory === 'all' || f.category === activeCategory
      if (!matchCat) return false
      if (!q) return true
      return f.name.toLowerCase().includes(q) || f.formula.toLowerCase().includes(q)
    })
  }, [search, activeCategory])

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '32px 20px 48px' }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ margin: '0 0 6px', fontSize: '1.6rem', fontWeight: 800, color: '#1e293b' }}>🔢 Formulas & Calculators</h1>
        <p style={{ margin: 0, color: '#64748b', fontSize: '.9rem' }}>Every AQA Economics formula with worked examples and built-in calculators.</p>
      </div>

      <div style={{ position: 'relative', marginBottom: 16 }}>
        <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}>🔍</span>
        <input type="text" placeholder="Search formulas…" value={search} onChange={e => setSearch(e.target.value)}
          style={{ width: '100%', padding: '10px 14px 10px 40px', border: '1.5px solid #e2e8f0', borderRadius: 10, fontSize: '.9rem', outline: 'none', boxSizing: 'border-box' }}
          onFocus={e => { e.target.style.borderColor = '#6366f1' }} onBlur={e => { e.target.style.borderColor = '#e2e8f0' }} />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 28 }}>
        {formulaCategories.map(cat => {
          const count = cat.id === 'all' ? formulas.length : formulas.filter(f => f.category === cat.id).length
          const active = activeCategory === cat.id
          return (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)} style={{ padding: '6px 12px', borderRadius: 99, border: active ? '1.5px solid #6366f1' : '1.5px solid #e2e8f0', background: active ? '#6366f1' : 'white', color: active ? 'white' : '#475569', fontSize: '.78rem', fontWeight: active ? 700 : 500, cursor: 'pointer' }}>
              {cat.icon} {cat.label} ({count})
            </button>
          )
        })}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {filtered.map(f => <FormulaCard key={f.id} formula={f} />)}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#94a3b8' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 10 }}>🔢</div>
          <div style={{ fontWeight: 600 }}>No formulas match your search.</div>
        </div>
      )}
    </div>
  )
}
