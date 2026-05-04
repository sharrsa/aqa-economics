import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import TopicPage from './components/TopicPage'
import EssayGuide from './components/EssayGuide'
import ProgressTracker from './components/ProgressTracker'
import RandomMCQ from './components/RandomMCQ'
import PredictedPaper from './components/PredictedPaper'
import KeyLaws from './components/KeyLaws'
import TwentyFiveMarkers from './components/TwentyFiveMarkers'
import DiagramLibrary from './components/DiagramLibrary'
import KeyEconomists from './components/KeyEconomists'
import EvaluationPhrases from './components/EvaluationPhrases'
import FormulaSheet from './components/FormulaSheet'
import Flashcards from './components/Flashcards'
import FifteenMarkers from './components/FifteenMarkers'
import RealEvents from './components/RealEvents'
import { allTopics } from './data/topics'

// Progress is stored per topic: { [topicId]: { score: number, total: number, completed: boolean } }
const PROGRESS_KEY = 'aqa_econ_progress'

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}
  } catch {
    return {}
  }
}

export default function App() {
  const [view, setView] = useState('dashboard')       // 'dashboard' | 'topic' | 'essay' | 'progress' | 'random-mcq' | 'predicted-paper' | 'key-laws' | '25-markers'
  const [selectedTopicId, setSelectedTopicId] = useState(null)
  const [progress, setProgress] = useState(loadProgress)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Persist progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))
  }, [progress])

  function navigate(newView, topicId = null) {
    setView(newView)
    setSelectedTopicId(topicId)
    setSidebarOpen(false)
    window.scrollTo(0, 0)
  }

  function recordQuizResult(topicId, score, total) {
    setProgress(prev => ({
      ...prev,
      [topicId]: {
        score,
        total,
        completed: true,
        lastAttempt: new Date().toISOString(),
        bestScore: Math.max(score, prev[topicId]?.bestScore ?? 0),
      },
    }))
  }

  function resetProgress() {
    setProgress({})
    localStorage.removeItem(PROGRESS_KEY)
  }

  const selectedTopic = allTopics.find(t => t.id === selectedTopicId)

  return (
    <div className="app-layout">
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        currentView={view}
        selectedTopicId={selectedTopicId}
        progress={progress}
        onNavigate={navigate}
      />

      {/* Mobile hamburger */}
      <button
        onClick={() => setSidebarOpen(true)}
        style={{
          position: 'fixed', top: 16, left: 16, zIndex: 100,
          display: 'none', // shown via media query override in CSS
          background: 'var(--primary)', color: 'white',
          border: 'none', borderRadius: '8px',
          padding: '8px 12px', cursor: 'pointer', fontSize: '1.2rem',
        }}
        className="mobile-menu-btn"
      >
        ☰
      </button>

      <main className="main-content fade-in">
        {view === 'dashboard' && (
          <Dashboard
            progress={progress}
            onNavigate={navigate}
          />
        )}
        {view === 'topic' && selectedTopic && (
          <TopicPage
            topic={selectedTopic}
            progress={progress[selectedTopicId]}
            onQuizComplete={(score, total) => recordQuizResult(selectedTopicId, score, total)}
            onBack={() => navigate('dashboard')}
          />
        )}
        {view === 'essay' && (
          <EssayGuide onBack={() => navigate('dashboard')} />
        )}
        {view === 'random-mcq' && (
          <RandomMCQ />
        )}
        {view === 'predicted-paper' && (
          <PredictedPaper />
        )}
        {view === 'key-laws' && <KeyLaws />}
        {view === '25-markers' && <TwentyFiveMarkers />}
        {view === 'diagrams' && <DiagramLibrary />}
        {view === 'economists' && <KeyEconomists />}
        {view === 'eval-phrases' && <EvaluationPhrases />}
        {view === 'formulas' && <FormulaSheet />}
        {view === 'flashcards' && <Flashcards />}
        {view === '15-markers' && <FifteenMarkers />}
        {view === 'real-events' && <RealEvents />}
        {view === 'timed-mock' && <div style={{maxWidth:860,margin:'0 auto',padding:'60px 20px',textAlign:'center',color:'#94a3b8'}}><div style={{fontSize:'2.5rem',marginBottom:12}}>⏱️</div><div style={{fontSize:'1.1rem',fontWeight:700,color:'#1e293b',marginBottom:8}}>Timed Mock</div><p>Use the Predicted Paper tab — timed mode integration coming soon.</p></div>}
        {view === 'para-planner' && <div style={{maxWidth:860,margin:'0 auto',padding:'60px 20px',textAlign:'center',color:'#94a3b8'}}><div style={{fontSize:'2.5rem',marginBottom:12}}>🧩</div><div style={{fontSize:'1.1rem',fontWeight:700,color:'#1e293b',marginBottom:8}}>Paragraph Planner</div><p>Interactive guided paragraph builder coming soon.</p></div>}
        {view === 'spec' && <div style={{maxWidth:860,margin:'0 auto',padding:'60px 20px',textAlign:'center',color:'#94a3b8'}}><div style={{fontSize:'2.5rem',marginBottom:12}}>✅</div><div style={{fontSize:'1.1rem',fontWeight:700,color:'#1e293b',marginBottom:8}}>Spec Checklist</div><p>Full AQA specification checklist coming soon.</p></div>}
        {view === 'progress' && (
          <ProgressTracker
            progress={progress}
            onNavigate={navigate}
            onReset={resetProgress}
          />
        )}
      </main>
    </div>
  )
}
