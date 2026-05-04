export const formulaCategories = [
  { id: 'all', label: 'All Formulas', icon: '🔢' },
  { id: 'elasticity', label: 'Elasticity', icon: '📐' },
  { id: 'costs', label: 'Costs & Revenue', icon: '🏭' },
  { id: 'macro', label: 'Macroeconomics', icon: '📊' },
  { id: 'growth', label: 'Growth & Index', icon: '📈' },
  { id: 'trade', label: 'International', icon: '🌍' },
  { id: 'labour', label: 'Labour Market', icon: '👷' },
]

export const formulas = [

  // ─── ELASTICITY ───

  {
    id: 'ped',
    category: 'elasticity',
    name: 'Price Elasticity of Demand (PED)',
    formula: 'PED = % change in Quantity Demanded ÷ % change in Price',
    shortFormula: 'PED = %ΔQd / %ΔP',
    interpretation: [
      { range: 'PED < -1 (ignoring sign)', label: 'Price Elastic', meaning: 'Consumers are responsive to price changes. Revenue falls when price rises.' },
      { range: 'PED = -1', label: 'Unit Elastic', meaning: 'Revenue is unchanged when price changes.' },
      { range: '-1 < PED < 0', label: 'Price Inelastic', meaning: 'Consumers are unresponsive. Revenue rises when price rises.' },
    ],
    workedExample: {
      scenario: 'Price of coffee rises from £3.00 to £3.60 (20% rise). Quantity demanded falls from 100 to 90 cups (10% fall).',
      steps: [
        '% change in Qd = (90 - 100) / 100 × 100 = -10%',
        '% change in P = (3.60 - 3.00) / 3.00 × 100 = +20%',
        'PED = -10% ÷ 20% = -0.5',
      ],
      answer: 'PED = -0.5 (price inelastic — consumers are relatively unresponsive to this price rise)',
    },
    examTip: 'Always state the sign and interpret it. In AQA, PED is negative (inverse relationship) but you often just quote the absolute value. Determinants of PED: number of substitutes, necessity vs luxury, proportion of income, time period.',
    diagrams: ['Supply and demand diagram — elastic vs inelastic demand curves'],
  },
  {
    id: 'pes',
    category: 'elasticity',
    name: 'Price Elasticity of Supply (PES)',
    formula: 'PES = % change in Quantity Supplied ÷ % change in Price',
    shortFormula: 'PES = %ΔQs / %ΔP',
    interpretation: [
      { range: 'PES > 1', label: 'Price Elastic Supply', meaning: 'Firms can easily expand output when price rises.' },
      { range: 'PES = 1', label: 'Unit Elastic', meaning: 'Supply responds proportionately to price changes.' },
      { range: '0 < PES < 1', label: 'Price Inelastic Supply', meaning: 'Firms find it difficult to expand output quickly.' },
      { range: 'PES = 0', label: 'Perfectly Inelastic', meaning: 'Supply is fixed regardless of price (e.g., land, Picasso paintings).' },
    ],
    workedExample: {
      scenario: 'Price of wheat rises from £150/tonne to £180/tonne (20% rise). Quantity supplied rises from 500 to 560 tonnes (12% rise).',
      steps: [
        '% change in Qs = (560 - 500) / 500 × 100 = +12%',
        '% change in P = (180 - 150) / 150 × 100 = +20%',
        'PES = 12% ÷ 20% = 0.6',
      ],
      answer: 'PES = 0.6 (price inelastic supply — firms cannot quickly expand wheat production)',
    },
    examTip: 'PES is always positive (positive relationship: higher price → more supply). Determinants: spare capacity, ease of factor substitution, time period, perishability of goods.',
    diagrams: ['Supply curve gradient — steep = inelastic, shallow = elastic'],
  },
  {
    id: 'yed',
    category: 'elasticity',
    name: 'Income Elasticity of Demand (YED)',
    formula: 'YED = % change in Quantity Demanded ÷ % change in Income',
    shortFormula: 'YED = %ΔQd / %ΔY',
    interpretation: [
      { range: 'YED > 1', label: 'Income Elastic (Luxury)', meaning: 'Demand rises more than proportionately with income (sports cars, holidays). Share of spending increases.' },
      { range: '0 < YED < 1', label: 'Income Inelastic (Normal Good)', meaning: 'Demand rises, but less than proportionately (food, clothing).' },
      { range: 'YED < 0', label: 'Inferior Good', meaning: 'Demand falls as income rises (bus travel, value supermarket brands). Giffen goods are a special case.' },
    ],
    workedExample: {
      scenario: 'Consumer income rises from £30,000 to £33,000 (10% rise). Demand for holidays rises from 1 to 1.3 per year (30% rise).',
      steps: [
        '% change in Qd = (1.3 - 1.0) / 1.0 × 100 = +30%',
        '% change in Y = (33,000 - 30,000) / 30,000 × 100 = +10%',
        'YED = +30% ÷ +10% = +3.0',
      ],
      answer: 'YED = +3.0 (luxury good — demand for holidays is income elastic; as incomes rise, consumers increase holiday spending significantly)',
    },
    examTip: 'YED tells you about the type of good AND how demand changes in a recession/boom. In a recession (falling Y): normal goods face falling demand, inferior goods see rising demand. Useful for business strategy and predicting demand shifts.',
    diagrams: ['Engel curves (income on x-axis, demand on y-axis)'],
  },
  {
    id: 'xed',
    category: 'elasticity',
    name: 'Cross-Price Elasticity of Demand (XED)',
    formula: 'XED = % change in Qd of Good A ÷ % change in Price of Good B',
    shortFormula: 'XED = %ΔQd(A) / %ΔP(B)',
    interpretation: [
      { range: 'XED > 0', label: 'Substitutes', meaning: 'Rise in price of B → rise in demand for A (e.g., Pepsi and Coca-Cola, gas and electricity).' },
      { range: 'XED < 0', label: 'Complements', meaning: 'Rise in price of B → fall in demand for A (e.g., cars and petrol, printers and ink).' },
      { range: 'XED = 0', label: 'Unrelated Goods', meaning: 'Price of B has no effect on demand for A.' },
    ],
    workedExample: {
      scenario: 'Price of Pepsi rises by 15%. Demand for Coca-Cola rises from 100 to 112 cans (12% rise).',
      steps: [
        '% change in Qd(Coca-Cola) = +12%',
        '% change in P(Pepsi) = +15%',
        'XED = +12% ÷ +15% = +0.8',
      ],
      answer: 'XED = +0.8 (positive — Pepsi and Coca-Cola are substitutes). Larger XED = closer substitutes.',
    },
    examTip: 'XED is used to define markets and assess competition. The CMA uses XED estimates to assess whether two products are in the same market. High positive XED = strong competition between firms.',
    diagrams: ['Demand diagram for A showing shift when price of B changes'],
  },

  // ─── COSTS & REVENUE ───

  {
    id: 'total-revenue',
    category: 'costs',
    name: 'Total Revenue (TR)',
    formula: 'TR = Price × Quantity',
    shortFormula: 'TR = P × Q',
    interpretation: [
      { range: 'TR rising with P', label: 'Inelastic demand', meaning: 'Percentage rise in P > percentage fall in Qd.' },
      { range: 'TR constant as P changes', label: 'Unit elastic', meaning: 'PED = -1.' },
      { range: 'TR falling with P rise', label: 'Elastic demand', meaning: 'Percentage fall in Qd > percentage rise in P.' },
    ],
    workedExample: {
      scenario: 'A firm sells 200 units at £10 each. It raises price to £12 and sells 175 units.',
      steps: [
        'Original TR = £10 × 200 = £2,000',
        'New TR = £12 × 175 = £2,100',
        'TR increased despite higher price → demand is price inelastic',
      ],
      answer: 'TR rose from £2,000 to £2,100. Since price rose and TR increased, demand is price inelastic (PED between 0 and -1).',
    },
    examTip: 'For price discrimination questions: a firm practicing 3rd degree price discrimination will charge higher prices in the inelastic market and lower prices in the elastic market to maximise total revenue.',
    diagrams: ['TR curve — inverted U shape, maximum at unit elasticity (PED = -1)'],
  },
  {
    id: 'average-costs',
    category: 'costs',
    name: 'Average and Marginal Costs',
    formula: 'AC = TC / Q    |    MC = ΔTC / ΔQ    |    AFC = TFC / Q    |    AVC = TVC / Q',
    shortFormula: 'AC = TC/Q ; MC = ΔTC/ΔQ',
    interpretation: [
      { range: 'MC < AC', label: 'AC is falling', meaning: 'Adding another unit pulls average cost down.' },
      { range: 'MC = AC', label: 'AC is at minimum', meaning: 'This is the minimum efficient scale — the point of productive efficiency.' },
      { range: 'MC > AC', label: 'AC is rising', meaning: 'Diminishing returns are pulling average costs up.' },
    ],
    workedExample: {
      scenario: 'A firm produces 10 units with TC = £500. It produces 11 units with TC = £560.',
      steps: [
        'AC (at 10 units) = £500 / 10 = £50',
        'AC (at 11 units) = £560 / 11 = £50.91',
        'MC of 11th unit = £560 - £500 = £60',
        'Since MC (£60) > AC (£50.91), AC is rising',
      ],
      answer: 'The 11th unit costs £60 to produce (MC), pulling the average up from £50 to £50.91. The firm is past its minimum efficient scale.',
    },
    examTip: 'The MC/AC relationship is crucial for diagrams. In perfect competition: long-run equilibrium at P = MC = AC (minimum). In monopoly: MR = MC determines output, then price read from demand curve.',
    diagrams: ['U-shaped AC and MC curves, MC cutting AC at minimum'],
  },
  {
    id: 'profit',
    category: 'costs',
    name: 'Profit',
    formula: 'Profit = Total Revenue − Total Cost',
    shortFormula: 'π = TR − TC',
    interpretation: [
      { range: 'TR > TC', label: 'Supernormal (abnormal) profit', meaning: 'Firm earns above normal profit — area on diagram: (P − AC) × Q.' },
      { range: 'TR = TC', label: 'Normal profit', meaning: 'Revenue covers all costs including opportunity cost — long-run competitive equilibrium.' },
      { range: 'TR < TC', label: 'Loss (subnormal profit)', meaning: 'Firm may shut down in long run if losses persist.' },
    ],
    workedExample: {
      scenario: 'A monopolist sets Q = 100 units. P = £20, AC = £14.',
      steps: [
        'TR = £20 × 100 = £2,000',
        'TC = £14 × 100 = £1,400',
        'Supernormal profit = TR − TC = £600',
        'Or: Profit per unit = P − AC = £20 − £14 = £6. Total = £6 × 100 = £600',
      ],
      answer: 'Supernormal profit = £600. On a diagram: this is the shaded rectangle between the price line (£20) and the AC curve (£14), across output of 100 units.',
    },
    examTip: 'Supernormal profit only exists in the short run under perfect competition (new entry erodes it). It persists in monopoly due to barriers to entry. Normal profit = the opportunity cost of capital (included in average cost in economics).',
    diagrams: ['Profit rectangle on monopoly diagram between P and AC'],
  },

  // ─── MACROECONOMICS ───

  {
    id: 'multiplier',
    category: 'macro',
    name: 'Keynesian Multiplier',
    formula: 'Simple: k = 1 / (1 − MPC)    |    Open economy: k = 1 / (MPS + MPT + MPM)',
    shortFormula: 'k = 1/(1−MPC)  |  ΔY = k × ΔG',
    interpretation: [
      { range: 'MPC = 0.8', label: 'Multiplier = 5', meaning: 'A £1 increase in G generates £5 of national income (closed economy). Unrealistic for open economy.' },
      { range: 'MPS=0.15, MPT=0.20, MPM=0.25', label: 'Multiplier ≈ 1.67', meaning: 'Open economy: leakages reduce the multiplier significantly.' },
    ],
    workedExample: {
      scenario: 'UK government increases spending by £20bn. MPC = 0.7, MPT = 0.2, MPM = 0.2.',
      steps: [
        'MPW (marginal propensity to withdraw) = 1 − MPC = 0.3... but let\'s use leakages:',
        'MPW = MPS + MPT + MPM = (1−0.7−0.2−0.2) + 0.2 + 0.2 = ... ',
        'Simpler: MPS = 1 − MPC − MPT − MPM = 1 − 0.7 − 0.2 − 0.2 = -0.1 (not realistic — use)',
        'Open economy multiplier = 1 / (MPT + MPM + MPS)',
        'Using MPT + MPM = 0.4, MPS = 0.1: k = 1/0.5 = 2.0',
        'ΔY = 2.0 × £20bn = £40bn',
      ],
      answer: 'With multiplier k = 2, government spending of £20bn generates £40bn in national income. OBR estimates UK fiscal multiplier at 0.6–0.8 in practice.',
    },
    examTip: 'Always note the UK fiscal multiplier is ~0.6–0.8 (not the simple textbook value) due to: high marginal propensity to import (~30% GDP), income tax leakage, and open economy effects. Mention this as evaluation in fiscal policy essays.',
    diagrams: ['AD/AS diagram showing initial and multiplied shift of AD'],
  },
  {
    id: 'aggregate-demand',
    category: 'macro',
    name: 'Aggregate Demand (AD)',
    formula: 'AD = Consumption (C) + Investment (I) + Government Spending (G) + Net Exports (X − M)',
    shortFormula: 'AD = C + I + G + (X − M)',
    interpretation: [
      { range: 'C (≈60% UK AD)', label: 'Largest component', meaning: 'Consumer spending — influenced by income, wealth, confidence, interest rates.' },
      { range: 'I (≈16% UK AD)', label: 'Most volatile', meaning: 'Business investment — influenced by interest rates, expectations, capacity utilisation.' },
      { range: 'G (≈20% UK AD)', label: 'Government control', meaning: 'Government spending on goods, services, transfer payments.' },
      { range: 'X−M (UK: negative, −3%)', label: 'Net exports', meaning: 'UK runs a persistent current account deficit — imports exceed exports.' },
    ],
    workedExample: {
      scenario: 'Calculate impact on AD when: I falls by £15bn, G rises by £25bn, X−M worsens by £5bn.',
      steps: [
        'Net change in AD = ΔI + ΔG + Δ(X−M)',
        'Net change = −£15bn + £25bn − £5bn = +£5bn',
        'After multiplier (k = 0.7): ΔY = 0.7 × £5bn = £3.5bn',
      ],
      answer: 'Net change in AD = +£5bn. After applying the UK fiscal multiplier of ~0.7, national income rises by approximately £3.5bn.',
    },
    examTip: 'For any AD question: identify WHICH component changes, HOW it changes, then apply the multiplier. Consumption is influenced by the wealth effect (asset prices), interest rates (borrowing costs), and confidence. Investment is the most interest-rate sensitive component.',
    diagrams: ['AD/AS diagram with shifts — parallel shift of AD for exogenous changes'],
  },

  // ─── GROWTH & INDEX NUMBERS ───

  {
    id: 'percentage-change',
    category: 'growth',
    name: 'Percentage Change',
    formula: '% Change = ((New Value − Old Value) / Old Value) × 100',
    shortFormula: '%Δ = (New − Old) / Old × 100',
    interpretation: [
      { range: 'Positive result', label: 'Increase', meaning: 'Value has risen — e.g., GDP growth, price rise.' },
      { range: 'Negative result', label: 'Decrease', meaning: 'Value has fallen — e.g., unemployment falling.' },
    ],
    workedExample: {
      scenario: 'UK GDP in 2023 = £2,270bn. UK GDP in 2024 = £2,295bn.',
      steps: [
        '% change = (£2,295bn − £2,270bn) / £2,270bn × 100',
        '= £25bn / £2,270bn × 100',
        '= 1.1%',
      ],
      answer: 'UK GDP grew by 1.1% in 2024 — broadly consistent with ONS data. This represents a slow but positive growth rate.',
    },
    examTip: 'This formula underlies ALL elasticity calculations and appears in data response questions. Practise it until automatic. Remember: divide by the ORIGINAL (old) value, not the new one.',
    diagrams: [],
  },
  {
    id: 'real-nominal',
    category: 'growth',
    name: 'Real vs Nominal Values',
    formula: 'Real Value = (Nominal Value / Price Index) × 100',
    shortFormula: 'Real = (Nominal / CPI) × 100',
    interpretation: [
      { range: 'Nominal > Real', label: 'Positive inflation', meaning: 'Nominal figures overstate actual growth. Real GDP growth = nominal GDP growth − inflation rate.' },
      { range: 'Real > Nominal', label: 'Deflation', meaning: 'Prices falling — real value exceeds nominal (rare).' },
    ],
    workedExample: {
      scenario: 'Nominal wage = £30,000. CPI = 120 (base year index = 100).',
      steps: [
        'Real wage = (£30,000 / 120) × 100',
        'Real wage = £25,000 (in base-year prices)',
        'Alternatively: if wages rose 5% and inflation = 3.8%, real wage growth ≈ 5% − 3.8% = 1.2%',
      ],
      answer: 'Real wage = £25,000 in base-year prices. Real wage growth is approximately 1.2% — actual purchasing power improvement after inflation.',
    },
    examTip: 'ALWAYS adjust for inflation when discussing living standards, wage growth, or GDP growth. The difference between nominal and real values is crucial in data response questions — always check if a figure is given in real or nominal terms.',
    diagrams: [],
  },
  {
    id: 'index-number',
    category: 'growth',
    name: 'Index Numbers',
    formula: 'Index = (Value in Period / Value in Base Period) × 100',
    shortFormula: 'Index = (Vt / V0) × 100',
    interpretation: [
      { range: 'Index = 100', label: 'Base year', meaning: 'Reference point — values above 100 indicate growth from base year.' },
      { range: 'Index = 115', label: '15% above base', meaning: 'Value is 15% higher than in the base year.' },
    ],
    workedExample: {
      scenario: 'Base year (2015) price = £50. Current year (2025) price = £68. Calculate the price index.',
      steps: [
        'Price index = (£68 / £50) × 100',
        'Price index = 136',
        'Interpretation: prices have risen 36% since the base year 2015',
      ],
      answer: 'Price index = 136 — prices are 36% higher than in 2015. The annual average inflation rate over 10 years = (136^(1/10) − 1) × 100 ≈ 3.1% per year.',
    },
    examTip: 'UK CPI uses a basket of goods to measure inflation. The base year changes periodically. When comparing index numbers across years: (New Index − Old Index) / Old Index × 100 gives the percentage change between those years (not from the base year).',
    diagrams: [],
  },

  // ─── INTERNATIONAL ───

  {
    id: 'terms-of-trade',
    category: 'trade',
    name: 'Terms of Trade',
    formula: 'Terms of Trade = (Export Price Index / Import Price Index) × 100',
    shortFormula: 'ToT = (XPI / MPI) × 100',
    interpretation: [
      { range: 'ToT rises (improves)', label: 'More favourable', meaning: 'A country\'s exports buy more imports. Real income benefit. May worsen current account (lower export volume) if elastic demand.' },
      { range: 'ToT falls (deteriorates)', label: 'Less favourable', meaning: 'A country\'s exports buy fewer imports. Real income loss. May improve current account if export demand is elastic.' },
    ],
    workedExample: {
      scenario: 'UK export price index = 115. UK import price index = 108.',
      steps: [
        'Terms of Trade = (115 / 108) × 100',
        'Terms of Trade = 106.5',
        'Interpretation: UK exports are 6.5% more expensive relative to imports than in the base year — improved ToT',
      ],
      answer: 'ToT = 106.5 — UK\'s terms of trade have improved since the base year. UK exporters receive relatively more for each unit exported in terms of import purchasing power.',
    },
    examTip: 'An improvement in ToT sounds good but can worsen the current account if demand for UK exports is elastic (higher prices → much lower volume sold). Connect to Marshall-Lerner condition and J-curve in your evaluation.',
    diagrams: [],
  },
  {
    id: 'marshall-lerner',
    category: 'trade',
    name: 'Marshall-Lerner Condition',
    formula: 'Condition: |PEDx| + |PEDm| > 1 for depreciation to improve current account',
    shortFormula: 'PEDx + PEDm > 1 (absolute values)',
    interpretation: [
      { range: 'Sum > 1', label: 'Condition met', meaning: 'Currency depreciation improves current account — quantity effect dominates price effect.' },
      { range: 'Sum < 1', label: 'Condition NOT met', meaning: 'Depreciation WORSENS current account — higher import prices not offset by volume changes.' },
      { range: 'Short run', label: 'Condition usually fails', meaning: 'Short-run elasticities are low (contracts fixed) → J-curve effect.' },
    ],
    workedExample: {
      scenario: 'UK: PEDx = -0.6, PEDm = -0.7. Does a sterling depreciation improve the current account?',
      steps: [
        '|PEDx| + |PEDm| = 0.6 + 0.7 = 1.3',
        '1.3 > 1 → Marshall-Lerner condition is satisfied',
        'Sterling depreciation will improve the UK current account IN THE LONG RUN',
        'In the short run: J-curve means the deficit first worsens before improving',
      ],
      answer: 'ML condition satisfied (sum = 1.3 > 1). Depreciation improves the current account in the long run. However, the J-curve predicts an initial worsening as quantities are slow to adjust.',
    },
    examTip: 'This is an L5 technical point — use it in current account essays to evaluate exchange rate adjustment: "The effectiveness of depreciation depends on whether the Marshall-Lerner condition holds — UK empirical estimates suggest the sum of elasticities is close to 1, making the adjustment mechanism weak."',
    diagrams: ['J-curve diagram: current account on y-axis, time on x-axis, initial fall then recovery'],
  },

  // ─── LABOUR MARKET ───

  {
    id: 'real-wage',
    category: 'labour',
    name: 'Real Wage',
    formula: 'Real Wage = (Nominal Wage / Price Level) × 100',
    shortFormula: 'Real Wage = Nominal Wage / CPI × 100',
    interpretation: [
      { range: 'Nominal wage growth > CPI inflation', label: 'Real wage rising', meaning: 'Workers\' purchasing power is improving.' },
      { range: 'Nominal wage growth < CPI inflation', label: 'Real wage falling', meaning: 'Workers\' living standards are eroding despite nominal pay rises.' },
    ],
    workedExample: {
      scenario: 'NLW rises from £11.44 (2024) to £12.21 (2025) — nominal increase of 6.7%. CPI inflation in 2025 = 3.8%.',
      steps: [
        'Nominal wage growth = (£12.21 − £11.44) / £11.44 × 100 = 6.7%',
        'CPI inflation = 3.8%',
        'Approximate real wage growth = 6.7% − 3.8% = +2.9%',
      ],
      answer: 'Real wage growth ≈ 2.9% — NLW workers experienced genuine purchasing power gains in 2025, as nominal wage growth exceeded inflation.',
    },
    examTip: 'UK CPI inflation of ~3.8% (2025) and nominal NLW of £12.21 means real wages are rising but modestly. In AQA essays on living standards: always adjust nominal wages for inflation to assess real welfare changes.',
    diagrams: [],
  },
  {
    id: 'labour-productivity',
    category: 'labour',
    name: 'Labour Productivity',
    formula: 'Labour Productivity = Output / Number of Workers  (or / Hours Worked)',
    shortFormula: 'APL = Output / Labour',
    interpretation: [
      { range: 'APL rising', label: 'Productivity improving', meaning: 'Each worker produces more output. Enables wage growth without inflation (unit labour costs fall or stay flat).' },
      { range: 'APL flat', label: 'Productivity stagnant', meaning: 'UK "productivity puzzle" since 2008: output per hour barely growing despite investment.' },
    ],
    workedExample: {
      scenario: 'A factory employs 50 workers and produces 10,000 units per day. Following training investment, 50 workers produce 12,000 units.',
      steps: [
        'Initial APL = 10,000 / 50 = 200 units per worker',
        'New APL = 12,000 / 50 = 240 units per worker',
        'Productivity growth = (240 − 200) / 200 × 100 = 20%',
      ],
      answer: 'Labour productivity rose by 20% following training investment. This enables: higher wages without cost-push inflation, lower prices for consumers, or higher profit margins.',
    },
    examTip: 'UK labour productivity growth has averaged only ~0.3% pa since 2008 — the "productivity puzzle". Adult skills spending 23% below 2009-10 levels is a key cause. Use this in supply-side policy essays.',
    diagrams: [],
  },
]
