import { useState, useMemo } from 'react'
import { keyLaws, lawCategories } from '../data/keyLaws'

const categoryColours = {
  competition: { bg: '#ede9fe', text: '#6d28d9', border: '#c4b5fd' },
  labour:      { bg: '#fce7f3', text: '#9d174d', border: '#f9a8d4' },
  environment: { bg: '#d1fae5', text: '#065f46', border: '#6ee7b7' },
  housing:     { bg: '#fef3c7', text: '#92400e', border: '#fcd34d' },
  macro:       { bg: '#dbeafe', text: '#1e40af', border: '#93c5fd' },
  monetary:    { bg: '#e0f2fe', text: '#0c4a6e', border: '#7dd3fc' },
  trade:       { bg: '#fef9c3', text: '#713f12', border: '#fde047' },
  consumer:    { bg: '#fee2e2', text: '#991b1b', border: '#fca5a5' },
  financial:   { bg: '#f3e8ff', text: '#581c87', border: '#d8b4fe' },
  micro:       { bg: '#ecfdf5', text: '#064e3b', border: '#a7f3d0' },
}

function getCatStyle(cat) {
  return categoryColours[cat] || { bg: '#f1f5f9', text: '#475569', border: '#cbd5e1' }
}

function Badge({ cat }) {
  const s = getCatStyle(cat)
  const label = lawCategories.find(c => c.id === cat)
  return (
    <span style={{
      display: 'inline-block',
      padding: '2px 8px',
      borderRadius: 99,
      fontSize: '.7rem',
      fontWeight: 600,
      background: s.bg,
      color: s.text,
      border: `1px solid ${s.border}`,
      textTransform: 'capitalize',
    }}>
      {label ? `${label.icon} ${label.label}` : cat}
    </span>
  )
}

function LawCard({ law }) {
  const [showProvisions, setShowProvisions] = useState(false)
  const [showRelevance, setShowRelevance] = useState(false)

  return (
    <div style={{
      background: 'white',
      borderRadius: 12,
      border: '1px solid #e2e8f0',
      overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0,0,0,.06)',
    }}>
      {/* Card header */}
      <div style={{ padding: '18px 20px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
              <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: '#1e293b' }}>
                {law.name}
              </h3>
              <span style={{
                fontSize: '.75rem', fontWeight: 700, color: '#64748b',
                background: '#f1f5f9', padding: '1px 7px', borderRadius: 6,
              }}>
                {law.year}
              </span>
            </div>
            <div style={{ marginTop: 6, display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {law.categories.map(c => <Badge key={c} cat={c} />)}
            </div>
          </div>
          {law.paperRelevance && (
            <div style={{
              fontSize: '.72rem', color: '#6366f1', fontWeight: 600,
              background: '#eef2ff', padding: '4px 10px', borderRadius: 6,
              whiteSpace: 'nowrap',
            }}>
              {law.paperRelevance}
            </div>
          )}
        </div>

        <p style={{ margin: '12px 0 0', fontSize: '.875rem', color: '#475569', lineHeight: 1.6 }}>
          {law.summary}
        </p>
      </div>

      {/* Key Fact callout */}
      {law.keyFact && (
        <div style={{
          margin: '0 20px 14px',
          padding: '10px 14px',
          background: '#fffbeb',
          border: '1px solid #fde68a',
          borderRadius: 8,
          fontSize: '.8rem',
          color: '#78350f',
          lineHeight: 1.55,
        }}>
          <strong>Key Fact:</strong> {law.keyFact}
        </div>
      )}

      {/* Exam topic tags */}
      {law.examTopics?.length > 0 && (
        <div style={{ padding: '0 20px 14px', display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {law.examTopics.map(t => (
            <span key={t} style={{
              fontSize: '.7rem', padding: '2px 8px', borderRadius: 99,
              background: '#f8fafc', border: '1px solid #e2e8f0', color: '#64748b',
            }}>
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Expandable sections */}
      <div style={{ borderTop: '1px solid #f1f5f9' }}>
        <ExpandButton
          label="Key Provisions"
          icon="📋"
          open={showProvisions}
          onToggle={() => setShowProvisions(p => !p)}
        />
        {showProvisions && (
          <div style={{ padding: '0 20px 16px' }}>
            <ul style={{ margin: 0, padding: '0 0 0 18px', fontSize: '.85rem', color: '#374151', lineHeight: 1.7 }}>
              {law.provisions.map((p, i) => <li key={i} style={{ marginBottom: 4 }}>{p}</li>)}
            </ul>
          </div>
        )}

        <div style={{ borderTop: '1px solid #f1f5f9' }}>
          <ExpandButton
            label="Exam Relevance"
            icon="🎓"
            open={showRelevance}
            onToggle={() => setShowRelevance(p => !p)}
            accent
          />
          {showRelevance && (
            <div style={{ padding: '0 20px 16px' }}>
              {law.examRelevance.split('\n\n').map((para, i) => (
                <p key={i} style={{ margin: '0 0 10px', fontSize: '.85rem', color: '#1e293b', lineHeight: 1.7 }}>
                  {para}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function ExpandButton({ label, icon, open, onToggle, accent }) {
  return (
    <button
      onClick={onToggle}
      style={{
        display: 'flex', alignItems: 'center', gap: 8,
        width: '100%', padding: '10px 20px',
        background: open ? (accent ? '#eef2ff' : '#f8fafc') : 'transparent',
        border: 'none', cursor: 'pointer',
        fontSize: '.82rem', fontWeight: 600,
        color: accent ? '#4f46e5' : '#374151',
        textAlign: 'left',
        transition: 'background .15s',
      }}
      onMouseEnter={e => { if (!open) e.currentTarget.style.background = '#f8fafc' }}
      onMouseLeave={e => { if (!open) e.currentTarget.style.background = 'transparent' }}
    >
      <span>{icon}</span>
      <span style={{ flex: 1 }}>{label}</span>
      <span style={{ fontSize: '.75rem', color: '#94a3b8', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>▼</span>
    </button>
  )
}

export default function KeyLaws() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return keyLaws.filter(law => {
      const matchCat = activeCategory === 'all' || law.categories.includes(activeCategory)
      if (!matchCat) return false
      if (!q) return true
      return (
        law.name.toLowerCase().includes(q) ||
        law.summary.toLowerCase().includes(q) ||
        law.examRelevance.toLowerCase().includes(q) ||
        law.examTopics?.some(t => t.toLowerCase().includes(q))
      )
    })
  }, [search, activeCategory])

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '32px 20px 48px' }}>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ margin: '0 0 6px', fontSize: '1.6rem', fontWeight: 800, color: '#1e293b' }}>
          ⚖️ Key Laws &amp; Legislation
        </h1>
        <p style={{ margin: 0, color: '#64748b', fontSize: '.9rem' }}>
          {keyLaws.length} laws and acts relevant to AQA A-Level Economics — with exam application explained.
        </p>
      </div>

      {/* Search */}
      <div style={{ position: 'relative', marginBottom: 16 }}>
        <span style={{
          position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)',
          fontSize: '1rem', pointerEvents: 'none', color: '#94a3b8',
        }}>🔍</span>
        <input
          type="text"
          placeholder="Search by name, topic, or keyword…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: '100%', padding: '10px 14px 10px 40px',
            border: '1.5px solid #e2e8f0', borderRadius: 10,
            fontSize: '.9rem', outline: 'none', boxSizing: 'border-box',
            background: 'white',
          }}
          onFocus={e => { e.target.style.borderColor = '#6366f1' }}
          onBlur={e => { e.target.style.borderColor = '#e2e8f0' }}
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            style={{
              position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
              background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8',
              fontSize: '1rem', padding: 2,
            }}
          >✕</button>
        )}
      </div>

      {/* Category filters */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 28 }}>
        <FilterBtn
          active={activeCategory === 'all'}
          onClick={() => setActiveCategory('all')}
          count={keyLaws.length}
        >
          All Laws
        </FilterBtn>
        {lawCategories.map(cat => {
          const count = keyLaws.filter(l => l.categories.includes(cat.id)).length
          return (
            <FilterBtn
              key={cat.id}
              active={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              count={count}
            >
              {cat.icon} {cat.label}
            </FilterBtn>
          )
        })}
      </div>

      {/* Results count */}
      {(search || activeCategory !== 'all') && (
        <div style={{ marginBottom: 16, fontSize: '.82rem', color: '#64748b' }}>
          {filtered.length === 0
            ? 'No laws match your search.'
            : `${filtered.length} law${filtered.length !== 1 ? 's' : ''} found`}
        </div>
      )}

      {/* Law cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {filtered.map(law => <LawCard key={law.id} law={law} />)}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#94a3b8' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>⚖️</div>
          <div style={{ fontWeight: 600, marginBottom: 6 }}>No laws found</div>
          <div style={{ fontSize: '.875rem' }}>Try a different search term or category.</div>
        </div>
      )}
    </div>
  )
}

function FilterBtn({ active, onClick, count, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '6px 14px',
        borderRadius: 99,
        border: active ? '1.5px solid #6366f1' : '1.5px solid #e2e8f0',
        background: active ? '#6366f1' : 'white',
        color: active ? 'white' : '#475569',
        fontSize: '.8rem',
        fontWeight: active ? 700 : 500,
        cursor: 'pointer',
        display: 'flex', alignItems: 'center', gap: 5,
        transition: 'all .15s',
      }}
      onMouseEnter={e => { if (!active) { e.currentTarget.style.borderColor = '#6366f1'; e.currentTarget.style.color = '#6366f1' } }}
      onMouseLeave={e => { if (!active) { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#475569' } }}
    >
      {children}
      <span style={{
        fontSize: '.7rem',
        background: active ? 'rgba(255,255,255,.25)' : '#f1f5f9',
        color: active ? 'white' : '#94a3b8',
        borderRadius: 99,
        padding: '0 5px',
        minWidth: 18,
        textAlign: 'center',
      }}>
        {count}
      </span>
    </button>
  )
}
