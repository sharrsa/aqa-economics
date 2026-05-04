// ============================================================
// AQA A-Level Economics — Topic Data
// To add a new topic: copy an existing object, change the id,
// fill in the fields, and push to the relevant array below.
// ============================================================

export const microTopics = [
  // ─────────────────────────────────────────────────────────
  {
    id: 'economic-problem',
    title: 'The Economic Problem',
    icon: '⚖️',
    category: 'micro',
    description: 'Scarcity, choice, opportunity cost, and the fundamental economic questions.',
    theory: [
      {
        heading: 'Scarcity & the Basic Economic Problem',
        content: `Economics exists because of one fundamental reality: resources are finite but human wants are infinite. This mismatch is called scarcity. Because we cannot have everything, we must choose — and every choice has a cost. Scarcity forces all societies to answer three core questions: What to produce? How to produce it? For whom to produce it? Different economic systems (market, planned, mixed) answer these questions differently.`,
      },
      {
        heading: 'Opportunity Cost',
        content: `Opportunity cost is the value of the next-best alternative forgone when making a decision. It is perhaps the single most important concept in economics. If a government spends £10bn on new hospitals, the opportunity cost might be the motorway network that could have been built instead. At an individual level, studying for A-levels has the opportunity cost of the wage you could have earned by working. Opportunity cost is always about trade-offs — there is no such thing as a free lunch.`,
      },
      {
        heading: 'The Production Possibility Frontier (PPF)',
        content: `The PPF (also called PPC) shows the maximum combinations of two goods an economy can produce when all resources are fully and efficiently employed. Points on the frontier are productively efficient. Points inside the frontier represent unemployment of resources. Points outside the frontier are currently unattainable. The PPF is usually bowed outward (concave to origin) because resources are not perfectly substitutable — as you produce more of one good, you sacrifice increasing amounts of the other (increasing opportunity cost). Economic growth shifts the PPF outward.`,
      },
      {
        heading: 'Positive vs Normative Statements',
        content: `A positive statement is a factual claim that can be tested against evidence (e.g. "Raising the minimum wage increases unemployment" — testable). A normative statement expresses a value judgement or opinion (e.g. "The government should raise the minimum wage" — cannot be proven right or wrong). AQA examiners love this distinction! Economists aim to be positive scientists, but policy inevitably involves normative judgements about fairness and priorities.`,
      },
    ],
    definitions: [
      { term: 'Scarcity', definition: 'The fundamental economic problem that wants are unlimited while resources are finite, requiring choices to be made.' },
      { term: 'Opportunity Cost', definition: 'The value of the next-best alternative foregone when a choice is made.' },
      { term: 'Economic Goods', definition: 'Goods that are scarce and require resources to produce; they have an opportunity cost.' },
      { term: 'Free Goods', definition: 'Goods available in unlimited quantities with no opportunity cost (e.g. sunlight, fresh air in rural areas).' },
      { term: 'Ceteris Paribus', definition: 'Latin for "all other things being equal" — holding all variables constant except the one being studied.' },
      { term: 'Productive Efficiency', definition: 'Producing at a point on the PPF — no resources are wasted.' },
      { term: 'Allocative Efficiency', definition: 'Resources are distributed according to consumer preferences; P = MC.' },
      { term: 'Capital Goods', definition: 'Goods used to produce other goods (machinery, factories) — investment in these shifts the PPF outward.' },
    ],
    formulas: [
      { name: 'Opportunity Cost', formula: 'OC of Good A = Units of B sacrificed ÷ Units of A gained', notes: 'Measured along the PPF gradient.' },
    ],
    realWorld: `The UK government faced a classic opportunity cost dilemma during COVID-19: spending hundreds of billions on furlough and health measures had the opportunity cost of reducing national debt, building infrastructure, or cutting taxes. The NHS budget trade-off — more healthcare vs education vs defence — is the most discussed PPF problem in UK policymaking.`,
    graphType: 'ppf',
    quiz: [
      {
        question: 'A country can produce either 100 units of food or 50 units of clothing, or any linear combination. What is the opportunity cost of producing one extra unit of clothing?',
        options: ['1 unit of food', '2 units of food', '0.5 units of food', '50 units of food'],
        correct: 1,
        explanation: 'To get 50 clothing you give up 100 food, so each unit of clothing costs 100/50 = 2 units of food.',
      },
      {
        question: 'Which of the following is a normative economic statement?',
        options: [
          'A rise in income tax reduces consumer spending.',
          'Inflation in the UK was 2.1% in March 2024.',
          'The government should prioritise reducing inequality over economic growth.',
          'A minimum wage increase reduces employment in competitive labour markets.',
        ],
        correct: 2,
        explanation: 'Normative statements contain value judgements ("should"). The others are positive — factual and testable.',
      },
      {
        question: 'A point inside the Production Possibility Frontier indicates:',
        options: [
          'Productive efficiency',
          'Allocative efficiency',
          'Unemployment of resources',
          'Technological progress',
        ],
        correct: 2,
        explanation: 'Points inside the PPF show that resources are underutilised — the economy is not producing at its potential.',
      },
      {
        question: 'What causes the PPF to shift outwards?',
        options: [
          'A movement along the PPF',
          'A reallocation of resources between sectors',
          'Economic growth through improved technology or more resources',
          'A fall in the price level',
        ],
        correct: 2,
        explanation: 'An outward shift of the PPF reflects an increase in productive capacity — from new technology, a larger labour force, or more capital.',
      },
      {
        question: 'Why is the PPF typically bowed outward (concave)?',
        options: [
          'Resources are perfectly substitutable between uses',
          'Resources are specialised, so opportunity costs increase as more of one good is produced',
          'Prices rise as output increases',
          'Consumers prefer more variety',
        ],
        correct: 1,
        explanation: 'Resources are not equally suited to producing all goods. As you shift resources from food to cars, you increasingly use workers who are better suited to farming — rising opportunity costs.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 'supply-demand',
    title: 'Supply & Demand',
    icon: '📊',
    category: 'micro',
    description: 'Price mechanism, equilibrium, and what causes markets to change.',
    theory: [
      {
        heading: 'The Law of Demand',
        content: `Demand is the quantity of a good that consumers are willing and able to purchase at each price level, ceteris paribus. The law of demand states that as price rises, quantity demanded falls — there is an inverse (negative) relationship between price and quantity demanded. This is shown by a downward-sloping demand curve. Two reasons explain this: (1) The substitution effect — as a good gets more expensive, consumers switch to cheaper alternatives. (2) The income effect — a higher price reduces real purchasing power, reducing consumption. A movement along the demand curve is caused by a price change (extension or contraction). A shift of the entire curve is caused by a change in a non-price determinant.`,
      },
      {
        heading: 'Determinants of Demand (Shifters)',
        content: `Remember the acronym PIRATES for demand shifters:
• Population (size/age structure)
• Income (normal vs inferior goods)
• Related goods (substitutes and complements)
• Advertising and tastes/fashion
• Technology (e.g. streaming killed DVD demand)
• Expectations of future prices
• Seasons and other factors

If any of these change, the whole demand curve shifts. A rise in income (for a normal good) shifts D rightward. An advertising campaign shifts D rightward. A rise in the price of a complement shifts D leftward.`,
      },
      {
        heading: 'The Law of Supply',
        content: `Supply is the quantity producers are willing and able to sell at each price level, ceteris paribus. The law of supply states that as price rises, quantity supplied increases — a positive relationship shown by an upward-sloping supply curve. Higher prices make production more profitable, incentivising firms to expand output and encouraging new firms to enter the market. Supply shifters: costs of production (wages, raw materials, energy), technology, taxes and subsidies, number of firms, expectations, climate/external shocks.`,
      },
      {
        heading: 'Equilibrium and Disequilibrium',
        content: `Market equilibrium is where supply and demand intersect — quantity demanded equals quantity supplied. At this price there is no tendency to change. If price is above equilibrium: excess supply (surplus) → unsold stock accumulates → firms cut prices → price falls back to equilibrium. If price is below equilibrium: excess demand (shortage) → competition among buyers → prices bid up → price rises to equilibrium. This self-correcting process is the price mechanism at work.`,
      },
    ],
    definitions: [
      { term: 'Demand', definition: 'The quantity of a good consumers are willing and able to buy at each price, ceteris paribus.' },
      { term: 'Supply', definition: 'The quantity producers are willing and able to offer for sale at each price, ceteris paribus.' },
      { term: 'Equilibrium Price', definition: 'The price at which Qd = Qs; there is no excess demand or excess supply.' },
      { term: 'Excess Demand', definition: 'When quantity demanded exceeds quantity supplied at the current price (a shortage).' },
      { term: 'Excess Supply', definition: 'When quantity supplied exceeds quantity demanded at the current price (a surplus).' },
      { term: 'Normal Good', definition: 'A good whose demand increases as income rises (positive income elasticity).' },
      { term: 'Inferior Good', definition: 'A good whose demand falls as income rises (negative income elasticity) — e.g. own-brand food.' },
      { term: 'Substitute', definition: 'A good that can replace another (e.g. butter and margarine). A rise in price of one increases demand for the other.' },
      { term: 'Complement', definition: 'A good consumed jointly with another (e.g. cars and petrol). A rise in price of one reduces demand for the other.' },
    ],
    formulas: [
      { name: 'Excess Demand', formula: 'ED = Qd − Qs', notes: 'Positive when P < Pe; represents shortage.' },
      { name: 'Excess Supply', formula: 'ES = Qs − Qd', notes: 'Positive when P > Pe; represents surplus.' },
    ],
    realWorld: `COVID-19 (2020): A dramatic simultaneous supply and demand shock. Demand for oil collapsed (lockdowns → no travel). Supply could not adjust quickly. Oil futures prices briefly went negative in April 2020 — producers were paying buyers to take oil! Meanwhile, demand for hand sanitiser surged — rightward demand shift caused prices to spike. PPE shortages showed excess demand with no price mechanism (government procurement at fixed prices).`,
    graphType: 'supply-demand',
    quiz: [
      {
        question: 'A rise in consumers\' incomes causes demand for a normal good to:',
        options: [
          'Contract (movement up the demand curve)',
          'Shift rightward (increase)',
          'Shift leftward (decrease)',
          'Remain unchanged',
        ],
        correct: 1,
        explanation: 'Income is a non-price determinant of demand. A rise in income for a normal good shifts the entire demand curve right, increasing demand at every price.',
      },
      {
        question: 'If the price of petrol rises significantly, what happens to the demand for cars (a complement)?',
        options: [
          'Demand for cars increases',
          'Demand for cars decreases',
          'Demand for cars is unaffected',
          'Supply of cars increases',
        ],
        correct: 1,
        explanation: 'Cars and petrol are complements — they are used together. A rise in petrol prices makes driving more expensive, reducing demand for cars (demand curve shifts left).',
      },
      {
        question: 'A new labour-saving technology reduces production costs in an industry. What is the most likely effect?',
        options: [
          'Supply curve shifts left; price rises',
          'Demand curve shifts right; price rises',
          'Supply curve shifts right; price falls',
          'Demand curve shifts left; price falls',
        ],
        correct: 2,
        explanation: 'Lower production costs mean firms can supply more at each price — supply shifts right. With demand unchanged, equilibrium price falls.',
      },
      {
        question: 'At a price of £8, Qd = 200 and Qs = 350. What best describes this situation?',
        options: [
          'Excess demand of 150 units — price will rise',
          'Excess supply of 150 units — price will fall',
          'Market equilibrium — price is stable',
          'A market failure has occurred',
        ],
        correct: 1,
        explanation: 'Qs (350) > Qd (200) means excess supply of 150 units. Firms face unsold stock and will cut prices until equilibrium is restored.',
      },
      {
        question: 'Bus services and cars are substitutes. A rise in the price of cars will:',
        options: [
          'Reduce demand for bus services',
          'Increase demand for bus services',
          'Increase supply of bus services',
          'Not affect the bus market',
        ],
        correct: 1,
        explanation: 'Substitutes compete with each other. If cars become more expensive, some consumers switch to buses — demand for bus services shifts rightward.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 'elasticity',
    title: 'Elasticity',
    icon: '🔄',
    category: 'micro',
    description: 'PED, PES, YED, and XED — measuring responsiveness in markets.',
    theory: [
      {
        heading: 'Price Elasticity of Demand (PED)',
        content: `PED measures the responsiveness of quantity demanded to a change in price. If PED = −2, a 10% price rise leads to a 20% fall in quantity demanded. PED is always negative (law of demand) but we usually refer to the absolute value. |PED| > 1: elastic demand (consumers are responsive). |PED| < 1: inelastic demand (consumers are less responsive). |PED| = 1: unit elastic.

Determinants of PED: Number of substitutes (more substitutes → more elastic), Necessity vs luxury (necessities → inelastic), Proportion of income spent (larger share → more elastic), Time period (longer run → more elastic as consumers adapt), Brand loyalty (strong loyalty → inelastic), Breadth of definition (broadly defined → more inelastic, e.g. 'food' vs 'Walkers crisps').`,
      },
      {
        heading: 'Price Elasticity of Supply (PES)',
        content: `PES measures how responsive quantity supplied is to a price change. PES is always positive (law of supply). PES > 1: elastic supply (firms can respond quickly). PES < 1: inelastic supply (limited ability to increase output).

Determinants of PES: Spare capacity (more spare capacity → elastic), Stocks/inventories (goods that can be stored easily → elastic), Time period (long run → more elastic as firms invest in capacity), Factor mobility (how easily inputs can be reallocated), Ease of entry into the market (competitive industries → more elastic).`,
      },
      {
        heading: 'Income & Cross Elasticity of Demand',
        content: `Income Elasticity of Demand (YED) = % change in Qd ÷ % change in income. Positive YED → normal good (luxury goods have YED > 1). Negative YED → inferior good.

Cross Elasticity of Demand (XED) = % change in Qd of Good A ÷ % change in price of Good B. Positive XED → substitutes (e.g. Coke and Pepsi, XED ≈ +0.7). Negative XED → complements (e.g. printers and ink, XED is negative). Zero XED → unrelated goods.`,
      },
      {
        heading: 'Elasticity and Tax Revenue / Incidence',
        content: `When the government levies an indirect tax, who bears the burden? This depends on relative elasticities. If demand is inelastic (necessities like fuel, tobacco): most of the tax burden falls on consumers — they continue buying despite higher prices. Firms can pass most of the tax on via higher prices. If demand is elastic: firms must absorb more of the tax themselves or lose customers. Tax revenue = tax per unit × units sold. The deadweight welfare loss of a tax is smaller when demand is inelastic.`,
      },
    ],
    definitions: [
      { term: 'Price Elasticity of Demand (PED)', definition: '% change in quantity demanded ÷ % change in price. Measures consumer responsiveness to price changes.' },
      { term: 'Elastic Demand', definition: 'When |PED| > 1 — a given % price change causes a larger % change in Qd. Many substitutes available.' },
      { term: 'Inelastic Demand', definition: 'When |PED| < 1 — a given % price change causes a smaller % change in Qd. Few substitutes, necessity goods.' },
      { term: 'Price Elasticity of Supply (PES)', definition: '% change in quantity supplied ÷ % change in price. Always positive.' },
      { term: 'Income Elasticity of Demand (YED)', definition: '% change in Qd ÷ % change in income. Positive = normal good; negative = inferior good; > 1 = luxury.' },
      { term: 'Cross Elasticity of Demand (XED)', definition: '% change in Qd of Good A ÷ % change in price of Good B. Positive = substitutes; negative = complements.' },
      { term: 'Tax Incidence', definition: 'The distribution of a tax burden between consumers and producers, determined by relative elasticities.' },
    ],
    formulas: [
      { name: 'PED', formula: 'PED = (% ΔQd) ÷ (% ΔP)', notes: 'Always negative (inverse relationship). Use absolute value for comparison.' },
      { name: 'PES', formula: 'PES = (% ΔQs) ÷ (% ΔP)', notes: 'Always positive.' },
      { name: 'YED', formula: 'YED = (% ΔQd) ÷ (% ΔY)', notes: 'Y = income. Positive = normal; negative = inferior; >1 = luxury.' },
      { name: 'XED', formula: 'XED = (% ΔQd of A) ÷ (% ΔP of B)', notes: 'Positive = substitutes; negative = complements.' },
    ],
    realWorld: `Tobacco taxes in the UK: Cigarettes have very inelastic demand (PED ≈ −0.4). The government raises tobacco duty almost every year, knowing consumers continue to buy despite higher prices. This generates £10bn+ annual revenue AND (slightly) reduces smoking. Luxury goods like designer handbags are elastic — price hikes by brands like Louis Vuitton risk losing customers to competitors. Petrol has inelastic short-run demand (PED ≈ −0.1) but becomes more elastic in the long run as people switch cars or work from home.`,
    graphType: null,
    quiz: [
      {
        question: 'A 10% rise in price leads to a 5% fall in quantity demanded. What is PED?',
        options: ['-0.5 (inelastic)', '-2.0 (elastic)', '+0.5 (inelastic)', '-5.0 (elastic)'],
        correct: 0,
        explanation: 'PED = % ΔQd ÷ % ΔP = −5% ÷ 10% = −0.5. Since |PED| < 1, demand is price inelastic.',
      },
      {
        question: 'Which factor would make demand for a good MORE price elastic?',
        options: [
          'The good is a necessity with no substitutes',
          'The good represents a very small proportion of income',
          'There are many close substitutes available',
          'Consumers have had little time to adjust their behaviour',
        ],
        correct: 2,
        explanation: 'Many close substitutes give consumers alternatives when prices rise, making demand more responsive (elastic). The other factors all contribute to inelastic demand.',
      },
      {
        question: 'If YED for a good = −1.2, this good is:',
        options: [
          'A luxury normal good',
          'A necessity normal good',
          'An inferior good',
          'A Giffen good',
        ],
        correct: 2,
        explanation: 'Negative YED means demand falls as income rises — this is the definition of an inferior good (e.g. own-brand supermarket products, bus travel for low-income individuals).',
      },
      {
        question: 'The government imposes a £2 per unit tax on a good with very inelastic demand. Who bears most of the tax burden?',
        options: [
          'Producers bear most of the burden',
          'Consumers bear most of the burden',
          'The tax is split equally',
          'Neither — the market absorbs the tax',
        ],
        correct: 1,
        explanation: 'With inelastic demand, consumers continue buying despite higher prices. Firms can pass most of the tax onto consumers via higher prices without losing much revenue.',
      },
      {
        question: 'XED between Product A and Product B is −0.8. This tells us:',
        options: [
          'A and B are substitutes',
          'A and B are inferior goods',
          'A and B are complements',
          'A and B are unrelated goods',
        ],
        correct: 2,
        explanation: 'Negative XED means demand for A falls when the price of B rises — they are used together (complements), e.g. games consoles and games.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 'market-failure',
    title: 'Market Failure & Externalities',
    icon: '🌍',
    category: 'micro',
    description: 'When markets fail to allocate resources efficiently and the role of government.',
    theory: [
      {
        heading: 'What is Market Failure?',
        content: `Market failure occurs when the free market fails to allocate resources efficiently, resulting in a loss of economic welfare (deadweight welfare loss). There is an over- or under-production/consumption relative to the social optimum. Types of market failure include: externalities, public goods, information asymmetry, merit and demerit goods, monopoly power, and factor immobility.`,
      },
      {
        heading: 'Externalities',
        content: `An externality is a cost or benefit that falls on a third party not involved in the transaction. The market only accounts for private costs and benefits, but society also experiences external costs and benefits.

Negative Externality (e.g. pollution from a factory): Private cost < Social cost. Producers over-produce relative to the social optimum (MSC > MSB at market equilibrium). The market quantity is too high.

Positive Externality (e.g. education, vaccinations): Private benefit < Social benefit. Consumers under-consume relative to the social optimum (MSB > MSC at market equilibrium). The market quantity is too low.

Key: MSC = MPC + MEC; MSB = MPB + MEB. Where MEC = marginal external cost, MEB = marginal external benefit.`,
      },
      {
        heading: 'Public Goods',
        content: `Public goods have two key properties: (1) Non-excludable — once provided, you cannot stop non-payers from consuming it (e.g. national defence, street lighting). (2) Non-rival — one person's consumption does not reduce availability to others (my enjoyment of fireworks doesn't reduce yours). Because of non-excludability, the free-rider problem emerges — consumers have no incentive to pay because they get the benefit regardless. This means no profit motive for private firms → public goods will be under-provided or not provided at all by the market. Government must provide them using tax revenue.`,
      },
      {
        heading: 'Merit and Demerit Goods',
        content: `Merit goods are under-consumed in a free market because their private benefits are undervalued relative to social benefits (information failure). Examples: education, healthcare, exercise. The government subsidises or provides them freely. Demerit goods are over-consumed relative to what is socially optimal because private consumers underestimate the true costs to themselves and society. Examples: tobacco, alcohol, gambling. Government taxes them (sin taxes), regulates, or bans them.`,
      },
      {
        heading: 'Information Asymmetry',
        content: `When one party in a transaction has more information than the other, the market may fail. Examples: used car market (sellers know about defects, buyers don't — Akerlof's 'lemons problem'). Insurance markets (adverse selection — high-risk individuals are more likely to buy insurance). Healthcare (doctors know more than patients → over-prescription). Solutions include regulation, warranties, compulsory disclosure, and government provision.`,
      },
    ],
    definitions: [
      { term: 'Market Failure', definition: 'When the free market fails to allocate resources efficiently, causing under- or over-production relative to the social optimum.' },
      { term: 'Externality', definition: 'A cost or benefit that affects a third party not involved in the economic transaction.' },
      { term: 'Negative Externality', definition: 'A cost imposed on third parties (e.g. pollution). Leads to over-production in free markets.' },
      { term: 'Positive Externality', definition: 'A benefit enjoyed by third parties (e.g. education). Leads to under-consumption in free markets.' },
      { term: 'Social Optimum', definition: 'The output level where MSC = MSB — society\'s welfare is maximised.' },
      { term: 'Deadweight Welfare Loss', definition: 'The loss of economic efficiency that occurs when the market equilibrium deviates from the social optimum.' },
      { term: 'Public Good', definition: 'A good that is both non-excludable and non-rival, leading to the free-rider problem and under-provision by markets.' },
      { term: 'Merit Good', definition: 'A good that generates positive externalities and is under-consumed due to information failure (e.g. education, healthcare).' },
      { term: 'Demerit Good', definition: 'A good over-consumed relative to the social optimum; consumers underestimate costs (e.g. tobacco, alcohol).' },
      { term: 'Information Asymmetry', definition: 'When one party in a transaction has more information than the other, potentially leading to market failure.' },
    ],
    formulas: [
      { name: 'Social Cost', formula: 'MSC = MPC + MEC', notes: 'MPC = Marginal Private Cost, MEC = Marginal External Cost.' },
      { name: 'Social Benefit', formula: 'MSB = MPB + MEB', notes: 'MPB = Marginal Private Benefit, MEB = Marginal External Benefit.' },
    ],
    realWorld: `Carbon emissions: The most critical externality of our era. Burning fossil fuels imposes massive external costs (climate change, health impacts, flooding) not reflected in market prices. The UK introduced a carbon tax (Climate Change Levy) and carbon trading (ETS) to internalise these external costs. The market produces far too much CO₂ relative to the social optimum. The 2023 IPCC report estimates the social cost of carbon at $100-200 per tonne — far above carbon prices in most markets.`,
    graphType: null,
    quiz: [
      {
        question: 'In a market with a negative externality, the free market produces output at a level where:',
        options: [
          'MSB = MSC (social optimum)',
          'MPC = MPB but MPC < MSC (over-production)',
          'MSC < MSB (under-production)',
          'Supply and demand are not in equilibrium',
        ],
        correct: 1,
        explanation: 'The free market equates MPC with MPB. But because there is an external cost (MEC > 0), MSC > MPC, so the socially optimal output is lower. The market over-produces.',
      },
      {
        question: 'National defence is a classic example of a public good because:',
        options: [
          'It is provided by the government',
          'It is non-excludable and non-rival',
          'It generates positive externalities',
          'It suffers from information asymmetry',
        ],
        correct: 1,
        explanation: 'National defence is non-excludable (you cannot protect some citizens but not others) and non-rival (protecting one person does not reduce protection for others). This causes the free-rider problem.',
      },
      {
        question: 'Education is classified as a merit good because:',
        options: [
          'The government provides it for free',
          'People undervalue its benefits, leading to under-consumption relative to the social optimum',
          'It is non-rival in consumption',
          'It creates negative externalities',
        ],
        correct: 1,
        explanation: 'Merit goods are under-consumed in the free market because consumers (especially young people) underestimate the private and social benefits. Information failure means they consume less than is optimal.',
      },
      {
        question: 'A Pigouvian tax is designed to:',
        options: [
          'Raise government revenue to provide public goods',
          'Internalise a negative externality by raising the private cost to equal the social cost',
          'Subsidise merit goods to increase consumption to the social optimum',
          'Correct information asymmetry in markets',
        ],
        correct: 1,
        explanation: 'A Pigouvian tax (named after economist Pigou) places a tax equal to the marginal external cost on producers of negative externalities, forcing them to reflect the full social cost in their decisions.',
      },
      {
        question: 'Akerlof\'s "market for lemons" is an example of:',
        options: [
          'A negative externality in production',
          'The free-rider problem in public goods',
          'Information asymmetry causing market failure',
          'A merit good being under-consumed',
        ],
        correct: 2,
        explanation: 'In the used car market, sellers know if a car is a "lemon" (defective) but buyers cannot tell. This information asymmetry leads to adverse selection — good cars leave the market, leaving only lemons.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 'government-intervention',
    title: 'Government Intervention',
    icon: '🏛️',
    category: 'micro',
    description: 'Taxes, subsidies, price controls, regulations, and their limitations.',
    theory: [
      {
        heading: 'Indirect Taxes',
        content: `An indirect tax is placed on spending, not income. Specific tax: a fixed amount per unit (e.g. £5.89 per pack of 20 cigarettes). Ad valorem tax: a percentage of price (e.g. 20% VAT). Effect: shifts the supply curve upward by the amount of the tax. This raises price and reduces quantity — correcting over-consumption of demerit goods or raising revenue. The incidence (burden) depends on elasticities. Inelastic demand → consumers bear most of the burden.`,
      },
      {
        heading: 'Subsidies',
        content: `A subsidy is a payment by the government to producers (or consumers) to reduce costs and encourage production. Effect: shifts the supply curve downward (to the right) by the amount of the subsidy. This reduces price and increases quantity — correcting under-consumption of merit goods or positive externalities. Examples: renewable energy subsidies (solar panels), agricultural subsidies (Common Agricultural Policy), NHS (subsidy of healthcare). Cost: taxpayer funded — opportunity cost of the subsidy.`,
      },
      {
        heading: 'Price Controls',
        content: `Maximum price (price ceiling): set below equilibrium to make goods affordable. Creates excess demand (shortage). Examples: rent controls, wartime food rationing, NHS prescription prices. Black markets may emerge. Minimum price (price floor): set above equilibrium to protect producers' incomes. Creates excess supply (surplus). Examples: minimum wage (labour market), EU's Common Agricultural Policy (guaranteed prices for farmers), minimum alcohol unit pricing (health policy).`,
      },
      {
        heading: 'Regulation and Other Interventions',
        content: `Government also uses: (1) Regulation — laws banning or restricting activities (ban on lead in petrol, smoking in public places, planning permission). (2) Tradeable pollution permits — cap and trade schemes put a market price on pollution (EU ETS). (3) Nudge theory — using behavioural economics to change decisions without compulsion (e.g. opt-out pension schemes, organ donation). (4) State provision — direct government supply of public goods and merit goods (NHS, schools, police). Government failures can occur when intervention makes things worse.`,
      },
    ],
    definitions: [
      { term: 'Indirect Tax', definition: 'A tax levied on goods and services (not income) that shifts the supply curve upward, raising market price.' },
      { term: 'Subsidy', definition: 'A payment to producers/consumers that shifts supply rightward, lowering market price and increasing quantity.' },
      { term: 'Maximum Price (Price Ceiling)', definition: 'Set below equilibrium; creates excess demand (shortage). Aims to keep goods affordable.' },
      { term: 'Minimum Price (Price Floor)', definition: 'Set above equilibrium; creates excess supply (surplus). Aims to protect producer income or social policy goals.' },
      { term: 'Regulation', definition: 'Government rules that restrict or mandate certain behaviours to correct market failures.' },
      { term: 'Government Failure', definition: 'When government intervention creates inefficiency or makes market outcomes worse than without intervention.' },
      { term: 'Nudge Theory', definition: 'Behavioural economics approach that subtly alters choices without restricting freedom — e.g. opt-out defaults.' },
    ],
    formulas: [],
    realWorld: `The National Living Wage (2016): A minimum wage set above the market equilibrium wage in some low-skill sectors. Classical theory predicts unemployment (excess supply of labour). Reality: employment held up (monopsony power in labour market, workers spent more boosting demand). Evaluation point: empirical evidence differs from simple theory — a great exam example of real-world complexity.`,
    graphType: null,
    quiz: [
      {
        question: 'A government sets a maximum price for rented accommodation below the equilibrium rent. The most likely result is:',
        options: [
          'A surplus of rental properties',
          'No change — the market will adjust automatically',
          'A shortage of rental properties and a black market',
          'Rents rise to reflect demand',
        ],
        correct: 2,
        explanation: 'A price ceiling below equilibrium means quantity demanded exceeds quantity supplied — a shortage. Landlords may then let properties illegally above the cap (black market).',
      },
      {
        question: 'A government subsidises solar panel installation. What effect does this have on the market?',
        options: [
          'Demand curve shifts right; equilibrium price rises',
          'Supply curve shifts right; equilibrium price falls and output rises',
          'Supply curve shifts left; price rises',
          'Demand curve shifts left; output falls',
        ],
        correct: 1,
        explanation: 'A subsidy reduces producers\' costs, shifting supply right. Price falls and quantity rises — encouraging more consumption of this merit good with positive externalities.',
      },
      {
        question: 'Which of the following is an example of government failure?',
        options: [
          'Tobacco taxes reducing smoking rates',
          'Agricultural subsidies leading to overproduction and environmental damage',
          'Minimum wages raising incomes for low-paid workers',
          'Carbon taxes reducing CO₂ emissions',
        ],
        correct: 1,
        explanation: 'Subsidising agriculture (as in the EU\'s CAP) can lead to over-production beyond the social optimum, environmental degradation, and high taxpayer costs — an unintended consequence making things worse.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 'market-structures',
    title: 'Market Structures',
    icon: '🏢',
    category: 'micro',
    description: 'Perfect competition, monopoly, oligopoly, and contestable markets.',
    theory: [
      {
        heading: 'Spectrum of Market Structures',
        content: `Markets are classified by the number of firms, degree of product differentiation, barriers to entry/exit, and the information available. The spectrum runs from perfect competition (highly competitive) through monopolistic competition, oligopoly, to pure monopoly (least competitive). Most real markets are oligopolies or monopolistically competitive.`,
      },
      {
        heading: 'Perfect Competition',
        content: `Assumptions: Many buyers and sellers. Homogeneous (identical) products. Perfect information. No barriers to entry or exit. Firms are price takers (face a perfectly elastic demand curve at the market price).

Short-run: Firms can make supernormal profit, normal profit, or losses. Long-run: Supernormal profit attracts entry → supply increases → price falls → only normal profit survives. Losses lead to exit → price rises. Long-run equilibrium: P = MR = MC = AC (productively and allocatively efficient). Perfect competition is the benchmark for efficiency.`,
      },
      {
        heading: 'Monopoly',
        content: `A pure monopoly is a single seller with 100% market share. A working monopoly is defined in the UK as a firm with >25% market share. Key features: Price maker — faces downward-sloping demand curve. Can earn persistent supernormal profit (protected by barriers to entry). MR < AR (price) for a monopolist.

Profit maximisation: MC = MR → gives output Qm and price Pm. Compared to perfect competition: higher price, lower output, less consumer surplus. Monopoly creates a deadweight welfare loss. However, monopolies may benefit from economies of scale (natural monopolies like water, rail), and may invest in R&D (Schumpeterian argument — Apple, Google).`,
      },
      {
        heading: 'Oligopoly',
        content: `Oligopoly: A market dominated by a few large firms with high market concentration (4-firm concentration ratio often used). Products may be homogeneous (oil) or differentiated (cars, supermarkets). Key feature: Interdependence — each firm's decisions affect and are affected by rivals. This leads to game theory / strategic behaviour.

Kinked demand curve: Predicts price rigidity in oligopoly. If a firm raises price, rivals don't follow (lose market share — elastic). If a firm cuts price, rivals match (all lose revenue — inelastic). Collusion (cartels like OPEC) allows firms to act as a joint monopoly — illegal in the UK/EU. Non-price competition is common: advertising, loyalty cards, product innovation.`,
      },
    ],
    definitions: [
      { term: 'Market Concentration', definition: 'The degree to which a small number of firms dominate market output. Measured by N-firm concentration ratio or HHI.' },
      { term: 'Barriers to Entry', definition: 'Obstacles that prevent new firms from entering a market (patents, brand loyalty, economies of scale, regulation).' },
      { term: 'Supernormal Profit', definition: 'Profit above normal profit (AR > AC); only sustained when there are barriers to entry.' },
      { term: 'Normal Profit', definition: 'The minimum return needed to keep a firm in the industry; when TR = TC (including opportunity cost of capital).' },
      { term: 'Price Maker', definition: 'A firm with market power that can set price above marginal cost (monopoly, oligopoly).' },
      { term: 'Allocative Efficiency', definition: 'P = MC — resources are allocated according to consumer preferences. Achieved in perfect competition long-run.' },
      { term: 'Productive Efficiency', definition: 'Producing at minimum average cost (MC = AC at the bottom of AC curve).' },
      { term: 'Natural Monopoly', definition: 'Occurs when LRAC falls over the entire relevant range of output — one firm can supply the market at lower cost than many.' },
    ],
    formulas: [
      { name: 'Profit Maximisation Rule', formula: 'MC = MR', notes: 'Applies to ALL market structures. Profit is maximised where marginal cost equals marginal revenue.' },
      { name: 'Concentration Ratio (4-firm)', formula: 'CR4 = (combined market share of top 4 firms) %', notes: '>60% suggests oligopoly; approaching 100% = monopoly.' },
    ],
    realWorld: `UK supermarkets (Oligopoly): Tesco, Sainsbury's, Asda, and Morrisons control ~65% of grocery retail. Classic oligopoly features: price wars (2014-2019 as Aldi/Lidl challenged incumbents), heavy advertising, loyalty cards (non-price competition), and interdependence (if Tesco cuts prices, Asda responds). The CMA (Competition and Markets Authority) monitors for collusion and anti-competitive behaviour.`,
    graphType: null,
    quiz: [
      {
        question: 'In long-run equilibrium in perfect competition, which condition holds?',
        options: [
          'P > MC and firms earn supernormal profit',
          'P = MC = AC — normal profit only',
          'Firms can maintain supernormal profit indefinitely',
          'MR > MC at equilibrium output',
        ],
        correct: 1,
        explanation: 'In long-run perfect competition, entry of new firms eliminates supernormal profit. Equilibrium is where P = MC (allocative efficiency) and P = minimum AC (productive efficiency). Only normal profit remains.',
      },
      {
        question: 'A monopolist maximises profit by setting output where:',
        options: [
          'P = MR', 'MR = MC', 'AR = MR', 'MC = AC',
        ],
        correct: 1,
        explanation: 'The profit maximisation rule MC = MR applies to all firms. For the monopolist, this gives a lower output and higher price than under perfect competition.',
      },
      {
        question: 'The kinked demand curve model in oligopoly predicts that:',
        options: [
          'Firms frequently change prices',
          'Prices tend to be stable (sticky) unless costs change significantly',
          'Firms will always collude to maximise joint profit',
          'There is perfect price competition between firms',
        ],
        correct: 1,
        explanation: 'The kinked demand curve model shows that price increases lose customers (rivals don\'t follow) while price cuts are matched, eroding profit. This creates an incentive to leave prices unchanged — price rigidity.',
      },
    ],
  },
]

// ============================================================
export const macroTopics = [
  // ─────────────────────────────────────────────────────────
  {
    id: 'macro-objectives',
    title: 'Macroeconomic Objectives',
    icon: '🎯',
    category: 'macro',
    description: 'The four main macroeconomic goals and how they are measured.',
    theory: [
      {
        heading: 'The Four Main Macroeconomic Objectives',
        content: `Governments typically pursue four main macroeconomic objectives:
1. Economic growth — a sustained increase in real GDP over time. Target: ~2% per year in the UK.
2. Low unemployment — keeping unemployment low. UK target: no fixed target, but natural rate ≈ 4-5%.
3. Low and stable inflation — UK inflation target: 2% CPI, set by the Bank of England.
4. Balance of payments equilibrium — avoiding persistent current account deficits or surpluses.

Additional objectives: income equality, environmental sustainability, financial stability, exchange rate stability. These objectives often conflict — the most famous conflict is the inflation-unemployment trade-off (Phillips Curve).`,
      },
      {
        heading: 'Measuring GDP',
        content: `Gross Domestic Product (GDP) is the total monetary value of all goods and services produced in an economy over a given period. Three methods — always give the same answer (in theory): (1) Output method: sum of value added in each sector. (2) Income method: sum of all factor incomes (wages + profits + rent + interest). (3) Expenditure method: C + I + G + (X − M).

Real GDP adjusts for inflation; Nominal GDP does not. Real GDP per capita = Real GDP ÷ population — a better measure of living standards. GDP growth = (GDP this year − GDP last year) ÷ GDP last year × 100.`,
      },
      {
        heading: 'Limitations of GDP as a Welfare Measure',
        content: `GDP is imperfect as a measure of living standards because it ignores: income inequality (average hides distribution — Gini coefficient better), non-market activity (household work, volunteering), environmental degradation (pollution that creates GDP), the shadow economy (unreported activity), leisure and subjective wellbeing, and quality of life factors. The Human Development Index (HDI) combines GDP per capita with education and life expectancy. Bhutan famously uses Gross National Happiness.`,
      },
    ],
    definitions: [
      { term: 'GDP (Gross Domestic Product)', definition: 'Total monetary value of all goods and services produced within a country\'s borders in a given period.' },
      { term: 'Real GDP', definition: 'GDP adjusted for inflation — measures actual changes in output volume.' },
      { term: 'Economic Growth', definition: 'An increase in real GDP over time; sustained long-run growth requires productivity improvements.' },
      { term: 'Unemployment Rate', definition: 'Percentage of the economically active population (labour force) that is unemployed and actively seeking work.' },
      { term: 'Inflation', definition: 'A sustained rise in the general price level, eroding purchasing power.' },
      { term: 'CPI (Consumer Price Index)', definition: 'UK\'s main measure of inflation; tracks the price of a weighted basket of goods and services.' },
      { term: 'Current Account', definition: 'Part of the Balance of Payments recording trade in goods, services, income flows, and transfers.' },
    ],
    formulas: [
      { name: 'Expenditure GDP', formula: 'GDP = C + I + G + (X − M)', notes: 'C=consumption, I=investment, G=government, X=exports, M=imports.' },
      { name: 'GDP Growth Rate', formula: 'Growth = [(GDP₁ − GDP₀) ÷ GDP₀] × 100', notes: 'Use real GDP to remove inflation effects.' },
    ],
    realWorld: `UK GDP in 2023: Real GDP grew by 0.1% — barely avoiding recession. Contrast with post-COVID bounce (7.5% growth in 2021). Key conflicts: The Bank of England raised interest rates to 5.25% to fight inflation (peaked at 11.1% in October 2022) — but this slowed growth and raised mortgage costs. Classic objective conflict: lower inflation came at the cost of lower growth and higher unemployment. The UK also had a record current account deficit of ~4% of GDP.`,
    graphType: null,
    quiz: [
      {
        question: 'Which formula represents the expenditure approach to calculating GDP?',
        options: [
          'GDP = C + I + G + (X + M)',
          'GDP = C + I + G + (X − M)',
          'GDP = Wages + Profits + Rent + Interest',
          'GDP = Output × Price Level',
        ],
        correct: 1,
        explanation: 'GDP = C (consumption) + I (investment) + G (government spending) + (X − M) = net exports. Imports are subtracted as they represent spending on foreign production.',
      },
      {
        question: 'The UK inflation target is set at:',
        options: ['0%', '1% RPI', '2% CPI', '5% CPI'],
        correct: 2,
        explanation: 'The Bank of England\'s Monetary Policy Committee has a 2% CPI inflation target, set by the Chancellor. If inflation deviates by more than 1pp from target, the Governor must write an open letter explaining why.',
      },
      {
        question: 'Which best explains why GDP is a limited measure of economic welfare?',
        options: [
          'GDP cannot be calculated accurately',
          'GDP does not account for income distribution, environmental costs, or non-market activity',
          'GDP only measures government spending',
          'GDP rises even in recession',
        ],
        correct: 1,
        explanation: 'GDP measures output/income but ignores how equally it is distributed, environmental degradation, household/voluntary work, and subjective wellbeing — all vital components of true welfare.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 'ad-as',
    title: 'Aggregate Demand & Supply',
    icon: '📉',
    category: 'macro',
    description: 'The AD-AS model — the backbone of macroeconomics.',
    theory: [
      {
        heading: 'Aggregate Demand (AD)',
        content: `Aggregate Demand is the total planned expenditure on goods and services produced in an economy at different price levels, ceteris paribus. AD = C + I + G + (X − M). The AD curve slopes downward because: (1) Wealth effect — a lower price level increases real wealth, boosting C. (2) Interest rate effect — lower prices reduce money demand, lower interest rates, more investment I. (3) International competitiveness — lower domestic prices boost exports X and reduce imports M.

AD shifts when its components change: Consumer confidence/credit ↑ → C ↑ → AD shifts right. Interest rate falls → I ↑ → AD right. Government stimulus (G↑ or T↓) → AD right. Exchange rate falls → exports cheaper → X ↑ → AD right.`,
      },
      {
        heading: 'The Multiplier Effect',
        content: `When autonomous spending (e.g. government spending) increases, the final increase in GDP is larger — due to the multiplier. Each round of spending creates income, which creates further spending. Multiplier (k) = 1 ÷ (1 − MPC) = 1 ÷ MPS+MPT+MPM. If MPC = 0.8, k = 1/(1-0.8) = 5. A £10bn stimulus creates £50bn of additional GDP. In practice, the multiplier is lower due to withdrawals (savings, taxation, imports). The size of the multiplier depends on the marginal propensity to consume (MPC).`,
      },
      {
        heading: 'Aggregate Supply (AS) — Short Run',
        content: `Short-Run Aggregate Supply (SRAS) slopes upward: as price level rises, firms are motivated to expand output (wages/costs are sticky in the short run, so real profit margins rise). SRAS shifts when: Wage costs change, energy/raw material prices change, productivity changes, exchange rate changes (imports of inputs). The SRAS is flat at very low output (deflationary gap) and becomes steeper as full capacity is approached.`,
      },
      {
        heading: 'Aggregate Supply (AS) — Long Run',
        content: `Long-Run Aggregate Supply (LRAS) is vertical at the productive potential of the economy (full employment output, Yfe). Keynesian view: LRAS has a reverse-J shape — flat below full employment, then vertical. Classical/monetarist view: LRAS is always vertical — the economy self-corrects to Yfe. LRAS shifts only from supply-side improvements: better technology, more capital, higher labour productivity, immigration (increasing workforce), better education and training, deregulation.`,
      },
    ],
    definitions: [
      { term: 'Aggregate Demand (AD)', definition: 'Total planned spending on domestically produced goods and services (C+I+G+X−M) at different price levels.' },
      { term: 'Aggregate Supply (AS)', definition: 'Total output that firms in an economy are willing and able to produce at different price levels.' },
      { term: 'SRAS', definition: 'Short-Run Aggregate Supply — slopes upward; shifts with changes in input costs and productivity.' },
      { term: 'LRAS', definition: 'Long-Run Aggregate Supply — vertical at full employment output (Yfe); shifts with structural supply-side changes.' },
      { term: 'Multiplier Effect', definition: 'The process by which an initial change in autonomous spending leads to a larger final change in GDP.' },
      { term: 'Deflationary Gap', definition: 'When actual output (Y) < full employment output (Yfe); associated with negative output gap and unemployment.' },
      { term: 'Inflationary Gap', definition: 'When actual output (Y) > full employment output (Yfe); associated with positive output gap and demand-pull inflation.' },
      { term: 'MPC (Marginal Propensity to Consume)', definition: 'The proportion of each extra pound of income spent on consumption.' },
    ],
    formulas: [
      { name: 'Aggregate Demand', formula: 'AD = C + I + G + (X − M)', notes: 'Components: consumption, investment, government, net exports.' },
      { name: 'Multiplier', formula: 'k = 1 ÷ (1 − MPC) = 1 ÷ (MPS + MPT + MPM)', notes: 'Higher MPC → larger multiplier.' },
      { name: 'MPC + MPS + MPT + MPM', formula: '= 1', notes: 'All additional income must be consumed, saved, taxed, or spent on imports.' },
    ],
    realWorld: `2020-22 Post-COVID AD surge: Governments worldwide (including the UK) spent trillions on stimulus (G↑). Consumers saved massively during lockdowns then spent freely (C surge). Combined with supply chain disruptions (SRAS shifted left), the result was a powerful inflationary pressure — AD far right, SRAS shifting left = price level surging. The Bank of England underestimated the multiplied effect of stimulus + pent-up demand, contributing to the 2022 inflation crisis.`,
    graphType: 'ad-as',
    quiz: [
      {
        question: 'Which of the following would shift the AD curve to the RIGHT?',
        options: [
          'The Bank of England raises interest rates',
          'Consumer confidence falls sharply',
          'The government increases expenditure by £50bn',
          'The pound strengthens significantly',
        ],
        correct: 2,
        explanation: 'Government spending (G) is a component of AD = C+I+G+(X−M). An increase in G directly increases AD. The other options all reduce AD.',
      },
      {
        question: 'If the MPC = 0.75, what is the value of the multiplier?',
        options: ['0.75', '1.33', '4', '3'],
        correct: 2,
        explanation: 'k = 1 ÷ (1 − MPC) = 1 ÷ (1 − 0.75) = 1 ÷ 0.25 = 4. A £10bn government spending increase would increase GDP by £40bn.',
      },
      {
        question: 'Rising oil prices (a major input cost) would most directly cause:',
        options: [
          'The AD curve to shift right',
          'The LRAS curve to shift right',
          'The SRAS curve to shift left (AS falls)',
          'The SRAS curve to shift right',
        ],
        correct: 2,
        explanation: 'Oil is a production input. Rising oil prices increase firms\' costs of production, reducing the amount they are willing to supply at any price level — SRAS shifts left, causing stagflation.',
      },
      {
        question: 'In the Keynesian model, the LRAS curve is:',
        options: [
          'Vertical at all output levels',
          'Downward sloping like the AD curve',
          'Horizontal at low output and vertical near full employment (reverse-J shape)',
          'Always upward sloping',
        ],
        correct: 2,
        explanation: 'Keynes argued that at low output, spare capacity means firms can expand without price increases (flat). As full employment approaches, bottlenecks cause prices to rise steeply (vertical).',
      },
      {
        question: 'A country invests heavily in worker retraining and automation technology. This would:',
        options: [
          'Shift AD to the right',
          'Shift LRAS to the right — increasing productive capacity',
          'Shift SRAS to the left',
          'Create a deflationary gap',
        ],
        correct: 1,
        explanation: 'Investment in human capital and technology increases the economy\'s productive potential, shifting LRAS rightward — representing long-run economic growth without inflationary pressure.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 'unemployment',
    title: 'Unemployment',
    icon: '👷',
    category: 'macro',
    description: 'Types, causes, consequences, and policies to reduce unemployment.',
    theory: [
      {
        heading: 'Types of Unemployment',
        content: `Cyclical (demand-deficient): Caused by a fall in AD during a recession. Output gap is negative. Can be large — UK unemployment hit 12% in 1984 and 8% in 2009. Structural: Industries decline due to technological change or global competition (e.g. coal mining, steel, shipbuilding). Workers' skills don't match job vacancies. Long-lasting and requires retraining. Frictional: Workers between jobs while searching for new employment. Short-term and inevitable — represents the normal flow in a dynamic economy. Seasonal: Industries with seasonal demand (tourism, agriculture, construction). Classical (real-wage): When minimum wages or union power keep real wages above market-clearing level — creates excess supply of labour.`,
      },
      {
        heading: 'Measuring Unemployment',
        content: `Claimant Count: Numbers claiming Jobseeker's Allowance (or Universal Credit). Easy to measure but excludes many unemployed. UK: ~1.4m (2024). Labour Force Survey (ILO definition): Surveys a sample of the population. Unemployed = available, actively seeking, and without work in last 4 weeks. UK rate: ~4.2% (2024). The LFS/ILO measure is considered more accurate internationally.`,
      },
      {
        heading: 'Consequences of Unemployment',
        content: `Economic: Lost output (GDP below potential), reduced tax revenue, higher benefit spending (fiscal costs), regional deprivation. Social: Mental health deterioration, skill atrophy (hysteresis — long-term unemployment makes workers less employable), family breakdown, crime, loss of dignity. Hysteresis: Prolonged unemployment can permanently reduce the natural rate — workers' skills deteriorate and employers become less willing to hire them, raising the NAIRU.`,
      },
    ],
    definitions: [
      { term: 'Unemployment', definition: 'People without work who are available and actively seeking employment (ILO definition).' },
      { term: 'Natural Rate of Unemployment (NRU)', definition: 'Unemployment that remains even when the economy is at full capacity — includes frictional and structural elements. UK ≈ 4-5%.' },
      { term: 'NAIRU', definition: 'Non-Accelerating Inflation Rate of Unemployment — the unemployment rate consistent with stable inflation.' },
      { term: 'Cyclical Unemployment', definition: 'Unemployment caused by a fall in aggregate demand during an economic downturn.' },
      { term: 'Structural Unemployment', definition: 'Long-term mismatch between skills workers have and skills employers need, often due to industry decline.' },
      { term: 'Frictional Unemployment', definition: 'Short-term unemployment arising as workers transition between jobs.' },
      { term: 'Hysteresis', definition: 'Prolonged unemployment causes permanent damage to workers\' skills and employability, raising the natural rate.' },
    ],
    formulas: [
      { name: 'Unemployment Rate', formula: 'UR = (Unemployed ÷ Labour Force) × 100', notes: 'Labour force = employed + unemployed (economically active).' },
    ],
    realWorld: `UK 2024: Unemployment at ~4.2% (ILO measure) — near the natural rate. But the number of economically inactive (not seeking work, often due to long-term illness) hit a post-COVID record of 9.4m. This explains why the UK feels labour-short despite "low" unemployment. The Bank of England watches unemployment closely — tight labour markets drive wage growth, which fuels services inflation.`,
    graphType: null,
    quiz: [
      {
        question: 'A coal miner loses his job as the coal industry declines due to renewable energy adoption. This is an example of:',
        options: ['Cyclical unemployment', 'Frictional unemployment', 'Structural unemployment', 'Seasonal unemployment'],
        correct: 2,
        explanation: 'The worker\'s skills are no longer demanded due to a structural shift in the economy (industry decline + technology). This is structural unemployment — likely long-term without retraining.',
      },
      {
        question: 'Which type of unemployment would rise most sharply during a recession?',
        options: ['Frictional', 'Structural', 'Seasonal', 'Cyclical (demand-deficient)'],
        correct: 3,
        explanation: 'In a recession, aggregate demand falls — firms cut output and lay off workers. This is cyclical unemployment, directly caused by insufficient demand in the economy.',
      },
      {
        question: 'Hysteresis in the labour market refers to:',
        options: [
          'The seasonal variation in unemployment rates',
          'The tendency for unemployment to return to its natural rate after a shock',
          'Long-term unemployment permanently raising the natural rate as skills atrophy',
          'The effect of minimum wages on employment levels',
        ],
        correct: 2,
        explanation: 'Hysteresis means that prolonged cyclical unemployment becomes structural — workers lose skills and employers become reluctant to hire them, permanently raising the NAIRU.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 'inflation',
    title: 'Inflation',
    icon: '💸',
    category: 'macro',
    description: 'Causes, consequences, and control of rising prices.',
    theory: [
      {
        heading: 'Demand-Pull Inflation',
        content: `Demand-pull inflation occurs when AD rises faster than AS — the economy is "overheating". Too much money chasing too few goods. In the AD-AS diagram: AD shifts right, moving up the SRAS curve, raising both real output and the price level (in the short run). Causes: loose monetary policy (low interest rates), fiscal stimulus (tax cuts, spending increases), consumer/business confidence surge, depreciation of exchange rate.`,
      },
      {
        heading: 'Cost-Push Inflation',
        content: `Cost-push inflation arises from an increase in firms' production costs, shifting SRAS left. This causes a simultaneous rise in price level AND fall in real output — stagflation (inflation + stagnation). Causes: Rising oil/energy prices (1973 OPEC crisis, 2022 Russian invasion of Ukraine), rising wages, supply chain disruptions, currency depreciation (imports more expensive). Policy dilemma: cutting interest rates to boost output worsens inflation; raising rates reduces inflation but deepens the output fall.`,
      },
      {
        heading: 'Consequences of Inflation',
        content: `Costs: Erodes purchasing power (especially hurts those on fixed incomes), menu costs (firms must frequently update prices), shoe-leather costs (time/effort managing cash), uncertainty reduces investment, redistributes income from creditors to debtors, reduces international competitiveness (exports become expensive). Hyperinflation (e.g. Zimbabwe 2008, Weimar Germany 1923) destroys the price mechanism entirely.

Benefits of low stable inflation: Prevents deflation (which is very damaging — consumers delay purchases, real debt burden rises, risk of debt-deflation spiral). Reduces real debt burden on governments.`,
      },
      {
        heading: 'Measuring Inflation',
        content: `CPI (Consumer Price Index): UK's official inflation measure. Tracks a weighted basket of ~700 goods/services bought by households. Limitations: basket may not reflect your spending pattern; doesn't include housing costs (CPIH does); quality improvements are hard to capture. RPI (Retail Price Index): older measure, includes mortgage costs; typically 1-2pp higher than CPI. Used for some public sector pay deals and index-linked gilts.`,
      },
    ],
    definitions: [
      { term: 'Inflation', definition: 'A sustained rise in the general price level, measured by CPI in the UK. Target: 2%.' },
      { term: 'Demand-Pull Inflation', definition: 'Inflation caused by excess aggregate demand — AD rising faster than AS.' },
      { term: 'Cost-Push Inflation', definition: 'Inflation caused by rising input costs, shifting SRAS left and creating stagflation.' },
      { term: 'Stagflation', definition: 'Simultaneous high inflation and low/negative economic growth — the worst macroeconomic outcome.' },
      { term: 'Deflation', definition: 'A sustained fall in the price level — can be dangerous if it triggers a debt-deflation spiral.' },
      { term: 'Disinflation', definition: 'A fall in the rate of inflation (prices still rising, but more slowly). Not the same as deflation.' },
      { term: 'Quantity Theory of Money', definition: 'MV = PQ — if money supply (M) grows faster than real output (Q), inflation (P) results (monetarist view).' },
    ],
    formulas: [
      { name: 'Inflation Rate', formula: 'Inflation = [(CPI₁ − CPI₀) ÷ CPI₀] × 100', notes: 'Measured month-on-month or year-on-year.' },
      { name: 'Quantity Theory of Money', formula: 'MV = PQ', notes: 'M=money supply, V=velocity, P=price level, Q=real output. Monetarist framework.' },
      { name: 'Real Interest Rate', formula: 'Real IR ≈ Nominal IR − Inflation Rate', notes: 'Fisher equation (approximate). Relevant for real returns on savings/borrowing.' },
    ],
    realWorld: `UK 2022-2023 Inflation Crisis: CPI peaked at 11.1% in October 2022 — highest in 40 years. Primarily cost-push: Russian invasion of Ukraine spiked gas/electricity prices, global supply chain disruptions post-COVID. But also demand-pull: massive COVID stimulus + low interest rates kept spending high. The Bank of England raised rates from 0.1% (Dec 2021) to 5.25% (Aug 2023). Inflation returned to 2% by May 2024. Lesson: Both supply and demand factors drove inflation; monetary policy can only really address demand-pull.`,
    graphType: null,
    quiz: [
      {
        question: 'Cost-push inflation is caused by:',
        options: [
          'An increase in aggregate demand',
          'A fall in aggregate demand',
          'An increase in firms\' production costs (shifting SRAS left)',
          'The government printing excess money',
        ],
        correct: 2,
        explanation: 'Cost-push inflation arises from rising input costs (wages, energy, materials) that shift SRAS left. This raises the price level while reducing real output — stagflation.',
      },
      {
        question: 'Which is NOT a cost of high unexpected inflation?',
        options: [
          'Menu costs — firms must frequently reprice goods',
          'Reduced international competitiveness',
          'Redistribution from debtors to creditors',
          'Erosion of purchasing power for those on fixed incomes',
        ],
        correct: 2,
        explanation: 'High inflation HELPS debtors (their debts are worth less in real terms) and HURTS creditors (they are repaid in money of lower real value). The redistribution goes from creditors to debtors, not vice versa.',
      },
      {
        question: 'In the UK, the Bank of England\'s inflation target is:',
        options: ['0% CPI', '1% RPI', '2% CPI', '3% CPIH'],
        correct: 2,
        explanation: 'The UK inflation target is 2% CPI, mandated by the Treasury and delegated to the Bank of England\'s Monetary Policy Committee (MPC).',
      },
      {
        question: 'A sudden sharp rise in global oil prices would most likely cause:',
        options: [
          'Demand-pull inflation only',
          'Cost-push inflation and possible stagflation',
          'Deflation as firms absorb costs',
          'A rightward shift of the AD curve',
        ],
        correct: 1,
        explanation: 'Oil is a key input cost. Rising oil prices shift SRAS left — raising the price level but reducing real output — the definition of stagflation (cost-push inflation).',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 'fiscal-monetary',
    title: 'Fiscal & Monetary Policy',
    icon: '🏦',
    category: 'macro',
    description: 'Using government spending, taxation, and interest rates to manage the economy.',
    theory: [
      {
        heading: 'Fiscal Policy',
        content: `Fiscal policy uses government spending (G) and taxation (T) to influence aggregate demand and the economy. Expansionary fiscal policy: G↑ or T↓ → increases AD → boosts growth and employment. Contractionary fiscal policy: G↓ or T↑ → reduces AD → controls inflation.

Budget positions: Deficit: G > T (government borrows). Surplus: G < T. Balanced: G = T. The national debt accumulates with persistent deficits. Automatic stabilisers: Built-in fiscal mechanisms that stabilise the economy without active decisions — in recession, benefits rise (G↑) and tax revenues fall (T↓) automatically, cushioning the downturn. Discretionary fiscal policy requires deliberate government decisions.`,
      },
      {
        heading: 'Limitations of Fiscal Policy',
        content: `Time lags: Recognition lag (spotting the problem), decision lag (political process), implementation lag (actually spending the money). Crowding out: Government borrowing to fund spending may raise interest rates, reducing private investment (I). Political constraints: Governments may favour stimulus before elections (deficit bias). Structural deficit: Even at full employment, the budget may be in deficit — hard to reduce. Debt sustainability: High debt increases interest payment burden — interest on UK debt exceeded £100bn in 2023.`,
      },
      {
        heading: 'Monetary Policy',
        content: `Monetary policy involves the Bank of England's Monetary Policy Committee (MPC) setting the base rate (Bank Rate) to meet the 2% CPI inflation target. Expansionary: Lower interest rates → cheaper borrowing → C↑, I↑ → AD shifts right. Contractionary: Higher rates → more expensive borrowing → C↓, I↓ → AD shifts left.

Transmission mechanism: interest rates → borrowing costs → consumer spending & saving → investment decisions → exchange rate → AD → output and inflation. Time lag: monetary policy typically takes 18-24 months to take full effect.`,
      },
      {
        heading: 'Quantitative Easing (QE) and Unconventional Policy',
        content: `When Bank Rate hit the Zero Lower Bound (0.1%) during COVID, conventional monetary policy lost traction. QE: The Bank of England creates money electronically and buys government bonds (gilts) from financial institutions. This: (1) Lowers long-term interest rates. (2) Increases money supply and bank reserves. (3) Encourages investors to seek higher-yield assets (portfolio rebalancing). (4) Can weaken the pound, boosting exports. QE risks: Asset price inflation (benefit wealthy), inflation risk if too much money is created, 'liquidity trap' (banks hold excess reserves rather than lending).`,
      },
      {
        heading: 'Supply-Side Policies',
        content: `Supply-side policies aim to shift LRAS rightward by improving the productive capacity of the economy. They are long-term structural policies. Market-based: Deregulation, privatisation, tax cuts to incentivise work/investment, trade union reform, reducing benefits to incentivise work. Interventionist: Investment in infrastructure, education/skills training, R&D subsidies, industrial policy. Supply-side policies work slowly but are non-inflationary (increase both output and productive potential).`,
      },
    ],
    definitions: [
      { term: 'Fiscal Policy', definition: 'Government use of spending and taxation to influence aggregate demand and economic activity.' },
      { term: 'Budget Deficit', definition: 'When government spending exceeds tax revenue in a given year (G > T).' },
      { term: 'National Debt', definition: 'The total accumulated stock of government borrowing (all deficits minus surpluses).' },
      { term: 'Automatic Stabilisers', definition: 'Built-in fiscal mechanisms (benefits, progressive taxes) that cushion economic fluctuations without active decisions.' },
      { term: 'Monetary Policy', definition: 'Central bank use of interest rates (and other tools) to meet the inflation target and support growth.' },
      { term: 'Bank Rate', definition: 'The key interest rate set by the Bank of England\'s MPC — influences all UK borrowing and savings rates.' },
      { term: 'Quantitative Easing (QE)', definition: 'Asset purchases by the central bank to increase money supply and lower long-term interest rates when conventional policy is insufficient.' },
      { term: 'Crowding Out', definition: 'Government borrowing raises interest rates, reducing private-sector investment.' },
      { term: 'Supply-Side Policy', definition: 'Policies aimed at increasing the productive capacity (LRAS) of the economy — long-term and non-inflationary.' },
    ],
    formulas: [
      { name: 'Budget Balance', formula: 'Budget Balance = Tax Revenue (T) − Government Spending (G)', notes: 'Positive = surplus; negative = deficit.' },
      { name: 'National Debt', formula: 'National Debt = Sum of all past budget deficits − surpluses', notes: 'UK national debt ≈ £2.7 trillion (2024), ≈100% of GDP.' },
    ],
    realWorld: `UK 2020-24 Policy Cycle: COVID saw the largest peacetime fiscal stimulus in UK history — furlough scheme cost £70bn, total borrowing £300bn in 2020-21. Bank Rate cut to 0.1% + £895bn QE. Then: inflation hit 11.1% → MPC raised rates 14 consecutive times to 5.25% (fastest tightening in 30 years). Fiscal policy also tightened: tax thresholds frozen (fiscal drag → effective tax rise). By 2024: growth near zero, deficit still £120bn/year, and a political debate about whether austerity or investment is the right path.`,
    graphType: null,
    quiz: [
      {
        question: 'The Bank of England raises interest rates from 4% to 5%. Which effect is most likely?',
        options: [
          'Consumer spending and investment increase',
          'The exchange rate falls, making exports cheaper',
          'Borrowing becomes more expensive, reducing consumer spending and investment',
          'The government can borrow more cheaply',
        ],
        correct: 2,
        explanation: 'Higher interest rates raise the cost of loans and mortgages, reducing consumer spending (C) and business investment (I). This reduces AD — the MPC\'s intended effect to reduce inflationary pressure.',
      },
      {
        question: 'Automatic stabilisers work because:',
        options: [
          'They require rapid decisions by the government',
          'Unemployment benefits rise and tax revenues fall in a recession without deliberate action',
          'They are always contractionary',
          'The central bank automatically adjusts interest rates',
        ],
        correct: 1,
        explanation: 'Automatic stabilisers work without active government decisions. In a recession, tax revenues fall automatically (less income/spending to tax) and transfer payments rise automatically — both cushion the fall in AD.',
      },
      {
        question: 'Crowding out occurs when:',
        options: [
          'The government reduces spending to fund tax cuts',
          'Government borrowing raises interest rates, reducing private investment',
          'Imports exceed exports, reducing domestic production',
          'Inflation reduces real GDP growth',
        ],
        correct: 1,
        explanation: 'When the government borrows heavily, competition for funds in capital markets can push up interest rates. This makes private borrowing more expensive, reducing business investment — partially offsetting the fiscal stimulus.',
      },
      {
        question: 'Which policy would be classified as a supply-side measure?',
        options: [
          'The government cuts income tax to boost consumer spending',
          'The Bank of England lowers interest rates',
          'The government invests £30bn in apprenticeship and skills training',
          'The government increases unemployment benefits',
        ],
        correct: 2,
        explanation: 'Investment in skills/education increases labour productivity and the economy\'s productive potential — shifting LRAS rightward. The others primarily affect AD (demand-side policies).',
      },
      {
        question: 'Quantitative Easing (QE) was used during COVID-19 mainly because:',
        options: [
          'Inflation was too high and needed to be reduced',
          'Interest rates were already near zero, limiting conventional monetary policy',
          'The government wanted to reduce the national debt',
          'It is more effective than fiscal policy at all times',
        ],
        correct: 1,
        explanation: 'When the Bank Rate hit 0.1% (the Zero Lower Bound), cutting rates further was not possible. QE was used to further ease monetary conditions by purchasing assets and injecting liquidity into financial markets.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  {
    id: 'international-trade',
    title: 'International Trade & Exchange Rates',
    icon: '🌐',
    category: 'macro',
    description: 'Comparative advantage, balance of payments, exchange rate determination.',
    theory: [
      {
        heading: 'Comparative Advantage',
        content: `Comparative advantage (Ricardo) states that countries should specialise in producing goods where they have the lowest opportunity cost, even if they are absolutely worse at producing everything. This enables gains from trade for all participants. Example: If Portugal can produce wine more efficiently than cloth relative to England, Portugal should specialise in wine and England in cloth — both can consume more than without trade. Limitations of free trade: infant industries may need protection, specialisation creates vulnerability to global shocks, not all gains are equally distributed.`,
      },
      {
        heading: 'Balance of Payments',
        content: `The Balance of Payments records all financial transactions between a country and the rest of the world. It must always balance (sum = 0). Components: (1) Current Account: Trade in goods (visible balance), Trade in services (invisible balance — UK surplus here), Primary income (dividends, interest), Secondary income (transfers). (2) Capital Account: Small — transfers of non-produced assets. (3) Financial Account: FDI, portfolio investment, reserve changes. UK has a persistent current account deficit (typically 2-5% of GDP) — we import more than we export (especially goods).`,
      },
      {
        heading: 'Exchange Rate Determination',
        content: `The exchange rate is the price of one currency in terms of another. Floating exchange rate: Determined by market forces (supply and demand for the currency). If UK exports more → foreign buyers demand more £ → £ appreciates. If UK interest rates rise → hot money flows in → £ appreciates.

Factors affecting £: Interest rate differentials, inflation differentials, current account balance, speculation and confidence, FDI flows. Marshall-Lerner condition: A depreciation of the currency improves the current account only if the sum of price elasticities of export and import demand exceeds 1 (PED exports + PED imports > 1). J-curve effect: After depreciation, the current account initially worsens before improving.`,
      },
    ],
    definitions: [
      { term: 'Comparative Advantage', definition: 'A country has comparative advantage in a good if it can produce it at a lower opportunity cost than its trading partners.' },
      { term: 'Current Account', definition: 'Records trade in goods, services, primary income (investment flows), and secondary income (transfers).' },
      { term: 'Current Account Deficit', definition: 'When a country imports more than it exports — a net outflow of currency.' },
      { term: 'Exchange Rate', definition: 'The price of one currency expressed in terms of another (e.g. £1 = €1.17).' },
      { term: 'Appreciation', definition: 'A rise in the value of a currency (under floating rates) — makes exports more expensive, imports cheaper.' },
      { term: 'Depreciation', definition: 'A fall in the value of a currency (under floating rates) — makes exports cheaper, imports more expensive.' },
      { term: 'Marshall-Lerner Condition', definition: 'For depreciation to improve the current account: sum of price elasticities of demand for exports and imports must exceed 1.' },
      { term: 'J-Curve', definition: 'After a currency depreciation, the current account initially worsens (inelastic contracts) before improving as demand adjusts.' },
    ],
    formulas: [
      { name: 'Current Account Balance', formula: 'CA = (X − M) goods + (X − M) services + net primary income + net transfers', notes: 'Deficit if negative; surplus if positive.' },
    ],
    realWorld: `Post-Brexit £ depreciation: The pound fell ~15% against the dollar/euro after the 2016 referendum. This made UK exports cheaper (boosted manufacturing) but imports more expensive (contributed to inflation in 2017-18). The J-curve played out: the current account deficit initially widened before improving slightly. UK financial services (invisible exports) remained competitive in dollar terms. A classic real-world exchange rate analysis case.`,
    graphType: null,
    quiz: [
      {
        question: 'Country A can produce 100 units of wheat or 50 units of steel per hour. Country B can produce 60 units of wheat or 40 units of steel per hour. Which country has comparative advantage in steel?',
        options: ['Country A (lower opportunity cost)', 'Country B (lower opportunity cost)', 'Both have equal comparative advantage', 'Neither — Country A is absolutely better at both'],
        correct: 1,
        explanation: 'Country A: 1 steel costs 2 wheat. Country B: 1 steel costs 1.5 wheat. Country B has the lower opportunity cost for steel — comparative advantage in steel. Country A should specialise in wheat.',
      },
      {
        question: 'UK interest rates rise relative to those in other countries. What is the most likely short-run effect on the pound?',
        options: [
          'The pound depreciates as imports become cheaper',
          'The pound appreciates as hot money flows into the UK seeking higher returns',
          'The pound remains unchanged — only trade flows matter',
          'The pound depreciates to attract foreign investment',
        ],
        correct: 1,
        explanation: 'Higher UK interest rates attract international capital (hot money) seeking better returns. To invest in UK assets, investors must buy pounds — increasing demand for £, causing appreciation.',
      },
      {
        question: 'The Marshall-Lerner condition states that a currency depreciation will improve the current account if:',
        options: [
          'The sum of PED for exports and imports is less than 1',
          'The sum of PED for exports and imports exceeds 1',
          'Both export and import demand are perfectly inelastic',
          'The country has a comparative advantage in goods exports',
        ],
        correct: 1,
        explanation: 'If PED(exports) + PED(imports) > 1, demand for exports and imports is sufficiently elastic that the volume effect (more exports, fewer imports) outweighs the price effect — improving the current account balance.',
      },
    ],
  },
]

// Combine all topics for easy access
export const allTopics = [...microTopics, ...macroTopics]

// Find topic by ID
export const getTopicById = (id) => allTopics.find(t => t.id === id)
