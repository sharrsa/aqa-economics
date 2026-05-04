// ============================================================
// AQA A-Level Economics — Predicted Paper 2026
// Based on AQA specification, recent examiner reports, and
// topic rotation patterns from 2019-2025 papers.
// ============================================================

export const predictedPaper2026 = {
  paper1: {
    title: 'Paper 1: Markets and Market Failure',
    subtitle: 'AQA A-Level Economics (7136/1)',
    time: '2 hours',
    marks: 80,
    instructions: [
      'Answer ALL questions in Section A.',
      'Answer ONE question from Section B.',
      'Write your answers in the spaces provided.',
      'Show all workings for calculation questions.',
    ],
    prediction_note: 'Based on AQA topic rotation and 2025 examiner reports. Housing market and labour market interventions are overdue. Carbon pricing/environmental economics has appeared recently but climate policy evaluation at A* level remains likely.',
    sectionA: {
      title: 'Section A — Context 1: The UK Housing Market',
      marks: 40,
      context: `Extract A: Housing Affordability Crisis

The UK faces an acute housing affordability crisis. Average house prices in England reached £290,000 in 2024 — nearly 9 times average annual earnings, compared to 4 times in 1999. In London, the ratio exceeds 12. Approximately 1.2 million households are on social housing waiting lists.

Key supply-side constraints include strict planning regulations (the "green belt"), high construction costs, and shortage of skilled tradespeople. On the demand side, population growth, low interest rates (2010-2022), Help to Buy schemes, and buy-to-let investment have all sustained demand.

The government has set a target of building 1.5 million new homes by 2029. Proposed interventions include reforming planning laws, levying new taxes on second homes, expanding social housing, and a controversial leasehold reform.

Extract B: Rent Controls — Evidence from International Markets

Several cities have implemented rent controls. Evidence is mixed:
- Berlin introduced rent caps in 2020; supply of listed rental properties fell by 56% within a year. The cap was later struck down by courts.
- Stockholm has had regulated rents since the 1940s; waiting lists for rental accommodation exceed 10 years in some areas.
- San Francisco's rent control is associated with a 15% reduction in rental housing supply (Diamond et al., 2019).
- Proponents argue controls protect existing tenants from unaffordable rent rises and prevent displacement.

Figure 1: UK House Price to Earnings Ratio, 1983-2024 [shows rising trend from ~3.5 to ~8.8 with peak of ~9.2 in 2022]
Figure 2: Supply of new-build homes, England, 2010-2024 [shows 125,000 in 2013, peak of 213,000 in 2019, fall during COVID, recovery to 190,000 in 2023 — well below 300,000 annual target]`,
      questions: [
        {
          id: 'p1-a-1',
          question: 'With reference to Extract A, explain two demand-side factors that have contributed to rising house prices in the UK. [4 marks]',
          marks: 4,
          markScheme: `Award 2 marks per factor (1 for identification + 1 for development with reference to extract):

Factor 1: Low interest rates (2010-2022) reduced mortgage costs, increasing affordability and demand for owner-occupation; also encouraged buy-to-let investment as property became a relatively attractive asset class. [2]

Factor 2: Help to Buy schemes directly subsidised demand by reducing deposit requirements, enabling more first-time buyers to enter the market and sustaining upward pressure on prices. [2]

Accept also: population growth; household formation; buy-to-let investment (if separate from interest rates); speculative demand; foreign investment in UK property.

Do NOT accept supply-side factors for this question.`,
          tip: 'Use "Extract A states..." to show you\'re referencing the source. Always develop your point — don\'t just list factors.',
        },
        {
          id: 'p1-a-2',
          question: 'Using a supply and demand diagram, analyse the effect of strict planning regulations on the housing market. [6 marks]',
          marks: 6,
          markScheme: `Diagram (up to 3 marks):
- Correct D and S axes with price/rent on vertical, quantity of housing on horizontal [1]
- Supply curve drawn steep/inelastic to reflect planning restrictions reducing supply capacity [1]
- Inward shift of supply curve (S1 to S2) OR explanation that PES is low, keeping equilibrium price high [1]

Analysis (up to 3 marks):
- Planning restrictions reduce the number of homes that can be built, restricting supply [1]
- Inelastic supply means demand increases translate mostly into price rises rather than quantity increases [1]
- This creates allocative inefficiency — at the high equilibrium price, households who would value housing are priced out [1]

Top answer will link diagram explicitly to affordability data in Extract A.`,
          tip: 'Draw a clear diagram with all labels. The diagram earns marks separately from your written analysis.',
        },
        {
          id: 'p1-a-3',
          question: 'With reference to Extract B, explain why rent controls may reduce the long-run supply of rental housing. [4 marks]',
          marks: 4,
          markScheme: `Award up to 4 marks:

- Rent controls set a maximum price below the market equilibrium rent [1]
- This reduces the return for landlords, making letting less profitable relative to alternatives (selling, conversion to other use) [1]
- In the long run, landlords exit the market (Extract B: Berlin supply fell 56%; San Francisco 15% reduction) [1]
- New investment in rental properties also falls as expected returns are below the required rate — worsening supply over time [1]

Credit reference to Extract B evidence throughout. Maximum 3 without use of data.`,
          tip: 'Quote figures from the extract to support your argument — examiners reward this explicitly.',
        },
        {
          id: 'p1-a-4',
          question: 'Assess whether increasing the supply of social housing is the most effective policy to improve housing affordability in the UK. [10 marks]',
          marks: 10,
          markScheme: `Level 4 (8-10): Balanced evaluation with well-developed analysis on both sides; reaches a justified conclusion; uses extract evidence; considers counter-arguments and qualifies the judgment.

Level 3 (5-7): Some analysis of both sides but evaluation may be one-sided or conclusion weakly justified.

Level 2 (3-4): Mostly descriptive; limited analysis.

Level 1 (1-2): Basic points with little analysis.

Arguments FOR social housing as most effective:
- Directly targets those who cannot access private market — addresses distributional failure
- Removes households from waiting lists (1.2m), reducing demand pressure in private market
- Government can locate housing in areas of greatest need
- Not subject to market failure — provided regardless of profit motive
- Long-run reduction in housing benefit bill

Arguments AGAINST (other policies may be more effective):
- Cost: large-scale social housing requires substantial government funding; fiscal constraints bind
- Speed: planning and construction takes years (Figure 2 shows gap between target and reality)
- Doesn't address underlying supply shortage — private market reform may be more scalable
- Planning reform: more powerful as it unlocks private investment (self-funding)
- Rent-to-buy and shared ownership address affordability without full public expenditure
- Risk of creating spatial concentration of deprivation (sink estates)

Conclusion: Social housing is effective for the most vulnerable but insufficient alone — planning reform likely has larger scale impact; combination policy optimal. Quality of conclusion = key to Level 4.`,
          tip: 'For 10-mark questions, aim for ≥2 developed arguments on each side, then a reasoned conclusion. Don\'t just list — analyse with chains of reasoning.',
        },
        {
          id: 'p1-a-5',
          question: 'Evaluate whether a tax on second homes is an effective way to reduce house prices and improve housing affordability. [16 marks]',
          marks: 16,
          markScheme: `Level 4 (13-16): Sophisticated evaluation; considers short-run vs long-run; considers supply and demand effects; considers alternative policies and opportunity costs; justified conclusion with qualifications.

Level 3 (9-12): Good two-sided analysis; some evaluation but conclusion may lack nuance.

Level 2 (5-8): Some relevant analysis; limited evaluation.

Level 1 (1-4): Basic, largely descriptive.

Arguments FOR (analysis):
- Tax raises cost of holding second homes → reduces demand from investors/second-home owners → leftward demand shift → lower equilibrium price (or slower price growth)
- Properties currently used as second homes/holiday lets re-enter market as primary residences → increases effective housing supply
- Revenue raised can fund social housing or first-time buyer support
- Addresses criticism that buy-to-let creates asset inflation at expense of owner-occupiers
- Evidence: Wales 2023 council tax premium on second homes; some recirculation of properties

Arguments AGAINST / Limitations (evaluation):
- Inelastic supply: even if demand falls, prices fall little without supply-side response (diagram/analysis)
- Tax avoidance: owners may reclassify, use limited companies, or sell to other investors (not owner-occupiers)
- Rural/coastal areas disproportionately affected — second homes support local tourism economies
- Time to impact: significant property market changes take years
- Doesn't address fundamental undersupply — treats symptom not cause
- May discourage property investment/maintenance long-run
- Regressive if mainly affects middle-income buyers rather than oligarch/investor class

Contextual evaluation:
- More effective combined with planning reform and Help to Buy reform
- Impact depends heavily on elasticity of second-home demand and how realistic alternatives are
- Location-specific: may work in London but not in rural Wales where second homes = key income

Conclusion: Likely to have modest positive effect but should not be the primary policy — supply-side reform is more fundamental. Tax is politically popular but economically limited in isolation.`,
          tip: 'The 16-mark essay is where A* grades are won. Write in paragraphs, use clear chains of reasoning (→), qualify claims with "however" and "it depends on", and write a genuine conclusion that weighs the evidence.',
        },
      ],
    },
    sectionB: {
      title: 'Section B — Essay Questions',
      marks: 40,
      instruction: 'Answer ONE of the following two questions. Each question is worth 40 marks (25 + 15).',
      questions: [
        {
          id: 'p1-b-1',
          question: 'Question 2',
          parts: [
            {
              label: '(a)',
              question: 'Explain, with the aid of a diagram, why markets fail to provide public goods and how the government can correct this failure. [25 marks]',
              marks: 25,
              markScheme: `Level 5 (21-25): Accurate, well-developed analysis; correct diagram with full explanation; range of examples; nuanced evaluation of government response.

Key content:
- Public good characteristics: non-rival, non-excludable (with examples: national defence, flood barriers, street lighting) [4]
- Free rider problem: rational individuals consume without paying → private firms cannot charge → market fails to provide [4]
- Diagram: MSB > MPB (or diagram showing under-provision at market equilibrium) [3]
- Government provision funded by taxation overcomes free rider problem [3]
- Challenges: determining optimal quantity (no price signal); cost-benefit analysis limitations; government failure risk [3]
- Examples: lighthouse (historically private provision debate); BBC iPlayer (excludable = quasi-public); COVID vaccines (positive externality + merit good overlaps) [4]
- Evaluation of whether government provision is always optimal vs. quasi-market mechanisms [4]`,
              tip: 'Distinguish carefully between public goods (economic definition) and publicly provided goods. Common exam error.',
            },
            {
              label: '(b)',
              question: 'Evaluate the view that government intervention to correct market failure always makes economic outcomes worse. [15 marks]',
              marks: 15,
              markScheme: `Level 4 (12-15): Sophisticated evaluation; balanced; uses specific examples of both government failure and successful intervention; qualified conclusion.

Arguments that intervention can worsen outcomes (government failure):
- Information failure: government lacks price signal information to calculate correct Pigouvian tax
- Regulatory capture (energy, financial sector)
- Unintended consequences: rent controls → supply fall; agricultural subsidies → environmental damage
- Political incentives misalign with economic optimum (short electoral cycles)
- High administration costs may exceed deadweight loss corrected

Arguments that intervention improves outcomes:
- Pigouvian taxes on carbon demonstrably reduce emissions (UK carbon floor price)
- Smoking regulations + NHS evidence suggest merit good policies work
- Competition policy (CMA) has prevented anti-competitive mergers
- Financial regulation post-2008 reduced systemic risk
- Market failures (externalities, information failures) are demonstrably large and uncorrected by markets alone

Evaluation: the outcome depends on the type of intervention, quality of information, administrative capacity, and whether incentives are correctly aligned. Neither blanket approval nor blanket rejection is appropriate — case-by-case analysis needed.`,
              tip: 'Don\'t just say "government failure exists" — give specific named examples with analysis of why the intervention failed.',
            },
          ],
        },
        {
          id: 'p1-b-2',
          question: 'Question 3',
          parts: [
            {
              label: '(a)',
              question: 'Using diagrams, explain how a monopolist sets price and output, and why this leads to allocative inefficiency. [25 marks]',
              marks: 25,
              markScheme: `Key content:
- Monopolist faces downward-sloping demand curve (AR = D) → MR below AR [3]
- Profit maximisation: MR = MC → output Qm, price Pm [4]
- Diagram: correctly labelled with MC, MR, AR, Qm, Pm, competitive output Qc, Pc [4]
- Allocative inefficiency: Pm > MC → society values additional units more than cost to produce → welfare loss [4]
- Deadweight welfare loss triangle identified and explained [3]
- Supernormal profits: area between AR and AC at Qm [3]
- Productive inefficiency: monopolist may not minimise AC (X-inefficiency) [2]
- Comparison with perfect competition (Qc, Pc) [2]`,
              tip: 'The deadweight welfare loss triangle is essential — make sure you can draw and explain it.',
            },
            {
              label: '(b)',
              question: 'Evaluate whether the UK government should break up large tech monopolies such as Google and Meta. [15 marks]',
              marks: 15,
              markScheme: `Arguments for break-up:
- Network effects create self-reinforcing monopolies; data asymmetry creates permanent barriers to entry
- Evidence of harm: CMA found Google charges supra-competitive ad prices; Meta acquisitions (Instagram, WhatsApp) removed potential rivals
- Privacy and democracy concerns beyond price/output analysis
- Standard competition policy tools (fines) insufficient against trillion-dollar firms
- Dynamic analysis: dominance may stifle innovation of potential competitors

Arguments against break-up:
- Economies of scale: Google's infrastructure delivers search quality that smaller rivals cannot match
- Dynamic efficiency: large profits fund R&D that benefits consumers (AI development)
- Contestability: markets may be more contestable than they appear (TikTok challenging Meta)
- Break-up may destroy value without guaranteeing competition
- Regulatory alternatives (interoperability requirements, data portability) less disruptive
- International coordination problem: US break-up may just shift dominance to Chinese firms

Conclusion: structural remedies (break-up) may be warranted in specific cases (ad markets) but behavioural remedies and ex ante regulation (EU Digital Markets Act approach) may be more appropriate generally.`,
              tip: 'Show awareness of the specific UK/EU regulatory context — CMA, Digital Markets Unit, EU DMA. Real-world knowledge is rewarded.',
            },
          ],
        },
      ],
    },
  },

  paper2: {
    title: 'Paper 2: National and International Economy',
    subtitle: 'AQA A-Level Economics (7136/2)',
    time: '2 hours',
    marks: 80,
    prediction_note: 'UK interest rates post-2022 inflation cycle, fiscal policy constraints, and post-Brexit trade patterns are all highly likely. Global AI productivity debate and climate transition costs are A* differentiators.',
    sectionA: {
      title: 'Section A — Context 2: UK Fiscal Policy and Economic Outlook 2025-2026',
      marks: 40,
      context: `Extract C: The UK Fiscal Position

UK public sector net debt exceeded £2.7 trillion (98% of GDP) by end-2024, its highest ratio since the 1960s. The Chancellor of the Exchequer faces a difficult balancing act: the OBR projects that meeting existing spending commitments while keeping debt on a declining path requires either £20bn in spending cuts, tax rises, or a combination.

Critics of austerity point to the 2010-2019 period: public investment was cut, productivity growth stalled, and infrastructure deteriorated — potentially reducing long-run growth. Advocates argue that high debt levels increase vulnerability to market confidence crises (as seen in September 2022 when Gilt yields spiked following the mini-budget).

The UK runs a persistent current account deficit (averaging 3-4% of GDP), partly reflecting weak goods trade following Brexit and strong demand for imports.

Extract D: Bank of England Rate Cycle 2021-2025

The Bank of England raised the base rate from 0.1% in December 2021 to 5.25% by August 2023 — the fastest tightening cycle since the 1980s — in response to CPI inflation peaking at 11.1% in October 2022. By mid-2025, the rate had been cut to 4.25% as inflation returned toward target.

Higher rates successfully slowed consumer spending and house price growth but raised government debt interest costs by approximately £100bn per year (a significant fiscal drag) and squeezed 2 million mortgage holders coming off fixed deals.

Key data: UK GDP growth 0.9% (2024); unemployment 4.4%; CPI 2.6% (April 2025); current account deficit -3.2% of GDP.`,
      questions: [
        {
          id: 'p2-a-1',
          question: 'Define "public sector net debt" and explain one reason why a high debt-to-GDP ratio may be a concern for policymakers. [4 marks]',
          marks: 4,
          markScheme: `Definition (2 marks):
Public sector net debt = the accumulated stock of all past government borrowing (deficits) minus financial assets held by government [2]. Accept: total government liabilities minus liquid assets; the stock of outstanding government borrowing. Do NOT accept: the annual budget deficit.

Concern (2 marks):
High debt-to-GDP → higher debt interest payments crowd out public spending on services / requires higher future taxes [1] → at extreme levels, debt sustainability concerns cause bond market sell-off / Gilt yield spike (as September 2022 mini-budget) → rising borrowing costs further worsen fiscal position [1].
Award full 2 for well-developed point; 1 for basic point without development.`,
          tip: 'Distinguish clearly: deficit = annual flow; debt = accumulated stock. This mistake costs marks every year.',
        },
        {
          id: 'p2-a-2',
          question: 'Using an AD-AS diagram, analyse the impact of the Bank of England raising interest rates from 0.1% to 5.25% on the UK economy. [6 marks]',
          marks: 6,
          markScheme: `Diagram (3 marks):
- Price level on vertical, Real GDP on horizontal [1]
- Downward-sloping AD curve; upward-sloping SRAS; vertical LRAS [1]
- AD shifts leftward (AD1 to AD2) with lower equilibrium price level and lower real GDP [1]

Analysis (3 marks):
- Higher interest rates → higher mortgage/loan costs → ↓ consumption (C) and investment (I) → ↓ AD [1]
- Higher UK rates → currency appreciation → exports more expensive, imports cheaper → ↓ (X-M) → further ↓ AD [1]
- New equilibrium: lower price level (disinflation/slower inflation) but lower output (risk of recession/lower growth) [1]
Link to Extract D data for full credit.`,
          tip: 'Always label your axes and curves. Show AD shifting, not SRAS — higher interest rates are a demand-side effect.',
        },
        {
          id: 'p2-a-3',
          question: 'Explain how higher government debt interest costs can act as a fiscal drag on the economy. [4 marks]',
          marks: 4,
          markScheme: `- Higher debt → higher annual interest payments to bondholders [1]
- Interest payments are non-discretionary — they must be paid regardless of economic conditions, reducing the money available for public services or tax cuts [1]
- This either forces spending cuts (reducing G in AD), tax rises (reducing C and I), or further borrowing (increasing future debt burden) [1]
- Extract D: £100bn/year increase in debt interest costs represents a significant structural fiscal constraint, limiting fiscal space for investment or stimulus [1]`,
          tip: 'Use the exact figure from the extract (£100bn) to support your argument.',
        },
        {
          id: 'p2-a-4',
          question: 'Assess whether the Bank of England was right to raise interest rates as rapidly as it did during 2021-2023. [10 marks]',
          marks: 10,
          markScheme: `Arguments supporting rapid rate rises:
- Inflation reached 11.1% — far above 2% target; failure to act risked de-anchoring inflation expectations (wage-price spiral)
- Labour market was tight → real risk of embedded inflation if wages rose rapidly
- Central bank credibility: hesitation would signal weak commitment to mandate, increasing long-run costs of bringing inflation down
- Inflation is a regressive tax — harms lower-income households most; rapid action minimised duration of high inflation

Arguments against / limitations:
- Inflation was largely supply-side (Ukraine war, energy, supply chains) — rate rises cannot increase gas supply or repair supply chains; they only reduce demand
- Rate rises imposed large costs on mortgage holders (2m coming off fixed rates), first-time buyers, and businesses — distributional concerns
- Fiscal drag: higher rates raise government debt costs, reducing fiscal space
- Lagged effects: rates take 18-24 months to work through; over-tightening risk (recession)
- Should have begun tightening earlier in 2021 — the rapid catch-up created sharper shocks
- Global coordination: Fed tightening was also affecting UK via exchange rates

Conclusion: broadly right to raise rates given inflation breach of mandate, but arguably should have started earlier (avoiding the crash rate rise) and could have paused sooner once supply-side factors dominated. The outcome (inflation returning to target without recession) suggests a broadly successful if imperfect response.`,
          tip: 'The best answers show awareness that supply-side inflation has different policy implications than demand-pull inflation.',
        },
        {
          id: 'p2-a-5',
          question: 'Evaluate whether the UK government should prioritise reducing national debt over increasing public investment to boost long-run growth. [16 marks]',
          marks: 16,
          markScheme: `Level 4 (13-16): Sophisticated evaluation; considers short-run vs long-run trade-offs; quality of investment vs debt level matters; considers multiplier, crowding out, and credibility; qualified conclusion.

Arguments FOR debt reduction (austerity):
- High debt/GDP (98%) increases vulnerability to bond market crises (mini-budget 2022 precedent)
- Lower debt → lower interest payments → fiscal space for future investment/tax cuts
- Ricardian equivalence: consumers may save more today if they expect future taxes to repay debt → fiscal multiplier reduced
- International investor confidence — credit rating concerns (UK downgraded 2013)
- Future generations bear debt burden — intergenerational equity argument

Arguments AGAINST (invest to grow):
- Keynesian: public investment has positive multiplier effect → GDP growth → debt/GDP ratio falls even if debt rises
- Investment in infrastructure/skills raises productive potential (LRAS shift) → more future tax revenue
- Opportunity cost of austerity: 2010-2019 experience shows infrastructure deterioration, productivity stagnation
- Interest rates historically low relative to growth rates (r < g) → debt sustainability maintained even with borrowing
- Infrastructure deficit: 2024 OBR estimates UK infrastructure investment gap of £100bn+ → failing to invest has long-run costs
- "Golden rule" distinction: borrowing to invest (capital expenditure) vs. borrowing to fund current spending is fundamentally different

Evaluation:
- Quality matters: productive public investment (e.g. transport, broadband, education) likely to yield positive social returns; wasteful spending does not
- Current conditions: with debt interest costs already high and fiscal credibility recently tested, consolidation has more force now than in 2010-2019 low-rate environment
- Compromise: current spending consolidation + protected capital investment budget is more defensible than blanket austerity

Conclusion: false dichotomy — targeted investment in high-return projects while consolidating current spending is the optimal approach. Blanket debt reduction sacrifices growth; blanket borrowing risks credibility.`,
          tip: 'Mention the "r < g" condition (interest rate vs growth rate) and the distinction between capital and current expenditure — these are A* differentiators.',
        },
      ],
    },
    sectionB: {
      title: 'Section B — Essay Questions',
      marks: 40,
      instruction: 'Answer ONE of the following two questions.',
      questions: [
        {
          id: 'p2-b-1',
          question: 'Question 2',
          parts: [
            {
              label: '(a)',
              question: 'Explain the causes of demand-pull and cost-push inflation, and analyse how each can be addressed by macroeconomic policy. [25 marks]',
              marks: 25,
              markScheme: `Demand-pull causes: excess AD (consumer spending boom, fiscal stimulus, credit expansion, asset price wealth effects) → AD > LRAS → price level rises [5]
Cost-push causes: supply shocks (oil price rise, wage push, import price inflation via depreciation) → SRAS shifts left → price level rises + output falls [5]
Policy for demand-pull: monetary tightening (raise interest rates); fiscal consolidation (reduce G, raise T) → reduces AD → price level stabilises [5]
Policy for cost-push: no clean solution — demand reduction lowers inflation but worsens output gap; supply-side policies address structural causes; energy price subsidies in short run; exchange rate policy [5]
Diagrams for both types (2 × well-labelled AD-AS diagrams) [5]`,
              tip: 'The distinction between demand-pull and cost-push policy responses is the key analytical challenge — examiners are looking for students who recognise the trade-offs in addressing cost-push.',
            },
            {
              label: '(b)',
              question: 'Evaluate whether an independent central bank targeting 2% inflation is the best institutional arrangement for achieving macroeconomic stability in the UK. [15 marks]',
              marks: 15,
              markScheme: `For independent CB targeting:
- Time consistency: removes political bias toward short-term stimulus; credibility anchors expectations
- Evidence: UK inflation was broadly stable 1997-2021 under Bank independence
- Transparency (inflation report, MPC minutes) → accountability without political interference
- Separation of monetary and fiscal policy prevents monetisation of debt

Against / limitations:
- Single mandate: 2% target may conflict with employment, growth, exchange rate stability
- Knowledge problem: forecasting errors (Bank failed to predict 2022 inflation surge)
- ZLB (zero lower bound): conventional rate policy ineffective in deep recession → QE introduces different risks
- Democratic deficit: unelected MPC makes distributional decisions (QE raised asset prices, benefiting wealthy)
- Coordination: monetary and fiscal policy must work together; full independence may hinder coordination
- Alternative: dual mandate (Fed model) targeting both inflation and employment; nominal GDP targeting

Conclusion: broadly the best available arrangement for a large economy, but the 2022 inflation episode exposed forecasting limitations; mandate could be broadened to include output stability; democratic accountability mechanisms could be strengthened.`,
              tip: 'Mention the "democratic deficit" criticism of central bank independence — this shows sophisticated political economy awareness.',
            },
          ],
        },
        {
          id: 'p2-b-2',
          question: 'Question 3',
          parts: [
            {
              label: '(a)',
              question: 'Explain the theory of comparative advantage and analyse how it provides a rationale for free trade. [25 marks]',
              marks: 25,
              markScheme: `Comparative advantage theory: even if one country is absolutely better at producing all goods, trade is mutually beneficial if each country specialises where its opportunity cost is lowest [5]
Numerical example with two countries, two goods [4]
Gains from specialisation: world output rises; countries can consume beyond their PPF [4]
Ricardo → Heckscher-Ohlin extension: countries export goods that use their abundant factor intensively [3]
Free trade rationale: lower prices for consumers, greater choice, economies of scale, technology transfer, competition discipline [5]
Limitations/qualifications: assumptions (constant returns, perfect mobility, no externalities) [4]`,
              tip: 'Always use a numerical example for comparative advantage — it demonstrates understanding and earns marks.',
            },
            {
              label: '(b)',
              question: 'Evaluate whether Brexit has been economically beneficial or harmful for the UK economy. [15 marks]',
              marks: 15,
              markScheme: `Arguments for harm:
- Trade friction: UK goods exports to EU fell 10-15% in volume after 2021; NTBs (non-tariff barriers) increased compliance costs
- Services: UK lost passporting rights; some financial services activity relocated to Dublin, Amsterdam, Paris
- Labour shortage: loss of EU free movement → acute shortages in hospitality, healthcare, construction; contributed to wage inflation
- Investment: FDI into UK manufacturing fell as supply chain certainty reduced
- GDP cost: OBR estimates 4% long-run GDP reduction vs remaining in single market; other estimates 2-8%

Arguments for benefit / nuance:
- Independent trade policy: UK-Australia, UK-CPTPP deals concluded (though combined value modest)
- Regulatory flexibility: potential for divergence from EU regulations (financial services, data, AI)
- Vaccine rollout: UK faster than EU in early 2021 (though debate over whether EU membership would have actually hindered this)
- Sovereignty argument: economic efficiency is not the only policy objective
- Long-run: effects not fully realised; regulatory divergence gains may emerge over time

Evaluation:
- Clear short-run trade costs (measurable); long-run benefits (regulatory flexibility, new trade deals) speculative and smaller in scale
- Independent academic consensus: net economic cost; magnitude debated
- Distributional: regions relying on EU manufacturing supply chains (Midlands, North East) hit harder than London financial services (which adapted)

Conclusion: economic evidence strongly suggests net harm in the short-to-medium term, primarily through trade friction and labour supply effects. Long-run balance depends on whether regulatory and trade policy freedoms are used effectively — as yet unproven.`,
              tip: 'Use specific data (10-15% fall in goods exports, OBR 4% GDP estimate) to back your argument. Avoid vague generalisations — this is an A* differentiator.',
            },
          ],
        },
      ],
    },
  },

  paper3: {
    title: 'Paper 3: Economic Principles and Issues',
    subtitle: 'AQA A-Level Economics (7136/3)',
    time: '2 hours',
    marks: 80,
    prediction_note: 'Paper 3 is synoptic — expect micro AND macro in the same extract. Labour market economics (monopsony, min wage, inequality) and financial markets are the most underdue major topics. AI/automation as a macro supply-side issue is a strong prediction.',
    sectionA: {
      title: 'Section A — Multiple Choice Questions',
      marks: 30,
      instruction: 'Answer ALL 30 questions. Each question is worth 1 mark. No penalty for incorrect answers.',
      note: 'The 30 Section A MCQs will draw on all areas of the specification synoptically. Use the Random MCQ Practice tab to drill these — focus on Hard difficulty questions from all topics.',
    },
    sectionB: {
      title: 'Section B — Data Response (Synoptic)',
      marks: 50,
      context: `Extract E: Artificial Intelligence and the Labour Market

The rapid development of Artificial Intelligence is transforming labour markets globally. McKinsey (2024) estimates that 30% of current work activities are technically automatable using existing AI. Unlike previous waves of automation (which primarily displaced routine manual work), AI increasingly affects knowledge workers: legal research, accounting, coding, radiological diagnosis, and financial analysis.

Optimists point to historical precedent: the Industrial Revolution and the computer revolution both generated fears of mass unemployment but ultimately created more jobs than they destroyed. The "productivity dividend" from AI could raise living standards significantly — Goldman Sachs estimates AI could boost global GDP by 7% over 10 years.

Pessimists argue this wave is different in speed and scope, and that transition costs (retraining, regional concentration of job losses) will be severe. The OECD warns that in OECD countries, 27% of workers are in jobs at high risk of automation.

UK-specific context: The UK has a services-heavy economy (80% of GDP) with significant exposure in financial services, professional services, and creative industries — sectors at the frontier of AI adoption.

Extract F: Monopsony in Labour Markets

A recent CMA (Competition and Markets Authority) investigation found evidence of monopsony power in UK labour markets, particularly in healthcare (NHS as dominant employer of nurses and doctors), social care, and some regional labour markets.

Monopsony occurs when an employer has market power over its workers — facing an upward-sloping labour supply curve rather than a perfectly competitive horizontal one. This allows the firm to pay wages below the competitive level and employ fewer workers.

Research by Manning (2021) found that wage-setting in UK labour markets is characterised by significant monopsony power — firms face far fewer competing bids for workers than competitive theory assumes, and workers have less bargaining power than textbook models suggest.`,
      questions: [
        {
          id: 'p3-b-1',
          question: 'With reference to Extract E, explain two microeconomic reasons why AI adoption may cause market failure in labour markets. [8 marks]',
          marks: 8,
          markScheme: `Award 4 marks per reason (2 for identification/explanation + 2 for development/extract link):

Reason 1 — Negative externality in labour markets:
Workers displaced by AI face costs (retraining, unemployment, mental health) not borne by the firms automating [2]. This is a negative externality — the social cost of automation exceeds private cost, leading to over-adoption from society's perspective. Individual firms rationally automate even when aggregate unemployment costs are high [2].

Reason 2 — Information failure / Skills mismatch:
Workers cannot perfectly anticipate which skills will be made redundant by AI — information asymmetry means investment in human capital may be misallocated [2]. This is a form of information failure; the market under-invests in retraining because neither workers nor firms bear the full cost of skill obsolescence [2].

Accept also: monopsony power (link to Extract F); public good nature of retraining infrastructure; inequality externalities.`,
          tip: 'The question says "microeconomic reasons" — focus on market failure concepts (externalities, information failure, public goods), not just macroeconomic effects.',
        },
        {
          id: 'p3-b-2',
          question: 'Using a labour market diagram, explain how monopsony (Extract F) leads to wages below the competitive level and employment below the competitive level. [8 marks]',
          marks: 8,
          markScheme: `Diagram (4 marks):
- Axes: wage on vertical, quantity of labour on horizontal [1]
- Upward-sloping labour supply (S = AC of labour) [1]
- Marginal Factor Cost (MFC) curve above and steeper than S [1]
- Demand for labour (MRP) curve; monopsony equilibrium at Lm, Wm vs competitive Le, We [1]

Explanation (4 marks):
- Monopsonist faces upward-sloping supply: to hire more, must raise wages for all workers [1]
- MFC > wage (hiring one more worker raises wage for all existing workers) [1]
- Profit max: employ where MFC = MRP → quantity Lm < Le [1]
- Read wage from supply curve at Lm → Wm < We (below competitive wage) [1]`,
          tip: 'This diagram is different from a product market monopoly — make sure you draw MFC (Marginal Factor Cost), not MR. They\'re analogous but in the labour market.',
        },
        {
          id: 'p3-b-3',
          question: 'Assess the case for a higher National Minimum Wage (NMW) as a policy response to monopsony power in UK labour markets. [12 marks]',
          marks: 12,
          markScheme: `Level 4 (10-12): Accurate analysis of minimum wage in monopsony context; genuine evaluation of limitations; qualified conclusion.

Arguments FOR:
- In a monopsony, minimum wage set between Wm and We can INCREASE both wages AND employment (unlike competitive market effect) — key A* insight
- Diagram: minimum wage at W* creates horizontal supply up to the kink; MFC becomes horizontal at W* up to quantity L*; employment rises from Lm toward competitive level
- Reduces exploitation of workers with limited job options (NHS nurses, care workers)
- Reduces inequality; reduces in-work poverty; reduces government benefit expenditure
- Evidence: empirical research (Card & Krueger 1994; UK post-2016 NLW studies) found small negative employment effects, consistent with monopsony power

Limitations:
- Difficult to calibrate correct level — set too high → unemployment even in monopsony
- Monopsony power varies by region and sector — national NMW is blunt instrument
- Does not address non-wage exploitation (zero-hours contracts, gig economy)
- May be inflationary if wages are already near full employment in some sectors
- Evidence on employment effects is contested (Neumark & Wascher disagree with Card & Krueger)

Conclusion: stronger case for NMW in monopsony context than competitive labour market theory suggests. Complementary policies (labour mobility, reducing barriers to job switching, strengthening unions) may address root cause more effectively.`,
          tip: 'The key insight is that minimum wages can INCREASE employment under monopsony — this is the A* point that distinguishes from a standard min wage answer.',
        },
        {
          id: 'p3-b-4',
          question: 'Evaluate the view that AI-driven productivity gains will deliver sufficient economic benefits to justify the costs of labour market disruption. [22 marks]',
          marks: 22,
          markScheme: `Level 5 (19-22): Sophisticated, balanced synoptic essay; uses micro AND macro reasoning; uses both extracts; considers distributional and dynamic efficiency; qualified conclusion.

Arguments FOR (benefits outweigh costs):
Macro:
- GDP boost (Goldman Sachs: 7% global GDP over 10 years) → higher tax revenues → can fund retraining and welfare
- Productivity growth addresses UK's chronic productivity gap; higher real incomes in long run
- Historical precedent (Industrial Revolution, computers): transition pain but long-run net job creation
- AI lowers costs → lower prices → consumer surplus; non-inflationary growth

Micro:
- Dynamic efficiency: innovation creates new products/industries (cloud computing, social media) that didn't exist pre-technology revolution
- Healthcare AI (diagnostic radiology) can deliver care at lower cost, extending NHS capacity
- Tasks replaced: often dangerous, repetitive, or undignifying work — human labour freed for higher-value roles

Arguments AGAINST / Costs:
Macro:
- Transition costs: regional concentration of job losses (manufacturing-heavy areas); hysteresis if prolonged structural unemployment → permanent NAIRU rise
- Inequality: AI mainly displaces middle-skill workers; owners of AI capital capture most gains → Gini coefficient rises
- Speed: faster than previous waves; institutions (education, welfare) may not adapt quickly enough

Micro:
- Extract E: 27% of OECD workers at high risk → scale is larger than previous disruptions
- UK services-heavy economy has high exposure at frontier of adoption (financial services, professional services)
- Information failure in labour markets → workers cannot anticipate which skills will be redundant → under-investment in retraining
- Monopsony (Extract F): firms with labour market power may use AI not to raise productivity but to suppress wages further

Evaluation:
- Distribution of gains is crucial: if productivity gains flow primarily to capital owners and are not redistributed (via taxation or wage rises), net welfare assessment is different from if gains are broadly shared
- Policy response matters: with appropriate complementary policies (education, retraining, social insurance, progressive taxation of AI-generated returns) net benefit is more likely; without them, disruption costs may dominate in the medium term
- UK-specific: financial services and professional services most exposed AND most likely to generate AI gains — concentration of both benefit and disruption in same high-productivity sectors is unique

Conclusion: probable net economic benefit in the long run IF accompanied by active labour market policy, redistribution of productivity gains, and investment in skills/retraining. Without policy response, distributional harms and transition costs could outweigh aggregate gains — particularly in the medium term. The historical analogy holds only if institutional adaptation matches the speed of technological change.`,
          tip: 'This 22-mark essay is your chance to show synoptic thinking — weave together micro (market failure, labour markets) with macro (productivity, output gap, inequality). Use BOTH extracts explicitly.',
        },
      ],
    },
  },
}
