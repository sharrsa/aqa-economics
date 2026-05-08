import { microTopics, macroTopics } from '../data/topics'

export default function Sidebar({ open, onClose, currentView, selectedTopicId, progress, onNavigate }) {
  const totalTopics = microTopics.length + macroTopics.length
  const completedTopics = Object.values(progress).filter(p => p.completed).length
  const pct = Math.round((completedTopics / totalTopics) * 100)

  return (
    <>
      {/* Backdrop (mobile) */}
      {open && (
        <div
          onClick={onClose}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 199 }}
          className="sidebar-backdrop"
        />
      )}

      <aside
        className={`sidebar${open ? ' sidebar-open' : ''}`}
        style={{
          position: 'fixed', top: 0, left: 0, bottom: 0,
          width: 'var(--sidebar-w)',
          background: '#1e1b4b',
          color: 'white',
          overflowY: 'auto',
          zIndex: 200,
          display: 'flex',
          flexDirection: 'column',
          padding: '0 0 24px 0',
        }}
      >
        {/* Logo */}
        <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid rgba(255,255,255,.1)' }}>
          <div style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.5px' }}>
            📈 AQA Economics
          </div>
          <div style={{ fontSize: '.75rem', color: '#a5b4fc', marginTop: 2 }}>A* Revision Tutor</div>

          {/* Overall progress */}
          <div style={{ marginTop: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.75rem', color: '#c7d2fe', marginBottom: 4 }}>
              <span>Overall Progress</span>
              <span>{completedTopics}/{totalTopics} topics</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,.15)', borderRadius: 99, height: 6, overflow: 'hidden' }}>
              <div style={{ width: `${pct}%`, height: '100%', background: '#818cf8', borderRadius: 99, transition: 'width 0.5s' }} />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ padding: '12px 10px', flex: 1 }}>
          <NavItem
            icon="🏠" label="Dashboard"
            active={currentView === 'dashboard'}
            onClick={() => onNavigate('dashboard')}
          />
          <NavItem
            icon="✍️" label="Essay Guide"
            active={currentView === 'essay'}
            onClick={() => onNavigate('essay')}
          />
          <NavItem
            icon="🎲" label="Random MCQ"
            active={currentView === 'random-mcq'}
            onClick={() => onNavigate('random-mcq')}
          />
          <NavItem
            icon="📋" label="Predicted Paper 2026"
            active={currentView === 'predicted-paper'}
            onClick={() => onNavigate('predicted-paper')}
          />
          <NavItem icon="✍️" label="25-Mark Questions" active={currentView === '25-markers'} onClick={() => onNavigate('25-markers')} />

          <SectionLabel>Practice</SectionLabel>
          <NavItem icon="📝" label="15-Mark Questions" active={currentView === '15-markers'} onClick={() => onNavigate('15-markers')} />
          <NavItem icon="⏱️" label="Timed Mock" active={currentView === 'timed-mock'} onClick={() => onNavigate('timed-mock')} />

          <SectionLabel>Writing Tools</SectionLabel>
          <NavItem icon="💬" label="Evaluation Phrases" active={currentView === 'eval-phrases'} onClick={() => onNavigate('eval-phrases')} />
          <NavItem icon="🧩" label="Paragraph Planner" active={currentView === 'para-planner'} onClick={() => onNavigate('para-planner')} />

          <NavItem icon="🌍" label="Real Events" active={currentView === 'real-events'} onClick={() => onNavigate('real-events')} />

          <SectionLabel>Reference</SectionLabel>
          <NavItem icon="📐" label="Diagram Library" active={currentView === 'diagrams'} onClick={() => onNavigate('diagrams')} />
          <NavItem icon="🧑‍🏫" label="Key Economists" active={currentView === 'economists'} onClick={() => onNavigate('economists')} />
          <NavItem icon="🔢" label="Formulas" active={currentView === 'formulas'} onClick={() => onNavigate('formulas')} />
          <NavItem icon="📚" label="Flashcards" active={currentView === 'flashcards'} onClick={() => onNavigate('flashcards')} />
          <NavItem icon="✅" label="Spec Checklist" active={currentView === 'spec'} onClick={() => onNavigate('spec')} />
          <NavItem icon="⚖️" label="Key Laws" active={currentView === 'key-laws'} onClick={() => onNavigate('key-laws')} />

          <SectionLabel>Tracking</SectionLabel>
          <NavItem icon="📊" label="My Progress" active={currentView === 'progress'} onClick={() => onNavigate('progress')} />

          <SectionLabel>Microeconomics</SectionLabel>
          {microTopics.map(t => (
            <TopicNavItem
              key={t.id}
              topic={t}
              active={selectedTopicId === t.id && currentView === 'topic'}
              progress={progress[t.id]}
              onClick={() => onNavigate('topic', t.id)}
            />
          ))}

          <SectionLabel>Macroeconomics</SectionLabel>
          {macroTopics.map(t => (
            <TopicNavItem
              key={t.id}
              topic={t}
              active={selectedTopicId === t.id && currentView === 'topic'}
              progress={progress[t.id]}
              onClick={() => onNavigate('topic', t.id)}
            />
          ))}
        </nav>

        {/* Footer */}
        <div style={{ padding: '0 16px', fontSize: '.7rem', color: '#6366f1', textAlign: 'center' }}>
          AQA A-Level Economics · 2024-25
        </div>
      </aside>
    </>
  )
}

function NavItem({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 10,
        width: '100%', padding: '9px 12px', borderRadius: 8,
        border: 'none', cursor: 'pointer',
        background: active ? 'rgba(129,140,248,.25)' : 'transparent',
        color: active ? '#c7d2fe' : '#a5b4fc',
        fontWeight: active ? 700 : 500,
        fontSize: '.875rem', textAlign: 'left',
        marginBottom: 2,
        transition: 'all .15s',
      }}
      onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'rgba(255,255,255,.07)' }}
      onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent' }}
    >
      <span>{icon}</span> {label}
    </button>
  )
}

function SectionLabel({ children }) {
  return (
    <div style={{
      fontSize: '.68rem', fontWeight: 700, color: '#6366f1',
      textTransform: 'uppercase', letterSpacing: '1px',
      padding: '14px 12px 4px',
    }}>
      {children}
    </div>
  )
}

function TopicNavItem({ topic, active, progress, onClick }) {
  const done = progress?.completed
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 8,
        width: '100%', padding: '7px 12px', borderRadius: 8,
        border: 'none', cursor: 'pointer',
        background: active ? 'rgba(129,140,248,.25)' : 'transparent',
        color: active ? 'white' : '#c7d2fe',
        fontWeight: active ? 700 : 400,
        fontSize: '.825rem', textAlign: 'left',
        marginBottom: 1,
        transition: 'all .15s',
      }}
      onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'rgba(255,255,255,.07)' }}
      onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent' }}
    >
      <span style={{ fontSize: '.85rem' }}>{topic.icon}</span>
      <span style={{ flex: 1, lineHeight: 1.3 }}>{topic.title}</span>
      {done && (
        <span style={{
          width: 18, height: 18, borderRadius: '50%',
          background: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '.65rem', color: 'white', flexShrink: 0,
        }}>✓</span>
      )}
    </button>
  )
}
