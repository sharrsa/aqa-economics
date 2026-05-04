import { useState } from 'react'

const SECTIONS = ['PEEL Structure', 'Chain of Analysis', 'Evaluation', 'Essay Plans', 'Exam Technique']

export default function EssayGuide({ onBack }) {
  const [activeSection, setActiveSection] = useState(SECTIONS[0])

  return (
    <div className="fade-in">
      <button
        onClick={onBack}
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '.875rem', padding: '0 0 16px', display: 'flex', alignItems: 'center', gap: 6 }}
      >
        ← Back to Dashboard
      </button>

      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #7c3aed, #c026d3)',
        borderRadius: 16, padding: '28px 32px', color: 'white', marginBottom: 28,
      }}>
        <div style={{ fontSize: '.75rem', fontWeight: 700, color: '#e879f9', textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 6 }}>Paper 1, 2 & 3</div>
        <h1 style={{ color: 'white', marginBottom: 6 }}>✍️ Essay Writing Guide</h1>
        <p style={{ color: '#e9d5ff' }}>
          Master the 25-mark extended essay — the key to achieving A* in AQA Economics.
        </p>
      </div>

      {/* Section tabs */}
      <div className="tabs">
        {SECTIONS.map(s => (
          <button key={s} className={`tab ${activeSection === s ? 'active' : ''}`} onClick={() => setActiveSection(s)}>
            {s}
          </button>
        ))}
      </div>

      <div className="fade-in" key={activeSection}>
        {activeSection === 'PEEL Structure' && <PEELSection />}
        {activeSection === 'Chain of Analysis' && <ChainSection />}
        {activeSection === 'Evaluation' && <EvaluationSection />}
        {activeSection === 'Essay Plans' && <EssayPlansSection />}
        {activeSection === 'Exam Technique' && <ExamTechniqueSection />}
      </div>
    </div>
  )
}

// ──────────────────────────────────────────────
function PEELSection() {
  return (
    <div>
      <div className="card" style={{ marginBottom: 16 }}>
        <h2 style={{ marginBottom: 4 }}>The PEEL Paragraph Structure</h2>
        <p className="text-sm text-muted" style={{ marginBottom: 24 }}>
          Every analytical paragraph in an economics essay should follow PEEL. For 25-mark questions, aim for 2-3 analytical paragraphs + 2-3 evaluative paragraphs.
        </p>

        {[
          {
            letter: 'P', label: 'Point', color: '#3b82f6', bg: '#eff6ff',
            desc: 'State your argument clearly in one sentence.',
            example: '"One reason a minimum wage may increase unemployment is that it raises labour costs for firms."',
          },
          {
            letter: 'E', label: 'Explain / Evidence', color: '#10b981', bg: '#f0fdf4',
            desc: 'Explain the economic theory or mechanism. Use diagrams if helpful.',
            example: '"In competitive labour markets, the equilibrium wage is set where labour demand equals supply. A minimum wage set above this equilibrium creates excess supply of labour (Qs > Qd), as firms demand less labour at the higher wage. This is shown by the supply and demand diagram where the minimum wage floor leads to a surplus of workers."',
          },
          {
            letter: 'E', label: 'Example', color: '#f59e0b', bg: '#fffbeb',
            desc: 'Apply real-world context or data to support your argument.',
            example: '"For example, the UK\'s National Living Wage rose to £11.44/hour in April 2024. According to the ONS, employment among 18-20 year olds — a group particularly affected — dipped slightly in sectors such as retail and hospitality."',
          },
          {
            letter: 'L', label: 'Link', color: '#8b5cf6', bg: '#f5f3ff',
            desc: 'Link back to the question and state the significance.',
            example: '"Therefore, a significant minimum wage increase may reduce employment opportunities, particularly for low-skilled and young workers, undermining the policy\'s aim to improve living standards."',
          },
        ].map(({ letter, label, color, bg, desc, example }) => (
          <div key={letter + label} className="peel-step">
            <div className="peel-letter" style={{ background: bg, color }}>
              {letter}
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ color, marginBottom: 4 }}>{letter} — {label}</h4>
              <p className="text-sm" style={{ marginBottom: 8 }}>{desc}</p>
              <div style={{
                background: bg, border: `1px solid ${color}33`,
                borderRadius: 8, padding: '10px 14px',
                fontSize: '.825rem', color: 'var(--text)',
                fontStyle: 'italic', lineHeight: 1.7,
              }}>
                <strong style={{ fontStyle: 'normal', color, fontSize: '.7rem', textTransform: 'uppercase' }}>Example: </strong>
                {example}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card" style={{ background: '#f0fdf4', border: '1px solid #86efac' }}>
        <h3 style={{ color: '#15803d', marginBottom: 12 }}>✅ High-Mark Paragraph Checklist</h3>
        {[
          'Uses precise economic terminology (demand, equilibrium, marginal cost, etc.)',
          'Refers to a diagram — even if you cannot draw it, describe the shift/movement',
          'Includes specific real-world data or policy reference',
          'Shows understanding of cause-and-effect (not just description)',
          'Links explicitly back to the essay question',
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8, fontSize: '.875rem' }}>
            <span style={{ color: '#15803d', fontWeight: 700 }}>✓</span>
            <span style={{ color: '#166534' }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ChainSection() {
  return (
    <div>
      <div className="card" style={{ marginBottom: 16 }}>
        <h2 style={{ marginBottom: 4 }}>Building a Chain of Analysis</h2>
        <p className="text-sm text-muted" style={{ marginBottom: 20 }}>
          A chain of analysis is a sequence of "because... therefore... which means..." statements that follow economic logic through multiple steps. AQA rewards depth of analysis.
        </p>

        <h3 style={{ marginBottom: 12 }}>Example Chain: "Evaluate the effect of a rise in interest rates on an economy"</h3>

        <div style={{ position: 'relative', paddingLeft: 32 }}>
          {[
            { step: '1', text: 'The Bank of England raises the base rate from 4% to 5%.' },
            { step: '2', text: 'This increases the cost of borrowing for consumers and businesses.' },
            { step: '3', text: 'Consumers with mortgages face higher monthly repayments → less disposable income → consumption (C) falls.' },
            { step: '4', text: 'Businesses face higher financing costs → investment (I) becomes less profitable at the margin → investment falls.' },
            { step: '5', text: 'As C and I both fall, aggregate demand (AD = C+I+G+X−M) shifts left on the AD-AS diagram.' },
            { step: '6', text: 'With AD falling, real GDP growth slows and the price level rises more slowly — inflationary pressure eases.' },
            { step: '7', text: 'If the economy was in a positive output gap, this moves output back towards Yfe, reducing inflation towards target.' },
          ].map(({ step, text }) => (
            <div key={step} style={{ display: 'flex', gap: 14, marginBottom: 12, alignItems: 'flex-start' }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%',
                background: '#4f46e5', color: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '.75rem', fontWeight: 800, flexShrink: 0,
              }}>{step}</div>
              <p style={{ fontSize: '.875rem', color: 'var(--text)', lineHeight: 1.6, paddingTop: 4 }}>{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: 12 }}>🔗 Linking Words for Analysis</h3>
        <div className="grid-2" style={{ gap: 8 }}>
          {[
            ['Cause → Effect', '"This leads to...", "As a result...", "Consequently..."'],
            ['Explaining mechanism', '"This is because...", "The reason is that...", "Due to..."'],
            ['AD-AS language', '"AD shifts right/left...", "Moving along the SRAS curve...", "Output rises towards Yfe..."'],
            ['Signalling depth', '"Furthermore...", "In addition...", "A second effect is..."'],
          ].map(([cat, words]) => (
            <div key={cat} style={{ background: 'var(--surface-2)', borderRadius: 8, padding: '12px 14px' }}>
              <div style={{ fontSize: '.75rem', fontWeight: 700, color: 'var(--primary)', marginBottom: 4 }}>{cat}</div>
              <div style={{ fontSize: '.825rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>{words}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function EvaluationSection() {
  const evalPoints = [
    {
      title: 'Depends on the size/magnitude',
      desc: 'The effect depends on how large the change is. "A small increase in interest rates may have limited impact on business investment if profit margins are high."',
    },
    {
      title: 'Depends on time horizon (short run vs long run)',
      desc: 'Monetary policy takes 18-24 months to take full effect. In the short run, contracts are fixed so firms cannot immediately adjust. In the long run, consumers and businesses adapt.',
    },
    {
      title: 'Depends on elasticity / responsiveness',
      desc: '"The effect on consumption depends on the interest elasticity of consumer spending — homeowners with variable-rate mortgages are more affected than renters."',
    },
    {
      title: 'Depends on the state of the economy (context)',
      desc: '"The effectiveness of a fiscal stimulus depends on the size of the output gap. If the economy is near full employment, more of the multiplied spending effect will be inflationary rather than boosting real output."',
    },
    {
      title: 'Counter-argument / limitations',
      desc: '"However, not all economists agree. Monetarists argue that the multiplier effect is small in an open economy with high marginal propensity to import, as much of the stimulus leaks abroad."',
    },
    {
      title: 'Empirical evidence',
      desc: '"In practice, empirical evidence is mixed. A 2022 IMF study found that fiscal multipliers are larger when interest rates are at the zero lower bound, suggesting that fiscal policy is most effective as a complement to — rather than substitute for — monetary policy."',
    },
    {
      title: 'Overall judgement (the "Evaluate" conclusion)',
      desc: '"On balance, while higher interest rates are effective at reducing demand-pull inflation, their impact depends critically on the degree to which consumers are indebted and whether expectations are well-anchored. In the UK context of 2022-23, rate rises were necessary but risked overshooting, threatening a recession."',
    },
  ]

  return (
    <div>
      <div className="card" style={{ marginBottom: 16 }}>
        <h2 style={{ marginBottom: 4 }}>Writing Effective Evaluation</h2>
        <p className="text-sm text-muted" style={{ marginBottom: 6 }}>
          Evaluation (AO3) earns you the top marks. For 25-mark essays, roughly half the marks come from evaluating how significant, conditional, or uncertain your analysis is. Never end an essay without a clear overall judgement.
        </p>
        <div style={{
          background: '#fffbeb', border: '1px solid #fcd34d',
          borderRadius: 8, padding: '12px 16px', marginBottom: 20, fontSize: '.875rem', color: '#92400e',
        }}>
          <strong>Key Evaluation Starter Phrases:</strong> "However...", "On the other hand...", "The extent to which... depends on...", "In the short run... but in the long run...", "This assumes... which may not hold if...", "The significance of this effect depends on..."
        </div>
      </div>

      <div style={{ display: 'grid', gap: 12 }}>
        {evalPoints.map((ep, i) => (
          <div key={i} className="card" style={{ borderLeft: '4px solid var(--primary-light)', padding: '14px 18px' }}>
            <h4 style={{ color: 'var(--primary-dark)', marginBottom: 6 }}>
              {i + 1}. {ep.title}
            </h4>
            <p style={{ fontSize: '.85rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
              {ep.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: 16, background: '#fef2f2', border: '1px solid #fca5a5' }}>
        <h3 style={{ color: '#991b1b', marginBottom: 10 }}>❌ Common Evaluation Mistakes</h3>
        {[
          'Simply repeating your analysis with "However" in front of it — that is not evaluation.',
          'Using vague phrases like "it depends" without explaining WHAT it depends on and WHY.',
          'Forgetting to write a concluding overall judgement — examiners look for this explicitly.',
          'Evaluation that contradicts your analysis without acknowledgement — be consistent.',
          'Writing one-sided analysis with evaluation bolted on — integrate evaluation throughout.',
        ].map((m, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8, fontSize: '.85rem' }}>
            <span style={{ color: '#ef4444' }}>✗</span>
            <span style={{ color: '#7f1d1d' }}>{m}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function EssayPlansSection() {
  const [openPlan, setOpenPlan] = useState(null)

  const plans = [
    {
      title: 'Evaluate the view that a national minimum wage leads to unemployment.',
      marks: 25,
      intro: 'Define minimum wage and explain the theoretical basis for employment effects in competitive markets.',
      for: [
        'Labour demand theory: minimum wage above equilibrium creates excess supply (classical argument)',
        'Small business impact: labour costs ↑ → may reduce hiring, cut hours, or automate',
        'Monopsony counter-argument (include to balance): in monopsonistic markets, minimum wage can INCREASE employment',
      ],
      against: [
        'Empirical evidence: Card and Krueger (1994) found no unemployment effect; UK NLW experience shows resilience',
        'Demand-side boost: higher wages → higher consumer spending → AD rises → more jobs',
        'Efficiency wages: higher pay reduces turnover and increases productivity',
      ],
      conclusion: 'On balance: effect depends on market structure (competitive vs monopsony), size of increase, and state of economy. Empirical evidence in the UK suggests limited unemployment effects for moderate increases.',
    },
    {
      title: 'Evaluate the effectiveness of monetary policy in controlling inflation.',
      marks: 25,
      intro: 'Define monetary policy and the Bank of England\'s 2% CPI target. Explain transmission mechanism.',
      for: [
        'Rate rises → higher borrowing costs → C↓ and I↓ → AD shifts left → price pressure eases',
        'Inflation expectations: clear, credible target anchors expectations (prevents wage-price spirals)',
        'Exchange rate channel: higher rates → £ appreciates → imports cheaper → imported inflation falls',
      ],
      against: [
        'Time lags: 18-24 months for full effect — risk of overshooting and causing recession',
        'Only addresses demand-pull inflation; limited effect on cost-push (supply-side) inflation',
        'Zero Lower Bound: when rates near 0%, conventional policy loses traction (need QE)',
        'Global factors (oil, food prices) beyond central bank control',
      ],
      conclusion: 'Monetary policy is most effective when inflation is demand-pull and expectations are unanchored. For cost-push inflation from external shocks (2022 UK), effectiveness is more limited and supply-side policies or fiscal support may be needed.',
    },
    {
      title: 'Assess the costs and benefits of a government budget deficit.',
      marks: 25,
      intro: 'Define budget deficit (G > T). Distinguish cyclical from structural deficits.',
      for: [
        'Keynesian case: during recession, deficit spending boosts AD via multiplier, preventing deeper downturn',
        'Investment rationale: borrowing to fund productive infrastructure → long-run growth',
        'Automatic stabilisers naturally create deficit in recession — cushioning the economy',
      ],
      against: [
        'Crowding out: government borrowing → higher interest rates → reduces private investment',
        'Debt sustainability: rising national debt → higher interest payments → less spending on public services',
        'Intergenerational equity: current deficits pass burden to future taxpayers',
        'Ricardian equivalence: if rational consumers expect future tax rises, they save more now — offsetting the stimulus',
      ],
      conclusion: 'Whether deficits are harmful depends on: the state of the economy (more justified in recession), interest rates and debt dynamics (sustainable if g > r), and composition (investment vs consumption spending).',
    },
  ]

  return (
    <div>
      <div className="card" style={{ marginBottom: 16 }}>
        <h2 style={{ marginBottom: 4 }}>Model Essay Plans</h2>
        <p className="text-sm text-muted">
          Click any essay title to see the full plan. Use these structures as a template — adapt arguments to the specific question wording.
        </p>
      </div>
      {plans.map((plan, i) => (
        <div key={i} className="card" style={{ marginBottom: 12, padding: '16px 20px' }}>
          <button
            onClick={() => setOpenPlan(openPlan === i ? null : i)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              textAlign: 'left', width: '100%', padding: 0,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <span style={{
                background: '#ede9fe', color: '#7c3aed', borderRadius: 99,
                padding: '2px 10px', fontSize: '.75rem', fontWeight: 700, flexShrink: 0, marginTop: 2,
              }}>
                {plan.marks} marks
              </span>
              <h3 style={{ color: 'var(--text)', fontSize: '.95rem', flex: 1 }}>{plan.title}</h3>
              <span style={{ color: 'var(--text-muted)', fontSize: '1.1rem', flexShrink: 0 }}>
                {openPlan === i ? '▲' : '▼'}
              </span>
            </div>
          </button>

          {openPlan === i && (
            <div className="fade-in" style={{ marginTop: 16, borderTop: '1px solid var(--border)', paddingTop: 16 }}>
              <PlanSection label="Introduction" color="#4f46e5" items={[plan.intro]} />
              <PlanSection label="Arguments FOR the proposition" color="#10b981" items={plan.for} />
              <PlanSection label="Arguments AGAINST / Evaluation" color="#ef4444" items={plan.against} />
              <PlanSection label="Overall Judgement" color="#f59e0b" items={[plan.conclusion]} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function PlanSection({ label, color, items }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ fontSize: '.75rem', fontWeight: 800, color, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 8 }}>
        {label}
      </div>
      {items.map((item, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 6, alignItems: 'flex-start' }}>
          <span style={{ color, fontWeight: 700, flexShrink: 0 }}>→</span>
          <span style={{ fontSize: '.875rem', color: 'var(--text)', lineHeight: 1.6 }}>{item}</span>
        </div>
      ))}
    </div>
  )
}

function ExamTechniqueSection() {
  return (
    <div>
      <div className="grid-2" style={{ gap: 16, marginBottom: 16 }}>
        <div className="card">
          <h3 style={{ marginBottom: 12, color: '#15803d' }}>⏱️ Time Management (2h exam)</h3>
          {[
            { q: 'Section A: Multiple choice (15q)', time: '18 mins' },
            { q: 'Section B: Data response Q (25m)', time: '35 mins' },
            { q: 'Section C: Essay question 1 (25m)', time: '33 mins' },
            { q: 'Section C: Essay question 2 (25m)', time: '33 mins' },
            { q: 'Review and check', time: '1 min' },
          ].map(({ q, time }) => (
            <div key={q} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid var(--border)', fontSize: '.85rem' }}>
              <span style={{ color: 'var(--text)' }}>{q}</span>
              <span style={{ color: '#15803d', fontWeight: 700 }}>{time}</span>
            </div>
          ))}
        </div>

        <div className="card">
          <h3 style={{ marginBottom: 12, color: '#dc2626' }}>⚠️ Common Exam Mistakes</h3>
          {[
            'Not reading the question carefully — answer what is asked, not what you know',
            'Describing diagrams instead of using them for analysis',
            'Giving one-sided answers to "Evaluate" questions — you MUST have two sides',
            'Running out of time by writing too much on early questions',
            'Using "this" without a clear referent — be precise',
            'Confusing movements along a curve with shifts of the curve',
          ].map((m, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 8, fontSize: '.8rem' }}>
              <span style={{ color: '#dc2626' }}>✗</span>
              <span style={{ color: 'var(--text-muted)' }}>{m}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: 12 }}>🎯 Mark Scheme Language — What Examiners Look For</h3>
        <div style={{ display: 'grid', gap: 10 }}>
          {[
            { marks: 'Level 4 (21-25 marks)', desc: 'Logical, well-structured argument with clear chains of reasoning. Effective, balanced evaluation. Appropriate real-world application. Clear overall judgement.' },
            { marks: 'Level 3 (16-20 marks)', desc: 'Good analysis with some developed chains of reasoning. Some attempt at evaluation, though may be one-sided or not fully developed.' },
            { marks: 'Level 2 (11-15 marks)', desc: 'Some relevant points but analysis is incomplete or lacks depth. Evaluation is limited or descriptive rather than analytical.' },
            { marks: 'Level 1 (1-10 marks)', desc: 'Basic knowledge demonstrated but limited analysis. Description rather than explanation. Little or no evaluation.' },
          ].map(({ marks, desc }) => (
            <div key={marks} style={{ background: 'var(--surface-2)', borderRadius: 8, padding: '10px 14px' }}>
              <div style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '.85rem', marginBottom: 4 }}>{marks}</div>
              <div style={{ fontSize: '.825rem', color: 'var(--text-muted)' }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
