import { useState } from 'react'
import { fifteenMarkers, markScheme15 } from '../data/fifteenMarkers'

const PAPER_COLORS = {
  'Paper 1': { bg: '#eff6ff', color: '#1d4ed8', border: '#bfdbfe' },
  'Paper 2': { bg: '#f0fdf4', color: '#15803d', border: '#86efac' },
}

const SECTION_COLORS = {
  intro:      { bg: '#f8faff', border: '#6366f1', label: 'Introduction', labelBg: '#eef2ff', labelColor: '#4338ca' },
  point:      { bg: 'white',   border: '#0ea5e9', label: 'KAA Point',    labelBg: '#e0f2fe', labelColor: '#0369a1' },
  eval:       { bg: '#fffbeb', border: '#f59e0b', label: 'Evaluation',   labelBg: '#fef3c7', labelColor: '#92400e' },
  conclusion: { bg: '#f0fdf4', border: '#10b981', label: 'Conclusion',   labelBg: '#dcfce7', labelColor: '#166534' },
}

function MarkSchemePanel({ open, onToggle }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%', padding: '12px 18px', borderRadius: 10,
          border: '2px solid #e2e8f0', background: open ? '#1e1b4b' : 'var(--surface)',
          color: open ? 'white' : 'var(--text)', cursor: 'pointer',
          fontWeight: 700, fontSize: '.9rem', textAlign: 'left',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}
      >
        <span>📋 15-Mark Level Descriptors & Exam Technique</span>
        <span style={{ fontSize: '.8rem', fontWeight: 500 }}>{open ? '▲ Hide' : '▼ Show'}</span>
      </button>

      {open && (
        <div className="fade-in" style={{ border: '2px solid #e2e8f0', borderTop: 'none', borderRadius: '0 0 10px 10px', padding: '20px', background: 'var(--surface)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 10, marginBottom: 20 }}>
            {markScheme15.levels.map(l => (
              <div key={l.level} style={{
                padding: '14px 16px', borderRadius: 10,
                background: l.level === 'L4' ? '#eef2ff' : l.level === 'L3' ? '#f0fdf4' : l.level === 'L2' ? '#fffbeb' : '#fef2f2',
                border: `1px solid ${l.level === 'L4' ? '#c7d2fe' : l.level === 'L3' ? '#86efac' : l.level === 'L2' ? '#fcd34d' : '#fca5a5'}`,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontWeight: 800, fontSize: '1rem', color: l.level === 'L4' ? '#3730a3' : l.level === 'L3' ? '#15803d' : l.level === 'L2' ? '#b45309' : '#b91c1c' }}>{l.level}</span>
                  <span style={{ fontWeight: 700, fontSize: '.85rem', color: '#64748b' }}>{l.marks} marks</span>
                </div>
                <p style={{ margin: 0, fontSize: '.8rem', color: '#374151', lineHeight: 1.6 }}>{l.descriptor}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 16 }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '.85rem', color: '#1e293b', marginBottom: 10 }}>AO Weighting (15 marks)</div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {Object.entries(markScheme15.aoWeighting).map(([ao, wt]) => (
                  <span key={ao} style={{ padding: '4px 10px', borderRadius: 6, background: '#f1f5f9', fontSize: '.75rem', fontWeight: 600, color: '#475569' }}>
                    {ao}: {wt}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '.85rem', color: '#1e293b', marginBottom: 10 }}>Time guide</div>
              <p style={{ margin: 0, fontSize: '.8rem', color: '#64748b', lineHeight: 1.6 }}>Aim for 20–22 minutes. Leave 2 minutes to plan your diagram and structure before writing.</p>
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 700, fontSize: '.85rem', color: '#1e293b', marginBottom: 10 }}>L4 Exam Technique</div>
            <div style={{ display: 'grid', gap: 6 }}>
              {markScheme15.tips.map((tip, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '.82rem', color: '#374151', lineHeight: 1.5 }}>
                  <span style={{ color: '#6366f1', fontWeight: 800, flexShrink: 0, marginTop: 1 }}>✓</span>
                  {tip}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function QuestionCard({ q }) {
  const [open, setOpen] = useState(false)
  const [schemeOpen, setSchemeOpen] = useState(false)
  const pc = PAPER_COLORS[q.paper]

  return (
    <div style={{ background: 'white', borderRadius: 14, border: '2px solid var(--border)', marginBottom: 16, overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ padding: '18px 22px', borderBottom: open ? '2px solid var(--border)' : 'none' }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
          <span style={{ padding: '3px 12px', borderRadius: 99, fontSize: '.72rem', fontWeight: 700, background: pc.bg, color: pc.color, border: `1px solid ${pc.border}` }}>
            {q.paper}
          </span>
          <span style={{ padding: '3px 12px', borderRadius: 99, fontSize: '.72rem', fontWeight: 600, background: '#ede9fe', color: '#6d28d9' }}>
            {q.topic}
          </span>
          <span style={{ padding: '3px 12px', borderRadius: 99, fontSize: '.72rem', fontWeight: 700, background: '#fef3c7', color: '#92400e' }}>
            15 marks · {q.timeGuide}
          </span>
        </div>

        <p style={{ margin: '0 0 16px', fontWeight: 700, fontSize: '1rem', color: '#1e293b', lineHeight: 1.5 }}>{q.question}</p>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button
            onClick={() => setOpen(v => !v)}
            style={{
              padding: '9px 20px', borderRadius: 9, border: 'none',
              background: open ? '#1e1b4b' : '#6366f1', color: 'white',
              fontWeight: 700, fontSize: '.85rem', cursor: 'pointer',
            }}
          >
            {open ? '▲ Hide Model Answer' : '▼ Show A* Model Answer'}
          </button>
        </div>
      </div>

      {open && (
        <div className="fade-in" style={{ padding: '20px 22px' }}>
          {/* L5 banner */}
          <div style={{ marginBottom: 20, padding: '12px 16px', borderRadius: 10, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
            <div style={{ fontWeight: 800, fontSize: '.85rem', marginBottom: 4 }}>L4 TECHNIQUE — Examiner Tips</div>
            <p style={{ margin: '0 0 6px', fontSize: '.82rem', lineHeight: 1.5 }}>{q.examTip}</p>
            <div style={{ fontSize: '.78rem', opacity: 0.9 }}>📐 Diagram: {q.diagramNote}</div>
          </div>

          {/* Sections */}
          {q.sections.map((s, i) => {
            const sc = SECTION_COLORS[s.type] || SECTION_COLORS.point
            const isEval = s.content.match(/^However|^The extent|^This depends/i)
            return (
              <div key={i} style={{
                marginBottom: 14, padding: '14px 18px',
                borderRadius: 10, background: sc.bg,
                borderLeft: `4px solid ${sc.border}`,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <span style={{ fontSize: '.7rem', fontWeight: 800, padding: '2px 10px', borderRadius: 99, background: sc.labelBg, color: sc.labelColor, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {sc.label}
                  </span>
                  <span style={{ fontSize: '.82rem', fontWeight: 700, color: '#1e293b' }}>{s.heading}</span>
                </div>
                <p style={{
                  margin: 0, fontSize: '.875rem', color: '#1e293b', lineHeight: 1.75,
                  borderLeft: isEval ? '3px solid #f59e0b' : 'none',
                  paddingLeft: isEval ? 12 : 0,
                }}>
                  {s.content}
                </p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default function FifteenMarkers() {
  const [schemeOpen, setSchemeOpen] = useState(false)
  const [filterPaper, setFilterPaper] = useState('all')
  const [filterTopic, setFilterTopic] = useState('all')

  const topics = [...new Set(fifteenMarkers.map(q => q.topic))]

  const filtered = fifteenMarkers.filter(q =>
    (filterPaper === 'all' || q.paper === filterPaper) &&
    (filterTopic === 'all' || q.topic === filterTopic)
  )

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px 60px' }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ margin: '0 0 6px', fontSize: '1.6rem', fontWeight: 800, color: '#1e293b' }}>📝 15-Mark Questions</h1>
        <p style={{ margin: 0, color: '#64748b', fontSize: '.9rem' }}>
          KAA-focused model answers for AQA data response questions. Aim for L4 with well-developed analysis and substantiated evaluation.
        </p>
      </div>

      <MarkSchemePanel open={schemeOpen} onToggle={() => setSchemeOpen(v => !v)} />

      {/* Filters */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
        {['all', 'Paper 1', 'Paper 2'].map(p => {
          const active = filterPaper === p
          const pc = p !== 'all' ? PAPER_COLORS[p] : null
          return (
            <button key={p} onClick={() => setFilterPaper(p)} style={{
              padding: '7px 16px', borderRadius: 99, cursor: 'pointer', fontWeight: active ? 700 : 500, fontSize: '.82rem',
              border: `2px solid ${active ? (pc?.border || '#6366f1') : '#e2e8f0'}`,
              background: active ? (pc?.bg || '#eef2ff') : 'white',
              color: active ? (pc?.color || '#4f46e5') : '#64748b',
            }}>
              {p === 'all' ? 'All Papers' : p}
            </button>
          )
        })}
        <div style={{ width: 1, background: '#e2e8f0', margin: '0 4px' }} />
        {['all', ...topics].map(t => {
          const active = filterTopic === t
          return (
            <button key={t} onClick={() => setFilterTopic(t)} style={{
              padding: '7px 16px', borderRadius: 99, cursor: 'pointer', fontWeight: active ? 700 : 500, fontSize: '.82rem',
              border: `2px solid ${active ? '#a5b4fc' : '#e2e8f0'}`,
              background: active ? '#eef2ff' : 'white',
              color: active ? '#4338ca' : '#64748b',
            }}>
              {t === 'all' ? 'All Topics' : t}
            </button>
          )
        })}
      </div>

      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '48px 20px', color: '#94a3b8' }}>
          <div style={{ fontSize: '2rem', marginBottom: 12 }}>🔍</div>
          <p>No questions match this filter.</p>
        </div>
      ) : (
        filtered.map(q => <QuestionCard key={q.id} q={q} />)
      )}
    </div>
  )
}
