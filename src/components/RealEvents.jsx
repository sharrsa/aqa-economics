import { useState } from 'react'
import { realEvents, eventCategories } from '../data/realEvents'

const SEVERITY_STYLES = {
  critical: { bg: '#fef2f2', border: '#fca5a5', badge: '#b91c1c', text: 'CRITICAL' },
  high:     { bg: '#fff7ed', border: '#fdba74', badge: '#c2410c', text: 'HIGH'     },
  medium:   { bg: '#fffbeb', border: '#fcd34d', badge: '#b45309', text: 'MEDIUM'   },
}

const CATEGORY_COLORS = {
  financial:    { bg: '#fef2f2', color: '#b91c1c', border: '#fca5a5' },
  'macro-policy': { bg: '#eff6ff', color: '#1d4ed8', border: '#bfdbfe' },
  trade:        { bg: '#f0fdf4', color: '#15803d', border: '#86efac' },
  'supply-shock': { bg: '#fdf4ff', color: '#7e22ce', border: '#d8b4fe' },
  'uk-specific':  { bg: '#fff7ed', color: '#c2410c', border: '#fdba74' },
}

const TAB_CONFIG = [
  { key: 'summary',  label: '📋 Overview'      },
  { key: 'cause',    label: '🔍 Causes'         },
  { key: 'timeline', label: '📅 Timeline'       },
  { key: 'policy',   label: '🏛️ Policy Response' },
  { key: 'outcome',  label: '📈 Outcomes'       },
  { key: 'exam',     label: '🎓 Exam Use'       },
]

function Tag({ children, style }) {
  return (
    <span style={{
      padding: '3px 10px', borderRadius: 99, fontSize: '.7rem', fontWeight: 600,
      background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0',
      ...style,
    }}>
      {children}
    </span>
  )
}

function SeverityBadge({ severity }) {
  const s = SEVERITY_STYLES[severity] || SEVERITY_STYLES.medium
  return (
    <span style={{
      padding: '2px 10px', borderRadius: 99, fontSize: '.68rem', fontWeight: 800,
      background: s.badge, color: 'white', letterSpacing: '0.5px',
    }}>
      {s.text}
    </span>
  )
}

function BulletList({ points }) {
  return (
    <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
      {points.map((pt, i) => (
        <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '.875rem', color: '#374151', lineHeight: 1.7 }}>
          <span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0, marginTop: 2 }}>→</span>
          <span>{pt}</span>
        </li>
      ))}
    </ul>
  )
}

function EventCard({ event }) {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('summary')
  const cc = CATEGORY_COLORS[event.category] || CATEGORY_COLORS['macro-policy']

  return (
    <div style={{
      background: 'white', borderRadius: 16, border: '2px solid var(--border)',
      marginBottom: 20, overflow: 'hidden',
      boxShadow: open ? '0 4px 24px rgba(0,0,0,.08)' : 'none',
      transition: 'box-shadow 0.2s',
    }}>
      {/* Card header */}
      <div
        style={{ padding: '20px 24px', cursor: 'pointer', borderBottom: open ? '2px solid var(--border)' : 'none' }}
        onClick={() => setOpen(v => !v)}
      >
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12, alignItems: 'center' }}>
          <SeverityBadge severity={event.severity} />
          <span style={{
            padding: '3px 12px', borderRadius: 99, fontSize: '.72rem', fontWeight: 700,
            background: cc.bg, color: cc.color, border: `1px solid ${cc.border}`,
          }}>
            {eventCategories.find(c => c.id === event.category)?.label || event.category}
          </span>
          <span style={{ padding: '3px 10px', borderRadius: 99, fontSize: '.72rem', fontWeight: 600, background: '#f8fafc', color: '#64748b', border: '1px solid #e2e8f0' }}>
            {event.dates}
          </span>
        </div>

        <h2 style={{ margin: '0 0 4px', fontSize: '1.15rem', fontWeight: 800, color: '#1e293b' }}>{event.title}</h2>
        <p style={{ margin: '0 0 14px', fontSize: '.85rem', color: '#64748b', fontStyle: 'italic' }}>{event.subtitle}</p>

        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
          {event.tags.map(t => <Tag key={t}>{t}</Tag>)}
        </div>

        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <button
            style={{
              padding: '8px 18px', borderRadius: 9, border: 'none', cursor: 'pointer',
              background: open ? '#1e1b4b' : '#6366f1', color: 'white',
              fontWeight: 700, fontSize: '.83rem',
            }}
            onClick={e => { e.stopPropagation(); setOpen(v => !v) }}
          >
            {open ? '▲ Collapse' : '▼ Explore Event'}
          </button>
          {event.keyFacts && (
            <span style={{ fontSize: '.78rem', color: '#94a3b8' }}>
              {event.keyFacts.length} key facts · {event.examRelevance?.length || 0} exam links
            </span>
          )}
        </div>
      </div>

      {open && (
        <div className="fade-in">
          {/* Key Facts banner */}
          {event.keyFacts?.length > 0 && (
            <div style={{
              padding: '14px 24px', background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
              display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center',
            }}>
              <span style={{ fontSize: '.75rem', fontWeight: 800, color: '#a5b4fc', textTransform: 'uppercase', letterSpacing: '0.5px', flexShrink: 0 }}>Key Stats</span>
              {event.keyFacts.map((f, i) => (
                <span key={i} style={{
                  padding: '4px 14px', borderRadius: 99, fontSize: '.78rem', fontWeight: 700,
                  background: 'rgba(255,255,255,.12)', color: 'white', border: '1px solid rgba(255,255,255,.2)',
                }}>
                  {f}
                </span>
              ))}
            </div>
          )}

          {/* Tab bar */}
          <div style={{ display: 'flex', gap: 0, borderBottom: '2px solid var(--border)', overflowX: 'auto' }}>
            {TAB_CONFIG.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  padding: '12px 18px', border: 'none', cursor: 'pointer',
                  background: activeTab === tab.key ? 'white' : '#f8fafc',
                  color: activeTab === tab.key ? '#4f46e5' : '#64748b',
                  fontWeight: activeTab === tab.key ? 700 : 500,
                  fontSize: '.8rem', whiteSpace: 'nowrap',
                  borderBottom: activeTab === tab.key ? '3px solid #6366f1' : '3px solid transparent',
                  transition: 'all .15s',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div style={{ padding: '24px' }}>

            {activeTab === 'summary' && (
              <div>
                <p style={{ margin: '0 0 20px', fontSize: '.9rem', color: '#374151', lineHeight: 1.85, borderLeft: '4px solid #6366f1', paddingLeft: 16 }}>
                  {event.summary}
                </p>
              </div>
            )}

            {activeTab === 'cause' && event.cause && (
              <div>
                <h3 style={{ margin: '0 0 16px', fontSize: '.95rem', fontWeight: 800, color: '#1e293b' }}>{event.cause.heading}</h3>
                <BulletList points={event.cause.points} />
              </div>
            )}

            {activeTab === 'timeline' && event.timeline?.length > 0 && (
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: 80, top: 0, bottom: 0, width: 2, background: '#e2e8f0' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {event.timeline.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 0, alignItems: 'flex-start', paddingBottom: 20 }}>
                      <div style={{ width: 80, flexShrink: 0, paddingRight: 16, textAlign: 'right' }}>
                        <span style={{ fontSize: '.72rem', fontWeight: 700, color: '#6366f1', lineHeight: 1.3 }}>{item.date}</span>
                      </div>
                      <div style={{
                        width: 12, height: 12, borderRadius: '50%', background: '#6366f1',
                        border: '2px solid white', outline: '2px solid #6366f1',
                        flexShrink: 0, marginTop: 2, position: 'relative', zIndex: 1,
                      }} />
                      <div style={{ flex: 1, paddingLeft: 16, paddingBottom: 0 }}>
                        <p style={{ margin: 0, fontSize: '.855rem', color: '#374151', lineHeight: 1.65 }}>{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'policy' && event.policyResponse && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h3 style={{ margin: '0 0 4px', fontSize: '.95rem', fontWeight: 800, color: '#1e293b' }}>{event.policyResponse.heading}</h3>
                {event.policyResponse.monetary && (
                  <div style={{ padding: '16px 18px', borderRadius: 10, background: '#eff6ff', border: '1px solid #bfdbfe' }}>
                    <div style={{ fontWeight: 800, fontSize: '.78rem', color: '#1d4ed8', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.5px' }}>🏦 Monetary Policy</div>
                    <p style={{ margin: 0, fontSize: '.855rem', color: '#374151', lineHeight: 1.7 }}>{event.policyResponse.monetary}</p>
                  </div>
                )}
                {event.policyResponse.fiscal && (
                  <div style={{ padding: '16px 18px', borderRadius: 10, background: '#f0fdf4', border: '1px solid #86efac' }}>
                    <div style={{ fontWeight: 800, fontSize: '.78rem', color: '#15803d', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.5px' }}>💰 Fiscal Policy</div>
                    <p style={{ margin: 0, fontSize: '.855rem', color: '#374151', lineHeight: 1.7 }}>{event.policyResponse.fiscal}</p>
                  </div>
                )}
                {event.policyResponse.financial && (
                  <div style={{ padding: '16px 18px', borderRadius: 10, background: '#fffbeb', border: '1px solid #fcd34d' }}>
                    <div style={{ fontWeight: 800, fontSize: '.78rem', color: '#b45309', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.5px' }}>🔒 Financial / Regulatory</div>
                    <p style={{ margin: 0, fontSize: '.855rem', color: '#374151', lineHeight: 1.7 }}>{event.policyResponse.financial}</p>
                  </div>
                )}
                {event.policyResponse.supply && (
                  <div style={{ padding: '16px 18px', borderRadius: 10, background: '#f5f3ff', border: '1px solid #ddd6fe' }}>
                    <div style={{ fontWeight: 800, fontSize: '.78rem', color: '#6d28d9', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.5px' }}>🏭 Supply-Side</div>
                    <p style={{ margin: 0, fontSize: '.855rem', color: '#374151', lineHeight: 1.7 }}>{event.policyResponse.supply}</p>
                  </div>
                )}
                {event.policyResponse.exchange && (
                  <div style={{ padding: '16px 18px', borderRadius: 10, background: '#fdf4ff', border: '1px solid #e879f9' }}>
                    <div style={{ fontWeight: 800, fontSize: '.78rem', color: '#86198f', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.5px' }}>💱 Exchange Rate</div>
                    <p style={{ margin: 0, fontSize: '.855rem', color: '#374151', lineHeight: 1.7 }}>{event.policyResponse.exchange}</p>
                  </div>
                )}
                {event.policyResponse.trade && (
                  <div style={{ padding: '16px 18px', borderRadius: 10, background: '#f0fdf4', border: '1px solid #86efac' }}>
                    <div style={{ fontWeight: 800, fontSize: '.78rem', color: '#15803d', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.5px' }}>🌐 Trade Policy</div>
                    <p style={{ margin: 0, fontSize: '.855rem', color: '#374151', lineHeight: 1.7 }}>{event.policyResponse.trade}</p>
                  </div>
                )}
                {event.policyResponse.international && (
                  <div style={{ padding: '16px 18px', borderRadius: 10, background: '#eff6ff', border: '1px solid #bfdbfe' }}>
                    <div style={{ fontWeight: 800, fontSize: '.78rem', color: '#1d4ed8', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.5px' }}>🌍 International Response</div>
                    <p style={{ margin: 0, fontSize: '.855rem', color: '#374151', lineHeight: 1.7 }}>{event.policyResponse.international}</p>
                  </div>
                )}
                {event.policyResponse.austerity && (
                  <div style={{ padding: '16px 18px', borderRadius: 10, background: '#fef2f2', border: '1px solid #fca5a5' }}>
                    <div style={{ fontWeight: 800, fontSize: '.78rem', color: '#b91c1c', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.5px' }}>✂️ Austerity Measures</div>
                    <p style={{ margin: 0, fontSize: '.855rem', color: '#374151', lineHeight: 1.7 }}>{event.policyResponse.austerity}</p>
                  </div>
                )}
                {event.policyResponse.structural && (
                  <div style={{ padding: '16px 18px', borderRadius: 10, background: '#f0fdf4', border: '1px solid #86efac' }}>
                    <div style={{ fontWeight: 800, fontSize: '.78rem', color: '#15803d', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.5px' }}>🏗️ Structural Reforms</div>
                    <p style={{ margin: 0, fontSize: '.855rem', color: '#374151', lineHeight: 1.7 }}>{event.policyResponse.structural}</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'outcome' && event.outcome && (
              <div>
                <h3 style={{ margin: '0 0 16px', fontSize: '.95rem', fontWeight: 800, color: '#1e293b' }}>{event.outcome.heading}</h3>
                <BulletList points={event.outcome.points} />
              </div>
            )}

            {activeTab === 'exam' && event.examRelevance?.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <p style={{ margin: '0 0 12px', fontSize: '.82rem', color: '#64748b' }}>
                  Use these real-world examples to support KAA points and evaluations in 15- and 25-mark answers.
                </p>
                {event.examRelevance.map((r, i) => (
                  <div key={i} style={{
                    padding: '14px 18px', borderRadius: 10,
                    background: i % 2 === 0 ? '#eef2ff' : '#f0fdf4',
                    border: `1px solid ${i % 2 === 0 ? '#c7d2fe' : '#86efac'}`,
                  }}>
                    <div style={{ fontWeight: 800, fontSize: '.78rem', color: i % 2 === 0 ? '#3730a3' : '#166534', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                      {r.topic}
                    </div>
                    <p style={{ margin: 0, fontSize: '.855rem', color: '#374151', lineHeight: 1.65 }}>{r.use}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default function RealEvents() {
  const [filterCat, setFilterCat] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = realEvents.filter(e => {
    const matchCat = filterCat === 'all' || e.category === filterCat
    const q = search.toLowerCase()
    const matchSearch = !q ||
      e.title.toLowerCase().includes(q) ||
      e.subtitle.toLowerCase().includes(q) ||
      e.tags.some(t => t.toLowerCase().includes(q)) ||
      e.summary.toLowerCase().includes(q)
    return matchCat && matchSearch
  })

  return (
    <div style={{ maxWidth: 940, margin: '0 auto', padding: '32px 20px 60px' }}>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ margin: '0 0 6px', fontSize: '1.6rem', fontWeight: 800, color: '#1e293b' }}>🌍 Real Economic Events</h1>
        <p style={{ margin: 0, color: '#64748b', fontSize: '.9rem' }}>
          Real-world crises, policy responses, and outcomes — with A-level exam application. Use these as evidence in 15- and 25-mark answers.
        </p>
      </div>

      {/* Search */}
      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Search events, topics, policies..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: '100%', padding: '11px 16px', borderRadius: 10, fontSize: '.875rem',
            border: '2px solid #e2e8f0', outline: 'none', color: '#1e293b',
            background: 'white', boxSizing: 'border-box',
          }}
          onFocus={e => e.target.style.borderColor = '#6366f1'}
          onBlur={e => e.target.style.borderColor = '#e2e8f0'}
        />
      </div>

      {/* Category filters */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
        {eventCategories.map(cat => {
          const active = filterCat === cat.id
          return (
            <button
              key={cat.id}
              onClick={() => setFilterCat(cat.id)}
              style={{
                padding: '7px 16px', borderRadius: 99, cursor: 'pointer',
                fontWeight: active ? 700 : 500, fontSize: '.82rem',
                border: `2px solid ${active ? '#6366f1' : '#e2e8f0'}`,
                background: active ? '#eef2ff' : 'white',
                color: active ? '#4f46e5' : '#64748b',
                transition: 'all .15s',
              }}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      {/* Results count */}
      <div style={{ marginBottom: 16, fontSize: '.8rem', color: '#94a3b8' }}>
        {filtered.length} event{filtered.length !== 1 ? 's' : ''} {filterCat !== 'all' || search ? 'matching' : 'total'}
      </div>

      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#94a3b8' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>🔍</div>
          <p>No events match your search. Try a different keyword or category.</p>
        </div>
      ) : (
        filtered.map(e => <EventCard key={e.id} event={e} />)
      )}
    </div>
  )
}
