import { allTopics, microTopics, macroTopics } from '../data/topics'

export default function ProgressTracker({ progress, onNavigate, onReset }) {
  const completed = allTopics.filter(t => progress[t.id]?.completed)
  const total = allTopics.length
  const avgPct = completed.length === 0 ? 0
    : Math.round(completed.reduce((s, t) => s + (progress[t.id].bestScore / progress[t.id].total) * 100, 0) / completed.length)

  const weakTopics = allTopics.filter(t => {
    const p = progress[t.id]
    return p?.completed && (p.bestScore / p.total) < 0.7
  })

  return (
    <div className="fade-in">
      <h1 style={{ marginBottom: 4 }}>📊 My Progress</h1>
      <p className="text-muted" style={{ marginBottom: 28 }}>Track your quiz performance across all AQA Economics topics.</p>

      {/* Summary stats */}
      <div className="grid-3" style={{ gap: 16, marginBottom: 28 }}>
        <StatCard
          label="Topics Completed" value={`${completed.length} / ${total}`}
          sub={`${Math.round((completed.length / total) * 100)}% of curriculum`}
          color="#4f46e5"
        />
        <StatCard
          label="Average Score" value={`${avgPct}%`}
          sub={avgPct >= 80 ? 'Excellent 🌟' : avgPct >= 60 ? 'Good 👍' : 'Keep revising 📚'}
          color={avgPct >= 80 ? '#10b981' : avgPct >= 60 ? '#f59e0b' : '#ef4444'}
        />
        <StatCard
          label="Needs Review" value={weakTopics.length}
          sub={weakTopics.length === 0 ? 'All strong!' : 'Topics below 70%'}
          color={weakTopics.length === 0 ? '#10b981' : '#ef4444'}
        />
      </div>

      {/* Weak areas */}
      {weakTopics.length > 0 && (
        <div className="card" style={{ marginBottom: 24, border: '1px solid #fca5a5', background: '#fef2f2' }}>
          <h3 style={{ color: '#991b1b', marginBottom: 12 }}>⚠️ Priority Revision Areas</h3>
          <div style={{ display: 'grid', gap: 8 }}>
            {weakTopics.map(t => {
              const p = progress[t.id]
              const pct = Math.round((p.bestScore / p.total) * 100)
              return (
                <div
                  key={t.id}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '8px 12px', borderRadius: 8, background: 'white' }}
                  onClick={() => onNavigate('topic', t.id)}
                >
                  <span style={{ fontSize: '.875rem', color: 'var(--text)' }}>{t.icon} {t.title}</span>
                  <span style={{ fontSize: '.8rem', fontWeight: 700, color: '#dc2626' }}>{pct}% — revisit →</span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Topic-by-topic breakdown */}
      <Section title="Microeconomics" badge="MICRO" badgeClass="badge-micro" topics={microTopics} progress={progress} onNavigate={onNavigate} />
      <Section title="Macroeconomics" badge="MACRO" badgeClass="badge-macro" topics={macroTopics} progress={progress} onNavigate={onNavigate} />

      {/* Reset */}
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <button
          onClick={() => {
            if (window.confirm('Reset all progress? This cannot be undone.')) onReset()
          }}
          style={{
            background: 'none', border: '1px solid #fca5a5', color: '#ef4444',
            borderRadius: 8, padding: '8px 20px', cursor: 'pointer', fontSize: '.85rem',
          }}
        >
          🗑️ Reset All Progress
        </button>
      </div>
    </div>
  )
}

function StatCard({ label, value, sub, color }) {
  return (
    <div className="card" style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '2rem', fontWeight: 800, color, lineHeight: 1 }}>{value}</div>
      <div style={{ fontWeight: 700, fontSize: '.875rem', color: 'var(--text)', marginTop: 6 }}>{label}</div>
      <div style={{ fontSize: '.775rem', color: 'var(--text-muted)', marginTop: 2 }}>{sub}</div>
    </div>
  )
}

function Section({ title, badge, badgeClass, topics, progress, onNavigate }) {
  return (
    <section style={{ marginBottom: 28 }}>
      <div className="flex-between" style={{ marginBottom: 14 }}>
        <h2>{title}</h2>
        <span className={`badge ${badgeClass}`}>{badge}</span>
      </div>
      <div className="card" style={{ padding: '8px 0' }}>
        {topics.map((t, i) => {
          const p = progress[t.id]
          const pct = p?.completed ? Math.round((p.bestScore / p.total) * 100) : null
          const color = pct === null ? '#94a3b8' : pct >= 80 ? '#10b981' : pct >= 60 ? '#f59e0b' : '#ef4444'

          return (
            <div
              key={t.id}
              onClick={() => onNavigate('topic', t.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '12px 20px', cursor: 'pointer',
                borderBottom: i < topics.length - 1 ? '1px solid var(--border)' : 'none',
                transition: 'background .15s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-2)'}
              onMouseLeave={e => e.currentTarget.style.background = ''}
            >
              <span style={{ fontSize: '1.1rem' }}>{t.icon}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '.875rem', fontWeight: 600, color: 'var(--text)' }}>{t.title}</div>
                {p?.completed && (
                  <div style={{ marginTop: 4 }}>
                    <div className="progress-bar-bg" style={{ height: 5 }}>
                      <div style={{
                        width: `${pct}%`, height: '100%',
                        background: color, borderRadius: 99, transition: 'width .5s',
                      }} />
                    </div>
                  </div>
                )}
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                {p?.completed ? (
                  <>
                    <div style={{ fontSize: '.875rem', fontWeight: 700, color }}>{pct}%</div>
                    <div style={{ fontSize: '.7rem', color: 'var(--text-muted)' }}>{p.bestScore}/{p.total}</div>
                  </>
                ) : (
                  <div style={{ fontSize: '.8rem', color: '#94a3b8' }}>Not started</div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
