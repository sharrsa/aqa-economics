// AQA A-Level Economics — 15-Mark KAA Questions
// Format: analyse/evaluate questions from data response sections
// Mark scheme: L1(1-5) L2(6-9) L3(10-12) L4(13-15)

export const markScheme15 = {
  levels: [
    { level: 'L4', marks: '13–15', descriptor: 'Well-developed KAA with good evaluation. Logical chains of reasoning, relevant diagram correctly applied, evaluation addresses significance/context/limitations. Judgement is supported.' },
    { level: 'L3', marks: '10–12', descriptor: 'Some developed KAA with some evaluation. Analysis is mostly correct but may lack depth or full development. Evaluation present but may be limited or unsubstantiated.' },
    { level: 'L2', marks: '6–9',   descriptor: 'Limited KAA — some relevant knowledge applied but analysis is underdeveloped. Little or no evaluation. May describe rather than analyse.' },
    { level: 'L1', marks: '1–5',   descriptor: 'Basic knowledge only. Little application or analysis. No evaluation. Fragmented points without logical development.' },
  ],
  tips: [
    'Always define key terms in your first sentence — examiners reward precision',
    'Use a diagram and explicitly explain the shift/movement and welfare effect',
    'Each KAA paragraph: Point → Explain mechanism → Apply to context',
    'Evaluation must address WHY the effect may be different, limited, or conditional',
    'Use "However...", "The extent to which...", "This depends on..." to signal evaluation',
    'A concluding judgement gains L4 — be specific, not vague',
    'For 15 marks: aim for 2 developed KAA points + at least 2 evaluation points',
  ],
  aoWeighting: { AO1: '20%', AO2: '20%', AO3: '40%', AO4: '20%' },
}

export const fifteenMarkers = [

  // ═══════════════════════════════════════════════════════
  // PAPER 1 — MICROECONOMICS
  // ═══════════════════════════════════════════════════════

  {
    id: '15-p1-1',
    paper: 'Paper 1',
    topic: 'Market Failure',
    question: 'Analyse the likely economic effects of introducing a carbon tax on a market that generates negative externalities from production.',
    examTip: 'Draw the negative externality diagram (PMC vs SMC). Show the tax shifting PMC to SMC. Discuss both the efficiency gain AND the impact on consumers/producers.',
    diagramNote: 'Negative production externality diagram — show PMC shifting up to SMC after tax, with the reduction in output towards the social optimum and the elimination of DWL.',
    timeGuide: '20–22 minutes',
    sections: [
      {
        type: 'intro',
        heading: 'Introduction',
        content: 'A negative externality from production occurs when a firm\'s private marginal cost (PMC) is below the social marginal cost (SMC), because third parties bear costs — such as pollution damage — not reflected in the price. A Pigouvian carbon tax set equal to the marginal external cost (MEC) at the social optimum aims to internalise this externality.',
      },
      {
        type: 'point',
        heading: 'KAA Point 1 — Correction of market failure and efficiency gain',
        content: 'Before the tax, the free market produces where PMC = PMB (private demand), resulting in overproduction beyond the social optimum (where SMC = SMB). The vertical gap between SMC and PMC represents the marginal external cost — the damage inflicted on third parties per unit of output. A carbon tax equal to this MEC shifts PMC upward to coincide with SMC, raising the cost of production. Profit-maximising firms respond by reducing output to Q*, the social optimum. At this output, the deadweight welfare loss triangle — previously representing avoidable net social loss from excessive pollution — is eliminated. For example, the UK Emissions Trading Scheme (UK ETS) generated £2.4bn in auction revenue in 2023, funding green transition investment while reducing industrial carbon output.',
      },
      {
        type: 'point',
        heading: 'KAA Point 2 — Effects on price, consumers, and producers',
        content: 'The tax raises production costs, which firms partially or fully pass on to consumers through higher prices, depending on the price elasticity of demand (PED). If demand is inelastic (e.g. energy and fuel), the price rise is large and consumer surplus falls significantly — creating a regressive burden since lower-income households spend a higher proportion of income on energy. Producers face a profit squeeze: if they cannot fully pass on the tax (elastic demand), producer surplus falls. However, tax revenue can be recycled — for instance, through lump-sum rebates to households (as proposed under carbon dividend schemes) — partially compensating the regressive distributional impact.',
      },
      {
        type: 'eval',
        heading: 'Evaluation 1 — Setting the optimal tax rate is highly problematic',
        content: 'The Pigouvian tax is only welfare-improving if it is set equal to the true MEC at the social optimum. In practice, the marginal external cost of carbon is deeply uncertain — estimates range from £50 to £300 per tonne CO₂ — because it requires valuing intangible harms (biodiversity loss, human health, future climate risks). If the tax is set too low, output is still above the social optimum; too high, and the market under-produces, creating a new welfare loss. This measurement difficulty means the tax may cause government failure, potentially worse than the original market failure.',
      },
      {
        type: 'eval',
        heading: 'Evaluation 2 — Effectiveness depends on price elasticity and global competitiveness',
        content: 'If demand for the taxed good is highly inelastic — for instance, aviation fuel or industrial energy without ready substitutes — the output reduction will be small even with a high tax rate, limiting the allocative efficiency gain. Furthermore, a unilateral carbon tax can cause "carbon leakage": domestic firms relocate production to countries without equivalent carbon pricing (e.g. pre-2026 non-ETS economies), leaving global emissions unchanged while damaging UK industrial competitiveness. The EU\'s Carbon Border Adjustment Mechanism (CBAM, phased in from 2026) addresses this, but unilateral action remains a significant constraint.',
      },
      {
        type: 'conclusion',
        heading: 'Conclusion',
        content: 'A carbon tax can significantly improve allocative efficiency by reducing overproduction of goods with negative externalities, eliminating deadweight welfare loss and raising revenue for redistribution. However, the effect depends critically on the accuracy of the tax rate, the price elasticity of demand for the taxed good, and whether trading partners adopt equivalent policies. Without international coordination, the efficiency gains domestically may be offset by carbon leakage globally.',
      },
    ],
  },

  {
    id: '15-p1-2',
    paper: 'Paper 1',
    topic: 'Labour Markets',
    question: 'Analyse the likely effects of an increase in the National Living Wage on workers and firms in low-wage labour markets.',
    examTip: 'Draw both the competitive labour market diagram AND the monopsony diagram — they give opposite predictions. This contrast is your best source of evaluation.',
    diagramNote: 'Competitive LM: wage floor above equilibrium → unemployment gap (Qd-Qs). Monopsony LM: minimum wage up to competitive wage → both wages and employment can rise simultaneously.',
    timeGuide: '20–22 minutes',
    sections: [
      {
        type: 'intro',
        heading: 'Introduction',
        content: 'The National Living Wage (NLW) is a statutory wage floor set above the market equilibrium for workers aged 21+, reaching £12.21 per hour from April 2025. In standard competitive labour market theory, a binding wage floor above the equilibrium wage creates unemployment. However, the real-world impact depends critically on the degree of employer market power.',
      },
      {
        type: 'point',
        heading: 'KAA Point 1 — Competitive model: unemployment and higher incomes for those in work',
        content: 'In a competitive labour market, the equilibrium wage is set by the intersection of labour demand (MRP) and labour supply. If the NLW is set above W*, the quantity of labour demanded falls (firms reduce hours and headcount as labour costs rise) while the quantity of labour supplied rises (higher wages attract more workers). The resulting gap (Qs > Qd) represents unemployment — some workers lose jobs or have hours cut. For those who remain employed, real incomes rise, boosting consumption and living standards. Firms respond to higher labour costs by seeking to substitute capital for labour (automation), raising prices, or accepting lower profit margins — all of which can reduce employment further.',
      },
      {
        type: 'point',
        heading: 'KAA Point 2 — Monopsony model: wages and employment may both rise',
        content: 'Many low-wage sectors (care work, retail, cleaning) exhibit monopsony features — a small number of large employers (supermarkets, care chains) dominate hiring in local labour markets, giving them wage-setting power. A monopsonist sets employment where MRP = MLC (marginal labour cost), which lies above the labour supply curve, resulting in wages below the competitive equilibrium and employment below the efficient level — exploiting workers. A minimum wage set up to the competitive wage corrects this by removing the monopsonist\'s ability to set wages below the market rate. Employment and wages can both rise simultaneously — exactly the finding of Card and Krueger\'s seminal 1994 study of US fast food workers.',
      },
      {
        type: 'eval',
        heading: 'Evaluation 1 — Effect depends heavily on sector and firm size',
        content: 'The impact varies dramatically across sectors. Large firms with thin margins and high labour intensity (e.g. fast food, hospitality) face higher cost pressures than capital-intensive industries. Small businesses may be more adversely affected than large corporations — the Resolution Foundation (2024) found that micro-businesses employing fewer than 10 workers are at greatest risk of employment reduction from NLW increases. Conversely, sectors with inelastic product demand (residential care, childcare) can pass wage costs on as higher prices, limiting job losses — but this can reduce access for lower-income consumers.',
      },
      {
        type: 'eval',
        heading: 'Evaluation 2 — Second-round effects and labour productivity',
        content: 'Higher wages can trigger efficiency wage effects: firms may benefit from reduced worker turnover (recruitment and training costs fall), higher motivation, and greater productivity — partially offsetting the increased wage bill. The Low Pay Commission found evidence of productivity gains following NLW increases, particularly in sectors with high turnover rates. However, if wage increases are not matched by productivity improvements, firms facing elastic product demand may relocate offshore or invest in automation — Amazon\'s fulfilment centres and McDonald\'s self-ordering kiosks illustrate this substitution effect at scale.',
      },
      {
        type: 'conclusion',
        heading: 'Conclusion',
        content: 'The NLW unambiguously raises wages for those in work, improving living standards for the lowest paid. Whether employment falls depends crucially on the degree of monopsony power (lower job losses where monopsony is significant), price elasticity of demand for the product (lower losses where demand is inelastic), and firms\' ability to improve productivity. Overall, evidence suggests that modest NLW increases in the UK have not caused significant job losses, though larger future increases — particularly in more competitive sectors — carry greater risk.',
      },
    ],
  },

  {
    id: '15-p1-3',
    paper: 'Paper 1',
    topic: 'Market Structures',
    question: 'Analyse the economic effects of a firm operating as a monopoly compared to the same market under perfect competition.',
    examTip: 'The monopoly vs perfect competition diagram is essential here. Show the welfare loss triangle and the difference in output and price. Remember dynamic efficiency is a key counter-argument.',
    diagramNote: 'Monopoly diagram: show PMC = MR giving Qm < Qpc, Pm > Ppc. Mark consumer surplus loss, deadweight welfare loss triangle, and transfer of surplus to producer.',
    timeGuide: '20–22 minutes',
    sections: [
      {
        type: 'intro',
        heading: 'Introduction',
        content: 'A monopoly is a market structure with a single dominant producer facing the entire market demand curve. Unlike perfect competition — where firms are price-takers and P = MC — a monopolist is a price-maker that restricts output to maximise profit. The welfare consequences of monopoly relative to competition can be analysed using surplus analysis and efficiency criteria.',
      },
      {
        type: 'point',
        heading: 'KAA Point 1 — Allocative and productive inefficiency',
        content: 'Under perfect competition, long-run equilibrium occurs where P = MC = minimum AC — both allocatively efficient (P = MC, so the value consumers place on the last unit equals its cost) and productively efficient (output at minimum LRAC). A profit-maximising monopolist equates MR = MC, but because it faces a downward-sloping demand curve, MR < AR (price) at every output. Setting MR = MC gives a lower output Qm and higher price Pm than the competitive outcome. At Qm, P > MC — consumers value the marginal unit more than it costs to produce — creating a deadweight welfare loss triangle. This represents the net social loss from under-production: mutually beneficial transactions that do not take place. The monopolist also has less incentive to minimise costs (X-inefficiency, Leibenstein 1966) as competitive pressure is absent.',
      },
      {
        type: 'point',
        heading: 'KAA Point 2 — Consumer and producer surplus redistribution',
        content: 'The monopoly outcome involves a redistribution of surplus from consumers to producers. The higher price Pm > Ppc means consumers lose surplus — part of this is transferred to the monopolist as higher profit (the rectangle between Ppc and Pm, from 0 to Qm) and part is lost entirely (the DWL triangle). For consumers on fixed or low incomes who spend a high proportion of income on monopoly-supplied necessities (energy, water), this transfer represents a significant equity concern. The CMA\'s 2024 investigation into petrol retail found major supermarkets earning sustained above-normal margins — a classic indicator of monopoly profit extraction.',
      },
      {
        type: 'eval',
        heading: 'Evaluation 1 — Dynamic efficiency may offset static inefficiency',
        content: 'The standard welfare analysis is static — it captures the efficiency loss at one point in time. A counter-argument is that monopoly supernormal profits fund R&D and innovation that generate dynamic efficiency over time. Schumpeter\'s "creative destruction" argues that the prospect of monopoly profits drives innovation (the incentive to innovate is the temporary monopoly rent). Pharmaceutical monopolies protected by patents — while statically inefficient — provide the financial returns that fund drug development. If competition would erode margins and reduce R&D budgets, the long-run welfare loss from competition could exceed the short-run gain. This is the key argument for patent protection.',
      },
      {
        type: 'eval',
        heading: 'Evaluation 2 — Natural monopoly and economies of scale',
        content: 'In industries with very high fixed costs (water networks, railways), a monopoly may achieve economies of scale that make it more productively efficient than multiple competing firms. If the LRAC is still declining at the market output, splitting into competing firms would increase average costs — so the natural monopoly produces at lower LRAC than the competitive alternative. This is why utility companies are often regulated monopolies rather than broken up. The relevant policy question then becomes not "monopoly vs. competition" but "how should the monopoly be regulated?" — highlighting that the simple welfare loss framework overstates the case for mandatory competition.',
      },
      {
        type: 'conclusion',
        heading: 'Conclusion',
        content: 'Monopoly is typically allocatively and productively inefficient relative to perfect competition, generating a welfare loss and redistributing surplus from consumers to the monopolist. However, the welfare loss analysis assumes comparable cost structures, which may not hold if the monopoly benefits from significant economies of scale. Dynamic efficiency — the innovation incentive from supernormal profits — may offset static losses over time. The net welfare comparison depends on the specific industry, cost structure, and regulatory environment.',
      },
    ],
  },

  {
    id: '15-p1-4',
    paper: 'Paper 1',
    topic: 'Market Failure',
    question: 'Analyse the likely economic effects of a government imposing a maximum (ceiling) price on rented housing in a major city.',
    examTip: 'Rent control is a classic maximum price question. Show the shortage (Qd > Qs), black markets, and long-run supply contraction. Evaluation: who benefits, who loses, time horizon matters.',
    diagramNote: 'Maximum price diagram: ceiling below equilibrium → Qd > Qs (shortage shown by horizontal gap). Also note the long-run supply shift leftward as landlords exit the market.',
    timeGuide: '20–22 minutes',
    sections: [
      {
        type: 'intro',
        heading: 'Introduction',
        content: 'A maximum (ceiling) price set below the free market equilibrium is a government price control designed to keep prices affordable. For rental housing — where supply is constrained by planning restrictions and demand is rising due to urban migration — a rent ceiling aims to protect tenants from unaffordable rents. However, standard economic theory predicts significant unintended consequences.',
      },
      {
        type: 'point',
        heading: 'KAA Point 1 — Shortage and misallocation of housing',
        content: 'At the ceiling price Pc (below the market equilibrium Pe), quantity demanded (Qd) exceeds quantity supplied (Qs) — a persistent shortage of rental properties. Some tenants who want to rent at Pc cannot find a property, while others who value housing less continue to occupy it (because moving is costly). This misallocation means housing is not necessarily occupied by those who value it most (allocative inefficiency). Non-price rationing mechanisms emerge: landlords favour tenants with good references, steady employment, or social connections — potentially discriminating against younger, migrant, or lower-income tenants who the policy was designed to help. Black markets can develop where landlords charge unofficial "key money" or service charges above the legal rent.',
      },
      {
        type: 'point',
        heading: 'KAA Point 2 — Long-run supply contraction',
        content: 'In the short run, the supply of rental housing is relatively inelastic — landlords cannot easily switch properties to other uses. The impact of the ceiling is mainly a shortage. However, in the long run, the supply of rental properties is more elastic. Below-market rents reduce the rate of return on buy-to-let investment. Landlords face three options: sell the property (reducing the rental stock), convert to short-term lets (Airbnb, which may be exempt from controls), or under-invest in maintenance — allowing properties to deteriorate. The long-run supply curve shifts leftward as the rental stock contracts, worsening the shortage over time. This is evidenced by the experience of cities with long-standing rent controls: Stockholm maintained strict rent regulation for decades, resulting in a chronically undersupplied rental market with average waits of 10–20 years for a regulated-price flat.',
      },
      {
        type: 'eval',
        heading: 'Evaluation 1 — Short-run benefits for existing tenants',
        content: 'In the short run, existing tenants in controlled properties benefit unambiguously: they pay lower rents and have more disposable income. For low-income tenants in high-cost cities (London, where average rents reached £2,600/month in 2024), this income effect is substantial — reducing the risk of displacement and allowing spending on other necessities. The political economy of rent control reflects this: existing tenants form a powerful lobby. The policy may be judged equitable by distributional criteria even if it is inefficient by allocative criteria.',
      },
      {
        type: 'eval',
        heading: 'Evaluation 2 — Effectiveness depends on enforcement and coverage',
        content: 'Rent controls only achieve their stated goal if enforced and comprehensively applied. If large landlords (institutional investors, corporate property companies) are exempted, the policy may reduce supply in the regulated sector while pushing demand into the unregulated sector, raising prices there. New construction is typically exempted (to preserve investment incentives), so controls apply only to the existing stock — which contracts over time. The long-run elasticity of rental supply determines how severe the supply contraction will be: in cities where planning is highly restrictive and alternative uses for residential property are limited (as in London), the supply response may be smaller, making short-run controls less harmful.',
      },
      {
        type: 'conclusion',
        heading: 'Conclusion',
        content: 'A rent ceiling below the market equilibrium creates an immediate shortage of rental properties and — through distorted investment incentives — a long-run contraction in supply, potentially worsening the affordability problem it aims to solve. However, existing tenants gain real income benefits in the short run, and the policy may be justified on equity grounds in cities where housing unaffordability constitutes a genuine market failure (due to planning restrictions limiting supply). A more effective long-run intervention is supply-side reform — relaxing planning restrictions to increase housing supply at the equilibrium price.',
      },
    ],
  },

  // ═══════════════════════════════════════════════════════
  // PAPER 2 — MACROECONOMICS
  // ═══════════════════════════════════════════════════════

  {
    id: '15-p2-1',
    paper: 'Paper 2',
    topic: 'Monetary Policy',
    question: 'Analyse the likely effects of a rise in the Bank of England\'s Bank Rate on the UK economy.',
    examTip: 'Use the AD/AS framework. Rate rise → lower C and I → AD shifts left → lower output and inflation. Then bring in the exchange rate channel. Evaluate: who is most affected? Time lags?',
    diagramNote: 'AD/AS diagram: rate rise shifts AD left from AD₁ to AD₂, showing fall in real GDP (Y₁ to Y₂) and price level (PL₁ to PL₂). Can also show starting from inflationary gap.',
    timeGuide: '20–22 minutes',
    sections: [
      {
        type: 'intro',
        heading: 'Introduction',
        content: 'The Bank Rate is the interest rate at which the Bank of England lends to commercial banks overnight, and it serves as the benchmark for borrowing and saving rates throughout the economy. Changes in Bank Rate operate through several transmission channels to affect aggregate demand, output, employment, and the price level. The Bank raised Bank Rate from 0.1% to 5.25% between December 2021 and August 2023 in response to post-pandemic inflation reaching 11.1% in October 2022.',
      },
      {
        type: 'point',
        heading: 'KAA Point 1 — Interest rate channel: reduced consumption and investment',
        content: 'A rise in Bank Rate increases commercial banks\' funding costs, which they pass on through higher mortgage rates, personal loan rates, and business borrowing rates. For the ~8 million UK households with variable-rate or tracker mortgages (plus those remortgaging from fixed deals), higher rates raise monthly repayments — reducing disposable income and consumer spending (C). For firms, higher borrowing costs raise the hurdle rate for capital investment projects: schemes that were profitable at 3% interest may become unprofitable at 6%, reducing business investment (I). Since C and I are components of aggregate demand (AD = C + I + G + X − M), AD shifts leftward, reducing equilibrium real output and the price level. The Office for Budget Responsibility estimated that the 2022–23 rate rises would reduce household disposable income by an average of £2,900 per year by 2025.',
      },
      {
        type: 'point',
        heading: 'KAA Point 2 — Exchange rate channel: currency appreciation and trade effects',
        content: 'Higher UK interest rates increase the rate of return on sterling-denominated assets relative to foreign assets, attracting hot money inflows from global investors. This increases demand for sterling on the foreign exchange market, causing sterling to appreciate. A stronger pound means UK exports become more expensive in foreign currency (reducing export volumes, X↓) while imports become cheaper in sterling (increasing import volumes, M↑). Both effects reduce net exports (X−M), further shifting AD leftward. In addition, cheaper imports directly reduce the domestic price level, helping bring inflation down — the import price channel. Sterling appreciated approximately 5% on a trade-weighted basis between December 2021 and late 2023.',
      },
      {
        type: 'eval',
        heading: 'Evaluation 1 — Unequal distributional impact across households',
        content: 'The effect of a rate rise is highly heterogeneous. Variable-rate mortgage holders are immediately and heavily affected; renters face indirect effects as landlords pass through higher buy-to-let mortgage costs; outright homeowners and savers benefit from higher returns on savings accounts. Young households — more likely to have recently taken out large mortgages — bear a disproportionate burden. Lower-income households typically have lower financial buffers, making them more vulnerable to income shocks. The Bank of England estimated in 2023 that around 1.4 million UK households faced payment increases of over £500 per month when remortgaging — a significant demand shock concentrated in specific demographics.',
      },
      {
        type: 'eval',
        heading: 'Evaluation 2 — Significant and variable time lags reduce effectiveness',
        content: 'Monetary policy operates with long and variable lags — the MPC itself acknowledges that the full effect of a rate change takes 18–24 months to feed through to inflation. During this lag period, the economy continues to operate at the pre-change level, meaning rate rises made in 2022 may have been overcautious relative to conditions in 2024 (when inflation had already fallen to 2.2%). If rates are kept too high for too long (over-tightening), the economy risks recession and unnecessary unemployment. Conversely, if rates are cut too soon, inflation may re-accelerate. This uncertainty — compounded by external shocks like energy prices — makes calibrating monetary policy extremely difficult.',
      },
      {
        type: 'conclusion',
        heading: 'Conclusion',
        content: 'A Bank Rate rise reduces aggregate demand through multiple channels — lower consumption, reduced investment, and an appreciation of sterling that reduces net exports — thereby reducing inflationary pressure. However, the distributional impact is unequal (hardest on mortgage holders and younger households) and the effect on real output can be severe if rates are set too high or held too long given the 18–24 month transmission lag. The Bank Rate is most effective at controlling demand-pull inflation but less effective against cost-push inflation driven by external supply shocks, where raising rates risks causing stagflation.',
      },
    ],
  },

  {
    id: '15-p2-2',
    paper: 'Paper 2',
    topic: 'Fiscal Policy',
    question: 'Analyse the likely effects of an increase in government spending on infrastructure on the UK macroeconomy.',
    examTip: 'Use the AD/AS model. Infrastructure spending shifts AD (short-run) AND LRAS (long-run). The multiplier and crowding-out debate are the core evaluation points.',
    diagramNote: 'Two-diagram approach: (1) AD/AS showing AD shift right (short run effect). (2) AD/AS showing LRAS shift right (long run supply-side effect from improved productive capacity).',
    timeGuide: '20–22 minutes',
    sections: [
      {
        type: 'intro',
        heading: 'Introduction',
        content: 'Infrastructure spending encompasses government investment in transport networks, digital connectivity, energy systems, and water infrastructure. Unlike current government spending (wages, transfers), infrastructure investment directly augments the economy\'s productive capacity. It therefore has both demand-side effects (in the short run, through the multiplier) and supply-side effects (in the long run, through higher productive potential).',
      },
      {
        type: 'point',
        heading: 'KAA Point 1 — Short-run demand-side effect via the multiplier',
        content: 'An increase in government infrastructure spending (G↑) directly increases aggregate demand, shifting the AD curve rightward. The initial injection is amplified through the Keynesian multiplier: government spending creates jobs and income for construction workers, engineers, and suppliers, who in turn spend a proportion of their additional income (the MPC), creating further rounds of spending. The multiplier (k = 1/1−MPC, adjusted for tax and import leakage) means the total increase in national income exceeds the initial injection. For example, if the government spends £10bn on a new rail link, and the multiplier is 1.5, national income rises by £15bn. This is particularly powerful when the economy has spare capacity (a negative output gap), as the spending can raise real output rather than just prices.',
      },
      {
        type: 'point',
        heading: 'KAA Point 2 — Long-run supply-side effect on productive capacity',
        content: 'Infrastructure investment directly shifts the Long-Run Aggregate Supply (LRAS) curve rightward by expanding the economy\'s productive potential. Improved transport networks reduce logistic costs for businesses, allowing them to operate more efficiently — a direct reduction in the unit cost of production. Digital infrastructure (broadband, 5G) enables businesses to adopt productivity-enhancing technologies. Energy infrastructure (grid upgrades, renewable capacity) ensures reliable, lower-cost energy for industry. These supply-side improvements shift LRAS rightward, allowing higher real GDP at any given price level — supporting the "levelling up" agenda and reducing regional economic disparities. The UK\'s National Infrastructure Commission estimated that inadequate infrastructure costs the economy approximately 1% of GDP per year in lost productivity.',
      },
      {
        type: 'eval',
        heading: 'Evaluation 1 — Crowding out of private investment',
        content: 'A potential counter-effect is financial crowding out. If the government finances infrastructure spending through borrowing, it issues bonds — increasing the supply of bonds and pushing bond prices down, raising yields (interest rates). Higher interest rates increase the cost of borrowing for private firms, deterring private investment. The net effect on AD may therefore be smaller than the initial injection suggests — the private investment (I) component partially offsets the increase in G. The extent of crowding out depends on the state of the economy: at the zero lower bound (where interest rates are already near zero and monetary policy is constrained), crowding out is minimal — as the Bank of England can hold rates stable. In a high-rate environment (UK Bank Rate at 4.75% in 2024), the crowding-out effect is more significant.',
      },
      {
        type: 'eval',
        heading: 'Evaluation 2 — Time lags and implementation risks',
        content: 'Infrastructure projects have very long lead times: planning, procurement, and construction for major projects (HS2, Thames Tideway, Hinkley Point C) take decades. The macroeconomic stimulus may arrive too late to address the current economic cycle — and may even aggravate inflationary pressures if it reaches the economy when output is already near potential. Cost overruns are endemic: HS2 Phase 1 costs escalated from £37.5bn (2015 estimate) to over £67bn by 2023, with Phase 2 cancelled, reducing the projected supply-side benefit. Additionally, the supply-side effect depends on infrastructure being in the right place (e.g. improving connectivity for underperforming regions rather than already-congested areas).',
      },
      {
        type: 'conclusion',
        heading: 'Conclusion',
        content: 'Infrastructure spending increases aggregate demand in the short run through the multiplier, and expands productive capacity in the long run by shifting LRAS rightward — achieving both growth and reduced inflationary pressure simultaneously, unlike demand-side fiscal expansion alone. However, the size of the multiplier depends on the output gap and import leakage; crowding out reduces the net demand effect in a high-interest-rate environment; and the long-run supply benefits depend entirely on projects being delivered on time, within budget, and in locations that genuinely improve economy-wide productivity.',
      },
    ],
  },

  {
    id: '15-p2-3',
    paper: 'Paper 2',
    topic: 'International Trade',
    question: 'Analyse the likely effects of a significant depreciation of the pound sterling on the UK economy.',
    examTip: 'Cover the Marshall-Lerner condition and J-curve for the trade balance. Use AD/AS to show the inflationary effect. Evaluate: net effect depends on elasticities and time horizon.',
    diagramNote: 'J-curve diagram showing current account balance over time post-depreciation (initial worsening then improvement). Separately: AD/AS showing AD shifting right (net exports rise) but SRAS shifting left (import costs raise firms\' costs).',
    timeGuide: '20–22 minutes',
    sections: [
      {
        type: 'intro',
        heading: 'Introduction',
        content: 'A depreciation of sterling means the pound buys fewer units of foreign currency — exports become cheaper in foreign currency while imports become more expensive in pounds. The net effect on the UK economy depends on the price elasticity of demand for exports and imports (the Marshall-Lerner condition), the time horizon (the J-curve effect), and the state of the economy when the depreciation occurs. Sterling depreciated approximately 15% against the dollar following the June 2016 Brexit referendum result.',
      },
      {
        type: 'point',
        heading: 'KAA Point 1 — Effects on the current account and aggregate demand',
        content: 'A depreciation lowers the price of UK exports in foreign currency, making them more competitive internationally (assuming UK firms hold foreign currency prices down and expand volumes). Simultaneously, imports become more expensive in sterling, reducing import volumes as consumers switch to domestically produced alternatives. If the sum of the price elasticity of demand for exports and imports exceeds 1 in absolute value (the Marshall-Lerner condition), the volume effects dominate the price effects and the trade balance (X−M) improves over time. This improvement in net exports (NX↑) shifts aggregate demand rightward, raising equilibrium real output and employment — stimulating the economy. However, the J-curve effect predicts that the current account initially worsens (because contracts are fixed and quantities are slow to adjust) before improving, typically after 12–18 months.',
      },
      {
        type: 'point',
        heading: 'KAA Point 2 — Inflationary pressure and real income squeeze',
        content: 'Import price inflation is the most immediate domestic effect. The UK imports approximately 40% of its food, most of its consumer electronics, and a significant share of its energy. A sterling depreciation raises import costs for all these goods, directly increasing the CPI (cost-push inflation). Firms that use imported raw materials or components (the UK manufacturing sector imports over 60% of inputs) face higher production costs, shifting SRAS leftward and squeezing profit margins. The post-Brexit depreciation raised annual food price inflation by an estimated 2–3 percentage points by 2017. This import price shock reduces real household incomes, lowering living standards — particularly for lower-income households who spend a larger share of income on food and energy.',
      },
      {
        type: 'eval',
        heading: 'Evaluation 1 — Marshall-Lerner may not hold in the short run',
        content: 'Even if the long-run condition is met, in the short run demand for exports and imports is typically inelastic — exporters take time to expand capacity, and importers cannot immediately substitute domestic products for foreign ones. This means the current account initially worsens post-depreciation (the J-curve). During the 2016 Brexit depreciation, UK export volumes actually fell slightly in the 12 months following — partly because UK firms chose to increase sterling profit margins rather than cut foreign-currency prices (pricing-to-market behaviour). The trade deficit persisted. The J-curve delay can last longer than expected, especially for a service-dominated economy like the UK where tradeable services have complex, relationship-dependent export processes.',
      },
      {
        type: 'eval',
        heading: 'Evaluation 2 — Net effect depends on the state of the macroeconomy',
        content: 'Whether a depreciation is net beneficial depends on the economic context. If the economy is below potential (negative output gap), the boost to net exports helps close the gap without severe inflation — the demand stimulus is broadly welcome. If the economy is already at or above potential (positive output gap, as in late 2021–22 when the UK experienced high demand and supply chain disruptions simultaneously), the demand boost from depreciation adds to inflationary pressure, worsening the stagflation problem. The Bank of England may then need to raise interest rates to counteract the inflationary effect, partially negating the demand benefit. The net effect is also diminished if the UK\'s export mix is dominated by services (tourism, financial services) where price competitiveness matters less than quality and relationships.',
      },
      {
        type: 'conclusion',
        heading: 'Conclusion',
        content: 'A sterling depreciation improves UK export competitiveness and stimulates aggregate demand through higher net exports — subject to the Marshall-Lerner condition being met over time and the J-curve delay in volume adjustment. However, it simultaneously generates cost-push inflation through higher import prices, squeezing real household incomes. The net effect on the economy is ambiguous: broadly beneficial when there is spare capacity and inflation is below target, but potentially harmful when the economy is already at or near full employment, as it may worsen inflationary conditions without significantly boosting real output.',
      },
    ],
  },

  {
    id: '15-p2-4',
    paper: 'Paper 2',
    topic: 'Unemployment',
    question: 'Analyse the likely effects of supply-side policies on unemployment and economic growth in the long run.',
    examTip: 'Distinguish between market-based and interventionist supply-side policies. Use LRAS diagram. Key evaluation: time lags are very long, not all supply-side policies work equally, and distribution of benefits matters.',
    diagramNote: 'LRAS diagram: supply-side policies shift LRAS rightward, increasing potential GDP from Y₁ to Y₂ at a stable or lower price level — contrasting with AD expansion that raises prices.',
    timeGuide: '20–22 minutes',
    sections: [
      {
        type: 'intro',
        heading: 'Introduction',
        content: 'Supply-side policies aim to increase the productive capacity of the economy by improving the quantity and quality of factor inputs, reducing market imperfections, and enhancing the incentive to work, invest, and innovate. Unlike demand-side policies, which manage AD in the short run, supply-side policies shift the Long-Run Aggregate Supply (LRAS) curve rightward — raising potential GDP without creating inflationary pressure. They address structural unemployment (caused by skills mismatches) and cyclical constraints on growth.',
      },
      {
        type: 'point',
        heading: 'KAA Point 1 — Education, training, and human capital investment',
        content: 'Structural unemployment arises when workers\' skills do not match available jobs — a growing problem as deindustrialisation has eliminated traditional manufacturing roles while the digital economy requires new competencies. Government investment in education (expanding STEM qualifications, further education colleges, apprenticeship programmes) builds human capital — increasing the productivity, adaptability, and employability of the labour force. Higher productivity shifts LRAS rightward: the same quantity of labour now produces more output. The UK\'s Apprenticeship Levy (£2.5bn annual fund) and T-levels are examples of interventionist supply-side policy targeting structural unemployment. By reducing frictional and structural unemployment, education policy also lowers the Non-Accelerating Inflation Rate of Unemployment (NAIRU) — meaning the economy can sustain lower unemployment without triggering inflationary wage demands.',
      },
      {
        type: 'point',
        heading: 'KAA Point 2 — Market-based supply-side: deregulation and tax reform',
        content: 'Market-based supply-side policies remove barriers to labour market flexibility and business investment. Reducing income tax rates increases the incentive to work (substitution effect) and can raise labour supply, expanding the effective workforce. Cutting corporation tax reduces the cost of capital, encouraging both domestic investment and foreign direct investment (FDI) — the UK cut corporation tax from 28% in 2010 to 19% in 2017, partly to attract FDI. Deregulation removes red tape that impedes new business formation: the World Bank\'s "Doing Business" index shows that reducing time-to-incorporate from 4 weeks to 1 week raises business formation rates and employment. These policies shift LRAS rightward by increasing productive potential rather than demand.',
      },
      {
        type: 'eval',
        heading: 'Evaluation 1 — Very long time lags reduce short-run effectiveness',
        content: 'The defining weakness of supply-side policy is its time horizon. Education reforms take 10–20 years to improve workforce quality at scale: a 16-year-old starting a T-level in 2024 enters the workforce in 2027 at the earliest. Infrastructure investment takes decades to plan and deliver. This means supply-side policies are ineffective responses to cyclical unemployment in a recession — they cannot address the immediate demand deficiency. Governments facing short electoral cycles often underinvest in long-term supply-side reforms because the political payoff is too distant. Tax cuts provide a faster boost to incentives but are limited by fiscal constraints.',
      },
      {
        type: 'eval',
        heading: 'Evaluation 2 — Effects may increase inequality and not benefit all workers equally',
        content: 'Market-based supply-side policies may worsen inequality even as they raise aggregate output. Income tax cuts predominantly benefit higher-income earners; deregulation reduces employment protections for low-wage workers (zero-hours contracts, gig economy); privatisation can lead to higher prices for essential services. If productivity gains accrue mainly to capital-owners and high-skilled workers while structural unemployment persists among low-skilled workers, aggregate LRAS growth is accompanied by rising income inequality — worsening poverty despite higher GDP. Human capital interventions (education, training) are more equitable but require sustained public expenditure that constrains the government\'s fiscal position. The trade-off between efficiency (market-based) and equity (interventionist) supply-side approaches is a central policy debate.',
      },
      {
        type: 'conclusion',
        heading: 'Conclusion',
        content: 'Supply-side policies are the most sustainable long-run approach to reducing structural unemployment and supporting non-inflationary growth, because they shift LRAS rather than simply boosting demand. Human capital investment addresses skills mismatches directly; deregulation and tax incentives improve market efficiency and investment. However, the very long time lags mean supply-side policy cannot address cyclical unemployment in the short run, requiring complementary demand-side intervention during recessions. The benefits may also be unevenly distributed unless interventionist (education, training) rather than purely market-based approaches are prioritised.',
      },
    ],
  },
]
