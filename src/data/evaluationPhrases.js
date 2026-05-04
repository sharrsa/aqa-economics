// ============================================================
// AQA A-Level Economics — Evaluation Phrase Bank
// Organised by function and topic — copy these into essays
// ============================================================

export const evaluationCategories = [
  { id: 'all', label: 'All Phrases', icon: '📝' },
  { id: 'general', label: 'General Evaluation', icon: '⚖️' },
  { id: 'conditions', label: 'Conditions & Caveats', icon: '🔀' },
  { id: 'counter', label: 'Counter-Arguments', icon: '↩️' },
  { id: 'comparison', label: 'Policy Comparison', icon: '⚡' },
  { id: 'conclusion', label: 'Conclusion Starters', icon: '✅' },
  { id: 'micro', label: 'Microeconomics', icon: '🔬' },
  { id: 'macro', label: 'Macroeconomics', icon: '📊' },
  { id: 'trade', label: 'Trade & Globalisation', icon: '🌍' },
]

export const evaluationPhrases = [

  // ─────────────────── GENERAL EVALUATION ───────────────────

  {
    id: 'gen-1',
    category: 'general',
    phrase: 'However, this depends on…',
    usage: 'Opens a condition-based evaluation. Follow with the specific condition (e.g., "…the price elasticity of demand, which in markets for essential goods is typically inelastic, meaning…").',
    example: 'However, this depends on the degree to which the labour market is competitive — in monopsonistic markets, a minimum wage may actually increase employment.',
  },
  {
    id: 'gen-2',
    category: 'general',
    phrase: 'In the short run… however, in the long run…',
    usage: 'Distinguishes time horizons — always relevant in economics. Short run ≠ long run for supply, costs, price elasticity, policy effectiveness.',
    example: 'In the short run, a carbon tax raises energy costs for firms. In the long run, however, it incentivises investment in cleaner technology, shifting the supply curve and reducing costs sustainably.',
  },
  {
    id: 'gen-3',
    category: 'general',
    phrase: 'The extent to which this is true depends on…',
    usage: 'Nuanced opening for evaluation — signals to the examiner you are about to weigh the argument carefully.',
    example: 'The extent to which fiscal expansion is inflationary depends on the size of the output gap — if the economy has significant spare capacity, increased AD generates output growth rather than inflation.',
  },
  {
    id: 'gen-4',
    category: 'general',
    phrase: 'This argument assumes… but in reality…',
    usage: 'Challenges a theoretical assumption with real-world evidence.',
    example: 'This argument assumes perfect information, but in reality, information asymmetry means buyers cannot assess product quality, reducing the corrective effect of competition.',
  },
  {
    id: 'gen-5',
    category: 'general',
    phrase: 'The empirical evidence suggests…',
    usage: 'Brings in real-world data to evaluate a theoretical claim. Highly valued by examiners.',
    example: 'The empirical evidence suggests a minimum wage does not always reduce employment — the UK NLW rose from £6.50 (2014) to £12.21 (2025) without a significant increase in aggregate unemployment.',
  },
  {
    id: 'gen-6',
    category: 'general',
    phrase: 'Furthermore, government failure may mean…',
    usage: 'Acknowledges that government intervention can worsen the situation — key AQA evaluation point.',
    example: 'Furthermore, government failure may mean that a Pigouvian tax is set incorrectly — if the MEC is underestimated, the tax under-corrects the externality, leaving a residual welfare loss.',
  },
  {
    id: 'gen-7',
    category: 'general',
    phrase: 'This is reinforced by / This is supported by…',
    usage: 'Links your theoretical point to real-world evidence.',
    example: 'This is reinforced by the CMA\'s 2025 case against BBC, BT, ITV, Sky and IMG — firms colluded on pay information for 7+ years, confirming that oligopolistic markets can harm workers through wage suppression.',
  },

  // ─────────────────── CONDITIONS & CAVEATS ───────────────────

  {
    id: 'cond-1',
    category: 'conditions',
    phrase: 'The effectiveness of this policy depends on the price elasticity of demand.',
    usage: 'Always relevant when discussing taxes, subsidies, or price controls. If PED is inelastic, quantity changes little; if elastic, quantity changes significantly.',
    example: 'The effectiveness of a carbon tax as a corrective instrument depends on the price elasticity of demand for carbon-intensive goods — petrol has inelastic demand in the short run, meaning a large tax is needed for a small reduction in consumption.',
  },
  {
    id: 'cond-2',
    category: 'conditions',
    phrase: 'This may not apply if the market is contestable.',
    usage: 'Baumol evaluation — contestability reduces monopoly/oligopoly harm without regulation.',
    example: 'This analysis of monopoly harm may not apply if the market is contestable — low barriers to entry and exit could force the monopolist to price at average cost even without direct competition.',
  },
  {
    id: 'cond-3',
    category: 'conditions',
    phrase: 'The magnitude of the effect depends on the size of the multiplier.',
    usage: 'Fiscal policy evaluation — the multiplier varies with MPC, MPT, and MPM.',
    example: 'The magnitude of the stimulus effect depends on the size of the multiplier — in the open UK economy, where MPM is approximately 0.30, the fiscal multiplier is estimated at 0.6–0.8, significantly smaller than the closed-economy textbook value.',
  },
  {
    id: 'cond-4',
    category: 'conditions',
    phrase: 'This depends on the time horizon under consideration.',
    usage: 'Time horizon distinction — short-run and long-run outcomes often differ significantly.',
    example: 'This depends on the time horizon — in the short run, minimum wage increases appear not to reduce employment significantly, but in the long run, rising labour costs relative to capital may accelerate automation, as evidenced by Amazon\'s progressive warehouse robotisation.',
  },
  {
    id: 'cond-5',
    category: 'conditions',
    phrase: 'The significance of this varies between markets / sectors / regions.',
    usage: 'Shows you understand heterogeneity — not all markets respond the same way.',
    example: 'The significance of the NLW increase varies between regions — in London (where pre-existing wages already exceed £12.21), the employment effect is minimal; in lower-wage regions, the impact on firm costs and employment decisions is substantially larger.',
  },
  {
    id: 'cond-6',
    category: 'conditions',
    phrase: 'This assumes ceteris paribus — but other factors may offset…',
    usage: 'Challenges the isolation of one variable by introducing other real-world factors.',
    example: 'This assumes ceteris paribus, but the BoE\'s simultaneous reduction in interest rates from 5.25% to 3.75% (2024–25) may have stimulated consumption, offsetting any contractionary effect of the employer NI increase.',
  },

  // ─────────────────── COUNTER-ARGUMENTS ───────────────────

  {
    id: 'counter-1',
    category: 'counter',
    phrase: 'However, Schumpeter\'s theory of creative destruction suggests…',
    usage: 'Counter-argument to monopoly harm — dynamic efficiency may outweigh static welfare loss.',
    example: 'However, Schumpeter\'s theory of creative destruction suggests that temporary monopoly profits fund R&D investment, generating dynamic efficiency gains that outweigh the static deadweight loss identified in the diagram.',
  },
  {
    id: 'counter-2',
    category: 'counter',
    phrase: 'A Keynesian perspective would challenge this view by arguing…',
    usage: 'Introduces demand-side counter-argument against supply-side or monetary policy claims.',
    example: 'A Keynesian perspective would challenge this view — in a deflationary output gap, supply-side improvements that expand LRAS are ineffective without sufficient AD to utilise the additional capacity.',
  },
  {
    id: 'counter-3',
    category: 'counter',
    phrase: 'Friedman\'s monetarist critique challenges this, arguing that…',
    usage: 'Counter-argument against fiscal policy effectiveness — crowding out, NAIRU.',
    example: 'Friedman\'s monetarist critique challenges this — crowding out means government borrowing raises interest rates and displaces private investment, potentially leaving net AD unchanged.',
  },
  {
    id: 'counter-4',
    category: 'counter',
    phrase: 'However, the infant industry argument (Hamilton/List) suggests…',
    usage: 'Counter to free trade — developing comparative advantage justifies temporary protection.',
    example: 'However, the infant industry argument suggests that South Korea\'s temporary protection of its semiconductor and automotive sectors in the 1970s–80s successfully built globally competitive industries — free trade would have foreclosed this development path.',
  },
  {
    id: 'counter-5',
    category: 'counter',
    phrase: 'Conversely, one could argue that…',
    usage: 'Simple counter-argument opener — always develop it with a full chain of reasoning.',
    example: 'Conversely, one could argue that a current account deficit reflects the economy\'s attractiveness to foreign investors — FDI-financed deficits are associated with technology transfer and job creation, not vulnerability.',
  },

  // ─────────────────── POLICY COMPARISON ───────────────────

  {
    id: 'comp-1',
    category: 'comparison',
    phrase: 'An alternative policy would be… which has the advantage of… but the disadvantage of…',
    usage: 'Compares two policy instruments directly — essential for "most effective policy" questions.',
    example: 'An alternative policy would be tradeable permits (UK ETS), which has the advantage of guaranteeing a specific quantity of emissions (the cap) rather than just a price — but the disadvantage of requiring costly monitoring and enforcement infrastructure.',
  },
  {
    id: 'comp-2',
    category: 'comparison',
    phrase: 'Compared with monetary policy, fiscal policy…',
    usage: 'Direct comparison for AD management effectiveness questions.',
    example: 'Compared with monetary policy, fiscal policy has longer implementation lags (Budget decisions take months to reach spending; monetary policy decisions take effect within 6–18 months), but is more powerful when the economy is at the zero lower bound.',
  },
  {
    id: 'comp-3',
    category: 'comparison',
    phrase: 'Supply-side policies may be more appropriate in the long run because…',
    usage: 'Compares demand-side vs supply-side — for sustainable growth questions.',
    example: 'Supply-side policies may be more appropriate in the long run because they expand LRAS without generating inflationary pressure, unlike demand-side expansion which moves the economy up the SRAS curve when near full capacity.',
  },
  {
    id: 'comp-4',
    category: 'comparison',
    phrase: 'Price regulation (e.g., Ofgem price caps) may be more effective than competition policy because…',
    usage: 'Compares two government intervention tools in monopoly/utility markets.',
    example: 'Price regulation may be more immediately effective than competition policy because it directly constrains monopoly pricing — whereas the CMA\'s investigations take years and fines may be insufficient to change behaviour.',
  },

  // ─────────────────── CONCLUSION STARTERS ───────────────────

  {
    id: 'conc-1',
    category: 'conclusion',
    phrase: 'On balance, [claim] is [strong/weak] because…',
    usage: 'Clear, direct conclusion that makes a judgement. Examiners reward a supported verdict, not fence-sitting.',
    example: 'On balance, the case for fiscal policy as the most effective AD management tool is strongest when monetary policy is constrained by the zero lower bound, as in 2009–2021 — but in normal conditions, monetary policy\'s speed and flexibility advantages make it superior.',
  },
  {
    id: 'conc-2',
    category: 'conclusion',
    phrase: 'The strength of this argument depends primarily on [key variable].',
    usage: 'Identifies the pivotal factor that determines the outcome — shows sophisticated thinking.',
    example: 'The strength of the case for monopoly harm depends primarily on the regulatory environment — an effective CMA with SMS powers largely neutralises consumer harm, whereas an unregulated monopoly in an inelastic-demand market causes significant welfare loss.',
  },
  {
    id: 'conc-3',
    category: 'conclusion',
    phrase: 'The "always" in this question is clearly too strong. [Policy/outcome] is [beneficial/harmful] under specific conditions: [list conditions].',
    usage: 'Perfect for questions with "always/never/most effective" — challenge the absolutism directly.',
    example: 'The "always" in this question is clearly too strong. Free trade is beneficial under specific conditions: when redistribution mechanisms compensate losers, when all trading nations reciprocate, and when national security is not compromised by supply chain dependence.',
  },
  {
    id: 'conc-4',
    category: 'conclusion',
    phrase: 'In the UK context specifically, [conclusion], because [UK-specific factor].',
    usage: 'Anchors conclusion in real-world UK context — shows application of analysis.',
    example: 'In the UK context specifically, the current account deficit is not immediately harmful, because it is financed predominantly by FDI rather than volatile portfolio flows, and the UK\'s services surplus (£130bn) partially offsets the goods deficit.',
  },
  {
    id: 'conc-5',
    category: 'conclusion',
    phrase: 'While [argument A] is valid in theory, the evidence suggests [argument B] is more likely in practice.',
    usage: 'Distinguishes theory from empirical reality — high-value evaluation.',
    example: 'While crowding-out theory is valid in principle, the empirical evidence from the UK\'s 2024 Budget suggests that gilt market yields remained stable despite increased borrowing — indicating markets accepted the deficit expansion without a significant crowding-out effect.',
  },

  // ─────────────────── MICROECONOMICS PHRASES ───────────────────

  {
    id: 'micro-1',
    category: 'micro',
    phrase: 'The welfare loss depends on the price elasticity of demand.',
    usage: 'Deadweight loss from monopoly/tax is larger when demand is inelastic (large markup) vs elastic (small markup).',
    example: 'The welfare loss from monopoly pricing is larger when demand for the good is inelastic — as with pharmaceuticals — because the monopolist can charge a price far above MC without losing much demand.',
  },
  {
    id: 'micro-2',
    category: 'micro',
    phrase: 'This may be offset by dynamic efficiency gains from R&D investment.',
    usage: 'Schumpeterian counter-argument to static welfare analysis.',
    example: 'The static deadweight loss from monopoly pricing may be offset by dynamic efficiency gains — AstraZeneca\'s £1.2bn COVID vaccine investment was viable only because of patent protection guaranteeing temporary monopoly profits.',
  },
  {
    id: 'micro-3',
    category: 'micro',
    phrase: 'Regulatory capture may undermine the effectiveness of this intervention.',
    usage: 'Government failure evaluation — regulators may be influenced by the industry they regulate.',
    example: 'Regulatory capture may undermine price regulation — Ofwat\'s failure to prevent water companies from paying excessive dividends while infrastructure deteriorated illustrates how the regulated firm can influence the regulator\'s decisions.',
  },
  {
    id: 'micro-4',
    category: 'micro',
    phrase: 'The Coase Theorem suggests that private bargaining could resolve this without government intervention, if transaction costs are sufficiently low.',
    usage: 'Evaluate government intervention in externality markets — when does private solution work?',
    example: 'The Coase Theorem suggests private bargaining could resolve this pollution dispute without government intervention — however, the millions of affected parties make negotiation costs prohibitive, justifying the Pigouvian carbon tax.',
  },
  {
    id: 'micro-5',
    category: 'micro',
    phrase: 'In a monopsonistic labour market, this analysis reverses — a higher minimum wage may increase both wages and employment.',
    usage: 'Monopsony counter-argument to standard NMW analysis.',
    example: 'In a monopsonistic labour market, such as healthcare dominated by NHS Trusts, this analysis reverses — the minimum wage corrects the monopsony distortion, raising wages and employment simultaneously.',
  },
  {
    id: 'micro-6',
    category: 'micro',
    phrase: 'Information asymmetry means that the standard competitive analysis may not hold.',
    usage: 'Markets with asymmetric information (used cars, insurance, healthcare) fail in predictable ways.',
    example: 'Information asymmetry in the used car market (Akerlof\'s "market for lemons") means buyers cannot distinguish quality — adverse selection drives good-quality cars out of the market, causing underprovision of high-quality goods.',
  },

  // ─────────────────── MACROECONOMICS PHRASES ───────────────────

  {
    id: 'macro-1',
    category: 'macro',
    phrase: 'The fiscal multiplier in an open economy is significantly smaller than in a closed economy.',
    usage: 'Evaluate fiscal policy effectiveness — leakages reduce the multiplier.',
    example: 'The fiscal multiplier in the open UK economy (where imports are ~30% of GDP) is estimated at only 0.6–0.8 — far below the textbook Keynesian multiplier — because a significant proportion of additional income leaks abroad through imports.',
  },
  {
    id: 'macro-2',
    category: 'macro',
    phrase: 'However, at the zero lower bound, monetary policy becomes ineffective (liquidity trap) and fiscal policy is the primary tool.',
    usage: 'Key evaluation of fiscal vs monetary — context-dependent effectiveness.',
    example: 'However, at the zero lower bound, monetary policy becomes ineffective — in 2009–2021, the BoE held rates near-zero and relied on QE with limited effectiveness, making fiscal policy (furlough scheme, NHS spending) the primary stabilisation tool.',
  },
  {
    id: 'macro-3',
    category: 'macro',
    phrase: 'Supply-side policies have significant time lags — education reform takes 12–15 years to affect the workforce.',
    usage: 'Evaluate supply-side policies — cannot address cyclical unemployment in the short run.',
    example: 'Supply-side policies have significant time lags — infrastructure investment typically takes 5–10 years from planning to completion, meaning they cannot address an immediate demand-deficient recession (as Keynes\'s famous quote recognises).',
  },
  {
    id: 'macro-4',
    category: 'macro',
    phrase: 'The long-run Phillips Curve (Friedman) is vertical at the NAIRU — the unemployment/inflation trade-off disappears as expectations adjust.',
    usage: 'Phillips curve long-run evaluation — expansionary policy causes accelerating inflation, not permanently lower unemployment.',
    example: 'The long-run Phillips Curve is vertical at the NAIRU — once workers adjust wage expectations to higher inflation, the SRPC shifts upward. UK unemployment cannot be permanently held below the natural rate by AD expansion without accelerating inflation.',
  },
  {
    id: 'macro-5',
    category: 'macro',
    phrase: 'UK national debt at approximately 96% of GDP constrains the scope for further fiscal expansion.',
    usage: 'Debt sustainability evaluation — high debt limits fiscal space.',
    example: 'UK public sector net debt at approximately £2.9 trillion (95.6% GDP, 2025) constrains the scope for further fiscal expansion — higher debt may raise gilt yields through crowding out, and debt sustainability concerns may trigger a loss of market confidence (as the 2022 Truss mini-Budget demonstrated).',
  },
  {
    id: 'macro-6',
    category: 'macro',
    phrase: 'The Bank of England\'s independence (Bank of England Act 1998) means monetary policy is insulated from short-term political pressures — an advantage over fiscal policy.',
    usage: 'Monetary vs fiscal policy comparison — credibility and independence.',
    example: 'The Bank of England\'s independence (Bank of England Act 1998) means the MPC\'s inflation target is credible — anchoring long-run inflation expectations in a way that politically-controlled fiscal policy cannot replicate.',
  },

  // ─────────────────── TRADE & GLOBALISATION ───────────────────

  {
    id: 'trade-1',
    category: 'trade',
    phrase: 'The gains from trade are in aggregate, but the distributional consequences may be severe.',
    usage: 'Free trade evaluation — winners and losers within countries.',
    example: 'The gains from trade are in aggregate — consumer surplus rises through lower prices and greater variety — but the distributional consequences may be severe, with import-competing sectors (UK manufacturing) facing concentrated job losses and community deindustrialisation.',
  },
  {
    id: 'trade-2',
    category: 'trade',
    phrase: 'Carbon leakage undermines the effectiveness of unilateral carbon pricing.',
    usage: 'Carbon policy evaluation — firms relocate to lower-regulation countries.',
    example: 'Carbon leakage undermines the effectiveness of a unilateral carbon tax — if UK steel producers face carbon costs that Chinese competitors do not, production may relocate abroad, shifting rather than reducing global emissions.',
  },
  {
    id: 'trade-3',
    category: 'trade',
    phrase: 'The Marshall-Lerner condition must hold for depreciation to improve the current account.',
    usage: 'Exchange rate evaluation — depreciation only helps if PEDx + PEDm > 1.',
    example: 'The Marshall-Lerner condition (PEDx + PEDm > 1) must hold for depreciation to improve the current account — UK empirical estimates suggest the condition is barely satisfied, and the J-curve means the account worsens before it improves.',
  },
  {
    id: 'trade-4',
    category: 'trade',
    phrase: 'The US tariff escalation of 2025 demonstrates the real-world cost of protectionism.',
    usage: 'Current affairs example — US tariffs raised to 9.6% average (80-year high) in 2025.',
    example: 'The US tariff escalation of 2025 — average US duties rising from 2.4% to 9.6%, the highest in 80 years — imposed $195bn in additional costs on US consumers and triggered retaliatory tariffs, demonstrating the deadweight loss from departing from comparative advantage.',
  },
  {
    id: 'trade-5',
    category: 'trade',
    phrase: 'The current account deficit is sustainable if financed by FDI rather than short-term portfolio flows.',
    usage: 'Current account evaluation — composition of financing matters.',
    example: 'The UK\'s current account deficit (-2.4% GDP, 2025) is broadly sustainable because it is financed predominantly by FDI — foreign direct investment in UK businesses and real estate — rather than volatile short-term "hot money" that could reverse rapidly in a confidence crisis.',
  },
]
