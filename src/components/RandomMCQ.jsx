import { useState, useMemo } from 'react'
import { questionBank } from '../data/questionBank'
import { allTopics } from '../data/topics'

const DIFFICULTY_COLORS = {
  easy:   { bg: '#f0fdf4', color: '#15803d', border: '#86efac' },
  medium: { bg: '#fffbeb', color: '#b45309', border: '#fcd34d' },
  hard:   { bg: '#fef2f2', color: '#b91c1c', border: '#fca5a5' },
}
const DIFFICULTY_LABELS = { easy: 'Easy', medium: 'Medium', hard: 'Hard' }

const INCORRECT_KEY = 'aqa_econ_incorrect'
const SESSION_KEY = 'aqa_econ_quiz_session'

function loadIncorrectIds() {
  try { return new Set(JSON.parse(localStorage.getItem(INCORRECT_KEY)) || []) }
  catch { return new Set() }
}
function saveIncorrectIds(set) {
  localStorage.setItem(INCORRECT_KEY, JSON.stringify([...set]))
}

function loadSession() {
  try { return JSON.parse(localStorage.getItem(SESSION_KEY)) || null }
  catch { return null }
}
function saveSession(data) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(data))
}
function clearSession() {
  localStorage.removeItem(SESSION_KEY)
}

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Shuffle a question's options and remap correct index/indices to match
function shuffleOptions(q) {
  const indices = shuffle(Array.from({ length: q.options.length }, (_, i) => i))
  const newOptions = indices.map(i => q.options[i])
  if (Array.isArray(q.correct)) {
    const correctSet = new Set(q.correct)
    const newCorrect = indices.reduce((acc, origIdx, newIdx) => {
      if (correctSet.has(origIdx)) acc.push(newIdx)
      return acc
    }, [])
    return { ...q, options: newOptions, correct: newCorrect }
  }
  return { ...q, options: newOptions, correct: indices.indexOf(q.correct) }
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

export default function RandomMCQ() {
  const [activeTab, setActiveTab] = useState('practice')
  const [incorrectIds, setIncorrectIds] = useState(loadIncorrectIds)
  const [savedSession, setSavedSession] = useState(loadSession)

  // ── Practice tab state ─────────────────────────────────────
  const [filterDifficulty, setFilterDifficulty] = useState('all')
  const [filterTopic, setFilterTopic] = useState('all')
  const [quizStarted, setQuizStarted] = useState(false)
  const [questions, setQuestions] = useState([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selected, setSelected] = useState(null)      // single-select
  const [selectedSet, setSelectedSet] = useState(new Set()) // multi-select
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [answers, setAnswers] = useState([])

  // ── Incorrect tracking helpers ─────────────────────────────
  function addIncorrect(id) {
    setIncorrectIds(prev => {
      const next = new Set(prev)
      next.add(id)
      saveIncorrectIds(next)
      return next
    })
  }
  function removeIncorrect(id) {
    setIncorrectIds(prev => {
      const next = new Set(prev)
      next.delete(id)
      saveIncorrectIds(next)
      return next
    })
  }
  function clearAllIncorrect() {
    setIncorrectIds(new Set())
    saveIncorrectIds(new Set())
  }

  // ── Practice tab logic ─────────────────────────────────────
  const topicOptions = useMemo(() => {
    // Build topic list from the question bank itself so any topic with questions appears
    const seen = new Map()
    questionBank.forEach(q => {
      if (!seen.has(q.topic)) seen.set(q.topic, q.topicLabel)
    })
    // Preserve ordering from allTopics where possible, then append extras
    const ordered = allTopics
      .filter(t => seen.has(t.id))
      .map(t => ({ id: t.id, label: t.title, icon: t.icon }))
    const orderedIds = new Set(ordered.map(t => t.id))
    seen.forEach((label, id) => {
      if (!orderedIds.has(id)) ordered.push({ id, label, icon: '📚' })
    })
    return ordered
  }, [])
  const filteredCount = useMemo(() => {
    let qs = questionBank
    if (filterDifficulty !== 'all') qs = qs.filter(q => q.difficulty === filterDifficulty)
    if (filterTopic !== 'all') qs = qs.filter(q => q.topic === filterTopic)
    return qs.length
  }, [filterDifficulty, filterTopic])

  function startQuiz() {
    clearSession()
    setSavedSession(null)
    let qs = questionBank
    if (filterDifficulty !== 'all') qs = qs.filter(q => q.difficulty === filterDifficulty)
    if (filterTopic !== 'all') qs = qs.filter(q => q.topic === filterTopic)
    const shuffled = shuffle(qs).map(shuffleOptions)
    setQuestions(shuffled)
    setCurrentIdx(0); setSelected(null); setSelectedSet(new Set()); setAnswered(false)
    setScore(0); setFinished(false); setAnswers([])
    setQuizStarted(true)
    saveSession({ questions: shuffled, currentIdx: 0, score: 0, answers: [], filterDifficulty, filterTopic })
  }

  function resumeQuiz() {
    const s = savedSession
    setQuestions(s.questions)
    setCurrentIdx(s.currentIdx)
    setScore(s.score)
    setAnswers(s.answers)
    setSelected(null); setSelectedSet(new Set()); setAnswered(false)
    setFinished(false)
    setQuizStarted(true)
  }

  function handleSelect(optIdx) {
    if (answered) return
    const q = questions[currentIdx]
    if (q.type === 'multi') {
      setSelectedSet(prev => {
        const next = new Set(prev)
        next.has(optIdx) ? next.delete(optIdx) : next.add(optIdx)
        return next
      })
    } else {
      const isCorrect = optIdx === q.correct
      setSelected(optIdx)
      setAnswered(true)
      if (isCorrect) { setScore(s => s + 1); removeIncorrect(q.id) } else { addIncorrect(q.id) }
      setAnswers(prev => [...prev, { selected: optIdx, correct: q.correct, isCorrect, question: q }])
    }
  }

  function handleSubmitMulti() {
    const q = questions[currentIdx]
    const correctSet = new Set(q.correct)
    const isCorrect = selectedSet.size === correctSet.size && [...selectedSet].every(i => correctSet.has(i))
    setAnswered(true)
    if (isCorrect) { setScore(s => s + 1); removeIncorrect(q.id) } else { addIncorrect(q.id) }
    setAnswers(prev => [...prev, { selected: [...selectedSet], correct: q.correct, isCorrect, question: q }])
  }

  function handleNext() {
    const nextIdx = currentIdx + 1
    if (nextIdx >= questions.length) {
      clearSession()
      setSavedSession(null)
      setFinished(true)
    } else {
      const newAnswers = answers
      saveSession({ questions, currentIdx: nextIdx, score, answers: newAnswers, filterDifficulty, filterTopic })
      setCurrentIdx(nextIdx)
      setSelected(null)
      setSelectedSet(new Set())
      setAnswered(false)
    }
  }

  function discardAndReset() {
    clearSession()
    setSavedSession(null)
    setQuizStarted(false)
    setFinished(false)
  }

  // ── Tab bar ────────────────────────────────────────────────
  return (
    <div className="fade-in">
      <div style={{
        display: 'flex', gap: 4, marginBottom: 24,
        background: 'var(--surface)', border: '2px solid var(--border)',
        borderRadius: 12, padding: 4,
      }}>
        <TabBtn active={activeTab === 'practice'} onClick={() => setActiveTab('practice')}>
          🎲 Practice
        </TabBtn>
        <TabBtn
          active={activeTab === 'incorrect'}
          onClick={() => setActiveTab('incorrect')}
          badge={incorrectIds.size || null}
          badgeColor="#dc2626"
        >
          ❌ Weak Questions
        </TabBtn>
      </div>

      {activeTab === 'practice' && (
        <>
          {!quizStarted && (
            <SetupScreen
              filterDifficulty={filterDifficulty}
              setFilterDifficulty={setFilterDifficulty}
              filterTopic={filterTopic}
              setFilterTopic={setFilterTopic}
              topicOptions={topicOptions}
              filteredCount={filteredCount}
              onStart={startQuiz}
              savedSession={savedSession}
              onResume={resumeQuiz}
              onDiscardSession={() => { clearSession(); setSavedSession(null) }}
            />
          )}
          {quizStarted && !finished && (
            <QuizScreen
              questions={questions}
              currentIdx={currentIdx}
              selected={selected}
              selectedSet={selectedSet}
              answered={answered}
              score={score}
              onSelect={handleSelect}
              onSubmitMulti={handleSubmitMulti}
              onNext={handleNext}
              onBack={discardAndReset}
            />
          )}
          {finished && (
            <ResultsScreen
              score={score}
              answers={answers}
              onRestart={startQuiz}
              onBack={discardAndReset}
            />
          )}
        </>
      )}

      {activeTab === 'incorrect' && (
        <IncorrectTab
          incorrectIds={incorrectIds}
          addIncorrect={addIncorrect}
          removeIncorrect={removeIncorrect}
          clearAllIncorrect={clearAllIncorrect}
        />
      )}
    </div>
  )
}

// ── Tab button ─────────────────────────────────────────────────────────────────
function TabBtn({ active, onClick, children, badge, badgeColor }) {
  return (
    <button
      onClick={onClick}
      style={{
        flex: 1, padding: '10px 16px', borderRadius: 9,
        border: 'none',
        background: active ? 'var(--primary)' : 'transparent',
        color: active ? 'white' : 'var(--text-muted)',
        cursor: 'pointer', fontWeight: active ? 700 : 500, fontSize: '.9rem',
        transition: 'all .15s', display: 'flex', alignItems: 'center',
        justifyContent: 'center', gap: 8,
      }}
    >
      {children}
      {badge != null && (
        <span style={{
          background: active ? 'rgba(255,255,255,0.25)' : (badgeColor || '#dc2626'),
          color: 'white', borderRadius: 99, padding: '1px 8px',
          fontSize: '.72rem', fontWeight: 800, minWidth: 22, textAlign: 'center',
        }}>
          {badge}
        </span>
      )}
    </button>
  )
}

// ── Incorrect drill tab ────────────────────────────────────────────────────────
function IncorrectTab({ incorrectIds, addIncorrect, removeIncorrect, clearAllIncorrect }) {
  const [drillQueue, setDrillQueue] = useState(null)
  const [drillSelected, setDrillSelected] = useState(null)       // single
  const [drillSelectedSet, setDrillSelectedSet] = useState(new Set()) // multi
  const [drillAnswered, setDrillAnswered] = useState(false)
  const [drillCorrectThisSession, setDrillCorrectThisSession] = useState(0)

  const incorrectQuestions = useMemo(() => {
    return questionBank.filter(q => incorrectIds.has(q.id))
  }, [incorrectIds])

  function startDrill() {
    const qs = questionBank.filter(q => incorrectIds.has(q.id))
    setDrillQueue(shuffle(qs).map(shuffleOptions))
    setDrillSelected(null)
    setDrillSelectedSet(new Set())
    setDrillAnswered(false)
    setDrillCorrectThisSession(0)
  }

  function handleDrillSelect(optIdx) {
    if (drillAnswered) return
    const q = drillQueue[0]
    if (q.type === 'multi') {
      setDrillSelectedSet(prev => {
        const next = new Set(prev)
        next.has(optIdx) ? next.delete(optIdx) : next.add(optIdx)
        return next
      })
    } else {
      setDrillSelected(optIdx)
      setDrillAnswered(true)
    }
  }

  function handleDrillSubmitMulti() {
    setDrillAnswered(true)
  }

  function handleDrillNext() {
    const q = drillQueue[0]
    let isCorrect
    if (q.type === 'multi') {
      const correctSet = new Set(q.correct)
      isCorrect = drillSelectedSet.size === correctSet.size && [...drillSelectedSet].every(i => correctSet.has(i))
    } else {
      isCorrect = drillSelected === q.correct
    }

    if (isCorrect) {
      removeIncorrect(q.id)
      setDrillCorrectThisSession(n => n + 1)
      setDrillQueue(prev => prev.slice(1))
    } else {
      addIncorrect(q.id)
      setDrillQueue(prev => [...prev.slice(1), prev[0]])
    }
    setDrillSelected(null)
    setDrillSelectedSet(new Set())
    setDrillAnswered(false)
  }

  // ── Landing (not started) ──────────────────────────────────
  if (drillQueue === null) {
    if (incorrectIds.size === 0) {
      return (
        <div className="card" style={{ textAlign: 'center', padding: '48px 24px' }}>
          <div style={{ fontSize: '3rem', marginBottom: 16 }}>🎉</div>
          <h3 style={{ marginBottom: 8 }}>No weak questions!</h3>
          <p className="text-muted" style={{ maxWidth: 380, margin: '0 auto' }}>
            Questions you get wrong in Practice will appear here. Start practising to build your weak list.
          </p>
        </div>
      )
    }

    const byDiff = { easy: 0, medium: 0, hard: 0 }
    incorrectQuestions.forEach(q => byDiff[q.difficulty]++)

    return (
      <div className="fade-in">
        <div style={{ marginBottom: 20 }}>
          <h2 style={{ margin: '0 0 6px', fontSize: '1.4rem' }}>Weak Questions Drill</h2>
          <p className="text-muted" style={{ fontSize: '.875rem' }}>
            Every question you got wrong in Practice is queued here. Get it right to clear it. Get it wrong and it cycles back.
          </p>
        </div>

        {/* Summary cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 20 }}>
          {Object.entries(byDiff).map(([diff, count]) => {
            if (count === 0) return null
            const dc = DIFFICULTY_COLORS[diff]
            return (
              <div key={diff} className="card" style={{ textAlign: 'center', padding: '16px 10px', background: dc.bg, borderColor: dc.border }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: dc.color }}>{count}</div>
                <div style={{ fontSize: '.78rem', color: dc.color, fontWeight: 600 }}>{DIFFICULTY_LABELS[diff]}</div>
              </div>
            )
          })}
        </div>

        {/* Queue preview */}
        <div className="card" style={{ marginBottom: 20, padding: '14px 18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div style={{ fontWeight: 700, fontSize: '.9rem' }}>
              {incorrectIds.size} question{incorrectIds.size !== 1 ? 's' : ''} to clear
            </div>
            <button
              onClick={() => { if (window.confirm('Clear all weak questions from the list?')) clearAllIncorrect() }}
              style={{
                background: 'none', border: '1px solid #fca5a5', borderRadius: 8,
                color: '#dc2626', padding: '4px 12px', fontSize: '.78rem',
                cursor: 'pointer', fontWeight: 600,
              }}
            >
              Clear all
            </button>
          </div>
          <div style={{ display: 'grid', gap: 6, maxHeight: 260, overflowY: 'auto' }}>
            {incorrectQuestions.map(q => {
              const dc = DIFFICULTY_COLORS[q.difficulty]
              return (
                <div key={q.id} style={{
                  display: 'flex', gap: 8, alignItems: 'center',
                  padding: '8px 10px', borderRadius: 8,
                  background: 'var(--surface)', border: '1px solid var(--border)',
                }}>
                  <span style={{
                    background: dc.bg, color: dc.color, border: `1px solid ${dc.border}`,
                    borderRadius: 99, padding: '1px 8px', fontSize: '.68rem', fontWeight: 700, flexShrink: 0,
                  }}>
                    {DIFFICULTY_LABELS[q.difficulty]}
                  </span>
                  <span style={{ fontSize: '.8rem', color: 'var(--text)', lineHeight: 1.3, flex: 1 }}>
                    {q.question.length > 80 ? q.question.slice(0, 80) + '…' : q.question}
                  </span>
                  <button
                    onClick={() => removeIncorrect(q.id)}
                    title="Remove from list"
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      color: 'var(--text-muted)', fontSize: '.85rem', padding: '2px 4px', flexShrink: 0,
                    }}
                  >
                    ✕
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button className="btn btn-primary" style={{ fontSize: '1rem', padding: '12px 36px' }} onClick={startDrill}>
            Start Drill →
          </button>
        </div>
      </div>
    )
  }

  // ── Drill complete ─────────────────────────────────────────
  if (drillQueue.length === 0) {
    return (
      <div className="card fade-in" style={{ textAlign: 'center', padding: '48px 24px' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: 16 }}>🏆</div>
        <h2 style={{ marginBottom: 8, color: '#15803d' }}>All cleared!</h2>
        <p className="text-muted" style={{ marginBottom: 6 }}>
          You answered {drillCorrectThisSession} question{drillCorrectThisSession !== 1 ? 's' : ''} correctly this session.
        </p>
        <p className="text-muted" style={{ marginBottom: 24, fontSize: '.875rem' }}>
          Your weak question list is now empty. Keep practising to stay sharp.
        </p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={() => setDrillQueue(null)}>
            ← Back
          </button>
        </div>
      </div>
    )
  }

  // ── Active drill question ──────────────────────────────────
  const q = drillQueue[0]
  const totalRemaining = drillQueue.length
  const isMulti = q.type === 'multi'
  const correctSet = isMulti ? new Set(q.correct) : null
  const isCorrect = isMulti
    ? drillSelectedSet.size === correctSet.size && [...drillSelectedSet].every(i => correctSet.has(i))
    : drillSelected === q.correct
  const diffStyle = DIFFICULTY_COLORS[q.difficulty]

  return (
    <div className="fade-in">
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.3rem' }}>Weak Questions Drill</h2>
          <p className="text-muted" style={{ margin: '4px 0 0', fontSize: '.82rem' }}>
            {totalRemaining} remaining &middot; {drillCorrectThisSession} cleared this session
          </p>
        </div>
        <button
          onClick={() => setDrillQueue(null)}
          style={{
            background: 'transparent', border: '1px solid var(--border)',
            borderRadius: 8, padding: '6px 14px', cursor: 'pointer',
            fontSize: '.825rem', color: 'var(--text-muted)',
          }}
        >
          ← Exit Drill
        </button>
      </div>

      {/* Progress */}
      <div style={{
        background: '#fef2f2', border: '1px solid #fca5a5',
        borderRadius: 10, padding: '10px 16px', marginBottom: 16,
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '.72rem', fontWeight: 700, color: '#dc2626', textTransform: 'uppercase', letterSpacing: '0.7px', marginBottom: 6 }}>
            Questions remaining
          </div>
          <div style={{ background: '#fecaca', borderRadius: 99, height: 8 }}>
            <div style={{
              height: '100%', borderRadius: 99, background: '#dc2626',
              width: `${Math.max(4, (drillCorrectThisSession / (drillCorrectThisSession + totalRemaining)) * 100)}%`,
              transition: 'width .4s',
            }} />
          </div>
        </div>
        <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#dc2626', minWidth: 32, textAlign: 'right' }}>
          {totalRemaining}
        </div>
      </div>

      {/* Question card */}
      <div className="card" style={{ marginBottom: 16, borderLeft: '4px solid #fca5a5' }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
          <span style={{
            background: diffStyle.bg, color: diffStyle.color,
            border: `1px solid ${diffStyle.border}`,
            borderRadius: 99, padding: '3px 12px', fontSize: '.75rem', fontWeight: 700,
          }}>
            {DIFFICULTY_LABELS[q.difficulty]}
          </span>
          <span style={{
            background: '#ede9fe', color: '#6d28d9',
            borderRadius: 99, padding: '3px 12px', fontSize: '.75rem', fontWeight: 600,
          }}>
            {q.topicLabel}
          </span>
          <span style={{
            background: '#fef2f2', color: '#dc2626',
            borderRadius: 99, padding: '3px 12px', fontSize: '.75rem', fontWeight: 600,
          }}>
            Previously incorrect
          </span>
        </div>

        <h3 style={{ lineHeight: 1.5, marginBottom: 8 }}>{q.question}</h3>
        {isMulti && !drillAnswered && (
          <p style={{ fontSize: '.8rem', color: '#6366f1', fontWeight: 600, marginBottom: 16 }}>
            Select ALL correct answers, then click Submit.
          </p>
        )}

        <div style={{ display: 'grid', gap: 8 }}>
          {q.options.map((opt, i) => {
            const isCorrectOpt = isMulti ? correctSet.has(i) : i === q.correct
            const isSelectedOpt = isMulti ? drillSelectedSet.has(i) : i === drillSelected
            let bg = 'var(--surface)', borderColor = 'var(--border)', color = 'var(--text)'
            if (drillAnswered) {
              if (isCorrectOpt) { bg = '#f0fdf4'; borderColor = '#10b981'; color = '#065f46' }
              else if (isSelectedOpt && !isCorrectOpt) { bg = '#fef2f2'; borderColor = '#ef4444'; color = '#991b1b' }
            } else if (isSelectedOpt) {
              bg = '#ede9fe'; borderColor = '#6366f1'; color = '#4338ca'
            }
            return (
              <button
                key={i}
                onClick={() => handleDrillSelect(i)}
                disabled={drillAnswered}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '12px 16px', borderRadius: 10,
                  border: `2px solid ${borderColor}`,
                  background: bg, color, cursor: drillAnswered ? 'default' : 'pointer',
                  textAlign: 'left', fontSize: '.9rem', lineHeight: 1.4,
                  transition: 'all .15s',
                  fontWeight: drillAnswered && isCorrectOpt ? 600 : 400,
                }}
              >
                <span style={{
                  width: 28, height: 28, borderRadius: isMulti ? 4 : '50%', flexShrink: 0,
                  background: drillAnswered
                    ? isCorrectOpt ? '#10b981' : isSelectedOpt ? '#ef4444' : '#e2e8f0'
                    : isSelectedOpt ? '#6366f1' : '#e2e8f0',
                  color: (drillAnswered && (isCorrectOpt || isSelectedOpt)) || (!drillAnswered && isSelectedOpt) ? 'white' : '#64748b',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '.8rem', fontWeight: 700,
                }}>
                  {OPTION_LETTERS[i]}
                </span>
                {opt}
              </button>
            )
          })}
        </div>

        {isMulti && !drillAnswered && (
          <div style={{ marginTop: 14, textAlign: 'right' }}>
            <button
              onClick={handleDrillSubmitMulti}
              disabled={drillSelectedSet.size === 0}
              className="btn btn-primary"
              style={{ opacity: drillSelectedSet.size === 0 ? 0.5 : 1 }}
            >
              Submit Answer →
            </button>
          </div>
        )}

        {drillAnswered && (
          <div className="fade-in" style={{
            marginTop: 16, padding: '14px 16px', borderRadius: 10,
            background: isCorrect ? '#f0fdf4' : '#fef2f2',
            borderLeft: `4px solid ${isCorrect ? '#10b981' : '#ef4444'}`,
            fontSize: '.875rem', lineHeight: 1.6,
          }}>
            <strong style={{ color: isCorrect ? '#065f46' : '#991b1b', display: 'block', marginBottom: 4 }}>
              {isCorrect
                ? '✅ Correct! Removed from weak list.'
                : '❌ Incorrect — this question will cycle back.'}
            </strong>
            <span style={{ color: 'var(--text)' }}>{q.explanation}</span>
          </div>
        )}
      </div>

      {drillAnswered && (
        <div style={{ textAlign: 'right' }}>
          <button className="btn btn-primary" onClick={handleDrillNext}
            style={{ background: isCorrect ? '#15803d' : 'var(--primary)' }}>
            {isCorrect
              ? (totalRemaining === 1 ? '🏆 Complete!' : `Next (${totalRemaining - 1} left) →`)
              : `Try Next (${totalRemaining} left) →`}
          </button>
        </div>
      )}
    </div>
  )
}

// ── Setup screen ───────────────────────────────────────────────────────────────
function SetupScreen({ filterDifficulty, setFilterDifficulty, filterTopic, setFilterTopic, topicOptions, filteredCount, onStart, savedSession, onResume, onDiscardSession }) {
  return (
    <div className="fade-in">
      <div style={{ marginBottom: 28 }}>
        <h2 style={{ margin: '0 0 6px', fontSize: '1.6rem' }}>Random MCQ Practice</h2>
        <p className="text-muted">
          {questionBank.length} questions across all topics. Wrong answers go to the Weak Questions tab.
        </p>
      </div>

      {savedSession && savedSession.currentIdx > 0 && (
        <div style={{
          marginBottom: 20, padding: '16px 20px', borderRadius: 12,
          background: '#eef2ff', border: '2px solid #6366f1',
          display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap',
        }}>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ fontWeight: 700, color: '#3730a3', fontSize: '.95rem', marginBottom: 2 }}>
              📍 Session in progress
            </div>
            <div style={{ color: '#4338ca', fontSize: '.85rem' }}>
              Question {savedSession.currentIdx + 1} of {savedSession.questions.length}
              &nbsp;·&nbsp;Score: {savedSession.score}/{savedSession.currentIdx}
              &nbsp;·&nbsp;{Math.round((savedSession.score / Math.max(savedSession.currentIdx, 1)) * 100)}% correct so far
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              onClick={onResume}
              style={{
                padding: '9px 20px', borderRadius: 9, border: 'none',
                background: '#6366f1', color: 'white',
                fontWeight: 700, fontSize: '.875rem', cursor: 'pointer',
              }}
            >
              ▶ Resume
            </button>
            <button
              onClick={onDiscardSession}
              style={{
                padding: '9px 14px', borderRadius: 9,
                border: '2px solid #a5b4fc', background: 'transparent',
                color: '#4338ca', fontWeight: 600, fontSize: '.825rem', cursor: 'pointer',
              }}
            >
              Discard
            </button>
          </div>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 28 }}>
        {[
          { label: 'Easy', count: questionBank.filter(q => q.difficulty === 'easy').length, ...DIFFICULTY_COLORS.easy },
          { label: 'Medium', count: questionBank.filter(q => q.difficulty === 'medium').length, ...DIFFICULTY_COLORS.medium },
          { label: 'Hard', count: questionBank.filter(q => q.difficulty === 'hard').length, ...DIFFICULTY_COLORS.hard },
        ].map(d => (
          <div key={d.label} className="card" style={{ textAlign: 'center', padding: '16px 12px', background: d.bg, borderColor: d.border }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: d.color }}>{d.count}</div>
            <div style={{ fontSize: '.8rem', color: d.color, fontWeight: 600 }}>{d.label}</div>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginBottom: 24 }}>
        <h3 style={{ marginBottom: 16, fontSize: '1rem' }}>Filter Questions</h3>

        <div style={{ marginBottom: 18 }}>
          <label style={{ display: 'block', fontWeight: 600, fontSize: '.875rem', marginBottom: 8, color: 'var(--text-muted)' }}>DIFFICULTY</label>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['all', 'easy', 'medium', 'hard'].map(d => {
              const active = filterDifficulty === d
              const dc = d !== 'all' ? DIFFICULTY_COLORS[d] : null
              return (
                <button key={d} onClick={() => setFilterDifficulty(d)} style={{
                  padding: '7px 16px', borderRadius: 99, border: '2px solid',
                  borderColor: active ? (dc?.border || 'var(--primary)') : 'var(--border)',
                  background: active ? (dc?.bg || '#ede9fe') : 'transparent',
                  color: active ? (dc?.color || '#6d28d9') : 'var(--text-muted)',
                  cursor: 'pointer', fontWeight: active ? 700 : 500,
                  fontSize: '.85rem', transition: 'all .15s',
                }}>
                  {d === 'all' ? 'All Levels' : DIFFICULTY_LABELS[d]}
                </button>
              )
            })}
          </div>
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: 600, fontSize: '.875rem', marginBottom: 8, color: 'var(--text-muted)' }}>TOPIC</label>
          <select value={filterTopic} onChange={e => setFilterTopic(e.target.value)} style={{
            width: '100%', padding: '10px 14px', borderRadius: 10,
            border: '2px solid var(--border)', background: 'var(--surface)',
            color: 'var(--text)', fontSize: '.9rem', cursor: 'pointer',
          }}>
            <option value="all">All Topics ({questionBank.length} questions)</option>
            {topicOptions.map(t => {
              const count = questionBank.filter(q => q.topic === t.id).length
              return <option key={t.id} value={t.id}>{t.icon} {t.label} ({count} questions)</option>
            })}
          </select>
        </div>
      </div>

      <div className="card" style={{ textAlign: 'center', padding: '28px 24px', background: filteredCount === 0 ? '#fef2f2' : '#f8faff' }}>
        {filteredCount === 0 ? (
          <p style={{ color: '#dc2626', fontWeight: 600 }}>No questions match this filter.</p>
        ) : (
          <>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: 6 }}>{filteredCount}</div>
            <p className="text-muted" style={{ marginBottom: 20 }}>questions selected &middot; shuffled randomly</p>
            <button className="btn btn-primary" style={{ fontSize: '1rem', padding: '12px 32px' }} onClick={onStart}>
              Start Practice →
            </button>
          </>
        )}
      </div>
    </div>
  )
}

// ── Active quiz screen ─────────────────────────────────────────────────────────
function QuizScreen({ questions, currentIdx, selected, selectedSet, answered, score, onSelect, onSubmitMulti, onNext, onBack }) {
  const q = questions[currentIdx]
  const total = questions.length
  const diffStyle = DIFFICULTY_COLORS[q.difficulty]
  const progress = (currentIdx / total) * 100
  const isMulti = q.type === 'multi'
  const correctSet = isMulti ? new Set(q.correct) : null

  return (
    <div className="fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.4rem' }}>Random MCQ Practice</h2>
          <p className="text-muted" style={{ margin: '4px 0 0', fontSize: '.85rem' }}>
            Question {currentIdx + 1} of {total} &middot; Score: {score}/{currentIdx}
          </p>
        </div>
        <button onClick={onBack} style={{
          background: 'transparent', border: '1px solid var(--border)',
          borderRadius: 8, padding: '6px 14px', cursor: 'pointer',
          fontSize: '.825rem', color: 'var(--text-muted)',
        }}>
          ← Change Filters
        </button>
      </div>

      <div className="progress-bar-bg" style={{ marginBottom: 20 }}>
        <div className="progress-bar-fill" style={{ width: `${progress}%`, transition: 'width 0.4s' }} />
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
          <span style={{
            background: diffStyle.bg, color: diffStyle.color,
            border: `1px solid ${diffStyle.border}`,
            borderRadius: 99, padding: '3px 12px', fontSize: '.75rem', fontWeight: 700,
          }}>
            {DIFFICULTY_LABELS[q.difficulty]}
          </span>
          <span style={{
            background: '#ede9fe', color: '#6d28d9',
            borderRadius: 99, padding: '3px 12px', fontSize: '.75rem', fontWeight: 600,
          }}>
            {q.topicLabel}
          </span>
        </div>

        <h3 style={{ lineHeight: 1.5, marginBottom: 8 }}>{q.question}</h3>
        {isMulti && !answered && (
          <p style={{ fontSize: '.8rem', color: '#6366f1', fontWeight: 600, marginBottom: 16 }}>
            Select ALL correct answers, then click Submit.
          </p>
        )}

        <div style={{ display: 'grid', gap: 8 }}>
          {q.options.map((opt, i) => {
            const isCorrectOpt = isMulti ? correctSet.has(i) : i === q.correct
            const isSelectedOpt = isMulti ? selectedSet.has(i) : i === selected
            let bg = 'var(--surface)', borderColor = 'var(--border)', color = 'var(--text)'
            if (answered) {
              if (isCorrectOpt) { bg = '#f0fdf4'; borderColor = '#10b981'; color = '#065f46' }
              else if (isSelectedOpt && !isCorrectOpt) { bg = '#fef2f2'; borderColor = '#ef4444'; color = '#991b1b' }
            } else if (isSelectedOpt) {
              bg = '#ede9fe'; borderColor = '#6366f1'; color = '#4338ca'
            }
            return (
              <button key={i} onClick={() => onSelect(i)} disabled={answered} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '12px 16px', borderRadius: 10,
                border: `2px solid ${borderColor}`,
                background: bg, color, cursor: answered ? 'default' : 'pointer',
                textAlign: 'left', fontSize: '.9rem', lineHeight: 1.4, transition: 'all .15s',
                fontWeight: answered && isCorrectOpt ? 600 : 400,
              }}>
                <span style={{
                  width: 28, height: 28, borderRadius: isMulti ? 4 : '50%', flexShrink: 0,
                  background: answered
                    ? isCorrectOpt ? '#10b981' : isSelectedOpt ? '#ef4444' : '#e2e8f0'
                    : isSelectedOpt ? '#6366f1' : '#e2e8f0',
                  color: (answered && (isCorrectOpt || isSelectedOpt)) || (!answered && isSelectedOpt) ? 'white' : '#64748b',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '.8rem', fontWeight: 700,
                }}>
                  {OPTION_LETTERS[i]}
                </span>
                {opt}
              </button>
            )
          })}
        </div>

        {isMulti && !answered && (
          <div style={{ marginTop: 14, textAlign: 'right' }}>
            <button
              onClick={onSubmitMulti}
              disabled={selectedSet.size === 0}
              className="btn btn-primary"
              style={{ opacity: selectedSet.size === 0 ? 0.5 : 1 }}
            >
              Submit Answer →
            </button>
          </div>
        )}

        {answered && (() => {
          const isCorrectAnswer = isMulti
            ? selectedSet.size === correctSet.size && [...selectedSet].every(i => correctSet.has(i))
            : selected === q.correct
          return (
            <div className="fade-in" style={{
              marginTop: 16, padding: '14px 16px', borderRadius: 10,
              background: isCorrectAnswer ? '#f0fdf4' : '#fef2f2',
              borderLeft: `4px solid ${isCorrectAnswer ? '#10b981' : '#ef4444'}`,
              fontSize: '.875rem', lineHeight: 1.6,
            }}>
              <strong style={{ color: isCorrectAnswer ? '#065f46' : '#991b1b' }}>
                {isCorrectAnswer ? '✅ Correct!' : '❌ Incorrect — added to Weak Questions.'}
              </strong>{' '}
              <span style={{ color: 'var(--text)' }}>{q.explanation}</span>
            </div>
          )
        })()}
      </div>

      {answered && (
        <div style={{ textAlign: 'right' }}>
          <button className="btn btn-primary" onClick={onNext}>
            {currentIdx + 1 >= total ? '📊 See Results' : 'Next Question →'}
          </button>
        </div>
      )}
    </div>
  )
}

// ── Results screen ─────────────────────────────────────────────────────────────
function ResultsScreen({ score, answers, onRestart, onBack }) {
  const total = answers.length
  const pct = Math.round((score / total) * 100)
  const grade = pct >= 90 ? { label: 'A*', color: '#7c3aed', bg: '#ede9fe' }
    : pct >= 80 ? { label: 'A', color: '#2563eb', bg: '#eff6ff' }
    : pct >= 70 ? { label: 'B', color: '#0891b2', bg: '#ecfeff' }
    : pct >= 60 ? { label: 'C', color: '#059669', bg: '#f0fdf4' }
    : { label: 'D/E', color: '#dc2626', bg: '#fef2f2' }

  const byDifficulty = { easy: { correct: 0, total: 0 }, medium: { correct: 0, total: 0 }, hard: { correct: 0, total: 0 } }
  answers.forEach(a => {
    byDifficulty[a.question.difficulty].total++
    if (a.isCorrect) byDifficulty[a.question.difficulty].correct++
  })

  const [showReview, setShowReview] = useState(false)
  const wrongCount = answers.filter(a => !a.isCorrect).length

  return (
    <div className="fade-in">
      <div className="card" style={{ textAlign: 'center', padding: '32px 24px', marginBottom: 20 }}>
        <div style={{
          width: 80, height: 80, borderRadius: '50%',
          background: grade.bg, color: grade.color,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '2rem', fontWeight: 900, margin: '0 auto 16px',
        }}>
          {grade.label}
        </div>
        <h2 style={{ margin: '0 0 6px' }}>Session Complete!</h2>
        <p className="text-muted" style={{ marginBottom: 20 }}>
          {score} / {total} correct ({pct}%)
          {wrongCount > 0 && ` · ${wrongCount} added to Weak Questions`}
        </p>
        <div style={{ maxWidth: 280, margin: '0 auto 24px' }}>
          <div className="progress-bar-bg" style={{ height: 12 }}>
            <div className="progress-bar-fill" style={{ width: `${pct}%`, background: grade.color }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 24 }}>
          {Object.entries(byDifficulty).map(([diff, stats]) => {
            if (stats.total === 0) return null
            const dc = DIFFICULTY_COLORS[diff]
            const dpct = Math.round((stats.correct / stats.total) * 100)
            return (
              <div key={diff} style={{ background: dc.bg, borderRadius: 10, padding: '12px 8px', border: `1px solid ${dc.border}` }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: dc.color }}>{dpct}%</div>
                <div style={{ fontSize: '.75rem', color: dc.color, fontWeight: 600 }}>{DIFFICULTY_LABELS[diff]}</div>
                <div style={{ fontSize: '.7rem', color: dc.color }}>{stats.correct}/{stats.total}</div>
              </div>
            )
          })}
        </div>

        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={onRestart}>🔄 Retry Same Filter</button>
          <button onClick={onBack} style={{
            padding: '10px 20px', borderRadius: 10, border: '2px solid var(--border)',
            background: 'transparent', cursor: 'pointer', fontWeight: 600,
            color: 'var(--text)', fontSize: '.9rem',
          }}>
            ← Change Filters
          </button>
        </div>
      </div>

      <button onClick={() => setShowReview(v => !v)} style={{
        width: '100%', padding: '12px', borderRadius: 10,
        border: '2px solid var(--border)', background: 'var(--surface)',
        cursor: 'pointer', fontWeight: 600, color: 'var(--text)',
        marginBottom: 12, fontSize: '.9rem',
      }}>
        {showReview ? '▲ Hide' : '▼ Show'} Full Question Review ({total} questions)
      </button>

      {showReview && (
        <div style={{ display: 'grid', gap: 10 }}>
          {answers.map((a, i) => {
            const q = a.question
            const dc = DIFFICULTY_COLORS[q.difficulty]
            return (
              <div key={i} className="card" style={{ borderLeft: `4px solid ${a.isCorrect ? '#10b981' : '#ef4444'}`, padding: '14px 18px' }}>
                <div style={{ display: 'flex', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '1rem' }}>{a.isCorrect ? '✅' : '❌'}</span>
                  <span style={{ background: dc.bg, color: dc.color, border: `1px solid ${dc.border}`, borderRadius: 99, padding: '2px 10px', fontSize: '.7rem', fontWeight: 700 }}>
                    {DIFFICULTY_LABELS[q.difficulty]}
                  </span>
                  <span style={{ fontSize: '.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>{q.topicLabel}</span>
                </div>
                <p style={{ fontWeight: 600, marginBottom: 6, color: 'var(--text)', lineHeight: 1.4 }}>Q{i + 1}: {q.question}</p>
                {!a.isCorrect && (
                  <p style={{ fontSize: '.825rem', color: '#dc2626', marginBottom: 4 }}>
                    Your answer: {Array.isArray(a.selected)
                      ? a.selected.map(i => q.options[i]).join(', ') || 'None selected'
                      : q.options[a.selected]}
                  </p>
                )}
                <p style={{ fontSize: '.825rem', color: '#059669', marginBottom: 6 }}>
                  Correct: {Array.isArray(q.correct)
                    ? q.correct.map(i => q.options[i]).join(', ')
                    : q.options[q.correct]}
                </p>
                <p style={{ fontSize: '.825rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{q.explanation}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
