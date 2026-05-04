import { useState } from 'react'

export default function MCQQuiz({ questions, topicTitle, previousProgress, onComplete }) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selected, setSelected] = useState(null)       // index of selected option
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [answers, setAnswers] = useState([])           // { selected, correct }[]

  const q = questions[currentIdx]
  const total = questions.length
  const progress = ((currentIdx) / total) * 100

  function handleSelect(optIdx) {
    if (answered) return
    const isCorrect = optIdx === q.correct
    setSelected(optIdx)
    setAnswered(true)
    const newScore = isCorrect ? score + 1 : score
    setScore(newScore)
    setAnswers(prev => [...prev, { selected: optIdx, correct: q.correct, isCorrect }])
  }

  function handleNext() {
    if (currentIdx + 1 >= total) {
      setFinished(true)
      onComplete(score, total)
    } else {
      setCurrentIdx(i => i + 1)
      setSelected(null)
      setAnswered(false)
    }
  }

  function handleRestart() {
    setCurrentIdx(0)
    setSelected(null)
    setAnswered(false)
    setScore(0)
    setFinished(false)
    setAnswers([])
  }

  if (finished) {
    return <ResultsScreen score={score} total={total} answers={answers} questions={questions} onRestart={handleRestart} />
  }

  return (
    <div className="fade-in">
      {/* Progress bar */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.8rem', color: 'var(--text-muted)', marginBottom: 6 }}>
          <span>Question {currentIdx + 1} of {total}</span>
          <span>Score: {score}/{currentIdx}</span>
        </div>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Question card */}
      <div className="card" style={{ marginBottom: 16 }}>
        <div style={{
          display: 'inline-block', background: '#ede9fe', color: '#6d28d9',
          borderRadius: 99, padding: '3px 12px', fontSize: '.75rem', fontWeight: 700,
          marginBottom: 12,
        }}>
          Question {currentIdx + 1}
        </div>
        <h3 style={{ lineHeight: 1.5, marginBottom: 20 }}>{q.question}</h3>

        {/* Options */}
        <div style={{ display: 'grid', gap: 8 }}>
          {q.options.map((opt, i) => {
            let cls = 'quiz-option'
            if (answered) {
              if (i === q.correct) cls += ' correct'
              else if (i === selected && i !== q.correct) cls += ' wrong'
            }
            return (
              <button
                key={i}
                className={cls}
                onClick={() => handleSelect(i)}
                disabled={answered}
              >
                <span style={{
                  width: 26, height: 26, borderRadius: '50%', flexShrink: 0,
                  background: answered
                    ? i === q.correct ? '#10b981' : i === selected ? '#ef4444' : '#e2e8f0'
                    : '#e2e8f0',
                  color: answered && (i === q.correct || (i === selected && i !== q.correct)) ? 'white' : '#64748b',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '.8rem', fontWeight: 700,
                }}>
                  {['A', 'B', 'C', 'D'][i]}
                </span>
                {opt}
              </button>
            )
          })}
        </div>

        {/* Feedback */}
        {answered && (
          <div className={`quiz-feedback ${selected === q.correct ? 'correct' : 'wrong'} fade-in`}>
            <strong>{selected === q.correct ? '✅ Correct!' : '❌ Incorrect.'}</strong>{' '}
            {q.explanation}
          </div>
        )}
      </div>

      {/* Next button */}
      {answered && (
        <div style={{ textAlign: 'right' }}>
          <button className="btn btn-primary" onClick={handleNext}>
            {currentIdx + 1 >= total ? '📊 See Results' : 'Next Question →'}
          </button>
        </div>
      )}
    </div>
  )
}

function ResultsScreen({ score, total, answers, questions, onRestart }) {
  const pct = Math.round((score / total) * 100)
  const grade = pct >= 90 ? { label: 'A*', color: '#7c3aed', bg: '#ede9fe' }
    : pct >= 80 ? { label: 'A', color: '#2563eb', bg: '#eff6ff' }
    : pct >= 70 ? { label: 'B', color: '#0891b2', bg: '#ecfeff' }
    : pct >= 60 ? { label: 'C', color: '#059669', bg: '#f0fdf4' }
    : { label: 'Needs Work', color: '#dc2626', bg: '#fef2f2' }

  return (
    <div className="fade-in">
      {/* Score card */}
      <div className="card" style={{ textAlign: 'center', padding: '36px 24px', marginBottom: 24 }}>
        <div style={{
          width: 80, height: 80, borderRadius: '50%',
          background: grade.bg, color: grade.color,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '2rem', fontWeight: 900,
          margin: '0 auto 16px',
        }}>
          {grade.label}
        </div>
        <h2 style={{ marginBottom: 4 }}>Quiz Complete!</h2>
        <p className="text-muted" style={{ marginBottom: 16 }}>
          You scored <strong style={{ color: 'var(--text)' }}>{score} out of {total}</strong> ({pct}%)
        </p>

        {/* Score bar */}
        <div style={{ maxWidth: 240, margin: '0 auto 20px' }}>
          <div className="progress-bar-bg" style={{ height: 12 }}>
            <div className="progress-bar-fill" style={{ width: `${pct}%`, background: grade.color }} />
          </div>
        </div>

        {pct >= 80 && <p style={{ color: '#059669', fontWeight: 600 }}>Excellent work! You have a strong grasp of this topic.</p>}
        {pct >= 60 && pct < 80 && <p style={{ color: '#d97706', fontWeight: 600 }}>Good effort — review the explanations below to solidify your understanding.</p>}
        {pct < 60 && <p style={{ color: '#dc2626', fontWeight: 600 }}>This topic needs more revision. Read through the theory section and try again.</p>}

        <button className="btn btn-primary" onClick={onRestart} style={{ marginTop: 16 }}>
          🔄 Retry Quiz
        </button>
      </div>

      {/* Question review */}
      <h3 style={{ marginBottom: 12 }}>Review All Questions</h3>
      <div style={{ display: 'grid', gap: 12 }}>
        {questions.map((q, i) => {
          const ans = answers[i]
          const correct = ans?.isCorrect
          return (
            <div
              key={i}
              className="card"
              style={{
                borderLeft: `4px solid ${correct ? '#10b981' : '#ef4444'}`,
                padding: '16px 20px',
              }}
            >
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.1rem' }}>{correct ? '✅' : '❌'}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ color: 'var(--text)', fontWeight: 600, marginBottom: 6 }}>
                    Q{i + 1}: {q.question}
                  </p>
                  {!correct && (
                    <p style={{ fontSize: '.825rem', color: '#dc2626', marginBottom: 4 }}>
                      Your answer: {q.options[ans?.selected]}
                    </p>
                  )}
                  <p style={{ fontSize: '.825rem', color: '#059669', marginBottom: 6 }}>
                    Correct: {q.options[q.correct]}
                  </p>
                  <p style={{ fontSize: '.825rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {q.explanation}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
