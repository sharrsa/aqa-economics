import { microTopics, macroTopics, allTopics } from '../data/topics'

export default function Dashboard({ progress, onNavigate }) {
  const completed = Object.values(progress).filter(p => p.completed).length
  const total = allTopics.length
  const avgScore = (() => {
    const scores = Object.values(progress).filter(p => p.completed)
    if (!scores.length) return 0
    return Math.round(scores.reduce((s, p) => s + (p.bestScore / p.total) * 100, 0) / scores.length)
  })()

  return (
    <div>
      {/* Hero banner */}
      <div style={{
        background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
        borderRadius: 16, padding: '32px 36px', color: 'white',
        marginBottom: 32,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -30, right: -30,
          width: 180, height: 180, borderRadius: '50%',
          background: 'rgba(255,255,255,.08)',
        }} />
        <div style={{ fontSize: '.8rem', fontWeight: 700, color: '#c4b5fd', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 8 }}>
          Welcome back
        </div>
        <h1 style={{ color: 'white', marginBottom: 6 }}>AQA A-Level Economics</h1>
        <p style={{ color: '#c4b5fd', marginBottom: 20 }}>
          Your personal A* revision tutor — interactive lessons, graphs, and exam practice.
        </p>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <Stat value={`${completed}/${total}`} label="Topics studied" />
          <Stat value={`${avgScore}%`} label="Average quiz score" />
          <Stat value={`${Math.round((completed / total) * 100)}%`} label="Overall complete" />
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid-3 mb-24">
        <QuickAction
          icon="✍️" title="Essay Writing Guide"
          desc="Master the 25-mark essay with PEEL, evaluation, and example paragraphs."
          color="#7c3aed"
          onClick={() => onNavigate('essay')}
        />
        <QuickAction
          icon="📊" title="My Progress"
          desc="See your topic-by-topic scores and identify areas to review."
          color="#0ea5e9"
          onClick={() => onNavigate('progress')}
        />
        <QuickAction
          icon="🎯" title="Quick Quiz"
          desc="Jump into the first incomplete topic for a quick revision session."
          color="#10b981"
          onClick={() => {
            const first = allTopics.find(t => !progress[t.id]?.completed)
            if (first) onNavigate('topic', first.id)
          }}
        />
      </div>

      {/* Microeconomics topics */}
      <section className="mb-24">
        <div className="flex-between mb-16">
          <div>
            <h2>Microeconomics</h2>
            <p className="text-sm text-muted">Paper 1 — Individual markets and firm behaviour</p>
          </div>
          <span className="badge badge-micro">MICRO</span>
        </div>
        <div className="grid-2" style={{ gap: 12 }}>
          {microTopics.map(t => (
            <TopicCard
              key={t.id}
              topic={t}
              progress={progress[t.id]}
              onClick={() => onNavigate('topic', t.id)}
            />
          ))}
        </div>
      </section>

      {/* Macroeconomics topics */}
      <section>
        <div className="flex-between mb-16">
          <div>
            <h2>Macroeconomics</h2>
            <p className="text-sm text-muted">Paper 2 — National and global economic issues</p>
          </div>
          <span className="badge badge-macro">MACRO</span>
        </div>
        <div className="grid-2" style={{ gap: 12 }}>
          {macroTopics.map(t => (
            <TopicCard
              key={t.id}
              topic={t}
              progress={progress[t.id]}
              onClick={() => onNavigate('topic', t.id)}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <div style={{ fontSize: '1.8rem', fontWeight: 800, lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '.8rem', color: '#c4b5fd', marginTop: 2 }}>{label}</div>
    </div>
  )
}

function QuickAction({ icon, title, desc, color, onClick }) {
  return (
    <button
      onClick={onClick}
      className="card"
      style={{
        textAlign: 'left', cursor: 'pointer', border: 'none',
        transition: 'all .2s', padding: '20px',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'var(--shadow)' }}
    >
      <div style={{
        width: 44, height: 44, borderRadius: 12,
        background: color + '20', display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontSize: '1.3rem', marginBottom: 12,
      }}>
        {icon}
      </div>
      <h3 style={{ marginBottom: 4, color: 'var(--text)' }}>{title}</h3>
      <p className="text-sm">{desc}</p>
    </button>
  )
}

function TopicCard({ topic, progress, onClick }) {
  const pctStr = progress?.completed
    ? `${Math.round((progress.bestScore / progress.total) * 100)}%`
    : null
  const isMicro = topic.category === 'micro'

  return (
    <button
      onClick={onClick}
      className="card"
      style={{
        display: 'flex', gap: 14, textAlign: 'left',
        cursor: 'pointer', border: '1px solid var(--border)',
        transition: 'all .2s', padding: '16px 18px',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = isMicro ? 'var(--micro)' : 'var(--macro)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = '' }}
    >
      <div style={{
        width: 42, height: 42, borderRadius: 10, flexShrink: 0,
        background: isMicro ? 'var(--micro-light)' : 'var(--macro-light)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.2rem',
      }}>
        {topic.icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
          <h4 style={{ color: 'var(--text)', fontSize: '.9rem' }}>{topic.title}</h4>
          {progress?.completed && (
            <span style={{
              background: 'var(--success)', color: 'white',
              borderRadius: 99, padding: '1px 7px', fontSize: '.65rem', fontWeight: 700,
            }}>✓ {pctStr}</span>
          )}
        </div>
        <p style={{ fontSize: '.775rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>
          {topic.description}
        </p>
        <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            fontSize: '.7rem', fontWeight: 600,
            color: isMicro ? 'var(--micro)' : 'var(--macro)',
          }}>
            {topic.quiz.length} questions
          </div>
          {topic.graphType && (
            <div style={{ fontSize: '.7rem', color: 'var(--text-muted)' }}>· Interactive graph</div>
          )}
        </div>
      </div>
    </button>
  )
}
