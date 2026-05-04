import { useState, useMemo, useCallback } from 'react'
import { flashcards, flashcardTopics, loadFlashcardState, saveFlashcardState } from '../data/flashcards'

const BUCKET_LABELS = ['New', 'Hard', 'Learning', 'Mastered']
const BUCKET_COLOURS = ['#fee2e2', '#fef3c7', '#dbeafe', '#dcfce7']
const BUCKET_TEXT = ['#991b1b', '#92400e', '#1e40af', '#166534']

function getBucketStats(state) {
  const counts = [0, 0, 0, 0]
  flashcards.forEach(c => {
    const b = state[c.id] ?? 0
    counts[Math.min(b, 3)]++
  })
  return counts
}

function selectNextCard(filteredCards, state) {
  const byBucket = [[], [], [], []]
  filteredCards.forEach(c => {
    const b = Math.min(state[c.id] ?? 0, 3)
    if (b < 3) byBucket[b].push(c)
  })
  for (let b = 0; b < 3; b++) {
    if (byBucket[b].length > 0) {
      return byBucket[b][Math.floor(Math.random() * byBucket[b].length)]
    }
  }
  return null
}

function ProgressBar({ state, total }) {
  const mastered = Object.values(state).filter(v => v >= 3).length
  const learning = Object.values(state).filter(v => v === 2).length
  const hard = Object.values(state).filter(v => v === 1).length
  const fresh = total - mastered - learning - hard

  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.78rem', color: '#64748b', marginBottom: 6 }}>
        <span>{mastered} mastered of {total} total</span>
        <span>{Math.round((mastered / total) * 100)}% complete</span>
      </div>
      <div style={{ display: 'flex', height: 8, borderRadius: 99, overflow: 'hidden', background: '#f1f5f9' }}>
        <div style={{ width: `${(mastered / total) * 100}%`, background: '#10b981', transition: 'width .4s' }} />
        <div style={{ width: `${(learning / total) * 100}%`, background: '#3b82f6', transition: 'width .4s' }} />
        <div style={{ width: `${(hard / total) * 100}%`, background: '#f59e0b', transition: 'width .4s' }} />
        <div style={{ width: `${(fresh / total) * 100}%`, background: '#e2e8f0' }} />
      </div>
      <div style={{ display: 'flex', gap: 12, marginTop: 6, fontSize: '.72rem', flexWrap: 'wrap' }}>
        {[['#10b981', `${mastered} Mastered`], ['#3b82f6', `${learning} Learning`], ['#f59e0b', `${hard} Hard`], ['#94a3b8', `${fresh} New`]].map(([c, l]) => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, background: c }} />
            <span style={{ color: '#64748b' }}>{l}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CardFace({ card, state, onRate }) {
  const [flipped, setFlipped] = useState(false)
  const bucket = Math.min(state[card.id] ?? 0, 3)

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      {/* Bucket badge */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
        <span style={{ fontSize: '.75rem', fontWeight: 700, padding: '4px 12px', borderRadius: 99, background: BUCKET_COLOURS[bucket], color: BUCKET_TEXT[bucket] }}>
          {BUCKET_LABELS[bucket]}
        </span>
      </div>

      {/* Card */}
      <div
        onClick={() => setFlipped(p => !p)}
        style={{ background: 'white', borderRadius: 16, border: '2px solid #e2e8f0', padding: '32px 28px', minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,.08)', transition: 'box-shadow .2s', userSelect: 'none' }}
        onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,.12)' }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,.08)' }}
      >
        {!flipped ? (
          <div>
            <div style={{ fontSize: '.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 14, textAlign: 'center' }}>TERM</div>
            <p style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700, color: '#1e293b', textAlign: 'center', lineHeight: 1.4 }}>{card.term}</p>
            <div style={{ marginTop: 20, textAlign: 'center', fontSize: '.78rem', color: '#94a3b8' }}>Tap to reveal definition</div>
          </div>
        ) : (
          <div>
            <div style={{ fontSize: '.75rem', fontWeight: 700, color: '#6366f1', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 14, textAlign: 'center' }}>DEFINITION</div>
            <p style={{ margin: 0, fontSize: '.9rem', color: '#1e293b', lineHeight: 1.75, textAlign: 'left' }}>{card.definition}</p>
          </div>
        )}
      </div>

      {/* Rate buttons — only show when flipped */}
      {flipped && (
        <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
          <button onClick={() => { setFlipped(false); onRate(card.id, 0) }} style={{ flex: 1, padding: '12px', borderRadius: 10, border: '2px solid #fca5a5', background: '#fee2e2', color: '#991b1b', fontWeight: 700, fontSize: '.85rem', cursor: 'pointer' }}>
            😟 Again
          </button>
          <button onClick={() => { setFlipped(false); onRate(card.id, Math.max(bucket - 0, 1)) }} style={{ flex: 1, padding: '12px', borderRadius: 10, border: '2px solid #fde68a', background: '#fef3c7', color: '#92400e', fontWeight: 700, fontSize: '.85rem', cursor: 'pointer' }}>
            😐 Hard
          </button>
          <button onClick={() => { setFlipped(false); onRate(card.id, Math.min(bucket + 1, 3)) }} style={{ flex: 1, padding: '12px', borderRadius: 10, border: '2px solid #6ee7b7', background: '#d1fae5', color: '#065f46', fontWeight: 700, fontSize: '.85rem', cursor: 'pointer' }}>
            😊 Got it!
          </button>
        </div>
      )}

      {!flipped && (
        <div style={{ textAlign: 'center', marginTop: 16, fontSize: '.78rem', color: '#94a3b8' }}>Click card to flip</div>
      )}
    </div>
  )
}

export default function Flashcards() {
  const [state, setState] = useState(loadFlashcardState)
  const [activeTopic, setActiveTopic] = useState('all')
  const [mode, setMode] = useState('browse') // 'browse' | 'study'
  const [currentCard, setCurrentCard] = useState(null)
  const [sessionCount, setSessionCount] = useState(0)

  const filteredCards = useMemo(() =>
    activeTopic === 'all' ? flashcards : flashcards.filter(c => c.topic === activeTopic),
    [activeTopic])

  const stats = useMemo(() => getBucketStats(state), [state])
  const remaining = filteredCards.filter(c => (state[c.id] ?? 0) < 3).length

  const startStudy = useCallback(() => {
    const card = selectNextCard(filteredCards, state)
    setCurrentCard(card)
    setMode('study')
    setSessionCount(0)
  }, [filteredCards, state])

  const handleRate = useCallback((cardId, newBucket) => {
    const newState = { ...state, [cardId]: newBucket }
    setState(newState)
    saveFlashcardState(newState)
    setSessionCount(p => p + 1)
    const next = selectNextCard(filteredCards, newState)
    if (next) {
      setCurrentCard(next)
    } else {
      setMode('complete')
    }
  }, [state, filteredCards])

  function resetTopic() {
    const newState = { ...state }
    filteredCards.forEach(c => { delete newState[c.id] })
    setState(newState)
    saveFlashcardState(newState)
  }

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '32px 20px 48px' }}>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ margin: '0 0 6px', fontSize: '1.6rem', fontWeight: 800, color: '#1e293b' }}>📚 Flashcards</h1>
        <p style={{ margin: 0, color: '#64748b', fontSize: '.9rem' }}>Spaced repetition — harder cards come back more often. Rate each card to track your progress.</p>
      </div>

      {/* Topic selector */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
        {flashcardTopics.map(t => {
          const count = t.id === 'all' ? flashcards.length : flashcards.filter(c => c.topic === t.id).length
          const mastered = (t.id === 'all' ? flashcards : flashcards.filter(c => c.topic === t.id)).filter(c => (state[c.id] ?? 0) >= 3).length
          const active = activeTopic === t.id
          return (
            <button key={t.id} onClick={() => { setActiveTopic(t.id); setMode('browse') }} style={{ padding: '6px 12px', borderRadius: 8, border: active ? '2px solid #6366f1' : '2px solid #e2e8f0', background: active ? '#eef2ff' : 'white', color: active ? '#4f46e5' : '#475569', fontSize: '.78rem', fontWeight: active ? 700 : 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5 }}>
              {t.label}
              <span style={{ fontSize: '.68rem', color: mastered === count ? '#10b981' : '#94a3b8' }}>{mastered}/{count}</span>
            </button>
          )
        })}
      </div>

      {/* Progress bar */}
      <ProgressBar state={state} total={filteredCards.length} />

      {mode === 'browse' && (
        <div>
          <div style={{ display: 'flex', gap: 10, marginBottom: 28, flexWrap: 'wrap' }}>
            <button onClick={startStudy} disabled={remaining === 0} style={{ flex: 1, padding: '14px', borderRadius: 10, border: 'none', background: remaining === 0 ? '#f1f5f9' : '#6366f1', color: remaining === 0 ? '#94a3b8' : 'white', fontWeight: 700, fontSize: '.9rem', cursor: remaining === 0 ? 'default' : 'pointer' }}>
              {remaining === 0 ? '🏆 All Cards Mastered!' : `▶ Study ${remaining} Remaining Card${remaining !== 1 ? 's' : ''}`}
            </button>
            <button onClick={resetTopic} style={{ padding: '14px 18px', borderRadius: 10, border: '2px solid #fee2e2', background: 'white', color: '#991b1b', fontWeight: 600, fontSize: '.85rem', cursor: 'pointer' }}>
              Reset
            </button>
          </div>

          {/* Card list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {filteredCards.map(card => {
              const bucket = Math.min(state[card.id] ?? 0, 3)
              return (
                <div key={card.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: 'white', borderRadius: 8, border: '1px solid #e2e8f0' }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, background: BUCKET_COLOURS[bucket].replace('0.5', '1'), flexShrink: 0, display: 'block' }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '.85rem', fontWeight: 600, color: '#1e293b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{card.term}</div>
                  </div>
                  <span style={{ fontSize: '.7rem', fontWeight: 600, padding: '2px 8px', borderRadius: 99, background: BUCKET_COLOURS[bucket], color: BUCKET_TEXT[bucket], flexShrink: 0 }}>
                    {BUCKET_LABELS[bucket]}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {mode === 'study' && currentCard && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <button onClick={() => setMode('browse')} style={{ padding: '6px 14px', borderRadius: 8, border: '1px solid #e2e8f0', background: 'white', color: '#64748b', fontSize: '.8rem', cursor: 'pointer' }}>
              ← Back
            </button>
            <span style={{ fontSize: '.82rem', color: '#64748b' }}>{sessionCount} reviewed this session · {remaining} remaining</span>
          </div>
          <CardFace card={currentCard} state={state} onRate={handleRate} />
        </div>
      )}

      {mode === 'complete' && (
        <div style={{ textAlign: 'center', padding: '48px 20px' }}>
          <div style={{ fontSize: '3rem', marginBottom: 16 }}>🏆</div>
          <h2 style={{ margin: '0 0 8px', fontSize: '1.4rem', fontWeight: 800, color: '#1e293b' }}>All done!</h2>
          <p style={{ margin: '0 0 24px', color: '#64748b' }}>You reviewed {sessionCount} card{sessionCount !== 1 ? 's' : ''} this session.</p>
          <button onClick={() => setMode('browse')} style={{ padding: '12px 28px', borderRadius: 10, border: 'none', background: '#6366f1', color: 'white', fontWeight: 700, fontSize: '.9rem', cursor: 'pointer' }}>
            Back to Overview
          </button>
        </div>
      )}
    </div>
  )
}
