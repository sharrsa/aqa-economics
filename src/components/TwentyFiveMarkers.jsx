import { useState, useMemo } from 'react'
import { twentyFiveMarkers, markSchemeGuide } from '../data/twentyFiveMarkers'

const PAPER_COLOURS = {
  'Paper 1': { bg: '#ede9fe', text: '#5b21b6', border: '#c4b5fd', accent: '#7c3aed' },
  'Paper 2': { bg: '#dbeafe', text: '#1e40af', border: '#93c5fd', accent: '#2563eb' },
}

function exportQuestionToPDF(q) {
  const pc = PAPER_COLOURS[q.paper]
  const sectionsHtml = q.sections.map(s => `
    <div style="margin-bottom:24px;">
      ${s.type !== 'intro' && s.type !== 'conclusion' ? `<h3 style="color:#1e293b;margin:0 0 10px;font-size:1rem;border-left:4px solid ${pc.accent};padding-left:12px;">${s.heading}</h3>` : `<h3 style="color:#1e293b;margin:0 0 10px;font-size:1rem;">${s.heading}</h3>`}
      ${s.content.split('\n\n').map(p => `<p style="margin:0 0 12px;line-height:1.8;color:#374151;font-size:.9rem;">${p}</p>`).join('')}
    </div>
  `).join('')

  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>25-Mark Answer: ${q.topic}</title>
  <style>body{font-family:Georgia,serif;max-width:780px;margin:40px auto;padding:0 24px;color:#1e293b;}
  @media print{body{margin:0;} .no-print{display:none;}}</style></head><body>
  <div style="background:${pc.bg};border:1px solid ${pc.border};border-radius:8px;padding:16px 20px;margin-bottom:24px;">
    <div style="font-size:.75rem;font-weight:700;color:${pc.text};text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">${q.paper} · ${q.topic}</div>
    <div style="font-size:1.1rem;font-weight:700;color:#1e293b;">${q.question}</div>
    <div style="font-size:.8rem;color:#64748b;margin-top:6px;">AQA A-Level Economics · 25 marks · ${q.timeGuide}</div>
  </div>
  ${q.diagramNote ? `<div style="background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:14px 18px;margin-bottom:24px;">
    <strong style="color:#78350f;">Diagram Note:</strong>
    <p style="margin:6px 0 0;color:#78350f;font-size:.875rem;">${q.diagramNote}</p>
  </div>` : ''}
  <h2 style="font-size:1.1rem;color:#1e293b;border-bottom:2px solid #e2e8f0;padding-bottom:8px;margin-bottom:20px;">Model Answer (A* Standard)</h2>
  ${sectionsHtml}
  <div style="margin-top:32px;padding-top:16px;border-top:1px solid #e2e8f0;font-size:.75rem;color:#94a3b8;text-align:center;">
    AQA A-Level Economics · 25-Mark Model Answer · aqa-economics-tutor
  </div>
  </body></html>`

  const w = window.open('', '_blank')
  w.document.write(html)
  w.document.close()
  setTimeout(() => w.print(), 500)
}

function MarkSchemePanel() {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ background: 'white', border: '1.5px solid #6366f1', borderRadius: 12, marginBottom: 24, overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(p => !p)}
        style={{
          width: '100%', padding: '14px 20px', background: open ? '#eef2ff' : 'white',
          border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10,
          fontSize: '.9rem', fontWeight: 700, color: '#4f46e5', textAlign: 'left',
        }}
      >
        <span style={{ fontSize: '1.1rem' }}>📋</span>
        <span style={{ flex: 1 }}>AQA Mark Scheme Guide — What separates L4 from L5?</span>
        <span style={{ fontSize: '.75rem', color: '#94a3b8', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>▼</span>
      </button>

      {open && (
        <div style={{ padding: '0 20px 20px' }}>
          {/* Level table */}
          <div style={{ overflowX: 'auto', marginBottom: 20 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.82rem' }}>
              <thead>
                <tr style={{ background: '#f8fafc' }}>
                  <th style={{ padding: '8px 12px', textAlign: 'left', border: '1px solid #e2e8f0', color: '#374151' }}>Level</th>
                  <th style={{ padding: '8px 12px', textAlign: 'left', border: '1px solid #e2e8f0', color: '#374151' }}>Marks</th>
                  <th style={{ padding: '8px 12px', textAlign: 'left', border: '1px solid #e2e8f0', color: '#374151' }}>Descriptor</th>
                </tr>
              </thead>
              <tbody>
                {markSchemeGuide.levels.map((l, i) => (
                  <tr key={l.level} style={{ background: i === 0 ? '#f0fdf4' : 'white' }}>
                    <td style={{ padding: '8px 12px', border: '1px solid #e2e8f0', fontWeight: 700, color: i === 0 ? '#065f46' : '#374151' }}>
                      {i === 0 ? '⭐ ' : ''}L{l.level}
                    </td>
                    <td style={{ padding: '8px 12px', border: '1px solid #e2e8f0', fontWeight: 600, whiteSpace: 'nowrap' }}>{l.marks}</td>
                    <td style={{ padding: '8px 12px', border: '1px solid #e2e8f0', lineHeight: 1.6 }}>{l.descriptor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* AO weightings */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontWeight: 700, color: '#1e293b', marginBottom: 8, fontSize: '.875rem' }}>Assessment Objectives — equally weighted</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8 }}>
              {markSchemeGuide.aoWeightings.map(ao => (
                <div key={ao.ao} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: '10px 12px' }}>
                  <div style={{ fontWeight: 700, fontSize: '.8rem', color: '#6366f1' }}>{ao.ao}: {ao.label}</div>
                  <div style={{ fontSize: '.78rem', color: '#64748b', marginTop: 4, lineHeight: 1.5 }}>{ao.tip}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Common mistakes */}
          <div>
            <div style={{ fontWeight: 700, color: '#991b1b', marginBottom: 8, fontSize: '.875rem' }}>⚠️ Common Mistakes to Avoid</div>
            <ul style={{ margin: 0, padding: '0 0 0 18px', fontSize: '.82rem', color: '#374151', lineHeight: 1.8 }}>
              {markSchemeGuide.commonMistakes.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

function SectionBlock({ section, pc }) {
  const isIntro = section.type === 'intro'
  const isConclusion = section.type === 'conclusion'
  const isPoint = section.type === 'point'

  return (
    <div style={{
      marginBottom: 20,
      paddingLeft: isPoint ? 16 : 0,
      borderLeft: isPoint ? `3px solid ${pc.border}` : 'none',
    }}>
      <div style={{
        fontWeight: 700,
        fontSize: '.875rem',
        color: isConclusion ? '#065f46' : isIntro ? '#64748b' : pc.accent,
        marginBottom: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
      }}>
        {isConclusion && '✅ '}
        {isIntro && '📌 '}
        {isPoint && '→ '}
        {section.heading}
      </div>
      {section.content.split('\n\n').map((para, i) => {
        const isEvalPara = para.startsWith('However') || para.startsWith('Eval') || para.startsWith('Nevertheless') || para.startsWith('That said') || para.startsWith('This suggests') || para.startsWith('In contrast')
        return (
          <p key={i} style={{
            margin: '0 0 12px',
            fontSize: '.875rem',
            lineHeight: 1.8,
            color: isEvalPara ? '#374151' : '#1e293b',
            background: isEvalPara ? '#f8fafc' : 'transparent',
            padding: isEvalPara ? '8px 12px' : '0',
            borderRadius: isEvalPara ? 6 : 0,
            borderLeft: isEvalPara ? '3px solid #e2e8f0' : 'none',
          }}>
            {para}
          </p>
        )
      })}
    </div>
  )
}

function QuestionCard({ q }) {
  const [open, setOpen] = useState(false)
  const [showTips, setShowTips] = useState(false)
  const pc = PAPER_COLOURS[q.paper]

  return (
    <div style={{
      background: 'white',
      borderRadius: 14,
      border: '1px solid #e2e8f0',
      overflow: 'hidden',
      boxShadow: '0 1px 4px rgba(0,0,0,.06)',
    }}>
      {/* Header */}
      <div style={{ padding: '20px 22px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 240 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
              <span style={{
                fontSize: '.72rem', fontWeight: 700, padding: '3px 10px', borderRadius: 99,
                background: pc.bg, color: pc.text, border: `1px solid ${pc.border}`,
              }}>
                {q.paper}
              </span>
              <span style={{
                fontSize: '.72rem', fontWeight: 600, padding: '3px 10px', borderRadius: 99,
                background: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0',
              }}>
                {q.topic}
              </span>
              <span style={{
                fontSize: '.72rem', fontWeight: 600, padding: '3px 10px', borderRadius: 99,
                background: '#fef9c3', color: '#713f12', border: '1px solid #fde047',
              }}>
                ⏱ {q.timeGuide}
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: '#1e293b', lineHeight: 1.5 }}>
              {q.question}
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flexShrink: 0 }}>
            <span style={{
              fontSize: '.75rem', fontWeight: 700, padding: '5px 12px', borderRadius: 8,
              background: '#dcfce7', color: '#166534', border: '1px solid #bbf7d0',
              textAlign: 'center',
            }}>
              25 marks
            </span>
          </div>
        </div>
      </div>

      {/* Exam tip (collapsed by default) */}
      <div style={{ borderTop: '1px solid #f1f5f9' }}>
        <button
          onClick={() => setShowTips(p => !p)}
          style={{
            width: '100%', padding: '10px 22px', border: 'none', cursor: 'pointer',
            background: showTips ? '#fefce8' : 'transparent',
            display: 'flex', alignItems: 'center', gap: 8,
            fontSize: '.8rem', fontWeight: 600, color: '#78350f', textAlign: 'left',
            transition: 'background .15s',
          }}
        >
          <span>💡</span>
          <span style={{ flex: 1 }}>Examiner Tips & Diagram Guide</span>
          <span style={{ fontSize: '.75rem', color: '#94a3b8', transform: showTips ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>▼</span>
        </button>
        {showTips && (
          <div style={{ padding: '0 22px 16px', background: '#fefce8' }}>
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: '.78rem', fontWeight: 700, color: '#92400e', marginBottom: 5 }}>EXAMINER TIP</div>
              <p style={{ margin: 0, fontSize: '.83rem', color: '#78350f', lineHeight: 1.65 }}>{q.examTip}</p>
            </div>
            {q.diagramNote && (
              <div>
                <div style={{ fontSize: '.78rem', fontWeight: 700, color: '#92400e', marginBottom: 5 }}>DIAGRAM</div>
                <p style={{ margin: 0, fontSize: '.83rem', color: '#78350f', lineHeight: 1.65 }}>{q.diagramNote}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Model answer toggle */}
      <div style={{ borderTop: '1px solid #f1f5f9' }}>
        <button
          onClick={() => setOpen(p => !p)}
          style={{
            width: '100%', padding: '12px 22px', border: 'none', cursor: 'pointer',
            background: open ? pc.bg : 'transparent',
            display: 'flex', alignItems: 'center', gap: 10,
            fontSize: '.875rem', fontWeight: 700, color: pc.accent, textAlign: 'left',
            transition: 'background .15s',
          }}
        >
          <span>📝</span>
          <span style={{ flex: 1 }}>{open ? 'Hide' : 'View'} A* Model Answer</span>
          <span style={{ fontSize: '.75rem', color: '#94a3b8', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>▼</span>
        </button>

        {open && (
          <div style={{ padding: '20px 24px 0' }}>
            {/* L5 reminder banner */}
            <div style={{
              background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8,
              padding: '10px 14px', marginBottom: 20, fontSize: '.8rem', color: '#065f46',
              lineHeight: 1.6,
            }}>
              <strong>L5 technique:</strong> Evaluation (shaded paragraphs starting "However…") is integrated after each analytical point — not saved for the end. Copy this structure in your own answer.
            </div>

            {q.sections.map((s, i) => (
              <SectionBlock key={i} section={s} pc={pc} />
            ))}

            {/* PDF export */}
            <div style={{ borderTop: '1px solid #f1f5f9', padding: '14px 0 20px', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button
                onClick={() => exportQuestionToPDF(q)}
                style={{
                  padding: '8px 18px', borderRadius: 8, border: 'none', cursor: 'pointer',
                  background: pc.accent, color: 'white', fontSize: '.82rem', fontWeight: 700,
                  display: 'flex', alignItems: 'center', gap: 6,
                }}
              >
                🖨️ Print / Save as PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function TwentyFiveMarkers() {
  const [activePaper, setActivePaper] = useState('all')

  const filtered = useMemo(() => {
    if (activePaper === 'all') return twentyFiveMarkers
    return twentyFiveMarkers.filter(q => q.paper === activePaper)
  }, [activePaper])

  const papers = ['all', 'Paper 1', 'Paper 2']
  const paperLabels = {
    all: `All Questions (${twentyFiveMarkers.length})`,
    'Paper 1': `Paper 1 — Microeconomics (${twentyFiveMarkers.filter(q => q.paper === 'Paper 1').length})`,
    'Paper 2': `Paper 2 — Macroeconomics (${twentyFiveMarkers.filter(q => q.paper === 'Paper 2').length})`,
  }

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '32px 20px 48px' }}>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ margin: '0 0 6px', fontSize: '1.6rem', fontWeight: 800, color: '#1e293b' }}>
          ✍️ 25-Mark Model Answers
        </h1>
        <p style={{ margin: 0, color: '#64748b', fontSize: '.9rem' }}>
          Research-backed A* model answers with integrated evaluation — structured to match the AQA Level of Response mark scheme.
        </p>
      </div>

      {/* Mark scheme panel */}
      <MarkSchemePanel />

      {/* Paper filter tabs */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
        {papers.map(p => {
          const pc = p !== 'all' ? PAPER_COLOURS[p] : null
          const active = activePaper === p
          return (
            <button
              key={p}
              onClick={() => setActivePaper(p)}
              style={{
                padding: '8px 18px', borderRadius: 10,
                border: active ? `2px solid ${pc?.accent || '#6366f1'}` : '2px solid #e2e8f0',
                background: active ? (pc?.bg || '#eef2ff') : 'white',
                color: active ? (pc?.accent || '#4f46e5') : '#475569',
                fontSize: '.85rem', fontWeight: active ? 700 : 500,
                cursor: 'pointer', transition: 'all .15s',
              }}
            >
              {paperLabels[p]}
            </button>
          )
        })}
      </div>

      {/* Question cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        {filtered.map(q => <QuestionCard key={q.id} q={q} />)}
      </div>
    </div>
  )
}
