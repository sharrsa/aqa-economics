import { useState } from 'react'
import MCQQuiz from './MCQQuiz'
import SupplyDemandGraph from './SupplyDemandGraph'
import ADASGraph from './ADASGraph'

const TABS = ['Theory', 'Definitions', 'Formulas', 'Real World', 'Quiz']

export default function TopicPage({ topic, progress, onQuizComplete, onBack }) {
  const [activeTab, setActiveTab] = useState('Theory')
  const isMicro = topic.category === 'micro'
  const accent = isMicro ? 'var(--micro)' : 'var(--macro)'
  const accentLight = isMicro ? 'var(--micro-light)' : 'var(--macro-light)'

  return (
    <div className="fade-in">
      {/* Back button */}
      <button
        onClick={onBack}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: 'var(--text-muted)', fontSize: '.875rem', padding: '0 0 16px',
          display: 'flex', alignItems: 'center', gap: 6,
        }}
      >
        ← Back to Dashboard
      </button>

      {/* Topic header */}
      <div
        className="card"
        style={{
          background: `linear-gradient(135deg, ${isMicro ? '#0369a1' : '#065f46'}, ${isMicro ? '#0ea5e9' : '#10b981'})`,
          color: 'white', marginBottom: 28, padding: '28px 32px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
          <div style={{
            width: 56, height: 56, borderRadius: 14,
            background: 'rgba(255,255,255,.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.6rem', flexShrink: 0,
          }}>
            {topic.icon}
          </div>
          <div style={{ flex: 1 }}>
            <span style={{
              display: 'inline-block', background: 'rgba(255,255,255,.2)',
              borderRadius: 99, padding: '2px 10px', fontSize: '.7rem', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 6,
            }}>
              {isMicro ? 'Microeconomics' : 'Macroeconomics'}
            </span>
            <h1 style={{ color: 'white', margin: '0 0 6px' }}>{topic.title}</h1>
            <p style={{ color: 'rgba(255,255,255,.8)', margin: 0, fontSize: '.9rem' }}>
              {topic.description}
            </p>
            {progress?.completed && (
              <div style={{ marginTop: 12, background: 'rgba(255,255,255,.15)', borderRadius: 8, padding: '8px 14px', display: 'inline-block' }}>
                <span style={{ fontSize: '.8rem', fontWeight: 700 }}>
                  Best quiz score: {progress.bestScore}/{progress.total} ({Math.round((progress.bestScore/progress.total)*100)}%)
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        {TABS.map(tab => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'Quiz' && '🎯 '}{tab}
            {tab === 'Quiz' && progress?.completed && (
              <span style={{
                marginLeft: 6, background: 'var(--success)', color: 'white',
                borderRadius: 99, padding: '1px 6px', fontSize: '.65rem',
              }}>✓</span>
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="fade-in" key={activeTab}>
        {activeTab === 'Theory' && <TheoryTab topic={topic} />}
        {activeTab === 'Definitions' && <DefinitionsTab topic={topic} />}
        {activeTab === 'Formulas' && <FormulasTab topic={topic} />}
        {activeTab === 'Real World' && <RealWorldTab topic={topic} />}
        {activeTab === 'Quiz' && (
          <MCQQuiz
            questions={topic.quiz}
            topicTitle={topic.title}
            previousProgress={progress}
            onComplete={onQuizComplete}
          />
        )}
      </div>
    </div>
  )
}

function TheoryTab({ topic }) {
  return (
    <div>
      {topic.theory.map((section, i) => (
        <div key={i} className="card theory-section" style={{ marginBottom: 16 }}>
          <h3 className="theory-heading">{section.heading}</h3>
          <div className="theory-body">
            {section.content.split('\n').map((para, j) => (
              para.trim() ? <p key={j} style={{ marginBottom: para.startsWith('•') ? 4 : 12 }}>{para}</p> : null
            ))}
          </div>
        </div>
      ))}

      {/* Interactive graph */}
      {topic.graphType === 'supply-demand' && (
        <div className="card" style={{ marginTop: 8 }}>
          <h3 style={{ marginBottom: 4 }}>📈 Interactive Graph — Supply & Demand</h3>
          <p className="text-sm text-muted" style={{ marginBottom: 16 }}>
            Use the sliders to shift the supply and demand curves and see how equilibrium changes.
          </p>
          <SupplyDemandGraph />
        </div>
      )}
      {topic.graphType === 'ad-as' && (
        <div className="card" style={{ marginTop: 8 }}>
          <h3 style={{ marginBottom: 4 }}>📉 Interactive Graph — AD-AS Model</h3>
          <p className="text-sm text-muted" style={{ marginBottom: 16 }}>
            Shift aggregate demand and aggregate supply to see effects on price level and output.
          </p>
          <ADASGraph />
        </div>
      )}
    </div>
  )
}

function DefinitionsTab({ topic }) {
  return (
    <div className="card">
      <h2 style={{ marginBottom: 4 }}>Key Definitions</h2>
      <p className="text-sm text-muted" style={{ marginBottom: 20 }}>
        Learn these precisely — AQA examiners reward accurate terminology. Aim to use these terms naturally in essays.
      </p>
      <div className="def-grid">
        {topic.definitions.map((def, i) => (
          <div key={i} className="def-item">
            <div className="def-term">{def.term}</div>
            <div className="def-body">{def.definition}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function FormulasTab({ topic }) {
  if (!topic.formulas.length) {
    return (
      <div className="card" style={{ textAlign: 'center', padding: '48px 24px' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>📐</div>
        <h3>No Formulas for This Topic</h3>
        <p className="text-sm text-muted">This topic is more conceptual — focus on understanding theory and applying it to analysis.</p>
      </div>
    )
  }
  return (
    <div>
      <div className="card" style={{ marginBottom: 16 }}>
        <h2 style={{ marginBottom: 4 }}>Formulas & Calculations</h2>
        <p className="text-sm text-muted" style={{ marginBottom: 20 }}>
          AQA may ask you to calculate values or interpret data — ensure you know when to apply each formula.
        </p>
        <div style={{ display: 'grid', gap: 12 }}>
          {topic.formulas.map((f, i) => (
            <div key={i} className="formula-box">
              <div className="formula-name">{f.name}</div>
              <div className="formula-expr">{f.formula}</div>
              {f.notes && <div className="formula-note">{f.notes}</div>}
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{ background: 'linear-gradient(135deg,#f0f4ff,#e8edff)', border: '1px solid #c7d2fe' }}>
        <h3 style={{ marginBottom: 8 }}>💡 Exam Calculation Tips</h3>
        <ul style={{ listStyle: 'none', display: 'grid', gap: 8 }}>
          {[
            'Always show your working — marks are awarded for the method even if the answer is wrong.',
            'State the formula before substituting numbers.',
            'Check units — percentages, £ values, indices must be consistent.',
            'Interpret your result in context — what does the number mean economically?',
          ].map((tip, i) => (
            <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '.875rem', color: '#4338ca' }}>
              <span style={{ fontWeight: 700 }}>→</span> {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function RealWorldTab({ topic }) {
  return (
    <div>
      <div className="realworld-box card" style={{ marginBottom: 16 }}>
        <div className="realworld-label">📰 Real-World Application</div>
        <div style={{ fontSize: '.9rem', color: '#92400e', lineHeight: 1.7 }}>
          {topic.realWorld.split('\n').map((p, i) =>
            p.trim() ? <p key={i} style={{ marginBottom: 8 }}>{p}</p> : null
          )}
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: 12 }}>🎓 How to Use Real-World Examples in Exams</h3>
        <div style={{ display: 'grid', gap: 10 }}>
          {[
            { icon: '✅', tip: 'Embed examples within your analysis, not as a separate paragraph.' },
            { icon: '✅', tip: 'Be specific: name companies, policies, dates, and data where possible.' },
            { icon: '✅', tip: 'Show how the example illustrates the economic theory (link explicitly).' },
            { icon: '✅', tip: 'Use it for evaluation: "However, in practice, the UK experience shows..."' },
            { icon: '❌', tip: 'Don\'t just drop a fact with no analysis — examiners want application, not recall.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: '.875rem' }}>
              <span>{item.icon}</span>
              <span style={{ color: 'var(--text-muted)' }}>{item.tip}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
