// ============================================================
// AQA A-Level Economics — Key Laws & Legislation
// Organised by category with exam relevance explained.
// ============================================================

export const keyLaws = [

  // ══════════════════════════════════════════════════════════
  // COMPETITION & MARKET POWER
  // ══════════════════════════════════════════════════════════
  {
    id: 'competition-act-1998',
    name: 'Competition Act 1998',
    year: 1998,
    categories: ['competition', 'micro'],
    summary: 'The primary UK law prohibiting anti-competitive behaviour. It has two core chapters: Chapter I bans agreements that restrict competition; Chapter II bans abuse of a dominant market position.',
    provisions: [
      'Chapter I: prohibits agreements between firms that prevent, restrict or distort competition — covers price-fixing cartels, market sharing, bid rigging, and output limitations',
      'Chapter II: prohibits a firm with dominant market power (typically 40%+ market share) from abusing that position through predatory pricing, exclusive dealing, or tying',
      'CMA can impose fines of up to 10% of a firm\'s global annual turnover for infringements',
      'Leniency programme: the first cartel member to confess receives immunity from fines',
      'Private damages: third parties harmed by anti-competitive conduct can sue for compensation',
    ],
    examRelevance: `This law is directly relevant to any question about monopoly, oligopoly, or competition policy. When evaluating whether a monopolist or oligopoly "serves consumers well," you can reference the Competition Act as the primary regulatory tool. The CMA's power to investigate and fine firms (up to 10% of global turnover) is the main deterrent against the abuse of market power identified in diagram analysis.

Key exam use: when discussing whether government intervention effectively corrects monopoly market failure, the Competition Act represents the UK's principal instrument — compare it to price regulation (Ofgem, Ofwat) and structural remedies (forced break-up). Note that the Act prohibits behaviour, not market structure — dominance itself is not illegal, only its abuse.`,
    keyFact: 'The CMA fined Pfizer and Flynn Pharma £70 million in 2016 for raising the price of an epilepsy drug by 2,600% after acquiring a dominant position.',
    examTopics: ['Monopoly', 'Oligopoly', 'Competition Policy', 'Market Power', 'CMA', 'Government Intervention'],
    paperRelevance: 'Paper 1 (Section B essays on monopoly, oligopoly)',
  },

  {
    id: 'enterprise-act-2002',
    name: 'Enterprise Act 2002',
    year: 2002,
    categories: ['competition', 'micro'],
    summary: 'Created the modern merger control regime and introduced criminal penalties for cartel activity. Established the Office of Fair Trading (OFT) and Competition Commission, later merged into the CMA (2014).',
    provisions: [
      'Merger control: mergers where combined UK turnover exceeds £70m, or where the merged entity would have 25%+ market share, are subject to CMA review',
      'CMA can block mergers that "substantially lessen competition" or impose behavioural/structural remedies',
      'Criminal cartel offence: individuals (not just firms) can be imprisoned for up to 5 years for dishonest participation in a cartel',
      'Market investigation references: CMA can investigate entire market structures even without specific anti-competitive conduct',
    ],
    examRelevance: `Relevant to merger analysis and the evaluation of oligopoly structures. When assessing whether a monopoly or oligopoly causes harm, you can note that the Enterprise Act gives the CMA power to block mergers before concentration becomes entrenched — a prospective remedy. The criminal cartel offence (prison sentences) raises the cost of price-fixing beyond financial penalties.

Key exam use: in oligopoly essays, note that the Enterprise Act's merger control prevents the creation of new dominant positions — but cannot reverse existing concentration (it is forward-looking, not retrospective). The CMA's blocking of the Sainsbury's/Asda merger (2019) is a real-world example of the Act in action.`,
    keyFact: 'The CMA blocked the proposed Sainsbury\'s/Asda merger in 2019 under the Enterprise Act, finding it would substantially lessen competition in local grocery and fuel markets.',
    examTopics: ['Oligopoly', 'Merger Control', 'Competition Policy', 'CMA', 'Market Structure'],
    paperRelevance: 'Paper 1 (oligopoly, competition policy questions)',
  },

  {
    id: 'digital-markets-act-2024',
    name: 'Digital Markets, Competition and Consumers Act 2024',
    year: 2024,
    categories: ['competition', 'micro'],
    summary: 'Gives the CMA new powers to regulate large digital platforms (those designated as having "Strategic Market Status"). Prohibits self-preferencing, mandates interoperability, and allows the CMA to impose bespoke conduct rules without proving anti-competitive abuse first.',
    provisions: [
      'Strategic Market Status (SMS) designation: CMA can designate firms with entrenched market power in a digital activity — triggers enhanced obligations',
      'Conduct requirements: SMS firms cannot unfairly favour their own products or services over rivals on their platforms (self-preferencing ban)',
      'Interoperability requirements: SMS firms may be required to allow third-party apps to work seamlessly with their services',
      'Merger reporting: SMS firms must notify the CMA of all acquisitions (closes the "killer acquisitions" loophole)',
      'Consumer protection: new powers to tackle subscription traps, fake reviews, and drip pricing',
    ],
    examRelevance: `The most important recent piece of competition legislation. Relevant to any question about regulation of digital monopolies, tech market power, or whether breaking up big tech firms is the right approach. The Act represents an alternative to structural break-up — imposing ex ante (before harm) behavioural obligations on dominant platforms rather than waiting for abuse to occur and then fining.

Key exam use: when evaluating whether Google, Meta, or Amazon should be broken up, argue that the DMCC Act provides a less value-destroying alternative — it maintains the efficiency benefits of scale while preventing the specific anti-competitive practices (self-preferencing, predatory acquisition) that cause consumer harm. Compare to the EU's Digital Markets Act (DMA) for international policy context.`,
    keyFact: 'The Act passed in May 2024 — the most significant reform to UK competition law in over two decades, designed specifically to address Big Tech market power.',
    examTopics: ['Digital Markets', 'Monopoly', 'Network Effects', 'Competition Policy', 'Tech Regulation', 'CMA'],
    paperRelevance: 'Paper 1 (monopoly essays, especially tech/digital market context)',
  },

  // ══════════════════════════════════════════════════════════
  // LABOUR MARKETS
  // ══════════════════════════════════════════════════════════
  {
    id: 'national-minimum-wage-act-1998',
    name: 'National Minimum Wage Act 1998',
    year: 1998,
    categories: ['labour', 'micro'],
    summary: 'Established the legal right to a minimum wage for almost all workers in the UK. Creates age-differentiated rates. The National Living Wage (for 21+) was introduced in 2016 and is updated annually via the Low Pay Commission.',
    provisions: [
      'Sets legally enforceable minimum hourly rates, differentiated by age: National Living Wage (21+), NMW (18-20), youth rate (16-17), apprentice rate',
      'Low Pay Commission (LPC): independent body that recommends the rate annually, based on evidence on employment effects, affordability, and living standards',
      'National Living Wage target: currently set to reach two-thirds of median earnings (reached in 2024)',
      'NLW rate April 2024: £11.44/hour; April 2025: £12.21/hour',
      'HMRC enforces compliance; employers who underpay face 200% penalty surcharges and public naming',
    ],
    examRelevance: `Arguably the most exam-relevant labour market law. Essential for any question on the minimum wage, monopsony, labour market efficiency, or income inequality. The law embodies the tension between competitive market theory (predicts unemployment) and monopsony theory (predicts both higher wages AND higher employment).

Key exam use: In a competitive labour market, a minimum wage above equilibrium causes unemployment (textbook diagram). But in a monopsonistic labour market (NHS, care sector, retail), a minimum wage up to the competitive level can simultaneously raise wages and employment — a superior outcome. Card and Krueger's famous US study found no significant employment loss from minimum wage rises, consistent with monopsony. In 2016, UK NLW introduction showed similarly small employment effects.

Also relevant: the minimum wage reduces income inequality (raises the wage floor), improves work incentives compared to benefits, and may increase labour supply — but risks reducing competitiveness for small firms and sectors competing with low-wage countries.`,
    keyFact: 'The NLW increased by 9.8% to £11.44 in April 2024 — the largest ever annual increase in percentage terms. The UK now has one of the highest minimum wages relative to median earnings in the OECD.',
    examTopics: ['Minimum Wage', 'Monopsony', 'Labour Market', 'Income Inequality', 'Market Failure', 'Government Intervention'],
    paperRelevance: 'Paper 1 (labour market questions, monopsony, NMW evaluation essays)',
  },

  {
    id: 'equality-act-2010',
    name: 'Equality Act 2010',
    year: 2010,
    categories: ['labour', 'micro'],
    summary: 'Consolidated and strengthened previous anti-discrimination legislation. Prohibits discrimination in employment and services on the basis of nine "protected characteristics": age, disability, gender reassignment, marriage, pregnancy/maternity, race, religion, sex, and sexual orientation.',
    provisions: [
      'Prohibits direct discrimination, indirect discrimination, harassment, and victimisation',
      'Gender pay gap reporting: firms with 250+ employees must publish mean and median gender pay gaps annually',
      'Equal pay provisions: men and women doing equal work must receive equal pay (unless there is a genuine material factor justifying difference)',
      'Public Sector Equality Duty: public bodies must have due regard to equality in all decisions',
      'Protected characteristics: age, disability, gender reassignment, marriage, pregnancy/maternity, race, religion or belief, sex, sexual orientation',
    ],
    examRelevance: `Relevant to questions on labour market discrimination, wage inequality, gender pay gaps, and the causes of income inequality. The gender pay gap (approximately 14% mean gap in 2024) persists despite the Equality Act because the Act targets overt discrimination but cannot address structural causes — occupational segregation, caring responsibilities, negotiation differences, and part-time work penalties.

Key exam use: when explaining why wage differentials exist despite anti-discrimination law, distinguish between: (1) direct discrimination (illegal under the Equality Act, but difficult to prove); (2) indirect discrimination (also illegal — e.g. a requirement that disadvantages women disproportionately); and (3) structural factors (legal but inequitable — occupational segregation, human capital differences). The Equality Act tackles (1) and (2) but cannot address (3).`,
    keyFact: 'Despite the Equality Act, the UK gender pay gap was 14.3% (mean, full-time, 2024). The gap is widest in financial services (25%+) and narrowest in caring/education roles.',
    examTopics: ['Labour Market Discrimination', 'Gender Pay Gap', 'Income Inequality', 'Wage Differentials', 'Market Failure'],
    paperRelevance: 'Paper 1 (labour market discrimination, income inequality), Paper 3 (synoptic)',
  },

  {
    id: 'trade-union-act-2016',
    name: 'Trade Union Act 2016',
    year: 2016,
    categories: ['labour', 'micro'],
    summary: 'Tightened the requirements for lawful strike action, requiring higher turnout and approval thresholds. In "important public services" (NHS, transport, education, fire), a further threshold of 40% support from all eligible members is required.',
    provisions: [
      'Minimum 50% turnout threshold for all industrial action ballots (previously no minimum)',
      '40% support threshold (of all eligible members) for industrial action in "important public services" — health, education, fire, transport, border security, nuclear',
      'Ballot papers must include a description of the trade dispute and the planned action',
      'Picketing supervision: unions must appoint a picket supervisor',
      'Check-off (deduction of union subscriptions at source) for public sector unions requires fresh consent every three years',
    ],
    examRelevance: `Relevant to questions about trade union power, labour market supply-side reform, and the balance between worker rights and economic efficiency. The Act represents a supply-side policy designed to reduce the disruptive potential of strike action, thereby reducing wage-push cost pressures and improving labour market flexibility.

Key exam use: when evaluating trade union power, the 2016 Act represents a deliberate weakening of union bargaining power — a market-based supply-side reform. From an efficiency perspective, this makes labour markets more flexible and reduces monopolistic union wage-setting. From an equity perspective, it may reduce workers' ability to secure wage increases that match productivity gains, widening inequality. The 2022-23 wave of UK strike action (NHS, rail, teachers) demonstrated that the Act did not eliminate industrial action but raised the threshold for it.`,
    keyFact: 'The 2022-23 wave of UK strikes (NHS, rail, teachers, civil servants) was the largest since the early 1980s — demonstrating that even with the Trade Union Act\'s higher thresholds, coordinated industrial action remained possible.',
    examTopics: ['Trade Unions', 'Labour Market', 'Supply-Side Policy', 'Wage Determination', 'Industrial Action'],
    paperRelevance: 'Paper 1 (labour market, trade union power)',
  },

  // ══════════════════════════════════════════════════════════
  // ENVIRONMENT & EXTERNALITIES
  // ══════════════════════════════════════════════════════════
  {
    id: 'climate-change-act-2008',
    name: 'Climate Change Act 2008',
    year: 2008,
    categories: ['environment', 'micro', 'macro'],
    summary: 'The UK became the first country in the world to set a legally binding long-term framework for cutting greenhouse gas emissions. It created a system of five-year carbon budgets and established the independent Climate Change Committee (CCC) to advise government.',
    provisions: [
      'Net zero target (amended 2019): UK must reduce net greenhouse gas emissions to zero by 2050',
      'Carbon budgets: legally binding five-year caps on total UK greenhouse gas emissions; currently in the sixth carbon budget (2033-2037)',
      'Climate Change Committee (CCC): independent statutory body that advises government on carbon budgets and monitors progress',
      'Annual reporting: Secretary of State must report to Parliament annually on progress against carbon budgets',
      'Adaptation Reporting: government must assess risks from climate change and publish adaptation programmes',
    ],
    examRelevance: `The foundational legislation for all UK environmental economics questions. Demonstrates the government's long-run commitment to internalising the negative externalities of carbon emissions through a statutory framework rather than relying solely on market incentives. Essential context for questions on carbon taxes, negative externalities, and government intervention.

Key exam use: the Climate Change Act illustrates the use of quantity-based regulation (carbon budgets = an absolute cap on emissions) as an alternative to price-based instruments (carbon tax). A carbon budget is more environmentally certain than a tax (you know exactly how much total emission is permitted) but less economically efficient (doesn't minimise abatement cost across different firms). Compare this to the UK ETS (a market-based mechanism) — the Act provides the overarching framework within which specific instruments like the ETS operate.`,
    keyFact: 'The UK\'s 2050 net zero target, enshrined in the 2019 amendment to the Climate Change Act, makes the UK one of only a handful of countries with a legally binding net zero commitment.',
    examTopics: ['Negative Externalities', 'Carbon Emissions', 'Government Intervention', 'Environmental Policy', 'Market Failure', 'Carbon Tax'],
    paperRelevance: 'Paper 1 (externalities, government intervention), Paper 2 (supply-side, fiscal policy on green investment)',
  },

  {
    id: 'environment-act-2021',
    name: 'Environment Act 2021',
    year: 2021,
    categories: ['environment', 'micro'],
    summary: 'Sets legally binding targets for improving the natural environment in England. Covers air quality, water quality, biodiversity, resource efficiency, and waste. Created the Office for Environmental Protection (OEP) as an independent watchdog.',
    provisions: [
      'Legally binding targets: PM2.5 air quality target; water quality targets for chalk streams; wildlife abundance target (halt decline by 2030)',
      'Biodiversity Net Gain (BNG): from November 2023, new development in England must deliver at least 10% net gain in biodiversity — creating a market in biodiversity units',
      'Environmental Land Management (ELM) schemes: farmers paid for public goods (wildlife habitat, carbon sequestration, flood prevention) rather than production',
      'Office for Environmental Protection: independent watchdog to hold government accountable for environmental law compliance (replaced EU environmental oversight post-Brexit)',
      'Extended Producer Responsibility (EPR): producers responsible for the full lifecycle costs of their packaging (internalises negative externality of packaging waste)',
    ],
    examRelevance: `Particularly relevant for questions on externalities, public goods, and market-based instruments for environmental policy. The Biodiversity Net Gain requirement creates a market mechanism for biodiversity — developers must purchase biodiversity credits if they cannot achieve 10% gain on-site, creating a price for previously unpriced environmental assets. This is a real-world example of attempts to internalise externalities through property rights (similar to the Coase theorem).

Key exam use: Biodiversity Net Gain demonstrates an innovative market-based approach to environmental externalities — rather than banning development or imposing regulation, it creates a market for biodiversity units, incentivising landowners to enhance habitats and allowing developers to compensate for unavoidable biodiversity loss at a market price.`,
    keyFact: 'The Biodiversity Net Gain requirement (November 2023) means developers must now offset or enhance biodiversity by at least 10% — the world\'s first mandatory biodiversity market of this type.',
    examTopics: ['Externalities', 'Public Goods', 'Market-Based Instruments', 'Environmental Policy', 'Coase Theorem', 'Government Intervention'],
    paperRelevance: 'Paper 1 (market failure, externalities, government intervention)',
  },

  {
    id: 'uk-ets',
    name: 'UK Emissions Trading Scheme (UK ETS)',
    year: 2021,
    categories: ['environment', 'micro', 'macro'],
    summary: 'The UK\'s post-Brexit carbon market, replacing participation in the EU ETS from 2021. A cap-and-trade system covering power generation, heavy industry, and aviation. The total cap of allowances declines annually, ratcheting down total emissions.',
    provisions: [
      'Cap: a fixed annual limit on total greenhouse gas emissions from covered sectors (declining by approximately 4.2% per year to 2030)',
      'Allowances: firms must hold one UK ETS allowance for each tonne of CO₂ they emit; allowances can be bought, sold, and banked',
      'Auction: most allowances are sold at quarterly government auctions; price discovered by market bidding',
      'Sectors covered: power generation, heavy industry (steel, cement, chemicals), aviation (UK domestic and flights to EEA)',
      'UK ETS price (2024): approximately £30-45 per tonne CO₂ (compared to EU ETS at €60-70)',
    ],
    examRelevance: `The best real-world example of a cap-and-trade scheme for exam questions on environmental policy. The UK ETS contrasts with a carbon tax: it sets a quantity cap (environmental certainty) and lets the market determine the price (economic efficiency in allocation). Compare the two instruments:

Carbon tax: government sets price, market determines quantity. Risk: if price is set too low, insufficient emissions reduction.
Cap-and-trade (UK ETS): government sets quantity, market determines price. Risk: price can be volatile; if cap is set too generously, price is too low to incentivise change.

Key exam use: the UK ETS price of £30-45/tonne CO₂ is significantly below the EU ETS price of €60-70/tonne — relevant to questions on UK competitiveness post-Brexit and on whether the UK's carbon pricing is sufficient to meet its Climate Change Act targets. A low ETS price provides too weak an incentive for green investment.`,
    keyFact: 'The UK ETS raised £6.1 billion in 2022-23 from allowance auctions — this revenue was not hypothecated to green spending, contrasting with some economists\' recommendation that carbon revenue should be recycled into clean energy investment.',
    examTopics: ['Cap-and-Trade', 'Carbon Pricing', 'Externalities', 'Market-Based Instruments', 'Environmental Policy', 'Government Intervention'],
    paperRelevance: 'Paper 1 (externalities, market-based vs regulation), Paper 2 (macroeconomic policy)',
  },

  // ══════════════════════════════════════════════════════════
  // HOUSING & PLANNING
  // ══════════════════════════════════════════════════════════
  {
    id: 'town-country-planning-act-1990',
    name: 'Town and Country Planning Act 1990',
    year: 1990,
    categories: ['housing', 'micro'],
    summary: 'The foundational legislation governing the planning system in England and Wales. Requires planning permission for "development" (new buildings, material changes of use, significant alterations). Creates the local plan system and the appeals framework.',
    provisions: [
      'Planning permission required for all development: new homes, extensions, change of use (from office to residential, for example)',
      'Local Development Plans: local authorities must prepare plans setting out where development can occur — these shape supply constraints',
      'Section 106 agreements: planning obligations requiring developers to contribute to local infrastructure (schools, roads, affordable housing) as a condition of permission',
      'Green Belt designation: land around major cities protected from development; reinforced by this Act and subsequent policy',
      'Planning appeals: developers can appeal refusals to the Planning Inspectorate',
    ],
    examRelevance: `The primary cause of the supply inelasticity of UK housing that drives the affordability crisis. This Act — and the planning system it created — is why UK house price to earnings ratios have risen from 4:1 to 9:1 since 1997. Planning constraints prevent supply from responding to price signals.

Key exam use: when drawing a housing supply curve, the near-vertical (inelastic) shape reflects planning restrictions under this Act. When evaluating housing market failure, the planning system creates a regulatory failure — even if the government wants more homes built (300,000 target), local authorities can refuse permission. The 30-month average planning timeline reflects the procedural requirements of this Act. Any evaluation of housing policy must engage with whether planning reform (relaxing this Act) is more effective than demand-side subsidies (Help to Buy) or direct provision (social housing).`,
    keyFact: 'In 2023, only 218,000 planning permissions were granted in England against a government target of 300,000 new homes — the planning system is the primary constraint on UK housing supply.',
    examTopics: ['Housing Market', 'Supply Inelasticity', 'Market Failure', 'Government Intervention', 'Planning', 'Negative Externalities'],
    paperRelevance: 'Paper 1 (housing market failure, supply/demand), Paper 3 (synoptic housing questions)',
  },

  {
    id: 'renters-reform-act-2024',
    name: 'Renters (Reform) Act 2024',
    year: 2024,
    categories: ['housing', 'micro'],
    summary: 'Abolishes Section 21 "no-fault" evictions, giving renters greater security of tenure. Introduces a decent homes standard for private rentals, creates a new Ombudsman for the private rented sector, and limits in-tenancy rent increases.',
    provisions: [
      'Abolition of Section 21: landlords can no longer evict tenants without providing a legally specified reason (e.g. rent arrears, landlord wanting to sell)',
      'Strengthened Section 8 grounds: landlords retain the right to evict for legitimate reasons (rent arrears, anti-social behaviour, wanting to sell)',
      'Decent Homes Standard extended to private rented sector: minimum standards for energy efficiency, heating, and safety',
      'Private Rented Sector Ombudsman: free dispute resolution service',
      'Rent increases limited to once per year; tenants can challenge increases they consider above market rate at a tribunal',
    ],
    examRelevance: `Relevant to rental market economics, specifically the trade-off between tenant security (positive for welfare, reduces information asymmetry about tenure) and supply effects (landlords may exit the market if returns are regulated). This illustrates the unintended consequences of price/quantity regulation.

Key exam use: the Renters Reform Act can be analysed as a non-price regulation intervention. By removing no-fault evictions, it reduces landlords' flexibility — some economists predict this will cause landlords to exit the market (reducing rental supply, worsening affordability) or to charge higher rents to compensate for reduced flexibility (the mirror of the no-fault eviction premium). This mirrors the rent control debate: improving security for existing tenants may harm prospective tenants by reducing supply.`,
    keyFact: 'Rightmove data shows the number of rental properties advertised fell by 26% between 2019 and 2024, partly attributed to landlords exiting the market in anticipation of stricter regulations.',
    examTopics: ['Housing Market', 'Rent Control', 'Government Intervention', 'Unintended Consequences', 'Supply and Demand', 'Price Regulation'],
    paperRelevance: 'Paper 1 (price regulation, housing market)',
  },

  // ══════════════════════════════════════════════════════════
  // MONETARY & FINANCIAL POLICY
  // ══════════════════════════════════════════════════════════
  {
    id: 'bank-of-england-act-1998',
    name: 'Bank of England Act 1998',
    year: 1998,
    categories: ['macro', 'monetary'],
    summary: 'Granted the Bank of England operational independence to set interest rates. Created the Monetary Policy Committee (MPC) with a mandate to meet the government\'s inflation target (currently 2% CPI). The Chancellor sets the inflation target; the MPC decides how to meet it.',
    provisions: [
      'Operational independence: the MPC sets the base rate without day-to-day political interference — insulated from electoral cycle pressures',
      'Mandate: the MPC must maintain price stability (2% CPI inflation target) and, subject to this, support the government\'s economic objectives for growth and employment',
      'MPC composition: 9 members — Governor, 3 Deputy Governors, Chief Economist, and 4 external members appointed by the Chancellor',
      'Accountability: the Governor must write an open letter to the Chancellor when CPI deviates by more than 1 percentage point from target (above 3% or below 1%)',
      'Financial Policy Committee (FPC): added by Financial Services Act 2012 to monitor systemic financial stability (macro-prudential regulation)',
    ],
    examRelevance: `Essential for any question on monetary policy, central bank independence, or inflation targeting. The 1998 Act represents the institutional solution to the time-consistency problem (Kydland-Prescott): a politically controlled central bank has incentives to create surprise inflation before elections, embedding inflationary expectations. Independence removes this incentive and anchors expectations at 2%.

Key exam use: evaluate the institutional design — independence provides credibility (lower long-run inflation expectations) but raises accountability concerns (unelected body making distributional decisions via QE). The 2022 inflation overshoot to 11.1% raised questions about whether the MPC was too slow to tighten, highlighting forecasting limitations. The letter-writing mechanism (required when CPI exceeds 3% or falls below 1%) is the accountability tool. Compare UK's single mandate (price stability) with the Federal Reserve's dual mandate (price stability + maximum employment).`,
    keyFact: 'The MPC wrote 14 consecutive open letters to the Chancellor between May 2022 and June 2023 as CPI remained more than 1 percentage point above the 2% target — the longest run of letters since independence was granted.',
    examTopics: ['Monetary Policy', 'Inflation', 'Central Bank Independence', 'MPC', 'Interest Rates', 'Government Policy', 'Time-Consistency'],
    paperRelevance: 'Paper 2 (monetary policy, inflation, central bank independence essays)',
  },

  {
    id: 'financial-services-markets-act-2000',
    name: 'Financial Services and Markets Act 2000 (FSMA)',
    year: 2000,
    categories: ['macro', 'financial'],
    summary: 'The principal legislation regulating financial services in the UK. Created the regulatory framework for banks, insurers, and investment firms. Reformed post-2008 to create the Financial Conduct Authority (FCA) and Prudential Regulation Authority (PRA) as separate regulators.',
    provisions: [
      'FCA (Financial Conduct Authority): regulates conduct of all financial firms — consumer protection, market integrity, competition in financial services',
      'PRA (Prudential Regulation Authority): a subsidiary of the Bank of England; supervises banks, building societies, and major investment firms for systemic safety',
      'Authorisation: firms cannot carry on "regulated activities" (taking deposits, giving investment advice) without FCA/PRA authorisation',
      'Consumer Duty (added 2023): firms must deliver good outcomes for retail customers — a higher standard than previous "treating customers fairly" obligation',
      'Ring-fencing (added 2019): retail banking arms of large banks must be separated from investment banking to protect depositors',
    ],
    examRelevance: `Relevant to financial market failure, information asymmetry in financial services, and the case for financial regulation. The 2008 financial crisis demonstrated catastrophic market failure: banks had insufficient capital, excessive leverage, and inadequate risk management — systemic risk that the pre-crisis regulatory framework failed to prevent.

Key exam use: FSMA regulation represents government intervention to correct market failure in financial services — information asymmetry (customers cannot assess the safety of financial products), systemic risk (banks' failure imposes costs on the whole economy), and moral hazard (expectation of government bailout encourages excessive risk-taking). The ring-fencing requirement directly addresses the too-big-to-fail problem: if retail banking fails, it can be resolved without destroying investment banking operations (and vice versa).`,
    keyFact: 'The FCA fined Barclays £40 million in 2023 for failures in financial crime controls — illustrating that regulatory enforcement under FSMA is ongoing and substantial.',
    examTopics: ['Financial Markets', 'Regulation', 'Market Failure', 'Information Asymmetry', 'Moral Hazard', 'Systemic Risk', 'Government Intervention'],
    paperRelevance: 'Paper 2 (financial markets, monetary policy, market failure in finance)',
  },

  // ══════════════════════════════════════════════════════════
  // INTERNATIONAL TRADE & MACROECONOMICS
  // ══════════════════════════════════════════════════════════
  {
    id: 'wto-agreement-1995',
    name: 'WTO Agreement (Marrakesh Agreement) 1995',
    year: 1995,
    categories: ['trade', 'macro'],
    summary: 'Founded the World Trade Organization (WTO) to replace GATT. Provides the legal and institutional framework for international trade. Sets rules on tariffs, subsidies, anti-dumping, and intellectual property. Includes a binding dispute resolution mechanism.',
    provisions: [
      'Most Favoured Nation (MFN) principle: a tariff concession granted to one WTO member must be extended to all WTO members (prevents bilateral discrimination)',
      'National Treatment: imported and domestic goods must be treated equally once inside a country\'s borders (prevents discriminatory domestic regulation)',
      'Tariff bindings: members "bind" their maximum tariff rates — cannot raise tariffs above bound rates without compensation to affected trading partners',
      'Dispute Settlement Understanding (DSU): binding arbitration process for trade disputes; allows authorised retaliation if losing party doesn\'t comply',
      'Subsidies and Countervailing Measures Agreement: limits on government subsidies that distort trade; allows countervailing duties on subsidised imports',
    ],
    examRelevance: `Essential context for any international trade question — provides the rules-based framework within which UK trade policy operates. The WTO\'s MFN principle is why the UK cannot give the EU a better deal than the rest of the world without a formal FTA, and why Trump's tariffs are legally problematic (they violate MFN for specific countries). The Dispute Settlement mechanism is the enforcement tool.

Key exam use: when evaluating protectionism, note that WTO rules constrain unilateral action — a country imposing tariffs above its bound rate risks authorised WTO retaliation. The US's Section 232 (national security) tariffs on steel and aluminium were challenged at the WTO — this illustrates that even the largest economies operate within (or risk undermining) the WTO framework. Post-2017, the WTO's Appellate Body has been paralysed by US blocking of new judges — a real institutional failure.`,
    keyFact: 'The WTO has 166 members accounting for 98% of world trade. Its Appellate Body — the "supreme court" for trade disputes — has been paralysed since 2019 because the US has blocked appointment of new judges, leaving global trade law without a functioning appeal mechanism.',
    examTopics: ['International Trade', 'Free Trade', 'Protectionism', 'Tariffs', 'WTO', 'Globalisation', 'Trade Policy'],
    paperRelevance: 'Paper 2 (international trade, protectionism, globalisation)',
  },

  {
    id: 'uk-eu-trade-cooperation-agreement-2020',
    name: 'UK-EU Trade and Cooperation Agreement (TCA) 2020',
    year: 2020,
    categories: ['trade', 'macro'],
    summary: 'The post-Brexit trade agreement between the UK and EU, in effect from 1 January 2021. Provides zero tariffs and zero quotas on goods trade, but introduces significant non-tariff barriers (NTBs) through customs checks, rules of origin, and regulatory divergence.',
    provisions: [
      'Zero tariffs and zero quotas on goods meeting rules of origin requirements — but only for goods, not services',
      'Rules of origin: goods must contain sufficient UK/EU content to qualify for zero tariffs — complex for manufacturers using global supply chains',
      'Sanitary and phytosanitary (SPS) checks: UK food/agricultural exports to the EU face full third-country border checks (not required within the single market)',
      'Services: no equivalent to the EU single market for services — UK financial services firms lost "passporting" rights; professional qualifications no longer automatically recognised',
      'Level playing field provisions: UK must maintain standards broadly aligned with EU in state aid, labour, and environmental rules',
    ],
    examRelevance: `Critical context for any question on Brexit's economic effects, UK trade, the current account deficit, or UK economic performance since 2021. The TCA eliminated tariffs (the headline achievement) but created significant non-tariff barriers that have materially reduced UK-EU trade flows.

Key exam use: the OBR estimates Brexit has permanently reduced UK trade intensity by 15% and long-run GDP by approximately 4% relative to single market membership. This is not primarily from tariffs (zero under TCA) but from NTBs — customs declarations, rules of origin compliance, SPS checks, and lost services passporting. This makes Brexit a powerful case study for: comparative advantage (UK lost easiest access to its largest export market), non-tariff barriers (often more trade-restrictive than tariffs), and current account analysis (UK goods deficit with EU widened post-Brexit).`,
    keyFact: 'UK goods exports to the EU fell by approximately 14% in 2021 compared to the pre-Brexit trend, while UK goods exports to the rest of the world grew — the TCA\'s zero tariffs did not compensate for the non-tariff barrier costs.',
    examTopics: ['Brexit', 'International Trade', 'Non-Tariff Barriers', 'Current Account', 'Economic Growth', 'UK Economy', 'Protectionism'],
    paperRelevance: 'Paper 2 (trade, Brexit, UK macro performance, current account)',
  },

  {
    id: 'inflation-reduction-act-2022-us',
    name: 'US Inflation Reduction Act 2022',
    year: 2022,
    categories: ['trade', 'macro'],
    summary: 'US legislation providing $369 billion in climate and clean energy subsidies, including generous tax credits for electric vehicles manufactured in North America. Created significant trade distortion concerns for UK and EU manufacturers.',
    provisions: [
      '$7,500 tax credit for EVs assembled in North America with North American-sourced batteries — explicitly discriminates against non-US-made EVs',
      '$369 billion total in climate and clean energy investment over 10 years — the largest climate spending package in US history',
      'Production tax credits for US-manufactured solar panels, wind turbines, and batteries',
      'Home energy efficiency tax credits incentivising US-made products',
    ],
    examRelevance: `An important contemporary example of industrial policy / strategic trade policy that has direct implications for UK manufacturing competitiveness. The IRA is effectively a large-scale subsidy programme — analogous to the infant industry argument — but applied by the world's largest economy to industries of the future.

Key exam use: the IRA demonstrates the game theory of trade policy. The US subsidises clean tech manufacturing; if the UK and EU don't respond, their manufacturers lose competitive advantage to US-based producers. The EU responded with the Green Deal Industrial Plan (relaxed state aid rules); the UK has been slower to respond. This creates a "subsidy race" dynamic — each country responds to others' subsidies with its own, potentially beneficial for global green transition but economically inefficient (resources attracted to subsidised production regardless of comparative advantage). Relevant to trade policy essays, industrial strategy, and supply-side policy.`,
    keyFact: 'The US IRA has already attracted $300bn+ in private clean energy investment to the US since 2022. UK Automotive manufacturers Jaguar Land Rover and Stellantis lobbied the UK government for equivalent support to avoid shifting production to North America.',
    examTopics: ['Industrial Policy', 'Trade Policy', 'Subsidies', 'Comparative Advantage', 'Supply-Side Policy', 'Green Economy', 'International Trade'],
    paperRelevance: 'Paper 2 (trade policy, industrial strategy, supply-side)',
  },

  // ══════════════════════════════════════════════════════════
  // FISCAL & WELFARE
  // ══════════════════════════════════════════════════════════
  {
    id: 'budget-responsibility-act-2011',
    name: 'Budget Responsibility and National Audit Act 2011',
    year: 2011,
    categories: ['macro', 'fiscal'],
    summary: 'Created the Office for Budget Responsibility (OBR) as an independent body to produce economic and fiscal forecasts, replacing the Treasury\'s own projections. Legally required the OBR to assess the sustainability of public finances.',
    provisions: [
      'OBR mandate: independently assess the government\'s fiscal plans, produce official economic forecasts, and publish analysis of fiscal sustainability',
      'Five-year forecasts: the OBR produces twice-yearly forecasts (March Budget and October Autumn Statement) for GDP, inflation, borrowing, and debt',
      'Fiscal charter: government must set out its fiscal targets; OBR assesses the probability of meeting them',
      'Welfare cap: OBR monitors spending against a government-set welfare cap (excluding state pension and cyclical unemployment)',
    ],
    examRelevance: `Relevant to questions on fiscal policy credibility, public debt sustainability, and the role of independent institutions in economic governance. The OBR represents a fiscal equivalent of the Bank of England's independence for monetary policy — by removing the government's ability to produce its own optimistic forecasts, it improves fiscal credibility and makes fiscal rules harder to manipulate.

Key exam use: the September 2022 Kwarteng mini-Budget was announced without an OBR forecast — the government bypassed the standard OBR assessment. The market reaction (gilt yields spiked, pound fell, mortgage rates rose sharply) demonstrated the importance of OBR credibility for financial market confidence. This is a powerful real-world example of how fiscal credibility institutions affect market expectations and borrowing costs.`,
    keyFact: 'The September 2022 mini-Budget — announced without an OBR forecast — triggered the largest single-day fall in the pound since 2016 and forced emergency Bank of England intervention in the gilt market within two weeks.',
    examTopics: ['Fiscal Policy', 'Government Borrowing', 'National Debt', 'Fiscal Credibility', 'OBR', 'Macroeconomic Policy'],
    paperRelevance: 'Paper 2 (fiscal policy, national debt, government borrowing, policy credibility)',
  },

  {
    id: 'welfare-reform-act-2012',
    name: 'Welfare Reform Act 2012',
    year: 2012,
    categories: ['macro', 'fiscal', 'labour'],
    summary: 'Introduced Universal Credit (UC), a single monthly payment replacing six legacy benefits (Income Support, Jobseeker\'s Allowance, Employment and Support Allowance, Housing Benefit, Working Tax Credit, Child Tax Credit). Designed to make work always pay more than benefits.',
    provisions: [
      'Universal Credit: single tapered benefit replacing 6 legacy benefits; withdrawn at 55p per £1 earned above a work allowance (formerly 63p)',
      'Claimant commitment: UC claimants must agree to job-seeking conditions appropriate to their circumstances; sanctions for non-compliance',
      'Bedroom tax (spare room subsidy reduction): social housing tenants with spare bedrooms receive reduced housing benefit',
      'Benefit cap: total household benefits capped (currently £26,000/year in London, £20,000 elsewhere)',
      'Five-week wait: UC claimants wait five weeks for their first payment — a much-criticised implementation feature',
    ],
    examRelevance: `Relevant to questions on income inequality, poverty, supply-side labour market policy, and fiscal policy trade-offs. Universal Credit was designed as a supply-side reform to improve work incentives — by withdrawing benefits at a lower rate than the legacy system, it was supposed to make low-paid work more financially rewarding than benefits (reducing voluntary unemployment and improving labour supply).

Key exam use: the theoretical case for UC (unified, tapered, removes poverty trap) vs. the implementation problems (five-week wait causes debt/hardship, administrative complexity, sanction failures). Use UC to illustrate how the same policy can have a sound theoretical basis but poor outcomes due to government failure in implementation. Also relevant to distributional analysis — whether benefit reform narrows or widens income inequality depends on the generosity of the taper rate and the adequacy of the work allowance.`,
    keyFact: 'As of 2024, over 6 million people claim Universal Credit in the UK. The five-week wait for first payment has been linked to increased food bank usage — the Trussell Trust reported a 94% increase in food bank demand between 2012 and 2023.',
    examTopics: ['Income Inequality', 'Poverty', 'Labour Supply', 'Supply-Side Policy', 'Fiscal Policy', 'Benefit System', 'Work Incentives'],
    paperRelevance: 'Paper 2 (fiscal policy, inequality, labour market supply-side)',
  },

  {
    id: 'pensions-act-2008',
    name: 'Pensions Act 2008',
    year: 2008,
    categories: ['macro', 'labour'],
    summary: 'Introduced automatic enrolment into workplace pension schemes for eligible workers (those aged 22 to state pension age, earning above £10,000/year). Employers must contribute alongside employees. Opt-out is possible, but inaction results in enrolment.',
    provisions: [
      'Auto-enrolment: eligible workers automatically enrolled into a qualifying pension scheme — exploits behavioural inertia (most people stay enrolled)',
      'Minimum contributions: total minimum contribution of 8% of qualifying earnings (employer minimum 3%, employee minimum 5%)',
      'National Employment Savings Trust (NEST): government-created low-cost pension scheme for employers who don\'t have an existing qualifying scheme',
      'Staging dates: larger employers phased in from 2012; smaller employers from 2014-2018',
    ],
    examRelevance: `A textbook example of behavioural economics applied to public policy — using default effects and present bias to increase pension saving without compulsion. Standard economic theory predicts rational individuals will save optimally for retirement; behavioural economics recognises that present bias and inertia lead to systematic under-saving.

Key exam use: auto-enrolment is the most cited real-world example of a "nudge" policy in UK economics. Unlike a tax or regulation, it doesn't force any behaviour — it changes the default choice (from "not enrolled" to "enrolled") and relies on opt-out inertia. By 2024, over 22 million workers had been auto-enrolled; opt-out rates are only approximately 9%, demonstrating the power of the default effect. Contrast with traditional market-based approaches (tax incentives for voluntary pension saving) and direct regulation (compulsory pension saving).`,
    keyFact: 'Since auto-enrolment began in 2012, pension participation among eligible employees rose from 55% to 88% by 2023. The scheme has created over £36 billion in additional pension saving per year.',
    examTopics: ['Behavioural Economics', 'Nudge Theory', 'Default Effects', 'Market Failure', 'Information Failure', 'Government Intervention', 'Present Bias'],
    paperRelevance: 'Paper 1 (behavioural economics, information failure, government intervention)',
  },

  // ══════════════════════════════════════════════════════════
  // CONSUMER PROTECTION & INFORMATION
  // ══════════════════════════════════════════════════════════
  {
    id: 'consumer-rights-act-2015',
    name: 'Consumer Rights Act 2015',
    year: 2015,
    categories: ['micro', 'competition'],
    summary: 'Consolidated consumer protection law into a single statute. Gives consumers clear rights when goods are faulty, services are substandard, or digital content doesn\'t work. Provides 30-day right to reject, repair, replacement, and price reduction remedies.',
    provisions: [
      '30-day right to reject: consumers can return goods that are faulty within 30 days for a full refund',
      'Goods must be: of satisfactory quality, fit for purpose, and as described',
      'Digital content: for the first time, statutory rights applied to downloaded music, films, games, and apps',
      'Services: must be performed with reasonable care and skill, within a reasonable time, and at a reasonable price',
      'Unfair contract terms: contract terms that tip the balance significantly against the consumer are unenforceable',
    ],
    examRelevance: `Relevant to information asymmetry and consumer protection as a government response to market failure. Markets work well when buyers and sellers have symmetric information; the Consumer Rights Act corrects information failures in consumer goods and services by establishing minimum legally enforceable quality standards, reducing the risk of adverse selection.

Key exam use: the Consumer Rights Act is a form of information regulation — rather than subsidising information or mandating disclosure, it sets minimum quality standards below which no transaction can legally occur. This addresses the "market for lemons" problem (Akerlof): if consumers cannot distinguish good from bad products, markets unravel. Statutory quality standards prevent the market equilibrium from being dominated by low-quality goods.`,
    keyFact: 'The Consumer Rights Act 2015 for the first time gave UK consumers statutory rights over digital content — recognising that downloaded films, games, and music are products subject to quality standards, not merely licensed services.',
    examTopics: ['Information Asymmetry', 'Consumer Protection', 'Market Failure', 'Government Intervention', 'Adverse Selection'],
    paperRelevance: 'Paper 1 (information failure, market failure, government intervention)',
  },

  {
    id: 'product-safety-regulation',
    name: 'General Product Safety Regulations 2005',
    year: 2005,
    categories: ['micro'],
    summary: 'Requires that all consumer products placed on the UK market are safe. Producers and distributors must not supply unsafe products and must inform authorities of product safety risks. Enforced by Trading Standards.',
    provisions: [
      'General safety requirement: all consumer products must be safe — this is a broad catch-all standard',
      'Producer duties: must provide safety information, mark products with traceability details, and conduct sampling/testing',
      'Distributor duties: must not supply products they know or should have known are dangerous',
      'Recall powers: authorities can require product recalls, withdrawals, and destruction',
    ],
    examRelevance: `A clear example of regulation correcting information asymmetry — consumers cannot test whether a product is safe before purchase (especially complex products like electrical goods). Without regulation, manufacturers would have an incentive to cut safety costs (reducing their costs) while consumers cannot detect the difference until harmed (a textbook credence good problem).

Key exam use: product safety regulation addresses a specific market failure — negative externalities (harm to third parties from unsafe products) and information asymmetry (consumers cannot assess product safety). Evaluate whether regulation or market mechanisms (reputation, insurance, litigation) are sufficient to ensure safety — regulation is justified where the cost of harm is severe, irreversible, and difficult for consumers to detect.`,
    keyFact: 'The UK had approximately 3 million product recalls between 2010-2023 — from faulty tumble dryers (Whirlpool: 500,000 affected) to dangerous electric blankets, demonstrating the ongoing need for product safety regulation.',
    examTopics: ['Information Asymmetry', 'Negative Externalities', 'Market Failure', 'Regulation', 'Consumer Protection'],
    paperRelevance: 'Paper 1 (market failure, information asymmetry, government intervention)',
  },
]

// All category IDs for filtering
export const lawCategories = [
  { id: 'all', label: 'All Laws', icon: '📚' },
  { id: 'competition', label: 'Competition', icon: '⚖️' },
  { id: 'labour', label: 'Labour Market', icon: '👷' },
  { id: 'environment', label: 'Environment', icon: '🌿' },
  { id: 'housing', label: 'Housing', icon: '🏠' },
  { id: 'macro', label: 'Macroeconomics', icon: '📈' },
  { id: 'trade', label: 'Trade', icon: '🌍' },
  { id: 'financial', label: 'Financial', icon: '🏦' },
]

// Topic tags that appear in the exam
export const allLawExamTopics = [
  ...new Set(keyLaws.flatMap(l => l.examTopics))
].sort()
