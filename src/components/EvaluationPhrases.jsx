import { useState, useMemo } from 'react'
import { evaluationPhrases, evaluationCategories } from '../data/evaluationPhrases'

function PhraseCard({ phrase }) {
  const [copied, setCopied] = useState(false)
  const [expanded, setExpanded] = useState(false)

  function copy() {
    navigator.clipboard?.writeText(phrase.phrase).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <div style={{ background: 'white', borderRadius: 10, border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 1px 2px rgba(0,0,0,.05)' }}>
      <div style={{ padding: '14px 16px 10px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <div style={{ flex: 1 }}>
            <p style={{ margin: 0, fontSize: '.9rem', fontWeight: 700, color: '#1e293b', lineHeight: 1.5, fontStyle: 'italic' }}>
              "{phrase.phrase}"
            </p>
          </div>
          <button onClick={copy} style={{ flexShrink: 0, padding: '4px 10px', borderRadius: 6, border: '1px solid #e2e8f0', background: copied ? '#dcfce7' : '#f8fafc', color: copied ? '#166534' : '#64748b', fontSize: '.72rem', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all .2s' }}>
            {copied ? '✓ Copied' : 'Copy'}
          </button>
        </div>
        <p style={{ margin: '8px 0 0', fontSize: '.8rem', color: '#64748b', lineHeight: 1.6 }}>
          {phrase.usage}
        </p>
      </div>

      <div style={{ borderTop: '1px solid #f8fafc' }}>
        <button onClick={() => setExpanded(p => !p)} style={{ width: '100%', padding: '8px 16px', border: 'none', cursor: 'pointer', background: expanded ? '#f0fdf4' : 'transparent', display: 'flex', alignItems: 'center', gap: 6, fontSize: '.78rem', fontWeight: 600, color: expanded ? '#065f46' : '#64748b', textAlign: 'left' }}>
          <span>📖</span>
          <span style={{ flex: 1 }}>{expanded ? 'Hide' : 'Show'} Example in a Sentence</span>
          <span style={{ fontSize: '.7rem', color: '#94a3b8', transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>▼</span>
        </button>
        {expanded && (
          <div style={{ padding: '0 16px 14px', background: '#f0fdf4' }}>
            <p style={{ margin: 0, fontSize: '.83rem', color: '#1e293b', lineHeight: 1.7, fontStyle: 'italic' }}>
              {phrase.example}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function EvaluationPhrases() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return evaluationPhrases.filter(p => {
      const matchCat = activeCategory === 'all' || p.category === activeCategory
      if (!matchCat) return false
      if (!q) return true
      return p.phrase.toLowerCase().includes(q) || p.usage.toLowerCase().includes(q) || p.example.toLowerCase().includes(q)
    })
  }, [search, activeCategory])

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '32px 20px 48px' }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ margin: '0 0 6px', fontSize: '1.6rem', fontWeight: 800, color: '#1e293b' }}>💬 Evaluation Phrase Bank</h1>
        <p style={{ margin: 0, color: '#64748b', fontSize: '.9rem' }}>
          {evaluationPhrases.length} ready-made evaluation phrases — click Copy to use directly in your essay.
        </p>
      </div>

      <div style={{ background: '#eef2ff', border: '1px solid #c7d2fe', borderRadius: 10, padding: '12px 16px', marginBottom: 24, fontSize: '.83rem', color: '#312e81', lineHeight: 1.6 }}>
        <strong>L5 technique:</strong> Evaluation should be <em>integrated after every analytical point</em> — not saved for the conclusion. Use these phrases immediately after your KAA paragraph, before moving to the next point.
      </div>

      <div style={{ position: 'relative', marginBottom: 16 }}>
        <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}>🔍</span>
        <input type="text" placeholder="Search phrases or topics…" value={search} onChange={e => setSearch(e.target.value)}
          style={{ width: '100%', padding: '10px 14px 10px 40px', border: '1.5px solid #e2e8f0', borderRadius: 10, fontSize: '.9rem', outline: 'none', boxSizing: 'border-box' }}
          onFocus={e => { e.target.style.borderColor = '#6366f1' }} onBlur={e => { e.target.style.borderColor = '#e2e8f0' }} />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 28 }}>
        {evaluationCategories.map(cat => {
          const count = cat.id === 'all' ? evaluationPhrases.length : evaluationPhrases.filter(p => p.category === cat.id).length
          const active = activeCategory === cat.id
          return (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)} style={{ padding: '6px 12px', borderRadius: 99, border: active ? '1.5px solid #6366f1' : '1.5px solid #e2e8f0', background: active ? '#6366f1' : 'white', color: active ? 'white' : '#475569', fontSize: '.78rem', fontWeight: active ? 700 : 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5 }}>
              {cat.icon} {cat.label} <span style={{ fontSize: '.68rem', background: active ? 'rgba(255,255,255,.25)' : '#f1f5f9', color: active ? 'white' : '#94a3b8', borderRadius: 99, padding: '0 5px' }}>{count}</span>
            </button>
          )
        })}
      </div>

      {(search || activeCategory !== 'all') && (
        <div style={{ marginBottom: 14, fontSize: '.82rem', color: '#64748b' }}>{filtered.length} phrase{filtered.length !== 1 ? 's' : ''} found</div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {filtered.map(p => <PhraseCard key={p.id} phrase={p} />)}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#94a3b8' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 10 }}>💬</div>
          <div style={{ fontWeight: 600 }}>No phrases match your search.</div>
        </div>
      )}
    </div>
  )
}
