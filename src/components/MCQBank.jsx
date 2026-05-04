import { useState } from 'react'

export default function MCQBank({ questions }) {
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null))
  const [currentIdx, setCurrentIdx] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const total = questions.length
  const answered = userAnswers.filter(a => a !== null).length
  const score = submitted ? userAnswers.filter((a, i) => a === questions[i].correct).length : null
  const pct = submitted ? Math.round((score / total) * 100) : null
  const q = questions[currentIdx]

  function handleSelect(optIdx) {
    if (submitted) return
    setUserAnswers(prev => { const u = [...prev]; u[currentIdx] = optIdx; return u })
  }

  function handleReset() {
    setUserAnswers(Array(questions.length).fill(null))
    setSubmitted(false)
    setCurrentIdx(0)
  }

  return (
    <div className="fade-in">
      <div className="card" style={{ marginBottom: 16, background: 'linear-gradient(135deg,#1e1b4b,#3730a3)', color: 'white' }}>
        <h2 style={{ color: 'white', margin: '0 0 4px' }}>MCQ Bank — AQA Paper 3 Style</h2>
        <p style={{ color: 'rgba(255,255,255,.75)', margin: 0, fontSize: '.875rem' }}>
          Answer all {total} questions first, then submit to see all answers together.
        </p>
        <div style={{ marginTop: 12, display: 'flex', gap: 12 }}>
          <div style={{ background: 'rgba(255,255,255,.15)', borderRadius: 8, padding: '6px 14px', fontSize: '.8rem' }}>
            {answered}/{total} answered
          </div>
          {submitted && (
            <div style={{ background: 'rgba(255,255,255,.15)', borderRadius: 8, padding: '6px 14px', fontSize: '.8rem', fontWeight: 700 }}>
              Score: {score}/{total} ({pct}%)
            </div>
          )}
        </div>
      </div>

      {/* Question number nav */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
        {questions.map((_, i) => {
          const isSel = userAnswers[i] !== null
          const isRight = submitted && userAnswers[i] === questions[i].correct
          const isWrong = submitted && userAnswers[i] !== null && userAnswers[i] !== questions[i].correct
          const isSkip = submitted && userAnswers[i] === null
          return (
            <button key={i} onClick={() => setCurrentIdx(i)} style={{
              width: 36, height: 36, borderRadius: 8, cursor: 'pointer', fontWeight: 700, fontSize: '.8rem',
              border: currentIdx === i ? '2px solid #3730a3' : '2px solid transparent',
              background: isRight ? '#d1fae5' : isWrong ? '#fee2e2' : isSkip ? '#fef9c3' : isSel ? '#e0e7ff' : '#f1f5f9',
              color: isRight ? '#065f46' : isWrong ? '#991b1b' : '#1e293b',
            }}>{i + 1}</button>
          )
        })}
      </div>

      {/* Question card */}
      <div className="card" style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <div style={{ background: '#ede9fe', color: '#6d28d9', borderRadius: 99, padding: '3px 12px', fontSize: '.75rem', fontWeight: 700 }}>
            Question {currentIdx + 1} of {total}
          </div>
          {submitted && (
            <span style={{ fontSize: '.85rem', fontWeight: 700, color: userAnswers[currentIdx] === q.correct ? '#059669' : '#dc2626' }}>
              {userAnswers[currentIdx] === q.correct ? '✅ Correct' : '❌ Incorrect'}
            </span>
          )}
        </div>
        <h3 style={{ lineHeight: 1.5, marginBottom: 20 }}>{q.question}</h3>

        <div style={{ display: 'grid', gap: 8 }}>
          {q.options.map((opt, i) => {
            const isSelected = userAnswers[currentIdx] === i
            const isCorrectOpt = submitted && i === q.correct
            const isWrongOpt = submitted && isSelected && i !== q.correct
            let cls = 'quiz-option'
            if (isCorrectOpt) cls += ' correct'
            else if (isWrongOpt) cls += ' wrong'
            return (
              <button key={i} className={cls} onClick={() => handleSelect(i)}
                style={{ opacity: submitted && !isCorrectOpt && !isWrongOpt && !isSelected ? 0.55 : 1 }}>
                <span style={{
                  width: 26, height: 26, borderRadius: '50%', flexShrink: 0,
                  background: isCorrectOpt ? '#10b981' : isWrongOpt ? '#ef4444' : isSelected ? '#3730a3' : '#e2e8f0',
                  color: (isCorrectOpt || isWrongOpt || isSelected) ? 'white' : '#64748b',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.8rem', fontWeight: 700,
                }}>{['A','B','C','D'][i]}</span>
                {opt}
              </button>
            )
          })}
        </div>

        {submitted && (
          <div className={`quiz-feedback ${userAnswers[currentIdx] === q.correct ? 'correct' : 'wrong'} fade-in`} style={{ marginTop: 16 }}>
            <strong>{userAnswers[currentIdx] === q.correct ? '✅ Correct!' : `❌ Incorrect. Correct answer: ${q.options[q.correct]}`}</strong>
            {' '}{q.explanation}
          </div>
        )}
      </div>

      {/* Nav + submit */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button className="btn" onClick={() => setCurrentIdx(i => Math.max(0, i - 1))} disabled={currentIdx === 0}>← Prev</button>
        {!submitted ? (
          currentIdx < total - 1
            ? <button className="btn btn-primary" onClick={() => setCurrentIdx(i => i + 1)}>Next →</button>
            : <button className="btn btn-primary" onClick={() => setSubmitted(true)}
                style={{ background: answered < total ? '#f59e0b' : undefined }}>
                {answered < total ? `Submit (${total - answered} unanswered)` : 'Submit & See Answers'}
              </button>
        ) : (
          <button className="btn btn-primary" onClick={handleReset}>🔄 Reset</button>
        )}
        <button className="btn" onClick={() => setCurrentIdx(i => Math.min(total - 1, i + 1))} disabled={currentIdx === total - 1}>Next →</button>
      </div>
    </div>
  )
}
