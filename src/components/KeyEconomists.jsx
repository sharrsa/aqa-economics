import { useState, useMemo } from 'react'
import { keyEconomists } from '../data/economists'

const eraColours = {
  'Classical':            { bg: '#fef3c7', text: '#92400e', border: '#fde68a' },
  'Keynesian':            { bg: '#dbeafe', text: '#1e40af', border: '#93c5fd' },
  'Monetarist':           { bg: '#fee2e2', text: '#991b1b', border: '#fca5a5' },
  'Welfare Economics':    { bg: '#d1fae5', text: '#065f46', border: '#6ee7b7' },
  'Industrial Organisation':{ bg: '#ede9fe', text: '#5b21b6', border: '#c4b5fd' },
  'New Institutional Economics':{ bg: '#fce7f3', text: '#9d174d', border: '#f9a8d4' },
  'Labour Economics':     { bg: '#f0fdf4', text: '#166534', border: '#bbf7d0' },
  'Institutional':        { bg: '#fff7ed', text: '#9a3412', border: '#fdba74' },
  'Post-Keynesian':       { bg: '#f0f9ff', text: '#0c4a6e', border: '#7dd3fc' },
  'Development Economics':{ bg: '#fdf4ff', text: '#581c87', border: '#e9d5ff' },
  'New Keynesian / Trade Theory':{ bg: '#ecfdf5', text: '#064e3b', border: '#a7f3d0' },
  'Growth Theory':        { bg: '#f8fafc', text: '#334155', border: '#cbd5e1' },
}

function EraTag({ era }) {
  const s = eraColours[era] || { bg: '#f1f5f9', text: '#475569', border: '#e2e8f0' }
  return (
    <span style={{ fontSize: '.7rem', fontWeight: 600, padding: '2px 8px', borderRadius: 99, background: s.bg, color: s.text, border: `1px solid ${s.border}` }}>
      {era}
    </span>
  )
}

function EconomistCard({ ec }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div style={{ background: 'white', borderRadius: 12, border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,.06)' }}>
      <div style={{ padding: '18px 20px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
          <div style={{ fontSize: '2rem', lineHeight: 1, flexShrink: 0 }}>{ec.portrait}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
              <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 800, color: '#1e293b' }}>{ec.name}</h3>
              <span style={{ fontSize: '.75rem', color: '#94a3b8' }}>{ec.years} · {ec.nationality}</span>
            </div>
            <div style={{ marginTop: 5, display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              <EraTag era={ec.era} />
              <span style={{ fontSize: '.7rem', padding: '2px 8px', borderRadius: 99, background: ec.category === 'micro' ? '#ede9fe' : '#dbeafe', color: ec.category === 'micro' ? '#5b21b6' : '#1e40af', border: `1px solid ${ec.category === 'micro' ? '#c4b5fd' : '#93c5fd'}`, fontWeight: 600 }}>
                {ec.category === 'micro' ? 'Microeconomics' : 'Macroeconomics'}
              </span>
            </div>
            <p style={{ margin: '10px 0 0', fontSize: '.85rem', color: '#374151', lineHeight: 1.6, fontStyle: 'italic' }}>
              "{ec.keyWork}"
            </p>
          </div>
        </div>

        <p style={{ margin: '12px 0 0', fontSize: '.875rem', color: '#1e293b', lineHeight: 1.65 }}>
          {ec.coreIdea}
        </p>
      </div>

      {/* Exam tip preview */}
      <div style={{ margin: '0 20px 14px', padding: '10px 14px', background: '#eef2ff', border: '1px solid #c7d2fe', borderRadius: 8 }}>
        <div style={{ fontSize: '.72rem', fontWeight: 700, color: '#3730a3', marginBottom: 4 }}>📝 EXAM TIP</div>
        <p style={{ margin: 0, fontSize: '.82rem', color: '#312e81', lineHeight: 1.55 }}>{ec.examTip}</p>
      </div>

      {/* When to use tags */}
      <div style={{ padding: '0 20px 12px' }}>
        <div style={{ fontSize: '.72rem', fontWeight: 700, color: '#64748b', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '.5px' }}>Use in</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {ec.whenToUse.map((u, i) => (
            <span key={i} style={{ fontSize: '.7rem', padding: '2px 8px', borderRadius: 99, background: '#f8fafc', border: '1px solid #e2e8f0', color: '#64748b' }}>{u}</span>
          ))}
        </div>
      </div>

      {/* Expand for full details */}
      <div style={{ borderTop: '1px solid #f1f5f9' }}>
        <button
          onClick={() => setExpanded(p => !p)}
          style={{ width: '100%', padding: '10px 20px', border: 'none', cursor: 'pointer', background: expanded ? '#f8fafc' : 'transparent', display: 'flex', alignItems: 'center', gap: 8, fontSize: '.8rem', fontWeight: 600, color: '#475569', textAlign: 'left' }}
        >
          <span style={{ flex: 1 }}>{expanded ? 'Hide' : 'Show'} Theories & Real-World Links</span>
          <span style={{ fontSize: '.7rem', color: '#94a3b8', transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>▼</span>
        </button>
        {expanded && (
          <div style={{ padding: '0 20px 20px' }}>
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: '.78rem', fontWeight: 700, color: '#374151', marginBottom: 8 }}>KEY THEORIES</div>
              {ec.theories.map((t, i) => (
                <div key={i} style={{ marginBottom: 8, paddingLeft: 12, borderLeft: '3px solid #e2e8f0' }}>
                  <div style={{ fontSize: '.83rem', fontWeight: 700, color: '#1e293b' }}>{t.name}</div>
                  <div style={{ fontSize: '.8rem', color: '#475569', lineHeight: 1.6, marginTop: 3 }}>{t.description}</div>
                </div>
              ))}
            </div>
            {ec.realWorldLink && (
              <div style={{ padding: '10px 14px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, marginBottom: 14 }}>
                <div style={{ fontSize: '.72rem', fontWeight: 700, color: '#065f46', marginBottom: 4 }}>🌍 REAL-WORLD LINK</div>
                <p style={{ margin: 0, fontSize: '.82rem', color: '#065f46', lineHeight: 1.55 }}>{ec.realWorldLink}</p>
              </div>
            )}
            {ec.opposing && (
              <div style={{ fontSize: '.8rem', color: '#64748b' }}>
                <span style={{ fontWeight: 700 }}>Contrasts with: </span>{ec.opposing}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default function KeyEconomists() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return keyEconomists.filter(ec => {
      const matchCat = activeCategory === 'all' || ec.category === activeCategory
      if (!matchCat) return false
      if (!q) return true
      return ec.name.toLowerCase().includes(q) || ec.coreIdea.toLowerCase().includes(q) || ec.whenToUse.some(u => u.toLowerCase().includes(q)) || ec.era.toLowerCase().includes(q)
    })
  }, [search, activeCategory])

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '32px 20px 48px' }}>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ margin: '0 0 6px', fontSize: '1.6rem', fontWeight: 800, color: '#1e293b' }}>🧑‍🏫 Key Economists</h1>
        <p style={{ margin: 0, color: '#64748b', fontSize: '.9rem' }}>{keyEconomists.length} economists — who they are, what they said, and when to cite them in exams.</p>
      </div>

      <div style={{ position: 'relative', marginBottom: 16 }}>
        <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}>🔍</span>
        <input type="text" placeholder="Search by name, theory, or topic…" value={search} onChange={e => setSearch(e.target.value)}
          style={{ width: '100%', padding: '10px 14px 10px 40px', border: '1.5px solid #e2e8f0', borderRadius: 10, fontSize: '.9rem', outline: 'none', boxSizing: 'border-box', background: 'white' }}
          onFocus={e => { e.target.style.borderColor = '#6366f1' }} onBlur={e => { e.target.style.borderColor = '#e2e8f0' }} />
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
        {[
          { id: 'all', label: `All (${keyEconomists.length})` },
          { id: 'micro', label: `Microeconomics (${keyEconomists.filter(e => e.category === 'micro').length})` },
          { id: 'macro', label: `Macroeconomics (${keyEconomists.filter(e => e.category === 'macro').length})` },
        ].map(cat => (
          <button key={cat.id} onClick={() => setActiveCategory(cat.id)} style={{ padding: '7px 16px', borderRadius: 99, border: activeCategory === cat.id ? '2px solid #6366f1' : '2px solid #e2e8f0', background: activeCategory === cat.id ? '#eef2ff' : 'white', color: activeCategory === cat.id ? '#4f46e5' : '#475569', fontSize: '.83rem', fontWeight: activeCategory === cat.id ? 700 : 500, cursor: 'pointer' }}>
            {cat.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#94a3b8' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 10 }}>🧑‍🏫</div>
          <div style={{ fontWeight: 600 }}>No economists match your search.</div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {filtered.map(ec => <EconomistCard key={ec.id} ec={ec} />)}
        </div>
      )}
    </div>
  )
}
