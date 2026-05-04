// ============================================================
// AQA A-Level Economics — Master Predicted Paper 2026
// Built from: 2019-2025 past paper analysis, Tutor2u 2026 forecasts,
// The Student Room prediction threads, CMA investigation reports,
// AQA examiner reports, and topic rotation patterns.
// ============================================================

export const masterPaper2026 = {

  // ══════════════════════════════════════════════════════════
  // PAPER 1 — MARKETS AND MARKET FAILURE
  // ══════════════════════════════════════════════════════════
  paper1: {
    title: 'AQA Economics Master Paper 1',
    subtitle: 'Markets and Market Failure',
    time: '2 hours',
    marks: '80',
    research_note: 'Section A context: UK veterinary market — confirmed CMA investigation (2023-24), not previously examined, rich in micro market failure content. Section B essays: monopoly, carbon tax, and price discrimination — all overdue based on 2019-2025 topic rotation analysis. Probability: HIGH.',

    sectionA: {
      title: 'The UK Veterinary Market',
      marks: 40,
      context: `Extract A: Competition and Consolidation in the UK Vet Market

The UK veterinary market has undergone dramatic structural change since 2015. Private equity groups have acquired hundreds of independent practices, with four corporate groups — CVS, IVC Evidensia, VetPartners, and Medivet — now collectively owning approximately 25% of all UK practices by 2024, up from just 8% in 2015. The Competition and Markets Authority (CMA) opened a formal investigation in September 2023 after evidence emerged that consolidation was reducing local competition and driving up prices. Average consultation fees rose from approximately £30 in 2015 to over £72 in 2023 — a rise of 140%.

Pet ownership expanded significantly over the same period, rising from 41% of UK households in 2010 to 59% in 2022 as pet adoption surged during the COVID-19 pandemic. Veterinary services display characteristics of a credence good — owners cannot easily assess the necessity or quality of recommended treatments, creating significant information asymmetry between vets and their clients. The income elasticity of demand for pet healthcare is estimated at approximately +0.6, classifying it as a normal necessity. Demand for veterinary services is also considered highly price inelastic.

Extract B: The CMA's Findings and Policy Debate

In March 2024, the CMA published preliminary findings from its market investigation. It found that independent practices facing nearby corporate-owned competitors had, on average, 10–15% lower consultation fees and higher customer satisfaction ratings, suggesting that consolidation had materially reduced competitive pressure. In some local markets, a single corporate group owned three or more practices within a five-mile radius, creating effective local monopoly conditions.

Policy responses under discussion include: mandatory publication of prices online (transparency regulation); regulatory price caps; forced divestiture of practices by corporate groups to restore local competition; and reducing barriers to entry by streamlining licensing requirements for new practices. The British Veterinary Association has argued that fee increases reflect rising input costs — graduate salaries, advanced medical equipment, energy bills, and pharmaceutical supplies — rather than the exploitation of market power, and that heavy regulation risks deterring investment in the sector.

Figure 1: UK Veterinary Market Data

Indicator                            | 2015    | 2023/24
-------------------------------------|---------|----------
Average consultation fee             | £30     | £72
Corporate-owned practices (% total)  | 8%      | 25%
Pet-owning households (% UK)        | 41%     | 59%
Registered vets in UK               | 23,000  | 31,200
Number of practices (est.)          | 4,900   | 5,400`,

      questions: [
        {
          id: 'mp1-a-1',
          question: 'Using Figure 1, calculate the percentage increase in average veterinary consultation fees between 2015 and 2023/24. Show your working.',
          marks: 2,
          markScheme: `2 marks for correct answer with working shown:
(£72 − £30) ÷ £30 × 100 = 140%

1 mark for correct method with a minor arithmetic error, providing working is shown.
0 marks for correct answer with no working.`,
          tip: 'Always show the formula and working clearly. Even if your arithmetic is slightly off, showing the right method earns a mark.'
        },
        {
          id: 'mp1-a-2',
          question: 'Using a diagram, explain why the demand for veterinary services is likely to be price inelastic.',
          marks: 4,
          markScheme: `Diagram [up to 2 marks]:
• Price (£) on vertical axis, Quantity of Vet Services on horizontal axis (1 mark)
• Steep (near-vertical) downward-sloping demand curve clearly labelled D, gradient significantly steeper than 45° to represent inelastic demand (1 mark)

Explanation [up to 2 marks — 1 mark per distinct point]:
• Pet healthcare is perceived as a necessity — when a pet is sick, owners pay regardless of price increases, as there is no option to delay or defer essential treatment
• Few close substitutes — owners cannot substitute away from qualified veterinary care; home treatment is not a realistic alternative for most conditions
• Credence good nature and information asymmetry — owners cannot assess whether recommended treatment is necessary or whether cheaper alternatives exist, reducing their ability to respond to price signals
• Low proportion of income for many households — despite rising fees, vet costs remain a relatively small share of total income for most pet owners, reducing price sensitivity
[Max 2 from explanation; max 4 total]`,
          tip: 'Split effort evenly: 2 marks for a clear diagram, 2 marks for two distinct reasons. Write one sentence per reason.'
        },
        {
          id: 'mp1-a-3',
          question: 'Extract A states that the income elasticity of demand for pet healthcare is estimated at approximately +0.6. Explain what this figure reveals about the nature of this good and analyse how a rise in UK household real incomes is likely to affect the veterinary market.',
          marks: 4,
          markScheme: `Nature of the good [up to 2 marks]:
• YED is positive (+0.6) → pet healthcare is a normal good: demand rises as income rises (1 mark)
• YED between 0 and +1 → normal necessity: demand rises less than proportionately with income; the good is income inelastic (1 mark)

Market impact [up to 2 marks]:
• Rising real incomes shift demand for vet services rightward, raising equilibrium price and quantity (1 mark)
• Since vet supply is inelastic in the short run (training takes 5 years; building new practices takes time), increased demand is likely to push fees higher rather than significantly expand quantity supplied (1 mark)
• Higher incomes also increase pet ownership itself (pet ownership is likely to have YED > 0), compounding the demand shift (1 mark)
[Max 2 from market impact; max 4 total]`,
          tip: 'YED questions always need: (1) sign (normal/inferior), (2) magnitude (necessity/luxury). Then link to a demand shift in the market.'
        },
        {
          id: 'mp1-a-4',
          question: 'Using evidence from the extracts, explain why the consolidation of the UK veterinary market by large corporate groups is likely to lead to allocative inefficiency.',
          marks: 5,
          markScheme: `[Up to 5 marks — mark holistically]

Core mechanism [up to 3 marks]:
• Corporate consolidation reduces the number of competing providers in local markets, giving corporate groups market power to raise price above marginal cost (1 mark)
• Allocative efficiency requires P = MC; market power leads to P > MC — resources are misallocated because the market produces fewer vet services than the socially optimal level (1 mark)
• This creates a deadweight welfare loss: consumers who would value treatment at the competitive price (where P = MC) are priced out, and the associated welfare is destroyed rather than transferred (1 mark)

Evidence/development [up to 2 marks]:
• Extract B confirms this mechanism: practices facing corporate competitors had 10–15% lower fees, consistent with competitive markets approaching P = MC; corporate consolidation removes this discipline (1 mark)
• In local monopoly conditions (3+ practices under single ownership within 5 miles), the corporate group faces a downward-sloping demand curve; profit is maximised at MR = MC, but the price charged (from the demand curve) exceeds MC, confirming allocative inefficiency (1 mark)
• Credence good characteristics amplify the problem: asymmetric information allows over-prescribing, meaning quantity consumed may exceed the socially optimal level even before market power is considered (1 mark)
[Max 5 total]`,
          tip: 'State the definition (P = MC for efficiency), identify the mechanism (market power → P > MC), reference the extract evidence. Three clear steps.'
        },
        {
          id: 'mp1-a-5',
          question: 'Extract B identifies several policy responses to the CMA investigation into the UK veterinary market. Evaluate whether increased regulation by the CMA is the most effective way to protect consumers in the veterinary market.',
          marks: 25,
          markScheme: `Level of Response — 25 marks

Level 4 (19–25): Detailed analysis of CMA regulation with well-developed comparison of at least two alternative policies. Balanced evaluation using evidence from the extracts. Clear judgement with stated criteria. Considers limitations of regulation and circumstances where it is more/less effective.

Level 3 (13–18): Sound analysis of at least two dimensions (e.g. forced divestiture vs. transparency; regulation vs. supply-side entry). Some evaluation. May lack depth in conclusion or not sufficiently apply to the veterinary context.

Level 2 (7–12): Some relevant analysis. Limited comparison. Identifies CMA policies but does not evaluate them against alternatives in depth.

Level 1 (1–6): Basic awareness of some policies. Limited economic analysis.

Points in favour of CMA regulation as most effective:
• Forced divestiture directly dismantles the source of market power — mandatory sale of excess practices in concentrated local markets restores competition without requiring ongoing intervention; no other policy can compel structural separation
• Transparency regulation (mandatory publication of prices) is low-cost to implement but targets the information asymmetry identified in the extract, allowing consumers to compare prices and reducing credence-good exploitation
• The CMA has statutory authority backed by legal enforcement — unlike voluntary self-regulation or market-based solutions, compliance is not optional
• Extract B evidence supports regulation: CMA found clear price differential between competitive and consolidated areas, providing evidential basis for targeted intervention

Points against / limitations:
• CMA investigations are slow — the formal market investigation process typically takes 18–24 months from launch to binding remedies; consumer harm continues throughout; faster-acting alternatives (immediate price disclosure rules) may be more urgent
• Regulatory price caps risk supply-side distortions: if caps are set below cost-covering levels, practices reduce investment in equipment, staff, and capacity — Extract B's BVA argument (that fee increases reflect genuine cost rises) has some validity and must be assessed carefully before price controls are imposed
• Carbon leakage analogy — forced divestiture may not solve local concentration if divested practices are bought by other corporate groups; the CMA would need ongoing monitoring
• Behavioural tools (comparison websites, GP-style referral networks for vets) could reduce information asymmetry at lower administrative cost than formal regulation
• Supply-side competition policy (reducing licensing barriers for new practices, nurse practitioner scope expansion) increases competitive pressure without distorting incumbent pricing — and may be more durable long-run

Evaluation:
• Effectiveness criterion matters: if the primary market failure is market power (concentration), structural CMA remedies are uniquely targeted; if the primary failure is information asymmetry, transparency tools may be more proportionate
• Time dimension: transparency rules are faster to implement; divestiture takes longer but is more fundamental
• CMA regulation is necessary where market failure cannot self-correct, but works best combined with supply-side entry promotion

Conclusion: CMA regulation is the most appropriate primary instrument because it can compel structural change that market forces cannot — forced divestiture and transparency mandates target the identified market failures directly. However, its effectiveness is enhanced by complementary supply-side policies to increase entry and contestability, which reduce the need for ongoing regulatory oversight.`,
          tip: 'Plan before writing. Use Extract B to identify specific policies (transparency, price caps, divestiture) and evaluate each against at least one alternative. Your conclusion must state what "effective" means and why the answer is conditional.'
        }
      ]
    },

    sectionB: {
      marks: 40,
      instruction: 'Answer ONE question from this section. Each question is worth 40 marks (15 + 25).',
      questions: [
        {
          id: 'mp1-b-1',
          question: 'Essay 1: Monopoly and Market Power',
          parts: [
            {
              label: '(a)',
              question: 'Using a diagram, explain how a monopolist determines its profit-maximising price and output, and why this results in allocative inefficiency compared with a perfectly competitive market.',
              marks: 15,
              markScheme: `Level of Response — 15 marks

Level 3 (11–15): Accurate, fully-labelled diagram with MR = MC profit-maximising rule clearly explained. Correct comparison with competitive equilibrium (P = MC). Deadweight welfare loss identified and explained. Well-written.

Level 2 (6–10): Largely correct diagram with some errors. Profit-maximising rule identified but explanation of allocative inefficiency imprecise. May confuse productive and allocative efficiency.

Level 1 (1–5): Basic diagram attempt with limited explanation.

Key content for full marks:
Diagram: downward-sloping AR = demand curve; MR below AR (twice as steep for linear demand); upward-sloping MC; U-shaped AC; profit-maximising output Qm where MR = MC; price Pm read from AR curve above MC; supernormal profit rectangle (Pm − ACm) × Qm; competitive equilibrium at Qc where AR = MC (Pc); deadweight welfare loss triangle between Qm and Qc.

Allocative efficiency: requires P = MC (satisfied in perfect competition at Qc); monopolist sets P > MC at output Qm — at the margin, consumers value additional units at Pm but units cost only MC to produce, so output should expand; restriction creates deadweight welfare loss — consumer and producer surplus destroyed, not redistributed.`,
              tip: 'Label every element of the diagram: both axes, AR, MR, MC, AC, Qm, Pm, Qc, Pc, the profit rectangle, and shade the deadweight welfare loss triangle. Diagrams with all elements labelled score substantially higher.'
            },
            {
              label: '(b)',
              question: 'Evaluate the view that monopolies always produce worse economic outcomes for society than competitive markets.',
              marks: 25,
              markScheme: `Level of Response — 25 marks

Level 4 (19–25): Sophisticated analysis covering both static (allocative, productive efficiency) and dynamic efficiency. Balanced evaluation with specific examples. Clear, reasoned judgement that explicitly addresses "always" — states WHAT the outcome depends on and WHY.

Level 3 (13–18): Good analysis of at least two dimensions. Some evaluation. May lack depth in conclusion.

Level 2 (7–12): Basic arguments both ways. Limited use of economic theory or evidence.

Level 1 (1–6): Descriptive account with little analysis.

Arguments supporting (monopoly IS worse):
• Allocative inefficiency: P > MC at monopoly output; deadweight welfare loss is a net destruction of social surplus not captured by any party
• Productive inefficiency and X-inefficiency (Leibenstein): absence of competitive pressure allows management to tolerate slack, excess costs, and sub-optimal working practices — AC higher than minimum achievable
• Supernormal profit persists in the long run (barriers to entry prevent competitive erosion); represents transfer from consumers (lower-income groups disproportionately affected) to shareholders

Arguments against "always" (monopoly may be better):
• Dynamic efficiency — Schumpeterian defence: supernormal profits fund R&D investment; pharmaceutical monopolies protected by patents generate life-saving innovations that competitive markets would not fund (innovator cannot recoup large fixed development costs without pricing above MC)
• Natural monopoly: where minimum efficient scale is large relative to market size (water, railways, electricity transmission), a single firm produces at lower LAC than multiple competitors; breaking it up raises average costs — the competitive outcome is economically inferior
• Contestability theory (Baumol): if entry and exit are costless, even a monopolist faces competitive discipline from the threat of entry and prices at competitive levels without actual competition occurring
• Economies of scale: large integrated firms achieve cost efficiencies in procurement and logistics that may be passed to consumers through prices lower than a fragmented competitive market could achieve

Evaluation / conclusion:
The word "always" makes the proposition false. Outcomes depend on:
• Industry type — natural monopoly → regulate, don't fragment; innovative industry → patents serve a social purpose
• Regulatory environment — well-regulated monopoly (Ofwat, Ofgem) may approximate competitive outcomes
• Time horizon — static analysis favours competition; dynamic analysis may favour monopoly where R&D is high
• Contestability — monopoly in a highly contestable market may produce near-competitive outcomes

Best conclusion: monopolies typically create allocative and productive inefficiency, but the claim that outcomes are ALWAYS worse ignores natural monopoly, dynamic efficiency, and contestability. Context-specific analysis is essential.`,
              tip: '"Always" is your evaluation trigger. Identify at least two clear exceptions. Natural monopoly and dynamic efficiency (pharma patents) are the strongest counterarguments. Your conclusion must say what the outcome DEPENDS ON.'
            }
          ]
        },
        {
          id: 'mp1-b-2',
          question: 'Essay 2: Environmental Market Failure and Carbon Taxation',
          parts: [
            {
              label: '(a)',
              question: 'Using a diagram, explain how carbon emissions from firms create negative externalities that lead to market failure and reduce economic welfare.',
              marks: 15,
              markScheme: `Level of Response — 15 marks

Level 3 (11–15): Accurate diagram with MPC, MSC, MPB = MSB curves. Correct identification of divergence between MPC and MSC as the external cost per unit. Competitive output (Qm) correctly shown as exceeding socially optimal output (Qso). Deadweight welfare loss triangle correctly shaded. Clear written explanation.

Level 2 (6–10): Largely correct diagram. Some conceptual errors — may conflate MPC and MSC or fail to clearly identify the welfare loss triangle.

Level 1 (1–5): Some understanding of externalities. Diagram missing or significantly inaccurate.

Key content:
Diagram: Price/Cost (£) on vertical, Quantity of Output on horizontal; downward-sloping demand = MPB (assume no positive consumption externality); upward-sloping MPC; MSC above MPC with a constant vertical gap representing marginal external cost of carbon emissions; competitive equilibrium at Qm (MPC = MPB); socially optimal output Qso (MSC = MSB) to the left of Qm; deadweight welfare loss triangle between Qso and Qm above the MSC curve and below the demand curve.

Written explanation: firms consider only private costs in production decisions; carbon emissions impose external costs on third parties — climate damage, health impacts from air pollution, flooding — not reflected in market price; at the competitive market output Qm, MSC > MSB; each additional unit beyond Qso destroys more social value than it creates; the market therefore over-produces relative to the socially optimal level, generating a deadweight welfare loss.`,
              tip: 'The deadweight welfare loss triangle is the key element examiners look for. It sits between Qso and Qm, bounded above by the demand curve and below by the MSC curve. Shade it clearly.'
            },
            {
              label: '(b)',
              question: 'Evaluate the view that a carbon tax is the most effective policy to reduce the negative externalities associated with carbon emissions.',
              marks: 25,
              markScheme: `Level of Response — 25 marks

Level 4 (19–25): Sophisticated comparison of carbon tax against credible alternatives (cap-and-trade, regulation, subsidies). Uses Pigouvian tax theory correctly. Evaluates limitations against clear criteria. Reaches a supported, nuanced judgement.

Level 3 (13–18): Good analysis of carbon tax with comparison to at least one alternative. Some evaluation. Reasonable conclusion.

Level 2 (7–12): Basic description of carbon tax with limited evaluation. May identify one alternative.

Level 1 (1–6): Descriptive knowledge of environmental policy with little economic analysis.

Arguments FOR carbon tax:
• Uses the price mechanism to internalise the externality — Pigouvian tax set equal to marginal external cost shifts MPC up to MSC, restoring socially optimal output (Qso)
• Generates government revenue — recyclable to fund renewable subsidies, climate adaptation, or compensate low-income households hit by higher energy costs
• Dynamic innovation incentive — continuous incentive: firms that reduce emissions below the tax threshold gain cost advantage; unlike command-and-control regulation, the carbon tax rewards innovation in clean technology
• Economically efficient — different firms face different abatement costs; a uniform carbon price allows each to choose its cheapest route to reduction, minimising economy-wide abatement cost for any given emissions target

Arguments against / limitations:
• Information problem — Pigouvian optimality requires precise knowledge of marginal external cost; the social cost of carbon is deeply uncertain (estimates range from $51 to $250+ per tonne); a badly-set tax may overcorrect or undercorrect
• Regressive distributional impact — energy and fuel expenditure is a higher proportion of income for lower-income households; a carbon tax imposes greater relative burden on the poor unless revenue is fully recycled progressively
• Carbon leakage — firms may relocate production to countries without a carbon price, reducing UK emissions while global emissions remain unchanged or increase; the UK ETS covers only some sectors
• Price inelasticity in some sectors — if demand for high-carbon products is highly inelastic (aviation, cement, steel), a tax raises costs significantly without substantially reducing emissions; the externality persists even as revenue is collected
• Political vulnerability — fuel duty increases have triggered significant social unrest (France's gilets jaunes 2018); carbon taxes are politically difficult to maintain at the level required

Alternative policies:
• Cap-and-trade (ETS): sets a binding quantity limit on total emissions — more certain in hitting environmental targets but price is volatile and caps may be set too loosely
• Direct regulation (boiler bans, efficiency standards): certain in outcome but economically inefficient — all firms must adopt the same solution regardless of their individual abatement costs
• Subsidies for renewables: addresses clean energy investment without increasing consumer costs directly; can be financed from carbon tax revenue; does not directly price the externality but expands the clean alternative

Evaluation:
The carbon tax is the theoretically optimal single instrument for internalising a negative externality. However, its real-world effectiveness is constrained by information problems (unknown optimal rate), distributional concerns (regressivity), and carbon leakage. The optimal policy package combines: a well-calibrated carbon price (for economic efficiency) + revenue recycling (for distributional protection) + sector-specific regulation (for hard-to-abate industries) + clean technology subsidies (for innovation externalities). Whether a carbon tax alone is the "most effective" depends critically on whether it is set at the right rate, applied broadly enough, and accompanied by complementary policies.`,
              tip: 'Compare the carbon tax against at least TWO alternatives (e.g. cap-and-trade and regulation). For each, state its advantage and its limitation. Your conclusion should say which is best under what conditions, not which is always best.'
            }
          ]
        },
        {
          id: 'mp1-b-3',
          question: 'Essay 3: Price Discrimination',
          parts: [
            {
              label: '(a)',
              question: 'Explain the conditions necessary for a firm to practise price discrimination and, using a diagram, show how a firm practising third-degree price discrimination maximises profit across two markets with different price elasticities of demand.',
              marks: 15,
              markScheme: `Level of Response — 15 marks

Level 3 (11–15): All three conditions correctly stated and explained. Accurate diagram showing two markets with MR = MC profit-maximisation in each; higher price in the inelastic market, lower price in the elastic market. Well-written.

Level 2 (6–10): At least two conditions. Diagram present but may show only one market or fail to apply MR = MC correctly.

Level 1 (1–5): Some awareness of price discrimination with limited analysis.

Three conditions:
1. Market power: the firm must be a price-maker (downward-sloping demand curve) — a price-taker cannot charge different prices
2. Market separation: consumers in the lower-priced market cannot resell to consumers in the higher-priced market (no arbitrage) — enforced through age verification, geography, time, or membership
3. Different price elasticities of demand: if elasticities were identical, there would be no benefit to charging different prices — the firm charges a higher price in the more inelastic market

Diagram (third-degree):
Two side-by-side diagrams labelled Market A (inelastic demand) and Market B (elastic demand). Each shows: downward-sloping AR and MR curves; constant horizontal MC line (equal in both markets, as the firm faces one cost structure). Profit-maximising output in each market where MR = MC. Price in Market A (P_A) read from demand curve is higher than price in Market B (P_B). Q_A < Q_B.`,
              tip: 'The three conditions are the core of part (a). Many students get the third wrong — without different elasticities, there is no profit motive to separate markets. Draw both markets side by side and label PA > PB clearly.'
            },
            {
              label: '(b)',
              question: 'Evaluate the view that price discrimination is always harmful to consumers and society.',
              marks: 25,
              markScheme: `Level of Response — 25 marks

Level 4 (19–25): Balanced analysis addressing consumer welfare and social welfare separately. Considers multiple degrees of price discrimination or clearly-focused third-degree analysis with awareness of broader types. Uses the output effect correctly. Reaches a nuanced conclusion addressing "always."

Level 3 (13–18): Good analysis of arguments both ways. Some evaluation. May be unbalanced.

Level 2 (7–12): Limited analysis. May only consider one degree or one perspective.

Level 1 (1–6): Descriptive account of price discrimination with little economic analysis.

Arguments price discrimination IS harmful:
• Consumer surplus extraction: under perfect (first-degree) price discrimination, all consumer surplus is captured by the firm — a pure transfer from consumers to producers; while total output equals the competitive level (no deadweight loss), every consumer pays their maximum willingness to pay — profoundly harmful from a consumer welfare perspective
• Third-degree discrimination harms inelastic-market consumers: those who cannot substitute (commuters vs. leisure travellers; domestic vs. industrial buyers) pay significantly above MC; allocative inefficiency persists in the high-price market (P > MC)
• Personalised (algorithmic) price discrimination exploits consumer data: consumers in weaker bargaining positions or with lower financial sophistication may consistently pay higher prices without knowing it, eroding consumer sovereignty
• Market exclusion in essential services: high prices in inelastic markets may exclude lower-income consumers from accessing goods or services they need

Arguments price discrimination is NOT always harmful:
• Access for elastic-demand groups: third-degree price discrimination enables firms to charge lower prices to price-sensitive consumers (students, pensioners, developing-country buyers) who would otherwise be excluded from the market entirely — overall access and potentially total welfare increases
• Output effect: in models where third-degree price discrimination increases total output across both markets above the uniform monopoly level, total welfare (consumer + producer surplus) increases, even though distribution shifts toward the producer
• Cross-subsidy model: airlines and rail firms charge high prices to business travellers to cross-subsidise lower leisure fares, maintaining route viability that could not be sustained at uniform competitive pricing — consumers in both markets benefit from route/service existence
• Global pharmaceutical pricing: firms charge high prices in wealthy countries and low (or zero) prices in developing nations — this increases global access to life-saving drugs and increases total welfare even though high-income consumers pay above competitive price
• Comparison with uniform monopoly: price discrimination may be the relevant counterfactual, not perfect competition; compared to a uniform monopoly price, price discrimination increases output and reduces DWL

Evaluation:
• The word "always" makes the claim false — student discounts, pharmaceutical access in LDCs, and cross-subsidised transport all represent cases where price discrimination benefits consumers
• Key analytical insight: it depends on the output effect (does total output rise or fall vs. uniform monopoly?) and on which consumer groups are compared (elastic-market consumers benefit; inelastic-market consumers are harmed)
• Distributionally: price discrimination transfers surplus from low-PED consumers to producers — this is regressive if low-PED consumers are wealthier (commuters vs. leisure travellers may not be)
• Equity vs. efficiency: even where price discrimination improves total efficiency (output effect), it may worsen distribution

Conclusion: "always harmful" is demonstrably false. Price discrimination produces ambiguous outcomes for consumers and society — the net effect depends on the degree of discrimination, whether output increases relative to the counterfactual, and which consumer groups are examined. The appropriate policy response is case-by-case rather than blanket prohibition.`,
              tip: '"Always" in the question = find ONE clear exception to disprove the absolute claim. Student discounts, pharma pricing in developing countries, or cross-subsidised transport routes all work. Your conclusion must say what the outcome depends on.'
            }
          ]
        }
      ]
    }
  },

  // ══════════════════════════════════════════════════════════
  // PAPER 2 — NATIONAL AND INTERNATIONAL ECONOMY
  // ══════════════════════════════════════════════════════════
  paper2: {
    title: 'AQA Economics Master Paper 2',
    subtitle: 'National and International Economy',
    time: '2 hours',
    marks: '80',
    research_note: 'Section A: US tariffs/Trump trade policy (2025) — the single defining global macro event of 2025-26, not yet appeared as primary AQA context. Section B: Supply-side policy (overdue since 2020), current account deficit (not as essay since 2018), fiscal policy (taxation angle appeared 2025 — spending angle now due). Probability: HIGH.',

    sectionA: {
      title: 'US Tariffs and Global Trade Disruption',
      marks: 40,
      context: `Extract C: America First — The Return of Protectionism

In April 2025, the United States government implemented sweeping import tariffs under its 'America First' trade agenda, imposing a 10% baseline tariff on all imports, rising to 20% on goods from the European Union and up to 145% on Chinese imports. The UK, while subject to the 10% baseline rate, was granted a 90-day negotiating window. UK goods exports to the United States — the UK's single largest bilateral export market, worth approximately £60 billion in 2024 — faced immediate cost pressures. UK exporters of cars, machinery, pharmaceuticals, and Scotch whisky were among the most exposed.

Global trade volumes fell by an estimated 1.8% in the first half of 2025, according to World Trade Organization (WTO) preliminary data. The WTO warned that a full escalation of the trade conflict between the US and China could reduce global GDP by up to 7% over a decade. The UK government began negotiations on a bilateral US–UK trade agreement, hoping to secure tariff exemptions in exchange for regulatory concessions on agricultural standards and financial services market access.

Extract D: Macroeconomic Consequences for the UK

The Bank of England's Monetary Policy Committee (MPC) noted in its May 2025 Monetary Policy Report that the tariff environment created simultaneous headwinds to UK growth and upward pressures on imported inflation. Sterling fell 3.2% against the US dollar in the six weeks following the tariff announcement, reaching £1 = $1.23. The OBR revised its UK GDP growth forecast for 2025 from 2.0% to 1.3%.

UK businesses reported that supply chain disruption — as global trade patterns shifted in response to US tariffs — was increasing input costs across manufacturing and retail. The UK's persistent current account deficit (approximately -£78 billion or -3% of GDP in 2024) was expected to worsen in the near term as export revenues to the US fell. However, some economists argued that sterling's depreciation would partially offset the tariff impact by making UK exports cheaper in dollar terms, partially restoring competitiveness.

Figure 2: UK Macroeconomic Indicators

Indicator                             | Value
--------------------------------------|------------------
UK goods exports to US (2024)         | £60 billion
US tariff rate on UK goods            | 10% (baseline)
UK current account deficit (2024)     | -£78bn (-3% GDP)
UK GDP growth forecast revised to     | 1.3% (2025)
Sterling depreciation vs dollar       | -3.2% (6 weeks)
Bank of England base rate (May 2025)  | 4.25%
UK CPI inflation                      | 2.6% (April 2025)`,

      questions: [
        {
          id: 'mp2-a-1',
          question: 'Using Figure 2, calculate the approximate additional annual cost imposed on UK exporters by the 10% US tariff on UK goods.',
          marks: 2,
          markScheme: `2 marks for correct answer with working:
10% × £60 billion = £6 billion per year

1 mark for correct method with arithmetic error, providing working is shown.
0 marks for correct answer without working.

Note: accept answers that note this is a maximum (assumes all exports face the full 10% and none are exempted).`,
          tip: 'Show the formula explicitly: 10/100 × £60bn = £6bn. Always include units in your answer.'
        },
        {
          id: 'mp2-a-2',
          question: 'Using an aggregate demand and aggregate supply diagram, explain how the US tariffs on UK goods exports are likely to affect the UK\'s macroeconomic equilibrium in the short run.',
          marks: 4,
          markScheme: `Diagram [up to 2 marks]:
• Axes correctly labelled: Price Level (vertical), Real GDP (horizontal); downward-sloping AD₁ curve, upward-sloping SRAS curve, vertical LRAS (1 mark)
• AD₁ shifting leftward to AD₂ to show reduction in aggregate demand; new equilibrium at lower real GDP (Y₂ < Y₁) and lower price level (P₂ < P₁) (1 mark)

Explanation [up to 2 marks]:
• US tariffs make UK exports more expensive for US buyers → UK export revenues (X) fall → net exports (X−M) decline → aggregate demand falls, shifting AD leftward (1 mark)
• New short-run equilibrium at lower real GDP reflects reduced economic activity; lower price level represents deflationary pressure from weaker demand, partially offsetting the supply-side inflation from costlier imports (1 mark)
• Extract D: OBR revised UK GDP growth from 2.0% to 1.3%, consistent with an AD-reducing effect (1 mark)
[Max 2 from explanation; max 4 total]`,
          tip: 'In AD/AS questions: identify which component of AD changes (here: X falls → net exports fall → AD shifts left), show the shift clearly on the diagram, and read off both equilibrium effects (real GDP and price level).'
        },
        {
          id: 'mp2-a-3',
          question: 'Extract D states that the UK\'s current account deficit is expected to worsen following the US tariff announcement. Explain two reasons why this might occur.',
          marks: 4,
          markScheme: `Award 2 marks per reason (1 for identification + 1 for development), maximum 4 marks:

Reason 1 — Fall in export revenue to the US:
The 10% tariff increases the price of UK goods for US buyers, reducing demand for UK exports and lowering UK export revenues; the current account records exports as a credit — lower export revenue widens the current account deficit (2 marks).

Reason 2 — Supply chain disruption increasing import costs:
Extract D notes that global supply chain disruption is increasing input costs for UK manufacturers; if UK firms import components from countries affected by US tariffs (e.g. China), the cost of those imports rises even without direct UK tariffs — higher import costs widen the current account deficit (2 marks).

Reason 3 — Dollar depreciation / sterling fall effect on import costs:
Sterling fell 3.2% against the dollar; imports priced in dollars (oil, machinery, commodities) now cost more in sterling terms — the import bill rises in domestic currency, worsening the current account balance (2 marks).

[Award maximum of 4 marks for any two well-explained reasons]`,
          tip: 'Two reasons = two distinct mechanisms. Do not repeat the same point in different wording. Develop each with a chain of causation: tariff → effect on exports/imports → effect on current account balance.'
        },
        {
          id: 'mp2-a-4',
          question: 'Extract D notes that sterling fell 3.2% against the US dollar following the tariff announcement. Explain the likely effects of this depreciation on UK exporters affected by US tariffs.',
          marks: 5,
          markScheme: `[Up to 5 marks — mark holistically]

Offsetting the tariff impact [up to 3 marks]:
• Sterling depreciation makes UK goods cheaper in dollar terms for US buyers — if sterling falls sufficiently, the dollar price of UK exports can return to near pre-tariff levels despite the 10% tariff (1 mark)
• Example: if UK exports were priced at £100 = $127 pre-tariff; with 10% tariff they cost $139.7; if sterling falls 3.2% to $1.23, they now cost $123 × 1.10 = $135.3 — partially but not fully offsetting the tariff (1 mark)
• UK exporters may gain price competitiveness relative to non-UK competitors in the US market who face higher tariff rates (e.g. EU at 20%, China at 145%) (1 mark)

Complications / limitations [up to 2 marks]:
• Sterling depreciation raises the cost of imported inputs for UK manufacturers — if UK exporters rely on imported components, their production costs rise, offsetting gains in price competitiveness (1 mark)
• The extent of benefit depends on the price elasticity of demand for UK exports in the US — if demand is inelastic, a lower dollar price does not generate much additional revenue; the Marshall-Lerner condition must be satisfied for the current account to improve (1 mark)
• A 3.2% depreciation only partially offsets a 10% tariff — the net competitiveness impact is negative; the depreciation mitigates but does not eliminate the tariff cost (1 mark)
[Max 5 total]`,
          tip: 'Exchange rate questions need both the direction of the effect AND the conditions that determine the size. Reference the Marshall-Lerner condition and the J-curve to show depth.'
        },
        {
          id: 'mp2-a-5',
          question: 'With reference to the extracts and your own knowledge, evaluate whether free trade or protectionism better serves the UK\'s macroeconomic objectives in the context of rising global trade barriers.',
          marks: 25,
          markScheme: `Level of Response — 25 marks

Level 4 (19–25): Sophisticated analysis using comparative advantage, terms of trade, and macroeconomic objectives framework. Balanced evaluation of both cases with evidence from extracts and own knowledge. Clear, reasoned judgement with stated criteria and a sense of conditionality.

Level 3 (13–18): Sound analysis of both sides. Some evaluation. Reasonable conclusion.

Level 2 (7–12): Some relevant analysis. Limited comparison. Identifies trade-offs but does not develop them in depth.

Level 1 (1–6): Basic awareness of free trade and protection with little economic analysis.

Case for free trade serving UK macroeconomic objectives:
• Comparative advantage (Ricardo): free trade enables the UK to specialise in goods/services it produces at lowest opportunity cost (financial services, aerospace, pharmaceuticals) and trade for others — total world output increases; UK real income rises
• Lower prices for consumers: free trade reduces costs of imported goods (food, consumer electronics, intermediate goods) — boosts real living standards and moderates inflation (consistent with Bank of England's 2% CPI target)
• Productive efficiency: international competition disciplines domestic firms to operate at lowest possible cost, driving productivity growth — addresses UK's long-standing productivity stagnation
• Foreign direct investment: open trade regimes attract FDI, which raises domestic capital stock and productive capacity, shifting LRAS rightward

Case for protectionism in current context:
• Short-run AD defence: if UK partners impose tariffs on UK exports (US 10% on UK goods, as in Extract C), UK retaliatory or defensive tariffs could sustain domestic production and employment in affected sectors, maintaining aggregate demand
• Infant industry argument: strategic protection of emerging UK industries (electric vehicle manufacturing, semiconductor production, green technology) may be justified to build comparative advantage before exposure to full global competition
• National security: certain industries (defence, food production, medical supplies) carry strategic value beyond economic efficiency; protection prevents over-dependence on unreliable trade partners
• Bargaining leverage: the UK's decision to negotiate rather than immediately retaliate against US tariffs reflects protectionism as a bargaining tool — the credible threat of retaliation may secure better trade terms

Evaluation:
• Protectionism in a world of rising barriers is a second-best response to a second-best world — it addresses the fact that the global trading environment has already deviated from free trade assumptions
• The costs of UK protectionism: higher consumer prices (inflationary — conflicts with Bank of England's 2% target); reduced productive efficiency; risk of retaliatory escalation that further reduces export volumes
• The practical constraint: the WTO's dispute resolution mechanism has been weakened; UK's leverage as a mid-sized open economy to resist US tariffs unilaterally is limited
• Time dimension: free trade delivers long-run efficiency gains; protectionist measures deliver short-run employment protection but at long-run cost to productive capacity
• UK's specific position: 80% services economy — services exports largely unaffected by goods tariffs; the UK's most productive sectors (finance, professional services) benefit from open global markets. Protectionism in goods is a blunt instrument for an economy whose competitive advantage lies predominantly in services.

Conclusion: free trade better serves the UK's long-run macroeconomic objectives (growth, productivity, living standards, inflation). However, in the short run, targeted defensive trade measures and negotiated bilateral agreements represent legitimate responses to a world of rising protectionism — the UK must balance its free-trade principles with the practical need to protect export revenues in a deteriorating global trade environment.`,
          tip: 'Structure: state the macroeconomic objectives first (growth, employment, price stability, current account balance) — then evaluate free trade vs. protection against each objective. This gives your essay a clear analytical framework.'
        }
      ]
    },

    sectionB: {
      marks: 40,
      instruction: 'Answer ONE question from this section. Each question is worth 40 marks (15 + 25).',
      questions: [
        {
          id: 'mp2-b-1',
          question: 'Essay 1: Supply-Side Policy',
          parts: [
            {
              label: '(a)',
              question: 'Using aggregate supply diagrams, explain how supply-side policies can increase the productive capacity of an economy and improve its long-run macroeconomic performance.',
              marks: 15,
              markScheme: `Level of Response — 15 marks

Level 3 (11–15): Accurate diagrams showing LRAS shifting rightward with correct labelling. Clear distinction between market-based and interventionist supply-side policies. Well-explained mechanism linking policies to improved productive capacity.

Level 2 (6–10): Some accurate diagram work. Reasonable explanation of at least two supply-side policies. May fail to link clearly to LRAS or long-run performance.

Level 1 (1–5): Basic awareness of supply-side policies with limited diagrammatic support.

Key content:
Diagram: Axes Price Level (vertical) and Real GDP (horizontal); LRAS₁ vertical at Y₁; following supply-side policies, LRAS shifts rightward to LRAS₂ at Y₂; this increases the economy's productive potential without necessarily causing inflation.

Policy examples and mechanisms:
• Education and training (interventionist): raises human capital → increases productive potential of labour → shifts LRAS rightward; improves labour market matching (reduces structural unemployment); raises productivity and real wages
• Labour market deregulation (market-based): reduces minimum wage, weakens trade unions, reduces employment legislation → lowers real wage costs → firms hire more at each price level; reduces natural rate of unemployment
• Investment in infrastructure (interventionist): improves transport networks, digital connectivity → reduces firms' costs, improves logistical efficiency → shifts SRAS and LRAS rightward
• Privatisation and deregulation (market-based): introduction of competition into previously protected markets → incentivises productive efficiency; reduces X-inefficiency
• R&D tax credits (interventionist): stimulates private sector R&D investment → technological progress → shifts LRAS rightward through total factor productivity improvement`,
              tip: 'Show TWO diagrams: (1) LRAS shift from supply-side policies generally, (2) optionally SRAS shift for short-run effects. Examiners reward candidates who can distinguish between policies that affect SRAS vs. LRAS.'
            },
            {
              label: '(b)',
              question: 'Evaluate the effectiveness of supply-side policies as a means of achieving the UK government\'s macroeconomic objectives.',
              marks: 25,
              markScheme: `Level of Response — 25 marks

Level 4 (19–25): Analyses effectiveness against multiple macroeconomic objectives (growth, inflation, unemployment, current account). Compares market-based and interventionist supply-side policies. Addresses time lags. Considers trade-offs and limitations. Clear, supported judgement.

Level 3 (13–18): Good analysis of at least two types of supply-side policy with reasonable evaluation. Addresses at least two macroeconomic objectives.

Level 2 (7–12): Basic analysis. Limited comparison. May only address growth or unemployment.

Level 1 (1–6): Descriptive list of supply-side policies with little evaluation.

Arguments for effectiveness:
• Growth without inflation: unlike demand-side stimulus, supply-side expansion shifts LRAS rightward, increasing potential output without inflationary pressure — the only way to achieve sustainable long-run growth (non-inflationary)
• Reduces structural unemployment: targeted education, retraining, and labour market reforms address skill mismatches, reducing the natural rate of unemployment without requiring demand stimulus and without the inflationary trade-off
• Improved international competitiveness: lower unit labour costs and higher productivity improve price competitiveness of UK exports, helping to narrow the persistent current account deficit
• UK specific need: the UK's productivity growth stagnated post-2008 (OBR data shows UK labour productivity 20% below G7 average) — supply-side reform is necessary to address this fundamental structural weakness

Limitations / arguments against effectiveness:
• Long time lags: education reforms take 10–15 years to produce a more skilled workforce; infrastructure projects take 5–10 years from planning to completion; supply-side policy is a long-run solution that provides no relief in the short run. The 2025 tariff shock (Extract C) requires immediate response, not 10-year structural reform
• Distributional concerns: market-based supply-side policies (labour market deregulation, reduced union power) may increase efficiency but worsen income distribution — lower-income workers bear the burden of flexibilisation; inconsistent with the objective of reducing inequality
• Government failure risk: interventionist supply-side policies (R&D subsidies, industrial strategy) require government to identify high-return investments; information failures and lobbying may lead to subsidising inefficient industries rather than truly productive investments
• Fiscal cost: education investment, infrastructure spending, and R&D tax credits all require government expenditure — fiscal space is constrained (UK debt at 97% of GDP as of 2025); trade-off with fiscal consolidation objectives
• Demand may be insufficient: supply-side policies increase productive capacity but do not guarantee the demand necessary to utilise it; during a global demand contraction (US tariffs reducing world trade), expanding potential output without sufficient demand creates spare capacity and unemployment rather than growth

Conclusion:
Supply-side policy is essential for achieving the UK's long-run macroeconomic objectives, particularly sustainable growth and productivity improvement. However, its effectiveness is limited in the short run by substantial time lags, and market-based variants may worsen inequality while interventionist variants carry fiscal costs and government failure risk. The most effective approach combines targeted supply-side investment in high-return areas (infrastructure, digital, green technology) with demand management policies to ensure that expanded productive capacity is matched by sufficient aggregate demand.`,
              tip: 'Evaluate against multiple macroeconomic objectives: growth (LRAS), inflation (non-inflationary growth), unemployment (natural rate), current account (competitiveness). Then address the time lag limitation — this is what examiners consistently reward.'
            }
          ]
        },
        {
          id: 'mp2-b-2',
          question: 'Essay 2: Current Account Deficit and Balance of Payments',
          parts: [
            {
              label: '(a)',
              question: 'Explain the main structural causes of the UK\'s persistent current account deficit.',
              marks: 15,
              markScheme: `Level of Response — 15 marks

Level 3 (11–15): Identifies at least three distinct structural causes with clear economic explanation of each. Distinguishes between goods and services components. Well-written and logically organised.

Level 2 (6–10): Two or three causes identified. Some explanation. May conflate cyclical and structural factors.

Level 1 (1–5): Basic awareness of current account deficit with limited causal analysis.

Key causes:
• Goods trade deficit: UK has lost comparative advantage in manufacturing since deindustrialisation of 1980s; now imports the majority of manufactured goods (consumer electronics, cars, machinery) — the goods deficit has persisted for decades and reflects a structural shift in the UK economy
• Services surplus insufficient to offset: while the UK runs a services surplus (financial services, insurance, professional services, education), it is not large enough to offset the goods deficit; the overall current account has been in deficit since 1998
• Low savings rate and high consumption: UK household savings rates are among the lowest in the OECD; high domestic consumption supports a large volume of imports, widening the current account deficit (national income identity: CA = S − I)
• Productivity gap: UK labour productivity is below major trading partners (Germany, France, US); lower productivity raises unit labour costs and reduces the price competitiveness of UK exports
• Sterling strength (historically): during periods of sterling appreciation, UK exports become more expensive for foreign buyers, reducing export volumes and widening the deficit
• Post-Brexit non-tariff barriers: Brexit increased administrative and compliance costs for UK goods exporters to the EU — the UK's largest trading partner — reducing export volumes and widening the goods deficit`,
              tip: 'Structure your answer by type of cause: structural (deindustrialisation, productivity gap), compositional (goods vs. services balance), and macroeconomic (savings ratio, exchange rate). This organisation demonstrates analytical depth.'
            },
            {
              label: '(b)',
              question: 'Evaluate the policies a government might use to reduce a persistent current account deficit, and the extent to which these may conflict with other macroeconomic objectives.',
              marks: 25,
              markScheme: `Level of Response — 25 marks

Level 4 (19–25): Sophisticated analysis of expenditure-switching and expenditure-reducing policies. Evaluates each against multiple macroeconomic objectives. Addresses Marshall-Lerner condition. Clear, supported judgement with conditionality.

Level 3 (13–18): Good analysis of at least two policies with reasonable evaluation of conflicts. Reasonable conclusion.

Level 2 (7–12): Basic analysis. Limited conflict analysis. May only address one policy.

Level 1 (1–6): Descriptive knowledge of some policies with little evaluation.

Expenditure-switching policies:
• Currency depreciation: lower exchange rate makes exports cheaper and imports more expensive in domestic currency → switches expenditure from imports to domestically-produced goods and exports; improves current account if Marshall-Lerner condition is satisfied (PED exports + PED imports > 1); J-curve: initially worsens before improving as contracts adjust
• Protectionism (tariffs/quotas): reduces import volumes directly; conflict — raises domestic prices (inflation), reduces consumer welfare, risks retaliation from trading partners, may contravene WTO rules
• Export subsidies: improves price competitiveness of exports; conflict — fiscal cost (government expenditure); WTO prohibited for many goods categories

Expenditure-reducing policies (deflationary policies):
• Higher interest rates: reduces household borrowing and consumption → lowers import demand; Bank of England base rate of 4.25% already partially serves this function; conflict — higher rates slow economic growth, raise unemployment, increase mortgage costs, may strengthen sterling (worsening export competitiveness)
• Fiscal tightening (higher taxes, lower government spending): reduces aggregate demand → lowers import demand; conflict — reduces growth and living standards; may increase unemployment; politically contentious

Supply-side policies (address structural causes):
• Investment in manufacturing and export competitiveness: industrial strategy, R&D subsidies, infrastructure investment improve long-run export capacity; no direct conflict with other objectives; but very long time lags (10+ years)
• Education and skills: improves labour productivity and export quality competitiveness; same time lag concern

Conflicts with macroeconomic objectives:
• Deflationary policies conflict with employment (unemployment rises) and growth (GDP falls)
• Protectionism conflicts with inflation objective (higher import prices) and international relations
• Supply-side is complementary with most objectives but takes too long to address an immediate imbalance

Evaluation and conclusion:
No policy reduces the current account deficit without some trade-off. Currency depreciation (if ML condition met) is theoretically the most targeted expenditure-switching tool, but the J-curve delay and the inflationary impact of higher import costs create short-run pain. Supply-side policies address the structural root cause most effectively but are a decades-long project. The UK's persistent deficit likely requires a combination: supply-side improvement for the long run, with careful demand management to avoid growth-destroying deflation. Attempting to eliminate the deficit quickly through aggressive deflation risks achieving a lower trade deficit alongside a recession — not an improvement in overall macroeconomic performance.`,
              tip: 'The best answers distinguish between expenditure-switching (changes what we buy, not how much — e.g. devaluation) and expenditure-reducing (changes total spending — e.g. deflation). Make this distinction explicit and evaluate both against each macroeconomic objective.'
            }
          ]
        },
        {
          id: 'mp2-b-3',
          question: 'Essay 3: Fiscal Policy and Long-Run Economic Performance',
          parts: [
            {
              label: '(a)',
              question: 'Using an AD/AS diagram, explain how expansionary fiscal policy can increase output and employment in an economy, and identify circumstances in which the fiscal multiplier will be large.',
              marks: 15,
              markScheme: `Level of Response — 15 marks

Level 3 (11–15): Accurate diagram with AD shift and correct multiplier mechanism explained. At least three conditions for a large multiplier correctly identified and analysed. Well-written.

Level 2 (6–10): Correct diagram. Some explanation of multiplier. May identify fewer conditions or explain them superficially.

Level 1 (1–5): Basic diagram with limited multiplier analysis.

Key content:
Diagram: Price Level (vertical), Real GDP (horizontal); SRAS upward-sloping; LRAS vertical; initial equilibrium below LRAS at Y₁ (output gap); government spending increase or tax cut shifts AD₁ rightward to AD₂; new equilibrium at higher real GDP Y₂ and higher price level P₂; initial shift understates final impact — multiplier amplifies the initial injection.

Multiplier mechanism: increase in G (or tax cut → C rises) → higher incomes → higher consumption → further increase in income → further consumption → converges to multiplier × initial injection; multiplier = 1 / (1 − MPC) or 1 / MPW where MPW = marginal propensity to withdraw (save + tax + import).

Conditions for a large multiplier:
• High marginal propensity to consume (MPC) — households spend rather than save each additional pound of income
• Low marginal propensity to import — if additional income is spent on domestic goods rather than imports, the injection circulates domestically
• Low interest rates — government borrowing does not crowd out private investment (no crowding out)
• Significant spare capacity (negative output gap) — supply can respond to increased demand without price rises offsetting the real output gain
• Low tax rates — automatic fiscal withdrawals reduce the multiplier; lower taxes allow more of each income round to be respent`,
              tip: 'The multiplier is the key concept for full marks on this question. State the formula (1/MPW or 1/(1-MPC)), explain the mechanism step by step, then identify the conditions that make it larger. At least three conditions for Level 3.'
            },
            {
              label: '(b)',
              question: 'Evaluate the view that increased government spending is the most effective way to improve the UK\'s long-run macroeconomic performance.',
              marks: 25,
              markScheme: `Level of Response — 25 marks

Level 4 (19–25): Sophisticated analysis of fiscal expansion distinguishing between current and capital spending. Engages with crowding out, fiscal sustainability, and multiplier conditions. Considers alternatives. Clear, supported judgement with conditionality.

Level 3 (13–18): Good analysis of both cases. Some comparison to alternatives. Reasonable conclusion.

Level 2 (7–12): Basic analysis of fiscal spending with limited evaluation or comparison.

Level 1 (1–6): Descriptive account with little economic analysis.

Arguments FOR increased government spending as most effective:
• Multiplier effects amplify initial injection of government spending into the economy — under conditions of spare capacity and high MPC, increased G raises GDP by more than the original spending
• Public goods and market failure correction: private markets under-provide infrastructure, R&D, and human capital (positive externalities); government spending corrects these failures and shifts LRAS rightward — improving long-run productive capacity
• Keynesian effective demand: if the economy is stuck in a low-growth equilibrium (stagnant private investment, weak consumer confidence), fiscal expansion may be the only instrument capable of breaking the cycle
• Long-run investment: well-targeted public investment in infrastructure, broadband, and education generates measurable future returns (OBR estimates UK infrastructure return at 5–8% on high-quality projects), improving productive capacity and future tax revenues
• UK infrastructure gap: the OBR estimates a £100bn+ UK infrastructure gap; failure to invest depresses long-run productivity, reducing GDP and tax revenues — the fiscal cost of not spending may exceed the cost of spending

Arguments against / limitations:
• Fiscal sustainability constraint: UK public debt is approximately 97% of GDP (2025); higher borrowing raises debt interest costs (already ~£100bn/year), crowds out future spending, and risks loss of market confidence (September 2022 gilt crisis demonstrated how rapidly this can occur)
• Crowding out: government borrowing competes with private sector for savings — raises interest rates, reducing private investment (I); particularly problematic if the economy is close to full capacity; offsetting effect may reduce or eliminate the multiplier
• Productive vs. current spending distinction: borrowing to fund day-to-day government consumption (public sector wages, benefits) has limited long-run productivity benefit; only capital investment generates lasting LRAS shifts
• Time lags: large-scale public investment takes years to procure, plan, and build — benefits are not realised immediately; in the short run, planning constraints, labour shortages, and regulatory delays slow delivery
• Government failure: government may misallocate resources due to political incentives, lobbying, or information problems — public investment in prestige projects may yield lower returns than private investment

Alternative policies:
• Supply-side reform (discussed in Essay 1) — shifts LRAS without fiscal cost
• Monetary policy (Bank of England) — though with rates already at 4.25%, limited conventional headroom remains in 2025
• Private investment incentives (R&D tax credits, capital allowances) — leverages private capital without requiring government expenditure

Evaluation and conclusion:
Increased government spending can be highly effective for improving long-run macroeconomic performance, but only if: (1) it is focused on productive capital investment rather than current consumption spending; (2) the fiscal position provides sustainable headroom; (3) multiplier conditions are favourable (spare capacity, low interest rates). The "golden rule" — borrow only to invest — captures this logic: productive public investment that generates returns above the borrowing rate is self-financing in the long run and improves fiscal sustainability rather than undermining it. As the single most effective policy, however, it is insufficient alone — complementary supply-side reform, monetary policy normalisation, and private sector incentives are required alongside it.`,
              tip: 'The key distinction is between current spending (day-to-day) and capital investment (infrastructure, education). Always make this distinction — it determines whether increased spending improves long-run performance or simply adds to the deficit with no lasting benefit.'
            }
          ]
        }
      ]
    }
  },

  // ══════════════════════════════════════════════════════════
  // PAPER 3 — ECONOMIC PRINCIPLES AND ISSUES (SYNOPTIC)
  // ══════════════════════════════════════════════════════════
  paper3: {
    title: 'AQA Economics Master Paper 3',
    subtitle: 'Economic Principles and Issues',
    time: '2 hours',
    marks: '80',
    research_note: 'Section A: 30 synoptic MCQs. Section B: UK Housing Market — never appeared as Paper 3 synoptic investigation; the defining domestic economic issue of 2025-26; combines rich micro content (oligopoly of housebuilders, negative externalities, information failure, market failure) with macro analysis (AD/AS, fiscal policy, wealth effects). Probability: HIGH.',

    sectionA: {
      marks: 30,
      title: '30 Multiple Choice Questions',
      note: 'Paper 3 Section A consists of 30 synoptic multiple choice questions covering microeconomic and macroeconomic concepts from across the A-level specification. Use the Random MCQ Practice tab to drill all 232 questions at increasing difficulty — these cover the full range of Paper 3 MCQ topic areas.',
      instruction: 'Answer ALL 30 questions. Each question carries 1 mark. Choose ONE answer A, B, C, or D for each question. Time suggested: 30 minutes.'
    },

    sectionB: {
      marks: 50,
      title: 'UK Housing Market: Supply, Demand, and Policy',
      context: `Extract E: The UK Housing Crisis — Structural Failure

House prices in the UK have risen by over 80% in real terms since 2000, while real earnings grew by only 30% over the same period. By 2024, the ratio of house prices to annual earnings in England reached 9.1:1, compared to 4.0:1 in 1997. A household now requires a deposit of approximately £50,000 to purchase an average-priced UK home — equivalent to nearly two years of median gross earnings.

The supply of new homes has consistently fallen short of government targets. In 2023, 252,000 new homes were completed against a stated government target of 300,000 — a shortfall of 16%. The planning system grants permission for far fewer homes than the stated target: in 2023, just 218,000 permissions were granted. Environmental protections, green belt restrictions, local opposition ("NIMBY" resistance), and extended appeals processes contribute to planning delays averaging 30 months from application to decision.

The housebuilding market is highly concentrated. Four large firms — Barratt Developments, Taylor Wimpey, Persimmon, and Berkeley Group — collectively control approximately 40% of new-build supply. These firms have been criticised for "land banking" — acquiring large land banks (Persimmon alone held a 94,000-plot land bank in 2023) and releasing sites gradually to maintain elevated prices rather than maximising build rates.

Extract F: Demand Pressures and Policy Interventions

Demand for housing has been sustained by several factors: population growth (UK population rose from 59.1 million in 2000 to 67.0 million in 2023); rising net migration (685,000 in the year to June 2023); declining household size (from 2.4 to 2.2 persons per household since 2000); and historically low interest rates between 2009 and 2021 that sharply reduced mortgage affordability thresholds.

The government's Help to Buy equity loan scheme (2013–2023) supported 383,000 first-time buyer purchases. Critics argued that by stimulating demand without addressing supply constraints, Help to Buy inflated prices — particularly at the threshold of eligible property values — redistributing wealth to developers and existing homeowners rather than improving affordability. Since 2021, rising interest rates have sharply increased mortgage costs: a buyer taking a 90% loan-to-value mortgage at 2020 rates (1.5%) would have paid £600/month on a £300,000 property; at 2024 rates (4.5%), the same mortgage costs £1,450/month.

Figure 3: UK Housing Market Statistics

Indicator                              | Value
---------------------------------------|------------------
House price to earnings ratio          | 4.0:1 (1997) → 9.1:1 (2024)
New homes completed (2023)             | 252,000
Government new-build target (2023)     | 300,000
Planning permissions granted (2023)    | 218,000
Households on social housing lists     | 1.2 million
Help to Buy purchases (2013–2023)      | 383,000
Persimmon land bank (2023)             | 94,000 plots`,

      questions: [
        {
          id: 'mp3-b-1',
          question: 'Using Figure 3, calculate the percentage by which new home completions in 2023 fell short of the government\'s stated target. Explain, using a supply and demand diagram, why the supply of housing is likely to be highly price inelastic in the short run.',
          marks: 8,
          markScheme: `Calculation [2 marks]:
Shortfall = 300,000 − 252,000 = 48,000 homes
Percentage shortfall = 48,000 / 300,000 × 100 = 16%
(2 marks for correct answer with working; 1 mark for correct method with arithmetic error)

Diagram [up to 3 marks]:
• Price (£) on vertical axis, Quantity of Housing on horizontal axis (1 mark)
• Downward-sloping demand curve D; near-vertical supply curve S to indicate highly inelastic supply (1 mark)
• Clear contrast with a flatter supply curve that would represent elastic supply (1 mark)

Explanation of inelastic supply [up to 3 marks — 1 mark per point]:
• Planning constraints: planning permission takes on average 30 months (Extract E); supply cannot respond to price signals in the short run even when demand rises
• Construction time lags: even with planning permission, construction of a new home takes 12–18 months; quantity supplied cannot adjust immediately to price changes
• Land scarcity and green belt restrictions: suitable building land is not freely available; green belt protections and NIMBY resistance constrain the rate of new supply regardless of price
• Housebuilder capacity: the concentrated housebuilding market (40% controlled by four firms) limits the ability to rapidly scale construction; skilled construction labour is scarce
[Max 8 total]`,
          tip: 'Two-part question: answer the calculation first (clearly showing working), then draw the diagram and explain inelastic supply separately. Do not mix them together.'
        },
        {
          id: 'mp3-b-2',
          question: 'Using evidence from the extracts, identify and explain two distinct microeconomic market failures present in the UK housing market.',
          marks: 8,
          markScheme: `Award up to 4 marks per market failure (2 for identification + explanation, 2 for development with evidence). Maximum 8 marks for two distinct failures.

Market Failure 1 — Oligopoly and land banking (market power):
• Identification: the UK housebuilding market is oligopolistic — four firms control 40% of new-build supply (Extract E) (1 mark)
• Explanation: oligopolists with market power restrict output below the competitive level to maintain high prices; land banking (Persimmon's 94,000-plot land bank) is evidence that firms deliberately withhold supply, maximising profit at the expense of allocative efficiency (P > MC) (1 mark)
• Development: this represents market failure because the private profit-maximising equilibrium produces far fewer homes than the socially optimal level; the 1.2 million households on social housing waiting lists represents the welfare cost of this under-provision (1 mark)
• Further development: land banking by oligopolists is a specific form of supply restriction analogous to a cartel outcome — the market fails to correct this because land is not a homogeneous good and price signals do not overcome planning constraints (1 mark)

Market Failure 2 — Negative externalities of development (or information failure):
• Negative externalities: new housing development imposes external costs on existing residents (increased traffic, congestion, pressure on schools and GP services, loss of green space) — not priced into developers' calculations; private cost < social cost, leading to a sub-optimal level of development from a social welfare perspective (OR over-development of certain sites) (2 marks)
• Development: NIMBY resistance is a rational response to uncompensated externalities — existing residents bear costs (reduced amenity, congestion) without receiving compensation; planning restrictions are the regulatory response to these externalities but they over-restrict supply relative to the socially optimal level (2 marks)

OR:
• Information failure / Help to Buy: Extract F notes that Help to Buy inflated prices rather than improving affordability — buyers lacked information that a demand-side subsidy with a fixed supply would be capitalised into prices rather than expanding access; asymmetric information between government policy designers and housing market outcomes (2 marks)
[Max 8 total — must be two DISTINCT failures]`,
          tip: 'Name each market failure precisely (e.g. "oligopoly market power" or "negative externalities of development") before explaining it. Do not write generically about "market failure" — be specific. Use evidence from the extracts in both failures.'
        },
        {
          id: 'mp3-b-3',
          question: 'Using aggregate demand and aggregate supply analysis, explain the macroeconomic consequences for the UK economy of the significant rise in house prices identified in the extracts, and assess how the rapid increase in mortgage costs since 2021 has affected these macroeconomic outcomes.',
          marks: 12,
          markScheme: `Level of Response — 12 marks

Level 3 (9–12): Accurate AD/AS analysis of house price effects on aggregate demand (positive wealth effects, construction investment). Accurate analysis of rising mortgage costs shifting AD leftward. Considers both inflationary and contractionary effects. Balanced, well-evidenced answer.

Level 2 (5–8): Some accurate AD/AS analysis. Identifies at least two macroeconomic effects. May not address the mortgage cost part fully.

Level 1 (1–4): Limited or inaccurate macroeconomic analysis. May be purely descriptive.

House price rise macroeconomic effects:
• Positive wealth effect: rising house prices increase the perceived wealth of homeowners (67% of UK households own or are buying with a mortgage) — increases consumer confidence and consumption (C), shifting AD rightward; higher AD raises real GDP and price level (inflationary pressure)
• Housing construction investment: a rising house price-to-cost ratio incentivises housebuilders to increase construction activity — raises investment component of AD (I); multiplier effect amplifies impact on GDP
• Negative distributional effects: house price rises transfer wealth from renters and non-owners (typically younger, lower-income) to existing homeowners; renters face higher rents as landlords' capital values increase → reduces disposable income for a significant population share → partially offsets aggregate demand increase

Mortgage cost rise macroeconomic effects (post-2021):
• Higher mortgage costs sharply reduce disposable income for 8 million variable-rate or remortgaging households — Extract F: same loan at 4.5% costs £1,450/month vs. £600/month at 1.5% — a £850/month reduction in disposable income per household shifts AD leftward
• Reduced housing market transactions: higher borrowing costs reduce demand for house purchase → slows construction → reduces I → further AD contraction
• Asymmetric effect on different income groups: higher-income homeowners with large equity buffers are less affected; first-time buyers and recent purchasers with high loan-to-value ratios face severe affordability stress → poverty and debt risks
• Net macroeconomic effect: rising house prices (positive AD) partially offset by rising mortgage costs (negative AD), but the overall effect since 2021 is contractionary in terms of consumer spending power`,
          tip: 'This is a synoptic question. Show the AD/AS framework first (diagram if possible), then separately analyse the house price effect (positive wealth effect → AD right) and the mortgage cost effect (reduces disposable income → AD left). Be explicit that these work in opposite directions.'
        },
        {
          id: 'mp3-b-4',
          question: 'Evaluate the view that expanding the provision of social housing should be the UK government\'s highest policy priority in addressing the housing crisis.',
          marks: 22,
          markScheme: `Level of Response — 22 marks

Level 4 (17–22): Sophisticated analysis of social housing in both micro and macro contexts. Balanced evaluation comparing social housing against alternative policies (planning reform, private sector incentives, land banking regulation, demand-side intervention). Considers fiscal constraints, time lags, and targeting. Reaches a clear, reasoned, contextual judgement.

Level 3 (11–16): Good analysis of at least two dimensions. Some comparison to alternatives. Reasonable conclusion.

Level 2 (5–10): Some relevant analysis. Limited comparison. May only address one side.

Level 1 (1–4): Descriptive account with little economic analysis.

Case FOR social housing as highest priority:
• Direct targeting of need: 1.2 million households on waiting lists (Extract E) are effectively excluded from the private market; social housing is the only instrument that provides below-market rents for the most vulnerable — private sector solutions will not serve this demand
• Supply-side effect: unlike demand-side subsidies (Help to Buy), social housing directly expands the total housing stock, shifting supply rightward and exerting downward pressure on rents and prices across the entire market
• No capitalisation problem: Extract F notes Help to Buy inflated prices because demand increased without supply; social housing avoids this failure by adding supply rather than subsidising demand
• Macroeconomic benefits: construction of social housing generates employment and multiplier effects; government as direct commissioner can maintain build rates counter-cyclically when private housebuilders withdraw (as they do during downturns)
• Welfare economics case: housing is a merit good with positive externalities (health, educational attainment, social mobility) — market provision is persistently sub-optimal; government provision corrects this market failure

Case AGAINST social housing as single highest priority:
• Fiscal constraint: at 97% of GDP, UK national debt severely limits the scale of direct public expenditure; social housing at scale requires multi-billion pound annual investment; the OBR's fiscal rules constrain borrowing — the government cannot fund both social housing at scale and other public investment priorities
• Slow delivery: the government's 1.5 million home target over the Parliament requires planning reform to unlock; social housing alone cannot close the gap — 252,000 total completions against a 300,000 target (Extract E) illustrates delivery constraints that apply equally to social and private housebuilding
• Root cause analysis: the fundamental constraint is planning law and land supply — social housing bypasses this no more easily than private development; a 30-month average planning timeline (Extract E) applies regardless of tenure
• Land banking addresses a different failure: oligopolistic housebuilder behaviour (Extract E — Persimmon's 94,000 plot land bank) represents a market power failure that social housing provision does not directly address; competition policy (CMA investigation into housebuilders) or land value taxation (penalising unbuilt land) would be more targeted

Alternative policies comparison:
• Planning reform: relaxing green belt restrictions, streamlining permissions, and implementing a presumption in favour of sustainable development would unlock private building capacity without direct fiscal cost — potentially the highest-leverage single intervention
• Land value taxation: a tax on unimproved land value would penalise land banking, incentivising housebuilders to build out their land banks quickly; revenue could fund social housing
• Build-to-rent institutional investment: attracting pension funds and institutional investors to build large-scale rental housing at below-market rents (using government guarantees) scales up supply without full public expenditure

Conclusion:
Social housing expansion is an essential component of addressing the housing crisis, particularly for the most vulnerable 1.2 million waiting list households. However, making it the "highest priority" at the expense of planning reform would be a strategic mistake: the supply constraint is fundamentally a planning constraint, and no amount of public housebuilding can overcome a system that takes 30 months to grant permission and delivered only 218,000 permissions in 2023. The optimal policy is: planning reform as the highest priority (highest leverage, lowest fiscal cost) + targeted social housing for those the market will never serve + competition/land policy to address housebuilder market power.`,
          tip: 'This is a 22-mark synoptic question. Use both micro (market failure, supply restriction, negative externalities) and macro (fiscal policy, multiplier, AD/AS) frameworks. Compare social housing to at least TWO alternative policies. Your conclusion must say whether it should be the HIGHEST priority and why, not just whether it is a good idea.'
        }
      ]
    }
  }
}
