// ============================================================
// AQA A-Level Economics — Real World Economic Events
// All figures verified from primary sources / reputable data
// ============================================================

export const eventCategories = [
  { id: 'all',            label: 'All Events' },
  { id: 'financial',      label: 'Financial Crises' },
  { id: 'macro-policy',   label: 'Macro Policy' },
  { id: 'trade',          label: 'Trade & Exchange Rates' },
  { id: 'supply-shock',   label: 'Supply Shocks' },
  { id: 'uk-specific',    label: 'UK-Specific' },
]

export const realEvents = [

  // ─────────────────────────────────────────────────────────
  // 1. GLOBAL FINANCIAL CRISIS 2007–09
  // ─────────────────────────────────────────────────────────
  {
    id: 'gfc-2008',
    title: '2007–09 Global Financial Crisis',
    subtitle: 'The worst financial collapse since the 1930s Great Depression',
    dates: '2007–2009',
    category: 'financial',
    severity: 'critical',
    tags: ['Banking', 'Recession', 'QE', 'Fiscal Stimulus', 'Systemic Risk'],

    summary: 'The Global Financial Crisis originated in the US subprime mortgage market. Banks had packaged millions of high-risk mortgages into complex financial instruments (Mortgage-Backed Securities and Collateralised Debt Obligations) and sold them globally. When US house prices fell from 2006, defaults surged, these instruments became worthless, and the interconnected global banking system froze. The UK suffered its deepest recession since the 1930s, requiring the largest bank bailout in British history.',

    cause: {
      heading: 'Economic Causes',
      points: [
        'Moral hazard: US banks originated mortgages and immediately sold them on (the "originate-to-distribute" model), removing the incentive to assess borrower creditworthiness — a classic principal-agent problem.',
        'Information failure and asymmetric information: mortgage-backed securities were so complex that even the banks holding them did not understand the underlying risk. Credit rating agencies (Moody\'s, S&P) assigned AAA ratings to instruments that were fundamentally risky.',
        'Systemic risk and contagion: global banks were interconnected through interbank lending. When one institution (Lehman Brothers) failed, uncertainty about who held toxic assets froze the entire interbank market.',
        'Demand-side shock: the resulting credit crunch reduced consumer borrowing and business investment, causing aggregate demand to collapse.',
        'Regulatory failure: light-touch financial regulation (deregulation from the 1980s) allowed excessive leverage — some investment banks had debt-to-equity ratios of 30:1.',
      ],
    },

    timeline: [
      { date: 'Aug 2007',  event: 'BNP Paribas freezes three funds — first sign of the credit crunch. Interbank lending rates spike.' },
      { date: 'Sep 2007',  event: 'Northern Rock receives emergency Bank of England liquidity support. First UK bank run since 1866 — queues outside branches. Nationalised February 2008.' },
      { date: 'Mar 2008',  event: 'US investment bank Bear Stearns collapses; rescued by JPMorgan with Fed backing for $29bn in bad assets.' },
      { date: 'Sep 2008',  event: 'Lehman Brothers files for bankruptcy (15 Sep) — the largest bankruptcy in US history ($639bn assets). Global markets collapse. AIG rescued by US government with $85bn.' },
      { date: 'Oct 2008',  event: 'UK government announces £500bn bank rescue package: £50bn direct capital injection into RBS and HBOS/Lloyds, £250bn loan guarantees, £200bn liquidity support. RBS receives £45.5bn — the largest bank bailout in history at that time.' },
      { date: 'Mar 2009',  event: 'Bank of England cuts Bank Rate to 0.5% (historic low) and launches Quantitative Easing — initially £75bn of gilt purchases.' },
      { date: '2009',      event: 'UK GDP falls 4.3% in 2009, the worst annual contraction since 1931. UK recession lasts five quarters (Q2 2008 – Q3 2009). Peak-to-trough GDP fall: 6.3%.' },
    ],

    policyResponse: {
      heading: 'Policy Response',
      monetary: 'Bank of England cut Bank Rate from 5.0% (Oct 2008) to 0.5% (Mar 2009). Launched Quantitative Easing: the Bank created new money to purchase government gilts and corporate bonds, ultimately buying £375bn by 2012 (later expanded to £895bn by 2021). Goal: lower long-term borrowing costs and encourage lending when conventional monetary policy was constrained at the zero lower bound.',
      fiscal: 'Chancellor Alistair Darling\'s 2008 Pre-Budget Report cut VAT temporarily from 17.5% to 15% (cost ~£12.5bn) and announced discretionary fiscal stimulus. UK public sector net borrowing reached £156bn (10.2% of GDP) in 2009–10 — the largest peacetime deficit in UK history. The UK joined the G20 coordinated global fiscal stimulus.',
      financial: 'Bank of England and Treasury provided emergency liquidity. The Financial Services Authority (FSA) temporarily banned short-selling of financial stocks. RBS and Lloyds were part-nationalised. UK Asset Protection Scheme (APS) provided government insurance for £282bn of toxic assets held by RBS.',
    },

    outcome: {
      heading: 'What Actually Happened',
      points: [
        'UK GDP fell 6.3% peak-to-trough (2008–09), the worst recession since the 1930s.',
        'UK unemployment rose from 5.2% (2008) to a peak of 8.4% in late 2011.',
        'Government debt rose from 36% of GDP (2007–08) to 78% of GDP (2013–14) as tax revenues fell and borrowing surged.',
        'UK public sector net borrowing peaked at £156.7bn (10.2% of GDP) in 2009–10.',
        'The bank bailout ultimately cost taxpayers approximately £23bn net (after asset sales and dividends), far less than feared.',
        'QE kept long-term interest rates low but critics argued it inflated asset prices and worsened wealth inequality.',
        'The UK economy did not return to its pre-crisis output level until 2013.',
        'The crisis triggered the 2010–2016 austerity programme under the Coalition government.',
      ],
    },

    keyFacts: [
      'Lehman Brothers bankruptcy: 15 September 2008 — $639bn in assets',
      'UK bank bailout package: £500bn (October 2008)',
      'RBS capital injection: £45.5bn — largest single bank rescue at the time',
      'UK GDP peak-to-trough fall: 6.3% (2008–09)',
      'Bank Rate cut to 0.5%: March 2009 (historic low at the time)',
      'QE programme: £375bn by end of 2012 (first phase)',
      'UK fiscal deficit: £156.7bn / 10.2% of GDP in 2009–10',
      'UK unemployment peak: 8.4% in late 2011',
      'UK debt/GDP ratio: rose from 36% (2007–08) to 78% (2013–14)',
      'Northern Rock bank run: September 2007 — first UK bank run since 1866',
    ],

    examRelevance: [
      { topic: 'Monetary Policy', use: 'Case study for QE, zero lower bound, unconventional monetary policy' },
      { topic: 'Fiscal Policy',   use: 'Example of discretionary fiscal stimulus, Keynesian multiplier in recession' },
      { topic: 'Market Failure',  use: 'Systemic risk, moral hazard, asymmetric information in financial markets' },
      { topic: 'Financial Markets', use: 'Credit crunch mechanism, contagion, leverage, securitisation' },
      { topic: 'Economic Growth', use: 'Demand-side recession, hysteresis effects on long-run output' },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 2. 2022 UK COST OF LIVING / INFLATION CRISIS
  // ─────────────────────────────────────────────────────────
  {
    id: 'inflation-2022',
    title: '2021–23 UK Cost of Living Crisis',
    subtitle: 'Inflation hits 11.1% — the highest rate since 1981',
    dates: '2021–2023',
    category: 'macro-policy',
    severity: 'critical',
    tags: ['Inflation', 'Interest Rates', 'Energy Prices', 'Real Wages', 'Monetary Policy'],

    summary: 'Following the COVID-19 pandemic, a combination of supply chain disruptions, a surge in post-lockdown consumer demand, and Russia\'s invasion of Ukraine (February 2022) — which sent gas and energy prices to record highs — drove UK CPI inflation to 11.1% in October 2022, the highest since 1981. The Bank of England responded with the fastest cycle of interest rate rises in 30 years, raising Bank Rate from 0.1% to 5.25%. Real wages fell for an extended period, creating the worst squeeze on living standards since the 1950s.',

    cause: {
      heading: 'Economic Causes',
      points: [
        'Cost-push inflation (supply-side): Russia\'s invasion of Ukraine (February 2022) drove wholesale gas prices to record levels — UK gas prices rose over 400% in 2021–22. This fed directly into household energy bills and raised production costs across the economy.',
        'Demand-pull inflation (demand-side): post-COVID pent-up demand surged as economies reopened in 2021, while supply chains were still disrupted. UK consumer spending rebounded sharply, financed partly by pandemic savings.',
        'Supply chain disruption: COVID-related factory closures in Asia, port backlogs, and a global semiconductor shortage reduced the supply of goods, pushing up prices. Global shipping costs rose ~500% from pre-pandemic levels.',
        'Energy price mechanism: the UK\'s energy price cap (set by Ofgem, reviewed every 3 months from October 2022) meant household energy bills tracked wholesale gas prices with a lag. Bills rose from ~£1,000/year to a projected £3,549 from October 2022 before the government\'s Energy Price Guarantee capped the average bill at £2,500.',
        'Tight labour market: unemployment fell to 3.5% by late 2022 (lowest since 1974), generating wage pressures that contributed to services inflation persisting even as goods inflation fell.',
      ],
    },

    timeline: [
      { date: 'Dec 2021', event: 'Bank of England raises Bank Rate from 0.1% to 0.25% — first rate rise since 2018. CPI at 5.4%.' },
      { date: 'Feb 2022', event: 'Russia invades Ukraine. European gas prices spike. Brent crude rises above $100/barrel.' },
      { date: 'Apr 2022', event: 'Ofgem energy price cap rises 54% to £1,971/year. CPI reaches 9.0%.' },
      { date: 'Jun 2022', event: 'CPI hits 9.1% — highest since 1982. Bank Rate at 1.25%.' },
      { date: 'Oct 2022', event: 'CPI peaks at 11.1% — highest since January 1981. Government\'s Energy Price Guarantee (£2,500 average bill) takes effect. Bank Rate at 2.25%.' },
      { date: 'Feb 2023', event: 'Bank Rate reaches 4.0%. Energy Price Guarantee extended to April 2023 at £2,500.' },
      { date: 'Aug 2023', event: 'Bank Rate reaches 5.25% — highest since 2008. CPI at 6.8%, falling from peak.' },
      { date: 'Oct 2023', event: 'CPI falls to 4.6%. Bank Rate held at 5.25%.' },
      { date: 'Feb 2024', event: 'CPI at 3.4%. Bank of England signals rate cuts ahead.' },
      { date: 'Aug 2024', event: 'Bank Rate cut to 5.0% — first cut since March 2020. CPI at 2.2%, near 2% target.' },
    ],

    policyResponse: {
      heading: 'Policy Response',
      monetary: 'The Bank of England raised Bank Rate 14 consecutive times from 0.1% (December 2021) to 5.25% (August 2023) — the fastest tightening cycle since the early 1990s. The MPC also began quantitative tightening (selling gilts back to the market, reducing the balance sheet from £895bn). Rate rises aimed to reduce consumer borrowing, moderate demand, and anchor inflation expectations.',
      fiscal: 'The government announced several support packages: the Energy Bills Support Scheme (£400 non-repayable discount for all households); the Energy Price Guarantee (capping the average household bill at £2,500 from October 2022); Cost of Living Payments to means-tested benefit recipients (£650 in 2022, £900 in 2023–24). Total energy support cost approximately £55bn in 2022–23. Chancellor Jeremy Hunt\'s November 2022 Autumn Statement reversed most of Kwarteng\'s mini-budget tax cuts and announced public spending freezes.',
      financial: 'Ofgem reformed the energy price cap to a quarterly review system (from 3-month to 3-month) and later to a 3-month rolling cap. The government established a Windfall Tax (Energy Profits Levy) on North Sea oil and gas producers — initially 25% surcharge (May 2022), raised to 35% (January 2023) — projected to raise ~£40bn by 2028.',
    },

    outcome: {
      heading: 'What Actually Happened',
      points: [
        'CPI peaked at 11.1% in October 2022, falling to 2.2% by August 2024 — close to the 2% target.',
        'Real wages (adjusted for inflation) fell for 20 consecutive months — the worst sustained squeeze since at least the 1950s.',
        'UK mortgage rates on 2-year fixed deals rose from ~1% (early 2022) to over 6% (mid-2023), adding hundreds of pounds per month to millions of homeowners\' bills.',
        'UK GDP grew only 0.1% in 2023 — narrowly avoiding recession but with significant stagnation.',
        'The energy support schemes cost £55–69bn (various estimates) — adding substantially to public debt.',
        'Services inflation proved sticky: even as goods inflation fell sharply by mid-2023, services CPI remained around 6–7% through most of 2023 due to wage pressures.',
        'The Bank of England began cutting rates in August 2024 (to 5.0%), then November 2024 (to 4.75%), as inflation returned towards target.',
      ],
    },

    keyFacts: [
      'CPI peak: 11.1% in October 2022 — highest since January 1981',
      'Bank Rate cycle: 0.1% (Dec 2021) → 5.25% (Aug 2023) — 14 consecutive rises',
      'Energy Price Guarantee: average household bill capped at £2,500/year (Oct 2022)',
      'Total government energy support: ~£55bn in 2022–23',
      'Real wage fall: 20 consecutive months of declining real pay',
      'UK unemployment at 3.5% in late 2022 — lowest since 1974',
      'Windfall tax on North Sea producers: raised to 35% surcharge in Jan 2023',
      'First Bank Rate cut since COVID: August 2024 (5.25% → 5.0%)',
      'CPI returned to 2.2% by August 2024',
    ],

    examRelevance: [
      { topic: 'Inflation',         use: 'Distinguishing cost-push (energy, supply chain) from demand-pull causes; measuring CPI' },
      { topic: 'Monetary Policy',   use: 'Bank Rate transmission mechanism; limits of monetary policy against supply-side inflation' },
      { topic: 'Fiscal Policy',     use: 'Energy support schemes as automatic stabilisers; trade-off between support and debt' },
      { topic: 'Market Failure',    use: 'Energy market failure; Ofgem price regulation; windfall tax as Pigouvian instrument' },
      { topic: 'Living Standards',  use: 'Real wage squeeze; inequality impact (lower-income households most exposed)' },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 3. EUROZONE SOVEREIGN DEBT CRISIS 2010–12
  // ─────────────────────────────────────────────────────────
  {
    id: 'eurozone-crisis',
    title: '2010–12 Eurozone Sovereign Debt Crisis',
    subtitle: '"Whatever it takes" — Draghi saves the euro',
    dates: '2010–2012',
    category: 'financial',
    severity: 'critical',
    tags: ['Sovereign Debt', 'Austerity', 'ECB', 'Monetary Union', 'Fiscal Policy'],

    summary: 'Following the 2008 financial crisis, several Eurozone countries found themselves unable to finance their government debt at sustainable interest rates. Greece, Ireland, Portugal, Spain, and Cyprus required external bailouts. The fundamental tension was the Mundell-Fleming trilemma within the euro: member states had surrendered monetary policy to the ECB but retained fiscal sovereignty, creating a structural imbalance. ECB President Mario Draghi\'s pledge in July 2012 to do "whatever it takes" to preserve the euro — backed by the Outright Monetary Transactions (OMT) programme — ultimately stabilised the crisis.',

    cause: {
      heading: 'Economic Causes',
      points: [
        'The Mundell-Fleming "impossible trinity": euro membership combined free capital flows and a fixed exchange rate, removing independent monetary policy. Countries could not devalue to restore competitiveness.',
        'Fiscal profligacy and statistical misrepresentation: Greece had been running large deficits partly concealed from EU statistics. In late 2009, the newly elected government revealed the 2009 deficit was 15.4% of GDP — not 3.7% as previously reported.',
        'Competitiveness divergence: within the euro, southern European countries (particularly Greece, Spain, Portugal) experienced higher inflation and unit labour costs than Germany, eroding export competitiveness. Without exchange rate adjustment, the only mechanism for rebalancing was internal devaluation (wage cuts and deflation) — economically painful.',
        'Contagion and self-fulfilling debt spirals: as bond markets demanded higher interest rates to hold Greek debt (yields rose above 30%), the higher borrowing costs made Greece\'s debt even less sustainable — a vicious cycle.',
        'Banking-sovereign doom loop: European banks held large quantities of their own government bonds. If governments defaulted, banks would collapse; if banks needed bailouts, government debt would rise — each reinforcing the other.',
      ],
    },

    timeline: [
      { date: 'Oct 2009',  event: 'Greek government reveals true fiscal deficit: 15.4% of GDP, not 3.7%. Markets panic.' },
      { date: 'May 2010',  event: 'Greece receives first bailout: €110bn from IMF, ECB, and EU (the "Troika"). In exchange: severe austerity — spending cuts and tax rises.' },
      { date: 'Nov 2010',  event: 'Ireland receives €85bn bailout after its banking system collapses from property bubble losses.' },
      { date: 'May 2011',  event: 'Portugal receives €78bn bailout.' },
      { date: 'Feb 2012',  event: 'Greece receives second bailout of €130bn — the largest sovereign rescue in history at the time. Private creditors accept 53.5% "haircut" on Greek bond holdings (Private Sector Involvement, PSI).' },
      { date: 'Jun 2012',  event: 'Spain receives up to €100bn in banking sector support. Spanish 10-year bond yields rise above 7%.' },
      { date: 'Jul 2012',  event: 'ECB President Mario Draghi: "Within our mandate, the ECB is ready to do whatever it takes to preserve the euro. And believe me, it will be enough." Bond markets immediately stabilise.' },
      { date: 'Sep 2012',  event: 'ECB announces Outright Monetary Transactions (OMT): unlimited purchase of short-term government bonds of countries under adjustment programmes. Never actually used — the announcement alone was sufficient.' },
      { date: '2013',      event: 'Cyprus receives €10bn bailout with controversial "bail-in" of bank depositors (accounts over €100,000). Eurozone crisis gradually recedes.' },
    ],

    policyResponse: {
      heading: 'Policy Response',
      monetary: 'The ECB initially resisted buying sovereign bonds (seen as monetary financing of governments, prohibited by Treaty). After Draghi\'s appointment, the ECB launched OMT (September 2012) — a conditional unlimited bond-buying programme that was never activated but broke the self-fulfilling debt spiral by removing the "redenomination risk" (fear of countries leaving the euro). The ECB also cut rates and provided cheap long-term loans to banks (LTROs — Long-Term Refinancing Operations, €1tn in December 2011 and February 2012).',
      fiscal: 'Bailout countries were required by the Troika (EU, ECB, IMF) to implement harsh austerity: Greece undertook 12+ rounds of spending cuts and tax rises. Greek primary expenditure fell ~30% in real terms between 2009 and 2014. Ireland, Portugal, and Spain also implemented significant fiscal consolidation. The EU established the European Stability Mechanism (ESM) — a permanent €500bn rescue fund.',
      financial: 'The European Banking Authority (EBA) conducted stress tests. The Banking Union was agreed (2012–14), establishing the Single Supervisory Mechanism (ECB supervises major banks) and Single Resolution Mechanism (orderly bank wind-down). This addressed the bank-sovereign doom loop.',
    },

    outcome: {
      heading: 'What Actually Happened',
      points: [
        'Greece\'s GDP fell approximately 25% between 2008 and 2013 — deeper than the US Great Depression.',
        'Greek unemployment peaked at 27.9% in 2013; youth unemployment exceeded 60%.',
        'The Draghi "whatever it takes" speech was arguably the single most effective piece of monetary policy communication in history — it stabilised markets without spending a single euro.',
        'No Eurozone country left the euro, despite fears of "Grexit" and later "Brexit" (UK was never in the euro).',
        'The austerity programmes were deeply controversial: the IMF\'s own research (Blanchard & Leigh, 2013) found that fiscal multipliers had been underestimated — austerity caused larger output losses than projected, making debt-to-GDP ratios worse, not better.',
        'Greece did not fully exit its bailout until August 2018.',
        'The crisis exposed fundamental structural flaws in the euro\'s design — a monetary union without fiscal union or a mechanism for internal balance-of-payments adjustment.',
      ],
    },

    keyFacts: [
      'Greece\'s 2009 deficit: 15.4% of GDP (vs. 3.7% reported)',
      'First Greek bailout: €110bn (May 2010)',
      'Second Greek bailout: €130bn (February 2012) — largest sovereign rescue in history at the time',
      'Greek GDP fall: ~25% between 2008 and 2013',
      'Greek unemployment peak: 27.9% in 2013',
      'Youth unemployment in Greece: over 60% at peak',
      'Draghi "whatever it takes" speech: 26 July 2012',
      'OMT announced: September 2012 — never activated',
      'ECB LTROs: ~€1tn provided to European banks in Dec 2011 and Feb 2012',
      'ESM capacity: €500bn permanent rescue fund',
    ],

    examRelevance: [
      { topic: 'Monetary Policy',   use: 'Limits of monetary policy in monetary union; ECB as lender of last resort debate; OMT as unconventional policy' },
      { topic: 'Fiscal Policy',     use: 'Austerity vs. stimulus debate; fiscal multiplier controversy; IMF multiplier research' },
      { topic: 'International Trade', use: 'Mundell-Fleming trilemma; internal vs. external balance; fixed exchange rate consequences' },
      { topic: 'Economic Growth',   use: 'Hysteresis; impact of austerity on long-run output; debt sustainability' },
      { topic: 'Macroeconomic Objectives', use: 'Conflict between inflation, growth, and debt targets in a currency union' },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 4. COVID-19 ECONOMIC SHOCK 2020
  // ─────────────────────────────────────────────────────────
  {
    id: 'covid-2020',
    title: '2020 COVID-19 Economic Shock',
    subtitle: 'The UK\'s largest peacetime fiscal expansion since World War II',
    dates: '2020–2021',
    category: 'macro-policy',
    severity: 'critical',
    tags: ['GDP Collapse', 'Furlough', 'Fiscal Deficit', 'QE', 'Supply Shock'],

    summary: 'The COVID-19 pandemic caused the sharpest economic contraction in the UK\'s recorded history. In 2020 UK GDP fell 9.9% — the largest annual fall since at least 1709. The government responded with unprecedented fiscal intervention: the Coronavirus Job Retention Scheme (furlough) protected up to 9.6 million jobs; total pandemic-related borrowing exceeded £310bn. The Bank of England cut rates to a historic low of 0.1% and expanded QE to £895bn.',

    cause: {
      heading: 'Economic Causes',
      points: [
        'Simultaneous supply and demand shock: lockdowns physically prevented production (supply shock — SRAS shifted left) while also destroying consumer confidence and preventing spending on services (demand shock — AD shifted left). This dual shock is unique in economic history.',
        'Sectoral concentration: the services sector — which accounts for approximately 80% of UK GDP — was hardest hit. Hospitality, retail, travel, and entertainment essentially shut down. Manufacturing, construction, and agriculture were also disrupted but less severely.',
        'Uncertainty shock: faced with unprecedented uncertainty, businesses and households dramatically increased precautionary saving, further suppressing AD (a Keynesian "paradox of thrift" at macro scale).',
        'Supply chain disruption: global supply chains were disrupted as factories in China and Southeast Asia closed, creating shortages of goods ranging from PPE to semiconductors.',
        'Labour market dislocation: without the furlough scheme, economists estimated UK unemployment could have risen above 20%. The furlough scheme effectively suspended the labour market rather than allowing mass unemployment.',
      ],
    },

    timeline: [
      { date: 'Mar 2020',  event: 'First UK lockdown announced (23 March). Bank of England cuts Bank Rate from 0.75% to 0.1% (19 March) — historic low. Bank Rate cut from 0.75% to 0.25% on 11 March, then to 0.1% on 19 March. Emergency QE expansion: £200bn.' },
      { date: 'Apr 2020',  event: 'Coronavirus Job Retention Scheme (furlough) operational. Government pays 80% of furloughed workers\' wages (up to £2,500/month). At peak, 8.9 million jobs furloughed.' },
      { date: 'Apr 2020',  event: 'UK GDP falls 19.8% in April alone — the largest monthly fall ever recorded.' },
      { date: 'Q2 2020',   event: 'UK GDP falls 19.3% in Q2 2020 — the largest quarterly contraction on record. Roughly twice the fall in the worst quarter of the 2008–09 crisis.' },
      { date: 'Nov 2020',  event: 'Second lockdown. Furlough scheme extended to March 2021 (later to September 2021). QE expanded to £895bn total.' },
      { date: 'Jan 2021',  event: 'Third lockdown. Vaccinations begin (UK first major country to begin mass vaccination, December 2020).' },
      { date: '2020 Full year', event: 'UK GDP falls 9.9% for 2020 as a whole — worst annual fall since at least 1709. PSNB reaches £314.7bn (14.8% of GDP).' },
      { date: 'Q2 2021',   event: 'UK GDP rebounds 5.6% as restrictions ease. "Eat Out to Help Out" scheme (August 2020) had injected £849m into the hospitality sector.' },
      { date: 'Sep 2021',  event: 'Furlough scheme ends. Total cost: approximately £70bn.' },
    ],

    policyResponse: {
      heading: 'Policy Response',
      monetary: 'Bank Rate cut from 0.75% to 0.1% (two emergency cuts in March 2020). QE expanded in three tranches: £200bn (March 2020), £100bn (June 2020), £150bn (November 2020) — total programme reached £895bn. The Bank also launched the Term Funding Scheme with additional incentives (TFSME) to ensure cheap credit reached businesses. The government guaranteed £80bn in bounce-back loans and CBILS loans to businesses.',
      fiscal: 'The Coronavirus Job Retention Scheme (furlough): government covered 80% of wages (up to £2,500/month) for workers who could not work. Total cost: ~£70bn, protecting approximately 11.7 million jobs over its lifetime (some people furloughed multiple times). Self-Employment Income Support Scheme (SEISS): grants to self-employed workers covering up to 80% of average monthly profits. VAT deferrals for businesses. The NHS received additional emergency funding. Total COVID-related fiscal support: ~£310bn in 2020–21 alone.',
      financial: 'Banks were instructed to offer 3-month mortgage payment holidays (later extended). Business rates were abolished for hospitality, retail, and leisure sectors in 2020–21. The government provided ~£80bn in guaranteed loans through the Bounce Back Loan Scheme and Coronavirus Business Interruption Loan Scheme.',
    },

    outcome: {
      heading: 'What Actually Happened',
      points: [
        'UK GDP fell 9.9% in 2020 — the worst annual fall since at least 1709 and among the worst in the G7.',
        'UK unemployment rose only to 5.2% (peak) — far below early forecasts of 10–20% — due to the furlough scheme.',
        'UK public sector net borrowing reached £314.7bn in 2020–21 (14.8% of GDP) — the largest peacetime deficit in UK history.',
        'UK debt/GDP ratio rose above 100% for the first time since the 1960s.',
        'The furlough scheme is widely credited with preventing mass unemployment and permanent labour market scarring.',
        'UK GDP recovered to pre-pandemic levels by November 2021 — faster than many expected, partly due to rapid vaccination.',
        'Post-COVID inflation (2021–23) was partly a consequence of demand surge as economies reopened while supply chains remained constrained.',
        '"Long COVID" economic effects: labour force participation fell as approximately 2.8 million people became economically inactive due to long-term sickness by 2023.',
      ],
    },

    keyFacts: [
      'UK GDP fall 2020: 9.9% — worst annual fall since at least 1709',
      'Q2 2020 GDP fall: 19.3% — largest quarterly contraction on record',
      'Furlough scheme: ~8.9 million jobs at peak (May 2020)',
      'Furlough total cost: approximately £70bn',
      'Total COVID fiscal support: ~£310bn in 2020–21',
      'PSNB 2020–21: £314.7bn (14.8% of GDP)',
      'UK debt exceeded 100% of GDP — first time since the 1960s',
      'Bank Rate: 0.1% from March 2020 to December 2021',
      'QE expanded to £895bn total',
      'UK unemployment peak: 5.2% — well below pre-crisis forecasts of 10–20%',
    ],

    examRelevance: [
      { topic: 'Fiscal Policy',        use: 'Largest peacetime fiscal expansion; furlough as active labour market policy; deficit financing debate' },
      { topic: 'Monetary Policy',      use: 'QE at zero lower bound; limits of conventional monetary policy' },
      { topic: 'Unemployment',         use: 'Role of furlough in preventing cyclical unemployment; structural changes post-COVID' },
      { topic: 'Economic Growth',      use: 'Simultaneous supply and demand shock; V-shaped vs. L-shaped recovery debate' },
      { topic: 'Supply-Side Policy',   use: 'Loan guarantee schemes; labour market flexibility; post-COVID productivity debate' },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 5. SEPTEMBER 2022 UK MINI-BUDGET CRISIS
  // ─────────────────────────────────────────────────────────
  {
    id: 'mini-budget-2022',
    title: 'September 2022 UK Mini-Budget Crisis',
    subtitle: '£45bn in unfunded tax cuts crashes the gilt market in 38 days',
    dates: 'September–October 2022',
    category: 'uk-specific',
    severity: 'critical',
    tags: ['Fiscal Policy', 'Gilt Market', 'Exchange Rate', 'Credibility', 'Pension Funds'],

    summary: 'On 23 September 2022, Chancellor Kwasi Kwarteng announced the largest package of unfunded tax cuts in 50 years — £45bn — in what was called the "Growth Plan" but quickly became known as the "mini-budget". Within days, financial markets reacted with alarm: the pound fell to a historic low of $1.03, UK government bond (gilt) yields surged (prices collapsed), and defined-benefit pension funds faced a liquidity crisis that required an emergency Bank of England intervention. The episode became a global case study in how rapidly fiscal credibility can collapse.',

    cause: {
      heading: 'Economic Causes',
      points: [
        'Fiscal credibility shock: the government announced major unfunded tax cuts (abolishing the 45p top income tax rate, reversing the National Insurance rise, cancelling the planned corporation tax rise from 19% to 25%, stamp duty cuts) without any accompanying spending cuts or OBR independent forecast. Markets concluded the fiscal position was unsustainable.',
        'Ricardian Equivalence in action: rational bond investors anticipated that unfunded tax cuts today meant higher future borrowing, higher debt, and either future tax rises or monetisation (QE). They sold gilts to reflect higher risk, pushing yields up.',
        'Liability-Driven Investment (LDI) crisis: defined-benefit pension funds use LDI strategies to hedge their long-term liabilities using interest rate derivatives. The sudden, violent rise in gilt yields caused margin calls on these derivatives that pension funds could not meet, forcing emergency gilt sales that further pushed yields higher — a self-reinforcing spiral.',
        'Exchange rate confidence shock: the combination of looser fiscal policy (stimulus) and higher borrowing sent conflicting signals. The market\'s dominant interpretation was that UK debt was becoming unsustainable, so sterling sold off sharply — a confidence/credibility crisis.',
        'Context: the mini-budget came just as the Bank of England was tightening monetary policy to fight 10%+ inflation. Expansionary fiscal policy directly contradicted contractionary monetary policy — a severe policy conflict.',
      ],
    },

    timeline: [
      { date: '6 Sep 2022',  event: 'Liz Truss becomes Prime Minister. Kwasi Kwarteng appointed Chancellor.' },
      { date: '23 Sep 2022', event: '"Growth Plan" mini-budget announced: £45bn in unfunded tax cuts including abolition of 45p income tax rate, reversal of NI rise, cancellation of corp tax rise to 25%, stamp duty cut. No OBR forecast published.' },
      { date: '26 Sep 2022', event: 'Pound falls to $1.0327 — the lowest level in sterling\'s history against the dollar. 30-year gilt yields rise above 5%, up ~2 percentage points in days.' },
      { date: '28 Sep 2022', event: 'Bank of England launches emergency £65bn gilt-buying programme (temporary) to prevent collapse of pension fund LDI strategies. This contradicted the Bank\'s own quantitative tightening programme.' },
      { date: '3 Oct 2022',  event: 'Kwarteng abandons the 45p income tax abolition — the most politically embarrassing reversal.' },
      { date: '14 Oct 2022', event: 'Kwasi Kwarteng sacked as Chancellor after just 38 days. Jeremy Hunt appointed.' },
      { date: '17 Oct 2022', event: 'Jeremy Hunt reverses almost all mini-budget measures in emergency statement — £32bn of the £45bn package reversed.' },
      { date: '20 Oct 2022', event: 'Liz Truss resigns as Prime Minister after just 45 days — the shortest tenure of any UK Prime Minister in history.' },
      { date: '25 Oct 2022', event: 'Rishi Sunak becomes Prime Minister.' },
      { date: 'Nov 2022',    event: 'Jeremy Hunt\'s Autumn Statement: spending freezes, stealth tax rises (freezing personal allowance thresholds). Fiscal credibility partially restored.' },
    ],

    policyResponse: {
      heading: 'Policy Response',
      monetary: 'The Bank of England launched an emergency temporary gilt purchase programme of up to £65bn (28 September – 14 October 2022) to stabilise the gilt market and prevent pension fund collapses. This was deeply contradictory — the Bank was simultaneously selling gilts (quantitative tightening) to fight inflation. The emergency scheme was wound down on schedule; the Bank proceeded with rate rises.',
      fiscal: 'Jeremy Hunt reversed nearly all mini-budget measures (17 October 2022): the energy price guarantee was reduced to 6 months (from 2 years); income tax plans were reversed; the corporation tax rise to 25% was reinstated. The Autumn Statement (November 2022) announced £55bn in fiscal tightening through a combination of spending cuts and stealth tax rises (freezing income tax thresholds, reducing the 45p threshold to £125,000). The OBR published an independent forecast alongside — restoring the institutional framework the mini-budget had bypassed.',
      financial: 'The Pensions Regulator and the Bank worked with pension trustees to wind down LDI positions in an orderly manner. New regulations on LDI leverage were subsequently introduced.',
    },

    outcome: {
      heading: 'What Actually Happened',
      points: [
        'Sterling fell to $1.0327 on 26 September 2022 — the lowest level on record against the dollar.',
        '30-year gilt yields rose from approximately 3.5% to over 5.1% in a matter of days.',
        'The Bank of England\'s emergency gilt programme purchased approximately £19bn of gilts (well below the £65bn ceiling) before closing.',
        'UK pension funds had to liquidate assets at distressed prices to meet margin calls — estimated losses of £500bn+ in pension fund asset values in weeks.',
        'Kwasi Kwarteng served as Chancellor for just 38 days.',
        'Liz Truss served as Prime Minister for 45 days — the shortest tenure in UK history.',
        'The episode caused lasting reputational damage to the Conservative Party on economic competence.',
        'UK mortgage rates spiked sharply in October 2022, adding to the cost of living crisis.',
        'The IMF publicly criticised the mini-budget — an extremely rare intervention in a G7 country\'s domestic fiscal policy.',
      ],
    },

    keyFacts: [
      'Mini-budget tax cut package: £45bn (23 September 2022)',
      'Pound low: $1.0327 on 26 September 2022 — record low vs. dollar',
      '30-year gilt yield rise: ~3.5% to 5.1%+ in days',
      'Bank of England emergency gilt programme: up to £65bn (active 28 Sep – 14 Oct 2022)',
      'Kwarteng tenure as Chancellor: 38 days',
      'Truss tenure as Prime Minister: 45 days — shortest in UK history',
      'Mini-budget reversal: £32bn of £45bn reversed on 17 October 2022',
      'IMF publicly criticised the mini-budget — rare intervention in G7 policy',
    ],

    examRelevance: [
      { topic: 'Fiscal Policy',       use: 'Fiscal credibility; time inconsistency; the role of independent OBR forecasting; Ricardian Equivalence' },
      { topic: 'Monetary Policy',     use: 'Conflict between fiscal expansion and monetary tightening; Bank of England emergency intervention' },
      { topic: 'Exchange Rates',      use: 'Confidence/credibility effects on currency; sterling\'s record low' },
      { topic: 'Financial Markets',   use: 'Gilt market dynamics; LDI pension fund crisis; systemic risk from leverage' },
      { topic: 'Macroeconomic Objectives', use: 'Policy conflict between growth and inflation; fiscal vs. monetary coordination' },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 6. BREXIT — ECONOMIC EFFECTS 2016–PRESENT
  // ─────────────────────────────────────────────────────────
  {
    id: 'brexit',
    title: 'Brexit: Economic Effects 2016–Present',
    subtitle: 'The UK\'s most consequential structural economic change in a generation',
    dates: '2016–present',
    category: 'trade',
    severity: 'major',
    tags: ['Trade', 'Exchange Rate', 'FDI', 'Supply Chains', 'Labour Market'],

    summary: 'On 23 June 2016, the UK voted 52% to 48% to leave the European Union. The pound immediately fell ~10% against the dollar and euro. The UK formally left the EU on 31 January 2020 and the single market and customs union on 1 January 2021. Brexit has had significant effects on UK trade, investment, inflation, and labour markets, though the counterfactual (what would have happened without Brexit) is inherently uncertain. Estimates suggest UK GDP is 4–5% smaller than it would have been had the UK remained in the EU.',

    cause: {
      heading: 'Economic Background',
      points: [
        'The EU single market provides free movement of goods, services, capital, and people. Leaving meant the UK reverted to WTO terms for goods trade (with tariffs and non-tariff barriers) unless a new trade agreement was negotiated.',
        'The UK–EU Trade and Cooperation Agreement (TCA), agreed on 24 December 2020 and provisionally applied from 1 January 2021, provides zero-tariff, zero-quota trade in goods — but with significant non-tariff barriers (customs checks, rules of origin requirements, regulatory divergence).',
        'Services trade (80% of UK GDP) is not covered by the TCA — UK financial services lost automatic EU market access ("passporting"), with limited equivalence decisions granted.',
        'Freedom of movement for EU nationals to work in the UK ended. A points-based immigration system was introduced from January 2021.',
      ],
    },

    timeline: [
      { date: '23 Jun 2016', event: 'UK votes 52%/48% to leave the EU. David Cameron resigns. Pound falls 10–15% in hours — from ~$1.50 to ~$1.22.' },
      { date: 'Mar 2017',    event: 'Article 50 triggered — formal start of 2-year EU exit process.' },
      { date: '31 Jan 2020', event: 'UK formally leaves the EU. Transition period begins (UK remains in single market/customs union until 31 December 2020).' },
      { date: '24 Dec 2020', event: 'UK–EU Trade and Cooperation Agreement (TCA) agreed — providing zero-tariff goods trade but significant non-tariff barriers.' },
      { date: '1 Jan 2021',  event: 'UK leaves single market and customs union. New customs checks, rules of origin requirements, and import declarations required. Disruption at ports.' },
      { date: '2021',        event: 'HGV driver shortage partly attributed to departure of EU nationals. Fuel and food supply chain disruptions. Care sector and hospitality face acute labour shortages.' },
      { date: '2022–23',     event: 'UK–EU Northern Ireland Protocol dispute. Windsor Framework agreed (Feb 2023), partially resolving tensions over trade arrangements for Northern Ireland.' },
      { date: '2023',        event: 'CPTPP membership agreed (UK joins the Comprehensive and Progressive Agreement for Trans-Pacific Partnership). UK signs trade deals with Australia and New Zealand.' },
    ],

    policyResponse: {
      heading: 'Policy Response',
      monetary: 'Bank of England provided emergency liquidity after the referendum vote. Governor Mark Carney gave reassurance statements. The Bank cut rates from 0.5% to 0.25% in August 2016 (citing Brexit uncertainty) and launched additional QE (£60bn gilts, £10bn corporate bonds).',
      fiscal: 'Post-referendum, the government abandoned George Osborne\'s target to achieve a budget surplus by 2020, acknowledging Brexit uncertainty. The Shared Prosperity Fund (replacing EU structural funds) was established to channel investment to left-behind regions. Post-2021, the government invested in border infrastructure and customs systems (cost: ~£1bn+).',
      financial: 'UK financial services firms moved staff and legal entities to EU hubs (Dublin, Amsterdam, Frankfurt, Luxembourg) to preserve EU market access. An estimated 7,000+ finance jobs moved to the EU in the years following the referendum, along with significant assets (€1.3tn+).',
    },

    outcome: {
      heading: 'What Actually Happened',
      points: [
        'Sterling depreciated approximately 10–15% against the dollar and euro following the vote, remaining below pre-referendum levels.',
        'UK goods trade with the EU fell sharply after January 2021. ONS data shows UK goods exports to the EU were 14% lower in 2022 than in 2018 (adjusting for global trade trends).',
        'UK goods imports from the EU also fell, but imports from non-EU countries rose — consistent with trade diversion.',
        'UK FDI inflows declined relative to other G7 countries: the UK fell from being the top destination for FDI in Europe to second or third.',
        'UK food price inflation in 2022–23 was partly attributed to post-Brexit import friction adding costs and complexity.',
        'UK labour shortages in hospitality, agriculture, and the care sector were exacerbated by reduced EU immigration.',
        'The UK\'s share of world trade in services has held up better than goods trade, partly because services remain less affected by Brexit barriers.',
        'OECD and IMF estimates suggest UK GDP is 4–5% lower than it would have been without Brexit, though this is contested and inherently uncertain.',
      ],
    },

    keyFacts: [
      'Referendum result: 52% Leave / 48% Remain (23 June 2016)',
      'Immediate sterling fall: ~10–15% (from ~$1.50 to ~$1.22)',
      'Formal EU departure: 31 January 2020',
      'Single market exit: 1 January 2021',
      'TCA: zero tariff goods trade but with non-tariff barriers',
      'Finance jobs moved to EU: estimated 7,000+ post-referendum',
      'UK goods exports to EU: approximately 14% lower (2022 vs 2018, adjusted)',
      'GDP cost estimate: 4–5% below counterfactual (OECD/IMF estimates)',
    ],

    examRelevance: [
      { topic: 'International Trade',  use: 'Non-tariff barriers; trade diversion vs. trade creation; WTO rules; comparative advantage implications' },
      { topic: 'Exchange Rates',       use: 'Currency depreciation effects; confidence channel; J-curve post-referendum' },
      { topic: 'Labour Markets',       use: 'Effects of reduced EU immigration on labour supply; sector-specific shortages' },
      { topic: 'FDI',                  use: 'Single market access and FDI attraction; financial services passporting' },
      { topic: 'Macroeconomic Objectives', use: 'Trade-off between sovereignty and economic efficiency; long-run GDP effects' },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 7. BLACK WEDNESDAY 1992 (ERM CRISIS)
  // ─────────────────────────────────────────────────────────
  {
    id: 'black-wednesday-1992',
    title: 'Black Wednesday 1992 — ERM Crisis',
    subtitle: 'Soros breaks the Bank of England; the pound is forced from the ERM',
    dates: '16 September 1992',
    category: 'uk-specific',
    severity: 'critical',
    tags: ['Exchange Rate', 'ERM', 'Speculative Attack', 'Interest Rates', 'Currency Crisis'],

    summary: 'On 16 September 1992 — "Black Wednesday" — the UK was forced to withdraw the pound from the European Exchange Rate Mechanism (ERM) after spending an estimated £3.3bn defending an unsustainable exchange rate peg. The Bank of England raised interest rates from 10% to 12%, then to 15%, all in a single day — before abandoning the peg that evening. Hedge fund manager George Soros reportedly made ~$1bn by short-selling sterling. The event destroyed the Conservative government\'s reputation for economic competence and led directly to the policy independence framework that culminated in Bank of England independence in 1997.',

    cause: {
      heading: 'Economic Causes',
      points: [
        'Unsustainable exchange rate: the UK joined the ERM in October 1990 at DM 2.95 per pound — widely regarded as too high a rate. Sterling was overvalued, making UK exports uncompetitive and maintaining the peg required interest rates higher than the domestic economy needed.',
        'German reunification shock: after German reunification (1990), the Bundesbank raised interest rates aggressively to counter inflationary pressure from reconstruction spending. Other ERM members (including the UK) were forced to keep rates high to maintain their pegs against the DM — even though their economies needed looser policy.',
        'UK recession: the UK was in recession in 1992. The domestic economy needed lower interest rates to stimulate growth. The ERM peg forced the opposite: high rates to defend sterling.',
        'Speculative attack mechanics: George Soros and other currency speculators recognised the fundamentals were unsustainable. They borrowed sterling and sold it for DM, expecting sterling to either devalue or be forced out of the ERM. The potential profit was asymmetric — if the peg held, they paid modest interest costs; if it broke, they profited enormously.',
        'Self-fulfilling dynamic: as speculation intensified, the Bank of England had to buy sterling to support the rate, depleting foreign exchange reserves. When markets judged reserves were insufficient to maintain the peg indefinitely, selling accelerated.',
      ],
    },

    timeline: [
      { date: 'Oct 1990',   event: 'UK joins the ERM at DM 2.95/£ with ±6% bands. Interest rates at 14% at time of entry — already high for the economy.' },
      { date: 'Early 1992', event: 'UK in recession. Pressure grows on government to devalue within ERM or reduce interest rates.' },
      { date: 'Summer 1992', event: 'Speculative pressure intensifies. Denmark votes against Maastricht Treaty (June 1992), raising doubts about European monetary integration — weakening commitment to ERM.' },
      { date: '16 Sep 1992', event: 'Black Wednesday. Bank of England spends ~£3.3bn buying sterling. Rates raised from 10% to 12% at 11am, then to 15% at 2:15pm. Soros and other speculators sell £10bn+ of sterling. By 7:30pm the UK suspends ERM membership. Rates cut back to 12% then 10%.' },
      { date: '17 Sep 1992', event: 'Sterling falls ~15% against DM on exit. Rates cut to 9% within weeks as domestic needs take priority.' },
      { date: '1993',        event: 'Bank Rate cut to 6% — providing significant stimulus to the UK economy. Recovery begins.' },
      { date: 'May 1997',    event: 'New Labour government grants Bank of England operational independence to set interest rates — largely inspired by the lesson that politically-motivated interest rate decisions (as in ERM era) are destabilising.' },
    ],

    policyResponse: {
      heading: 'Policy Response',
      monetary: 'On the day, the Bank of England raised Bank Rate from 10% to 12% (11am) and then to 15% (2:15pm) — extraordinary moves to try to attract capital and defend the peg. Both increases were reversed by the end of the day. Post-exit, rates were cut sharply to levels appropriate for the domestic economy (9% by end of 1992, 6% by 1993), providing significant monetary stimulus. The UK also joined the "broad ERM" — a wider fluctuation band — before effectively floating.',
      fiscal: 'The fiscal response was secondary. The Conservatives maintained their deficit-reduction programme. The combination of lower interest rates and a more competitive exchange rate (sterling fell ~15%) provided the stimulus that allowed the economy to recover through 1993–94.',
      financial: 'The Treasury and Bank coordinated foreign exchange intervention, spending approximately £3.3bn of reserves in a failed defence. Post-crisis, the UK adopted inflation targeting (formally from 1993) as a new nominal anchor for monetary policy.',
    },

    outcome: {
      heading: 'What Actually Happened',
      points: [
        'Sterling fell approximately 15% against the DM and 25% against the dollar after ERM exit.',
        'This exchange rate depreciation dramatically improved UK competitiveness, boosting exports.',
        'Interest rates fell sharply (from 10% to 6% by 1993), stimulating borrowing and investment.',
        'The UK economy recovered strongly from 1993–94, in retrospect making Black Wednesday look like a blessing in disguise economically (though a political disaster).',
        'George Soros\'s Quantum Fund reportedly made ~$1bn (some estimates higher) from the trade.',
        'The Conservative government\'s poll ratings for economic competence collapsed permanently — never recovering before the 1997 election defeat.',
        'The episode directly contributed to Bank of England independence in 1997: the lesson was that politically constrained monetary policy (maintaining an unsustainable peg for political reasons) is economically costly.',
        'The UK never rejoined the ERM and did not participate in the euro when it launched in 1999.',
      ],
    },

    keyFacts: [
      'UK joined ERM: October 1990 at DM 2.95/£',
      'Bank Rate raised to 15%: 16 September 1992 (then reversed same day)',
      'UK foreign exchange reserves spent defending peg: ~£3.3bn',
      'Soros\' estimated profit: ~$1bn',
      'Sterling fall post-exit: ~15% against DM',
      'Bank Rate cut to 6% by 1993 — sharp monetary easing',
      'Bank of England independence: granted May 1997 — direct legacy of ERM crisis',
    ],

    examRelevance: [
      { topic: 'Exchange Rates',     use: 'Fixed vs. floating exchange rates; speculative attacks; unsustainable pegs' },
      { topic: 'Monetary Policy',    use: 'Central bank independence rationale; conflict between internal and external policy objectives' },
      { topic: 'International Trade', use: 'Impossible trinity (Mundell-Fleming); competitiveness effects of depreciation' },
      { topic: 'Macroeconomic Objectives', use: 'Conflict between exchange rate target and domestic growth objective' },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 8. 1970s OIL SHOCKS & STAGFLATION
  // ─────────────────────────────────────────────────────────
  {
    id: 'stagflation-1970s',
    title: '1973–79 Oil Shocks & UK Stagflation',
    subtitle: 'The crisis that broke the Phillips curve',
    dates: '1973–1979',
    category: 'supply-shock',
    severity: 'critical',
    tags: ['Stagflation', 'Supply Shock', 'Phillips Curve', 'OPEC', 'Inflation'],

    summary: 'The 1973 OPEC oil embargo quadrupled oil prices from ~$3 to ~$12 per barrel in months, triggering a global supply shock that caused simultaneous high inflation and high unemployment — stagflation — which the prevailing Keynesian demand-management framework could not explain or cure. UK inflation reached 24.2% in 1975. The crisis demolished the simple Phillips curve trade-off, vindicated Milton Friedman\'s Natural Rate hypothesis, and set the intellectual stage for the monetarist revolution of the 1980s.',

    cause: {
      heading: 'Economic Causes',
      points: [
        'OPEC oil embargo (October 1973): Arab OPEC members imposed an oil embargo on countries supporting Israel in the Yom Kippur War (including the US, UK, and Netherlands). Oil production was cut, global supply fell sharply, and the price quadrupled from ~$3 to ~$12 per barrel.',
        'Energy price pass-through: oil is an input into virtually every production process — manufacturing, transport, heating. A sharp rise in oil prices is equivalent to a rise in costs for the entire supply side of the economy, shifting SRAS leftward.',
        'Simultaneous inflation and unemployment: the leftward SRAS shift caused both higher prices (inflation) and lower output (rising unemployment) — stagflation. This combination was impossible to explain with the simple Keynesian/Phillips curve framework, which assumed a stable trade-off between the two.',
        'Second oil shock (1979): the Iranian Revolution disrupted oil production. Prices tripled again from ~$13 to ~$34 per barrel. UK inflation reached 18% in 1980.',
        'Policy mistakes: UK governments attempted to fight unemployment with expansionary fiscal and monetary policy, which added demand-pull inflation on top of the cost-push shock, worsening the stagflation.',
      ],
    },

    timeline: [
      { date: 'Oct 1973',   event: 'Yom Kippur War. Arab OPEC members announce oil embargo on US, UK, Netherlands. Oil price begins quadrupling.' },
      { date: 'Jan 1974',   event: 'Oil price reaches ~$12/barrel — up from ~$3. UK government declares three-day working week to conserve electricity (miners\' industrial action coincides with energy crisis).' },
      { date: '1974',       event: 'UK GDP falls 1.5%. UK inflation reaches 16%. Unemployment rises. The "stagflation" paradox is apparent to policymakers for the first time.' },
      { date: '1975',       event: 'UK CPI inflation peaks at 24.2% — the highest in modern UK peacetime history. Unemployment at 4.4% (by then-standards, elevated).' },
      { date: '1976',       event: 'UK forced to apply for an IMF bailout — the first time a major developed economy had done so. IMF loans £2.3bn conditional on spending cuts and monetary tightening. Marks the beginning of the end of Keynesian demand management in the UK.' },
      { date: '1979',       event: 'Iranian Revolution. Second oil shock — oil price triples to ~$34/barrel. UK inflation rises back towards 18% in 1980.' },
      { date: 'May 1979',   event: 'Margaret Thatcher elected. Monetarist revolution begins: inflation control prioritised over unemployment. Interest rates raised sharply.' },
    ],

    policyResponse: {
      heading: 'Policy Response',
      monetary: 'During 1973–76, UK monetary policy was expansionary — the money supply (M3) grew rapidly, adding demand-pull pressure on top of cost-push inflation and making the stagflation worse. After the 1976 IMF crisis, monetary targets were introduced. From 1979, Thatcher\'s government raised interest rates to 17% (1979–80) to squeeze inflation out of the economy — at enormous cost in output and unemployment (which rose to 11.9% by 1984).',
      fiscal: 'The Heath government (1973–74) and Wilson/Callaghan governments (1974–79) initially used expansionary fiscal policy to fight unemployment — which proved counterproductive against a supply shock. The 1976 IMF bailout required fiscal tightening: Chancellor Denis Healey cut public spending, marking the first significant retrenchment from Keynesian demand management. The 1979 Thatcher government pursued further fiscal tightening alongside monetary tightening.',
      financial: 'The UK government introduced price controls and incomes policies (wage freezes) in an attempt to directly control inflation — these largely failed, leading to the "Winter of Discontent" (1978–79) as workers struck against wage caps.',
    },

    outcome: {
      heading: 'What Actually Happened',
      points: [
        'UK inflation peaked at 24.2% in 1975 — the highest in modern peacetime UK history.',
        'UK unemployment rose from 2.6% in 1973 to 5.7% by 1977 — simultaneous high inflation and unemployment (stagflation).',
        'The 1976 IMF bailout was deeply humiliating for the UK government — a developed country seeking emergency financing.',
        'The simple Phillips curve (stable inflation-unemployment trade-off) was empirically destroyed: the data showed inflation and unemployment rising together, not trading off.',
        'Milton Friedman\'s Natural Rate of Unemployment hypothesis (1968) was vindicated: he had predicted that demand expansion could only temporarily reduce unemployment below the natural rate before accelerating inflation.',
        'The stagflation crisis fundamentally shifted macroeconomic thinking from Keynesian demand management to monetarism and supply-side economics.',
        'Margaret Thatcher\'s monetarist experiment (1979–83) ultimately brought inflation down to 3.7% by 1983, but at the cost of unemployment rising to 11.9% and a severe recession.',
        'The episode is the foundational case study for the short-run Phillips curve, NAIRU, and adverse supply shocks in macroeconomics.',
      ],
    },

    keyFacts: [
      'OPEC oil embargo: October 1973 — oil price quadrupled from ~$3 to ~$12/barrel',
      'UK CPI peak: 24.2% in 1975 — highest modern peacetime inflation',
      'Second oil shock: 1979 — oil price tripled from ~$13 to ~$34/barrel',
      'UK IMF bailout: 1976 — £2.3bn loan, first for a major developed economy',
      'UK unemployment: rose from 2.6% (1973) to 5.7% (1977) amid high inflation',
      'Thatcher interest rates: raised to 17% in 1979–80 to fight inflation',
      'UK unemployment under Thatcher: peaked at 11.9% in 1984',
      'Inflation fell to 3.7% by 1983 — at severe economic cost',
    ],

    examRelevance: [
      { topic: 'Inflation',              use: 'Cost-push inflation mechanism; stagflation; adverse supply shock shifting SRAS' },
      { topic: 'Phillips Curve',         use: 'The breakdown of the simple Phillips curve; NAIRU; Friedman\'s expectations-augmented Phillips curve' },
      { topic: 'Monetary Policy',        use: 'Monetarism; targeting money supply; inflation-unemployment trade-off' },
      { topic: 'Supply-Side Policy',     use: 'Why demand management cannot solve supply-side problems' },
      { topic: 'Macroeconomic Objectives', use: 'Conflict between inflation and unemployment objectives; policy dilemmas under stagflation' },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 9. UK AUSTERITY 2010–2016
  // ─────────────────────────────────────────────────────────
  {
    id: 'uk-austerity-2010',
    title: 'UK Austerity Programme 2010–2016',
    subtitle: 'The great fiscal multiplier debate: cuts as "expansionary"?',
    dates: '2010–2016',
    category: 'macro-policy',
    severity: 'major',
    tags: ['Fiscal Policy', 'Austerity', 'Multiplier', 'Public Debt', 'Growth'],

    summary: 'Following the 2008 financial crisis and the resulting fiscal deficit of 10.2% of GDP, the Coalition government (from May 2010) and subsequent Conservative governments pursued a programme of fiscal consolidation — public spending cuts and some tax rises — to reduce the deficit and stabilise government debt. The programme became highly controversial: it reduced the deficit significantly, but the UK economy grew far below forecasts in 2010–12, and the multiplier debate — how much fiscal contraction reduces output — became one of the most important macroeconomic questions of the decade.',

    cause: {
      heading: 'Economic Background',
      points: [
        'Post-crisis deficit: the 2008–09 recession and bank bailouts pushed the UK public sector deficit to £156.7bn (10.2% of GDP) in 2009–10 — the highest in peacetime history.',
        'The Coalition\'s diagnosis: Chancellor George Osborne argued that the large deficit was primarily structural (not just cyclical) and posed a risk to UK fiscal credibility. With UK gilt yields still low, he argued cutting the deficit would maintain confidence and prevent a Greece-style bond market crisis.',
        'The Keynesian counter-argument: economists including Paul Krugman, Joseph Stiglitz, and later the IMF argued that in a recession with a large output gap, fiscal consolidation would be deeply contractionary — the multiplier would be high because there was no crowding-out and monetary policy was constrained at the zero lower bound.',
        'The "expansionary austerity" claim: some economists (notably Alesina and Ardagna) argued that fiscal consolidation could actually be expansionary if it boosted confidence and reduced interest rates — a view that proved to be empirically weak.',
      ],
    },

    timeline: [
      { date: 'May 2010',    event: 'Coalition government formed. Emergency Budget announces £6bn immediate spending cuts. Target: eliminate structural deficit by 2014–15.' },
      { date: 'Oct 2010',    event: 'Comprehensive Spending Review: £81bn in spending cuts over 4 years. 490,000 public sector jobs to be cut. Welfare reforms begin.' },
      { date: '2010–12',     event: 'UK economy flatlines. GDP grows only 0.5% in 2011 and 1.5% in 2012 — far below OBR forecasts. Deficit reduction slower than planned as weak growth reduces tax revenues.' },
      { date: 'Jan 2013',    event: 'IMF research paper (Blanchard & Leigh) finds fiscal multipliers had been underestimated: "for every 1% of GDP in fiscal consolidation, GDP was 1.5 percentage points lower than forecast." IMF revises multiplier from 0.5 to ~1.5 in a recession.' },
      { date: '2013',        event: 'UK economy accelerates — GDP grows 2.1% in 2013, 3.1% in 2014 (fastest in G7). Osborne claims vindication.' },
      { date: 'Jun 2015',    event: 'Deficit elimination target missed: original 2014–15 target pushed back to 2017–18, then to 2019–20. Osborne announces new commitment to budget surplus by 2019–20.' },
      { date: '2016',        event: 'Post-Brexit referendum, Philip Hammond abandons surplus target entirely. Austerity programme formally continues but pace slows.' },
      { date: '2019',        event: 'UK deficit has fallen from 10.2% (2009–10) to 1.9% of GDP — a significant fiscal consolidation. Debt/GDP has peaked at ~85% and is slowly declining.' },
    ],

    policyResponse: {
      heading: 'Policy — What Austerity Involved',
      monetary: 'Bank of England maintained highly accommodative monetary policy throughout — Bank Rate at 0.5% and QE ongoing. The logic was that monetary policy would "do the heavy lifting" to support demand while fiscal policy tightened. Critics argued that with interest rates at the zero lower bound and QE of uncertain effectiveness, monetary policy was insufficiently stimulative to offset fiscal tightening.',
      fiscal: 'Measures included: departmental spending cuts averaging 19% in real terms (with protected areas: NHS, schools, overseas aid); welfare reform (Universal Credit, benefit caps, PIP replacing DLA); public sector pay freeze (2010–12) and 1% cap (2012–17); VAT rise from 17.5% to 20% (January 2011); 50p top income tax rate reduced to 45% (April 2013); corporation tax cut from 28% to 20%. The structural deficit fell from 6.5% of GDP (2009–10) to under 1% by 2018–19.',
      financial: 'The Help to Buy scheme (2013) was launched to stimulate the housing market and construction sector — a supply-side complement to fiscal tightening.',
    },

    outcome: {
      heading: 'What Actually Happened',
      points: [
        'UK deficit fell from 10.2% of GDP (2009–10) to 1.9% of GDP (2018–19) — a substantial reduction.',
        'UK public debt peaked at approximately 85% of GDP in 2016–17 before declining slowly.',
        'However, the deficit elimination target was missed repeatedly: the original 2014–15 target was pushed back to 2019–20, then abandoned post-Brexit.',
        'UK growth significantly underperformed OBR forecasts in 2010–12, consistent with a high fiscal multiplier of ~1.5 as estimated by Blanchard & Leigh (2013).',
        'The OBR had assumed a fiscal multiplier of ~0.5 in its initial forecasts; the actual multiplier appeared to be significantly higher, explaining why the economy flatlined.',
        'UK real wages stagnated for most of the 2010s — the longest squeeze on living standards since the Victorian era.',
        'Public sector employment fell by approximately 1 million between 2010 and 2017.',
        'UK public services (NHS waiting lists, local authority services, welfare) showed significant deterioration attributed to underfunding.',
        'Economists continue to debate whether a less severe consolidation would have achieved similar debt sustainability with lower output and welfare costs.',
      ],
    },

    keyFacts: [
      'UK deficit peak: £156.7bn / 10.2% of GDP in 2009–10',
      'Spending Review cuts: £81bn over 4 years (October 2010)',
      'UK deficit by 2018–19: 1.9% of GDP',
      'Blanchard & Leigh IMF multiplier finding (2013): multiplier ~1.5 in recession, not 0.5',
      'GDP growth in 2011: only 0.5% — far below OBR forecasts',
      'UK public sector jobs lost 2010–17: approximately 1 million',
      'UK debt peak: ~85% of GDP in 2016–17',
      'VAT rise: 17.5% to 20% from January 2011',
    ],

    examRelevance: [
      { topic: 'Fiscal Policy',       use: 'Keynesian vs. austerity debate; fiscal multiplier; structural vs. cyclical deficit' },
      { topic: 'Economic Growth',     use: 'Output gap; hysteresis from prolonged below-potential growth; austerity and long-run scarring' },
      { topic: 'Macroeconomic Objectives', use: 'Trade-off between debt sustainability and short-run growth; fiscal credibility' },
      { topic: 'Supply-Side Policy',  use: 'Welfare reform; labour supply incentives vs. poverty implications' },
      { topic: 'Living Standards',    use: 'Real wage stagnation; public service quality; distributional effects of consolidation' },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 10. 2021 GLOBAL SUPPLY CHAIN CRISIS
  // ─────────────────────────────────────────────────────────
  {
    id: 'supply-chain-2021',
    title: '2021–22 Global Supply Chain Crisis',
    subtitle: 'Semiconductors, shipping, and the limits of "just-in-time"',
    dates: '2021–2022',
    category: 'supply-shock',
    severity: 'major',
    tags: ['Supply Chains', 'Inflation', 'Semiconductors', 'Shipping', 'Just-in-Time'],

    summary: 'The COVID-19 pandemic exposed the fragility of global "just-in-time" supply chains. When demand surged as economies reopened in 2021, supply could not respond: factories in Asia remained disrupted, shipping costs rose ~500%, semiconductor shortages halted car production and electronics manufacturing, and UK-specific disruptions (HGV driver shortage, Brexit friction) created fuel and food supply problems. The crisis contributed significantly to global goods inflation in 2021–22 and prompted a re-evaluation of supply chain resilience over pure efficiency.',

    cause: {
      heading: 'Economic Causes',
      points: [
        '"Just-in-time" (JIT) fragility: decades of lean manufacturing had optimised global supply chains for efficiency, minimising inventories. This left no buffer for shocks — when any link in the chain broke (a factory closure, a port backlog, a shipping container shortage), the effect propagated rapidly.',
        'Semiconductor shortage: as factories reopened in 2020, demand for consumer electronics surged (laptops, gaming consoles for lockdown). Chip manufacturers pivoted to consumer electronics. When car manufacturers sought to resume production in 2021, they faced a chip queue — leading to production cuts. Semiconductors are produced in a handful of highly specialised fabs (TSMC in Taiwan, Samsung in South Korea) with 2–3 year lead times to build new capacity.',
        'Shipping and logistics bottlenecks: COVID-related port closures in China created container backlogs. Ships could not unload, creating container shortages. Global shipping costs (Freightos Baltic Index) rose approximately 500% from pre-pandemic levels to their peak in late 2021.',
        'Suez Canal blockage (March 2021): the Ever Given container ship ran aground for 6 days, blocking approximately $9.6bn of daily trade.',
        'UK-specific: post-Brexit, approximately 14,000 EU HGV drivers left the UK. By September 2021, the Road Haulage Association estimated a shortage of 100,000 HGV drivers. This caused fuel shortages, as petrol stations could not be resupplied, and food supply disruption.',
      ],
    },

    timeline: [
      { date: 'Q1 2021',    event: 'Semiconductor shortage becomes acute. Ford, Volkswagen, GM cut car production. GM loses ~$2bn in revenue. Toyota cuts global output by 40% in September 2021.' },
      { date: 'Mar 2021',   event: 'Ever Given container ship runs aground in Suez Canal (23–29 March). ~$9.6bn of daily trade blocked for 6 days.' },
      { date: 'Mid 2021',   event: 'Global shipping costs surge to ~5x pre-pandemic levels. Port of Los Angeles sees record waiting times — 100+ container ships queuing.' },
      { date: 'Sep 2021',   event: 'UK fuel crisis: petrol station forecourt shortages due to HGV driver shortage. Military drivers deployed. Panic buying leads to rationing.' },
      { date: 'Autumn 2021', event: 'UK food supply disruption: KFC, McDonald\'s, Nando\'s face menu shortages. Empty supermarket shelves for some goods. Attributed partly to HGV driver shortage and partly to post-Brexit friction.' },
      { date: 'Late 2021',  event: 'Global shipping costs peak. Container spot rates from Shanghai to Rotterdam reach ~$15,000 (vs. ~$1,500 pre-pandemic).' },
      { date: '2022',       event: 'Supply chain disruptions persist and interact with the Ukraine war (energy, wheat, neon gas for semiconductors). Inflation surge accelerates.' },
      { date: 'Late 2022',  event: 'Shipping costs normalise as demand for goods falls and ports clear backlogs. Semiconductor capacity begins expanding (US CHIPS Act: $52bn; EU Chips Act: €43bn).' },
    ],

    policyResponse: {
      heading: 'Policy Response',
      monetary: 'Central banks initially characterised supply chain inflation as "transitory" — expecting it to resolve itself without policy tightening. This proved incorrect. As inflation proved persistent, central banks (Fed from March 2022, BoE from December 2021) raised rates aggressively.',
      fiscal: 'The US CHIPS and Science Act (August 2022): $52.7bn in subsidies for domestic semiconductor manufacturing and R&D — to reduce dependence on Asian chip production. The EU Chips Act (2023): €43bn to double EU semiconductor market share to 20% by 2030. UK: temporary visa scheme for HGV drivers (6,000 visas), relaxation of HGV testing requirements. Petrol stations given priority access to army drivers.',
      financial: 'Companies globally began reassessing supply chain strategies: "just-in-time" was supplemented by "just-in-case" buffer inventories. Reshoring and near-shoring of critical supply chains (particularly semiconductors, pharmaceuticals, and critical minerals) gained government policy support worldwide.',
    },

    outcome: {
      heading: 'What Actually Happened',
      points: [
        'Global shipping costs normalised by late 2022 as port backlogs cleared and goods demand fell.',
        'Semiconductor shortage eased through 2022–23 as production caught up with demand, though structural supply concentration risk remains.',
        'Car production recovered — global output reached pre-pandemic levels in 2023.',
        'The supply chain crisis was a major driver of goods inflation globally in 2021–22, contributing significantly to the inflation surge that required aggressive monetary tightening.',
        'UK HGV driver shortage partially resolved through emergency visas, pay rises (HGV driver wages rose ~20%), and some EU driver return.',
        'The crisis accelerated a shift in global industrial policy: governments (US, EU, Japan, UK) now actively subsidise "critical" domestic industries (chips, batteries, green technology) — a reversal of decades of free-market orthodoxy.',
        'TSMC announced a factory in Arizona (US), Germany (EU), and Japan — reflecting both government subsidies and supply chain diversification logic.',
      ],
    },

    keyFacts: [
      'Global shipping cost surge: ~500% above pre-pandemic levels at peak (late 2021)',
      'Container rate Shanghai-Rotterdam: ~$15,000 at peak vs. ~$1,500 pre-pandemic',
      'Suez Canal blockage: Ever Given, 23–29 March 2021 — ~$9.6bn daily trade blocked',
      'Toyota production cut: 40% global output reduction in September 2021 due to chips',
      'UK HGV driver shortage: ~100,000 drivers by September 2021',
      'US CHIPS Act: $52.7bn for domestic semiconductor manufacturing (August 2022)',
      'EU Chips Act: €43bn (2023), targeting 20% global market share by 2030',
      'Semiconductor lead time to build new fab: 2–3 years',
    ],

    examRelevance: [
      { topic: 'Inflation',           use: 'Cost-push inflation from supply chain disruption; "transitory" vs. persistent inflation debate' },
      { topic: 'International Trade', use: 'Supply chain globalisation and fragility; reshoring and industrial policy; comparative advantage limits' },
      { topic: 'Market Failure',      use: 'Market failure in critical supply chains (semiconductors as strategic goods); rationale for industrial policy' },
      { topic: 'Supply-Side Policy',  use: 'Industrial strategy and semiconductor subsidies; "just-in-case" vs. "just-in-time" trade-off' },
      { topic: 'Macroeconomic Objectives', use: 'Supply-side inflation and limits of monetary policy; growth vs. inflation trade-off' },
    ],
  },
]
