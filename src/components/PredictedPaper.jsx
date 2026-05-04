import { useState } from 'react'
import { predictedPaper2026 } from '../data/predictedPaper2026'
import { modelAnswers } from '../data/modelAnswers2026'
import { masterPaper2026 } from '../data/masterPaper2026'
import { masterModelAnswers } from '../data/masterModelAnswers2026'

function exportPaperToPDF(paper, paperKey) {
  const colors = {
    paper1: '#7c3aed',
    paper2: '#0369a1',
    paper3: '#065f46',
  }
  const color = colors[paperKey]

  function renderSectionAQuestions(questions) {
    return questions.map((q, i) => `
      <div class="question-block">
        <div class="q-header">
          <span class="q-label">Q${i + 1}</span>
          <span class="q-text">${q.question}</span>
          <span class="marks-badge">${q.marks} marks</span>
        </div>
        ${q.tip ? `<div class="tip"><strong>Examiner tip:</strong> ${q.tip}</div>` : ''}
        <div class="mark-scheme">
          <div class="ms-label">Mark Scheme</div>
          <div class="ms-body">${q.markScheme.replace(/\n/g, '<br>')}</div>
        </div>
      </div>
    `).join('')
  }

  function renderEssayParts(essay) {
    return essay.parts.map(part => `
      <div class="question-block">
        <div class="q-header">
          <span class="q-label">${part.label}</span>
          <span class="q-text">${part.question}</span>
          <span class="marks-badge">${part.marks} marks</span>
        </div>
        ${part.tip ? `<div class="tip"><strong>Examiner tip:</strong> ${part.tip}</div>` : ''}
        <div class="mark-scheme">
          <div class="ms-label">Mark Scheme</div>
          <div class="ms-body">${part.markScheme.replace(/\n/g, '<br>')}</div>
        </div>
      </div>
    `).join('')
  }

  let bodyHTML = ''

  if (paperKey === 'paper3') {
    bodyHTML = `
      <h2 style="color:${color}">Section A — Multiple Choice (${paper.sectionA.marks} marks)</h2>
      <div class="context-box">${paper.sectionA.note}</div>
      <p><em>${paper.sectionA.instruction}</em></p>
      <h2 style="color:${color}">Section B — Data Response (${paper.sectionB.marks} marks)</h2>
      <div class="context-box">${paper.sectionB.context.replace(/\n/g, '<br>')}</div>
      ${renderSectionAQuestions(paper.sectionB.questions)}
    `
  } else {
    bodyHTML = `
      <h2 style="color:${color}">Section A — ${paper.sectionA.title} (${paper.sectionA.marks} marks)</h2>
      <div class="context-box">${paper.sectionA.context.replace(/\n/g, '<br>')}</div>
      ${renderSectionAQuestions(paper.sectionA.questions)}
      <div class="page-break"></div>
      <h2 style="color:${color}">Section B — Essays (${paper.sectionB.marks} marks)</h2>
      <p class="instruction">${paper.sectionB.instruction}</p>
      ${paper.sectionB.questions.map((essay, i) => `
        <h3 style="color:${color}">${essay.question}</h3>
        ${renderEssayParts(essay)}
      `).join('<hr class="essay-divider">')}
    `
  }

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>${paper.title} — AQA Predicted 2026</title>
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Georgia', serif; font-size: 11pt; color: #1a1a1a; padding: 20mm 18mm; line-height: 1.6; }
        h1 { font-size: 16pt; color: ${color}; border-bottom: 2px solid ${color}; padding-bottom: 8px; margin-bottom: 6px; }
        h2 { font-size: 13pt; margin: 24px 0 12px; }
        h3 { font-size: 11pt; margin: 18px 0 10px; }
        .meta { font-size: 9pt; color: #555; margin-bottom: 4px; }
        .prediction-note { background: #fffbeb; border-left: 4px solid #f59e0b; padding: 10px 14px; margin: 12px 0 20px; font-size: 9.5pt; border-radius: 4px; }
        .prediction-note strong { color: #92400e; }
        .info-row { display: flex; gap: 32px; margin-bottom: 16px; font-size: 10pt; }
        .info-item strong { display: block; font-size: 8pt; text-transform: uppercase; letter-spacing: 0.5px; color: #666; }
        .context-box { background: #f8f8f8; border: 1px solid #ddd; border-radius: 6px; padding: 14px 16px; margin: 12px 0 20px; font-size: 10pt; line-height: 1.7; white-space: pre-wrap; }
        .question-block { border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; margin-bottom: 14px; page-break-inside: avoid; }
        .q-header { display: flex; gap: 10px; align-items: flex-start; margin-bottom: 10px; }
        .q-label { background: ${color}22; color: ${color}; border-radius: 6px; padding: 3px 10px; font-weight: 700; font-size: 9.5pt; flex-shrink: 0; font-family: sans-serif; }
        .q-text { flex: 1; font-weight: 600; font-size: 10.5pt; line-height: 1.5; }
        .marks-badge { background: ${color}15; color: ${color}; border: 1px solid ${color}44; border-radius: 99px; padding: 2px 10px; font-size: 8.5pt; font-weight: 700; white-space: nowrap; flex-shrink: 0; font-family: sans-serif; }
        .tip { background: #fffbeb; border-left: 3px solid #f59e0b; padding: 8px 12px; margin: 8px 0; font-size: 9pt; border-radius: 0 4px 4px 0; font-family: sans-serif; }
        .mark-scheme { background: #f0fdf4; border: 1px solid #86efac; border-radius: 6px; padding: 12px 14px; margin-top: 10px; }
        .ms-label { font-size: 7.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #065f46; margin-bottom: 6px; font-family: sans-serif; }
        .ms-body { font-size: 9.5pt; line-height: 1.7; color: #1a2e1a; }
        .instruction { font-style: italic; color: #555; margin-bottom: 14px; font-size: 10pt; }
        .essay-divider { border: none; border-top: 2px dashed #ddd; margin: 20px 0; }
        .page-break { page-break-after: always; }
        @media print {
          body { padding: 12mm 14mm; }
          .page-break { page-break-after: always; }
          .question-block { page-break-inside: avoid; }
        }
      </style>
    </head>
    <body>
      <h1>${paper.title}</h1>
      <div class="meta">${paper.subtitle} &nbsp;|&nbsp; AQA Predicted Paper 2026</div>
      <div class="info-row">
        <div class="info-item"><strong>Time Allowed</strong>${paper.time}</div>
        <div class="info-item"><strong>Total Marks</strong>${paper.marks}</div>
      </div>
      <div class="prediction-note"><strong>${paper.research_note ? 'Research basis:' : 'Prediction basis:'}</strong> ${paper.research_note || paper.prediction_note}</div>
      <hr style="border:none;border-top:1px solid #ddd;margin:0 0 20px">
      ${bodyHTML}
    </body>
    </html>
  `

  const win = window.open('', '_blank')
  win.document.write(html)
  win.document.close()
  win.onload = () => win.print()
}

function exportModelAnswersToPDF(paper, paperKey, maSource) {
  const colors = {
    paper1: '#7c3aed',
    paper2: '#0369a1',
    paper3: '#065f46',
  }
  const color = colors[paperKey]

  function renderAnswer(maId, qLabel, qText, marks) {
    const ma = maSource[maId]
    if (!ma) return ''
    return `
      <div class="answer-block">
        <div class="q-header">
          <span class="q-label">${qLabel}</span>
          <span class="q-text">${qText}</span>
          <div style="display:flex;gap:6px;flex-shrink:0;align-items:center;">
            <span class="marks-badge">${marks} marks</span>
            <span class="grade-badge">Grade: ${ma.grade}</span>
          </div>
        </div>
        ${ma.diagramNote ? `<div class="diagram-note"><strong>📐 Diagram required:</strong> ${ma.diagramNote}</div>` : ''}
        <div class="answer-body">${ma.answer.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>')}</div>
      </div>
    `
  }

  let bodyHTML = ''

  if (paperKey === 'paper3') {
    bodyHTML = `
      <h2 style="color:${color}">Section B — Data Response Model Answers</h2>
      <div class="context-box" style="font-size:9pt;color:#555;margin-bottom:20px;">${paper.sectionB.context.replace(/\n/g, '<br>')}</div>
      ${paper.sectionB.questions.map((q, i) =>
        renderAnswer(q.id, `Q${i + 1}`, q.question, q.marks)
      ).join('')}
    `
  } else {
    bodyHTML = `
      <h2 style="color:${color}">Section A — Data Response Model Answers</h2>
      <div class="context-box" style="font-size:9pt;color:#555;margin-bottom:20px;">${paper.sectionA.context.replace(/\n/g, '<br>')}</div>
      ${paper.sectionA.questions.map((q, i) =>
        renderAnswer(q.id, `Q${i + 1}`, q.question, q.marks)
      ).join('')}
      <div class="page-break"></div>
      <h2 style="color:${color}">Section B — Essay Model Answers</h2>
      <p style="font-style:italic;color:#555;margin-bottom:16px;">${paper.sectionB.instruction}</p>
      ${paper.sectionB.questions.map((essay, ei) => `
        <h3 style="color:${color};margin:24px 0 14px;">${essay.question}</h3>
        ${essay.parts.map((part, pi) =>
          renderAnswer(`${essay.id}${'abcd'[pi]}`, part.label, part.question, part.marks)
        ).join('')}
        <hr class="essay-divider">
      `).join('')}
    `
  }

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>${paper.title} — Model Answers 2026</title>
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Georgia', serif; font-size: 11pt; color: #1a1a1a; padding: 20mm 18mm; line-height: 1.6; }
        h1 { font-size: 16pt; color: ${color}; border-bottom: 2px solid ${color}; padding-bottom: 8px; margin-bottom: 6px; }
        h2 { font-size: 13pt; margin: 24px 0 12px; }
        h3 { font-size: 11.5pt; margin: 18px 0 10px; }
        .meta { font-size: 9pt; color: #555; margin-bottom: 4px; }
        .model-note { background: #eff6ff; border-left: 4px solid #3b82f6; padding: 10px 14px; margin: 12px 0 20px; font-size: 9.5pt; border-radius: 4px; }
        .context-box { background: #f8f8f8; border: 1px solid #ddd; border-radius: 6px; padding: 14px 16px; margin: 12px 0 20px; font-size: 9pt; line-height: 1.7; white-space: pre-wrap; }
        .answer-block { border: 1px solid #e0e0e0; border-radius: 8px; padding: 18px; margin-bottom: 20px; page-break-inside: avoid; }
        .q-header { display: flex; gap: 10px; align-items: flex-start; margin-bottom: 14px; }
        .q-label { background: ${color}22; color: ${color}; border-radius: 6px; padding: 3px 10px; font-weight: 700; font-size: 9.5pt; flex-shrink: 0; font-family: sans-serif; }
        .q-text { flex: 1; font-weight: 600; font-size: 10.5pt; line-height: 1.5; }
        .marks-badge { background: ${color}15; color: ${color}; border: 1px solid ${color}44; border-radius: 99px; padding: 2px 10px; font-size: 8pt; font-weight: 700; white-space: nowrap; font-family: sans-serif; }
        .grade-badge { background: #fef3c7; color: #92400e; border: 1px solid #fcd34d; border-radius: 99px; padding: 2px 10px; font-size: 8pt; font-weight: 700; white-space: nowrap; font-family: sans-serif; }
        .diagram-note { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 6px; padding: 10px 14px; margin-bottom: 12px; font-size: 9pt; font-family: sans-serif; color: #1e40af; line-height: 1.6; }
        .answer-body { font-size: 10pt; line-height: 1.8; color: #1a1a1a; }
        .answer-body p { margin-bottom: 10px; }
        .essay-divider { border: none; border-top: 2px dashed #ddd; margin: 20px 0; }
        .page-break { page-break-after: always; }
        @media print {
          body { padding: 12mm 14mm; }
          .page-break { page-break-after: always; }
          .answer-block { page-break-inside: avoid; }
        }
      </style>
    </head>
    <body>
      <h1>${paper.title} — Model Answers</h1>
      <div class="meta">${paper.subtitle} &nbsp;|&nbsp; AQA Predicted Paper 2026 — Grade A*/A Standard</div>
      <div class="model-note">
        <strong>About these model answers:</strong> Written at A*/A grade standard. Diagram instructions are included as written descriptions — draw them as described during the actual exam. These answers are longer than required; use them to understand structure and content, not length. ${paper.research_note ? '<br><br><strong>Master Paper:</strong> Questions are research-backed and built from 2019–2025 past paper analysis and 2026 topic rotation forecasts.' : ''}
      </div>
      <hr style="border:none;border-top:1px solid #ddd;margin:0 0 20px">
      ${bodyHTML}
    </body>
    </html>
  `

  const win = window.open('', '_blank')
  win.document.write(html)
  win.document.close()
  win.onload = () => win.print()
}

const PAPER_COLORS = {
  paper1: { primary: '#7c3aed', bg: '#ede9fe', light: '#f5f3ff', border: '#c4b5fd' },
  paper2: { primary: '#0369a1', bg: '#e0f2fe', light: '#f0f9ff', border: '#7dd3fc' },
  paper3: { primary: '#065f46', bg: '#d1fae5', light: '#f0fdf4', border: '#6ee7b7' },
}

export default function PredictedPaper() {
  const [paperMode, setPaperMode] = useState('predicted') // 'predicted' | 'master'
  const [activePaper, setActivePaper] = useState('paper1')
  const [openQuestions, setOpenQuestions] = useState({})
  const [openMarkSchemes, setOpenMarkSchemes] = useState({})
  const [openModelAnswers, setOpenModelAnswers] = useState({})
  const [activeSection, setActiveSection] = useState('a')
  const [activeEssay, setActiveEssay] = useState(0)

  const paperSource = paperMode === 'master' ? masterPaper2026 : predictedPaper2026
  const modelAnswerSource = paperMode === 'master' ? masterModelAnswers : modelAnswers
  const paper = paperSource[activePaper]
  const pc = PAPER_COLORS[activePaper]

  function toggleQuestion(id) {
    setOpenQuestions(prev => ({ ...prev, [id]: !prev[id] }))
  }

  function toggleMarkScheme(id) {
    setOpenMarkSchemes(prev => ({ ...prev, [id]: !prev[id] }))
  }

  function toggleModelAnswer(id) {
    setOpenModelAnswers(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="fade-in">
      {/* Mode toggle */}
      <div style={{
        display: 'flex', gap: 4, marginBottom: 20,
        background: 'var(--surface)', border: '2px solid var(--border)',
        borderRadius: 12, padding: 4,
      }}>
        <button
          onClick={() => { setPaperMode('predicted'); setOpenQuestions({}); setOpenMarkSchemes({}); setOpenModelAnswers({}) }}
          style={{
            flex: 1, padding: '10px 16px', borderRadius: 9, border: 'none',
            background: paperMode === 'predicted' ? 'var(--primary)' : 'transparent',
            color: paperMode === 'predicted' ? 'white' : 'var(--text-muted)',
            cursor: 'pointer', fontWeight: paperMode === 'predicted' ? 700 : 500,
            fontSize: '.9rem', transition: 'all .15s',
          }}
        >
          📋 Predicted Papers 2026
        </button>
        <button
          onClick={() => { setPaperMode('master'); setOpenQuestions({}); setOpenMarkSchemes({}); setOpenModelAnswers({}) }}
          style={{
            flex: 1, padding: '10px 16px', borderRadius: 9, border: 'none',
            background: paperMode === 'master' ? '#92400e' : 'transparent',
            color: paperMode === 'master' ? 'white' : 'var(--text-muted)',
            cursor: 'pointer', fontWeight: paperMode === 'master' ? 700 : 500,
            fontSize: '.9rem', transition: 'all .15s',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}
        >
          ⭐ Master Paper 2026
          <span style={{
            background: paperMode === 'master' ? 'rgba(255,255,255,0.25)' : '#92400e',
            color: 'white', borderRadius: 99, padding: '1px 8px',
            fontSize: '.7rem', fontWeight: 800,
          }}>
            RESEARCH BACKED
          </span>
        </button>
      </div>

      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <h2 style={{ margin: 0, fontSize: '1.5rem' }}>
            {paperMode === 'master' ? 'Master Paper 2026' : 'Predicted Paper 2026'}
          </h2>
          <span style={{
            background: paperMode === 'master' ? '#fef3c7' : '#fef3c7',
            color: paperMode === 'master' ? '#92400e' : '#92400e',
            border: `1px solid ${paperMode === 'master' ? '#fcd34d' : '#fcd34d'}`,
            borderRadius: 99, padding: '3px 12px', fontSize: '.75rem', fontWeight: 700,
          }}>
            {paperMode === 'master' ? '⭐ Deep Research Build' : 'AQA Prediction'}
          </span>
        </div>
        <p className="text-muted" style={{ fontSize: '.875rem' }}>
          {paperMode === 'master'
            ? 'Built from 2019–2025 past paper analysis, Tutor2u 2026 forecasts, The Student Room prediction threads, CMA investigation reports, and AQA topic rotation patterns. Highest-confidence predictions with full mark schemes and A* model answers.'
            : 'Based on AQA topic rotation, examiner reports, and 2019-2025 paper analysis. Full mark schemes and model answers included.'}
        </p>
      </div>

      {/* Export buttons */}
      <div style={{ marginBottom: 20, display: 'flex', gap: 10, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
        <button
          onClick={() => exportModelAnswersToPDF(paper, activePaper, modelAnswerSource)}
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '9px 18px', borderRadius: 10,
            border: '2px solid #bfdbfe',
            background: '#eff6ff', color: '#1d4ed8',
            cursor: 'pointer', fontWeight: 700, fontSize: '.875rem',
          }}
        >
          ⭐ Export Model Answers PDF
        </button>
        <button
          onClick={() => exportPaperToPDF(paper, activePaper)}
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '9px 18px', borderRadius: 10,
            border: `2px solid ${pc.border}`,
            background: pc.bg, color: pc.primary,
            cursor: 'pointer', fontWeight: 700, fontSize: '.875rem',
          }}
        >
          ⬇ Export Paper PDF
        </button>
      </div>

      {/* Paper selector */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 24 }}>
        {[
          { key: 'paper1', label: 'Paper 1', sub: 'Markets & Market Failure', icon: '📊' },
          { key: 'paper2', label: 'Paper 2', sub: 'National & International Economy', icon: '🌍' },
          { key: 'paper3', label: 'Paper 3', sub: 'Economic Principles & Issues', icon: '🔬' },
        ].map(p => {
          const active = activePaper === p.key
          const c = PAPER_COLORS[p.key]
          return (
            <button
              key={p.key}
              onClick={() => { setActivePaper(p.key); setActiveSection('a'); setActiveEssay(0) }}
              style={{
                padding: '14px 10px', borderRadius: 12, border: `2px solid ${active ? c.primary : 'var(--border)'}`,
                background: active ? c.bg : 'var(--surface)', cursor: 'pointer', textAlign: 'left',
                transition: 'all .2s',
              }}
            >
              <div style={{ fontSize: '1.4rem', marginBottom: 4 }}>{p.icon}</div>
              <div style={{ fontWeight: 700, color: active ? c.primary : 'var(--text)', fontSize: '.9rem' }}>{p.label}</div>
              <div style={{ fontSize: '.72rem', color: active ? c.primary : 'var(--text-muted)', lineHeight: 1.3, marginTop: 2 }}>{p.sub}</div>
            </button>
          )
        })}
      </div>

      {/* Paper info bar */}
      <div style={{
        background: pc.bg, border: `1px solid ${pc.border}`, borderRadius: 12,
        padding: '16px 20px', marginBottom: 20,
        display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start',
      }}>
        <div>
          <div style={{ fontSize: '.7rem', fontWeight: 700, color: pc.primary, textTransform: 'uppercase', letterSpacing: '0.8px' }}>Exam</div>
          <div style={{ fontWeight: 700, color: pc.primary, fontSize: '.95rem' }}>{paper.title}</div>
          <div style={{ fontSize: '.8rem', color: pc.primary }}>{paper.subtitle}</div>
        </div>
        <div>
          <div style={{ fontSize: '.7rem', fontWeight: 700, color: pc.primary, textTransform: 'uppercase', letterSpacing: '0.8px' }}>Time</div>
          <div style={{ fontWeight: 700, color: pc.primary }}>{paper.time}</div>
        </div>
        <div>
          <div style={{ fontSize: '.7rem', fontWeight: 700, color: pc.primary, textTransform: 'uppercase', letterSpacing: '0.8px' }}>Marks</div>
          <div style={{ fontWeight: 700, color: pc.primary }}>{paper.marks}</div>
        </div>
        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ fontSize: '.7rem', fontWeight: 700, color: pc.primary, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 4 }}>
            {paper.research_note ? 'Research Basis' : 'Prediction Basis'}
          </div>
          <div style={{ fontSize: '.78rem', color: pc.primary, lineHeight: 1.5 }}>{paper.research_note || paper.prediction_note}</div>
        </div>
      </div>

      {/* Section tabs */}
      {activePaper !== 'paper3' ? (
        <>
          <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
            <SectionTab active={activeSection === 'a'} color={pc.primary} onClick={() => setActiveSection('a')}>
              Section A — Data Response ({paper.sectionA.marks} marks)
            </SectionTab>
            <SectionTab active={activeSection === 'b'} color={pc.primary} onClick={() => setActiveSection('b')}>
              Section B — Essays ({paper.sectionB.marks} marks)
            </SectionTab>
          </div>

          {activeSection === 'a' && (
            <SectionA
              section={paper.sectionA}
              pc={pc}
              openQuestions={openQuestions}
              openMarkSchemes={openMarkSchemes}
              openModelAnswers={openModelAnswers}
              toggleQuestion={toggleQuestion}
              toggleMarkScheme={toggleMarkScheme}
              toggleModelAnswer={toggleModelAnswer}
              maSource={modelAnswerSource}
            />
          )}

          {activeSection === 'b' && (
            <SectionB
              section={paper.sectionB}
              pc={pc}
              activeEssay={activeEssay}
              setActiveEssay={setActiveEssay}
              openMarkSchemes={openMarkSchemes}
              openModelAnswers={openModelAnswers}
              toggleMarkScheme={toggleMarkScheme}
              toggleModelAnswer={toggleModelAnswer}
              maSource={modelAnswerSource}
            />
          )}
        </>
      ) : (
        <Paper3View
          paper={paper}
          pc={pc}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          openQuestions={openQuestions}
          openMarkSchemes={openMarkSchemes}
          openModelAnswers={openModelAnswers}
          toggleQuestion={toggleQuestion}
          toggleMarkScheme={toggleMarkScheme}
          toggleModelAnswer={toggleModelAnswer}
          maSource={modelAnswerSource}
        />
      )}
    </div>
  )
}

function SectionTab({ active, color, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '9px 16px', borderRadius: 10, border: `2px solid ${active ? color : 'var(--border)'}`,
        background: active ? color : 'var(--surface)',
        color: active ? 'white' : 'var(--text-muted)',
        cursor: 'pointer', fontWeight: active ? 700 : 500, fontSize: '.85rem',
        transition: 'all .15s', flex: 1,
      }}
    >
      {children}
    </button>
  )
}

function SectionA({ section, pc, openQuestions, openMarkSchemes, openModelAnswers, toggleQuestion, toggleMarkScheme, toggleModelAnswer, maSource }) {
  return (
    <div>
      <div className="card" style={{ marginBottom: 16 }}>
        <h3 style={{ color: pc.primary, marginBottom: 12 }}>{section.title}</h3>
        <div style={{
          background: pc.light, border: `1px solid ${pc.border}`,
          borderRadius: 10, padding: '16px 18px',
          fontSize: '.875rem', lineHeight: 1.8, color: 'var(--text)',
          whiteSpace: 'pre-line',
        }}>
          {section.context}
        </div>
      </div>

      <div style={{ display: 'grid', gap: 12 }}>
        {section.questions.map((q, idx) => (
          <QuestionCard
            key={q.id}
            q={q}
            idx={idx}
            pc={pc}
            open={openQuestions[q.id]}
            msOpen={openMarkSchemes[q.id]}
            maOpen={openModelAnswers[q.id]}
            onToggle={() => toggleQuestion(q.id)}
            onToggleMS={() => toggleMarkScheme(q.id)}
            onToggleMA={() => toggleModelAnswer(q.id)}
            modelAnswer={maSource[q.id]}
          />
        ))}
      </div>
    </div>
  )
}

function SectionB({ section, pc, activeEssay, setActiveEssay, openMarkSchemes, openModelAnswers, toggleMarkScheme, toggleModelAnswer, maSource }) {
  const essay = section.questions[activeEssay]
  return (
    <div>
      <div className="card" style={{ marginBottom: 16 }}>
        <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: 16 }}>{section.instruction}</p>
        <div style={{ display: 'flex', gap: 8 }}>
          {section.questions.map((q, i) => (
            <button
              key={q.id}
              onClick={() => setActiveEssay(i)}
              style={{
                flex: 1, padding: '10px 16px', borderRadius: 10,
                border: `2px solid ${activeEssay === i ? pc.primary : 'var(--border)'}`,
                background: activeEssay === i ? pc.bg : 'transparent',
                color: activeEssay === i ? pc.primary : 'var(--text-muted)',
                cursor: 'pointer', fontWeight: activeEssay === i ? 700 : 500, fontSize: '.9rem',
              }}
            >
              {q.question}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gap: 12 }}>
        {essay.parts.map((part, i) => {
          const msKey = `${essay.id}-${i}`
          const maId = `${essay.id}${'abcd'[i]}`
          const ma = maSource[maId]
          return (
            <div key={i} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{
                    background: pc.bg, color: pc.primary,
                    borderRadius: 8, padding: '4px 12px',
                    fontWeight: 700, fontSize: '.9rem', flexShrink: 0,
                  }}>
                    {part.label}
                  </span>
                  <p style={{ fontWeight: 600, lineHeight: 1.5, margin: 0 }}>{part.question}</p>
                </div>
                <MarksBadge marks={part.marks} pc={pc} />
              </div>

              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <button
                  onClick={() => toggleMarkScheme(msKey)}
                  style={markSchemeToggleStyle}
                >
                  {openMarkSchemes[msKey] ? '▲ Hide' : '▼ Show'} Mark Scheme
                </button>
                {ma && (
                  <button
                    onClick={() => toggleModelAnswer(maId)}
                    style={modelAnswerToggleStyle}
                  >
                    {openModelAnswers[maId] ? '▲ Hide' : '⭐ Show'} Model Answer
                  </button>
                )}
              </div>

              {openMarkSchemes[msKey] && (
                <MarkSchemeBox content={part.markScheme} pc={pc} tip={part.tip} />
              )}

              {ma && openModelAnswers[maId] && (
                <ModelAnswerBox ma={ma} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Paper3View({ paper, pc, activeSection, setActiveSection, openQuestions, openMarkSchemes, openModelAnswers, toggleQuestion, toggleMarkScheme, toggleModelAnswer, maSource }) {
  return (
    <>
      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        <SectionTab active={activeSection === 'a'} color={pc.primary} onClick={() => setActiveSection('a')}>
          Section A — 30 MCQs ({paper.sectionA.marks} marks)
        </SectionTab>
        <SectionTab active={activeSection === 'b'} color={pc.primary} onClick={() => setActiveSection('b')}>
          Section B — Data Response ({paper.sectionB.marks} marks)
        </SectionTab>
      </div>

      {activeSection === 'a' && (
        <div className="card" style={{ textAlign: 'center', padding: '32px 24px' }}>
          <div style={{ fontSize: '3rem', marginBottom: 16 }}>📝</div>
          <h3 style={{ color: pc.primary, marginBottom: 10 }}>{paper.sectionA.title}</h3>
          <p style={{ color: 'var(--text-muted)', maxWidth: 480, margin: '0 auto 20px', lineHeight: 1.7 }}>
            {paper.sectionA.note}
          </p>
          <div style={{ background: pc.light, border: `1px solid ${pc.border}`, borderRadius: 12, padding: '16px 20px', textAlign: 'left', maxWidth: 480, margin: '0 auto' }}>
            <div style={{ fontWeight: 700, color: pc.primary, marginBottom: 8, fontSize: '.875rem' }}>Section A Instruction</div>
            <p style={{ color: 'var(--text)', fontSize: '.875rem', lineHeight: 1.6, margin: 0 }}>
              {paper.sectionA.instruction}
            </p>
          </div>
        </div>
      )}

      {activeSection === 'b' && (
        <div>
          <div className="card" style={{ marginBottom: 16 }}>
            <h3 style={{ color: pc.primary, marginBottom: 12 }}>{paper.sectionB.title}</h3>
            <div style={{
              background: pc.light, border: `1px solid ${pc.border}`,
              borderRadius: 10, padding: '16px 18px',
              fontSize: '.875rem', lineHeight: 1.8, color: 'var(--text)',
              whiteSpace: 'pre-line',
            }}>
              {paper.sectionB.context}
            </div>
          </div>

          <div style={{ display: 'grid', gap: 12 }}>
            {paper.sectionB.questions.map((q, idx) => (
              <QuestionCard
                key={q.id}
                q={q}
                idx={idx}
                pc={pc}
                open={openQuestions[q.id]}
                msOpen={openMarkSchemes[q.id]}
                maOpen={openModelAnswers[q.id]}
                onToggle={() => toggleQuestion(q.id)}
                onToggleMS={() => toggleMarkScheme(q.id)}
                onToggleMA={() => toggleModelAnswer(q.id)}
                modelAnswer={maSource[q.id]}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

function QuestionCard({ q, idx, pc, open, msOpen, maOpen, onToggle, onToggleMS, onToggleMA, modelAnswer }) {
  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
        <div style={{ flex: 1 }}>
          <button
            onClick={onToggle}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              textAlign: 'left', padding: 0, width: '100%',
              display: 'flex', gap: 12, alignItems: 'flex-start',
            }}
          >
            <span style={{
              background: pc.bg, color: pc.primary, borderRadius: 8,
              padding: '4px 12px', fontWeight: 700, fontSize: '.9rem', flexShrink: 0,
            }}>
              Q{idx + 1}
            </span>
            <span style={{ fontWeight: 600, lineHeight: 1.5, color: 'var(--text)' }}>{q.question}</span>
          </button>
        </div>
        <MarksBadge marks={q.marks} pc={pc} />
      </div>

      {q.tip && (
        <div style={{
          marginTop: 12, padding: '10px 14px', background: '#fffbeb',
          borderRadius: 8, fontSize: '.8rem', color: '#92400e',
          borderLeft: '3px solid #fbbf24',
        }}>
          <strong>Examiner tip:</strong> {q.tip}
        </div>
      )}

      <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <button onClick={onToggleMS} style={markSchemeToggleStyle}>
          {msOpen ? '▲ Hide' : '▼ Show'} Mark Scheme
        </button>
        {modelAnswer && (
          <button onClick={onToggleMA} style={modelAnswerToggleStyle}>
            {maOpen ? '▲ Hide' : '⭐ Show'} Model Answer
          </button>
        )}
      </div>

      {msOpen && (
        <MarkSchemeBox content={q.markScheme} pc={pc} />
      )}

      {modelAnswer && maOpen && (
        <ModelAnswerBox ma={modelAnswer} />
      )}
    </div>
  )
}

function MarksBadge({ marks, pc }) {
  return (
    <span style={{
      background: pc.bg, color: pc.primary, border: `1px solid ${pc.border}`,
      borderRadius: 99, padding: '4px 12px', fontSize: '.8rem', fontWeight: 700, flexShrink: 0,
    }}>
      {marks} marks
    </span>
  )
}

function MarkSchemeBox({ content, pc, tip }) {
  return (
    <div
      className="fade-in"
      style={{
        marginTop: 12, padding: '16px 18px',
        background: pc.light, border: `1px solid ${pc.border}`,
        borderRadius: 10, fontSize: '.85rem', lineHeight: 1.8,
        color: 'var(--text)', whiteSpace: 'pre-line',
      }}
    >
      <div style={{ fontWeight: 700, color: pc.primary, marginBottom: 8, fontSize: '.8rem', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
        Mark Scheme
      </div>
      {content}
      {tip && (
        <div style={{
          marginTop: 12, padding: '10px 14px', background: '#fffbeb',
          borderRadius: 8, fontSize: '.8rem', color: '#92400e',
          borderLeft: '3px solid #fbbf24',
        }}>
          <strong>Examiner tip:</strong> {tip}
        </div>
      )}
    </div>
  )
}

function ModelAnswerBox({ ma }) {
  return (
    <div
      className="fade-in"
      style={{
        marginTop: 12, padding: '16px 18px',
        background: '#eff6ff', border: '1px solid #bfdbfe',
        borderRadius: 10, fontSize: '.85rem', lineHeight: 1.8,
        color: 'var(--text)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <div style={{ fontWeight: 700, color: '#1d4ed8', fontSize: '.8rem', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
          Model Answer
        </div>
        <span style={{
          background: '#fef3c7', color: '#92400e', border: '1px solid #fcd34d',
          borderRadius: 99, padding: '2px 10px', fontSize: '.75rem', fontWeight: 700,
        }}>
          Grade {ma.grade}
        </span>
      </div>

      {ma.diagramNote && (
        <div style={{
          background: '#dbeafe', border: '1px solid #93c5fd', borderRadius: 8,
          padding: '10px 14px', marginBottom: 12,
          fontSize: '.8rem', color: '#1e40af', lineHeight: 1.6,
        }}>
          <strong>📐 Diagram required:</strong> {ma.diagramNote}
        </div>
      )}

      <div style={{ whiteSpace: 'pre-line', color: '#1e293b' }}>
        {ma.answer}
      </div>
    </div>
  )
}

const markSchemeToggleStyle = {
  padding: '7px 16px', borderRadius: 8,
  border: '1px solid var(--border)', background: 'var(--surface)',
  cursor: 'pointer', color: 'var(--text-muted)', fontSize: '.825rem',
  fontWeight: 600, transition: 'all .15s',
}

const modelAnswerToggleStyle = {
  padding: '7px 16px', borderRadius: 8,
  border: '1px solid #bfdbfe', background: '#eff6ff',
  cursor: 'pointer', color: '#1d4ed8', fontSize: '.825rem',
  fontWeight: 600, transition: 'all .15s',
}
