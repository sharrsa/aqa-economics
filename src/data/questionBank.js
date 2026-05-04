// ============================================================
// AQA A-Level Economics — Master Question Bank
// 120+ questions, 3 difficulty levels: easy / medium / hard
// ============================================================

export const questionBank = [

  // ─── THE ECONOMIC PROBLEM ───────────────────────────────────

  {
    id: 'ep-e-1', topic: 'economic-problem', topicLabel: 'The Economic Problem', difficulty: 'easy',
    question: 'What is the fundamental economic problem?',
    options: ['Prices rising faster than wages', 'Unlimited wants but limited resources', 'Too many goods being produced', 'Governments spending too much'],
    correct: 1,
    explanation: 'Scarcity — unlimited wants vs finite resources — is the root of all economic thinking. It forces every society to make choices.',
  },
  {
    id: 'ep-e-2', topic: 'economic-problem', topicLabel: 'The Economic Problem', difficulty: 'easy',
    question: 'A point inside the Production Possibility Frontier (PPF) represents:',
    options: ['Maximum productive efficiency', 'Unemployment of resources', 'Unattainable output', 'Allocative efficiency'],
    correct: 1,
    explanation: 'Points inside the PPF mean resources are underutilised — the economy is not at full potential.',
  },
  {
    id: 'ep-e-3', topic: 'economic-problem', topicLabel: 'The Economic Problem', difficulty: 'easy',
    question: 'Which of the following is a normative economic statement?',
    options: [
      'UK GDP grew by 1.3% in 2023.',
      'Inflation reduces the real value of savings.',
      'The government should prioritise reducing poverty over economic growth.',
      'A rise in interest rates reduces consumer borrowing.',
    ],
    correct: 2,
    explanation: 'Normative statements contain value judgements ("should"). The others are positive — factual and testable against data.',
  },
  {
    id: 'ep-m-1', topic: 'economic-problem', topicLabel: 'The Economic Problem', difficulty: 'medium',
    question: 'A country can produce 200 units of food or 100 units of clothing per year. What is the opportunity cost of 1 unit of clothing?',
    options: ['0.5 units of food', '1 unit of food', '2 units of food', '100 units of food'],
    correct: 2,
    explanation: '100 clothing costs 200 food, so 1 clothing = 200/100 = 2 units of food sacrificed.',
  },
  {
    id: 'ep-m-2', topic: 'economic-problem', topicLabel: 'The Economic Problem', difficulty: 'medium',
    question: 'Which of the following would cause an outward shift of the PPF?',
    options: [
      'A movement along the PPF from one good to another',
      'An increase in the working population',
      'A fall in consumer demand',
      'A higher minimum wage',
    ],
    correct: 1,
    explanation: 'An outward PPF shift requires more productive capacity — more labour, capital, technology or natural resources. A larger workforce expands productive potential.',
  },
  {
    id: 'ep-m-3', topic: 'economic-problem', topicLabel: 'The Economic Problem', difficulty: 'medium',
    question: 'A bowed-out (concave) PPF reflects:',
    options: [
      'Constant opportunity costs between goods',
      'Increasing opportunity costs as output of one good rises',
      'Decreasing returns to scale in all industries',
      'Allocative inefficiency in resource use',
    ],
    correct: 1,
    explanation: 'Resources are not perfectly substitutable — as you shift more into producing one good, you sacrifice increasing amounts of the other, hence the bowed shape.',
  },
  {
    id: 'ep-h-1', topic: 'economic-problem', topicLabel: 'The Economic Problem', difficulty: 'hard',
    question: 'Dynamic efficiency is best described as:',
    options: [
      'Producing at the lowest point on the average cost curve',
      'Allocating resources so that P = MC',
      'Innovation and investment that improves productive potential over time',
      'Operating at a point on the current PPF',
    ],
    correct: 2,
    explanation: 'Dynamic efficiency is about long-run improvement through R&D and innovation — shifting the PPF outward — rather than static efficiency at a moment in time.',
  },
  {
    id: 'ep-h-2', topic: 'economic-problem', topicLabel: 'The Economic Problem', difficulty: 'hard',
    question: 'A government invests heavily in capital goods at the expense of consumer goods. Which statement best evaluates this policy?',
    options: [
      'It is always the best long-run decision as it grows the economy',
      'It sacrifices present consumption for greater future productive capacity, but may reduce living standards now',
      'It is only efficient if the economy is already at full employment',
      'It will reduce the opportunity cost of all future production decisions',
    ],
    correct: 1,
    explanation: 'Capital investment shifts the PPF outward (future growth) but requires a sacrifice of present consumer goods — a classic inter-temporal trade-off central to development economics.',
  },
  {
    id: 'ep-h-3', topic: 'economic-problem', topicLabel: 'The Economic Problem', difficulty: 'hard',
    question: 'Why might free markets fail to achieve allocative efficiency even when operating on the PPF?',
    options: [
      'Because productive efficiency requires a bowed-out PPF',
      'Because markets can be productively efficient but produce the wrong mix of goods due to externalities or public goods',
      'Because the PPF assumes all resources are employed, which never holds',
      'Because allocative efficiency only applies in planned economies',
    ],
    correct: 1,
    explanation: 'Being on the PPF guarantees productive efficiency (no waste), but not allocative efficiency. Market failures (externalities, public goods, information asymmetry) mean the output mix may not reflect true social preferences.',
  },

  // ─── SUPPLY & DEMAND ────────────────────────────────────────

  {
    id: 'sd-e-1', topic: 'supply-demand', topicLabel: 'Supply & Demand', difficulty: 'easy',
    question: 'If consumer incomes rise, what happens to the demand for a normal good?',
    options: ['Demand falls', 'Demand is unchanged', 'Demand rises, shifting the curve right', 'Supply increases'],
    correct: 2,
    explanation: 'For a normal good, demand rises with income — the whole demand curve shifts rightward.',
  },
  {
    id: 'sd-e-2', topic: 'supply-demand', topicLabel: 'Supply & Demand', difficulty: 'easy',
    question: 'Which factor would cause a rightward shift in the supply curve of smartphones?',
    options: [
      'A rise in the price of smartphones',
      'A fall in the price of microchips (key input)',
      'A rise in consumer incomes',
      'A government ban on imports of smartphones',
    ],
    correct: 1,
    explanation: 'A fall in input costs reduces firms\' production costs, increasing profitability and incentivising more supply at every price.',
  },
  {
    id: 'sd-e-3', topic: 'supply-demand', topicLabel: 'Supply & Demand', difficulty: 'easy',
    question: 'What happens to equilibrium price and quantity when demand rises and supply stays the same?',
    options: ['Price rises, quantity falls', 'Price falls, quantity rises', 'Price rises, quantity rises', 'Price and quantity both fall'],
    correct: 2,
    explanation: 'A rightward demand shift creates excess demand at the old price. Price rises until equilibrium is restored at a higher price and higher quantity.',
  },
  {
    id: 'sd-m-1', topic: 'supply-demand', topicLabel: 'Supply & Demand', difficulty: 'medium',
    question: 'Butter and margarine are substitute goods. What happens to the market for margarine if the price of butter rises significantly?',
    options: [
      'Demand for margarine falls',
      'Supply of margarine rises',
      'Demand for margarine rises, pushing up its price',
      'The price of margarine falls as consumers switch away',
    ],
    correct: 2,
    explanation: 'Substitutes compete in demand. Pricier butter makes margarine relatively cheaper, shifting demand for margarine rightward — raising both price and quantity.',
  },
  {
    id: 'sd-m-2', topic: 'supply-demand', topicLabel: 'Supply & Demand', difficulty: 'medium',
    question: 'A maximum price is set below the equilibrium price. What will result?',
    options: [
      'A surplus — quantity supplied exceeds quantity demanded',
      'A shortage — quantity demanded exceeds quantity supplied',
      'No change — prices adjust automatically',
      'Supply increases to meet demand',
    ],
    correct: 1,
    explanation: 'A price ceiling below equilibrium keeps price artificially low. Consumers demand more, suppliers supply less — creating excess demand (shortage).',
  },
  {
    id: 'sd-m-3', topic: 'supply-demand', topicLabel: 'Supply & Demand', difficulty: 'medium',
    question: 'Petrol and cars are complementary goods. A sharp rise in petrol prices is likely to:',
    options: [
      'Increase demand for cars',
      'Decrease demand for cars',
      'Increase supply of cars',
      'Have no effect on car demand',
    ],
    correct: 1,
    explanation: 'Complements are consumed together. Expensive petrol raises the cost of running a car, reducing derived demand for cars — shifting the car demand curve leftward.',
  },
  {
    id: 'sd-h-1', topic: 'supply-demand', topicLabel: 'Supply & Demand', difficulty: 'hard',
    question: 'In the cobweb model, which condition leads to convergence (price stabilising over time)?',
    options: [
      'Supply is more elastic than demand',
      'Demand is more elastic than supply',
      'Supply and demand are equally elastic',
      'Prices are set by the government',
    ],
    correct: 1,
    explanation: 'When demand is more elastic than supply (flatter demand curve), each price overshoot is smaller than the last — the cobweb spirals inward toward equilibrium.',
  },
  {
    id: 'sd-h-2', topic: 'supply-demand', topicLabel: 'Supply & Demand', difficulty: 'hard',
    question: 'A buffer stock scheme for wheat sets a floor price above equilibrium. Which policy action is needed to maintain this floor?',
    options: [
      'Government sells wheat from its stockpile',
      'Government buys the surplus wheat at the floor price',
      'Government imposes an import tariff on wheat',
      'Government subsidises wheat consumers',
    ],
    correct: 1,
    explanation: 'Above-equilibrium floor prices create surplus supply. The buffer stock agency must purchase and store the excess to prevent market price falling below the floor.',
  },
  {
    id: 'sd-h-3', topic: 'supply-demand', topicLabel: 'Supply & Demand', difficulty: 'hard',
    question: 'Beef and leather are goods in joint supply. If consumer demand for beef rises sharply, what is the likely effect on the leather market?',
    options: [
      'Leather prices rise due to increased derived demand',
      'Leather supply increases, reducing the price of leather',
      'Leather demand falls as consumers switch to synthetic alternatives',
      'No effect — leather and beef are produced separately',
    ],
    correct: 1,
    explanation: 'Joint supply means beef and leather are produced together. More beef production automatically increases leather supply, shifting supply rightward and reducing the equilibrium price of leather.',
  },

  // ─── ELASTICITY ─────────────────────────────────────────────

  {
    id: 'el-e-1', topic: 'elasticity', topicLabel: 'Elasticity', difficulty: 'easy',
    question: 'The Price Elasticity of Demand (PED) for a good is -0.3. This means demand is:',
    options: ['Elastic', 'Inelastic', 'Unit elastic', 'Perfectly elastic'],
    correct: 1,
    explanation: '|PED| < 1 means inelastic — a 1% price rise causes less than 1% fall in quantity demanded. Common for necessities.',
  },
  {
    id: 'el-e-2', topic: 'elasticity', topicLabel: 'Elasticity', difficulty: 'easy',
    question: 'Which of the following goods is most likely to have highly inelastic demand?',
    options: ['Luxury holidays', 'Insulin for diabetics', 'Designer handbags', 'Restaurant meals'],
    correct: 1,
    explanation: 'Insulin has no close substitutes and is a life necessity — consumers must buy it regardless of price, making demand highly inelastic.',
  },
  {
    id: 'el-e-3', topic: 'elasticity', topicLabel: 'Elasticity', difficulty: 'easy',
    question: 'If Income Elasticity of Demand (YED) is negative, the good is classified as:',
    options: ['A normal good', 'A luxury good', 'An inferior good', 'A Giffen good'],
    correct: 2,
    explanation: 'Negative YED means demand falls as income rises — the hallmark of an inferior good (e.g. bus travel, own-brand food).',
  },
  {
    id: 'el-m-1', topic: 'elasticity', topicLabel: 'Elasticity', difficulty: 'medium',
    question: 'A firm raises its price by 10% and total revenue falls. What does this tell us about the PED for its product?',
    options: [
      'PED is inelastic (|PED| < 1)',
      'PED is elastic (|PED| > 1)',
      'PED is unit elastic',
      'PED is positive',
    ],
    correct: 1,
    explanation: 'When demand is elastic, a price rise reduces total revenue because the percentage fall in quantity exceeds the percentage rise in price. TR = P × Q, so TR falls.',
  },
  {
    id: 'el-m-2', topic: 'elasticity', topicLabel: 'Elasticity', difficulty: 'medium',
    question: 'The cross elasticity of demand between good A and good B is +0.8. This suggests the goods are:',
    options: [
      'Complements',
      'Substitutes',
      'Inferior goods',
      'Independent goods',
    ],
    correct: 1,
    explanation: 'Positive XED means the goods are substitutes — a rise in the price of B increases demand for A. Complements have negative XED.',
  },
  {
    id: 'el-m-3', topic: 'elasticity', topicLabel: 'Elasticity', difficulty: 'medium',
    question: 'A government places a specific tax on cigarettes where demand is very inelastic. The burden of this tax will fall mainly on:',
    options: ['Producers, as they absorb most of the cost', 'Consumers, who pay most of the tax', 'Workers, through lower wages', 'Equally on consumers and producers'],
    correct: 1,
    explanation: 'With inelastic demand, consumers have few alternatives and must continue buying. They absorb most of the tax in the form of higher prices, while producers pass it on easily.',
  },
  {
    id: 'el-h-1', topic: 'elasticity', topicLabel: 'Elasticity', difficulty: 'hard',
    question: 'Price Elasticity of Supply (PES) is likely to be high (elastic) when:',
    options: [
      'The good requires specialist inputs that are in limited supply',
      'Production capacity is already at maximum and stocks cannot be built up',
      'Firms have spare capacity and can easily store the good',
      'The good is perishable and cannot be stockpiled',
    ],
    correct: 2,
    explanation: 'Elastic supply requires flexibility: spare capacity allows rapid output increases; storability allows firms to build stock during slow periods and release it when prices rise.',
  },
  {
    id: 'el-h-2', topic: 'elasticity', topicLabel: 'Elasticity', difficulty: 'hard',
    question: 'A luxury good has YED = +2.5. If real incomes rise by 4%, by approximately how much will demand change?',
    options: ['2.5%', '4%', '10%', '1.6%'],
    correct: 2,
    explanation: 'YED = %ΔQd / %ΔY → %ΔQd = YED × %ΔY = 2.5 × 4% = 10%. Luxury demand grows faster than income, which explains why luxury sectors boom during economic expansions.',
  },
  {
    id: 'el-h-3', topic: 'elasticity', topicLabel: 'Elasticity', difficulty: 'hard',
    question: 'Why might a government choose to tax goods with inelastic demand, even if this conflicts with equity objectives?',
    options: [
      'Inelastic demand goods are always harmful, justifying taxation',
      'Taxes on inelastic goods raise large revenues with minimal quantity reduction — maximising tax yield',
      'Consumers of inelastic goods are always wealthy',
      'Taxing elastic goods creates larger deadweight losses',
    ],
    correct: 1,
    explanation: 'Governments target inelastic goods (fuel, alcohol, tobacco) because the tax revenue is large and predictable — consumers keep buying despite price rises. The trade-off is regressive incidence (poorer households spend a higher share of income on such goods).',
  },

  // ─── MARKET FAILURE ─────────────────────────────────────────

  {
    id: 'mf-e-1', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'easy',
    question: 'A factory emitting pollution into a river is an example of:',
    options: ['A positive externality', 'A negative externality', 'A public good', 'A merit good'],
    correct: 1,
    explanation: 'The factory imposes costs on third parties (river users, ecosystems) without compensating them — a classic negative externality in production.',
  },
  {
    id: 'mf-e-2', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'easy',
    question: 'Which pair of characteristics defines a pure public good?',
    options: [
      'Rivalrous and excludable',
      'Non-rivalrous and non-excludable',
      'Non-rivalrous and excludable',
      'Rivalrous and non-excludable',
    ],
    correct: 1,
    explanation: 'Public goods are non-rival (one person\'s use doesn\'t reduce availability to others) and non-excludable (impossible to stop free riders benefiting). Example: national defence.',
  },
  {
    id: 'mf-e-3', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'easy',
    question: 'Education is considered a merit good because:',
    options: [
      'It is provided free by the government',
      'It is non-excludable and non-rival',
      'Individuals undervalue its benefits, leading to under-consumption without intervention',
      'It generates large negative externalities',
    ],
    correct: 2,
    explanation: 'Merit goods are under-consumed relative to the social optimum because individuals fail to appreciate their full benefits (information failure). Society values education more than the individual does.',
  },
  {
    id: 'mf-m-1', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'medium',
    question: 'When negative externalities exist in production, the free market output is:',
    options: [
      'Equal to the social optimum',
      'Below the social optimum — too little is produced',
      'Above the social optimum — too much is produced',
      'Indeterminate without knowing the subsidy level',
    ],
    correct: 2,
    explanation: 'Producers only consider private costs, ignoring external costs imposed on society. This means MPC < MSC at the equilibrium, so the market over-produces relative to the social optimum (where MSC = MSB).',
  },
  {
    id: 'mf-m-2', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'medium',
    question: 'The "free rider problem" most directly prevents markets from providing:',
    options: ['Luxury goods', 'Public goods', 'Merit goods', 'Demerit goods'],
    correct: 1,
    explanation: 'Because public goods are non-excludable, individuals can consume them without paying. No firm can profit from supplying them, so the market under-provides or fails entirely.',
  },
  {
    id: 'mf-m-3', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'medium',
    question: 'Information asymmetry in the used car market (Akerlof\'s "market for lemons") leads to:',
    options: [
      'Over-production of high-quality cars',
      'Market failure where good cars are driven out by bad ones as buyers cannot distinguish quality',
      'Perfectly competitive pricing of all cars',
      'Sellers refusing to sell at any price',
    ],
    correct: 1,
    explanation: 'Sellers know car quality; buyers don\'t. Buyers offer average prices. Sellers of good cars refuse these prices; only low-quality "lemons" remain. Adverse selection shrinks the market.',
  },
  {
    id: 'mf-h-1', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'hard',
    question: 'The Coase Theorem suggests that externalities can be resolved without government intervention, provided:',
    options: [
      'The government sets the correct Pigouvian tax',
      'Property rights are clearly defined and transaction costs are zero',
      'Both parties have equal bargaining power and perfect information',
      'The externality is a negative one in production',
    ],
    correct: 1,
    explanation: 'Coase argued that if property rights are well-defined and bargaining is costless, affected parties will negotiate to an efficient outcome regardless of initial rights assignment. In reality, high transaction costs often prevent this.',
  },
  {
    id: 'mf-h-2', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'hard',
    question: 'A carbon trading scheme (cap-and-trade) is considered superior to a carbon tax by some economists because:',
    options: [
      'It guarantees a specific quantity of emissions reduction, unlike a tax which only sets a price signal',
      'It generates more government revenue than a carbon tax',
      'It requires less monitoring and enforcement than a tax',
      'It always results in lower carbon prices than an equivalent tax',
    ],
    correct: 0,
    explanation: 'A cap-and-trade sets a maximum quantity of emissions (the cap) with certainty. A tax sets the price but not the quantity — if firms are willing to pay, emissions may not fall as much as desired. The cap guarantees the environmental target.',
  },
  {
    id: 'mf-h-3', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'hard',
    question: 'Government failure occurs when intervention makes resource allocation worse than the free market. Which is the strongest example of this?',
    options: [
      'A Pigouvian subsidy on education causing slight over-provision',
      'Agricultural subsidies leading to massive overproduction, dumped onto world markets, destroying farming in developing countries',
      'A minimum wage set just above equilibrium causing very low unemployment',
      'A public information campaign that slightly overstates health benefits',
    ],
    correct: 1,
    explanation: 'EU/US agricultural subsidies are a textbook government failure — they distort global markets, lead to massive surpluses, and harm farmers in developing nations who cannot compete with subsidised prices. The intervention causes far more damage than the original market imperfection.',
  },

  // ─── GOVERNMENT INTERVENTION ────────────────────────────────

  {
    id: 'gi-e-1', topic: 'government-intervention', topicLabel: 'Government Intervention', difficulty: 'easy',
    question: 'A minimum wage set above the equilibrium wage will:',
    options: [
      'Have no effect on employment',
      'Cause a surplus of labour (unemployment)',
      'Cause a shortage of labour',
      'Reduce the wage below equilibrium',
    ],
    correct: 1,
    explanation: 'Above-equilibrium minimum wages raise labour costs, reducing quantity of labour demanded while increasing quantity supplied — creating excess supply (unemployment) in theory.',
  },
  {
    id: 'gi-e-2', topic: 'government-intervention', topicLabel: 'Government Intervention', difficulty: 'easy',
    question: 'A government subsidy on electric vehicles will:',
    options: [
      'Shift the demand curve for EVs leftward',
      'Increase the supply of EVs, reducing price and increasing quantity',
      'Shift the supply curve for EVs leftward',
      'Only benefit EV producers, not consumers',
    ],
    correct: 1,
    explanation: 'A subsidy reduces producers\' costs, shifting supply rightward. The equilibrium price falls and quantity rises — benefiting both producers (higher profit potential) and consumers (lower prices).',
  },
  {
    id: 'gi-e-3', topic: 'government-intervention', topicLabel: 'Government Intervention', difficulty: 'easy',
    question: 'Why does the government provide public goods like national defence?',
    options: [
      'Because the free market would produce too much',
      'Because the free rider problem means the market under-provides or fails to provide them at all',
      'Because public goods are always cheaper to produce in public hands',
      'To prevent monopoly in the defence sector',
    ],
    correct: 1,
    explanation: 'Non-excludability creates the free rider problem — no firm can charge for national defence. Without government provision (funded by taxation), the market fails entirely.',
  },
  {
    id: 'gi-m-1', topic: 'government-intervention', topicLabel: 'Government Intervention', difficulty: 'medium',
    question: 'A specific tax is placed on a good with very inelastic demand. The bulk of the tax burden will be borne by:',
    options: ['Producers', 'Consumers', 'Workers in the industry', 'Government'],
    correct: 1,
    explanation: 'With inelastic demand, consumers have few alternatives. Producers can pass on most of the tax as a price rise, knowing consumers will still buy. Consumers bear the majority of the incidence.',
  },
  {
    id: 'gi-m-2', topic: 'government-intervention', topicLabel: 'Government Intervention', difficulty: 'medium',
    question: 'Tradeable pollution permits (cap-and-trade) are more efficient than a uniform pollution tax because:',
    options: [
      'They raise more government revenue',
      'They allow emission reductions to occur where they are cheapest, minimising total abatement costs',
      'They guarantee zero net emissions',
      'They require less government oversight',
    ],
    correct: 1,
    explanation: 'Firms with low abatement costs cut emissions and sell permits; high-cost firms buy permits and continue polluting. The total reduction is achieved at minimum economic cost — allocative efficiency in abatement.',
  },
  {
    id: 'gi-m-3', topic: 'government-intervention', topicLabel: 'Government Intervention', difficulty: 'medium',
    question: 'A maximum price set below equilibrium for rented accommodation is intended to help tenants. An unintended consequence is likely to be:',
    options: [
      'A fall in rents across the whole housing market',
      'Reduced supply of rental properties as landlords exit the market',
      'Increased investment in new rental properties',
      'An improvement in the quality of rental housing',
    ],
    correct: 1,
    explanation: 'Rent controls below equilibrium reduce returns for landlords, incentivising them to convert properties to other uses or sell. Long-run supply of rentals falls, potentially worsening the housing shortage.',
  },
  {
    id: 'gi-h-1', topic: 'government-intervention', topicLabel: 'Government Intervention', difficulty: 'hard',
    question: 'Regulatory capture occurs when:',
    options: [
      'A regulator is given too much power over an industry',
      'The regulated firm influences the regulator to act in the firm\'s interests rather than the public interest',
      'The government nationalises a private monopoly',
      'A regulator imposes excessively high price caps',
    ],
    correct: 1,
    explanation: 'Regulatory capture describes regulators "captured" by the industries they oversee — through lobbying, the revolving door of personnel, or information asymmetry — resulting in weak regulation that benefits incumbents.',
  },
  {
    id: 'gi-h-2', topic: 'government-intervention', topicLabel: 'Government Intervention', difficulty: 'hard',
    question: 'An economist argues that a sugar tax is both a Pigouvian correction and regressive. How can both be true?',
    options: [
      'They cannot both be true — Pigouvian taxes are always progressive',
      'The tax corrects the negative externality of obesity costs on the NHS, but poorer households spend a higher share of income on sugary goods and thus bear a disproportionate burden',
      'The tax reduces government revenue, which worsens inequality',
      'Pigouvian taxes only apply to producer externalities, not consumer behaviour',
    ],
    correct: 1,
    explanation: 'Pigouvian taxes correct market failure by pricing in externalities — justified on efficiency grounds. But sugar/tobacco/alcohol taxes fall heavily on lower-income households who spend larger proportions of income on these goods — a regressive distributional effect. Both claims are correct.',
  },
  {
    id: 'gi-h-3', topic: 'government-intervention', topicLabel: 'Government Intervention', difficulty: 'hard',
    question: 'A cost-benefit analysis of a new motorway estimates benefits of £8bn and costs of £6bn, giving a net social benefit of £2bn. An economist recommends proceeding. Which is the strongest objection?',
    options: [
      'The net benefit is too small to be worth the investment',
      'CBA is inherently flawed because it is impossible to put monetary values on intangible costs like noise, loss of biodiversity, and community disruption',
      'Motorways always cost more than their estimated benefits',
      'The government should not be involved in transport infrastructure',
    ],
    correct: 1,
    explanation: 'CBA faces fundamental valuation problems: placing monetary values on biodiversity loss, noise pollution, historic sites, and community cohesion is subjective and contested. Bias in valuation can make a poor project appear beneficial — the most serious methodological critique.',
  },

  // ─── MARKET STRUCTURES ──────────────────────────────────────

  {
    id: 'ms-e-1', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'easy',
    question: 'In perfect competition, firms are price-takers because:',
    options: [
      'The government sets the price',
      'Each firm\'s output is too small relative to the market to affect price',
      'All firms collude to set the same price',
      'Products are differentiated',
    ],
    correct: 1,
    explanation: 'In perfect competition, many small firms each supply an insignificant fraction of total market output. No single firm can influence price — they accept the market price as given.',
  },
  {
    id: 'ms-e-2', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'easy',
    question: 'A monopolist maximises profit where:',
    options: ['P = MC', 'MR = MC', 'TR is maximised', 'AC is minimised'],
    correct: 1,
    explanation: 'All profit-maximising firms (including monopolists) produce where Marginal Revenue = Marginal Cost. For a monopolist, P > MR, so P > MC at this output — creating a welfare loss.',
  },
  {
    id: 'ms-e-3', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'easy',
    question: 'A natural monopoly exists because:',
    options: [
      'The government has granted the firm an exclusive licence',
      'The market is dominated by natural resources owned by one firm',
      'Long-run average costs fall continuously over the relevant range of demand, making one firm most efficient',
      'The firm has a patent on its core technology',
    ],
    correct: 2,
    explanation: 'Natural monopolies arise from high fixed costs and economies of scale — one firm can supply the entire market more cheaply than two or more firms (e.g. water pipes, electricity networks).',
  },
  {
    id: 'ms-m-1', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'medium',
    question: 'Compared with a competitive market, a monopolist produces:',
    options: [
      'Higher output at a lower price',
      'Lower output at a higher price, creating a deadweight welfare loss',
      'The same output but at a higher price',
      'Higher output at a higher price',
    ],
    correct: 1,
    explanation: 'Monopolists restrict output to raise price above the competitive level. This creates allocative inefficiency (P > MC) and a deadweight welfare loss — the classic argument against monopoly power.',
  },
  {
    id: 'ms-m-2', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'medium',
    question: 'For third-degree price discrimination to occur, a firm needs:',
    options: [
      'A perfectly elastic demand curve',
      'Market power, ability to separate markets, and ability to prevent resale',
      'Government approval and regulation',
      'Constant marginal costs across all markets',
    ],
    correct: 1,
    explanation: 'Price discrimination requires: (1) monopoly power to set different prices, (2) ability to identify and separate markets with different PEDs, (3) prevention of arbitrage (resale from cheap to expensive market).',
  },
  {
    id: 'ms-m-3', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'medium',
    question: 'The kinked demand curve model of oligopoly predicts price rigidity because:',
    options: [
      'Oligopolists always collude to fix prices',
      'Rivals match price cuts but not price rises, so MR is discontinuous and price changes are unprofitable',
      'Oligopolists face perfectly elastic demand at the current price',
      'Barriers to entry prevent price competition',
    ],
    correct: 1,
    explanation: 'If a firm raises price, rivals don\'t follow (it gains market share), so demand is elastic above current price. If it cuts price, rivals match (no gain), so demand is inelastic below. This creates a kink and a gap in MR — price is stable even when costs change moderately.',
  },
  {
    id: 'ms-h-1', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'hard',
    question: 'Contestable market theory suggests that even a monopolist will behave competitively if:',
    options: [
      'The government threatens nationalisation',
      'Barriers to entry and exit are low, so the threat of hit-and-run entry disciplines the incumbent',
      'The monopolist has a large market share and high profits',
      'The Competition and Markets Authority regulates prices',
    ],
    correct: 1,
    explanation: 'Baumol\'s contestability theory: if entry and exit are costless (no sunk costs), potential entrants can enter, undercut, take profit, and leave. The incumbent must therefore price competitively to deter entry — market structure matters less than contestability.',
  },
  {
    id: 'ms-h-2', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'hard',
    question: 'In a Prisoner\'s Dilemma game between two oligopolists, both firms choose to cheat on a collusive agreement. This is because:',
    options: [
      'Both firms always prefer competition to collusion',
      'Cheating is the dominant strategy — it yields a better outcome regardless of what the rival does',
      'The Nash equilibrium always involves the highest possible joint profit',
      'Both firms have symmetric cost structures',
    ],
    correct: 1,
    explanation: 'A dominant strategy dominates all others regardless of rival actions. In the classic Prisoner\'s Dilemma, cheating (competing) dominates cooperation for each firm individually, leading to a Nash equilibrium with lower joint profits than collusion — illustrating why cartels are unstable.',
  },
  {
    id: 'ms-h-3', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'hard',
    question: 'A monopolist invests £500m in R&D, developing a breakthrough drug. Which argument best justifies allowing the monopoly profit?',
    options: [
      'Monopoly is always more efficient than competition',
      'Supernormal profits fund the R&D that generates dynamic efficiency and long-run consumer benefit, even at the cost of short-run static inefficiency',
      'The government cannot regulate pharmaceutical prices effectively',
      'Patent protection is unnecessary as firms will invest in R&D regardless',
    ],
    correct: 1,
    explanation: 'This is the dynamic efficiency defence of monopoly: short-run welfare losses (higher prices, restricted output) may be acceptable if profits fund innovation that creates future consumer surplus. The tension between static and dynamic efficiency is central to competition policy.',
  },

  // ─── MACRO OBJECTIVES ────────────────────────────────────────

  {
    id: 'mo-e-1', topic: 'macro-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'easy',
    question: 'The Bank of England\'s official inflation target is:',
    options: ['0%', '1%', '2%', '3%'],
    correct: 2,
    explanation: 'The Bank of England targets CPI inflation of 2% per year, set by the government. If inflation deviates by more than 1 percentage point, the Governor must write a letter explaining why.',
  },
  {
    id: 'mo-e-2', topic: 'macro-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'easy',
    question: 'Economic growth is most commonly measured by changes in:',
    options: ['Retail Price Index (RPI)', 'Gross Domestic Product (GDP)', 'The current account balance', 'The unemployment rate'],
    correct: 1,
    explanation: 'GDP measures the total value of goods and services produced in an economy. Real GDP growth (adjusted for inflation) is the standard indicator of economic growth.',
  },
  {
    id: 'mo-e-3', topic: 'macro-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'easy',
    question: 'A current account deficit means:',
    options: [
      'Government spending exceeds tax revenue',
      'A country imports more goods, services, and income than it exports',
      'The money supply is growing too fast',
      'Investment is less than saving in the economy',
    ],
    correct: 1,
    explanation: 'A current account deficit means net outflows exceed net inflows from trade in goods, services, primary income and secondary income — the country is, in aggregate, spending more abroad than it earns.',
  },
  {
    id: 'mo-m-1', topic: 'macro-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'medium',
    question: 'There is an inherent conflict between low inflation and low unemployment. This trade-off is captured by:',
    options: ['The Laffer Curve', 'The Phillips Curve', 'The Lorenz Curve', 'The AD-AS model'],
    correct: 1,
    explanation: 'The short-run Phillips Curve shows an inverse relationship between inflation and unemployment. Policies that boost demand reduce unemployment but raise inflation, and vice versa.',
  },
  {
    id: 'mo-m-2', topic: 'macro-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'medium',
    question: 'Strong economic growth may conflict with environmental sustainability because:',
    options: [
      'GDP growth always requires higher taxes, which reduce innovation',
      'Higher output typically increases resource depletion and carbon emissions, threatening future productive capacity',
      'Growth reduces unemployment, which increases wage inflation',
      'High growth rates lead to current account deficits',
    ],
    correct: 1,
    explanation: 'Traditional GDP growth correlates with higher energy use, resource extraction, and pollution. This creates an intergenerational conflict: present growth may undermine future generations\' ability to meet their own needs.',
  },
  {
    id: 'mo-m-3', topic: 'macro-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'medium',
    question: 'The Gini coefficient is a measure of:',
    options: ['Price level changes', 'Income inequality', 'Trade balance', 'Labour productivity'],
    correct: 1,
    explanation: 'The Gini coefficient ranges from 0 (perfect equality) to 1 (perfect inequality). It measures how far the Lorenz curve (actual income distribution) deviates from the line of perfect equality.',
  },
  {
    id: 'mo-h-1', topic: 'macro-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'hard',
    question: 'The long-run Phillips Curve (LRPC) is vertical at the Natural Rate of Unemployment (NRU). This implies:',
    options: [
      'Governments can permanently reduce unemployment below the NRU through demand stimulus',
      'In the long run, there is no trade-off between inflation and unemployment — expansionary policy only raises inflation',
      'The NRU is zero in a well-functioning economy',
      'Inflation expectations are always wrong in the long run',
    ],
    correct: 1,
    explanation: 'Friedman and Phelps showed that workers adjust expectations to actual inflation over time. Demand-side stimulus only lowers unemployment temporarily; once expectations adapt, unemployment returns to the NRU and only inflation is higher.',
  },
  {
    id: 'mo-h-2', topic: 'macro-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'hard',
    question: 'HDI (Human Development Index) is considered a better measure of living standards than GDP per capita alone because:',
    options: [
      'HDI is always higher than GDP per capita',
      'HDI includes education and life expectancy, capturing dimensions of wellbeing that GDP misses',
      'GDP per capita overstates inequality by focusing on total output',
      'HDI adjusts for purchasing power while GDP does not',
    ],
    correct: 1,
    explanation: 'GDP per capita measures material output only. HDI adds life expectancy (health) and education (years of schooling, expected schooling), recognising that income alone doesn\'t capture human flourishing — two countries with equal GDP can have very different HDI rankings.',
  },
  {
    id: 'mo-h-3', topic: 'macro-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'hard',
    question: 'Sustainable economic growth requires growth that does not compromise the ability of future generations to meet their needs (Brundtland definition). Which policy best promotes this?',
    options: [
      'Maximising short-run GDP growth through fiscal stimulus',
      'Investing in renewable energy, green infrastructure, and human capital alongside GDP growth',
      'Reducing income inequality through wealth taxes alone',
      'Targeting zero GDP growth to prevent resource depletion',
    ],
    correct: 1,
    explanation: 'Sustainability requires decoupling growth from resource depletion — investing in renewables, education, and green infrastructure maintains growth while preserving the natural and human capital that future generations need.',
  },

  // ─── AD-AS ───────────────────────────────────────────────────

  {
    id: 'adas-e-1', topic: 'ad-as', topicLabel: 'AD-AS Model', difficulty: 'easy',
    question: 'Which of the following would increase Aggregate Demand (AD)?',
    options: [
      'A rise in interest rates',
      'A cut in government spending',
      'A fall in consumer confidence',
      'A cut in income tax',
    ],
    correct: 3,
    explanation: 'A cut in income tax increases households\' disposable income, boosting consumption (C) — a component of AD = C + I + G + (X-M).',
  },
  {
    id: 'adas-e-2', topic: 'ad-as', topicLabel: 'AD-AS Model', difficulty: 'easy',
    question: 'In the classical model, the Long-Run Aggregate Supply (LRAS) curve is:',
    options: ['Upward sloping', 'Downward sloping', 'Vertical at the full employment level of output', 'Horizontal'],
    correct: 2,
    explanation: 'Classical economists argue wages and prices are flexible in the long run. Output is determined by supply-side factors (capital, labour, technology), not the price level — hence a vertical LRAS.',
  },
  {
    id: 'adas-e-3', topic: 'ad-as', topicLabel: 'AD-AS Model', difficulty: 'easy',
    question: 'Cost-push inflation is caused by:',
    options: [
      'An increase in Aggregate Demand',
      'A leftward shift in Short-Run Aggregate Supply (SRAS)',
      'A rightward shift in Long-Run Aggregate Supply',
      'A fall in the money supply',
    ],
    correct: 1,
    explanation: 'Cost-push inflation occurs when rising input costs (wages, energy, raw materials) shift SRAS leftward — the same output now costs more to produce, raising the price level.',
  },
  {
    id: 'adas-m-1', topic: 'ad-as', topicLabel: 'AD-AS Model', difficulty: 'medium',
    question: 'A positive output gap means:',
    options: [
      'Actual output is below potential — there is spare capacity',
      'Actual output exceeds potential — the economy is overheating',
      'Unemployment is above the natural rate',
      'The government has a budget surplus',
    ],
    correct: 1,
    explanation: 'A positive (inflationary) output gap: actual GDP > potential GDP. Labour and capital are pushed beyond normal capacity, generating demand-pull inflation and upward pressure on wages.',
  },
  {
    id: 'adas-m-2', topic: 'ad-as', topicLabel: 'AD-AS Model', difficulty: 'medium',
    question: 'Which event would cause stagflation?',
    options: [
      'A large rise in government spending',
      'A sharp fall in oil prices',
      'A major supply-side shock, such as a sudden tripling of oil prices',
      'A rise in consumer confidence boosting investment',
    ],
    correct: 2,
    explanation: 'Stagflation (simultaneously high inflation and high unemployment) results from adverse supply shocks. The 1973 OPEC oil crisis is the classic case — SRAS shifted left, raising prices and reducing output.',
  },
  {
    id: 'adas-m-3', topic: 'ad-as', topicLabel: 'AD-AS Model', difficulty: 'medium',
    question: 'Supply-side policies shift the LRAS curve rightward by:',
    options: [
      'Increasing government spending on infrastructure and benefits',
      'Cutting interest rates to stimulate investment',
      'Improving the quantity and quality of factors of production, raising productive potential',
      'Increasing the money supply',
    ],
    correct: 2,
    explanation: 'Supply-side reforms — education, deregulation, R&D incentives, infrastructure — expand the economy\'s capacity to produce, shifting LRAS rightward and enabling non-inflationary growth.',
  },
  {
    id: 'adas-h-1', topic: 'ad-as', topicLabel: 'AD-AS Model', difficulty: 'hard',
    question: 'The Keynesian LRAS curve has a horizontal section at low output levels. This reflects the belief that:',
    options: [
      'In the long run, the economy always returns to full employment automatically',
      'When there is significant spare capacity and unemployment, expansionary policy raises output without raising prices',
      'Wages and prices are perfectly flexible even in recessions',
      'The money supply is the sole determinant of the price level',
    ],
    correct: 1,
    explanation: 'Keynes argued wages are "sticky downward" — workers resist wage cuts. In a deep recession with high unemployment, AD stimulus can raise output toward full employment without generating inflation, because there is ample spare capacity.',
  },
  {
    id: 'adas-h-2', topic: 'ad-as', topicLabel: 'AD-AS Model', difficulty: 'hard',
    question: 'An economy is in a positive output gap. The government increases income tax and cuts spending simultaneously. Evaluate the most likely combined effect:',
    options: [
      'Stagflation — the output gap widens while inflation rises',
      'Reduced AD, closing the output gap and lowering inflationary pressure, but risking a sharp slowdown',
      'LRAS shifts leftward as potential output falls',
      'No effect if monetary policy is kept constant',
    ],
    correct: 1,
    explanation: 'Contractionary fiscal policy (tax rise + spending cut) reduces disposable income and government demand — shifting AD left. This addresses the inflationary output gap but risks overshooting: too sharp a contraction can tip the economy into recession. The timing and size of the measures are critical.',
  },
  {
    id: 'adas-h-3', topic: 'ad-as', topicLabel: 'AD-AS Model', difficulty: 'hard',
    question: 'Why might a leftward shift in SRAS (cost-push inflation) be self-correcting in the classical model without government intervention?',
    options: [
      'Higher prices automatically trigger interest rate cuts',
      'Higher unemployment from reduced output puts downward pressure on wages, eventually shifting SRAS back rightward',
      'Firms invest more when profits fall, restoring supply',
      'The government always responds with supply-side policy in the classical model',
    ],
    correct: 1,
    explanation: 'Classical self-correction: cost-push shock → higher prices, lower output, higher unemployment → wage competition among workers reduces wages → firms\' costs fall → SRAS shifts right again. This mechanism requires flexible wages and may take years — Keynes\'s famous objection was "in the long run we are all dead."',
  },

  // ─── UNEMPLOYMENT ────────────────────────────────────────────

  {
    id: 'un-e-1', topic: 'unemployment', topicLabel: 'Unemployment', difficulty: 'easy',
    question: 'Structural unemployment occurs when:',
    options: [
      'Workers are temporarily between jobs',
      'The economy is in recession and firms reduce hiring',
      'Jobs are lost due to permanent changes in industry structure, and workers lack the skills for new jobs',
      'Seasonal demand for labour falls',
    ],
    correct: 2,
    explanation: 'Structural unemployment results from fundamental shifts in the economy — deindustrialisation, automation, globalisation — leaving workers with skills that no longer match available vacancies.',
  },
  {
    id: 'un-e-2', topic: 'unemployment', topicLabel: 'Unemployment', difficulty: 'easy',
    question: 'Cyclical (demand-deficient) unemployment is best addressed by:',
    options: [
      'Retraining schemes',
      'Reducing job-seekers\' allowance',
      'Expansionary fiscal or monetary policy to raise Aggregate Demand',
      'Supply-side reforms to improve labour market flexibility',
    ],
    correct: 2,
    explanation: 'Cyclical unemployment is caused by insufficient demand in the economy. The cure is demand-side policy — fiscal stimulus or lower interest rates — to raise AD and restore employment.',
  },
  {
    id: 'un-e-3', topic: 'unemployment', topicLabel: 'Unemployment', difficulty: 'easy',
    question: 'Frictional unemployment refers to:',
    options: [
      'Unemployment caused by recession',
      'Short-term unemployment as workers search for new jobs',
      'Unemployment due to lack of skills matching job vacancies',
      'Workers who have given up looking for work',
    ],
    correct: 1,
    explanation: 'Frictional unemployment is always present even in a healthy economy — it reflects the time taken for workers to find and match with new jobs. It is generally considered short-term and voluntary.',
  },
  {
    id: 'un-m-1', topic: 'unemployment', topicLabel: 'Unemployment', difficulty: 'medium',
    question: 'Hysteresis in unemployment means:',
    options: [
      'Unemployment always returns to its natural rate quickly after a recession',
      'A temporary rise in unemployment can permanently raise the natural rate as skills erode and workers become unemployable',
      'Cyclical unemployment automatically converts into structural unemployment after 6 months',
      'Workers become more productive during periods of high unemployment',
    ],
    correct: 1,
    explanation: 'Hysteresis: prolonged unemployment causes skill atrophy, loss of work habits, and employer stigma — making workers harder to re-employ. This ratchets up the structural/natural rate, leaving "scars" long after the recession ends.',
  },
  {
    id: 'un-m-2', topic: 'unemployment', topicLabel: 'Unemployment', difficulty: 'medium',
    question: 'Which of the following is a non-economic cost of unemployment?',
    options: [
      'Lost tax revenue to the government',
      'Increased government expenditure on benefits',
      'Higher rates of depression, family breakdown, and crime in areas of high unemployment',
      'Lower GDP and productive potential',
    ],
    correct: 2,
    explanation: 'Beyond economic costs (lost output, fiscal costs), unemployment causes severe social costs — deteriorating mental health, reduced life expectancy, increased domestic violence, crime, and community breakdown.',
  },
  {
    id: 'un-m-3', topic: 'unemployment', topicLabel: 'Unemployment', difficulty: 'medium',
    question: 'Real wage unemployment occurs when:',
    options: [
      'Workers\' real wages are eroded by inflation',
      'Wages are kept above the market-clearing level (e.g. by a minimum wage), causing excess labour supply',
      'Workers refuse to accept jobs below their reservation wage',
      'Nominal wages fall during a recession',
    ],
    correct: 1,
    explanation: 'Real wage (classical) unemployment arises when wages are stuck above equilibrium — often due to minimum wages, union power, or efficiency wages — so labour supply exceeds demand at the prevailing wage.',
  },
  {
    id: 'un-h-1', topic: 'unemployment', topicLabel: 'Unemployment', difficulty: 'hard',
    question: 'The NAIRU (Non-Accelerating Inflation Rate of Unemployment) represents:',
    options: [
      'The minimum possible unemployment rate in any economy',
      'The unemployment rate at which inflation is stable — below it, inflation accelerates; above it, inflation decelerates',
      'The unemployment rate caused solely by cyclical factors',
      'The natural rate of unemployment in a perfectly competitive labour market',
    ],
    correct: 1,
    explanation: 'The NAIRU is the equilibrium unemployment rate consistent with stable inflation. Pushing unemployment below the NAIRU through demand stimulus tightens labour markets, generates wage pressure and accelerating inflation. It is determined by structural, frictional, and institutional factors.',
  },
  {
    id: 'un-h-2', topic: 'unemployment', topicLabel: 'Unemployment', difficulty: 'hard',
    question: 'Why might raising job seekers\' allowance (JSA) increase rather than decrease unemployment, according to search theory?',
    options: [
      'Higher JSA reduces the incentive for firms to create vacancies',
      'Higher JSA allows workers to be more selective about job offers, extending job search duration',
      'Higher JSA causes inflation, which reduces real wages and employment',
      'Higher JSA increases consumer spending, which reduces cyclical unemployment',
    ],
    correct: 1,
    explanation: 'Search theory: generous benefits raise workers\' reservation wages and allow longer searches for better matches. This can increase frictional unemployment duration even while improving job-match quality — a genuine policy trade-off between unemployment duration and match efficiency.',
  },
  {
    id: 'un-h-3', topic: 'unemployment', topicLabel: 'Unemployment', difficulty: 'hard',
    question: 'Automation and AI are predicted to cause technological unemployment. Which economic argument suggests this need not result in long-run mass unemployment?',
    options: [
      'The government will employ all displaced workers in the public sector',
      'Lump of Labour Fallacy: technology historically creates new industries and jobs even while destroying old ones, and income effects generate new demand',
      'Automation is always slower than predicted and won\'t significantly affect employment',
      'Unions will successfully resist automation in all key industries',
    ],
    correct: 1,
    explanation: 'The Lump of Labour Fallacy assumes a fixed total of jobs. Historically, technological change destroys jobs in some sectors while creating entirely new industries and occupations — net employment effects depend on whether new demand and industries emerge. The Luddite movement and the Industrial Revolution is the key historical case.',
  },

  // ─── INFLATION ───────────────────────────────────────────────

  {
    id: 'inf-e-1', topic: 'inflation', topicLabel: 'Inflation', difficulty: 'easy',
    question: 'The Consumer Price Index (CPI) measures inflation by:',
    options: [
      'Tracking the price of a barrel of crude oil',
      'Measuring the change in average earnings',
      'Tracking price changes of a representative basket of goods and services bought by households',
      'Measuring changes in house prices',
    ],
    correct: 2,
    explanation: 'CPI tracks price changes of a weighted "basket" of ~700 goods and services reflecting typical household spending patterns. It is the official UK inflation measure and the Bank of England\'s target measure.',
  },
  {
    id: 'inf-e-2', topic: 'inflation', topicLabel: 'Inflation', difficulty: 'easy',
    question: 'Deflation (a sustained fall in the price level) is considered problematic because:',
    options: [
      'It increases the real value of savings',
      'It can cause a deflationary spiral — consumers delay purchases, demand falls, output falls, prices fall further',
      'It always leads to hyperinflation',
      'It reduces export competitiveness',
    ],
    correct: 1,
    explanation: 'Deflation creates a vicious cycle: if prices are falling, consumers wait for lower prices → demand falls → firms cut output and prices more → further falls. Japan\'s "Lost Decade" is the key case study.',
  },
  {
    id: 'inf-e-3', topic: 'inflation', topicLabel: 'Inflation', difficulty: 'easy',
    question: 'Demand-pull inflation is caused by:',
    options: [
      'Rising import prices',
      'Wage-push pressure from trade unions',
      'Aggregate Demand growing faster than productive capacity',
      'A fall in labour productivity',
    ],
    correct: 2,
    explanation: 'Demand-pull: "too much money chasing too few goods." When AD grows faster than LRAS, the price level is pulled upward. Often occurs near full employment when spare capacity is exhausted.',
  },
  {
    id: 'inf-m-1', topic: 'inflation', topicLabel: 'Inflation', difficulty: 'medium',
    question: 'The Fisher equation MV = PT implies that inflation is caused by:',
    options: [
      'Rising labour costs',
      'Excessive growth in the money supply (M) relative to real output (T)',
      'Government deficits crowding out private investment',
      'Supply shocks in commodity markets',
    ],
    correct: 1,
    explanation: 'The Quantity Theory: money supply (M) × velocity (V) = price level (P) × transactions (T). If V and T are stable, a rise in M leads directly to a rise in P — Monetarist conclusion: inflation is always a monetary phenomenon.',
  },
  {
    id: 'inf-m-2', topic: 'inflation', topicLabel: 'Inflation', difficulty: 'medium',
    question: 'Inflation redistributes wealth from:',
    options: [
      'Debtors to creditors',
      'Creditors and savers to debtors and borrowers',
      'Workers to pensioners',
      'Exporters to importers',
    ],
    correct: 1,
    explanation: 'Inflation erodes the real value of money. Debtors repay loans in devalued pounds — a windfall for borrowers. Creditors and savers lose purchasing power on fixed-value assets. This is why unexpected inflation benefits the government (reduces real debt burden) at savers\' expense.',
  },
  {
    id: 'inf-m-3', topic: 'inflation', topicLabel: 'Inflation', difficulty: 'medium',
    question: 'A wage-price spiral occurs when:',
    options: [
      'High inflation causes the government to cut interest rates',
      'Workers secure wage rises to match inflation, which raises firms\' costs, causing further price rises, leading to further wage demands',
      'Rising oil prices cause a one-off jump in the price level',
      'The Bank of England fails to raise interest rates quickly enough',
    ],
    correct: 1,
    explanation: 'Wage-price spirals are a form of embedded inflation. Once workers and firms expect inflation, it becomes self-fulfilling: wage demands → higher costs → higher prices → higher wage demands. Breaking expectations is why central banks prioritise credible inflation targeting.',
  },
  {
    id: 'inf-h-1', topic: 'inflation', topicLabel: 'Inflation', difficulty: 'hard',
    question: 'Menu costs and shoe leather costs are types of:',
    options: [
      'Costs of inflation to producers and consumers respectively',
      'Administrative costs of disinflation policy',
      'Real resource costs incurred when inflation is high — reducing efficiency',
      'Measures of inflation in the retail sector',
    ],
    correct: 2,
    explanation: 'Menu costs: firms must frequently update prices (menus, price tags, contracts) — real resource use. Shoe leather costs: individuals hold less cash and make more frequent bank trips to avoid inflation\'s tax on money — real efficiency loss. Both reduce economic welfare independently of distributional effects.',
  },
  {
    id: 'inf-h-2', topic: 'inflation', topicLabel: 'Inflation', difficulty: 'hard',
    question: 'Inflation targeting by an independent central bank is preferred over discretionary monetary policy because:',
    options: [
      'An independent bank always achieves lower inflation than a government-controlled one',
      'It builds credibility and anchors expectations — if agents believe the 2% target will be hit, wage bargaining and pricing decisions are moderated, making the target self-fulfilling',
      'Independent banks have better economic forecasting models than governments',
      'Governments always overspend during elections, which must be offset by the central bank',
    ],
    correct: 1,
    explanation: 'Credibility is key. If businesses and workers believe inflation will stay at 2%, they set wages and prices accordingly — making it easier to achieve the target with less output sacrifice. This time-consistency argument (Kydland & Prescott) is the main justification for central bank independence.',
  },
  {
    id: 'inf-h-3', topic: 'inflation', topicLabel: 'Inflation', difficulty: 'hard',
    question: 'UK CPI inflation hit 11.1% in October 2022. Which combination of factors best explains this surge?',
    options: [
      'Excessive money supply growth and wage-price spiral from 2019',
      'Post-COVID demand surge, global supply chain disruptions, the Russian invasion of Ukraine driving energy and food prices, and tight UK labour markets creating wage pressure',
      'UK-specific government policy failures and Brexit import tariffs alone',
      'Monetary policy being too loose in 2019-2020, with no external factors involved',
    ],
    correct: 1,
    explanation: 'The 2022 inflation spike was multi-causal: released pandemic savings drove demand; supply chains remained disrupted; Ukraine war caused energy and food commodity spikes; UK labour shortages (partly Brexit-linked) pushed wages. The Bank of England\'s models underestimated persistence — a real-world lesson in inflation complexity.',
  },

  // ─── FISCAL & MONETARY POLICY ────────────────────────────────

  {
    id: 'fm-e-1', topic: 'fiscal-monetary', topicLabel: 'Fiscal & Monetary Policy', difficulty: 'easy',
    question: 'Quantitative Easing (QE) involves:',
    options: [
      'The government raising taxes to reduce the deficit',
      'The central bank creating money to buy financial assets, injecting liquidity into the economy',
      'Cutting interest rates below zero',
      'The government issuing more bonds to fund spending',
    ],
    correct: 1,
    explanation: 'QE: the Bank of England creates new electronic money to purchase gilts and other assets from financial institutions. This lowers long-term interest rates and boosts money supply — used when the base rate cannot be cut further.',
  },
  {
    id: 'fm-e-2', topic: 'fiscal-monetary', topicLabel: 'Fiscal & Monetary Policy', difficulty: 'easy',
    question: 'Expansionary fiscal policy involves:',
    options: [
      'Raising taxes and cutting government spending',
      'Increasing government spending and/or cutting taxes to boost AD',
      'Raising interest rates to control inflation',
      'Selling government bonds to reduce the money supply',
    ],
    correct: 1,
    explanation: 'Expansionary (reflationary) fiscal policy boosts AD through higher G or lower T, increasing the budget deficit. Used in recessions to counteract demand deficiency.',
  },
  {
    id: 'fm-e-3', topic: 'fiscal-monetary', topicLabel: 'Fiscal & Monetary Policy', difficulty: 'easy',
    question: 'Which of the following is an automatic stabiliser?',
    options: [
      'A government decision to build new hospitals during a recession',
      'An interest rate cut by the Bank of England',
      'Unemployment benefits that automatically increase government spending during a recession',
      'A targeted tax cut for low-income households',
    ],
    correct: 2,
    explanation: 'Automatic stabilisers activate without active policy decisions. In recessions, unemployment benefits rise automatically (higher G) and income tax revenues fall automatically (lower T), partially offsetting the demand shock.',
  },
  {
    id: 'fm-m-1', topic: 'fiscal-monetary', topicLabel: 'Fiscal & Monetary Policy', difficulty: 'medium',
    question: 'Crowding out occurs when:',
    options: [
      'Private investment is stimulated by government spending',
      'Government borrowing drives up interest rates, reducing private sector investment',
      'The central bank buys government bonds, reducing yields',
      'High inflation erodes the real value of government debt',
    ],
    correct: 1,
    explanation: 'Crowding out: government borrowing increases demand for loanable funds, pushing up interest rates. Higher rates make private investment more expensive — government spending partially or fully displaces private investment.',
  },
  {
    id: 'fm-m-2', topic: 'fiscal-monetary', topicLabel: 'Fiscal & Monetary Policy', difficulty: 'medium',
    question: 'The transmission mechanism of monetary policy refers to:',
    options: [
      'The direct link between government spending and employment',
      'The process by which changes in the base rate eventually affect output and inflation through multiple channels',
      'The mechanism by which QE transfers wealth from savers to borrowers',
      'The IMF\'s process for adjusting exchange rates',
    ],
    correct: 1,
    explanation: 'Base rate changes transmit through: asset prices → wealth effects; bank lending rates → investment/consumption; exchange rate → import prices/exports; and expectations → confidence. Each channel has different time lags.',
  },
  {
    id: 'fm-m-3', topic: 'fiscal-monetary', topicLabel: 'Fiscal & Monetary Policy', difficulty: 'medium',
    question: 'The fiscal multiplier is greater than 1 when:',
    options: [
      'The economy is at full employment',
      'The marginal propensity to consume is high and the marginal propensity to import is low',
      'Interest rates are above the natural rate',
      'The government runs a balanced budget',
    ],
    correct: 1,
    explanation: 'Multiplier = 1/(1-MPC+MPM+MPT). A high MPC means each round of spending generates more additional consumption. Low import leakage keeps spending within the domestic economy. In a deep recession with spare capacity, multipliers can exceed 1 significantly.',
  },
  {
    id: 'fm-h-1', topic: 'fiscal-monetary', topicLabel: 'Fiscal & Monetary Policy', difficulty: 'hard',
    question: 'A liquidity trap occurs when:',
    options: [
      'Banks refuse to lend despite low interest rates due to high default risk',
      'Interest rates are at or near zero but further cuts fail to stimulate spending, as individuals prefer to hold cash (expecting deflation or extremely low rates)',
      'The government cannot borrow because bond markets lose confidence in solvency',
      'QE causes hyperinflation by expanding the money supply excessively',
    ],
    correct: 1,
    explanation: 'Keynes\'s liquidity trap: at very low interest rates, the opportunity cost of holding money is near zero, so people prefer liquid cash over bonds. Further rate cuts have no effect. Monetary policy becomes ineffective — fiscal policy is needed. Japan\'s 1990s experience is the key case.',
  },
  {
    id: 'fm-h-2', topic: 'fiscal-monetary', topicLabel: 'Fiscal & Monetary Policy', difficulty: 'hard',
    question: 'The distinction between government deficit and national debt is:',
    options: [
      'The deficit is the stock of borrowing; the debt is the annual flow',
      'The deficit is the annual borrowing shortfall (flow); the national debt is the accumulated stock of all past deficits',
      'They are equivalent measures of government fiscal position',
      'The deficit measures current spending; the debt measures capital investment',
    ],
    correct: 1,
    explanation: 'Critical distinction: the deficit is a flow (this year\'s shortfall of tax revenue vs. spending). The debt is a stock (total accumulated borrowings). Running surpluses reduces the deficit but may still leave a large debt. UK national debt exceeded £2.5 trillion in 2024 — the result of decades of accumulated deficits.',
  },
  {
    id: 'fm-h-3', topic: 'fiscal-monetary', topicLabel: 'Fiscal & Monetary Policy', difficulty: 'hard',
    question: 'Monetary policy faces an inherent time lag problem. Which type of lag is typically the longest?',
    options: [
      'Recognition lag — identifying that the economy needs intervention',
      'Decision lag — the Monetary Policy Committee meeting schedule',
      'Implementation lag — actually changing the base rate',
      'Effect lag — the time for rate changes to fully work through the economy (18-24 months)',
    ],
    correct: 3,
    explanation: 'Monetary policy\'s main weakness: effect lags of 18-24 months mean policy must be based on forecasts, not current data. Rate rises today address tomorrow\'s inflation. This creates risks of over- or under-correction — central banks must act on forecasts in an uncertain environment.',
  },

  // ─── INTERNATIONAL TRADE ─────────────────────────────────────

  {
    id: 'it-e-1', topic: 'international-trade', topicLabel: 'International Trade', difficulty: 'easy',
    question: 'Comparative advantage means a country should specialise in goods where it has:',
    options: [
      'The highest absolute productivity',
      'The lowest opportunity cost of production',
      'The largest labour force',
      'The most natural resources',
    ],
    correct: 1,
    explanation: 'Comparative advantage (Ricardo): specialise where opportunity cost is lowest — even if another country is absolutely better at everything, trade can still be mutually beneficial if each country focuses on its comparative advantage.',
  },
  {
    id: 'it-e-2', topic: 'international-trade', topicLabel: 'International Trade', difficulty: 'easy',
    question: 'A currency appreciation makes:',
    options: [
      'Exports cheaper and imports more expensive',
      'Exports more expensive and imports cheaper',
      'Both exports and imports more expensive',
      'No difference to trade flows',
    ],
    correct: 1,
    explanation: 'Appreciation: £ buys more foreign currency. UK goods cost more in foreign currency (exports fall); foreign goods cost less in £ (imports rise). Net effect tends to worsen the current account.',
  },
  {
    id: 'it-e-3', topic: 'international-trade', topicLabel: 'International Trade', difficulty: 'easy',
    question: 'An import tariff is a:',
    options: [
      'Limit on the quantity of imports allowed',
      'Tax on imported goods that raises their domestic price',
      'Subsidy paid to domestic producers to make them competitive',
      'Ban on trade with a specific country',
    ],
    correct: 1,
    explanation: 'A tariff is a tax on imports. It raises the price of imported goods, protecting domestic producers but reducing consumer surplus and potentially triggering retaliation.',
  },
  {
    id: 'it-m-1', topic: 'international-trade', topicLabel: 'International Trade', difficulty: 'medium',
    question: 'The Marshall-Lerner condition states that a depreciation improves the current account if:',
    options: [
      'The sum of the price elasticities of demand for exports and imports is less than 1',
      'The sum of the price elasticities of demand for exports and imports exceeds 1',
      'Import demand is perfectly inelastic',
      'The country has a trade surplus before the depreciation',
    ],
    correct: 1,
    explanation: 'PED(X) + PED(M) > 1: if trade demand is sufficiently elastic, the volume effect (more exports sold, fewer imports bought) outweighs the price effect — improving the trade balance. With inelastic demand, depreciation worsens the deficit.',
  },
  {
    id: 'it-m-2', topic: 'international-trade', topicLabel: 'International Trade', difficulty: 'medium',
    question: 'UK interest rates rise relative to the US. The most likely short-run effect on sterling is:',
    options: [
      'Depreciation — higher rates signal economic weakness',
      'No change — only trade flows affect exchange rates',
      'Appreciation — higher rates attract hot money capital inflows seeking higher returns',
      'Depreciation — higher rates reduce investment and output',
    ],
    correct: 2,
    explanation: 'Hot money: international capital flows to where returns are highest. Higher UK rates attract foreign investors who must buy £ to invest in UK assets — increased demand for £ causes appreciation.',
  },
  {
    id: 'it-m-3', topic: 'international-trade', topicLabel: 'International Trade', difficulty: 'medium',
    question: 'Which of the following is the strongest economic argument for protectionism?',
    options: [
      'To protect all domestic industries from foreign competition permanently',
      'The infant industry argument — temporary protection allows new industries to develop economies of scale and become internationally competitive',
      'To raise government revenue through tariffs',
      'To prevent other countries from achieving comparative advantage',
    ],
    correct: 1,
    explanation: 'The infant industry argument: new industries may be inefficient initially but become competitive with economies of scale and learning-by-doing. Temporary protection gives them time to develop — though it risks becoming permanent and breeding inefficiency.',
  },
  {
    id: 'it-h-1', topic: 'international-trade', topicLabel: 'International Trade', difficulty: 'hard',
    question: 'The J-curve effect suggests that after a currency depreciation:',
    options: [
      'The current account immediately improves, then stabilises',
      'The current account initially worsens (existing contracts at old prices dominate) before improving as volumes adjust to new prices',
      'The current account worsens permanently if the Marshall-Lerner condition holds',
      'Export prices rise immediately, improving the terms of trade',
    ],
    correct: 1,
    explanation: 'J-curve: in the short run, trade contracts are fixed — depreciation raises import prices immediately but volumes don\'t adjust quickly. The deficit widens. Over time (6-18 months), as demand responds elastically, export volumes rise and import volumes fall — the balance improves. The path traces a J shape.',
  },
  {
    id: 'it-h-2', topic: 'international-trade', topicLabel: 'International Trade', difficulty: 'hard',
    question: 'Purchasing Power Parity (PPP) theory predicts that, in the long run, exchange rates adjust so that:',
    options: [
      'All countries\' interest rates equalise',
      'A basket of goods costs the same in all countries when expressed in a common currency',
      'Trade balances equalise across all trading partners',
      'Capital flows offset current account imbalances',
    ],
    correct: 1,
    explanation: 'PPP: if a Big Mac costs £3 in the UK and $4 in the US, the exchange rate should be £1 = $1.33. If not, arbitrage in traded goods should restore parity. In practice, non-traded goods, transport costs, and capital flows mean PPP holds poorly in the short run but better over decades.',
  },
  {
    id: 'it-h-3', topic: 'international-trade', topicLabel: 'International Trade', difficulty: 'hard',
    question: 'A country running a persistent current account deficit must finance it by:',
    options: [
      'Printing money domestically',
      'Net capital inflows on the financial account (selling assets or borrowing from abroad)',
      'Raising interest rates indefinitely',
      'Imposing import quotas to eliminate the deficit immediately',
    ],
    correct: 1,
    explanation: 'Balance of payments identity: CA + FA = 0 (approximately). A current account deficit must be offset by a financial account surplus — net inflows of foreign investment, borrowing, or asset sales. Persistent deficits make a country increasingly reliant on foreign financing, creating vulnerability to capital flight.',
  },

  // ─── ADDITIONAL HARD QUESTIONS ───────────────────────────────

  // Economic Problem
  {
    id: 'ep-h-4', topic: 'economic-problem', topicLabel: 'The Economic Problem', difficulty: 'hard',
    question: 'A government economist argues that moving production from inside the PPF to a point on it is always desirable. An A* student would challenge this by pointing out:',
    options: [
      'Points on the PPF always involve higher opportunity costs than points inside it',
      'Moving to the PPF could worsen allocative efficiency if it increases output of goods society values less — productive efficiency does not guarantee allocative efficiency',
      'The PPF cannot shift outward if the economy is already producing on it',
      'Unemployment always falls when the economy moves to the PPF',
    ],
    correct: 1,
    explanation: 'Productive efficiency (being on the PPF) and allocative efficiency (right mix of goods) are distinct. An economy could be on the PPF producing millions of tanks and almost no food — productively efficient but badly misallocated. Both conditions are needed for full efficiency.',
  },
  {
    id: 'ep-h-5', topic: 'economic-problem', topicLabel: 'The Economic Problem', difficulty: 'hard',
    question: 'The concept of "rational economic man" (homo economicus) underpins much of neoclassical economics. Behavioural economists argue this model fails because:',
    options: [
      'People always act in groups, never individually',
      'Individuals systematically deviate from rational self-interest due to cognitive biases such as loss aversion, present bias, and anchoring',
      'Markets always produce efficient outcomes even without rational agents',
      'Opportunity cost cannot be calculated without perfect information',
    ],
    correct: 1,
    explanation: 'Behavioural economics (Kahneman, Thaler) shows humans exhibit predictable irrationality: we weight losses more than equivalent gains (loss aversion), prefer immediate rewards over larger future ones (present bias), and are anchored by irrelevant reference points. These biases cause systematic market failures that neoclassical models miss.',
  },

  // Supply & Demand
  {
    id: 'sd-h-4', topic: 'supply-demand', topicLabel: 'Supply & Demand', difficulty: 'hard',
    question: 'A Giffen good is one for which demand rises as price rises. Which condition is necessary for a good to be Giffen?',
    options: [
      'It must have a very high price elasticity of demand',
      'It must be an inferior good that constitutes a large share of consumer expenditure, so the income effect outweighs the substitution effect',
      'It must have many close substitutes at lower prices',
      'Its supply curve must be downward sloping',
    ],
    correct: 1,
    explanation: 'For a Giffen good: when price rises, real income falls significantly (large budget share). Because it is inferior, lower real income increases demand for it. This income effect must exceed the substitution effect (switching away due to higher price). Classic example: staple foods for very poor households (potatoes during the Irish famine).',
  },
  {
    id: 'sd-h-5', topic: 'supply-demand', topicLabel: 'Supply & Demand', difficulty: 'hard',
    question: 'Speculation in commodity markets can cause prices to deviate persistently from fundamental supply and demand. This is because:',
    options: [
      'Speculators always have better information than producers and consumers',
      'Speculation can create self-fulfilling price bubbles: expectations of rising prices attract buying, which raises prices, confirming expectations — until sentiment reverses',
      'Commodity markets are perfectly competitive, so speculation has no price effect',
      'Futures markets eliminate all price volatility by locking in forward prices',
    ],
    correct: 1,
    explanation: 'Reflexivity (Soros): in financial and commodity markets, beliefs about prices can change prices, which changes beliefs. This feedback loop creates bubbles that deviate from fundamentals. The 2008 oil spike to $147/barrel involved significant speculative positioning beyond supply/demand fundamentals — a key market failure in asset markets.',
  },

  // Elasticity
  {
    id: 'el-h-4', topic: 'elasticity', topicLabel: 'Elasticity', difficulty: 'hard',
    question: 'A monopolist practising perfect (first-degree) price discrimination charges each consumer their maximum willingness to pay. Compared to a uniform-price monopolist, this results in:',
    options: [
      'Lower total output and lower total revenue',
      'The same output as perfect competition but zero consumer surplus — all surplus is captured by the producer',
      'Higher consumer surplus and lower producer surplus than uniform monopoly pricing',
      'A larger deadweight welfare loss than uniform pricing',
    ],
    correct: 1,
    explanation: 'First-degree price discrimination: every consumer pays exactly their reservation price. Output expands to the competitive level (no deadweight loss — allocatively efficient!) but consumer surplus is entirely extracted as producer surplus. Paradoxically it\'s more efficient than uniform monopoly pricing but maximally exploitative of consumers.',
  },
  {
    id: 'el-h-5', topic: 'elasticity', topicLabel: 'Elasticity', difficulty: 'hard',
    question: 'The long-run PED for petrol is significantly more elastic than the short-run PED. The best explanation is:',
    options: [
      'Petrol prices are controlled by government in the long run',
      'In the long run consumers can substitute to electric vehicles, move closer to work, or switch to public transport — options unavailable immediately after a price rise',
      'Long-run income growth makes petrol a smaller share of spending, reducing sensitivity',
      'Oil companies reduce supply in the long run to raise prices further',
    ],
    correct: 1,
    explanation: 'Time is a key determinant of PED. Immediately after a petrol price rise, consumers have few alternatives and demand barely changes (inelastic). Over years, they can buy fuel-efficient cars, switch to EVs, change commuting patterns, or relocate — demand becomes much more responsive. This general principle applies to most goods.',
  },

  // Market Failure
  {
    id: 'mf-h-4', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'hard',
    question: 'The social cost of carbon (SCC) is the present value of all future damages from one additional tonne of CO₂ emitted today. Setting a carbon tax equal to the SCC is theoretically correct but practically problematic because:',
    options: [
      'A carbon tax always raises less revenue than a cap-and-trade scheme',
      'The SCC requires discounting future damages to present value — a higher discount rate dramatically reduces the SCC and thus the recommended tax, but choosing the discount rate involves ethically contested judgements about how much we value future generations',
      'Carbon taxes cannot be applied to international shipping and aviation',
      'The SCC is always zero because future technology will solve climate change',
    ],
    correct: 1,
    explanation: 'The Stern vs Nordhaus debate: Stern used a near-zero discount rate (valuing future generations almost equally to present ones) → high SCC (~$85/tonne) and urgent action. Nordhaus used a market-based discount rate → lower SCC (~$30/tonne) and gradual action. The choice of discount rate is not a technical but an ethical decision about intergenerational equity — making the "correct" Pigouvian tax deeply contested.',
  },
  {
    id: 'mf-h-5', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'hard',
    question: 'In healthcare markets, both adverse selection and moral hazard arise from information asymmetry. Which correctly distinguishes them?',
    options: [
      'Adverse selection occurs after insurance is purchased; moral hazard occurs before',
      'Adverse selection is pre-contractual — high-risk individuals are more likely to buy insurance, raising premiums and potentially causing market unravelling; moral hazard is post-contractual — insured individuals take more risks because they bear less of the cost',
      'Both describe the same phenomenon of hidden information in insurance markets',
      'Moral hazard applies only to health insurance; adverse selection applies only to car insurance',
    ],
    correct: 1,
    explanation: 'Adverse selection (hidden type): sick people buy insurance more than healthy ones → insurer\'s pool is riskier than average → higher premiums → healthier people drop out → premiums rise further → "death spiral." Moral hazard (hidden action): once insured, patients over-use healthcare (extra GP visits, riskier behaviour) because marginal cost to them is zero. Both stem from information asymmetry but at different stages of the contract.',
  },

  // Government Intervention
  {
    id: 'gi-h-4', topic: 'government-intervention', topicLabel: 'Government Intervention', difficulty: 'hard',
    question: 'A government introduces a "nudge" policy (e.g. auto-enrolling workers in pension schemes with opt-out rather than opt-in). This is justified by behavioural economics because:',
    options: [
      'It forces all workers to save, eliminating individual choice',
      'Present bias causes workers to systematically under-save for retirement; changing the default to opt-out exploits status quo bias to improve long-run outcomes without restricting freedom — "libertarian paternalism"',
      'It is cheaper for the government than a mandatory pension scheme',
      'Nudges are only effective for high-income workers who can afford to save',
    ],
    correct: 1,
    explanation: 'Thaler & Sunstein\'s libertarian paternalism: nudges preserve freedom of choice (you can still opt out) while using cognitive biases productively. Auto-enrolment in the UK increased pension participation from ~55% to ~88% — a dramatic improvement achieved without coercion, exploiting inertia and status quo bias that causes present-focused individuals to under-save.',
  },
  {
    id: 'gi-h-5', topic: 'government-intervention', topicLabel: 'Government Intervention', difficulty: 'hard',
    question: 'Universal Basic Income (UBI) — a flat, unconditional payment to all citizens — is argued to address automation-driven unemployment. The strongest economic objection is:',
    options: [
      'It would make all workers lazy and end economic growth',
      'The fiscal cost is prohibitive at meaningful levels, and replacing means-tested benefits with a flat payment may be regressive — transferring resources from targeted poor to all citizens including the wealthy',
      'UBI has never been tested anywhere in the world',
      'It would cause immediate hyperinflation by increasing the money supply',
    ],
    correct: 1,
    explanation: 'The fiscal arithmetic is brutal: a £10,000/year UBI for 50m UK adults costs £500bn/year — roughly equal to total current government spending. Funding this requires either high taxes or replacing existing welfare (which may harm the most vulnerable who receive more than £10,000 currently). Whether UBI is progressive or regressive depends entirely on how it is funded and what it replaces.',
  },

  // Market Structures
  {
    id: 'ms-h-4', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'hard',
    question: 'Two firms dominate a market and are considering whether to invest in a new technology. Firm A invests; if Firm B does not, A gains a large first-mover advantage. This is best analysed using:',
    options: [
      'The kinked demand curve model',
      'Game theory — specifically a sequential game (Stackelberg-style) where the first mover commits to investment, anticipating the rival\'s best response, potentially deterring the rival from investing',
      'Perfect competition theory, since investment decisions are independent',
      'The Lerner Index, measuring market power',
    ],
    correct: 1,
    explanation: 'Sequential games with commitment: if Firm A credibly commits to investing first (sunk cost), Firm B\'s best response may be not to invest (reducing return). Firm A anticipates this via backward induction and invests specifically to deter B — strategic entry deterrence through commitment. This is Stackelberg leadership — the first mover gains by committing irreversibly.',
  },
  {
    id: 'ms-h-5', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'hard',
    question: 'A monopolist faces a demand curve P = 100 - Q and has constant marginal cost MC = 20. Compared to the competitive outcome, the monopoly deadweight loss is:',
    options: ['£400', '£800', '£900', '£1600'],
    correct: 2,
    explanation: 'Competitive: P=MC → 100-Q=20 → Q=80, P=20. Monopoly: MR=100-2Q; MR=MC → 100-2Q=20 → Q=40, P=60. DWL = ½ × (Pm-MC) × (Qc-Qm) = ½ × (60-20) × (80-40) = ½ × 40 × 40 = £800. Wait — ½ × 40 × 40 = 800. Answer is £800.',
  },

  // Macro Objectives
  {
    id: 'mo-h-4', topic: 'macro-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'hard',
    question: 'Okun\'s Law states an empirical relationship between GDP growth and unemployment. If Okun\'s coefficient is 2, and the output gap is -4% (recession), unemployment is approximately:',
    options: [
      '2 percentage points above the natural rate',
      '4 percentage points above the natural rate',
      '8 percentage points above the natural rate',
      'Equal to the natural rate — Okun\'s Law only applies during booms',
    ],
    correct: 0,
    explanation: 'Okun\'s Law: %ΔUnemployment ≈ -½ × %ΔOutput gap (simplified). With coefficient of 2: a -4% output gap implies cyclical unemployment of 4/2 = 2 percentage points above the natural rate. The coefficient is less than 1:1 because firms hoard labour (don\'t fire proportionally to output falls) and hours worked adjust before headcount. Key macro relationship for policy assessment.',
  },
  {
    id: 'mo-h-5', topic: 'macro-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'hard',
    question: 'The "impossible trinity" (Mundell-Fleming trilemma) states that a country cannot simultaneously maintain:',
    options: [
      'Low inflation, low unemployment, and a balanced budget',
      'A fixed exchange rate, free capital mobility, and an independent monetary policy — only two of the three are achievable at once',
      'Economic growth, environmental sustainability, and income equality',
      'Full employment, price stability, and current account balance',
    ],
    correct: 1,
    explanation: 'Mundell-Fleming: if capital flows freely and the exchange rate is fixed, interest rates must match world rates to prevent capital flows from breaking the peg — monetary policy loses independence. Choices: (1) Fixed rate + capital controls (China) = independent monetary policy; (2) Free capital + independent monetary policy (UK) = floating exchange rate; (3) Fixed rate + free capital (Eurozone members) = no monetary policy. The Eurozone\'s sovereign debt crisis illustrated the consequences of option 3.',
  },

  // AD-AS
  {
    id: 'adas-h-4', topic: 'ad-as', topicLabel: 'AD-AS Model', difficulty: 'hard',
    question: 'According to Real Business Cycle (RBC) theory, recessions are caused by:',
    options: [
      'Insufficient aggregate demand due to falls in consumer and investor confidence',
      'Positive technology shocks that temporarily require reallocation of labour across sectors, causing voluntary reductions in labour supply',
      'Negative technology or productivity shocks that reduce the economy\'s productive capacity, and workers\' optimal response to lower real wages is to work less',
      'Central bank errors in setting interest rates too high',
    ],
    correct: 2,
    explanation: 'RBC theory (Kydland, Prescott): recessions are efficient responses to real shocks (negative technology shocks reduce real wages → workers rationally substitute leisure for labour). Unemployment is voluntary. Implication: demand management is ineffective or even harmful — the economy is always in equilibrium. This directly contradicts Keynesian sticky-wage explanations and is highly controversial as empirical explanation of 2008-style crises.',
  },
  {
    id: 'adas-h-5', topic: 'ad-as', topicLabel: 'AD-AS Model', difficulty: 'hard',
    question: 'The paradox of thrift (Keynes) states that when all households try to save more simultaneously, total savings in the economy may actually fall. This occurs because:',
    options: [
      'Banks lend out all savings, so more savings means more investment and higher income',
      'Higher saving reduces consumption → falls in AD → lower income and output → households\' income falls enough that total saving is unchanged or lower despite higher saving rates',
      'Interest rates always fall when saving rises, discouraging further saving',
      'The government automatically raises taxes when private saving rises',
    ],
    correct: 1,
    explanation: 'A fallacy of composition: individually rational saving is collectively self-defeating. In a recession, if all households cut spending to rebuild savings, AD collapses, firms cut output, workers are laid off, incomes fall — and total saving (income minus consumption) may actually decrease despite everyone trying to save more. This justified Keynesian fiscal stimulus: government spending can break the paradox by maintaining income.',
  },

  // Unemployment
  {
    id: 'un-h-4', topic: 'unemployment', topicLabel: 'Unemployment', difficulty: 'hard',
    question: 'Efficiency wage theory suggests firms voluntarily pay wages above the market-clearing level. The best economic justification is:',
    options: [
      'Above-market wages are required by law in all developed economies',
      'Higher wages increase worker productivity (through reduced shirking, lower turnover, better nutrition/motivation), making it profit-maximising to pay above equilibrium — explaining "involuntary" unemployment',
      'Firms collude to pay high wages to prevent worker mobility between competitors',
      'High wages attract only low-quality workers who require higher salaries',
    ],
    correct: 1,
    explanation: 'Efficiency wages: if productivity rises with wages (workers work harder to avoid losing a well-paid job), firms may maximise profit by paying above market-clearing wages. At this wage, labour supply exceeds demand — creating involuntary unemployment. This provides a microeconomic foundation for sticky wages and persistent unemployment without requiring unions or minimum wages.',
  },
  {
    id: 'un-h-5', topic: 'unemployment', topicLabel: 'Unemployment', difficulty: 'hard',
    question: 'Supply-side policies to reduce structural unemployment include retraining schemes and education investment. A key market failure justifying government provision of retraining is:',
    options: [
      'Workers always prefer leisure to retraining regardless of incentives',
      'Retraining has positive externalities (higher tax revenue, lower benefit costs, positive spillovers to firms from skilled workers) and information failures (workers cannot assess returns to different qualifications) — causing under-investment without subsidy',
      'Firms always provide optimal retraining if left to the market',
      'Education and training are pure public goods — entirely non-rival and non-excludable',
    ],
    correct: 1,
    explanation: 'Market failures in training: (1) Positive externalities — firms that train workers may lose them to competitors who free-ride on the training → under-provision. (2) Information failure — workers don\'t know which skills will be in demand. (3) Credit constraints — workers can\'t borrow against future human capital (unlike physical assets). These justify government-subsidised retraining — the key supply-side policy for structural unemployment.',
  },

  // Inflation
  {
    id: 'inf-h-4', topic: 'inflation', topicLabel: 'Inflation', difficulty: 'hard',
    question: 'The Taylor Rule is a monetary policy guideline suggesting central banks should set the nominal interest rate based on:',
    options: [
      'Only the current inflation rate relative to target',
      'The inflation gap (actual vs target inflation) and the output gap (actual vs potential GDP), with coefficients weighting each',
      'The money supply growth rate relative to GDP growth',
      'The exchange rate and current account balance only',
    ],
    correct: 1,
    explanation: 'Taylor Rule: r = r* + 0.5(π - π*) + 0.5(y - y*), where r* = neutral real rate, π* = inflation target, y - y* = output gap. If inflation is above target OR output is above potential, raise rates; if below on both, cut rates. It provides a systematic benchmark for MPC decisions and helps assess whether policy is too tight or loose — e.g. Taylor Rule implied rates of 8%+ in 2022, well above the Bank\'s actual path, suggesting policy was behind the curve.',
  },
  {
    id: 'inf-h-5', topic: 'inflation', topicLabel: 'Inflation', difficulty: 'hard',
    question: 'Hyperinflation (e.g. Zimbabwe 2008, Weimar Germany 1923) is typically caused by:',
    options: [
      'Trade unions pushing wages above productivity',
      'Governments financing large deficits by printing money (monetising debt), which collapses confidence in the currency and triggers a flight to real assets, further destroying money\'s value in a self-reinforcing spiral',
      'Supply shocks in commodity markets persisting for several years',
      'Central banks raising interest rates too slowly in response to inflation',
    ],
    correct: 1,
    explanation: 'Hyperinflation requires monetary financing of deficits at scale. Once confidence collapses, the velocity of money surges (people spend immediately rather than hold depreciating currency), multiplying the price effect of money creation. Zimbabwe printed money to fund war and pay civil servants after agricultural collapse destroyed tax revenue. The lesson: central bank independence and fiscal discipline are the structural safeguards against hyperinflation.',
  },

  // Fiscal & Monetary Policy
  {
    id: 'fm-h-4', topic: 'fiscal-monetary', topicLabel: 'Fiscal & Monetary Policy', difficulty: 'hard',
    question: 'Ricardian Equivalence (Barro) suggests that government borrowing to fund tax cuts is ineffective because:',
    options: [
      'Governments always waste borrowed money on inefficient projects',
      'Rational, forward-looking consumers anticipate future tax rises to repay the debt and save the tax cut rather than spending it — leaving AD unchanged',
      'Bond markets immediately raise interest rates to offset any fiscal stimulus',
      'Central banks always tighten monetary policy when fiscal policy loosens',
    ],
    correct: 1,
    explanation: 'Ricardian Equivalence: consumers are rational and have infinite planning horizons. A debt-financed tax cut today means higher taxes tomorrow. Rational consumers save the windfall to pay future taxes → consumption doesn\'t rise → AD unchanged → fiscal multiplier = 0. In reality, liquidity constraints (some consumers can\'t borrow against future income) and finite horizons mean Ricardian Equivalence doesn\'t fully hold, but it reduces the fiscal multiplier — particularly relevant for evaluating 2009-style stimulus packages.',
  },
  {
    id: 'fm-h-5', topic: 'fiscal-monetary', topicLabel: 'Fiscal & Monetary Policy', difficulty: 'hard',
    question: 'Forward guidance — central banks pre-announcing future interest rate paths — is intended to:',
    options: [
      'Replace actual rate changes with verbal commitments to reduce policy costs',
      'Influence long-term interest rates and expectations today by committing to future policy actions, improving the transmission mechanism particularly when short-term rates are at the zero lower bound',
      'Prevent financial market speculation in currency markets',
      'Allow governments to coordinate fiscal and monetary policy more closely',
    ],
    correct: 1,
    explanation: 'Forward guidance (used by Bank of England, Fed, ECB post-2008): long-term interest rates depend on expected future short rates. By credibly committing to keeping rates low (e.g. "until unemployment falls below X%"), the central bank lowers long-term rates without moving the current rate — stimulating borrowing and investment. Effectiveness depends on credibility: if markets don\'t believe the commitment, the guidance fails. The Bank of England\'s 2013 forward guidance was undermined when unemployment fell faster than expected.',
  },

  // International Trade
  {
    id: 'it-h-4', topic: 'international-trade', topicLabel: 'International Trade', difficulty: 'hard',
    question: 'A country joins a customs union (like the EU). Trade creation occurs when the country imports from the union instead of producing domestically at higher cost. Trade diversion occurs when:',
    options: [
      'The country exports more to union members due to tariff-free access',
      'The country switches from lower-cost non-union suppliers (now facing tariffs) to higher-cost union suppliers (tariff-free), reducing global efficiency',
      'The common external tariff reduces the country\'s total trade with the world',
      'Domestic firms are forced to become more efficient due to union competition',
    ],
    correct: 1,
    explanation: 'Viner\'s trade creation vs diversion: customs unions are not necessarily welfare-enhancing. Trade creation (replacing high-cost domestic production with cheaper union imports) improves efficiency. Trade diversion (replacing cheapest global supplier with more expensive union supplier due to common external tariff) reduces efficiency. Net welfare impact depends on which effect dominates — a key reason economists are nuanced about regional trade blocs vs multilateral free trade.',
  },
  {
    id: 'it-h-5', topic: 'international-trade', topicLabel: 'International Trade', difficulty: 'hard',
    question: 'A "sudden stop" in capital inflows can trigger a balance of payments crisis. Which sequence correctly describes the mechanism?',
    options: [
      'Trade surplus → capital outflows → currency appreciation → export boom → crisis resolved',
      'Foreign investors lose confidence → capital inflows stop/reverse → currency depreciates sharply → import costs soar (inflation) → domestic firms with foreign-currency debt face insolvency → recession → further loss of confidence',
      'Central bank raises interest rates → capital inflows increase → currency appreciates → crisis averted',
      'Government austerity → budget surplus → current account surplus → capital outflows normalise',
    ],
    correct: 1,
    explanation: 'Classic EM crisis mechanism (Mexico 1994, Asia 1997, Argentina 2001): countries running current account deficits depend on capital inflows to finance them. When sentiment shifts, inflows stop, the currency collapses, companies with USD debt face balance sheet crises, banks fail, recession deepens. This is why the IMF\'s conditionality focuses on current account sustainability — persistent deficits financed by volatile portfolio flows are fragile. The UK\'s September 2022 Gilt crisis was a mild version of this dynamic for a developed economy.',
  },

  // ─── ADDITIONAL MEDIUM QUESTIONS ────────────────────────────

  // Economic Problem
  {
    id: 'ep-m-4', topic: 'economic-problem', topicLabel: 'The Economic Problem', difficulty: 'medium',
    question: 'A mixed economy is best described as one in which:',
    options: [
      'All resources are allocated by the price mechanism alone',
      'The government owns all means of production',
      'Both the price mechanism and government intervention allocate resources, with the balance varying by country',
      'Resources are shared equally among all citizens',
    ],
    correct: 2,
    explanation: 'Most real-world economies are mixed — markets determine most allocation (via price signals) but governments intervene to correct market failures, redistribute income, and provide public goods. The UK is a mixed economy closer to the market end of the spectrum.',
  },
  {
    id: 'ep-m-5', topic: 'economic-problem', topicLabel: 'The Economic Problem', difficulty: 'medium',
    question: 'Which statement correctly identifies a positive economic statement?',
    options: [
      'The government ought to reduce income inequality',
      'Wealth should be redistributed from rich to poor',
      'A 10% rise in the minimum wage reduces youth employment by approximately 1-3%',
      'Free healthcare is a basic human right',
    ],
    correct: 2,
    explanation: 'Positive statements are factual claims testable against evidence. Option C is an empirical proposition that can be tested with data. The others contain normative value judgements ("ought to", "should", "right").',
  },
  {
    id: 'ep-m-6', topic: 'economic-problem', topicLabel: 'The Economic Problem', difficulty: 'medium',
    question: 'When an economy experiences technological progress, the PPF will:',
    options: [
      'Shift inward as fewer workers are needed',
      'Shift outward, representing greater productive potential',
      'Become a straight line rather than bowed out',
      'Remain fixed as technology only affects prices, not output',
    ],
    correct: 1,
    explanation: 'Technological progress increases productive capacity — the same inputs produce more output. This shifts the entire PPF outward, not just for one good, enabling higher consumption of both goods simultaneously.',
  },
  {
    id: 'ep-m-7', topic: 'economic-problem', topicLabel: 'The Economic Problem', difficulty: 'medium',
    question: 'In a planned economy, the government decides what to produce. The main economic problem with this system is:',
    options: [
      'The government always produces too much of every good',
      'The absence of a price mechanism means there is no reliable signal of consumer preferences or relative scarcities, leading to misallocation',
      'Planned economies always produce less GDP than market economies',
      'Workers refuse to work without profit incentives',
    ],
    correct: 1,
    explanation: 'Hayek\'s knowledge problem: prices aggregate dispersed information about preferences and scarcity that no central planner can replicate. Without prices, planners cannot know what to produce, leading to shortages of desired goods and surpluses of unwanted ones — the fundamental failure of Soviet-style planning.',
  },
  {
    id: 'ep-m-8', topic: 'economic-problem', topicLabel: 'The Economic Problem', difficulty: 'medium',
    question: 'An increase in the quality of labour (e.g. through better education) would most likely:',
    options: [
      'Move the economy from outside to inside the PPF',
      'Cause a movement along the PPF',
      'Shift the PPF outward, representing improved productive capacity',
      'Make the PPF steeper at all points',
    ],
    correct: 2,
    explanation: 'Human capital improvement (education, training, health) raises the quality of labour — a factor of production. Better-quality labour can produce more output from the same inputs, expanding the economy\'s productive potential and shifting the PPF outward.',
  },

  // Supply & Demand
  {
    id: 'sd-m-4', topic: 'supply-demand', topicLabel: 'Supply & Demand', difficulty: 'medium',
    question: 'A government sets a price floor (minimum price) for wheat above the equilibrium price. What is the most likely consequence?',
    options: [
      'A shortage of wheat develops as consumers demand more',
      'A surplus of wheat develops as farmers produce more than consumers want at the higher price',
      'The equilibrium quantity of wheat stays the same',
      'Wheat prices fall further below equilibrium',
    ],
    correct: 1,
    explanation: 'A price floor above equilibrium: higher prices incentivise farmers to supply more while consumers demand less. Quantity supplied exceeds quantity demanded — creating a persistent surplus that the government typically must purchase (e.g. EU butter mountains, grain surpluses under the Common Agricultural Policy).',
  },
  {
    id: 'sd-m-5', topic: 'supply-demand', topicLabel: 'Supply & Demand', difficulty: 'medium',
    question: 'An unusually hot summer increases both demand for ice cream and the price of milk (an input in ice cream production). What is the expected effect on the ice cream market?',
    options: [
      'Price rises; quantity change is indeterminate',
      'Price is indeterminate; quantity rises',
      'Price and quantity both definitely rise',
      'Price falls; quantity is indeterminate',
    ],
    correct: 0,
    explanation: 'Demand shifts right (rising price, rising quantity) while supply shifts left (rising price, falling quantity). Both effects raise price — so price definitely rises. But the quantity effect is ambiguous: demand increase raises quantity while supply decrease lowers it. The net quantity change depends on the relative magnitude of each shift.',
  },
  {
    id: 'sd-m-6', topic: 'supply-demand', topicLabel: 'Supply & Demand', difficulty: 'medium',
    question: 'What distinguishes a change in demand from a change in quantity demanded?',
    options: [
      'They are the same thing — both cause the demand curve to shift',
      'A change in demand is caused by a price change (movement along the curve); a change in quantity demanded is caused by a non-price factor (shift of the curve)',
      'A change in quantity demanded is a movement along the demand curve caused by a price change; a change in demand is a shift of the entire curve caused by a non-price factor',
      'A change in demand only applies to inferior goods',
    ],
    correct: 2,
    explanation: 'Critical distinction: price changes cause movements along a fixed demand curve (change in quantity demanded). All other factors (income, preferences, prices of related goods, expectations) shift the entire demand curve (change in demand). Confusing these is one of the most common A-level mistakes.',
  },
  {
    id: 'sd-m-7', topic: 'supply-demand', topicLabel: 'Supply & Demand', difficulty: 'medium',
    question: 'The market for rental housing in a city is in equilibrium. A large tech company announces it will open a new headquarters in the city, bringing 5,000 new workers. In the short run, we expect:',
    options: [
      'Rents to fall as more housing is built to meet demand',
      'Rents to rise as demand for housing increases but short-run supply is fixed',
      'No change in rents as the housing market is competitive',
      'Supply of housing to increase immediately, keeping rents stable',
    ],
    correct: 1,
    explanation: 'In the short run, housing supply is highly inelastic (new construction takes years). The inflow of workers shifts demand rightward sharply. With supply fixed, equilibrium adjusts mainly through price — rents rise. Over years, new construction increases supply, moderating rent growth.',
  },
  {
    id: 'sd-m-8', topic: 'supply-demand', topicLabel: 'Supply & Demand', difficulty: 'medium',
    question: 'A firm expects the price of its product to rise significantly next month. How will this affect current supply?',
    options: [
      'Current supply increases as the firm rushes to sell now',
      'Current supply decreases as the firm withholds stock to sell later at higher prices',
      'Current supply is unaffected as future prices don\'t influence current decisions',
      'The supply curve becomes perfectly elastic in anticipation',
    ],
    correct: 1,
    explanation: 'Seller expectations are a determinant of supply. If sellers expect higher future prices, they have an incentive to hold back stock now and sell later — reducing current supply. This is why speculation in commodity markets (oil, wheat) can cause immediate price spikes even before any physical shortage occurs.',
  },

  // Elasticity
  {
    id: 'el-m-4', topic: 'elasticity', topicLabel: 'Elasticity', difficulty: 'medium',
    question: 'A firm reduces its price by 5% and total revenue rises. We can conclude that:',
    options: [
      'Demand is inelastic for this product',
      'Demand is elastic — the percentage rise in quantity sold exceeds 5%',
      'Demand is unit elastic',
      'The firm has no market power',
    ],
    correct: 1,
    explanation: 'TR = P × Q. If price falls and TR rises, Q must have risen by a greater proportion than P fell. This means |PED| > 1 — elastic demand. Cutting price raises revenue when demand is elastic because the volume gain outweighs the price reduction.',
  },
  {
    id: 'el-m-5', topic: 'elasticity', topicLabel: 'Elasticity', difficulty: 'medium',
    question: 'A 20% rise in the price of butter causes demand for margarine to rise by 15%. The cross elasticity of demand is:',
    options: ['-0.75', '+0.75', '+1.33', '-1.33'],
    correct: 1,
    explanation: 'XED = %ΔQd (margarine) / %ΔP (butter) = +15% / +20% = +0.75. Positive XED confirms butter and margarine are substitutes. The closer to 0, the weaker the substitution relationship.',
  },
  {
    id: 'el-m-6', topic: 'elasticity', topicLabel: 'Elasticity', difficulty: 'medium',
    question: 'Which factor would make the price elasticity of supply for new housing MORE elastic?',
    options: [
      'Strict planning laws limiting where new homes can be built',
      'A shortage of construction workers and materials',
      'Relaxed planning regulations and abundant spare land with planning permission',
      'High land values in city centres',
    ],
    correct: 2,
    explanation: 'PES depends on the ease of increasing output. Relaxed planning and available land mean developers can respond quickly to higher prices by building more — making supply elastic. Constraints (strict planning, labour shortages, high land costs) make supply inelastic.',
  },
  {
    id: 'el-m-7', topic: 'elasticity', topicLabel: 'Elasticity', difficulty: 'medium',
    question: 'The income elasticity of demand for a luxury car is +3.5. If real incomes fall by 2%, demand for luxury cars will approximately:',
    options: ['Fall by 1.75%', 'Fall by 7%', 'Rise by 7%', 'Fall by 5.5%'],
    correct: 1,
    explanation: '%ΔQd = YED × %ΔY = 3.5 × (-2%) = -7%. Luxury goods have high positive YED — demand is very sensitive to income changes, falling sharply in recessions. This explains why BMW, Porsche and LVMH see dramatic sales swings across the business cycle.',
  },
  {
    id: 'el-m-8', topic: 'elasticity', topicLabel: 'Elasticity', difficulty: 'medium',
    question: 'A government wants to maximise tax revenue from a new tax on a good. Which PED should the taxed good ideally have?',
    options: [
      'Highly elastic (|PED| >> 1) — consumers are very sensitive to price',
      'Perfectly elastic — consumers will keep buying regardless',
      'Highly inelastic (|PED| << 1) — consumers will keep buying despite the tax',
      'Unit elastic (|PED| = 1) — revenue is maximised at this point',
    ],
    correct: 2,
    explanation: 'With inelastic demand, a tax raises price but quantity falls little — tax revenue is large and predictable. Elastic demand means consumers switch away sharply when taxed — revenue is small. This is why governments tax fuel, tobacco and alcohol (all inelastic), not holidays or restaurants (elastic).',
  },
  {
    id: 'el-m-9', topic: 'elasticity', topicLabel: 'Elasticity', difficulty: 'medium',
    question: 'Why does PED tend to be more elastic over a longer time period?',
    options: [
      'Incomes tend to rise over time, making consumers less price sensitive',
      'Consumers and producers have more time to find alternatives, substitutes, and adjust behaviour',
      'Supply becomes more inelastic over time, shifting the burden to consumers',
      'Inflation erodes the real price change, making consumers less responsive',
    ],
    correct: 1,
    explanation: 'Time allows adjustment: consumers can switch to substitutes, change habits, or buy new products. For example, after a petrol price rise, short-run PED is ~-0.1 (few alternatives immediately) but long-run PED is ~-0.6 (consumers buy electric cars, move nearer work, use public transport). Habit and inertia make demand inelastic in the short run.',
  },

  // Market Failure
  {
    id: 'mf-m-4', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'medium',
    question: 'A new housing development is built next to a railway station, creating noise and air pollution for residents. This is an example of:',
    options: [
      'A positive externality in consumption',
      'A negative externality in production — third parties bear costs not reflected in market prices',
      'A public bad',
      'A merit good that the market under-provides',
    ],
    correct: 1,
    explanation: 'The developer and railway company impose costs (noise, pollution) on nearby residents who are not party to the transaction. These external costs are not priced into the market — the social cost of the development exceeds its private cost, causing over-production relative to the social optimum.',
  },
  {
    id: 'mf-m-5', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'medium',
    question: 'A vaccination programme generates positive externalities because:',
    options: [
      'Vaccines are produced by private pharmaceutical firms seeking profit',
      'Each person vaccinated reduces the risk of infection for others (herd immunity), creating benefits for non-vaccinated individuals who do not pay for them',
      'The government subsidises vaccine production, reducing costs',
      'Vaccines have inelastic demand, ensuring high take-up',
    ],
    correct: 1,
    explanation: 'Vaccination creates positive externalities in consumption: herd immunity means vaccinated individuals protect others (including those who cannot be vaccinated). Since these external benefits are not captured in the private market, vaccination is under-provided without subsidy or government mandate — a classic merit good / positive externality case.',
  },
  {
    id: 'mf-m-6', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'medium',
    question: 'Which of the following best illustrates the problem of information asymmetry in financial markets?',
    options: [
      'Shares rising in price when company profits increase',
      'Investment banks packaging and selling mortgage-backed securities rated AAA that later turned out to be near worthless — sellers knew more about underlying quality than buyers',
      'Stock markets falling during recessions',
      'Central banks holding interest rates low to support asset prices',
    ],
    correct: 1,
    explanation: 'The 2008 financial crisis was partly driven by information asymmetry: banks creating complex mortgage-backed securities knew far more about underlying loan quality than buyers (pension funds, insurers). Rating agencies failed to bridge this gap. When defaults rose, buyers discovered assets were near worthless — a market failure caused by hidden information.',
  },
  {
    id: 'mf-m-7', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'medium',
    question: 'Why does the free market tend to over-produce demerit goods like cigarettes?',
    options: [
      'Firms in the cigarette industry have monopoly power',
      'Consumers overestimate the costs of consumption (information failure) and do not account for external costs imposed on others — leading to more consumption than is socially optimal',
      'The government subsidises tobacco farming',
      'Demerit goods always have inelastic supply',
    ],
    correct: 1,
    explanation: 'Two market failures: (1) Information failure — consumers underestimate addiction risk and long-term health costs (especially young people). (2) Negative externalities — passive smoking, NHS treatment costs imposed on non-smokers. Both cause the free market to produce and consume more than the social optimum — justifying taxes and advertising bans.',
  },
  {
    id: 'mf-m-8', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'medium',
    question: 'A Pigouvian tax is designed to:',
    options: [
      'Raise maximum government revenue from inelastic goods',
      'Set the tax equal to the marginal external cost at the socially optimal output, internalising the externality',
      'Compensate victims of pollution directly',
      'Force all firms in a polluting industry to shut down',
    ],
    correct: 1,
    explanation: 'A Pigouvian tax (named after Arthur Pigou) equals the marginal external cost — it raises the private cost to equal the social cost (MPC + MEC = MSC). This incentivises the firm to reduce output to the socially optimal level where MSC = MSB, correcting the market failure without banning production.',
  },

  // Government Intervention
  {
    id: 'gi-m-4', topic: 'government-intervention', topicLabel: 'Government Intervention', difficulty: 'medium',
    question: 'The UK\'s National Living Wage is an example of which type of government intervention?',
    options: [
      'A price ceiling (maximum price)',
      'A price floor (minimum price) in the labour market',
      'A Pigouvian tax on low-wage employment',
      'A subsidy to low-income workers',
    ],
    correct: 1,
    explanation: 'The National Living Wage (NLW) sets a minimum hourly rate — a price floor in the labour market. If set above the equilibrium wage, standard theory predicts unemployment; however, if labour markets are monopsonistic, a minimum wage can raise both wages and employment simultaneously.',
  },
  {
    id: 'gi-m-5', topic: 'government-intervention', topicLabel: 'Government Intervention', difficulty: 'medium',
    question: 'State ownership (nationalisation) of a natural monopoly is justified on the grounds that:',
    options: [
      'The government can always run businesses more efficiently than the private sector',
      'In a natural monopoly, a private firm would exploit market power to restrict output and raise prices above marginal cost — public ownership can price at or near MC in the public interest',
      'Nationalised firms face stronger competition from imports',
      'Public ownership eliminates all economies of scale',
    ],
    correct: 1,
    explanation: 'Natural monopolies (water, rail infrastructure) have falling long-run average costs — competition is inefficient. A private monopolist maximises profit at P > MC, causing welfare loss. State ownership allows pricing at MC (or AC for financial sustainability), maximising consumer surplus — the classic justification for nationalised utilities.',
  },
  {
    id: 'gi-m-6', topic: 'government-intervention', topicLabel: 'Government Intervention', difficulty: 'medium',
    question: 'A government subsidises electric vehicle purchases. The subsidy is best represented as:',
    options: [
      'A leftward shift in the demand curve for EVs',
      'A rightward shift in the supply curve — producers receive more per unit, increasing output at each price',
      'A rightward shift in both supply and demand simultaneously',
      'A fall in the equilibrium quantity of EVs',
    ],
    correct: 1,
    explanation: 'Production subsidies reduce firms\' costs, shifting the supply curve rightward — more is supplied at every price. Equilibrium price falls and quantity rises. Consumer subsidies (paid directly to buyers) instead shift demand rightward. Both types increase quantity and improve affordability but via different mechanisms.',
  },
  {
    id: 'gi-m-7', topic: 'government-intervention', topicLabel: 'Government Intervention', difficulty: 'medium',
    question: 'Information provision (e.g. mandatory nutritional labelling on food) is a less interventionist policy than a sugar tax because:',
    options: [
      'It directly controls what consumers eat',
      'It corrects the information failure without distorting prices or restricting choice — consumers remain free to choose once properly informed',
      'It generates more government revenue',
      'It shifts the supply curve for sugary foods',
    ],
    correct: 1,
    explanation: 'Information provision addresses the root cause of the information failure (consumers don\'t know what\'s in food) without overriding consumer sovereignty. A sugar tax corrects the externality/demerit good problem but imposes a cost even on informed consumers. Labelling is "lighter touch" — though less effective if behavioural biases prevent consumers acting on information.',
  },
  {
    id: 'gi-m-8', topic: 'government-intervention', topicLabel: 'Government Intervention', difficulty: 'medium',
    question: 'The Competition and Markets Authority (CMA) investigates a proposed merger between two supermarkets. Under what condition would it most likely block the merger?',
    options: [
      'If the merged firm would have revenues exceeding £1 billion',
      'If the merger would substantially lessen competition — for example creating local monopolies in areas where both stores currently compete',
      'If either firm is currently making supernormal profits',
      'If the merger involves any overseas company',
    ],
    correct: 1,
    explanation: 'The CMA\'s test is whether a merger will "substantially lessen competition" (SLC). Local market analysis is key for supermarkets — even if national market share seems moderate, the merger may eliminate competition in specific towns where both stores are the only major options. The Sainsbury\'s/Asda merger (2019) was blocked on exactly these grounds.',
  },

  // Market Structures
  {
    id: 'ms-m-4', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'medium',
    question: 'In the long run, a firm in perfect competition will earn:',
    options: [
      'Supernormal profit, as competitive firms are efficient',
      'Normal profit only, because supernormal profits attract new entrants who compete them away',
      'A loss, as competition drives prices below average cost',
      'Zero revenue, as the price equals marginal cost',
    ],
    correct: 1,
    explanation: 'Long-run perfectly competitive equilibrium: P = MC = AC (minimum). Supernormal profits attract entry; entry increases supply, pushing price down until only normal profit remains. Losses cause exit; supply falls, price rises back to AC. The long run is characterised by normal profit — the opportunity cost of capital and entrepreneurship.',
  },
  {
    id: 'ms-m-5', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'medium',
    question: 'Which of the following is a barrier to entry that protects a monopolist\'s market position?',
    options: [
      'Low fixed costs and easy access to inputs',
      'Strong consumer preference for variety',
      'Economies of scale so large that a new entrant cannot achieve competitive costs — a structural (natural monopoly) barrier',
      'Perfect information available to all market participants',
    ],
    correct: 2,
    explanation: 'Barriers to entry can be structural (economies of scale, high sunk costs, ownership of key resources) or strategic (predatory pricing, exclusive contracts, brand loyalty). Massive economies of scale mean established firms have much lower average costs than any new entrant — making entry unprofitable and reinforcing the monopoly position.',
  },
  {
    id: 'ms-m-6', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'medium',
    question: 'Oligopolies are characterised by "strategic interdependence," meaning:',
    options: [
      'Firms always cooperate to maximise joint profit',
      'Each firm\'s optimal decision depends on the anticipated reactions of rivals — firms must consider how competitors will respond before setting price or output',
      'Prices in oligopolies are determined by the government',
      'Oligopolists always face perfectly elastic demand',
    ],
    correct: 1,
    explanation: 'In oligopoly, few large firms dominate. Unlike perfect competition (price takers) or monopoly (no rivals), oligopolists must model rivals\' behaviour. Will a competitor match a price cut? Retaliate? Ignore it? Game theory formalises this interdependence — each firm\'s profit depends on the strategies of all players.',
  },
  {
    id: 'ms-m-7', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'medium',
    question: 'A monopolist is currently producing at a point where MR > MC. To maximise profit, the firm should:',
    options: [
      'Reduce output, as MR > MC means it is over-producing',
      'Increase output, since each additional unit adds more to revenue than to cost',
      'Raise price immediately to increase revenue',
      'Exit the market as it is not making sufficient profit',
    ],
    correct: 1,
    explanation: 'Profit is maximised where MR = MC. If MR > MC, each additional unit produced adds more to revenue than to cost — profit rises by expanding output. The firm should increase production until MR = MC. If MR < MC, the firm over-produces and should cut output.',
  },
  {
    id: 'ms-m-8', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'medium',
    question: 'Which market structure is most likely to engage in non-price competition (advertising, product differentiation, loyalty schemes)?',
    options: [
      'Perfect competition',
      'Pure monopoly with no rivals',
      'Oligopoly — where direct price competition risks damaging price wars but firms still compete for market share',
      'A perfectly contestable market',
    ],
    correct: 2,
    explanation: 'In oligopoly, price cuts are quickly matched by rivals (kinked demand curve logic) — so price competition is mutually destructive. Instead, firms compete on brand image, advertising, product innovation, and customer loyalty. Think Coca-Cola vs Pepsi — enormous advertising spend rather than price wars.',
  },
  {
    id: 'ms-m-9', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'medium',
    question: 'X-inefficiency in a monopoly refers to:',
    options: [
      'Producing outside the PPF',
      'Setting price above marginal cost',
      'Organisational slack and cost-padding that arise when competitive pressure is absent — actual costs are above the minimum possible',
      'Failing to invest in new technology',
    ],
    correct: 2,
    explanation: 'Leibenstein\'s X-inefficiency: without competitive pressure, monopolists lack incentive to minimise costs rigorously. Management may tolerate waste, excess staff, or comfortable working practices. This means actual costs exceed technically achievable minimum costs — a form of productive inefficiency distinct from the standard P > MC allocative inefficiency.',
  },

  // Macro Objectives
  {
    id: 'mo-m-4', topic: 'macro-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'medium',
    question: 'GDP per capita may be a misleading indicator of living standards because:',
    options: [
      'GDP is always measured incorrectly by government statisticians',
      'It is an average that ignores income distribution — a country with high GDP per capita may have extreme inequality, leaving many citizens in poverty',
      'GDP only measures manufacturing output, excluding services',
      'It fails to account for the size of the government sector',
    ],
    correct: 1,
    explanation: 'GDP per capita divides total output equally among the population — a statistical average. If income distribution is highly unequal, most people may earn far below the average. The UAE has high GDP per capita but extreme inequality between citizens and migrant workers. GDP per capita also ignores non-market activities, environmental damage, leisure time, and quality of public services.',
  },
  {
    id: 'mo-m-5', topic: 'macro-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'medium',
    question: 'A country simultaneously achieves strong GDP growth and rising inflation. This suggests:',
    options: [
      'The economy is in a recession',
      'Aggregate demand is growing faster than aggregate supply — the economy may be in a positive output gap',
      'Supply-side policies have been particularly effective',
      'The current account is improving',
    ],
    correct: 1,
    explanation: 'When AD grows faster than productive capacity (LRAS), additional demand cannot be met by increased real output — prices rise instead. A positive output gap (boom) is characterised by above-trend growth and inflationary pressure. This is the typical trade-off between the growth objective and the inflation objective.',
  },
  {
    id: 'mo-m-6', topic: 'macro-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'medium',
    question: 'The balance of payments must always sum to zero in theory because:',
    options: [
      'The IMF enforces zero balance through currency intervention',
      'Every international transaction has two sides — a debit and a credit — so the current account deficit must be matched by a financial account surplus (capital inflows)',
      'Governments intervene to prevent imbalances exceeding zero',
      'Exchange rates automatically adjust to keep trade balanced',
    ],
    correct: 1,
    explanation: 'Double-entry bookkeeping: every cross-border transaction is recorded twice. A UK import payment (current account debit) = a foreign creditor gaining a UK financial claim (financial account credit). The accounts must balance by accounting identity. In practice, a statistical "errors and omissions" item accounts for measurement gaps.',
  },
  {
    id: 'mo-m-7', topic: 'macro-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'medium',
    question: 'Which policy approach is most consistent with reducing income inequality?',
    options: [
      'Cutting the top rate of income tax',
      'Reducing corporation tax to attract investment',
      'Progressive taxation combined with targeted spending on public services and benefits',
      'Deregulating labour markets to increase wage flexibility',
    ],
    correct: 2,
    explanation: 'Progressive taxation (higher rates on higher incomes) combined with redistributive spending (NHS, education, housing benefit, Universal Credit) directly compresses the income distribution. Tax cuts for the wealthy or deregulation may increase growth but tend to widen pre-tax inequality without strong redistribution mechanisms.',
  },
  {
    id: 'mo-m-8', topic: 'macro-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'medium',
    question: 'Economic growth that is accompanied by falling unemployment but rising current account deficits illustrates:',
    options: [
      'A successful supply-side reform programme',
      'A conflict between macroeconomic objectives — growth and employment improve but external balance worsens as rising incomes suck in imports',
      'An improvement in all four main macroeconomic objectives simultaneously',
      'Stagflation developing in the economy',
    ],
    correct: 1,
    explanation: 'The four main objectives (growth, low inflation, low unemployment, current account balance) frequently conflict. Rising incomes from growth increase imports — worsening the current account. The UK typically runs current account deficits during booms because consumers spend heavily on imported goods. This is a classic macro trade-off.',
  },

  // AD-AS
  {
    id: 'adas-m-4', topic: 'ad-as', topicLabel: 'AD-AS Model', difficulty: 'medium',
    question: 'A significant fall in consumer confidence causes households to save more and spend less. Using AD-AS, the short-run impact on the UK economy is:',
    options: [
      'Rightward shift of AD, higher output and prices',
      'Leftward shift of AD, lower output and lower price level (deflationary pressure)',
      'Leftward shift of SRAS, lower output and higher prices',
      'Rightward shift of LRAS, higher potential output',
    ],
    correct: 1,
    explanation: 'Consumer confidence affects consumption (C), a component of AD. Falling confidence → lower C → AD shifts left → new equilibrium at lower real GDP and lower price level. This is a demand-side recession — the mechanism behind the 2008-09 recession in the UK.',
  },
  {
    id: 'adas-m-5', topic: 'ad-as', topicLabel: 'AD-AS Model', difficulty: 'medium',
    question: 'A rise in the UK\'s trading partners\' national income will most likely:',
    options: [
      'Reduce UK exports as foreign consumers spend more on domestic goods',
      'Increase UK exports as foreign consumers have more income to spend on imported UK goods',
      'Reduce UK imports as the UK becomes more competitive',
      'Have no effect on the UK economy as trade only affects the current account',
    ],
    correct: 1,
    explanation: 'Higher incomes abroad increase demand for imports from the UK — boosting UK exports (X) and thus AD = C + I + G + (X - M). This is why UK GDP growth is closely linked to growth in key trading partners (US, EU). Export demand is effectively determined by foreign income, not UK policy.',
  },
  {
    id: 'adas-m-6', topic: 'ad-as', topicLabel: 'AD-AS Model', difficulty: 'medium',
    question: 'Investment (I) is considered the most volatile component of Aggregate Demand because:',
    options: [
      'Investment is directly controlled by the government',
      'Investment decisions depend heavily on business confidence and expected future profitability — which are sensitive to economic uncertainty and interest rate changes',
      'Investment is funded entirely by foreign capital flows',
      'Investment only occurs when firms are running at full capacity',
    ],
    correct: 1,
    explanation: 'Keynes\'s "animal spirits" — investment is driven by expectations about future demand and profits, which can shift dramatically with sentiment. Unlike consumption (which is relatively stable) or government spending (controlled by policy), investment can collapse rapidly in recessions and surge in booms, amplifying the business cycle.',
  },
  {
    id: 'adas-m-7', topic: 'ad-as', topicLabel: 'AD-AS Model', difficulty: 'medium',
    question: 'The wealth effect on aggregate demand works through which mechanism?',
    options: [
      'Higher wages make workers feel wealthier, increasing their productivity',
      'Rising asset prices (house prices, shares) increase the perceived wealth of asset owners, who then spend more from income — boosting consumption',
      'Government wealth redistribution programmes increase consumption for lower-income households',
      'Higher savings rates increase loanable funds, reducing interest rates and stimulating investment',
    ],
    correct: 1,
    explanation: 'The wealth effect: when asset prices rise (house prices, equity portfolios), households feel wealthier and increase consumption even without a rise in current income. UK homeowners who see house prices rise by £50,000 feel able to spend more — shifting AD rightward. This was a key transmission mechanism of QE (which raised asset prices) post-2009.',
  },
  {
    id: 'adas-m-8', topic: 'ad-as', topicLabel: 'AD-AS Model', difficulty: 'medium',
    question: 'Which of the following would shift the Short-Run Aggregate Supply (SRAS) curve to the left?',
    options: [
      'A fall in oil prices',
      'An improvement in worker productivity',
      'A large rise in national minimum wage raising firms\' wage costs',
      'Increased government investment in infrastructure',
    ],
    correct: 2,
    explanation: 'SRAS shifts left when firms\' costs rise — reducing profitability and the quantity supplied at every price level. A large minimum wage increase raises wage bills for firms across the economy, shifting SRAS leftward. This is cost-push inflation: same demand, but higher supply-side costs push the price level up and output down.',
  },

  // Unemployment
  {
    id: 'un-m-4', topic: 'unemployment', topicLabel: 'Unemployment', difficulty: 'medium',
    question: 'The claimant count and the Labour Force Survey (LFS) are two measures of UK unemployment. Which correctly describes their difference?',
    options: [
      'The claimant count is always higher than the LFS measure',
      'The LFS (ILO definition) counts all those without work who are actively seeking and available for work; the claimant count only includes those claiming unemployment-related benefits — typically narrower',
      'The claimant count uses a broader definition that includes underemployed part-time workers',
      'Both measures always give identical results as they track the same people',
    ],
    correct: 1,
    explanation: 'The LFS/ILO measure is internationally comparable and broader: anyone without a job who has sought work in the past four weeks and is available to start within two weeks. The claimant count is narrower — only those eligible for and claiming Universal Credit job-seeking element. Many unemployed people (e.g. those with savings, some gig workers) claim no benefits.',
  },
  {
    id: 'un-m-5', topic: 'unemployment', topicLabel: 'Unemployment', difficulty: 'medium',
    question: 'Which policy is most appropriate to address frictional unemployment?',
    options: [
      'Fiscal stimulus to boost aggregate demand',
      'Subsidies to declining industries to protect jobs',
      'Better job matching services, improved labour market information, and reform of benefits to incentivise active job seeking',
      'Interest rate cuts to reduce the cost of borrowing for firms',
    ],
    correct: 2,
    explanation: 'Frictional unemployment reflects search time between jobs. It is best reduced by improving the matching process: job centres, online platforms, reduced information costs. Benefits design matters too — overly generous immediate replacement rates reduce job search urgency. Demand management is unnecessary as frictional unemployment occurs even when the economy is at full employment.',
  },
  {
    id: 'un-m-6', topic: 'unemployment', topicLabel: 'Unemployment', difficulty: 'medium',
    question: 'Seasonal unemployment is most prevalent in which sector?',
    options: [
      'Financial services',
      'Manufacturing',
      'Agriculture, tourism, and retail (Christmas)',
      'Healthcare',
    ],
    correct: 2,
    explanation: 'Seasonal unemployment follows predictable patterns: agricultural workers (harvest seasons), tourism workers (summer/winter), retail staff (Christmas peak). It is temporary and structurally driven by demand patterns — distinct from cyclical (recession-linked) or structural (long-term skill mismatch) unemployment.',
  },
  {
    id: 'un-m-7', topic: 'unemployment', topicLabel: 'Unemployment', difficulty: 'medium',
    question: 'A recession leads to a sharp rise in unemployment. Two years later, even as the economy recovers, unemployment remains above pre-recession levels. This is most likely explained by:',
    options: [
      'The government failing to cut interest rates quickly enough',
      'Hysteresis — prolonged unemployment causes skills erosion, loss of work habits, and employer stigma, raising the structural unemployment rate',
      'Seasonal unemployment increasing as the economy grows',
      'Workers voluntarily choosing not to return to work due to higher benefit levels',
    ],
    correct: 1,
    explanation: 'Hysteresis effect: unemployment leaves "scars." Workers who are unemployed for 1-2 years lose skills, connections, and work habits. Employers may discriminate against long-term unemployed. This ratchets up structural unemployment even after cyclical demand recovers — a key argument for early, large fiscal intervention in recessions to prevent hysteresis from developing.',
  },
  {
    id: 'un-m-8', topic: 'unemployment', topicLabel: 'Unemployment', difficulty: 'medium',
    question: 'UK unemployment fell to 3.5% in 2022, a 50-year low. This was associated with:',
    options: [
      'High inflation — a labour market so tight that wage growth became inflationary',
      'Falling real wages and low consumer spending',
      'A current account surplus as exports surged',
      'Deflationary pressures from excess labour supply',
    ],
    correct: 0,
    explanation: 'Very low unemployment tightens labour markets: workers have bargaining power and can demand higher wages. In 2022, UK wage growth accelerated to 7-8% as firms competed for scarce workers — contributing to cost-push inflation. This illustrates the classic short-run Phillips Curve trade-off: low unemployment comes with inflationary pressure.',
  },

  // Inflation
  {
    id: 'inf-m-4', topic: 'inflation', topicLabel: 'Inflation', difficulty: 'medium',
    question: 'RPI (Retail Price Index) tends to be higher than CPI (Consumer Price Index) in the UK because:',
    options: [
      'RPI covers more goods and services than CPI',
      'RPI includes mortgage interest payments and council tax, which CPI excludes; RPI also uses an arithmetic mean formula that produces higher estimates',
      'RPI is updated more frequently than CPI',
      'CPI only measures goods, while RPI includes services',
    ],
    correct: 1,
    explanation: 'Key differences: RPI includes owner-occupier housing costs (mortgage interest, council tax) excluded from CPI. RPI uses the Carli formula (arithmetic mean of price relatives) which has an upward bias compared to CPI\'s geometric mean. RPI typically runs 1-2 percentage points above CPI. The ONS classifies RPI as a "legacy measure" — it no longer meets national statistics standards.',
  },
  {
    id: 'inf-m-5', topic: 'inflation', topicLabel: 'Inflation', difficulty: 'medium',
    question: 'A creditor who has lent £100,000 at a fixed nominal interest rate of 3% will be harmed if inflation unexpectedly rises to 5% because:',
    options: [
      'Higher inflation means the creditor must pay more tax on interest income',
      'The real interest rate becomes negative (-2%): the creditor receives less purchasing power back than they lent out',
      'The debtor will default because real wages have fallen',
      'The central bank will reduce nominal interest rates in response',
    ],
    correct: 1,
    explanation: 'Real interest rate = nominal rate − inflation = 3% − 5% = −2%. The creditor receives £3,000 in interest but inflation erodes the real value of the principal — in real terms, the debt is worth less when repaid. Unexpected inflation transfers wealth from creditors (savers) to debtors (borrowers). This is why pension funds and insurance companies dislike inflation.',
  },
  {
    id: 'inf-m-6', topic: 'inflation', topicLabel: 'Inflation', difficulty: 'medium',
    question: 'Cost-push inflation is harder to address with monetary policy than demand-pull inflation because:',
    options: [
      'Central banks cannot change interest rates when inflation is supply-side in origin',
      'Raising interest rates to reduce cost-push inflation would also reduce output and raise unemployment — making the trade-off between inflation and growth much more painful than with demand-pull',
      'Cost-push inflation always originates abroad and cannot be influenced by domestic policy',
      'The Bank of England only has a mandate to control demand-pull inflation',
    ],
    correct: 1,
    explanation: 'With demand-pull inflation, raising rates reduces AD, cutting both inflation and the positive output gap — relatively clean. With cost-push, SRAS has already shifted left (stagflation: high inflation + low output). Raising rates reduces AD further, compressing output even more in an already weak economy. The choice is to accept higher inflation or worsen the recession — a painful policy dilemma.',
  },
  {
    id: 'inf-m-7', topic: 'inflation', topicLabel: 'Inflation', difficulty: 'medium',
    question: 'A government indexes all benefits and public sector wages to inflation. The main risk of this policy during a supply-side shock is:',
    options: [
      'It reduces government expenditure as nominal payments are capped',
      'It can embed and perpetuate inflation — as wages and benefits rise with prices, firms face higher costs and raise prices further, potentially creating a wage-price spiral',
      'It protects the poorest households from inflation at no macroeconomic cost',
      'It always prevents hyperinflation from developing',
    ],
    correct: 1,
    explanation: 'Full indexation can be self-defeating during supply shocks: if oil prices cause a one-off price level jump, automatic wage indexation converts a temporary jump into a persistent spiral. Workers\' wages rise → firms\' costs rise → prices rise → wages indexed up again → repeat. The UK\'s 1970s experience illustrated this: union indexation contributed to double-digit inflation persisting for years.',
  },
  {
    id: 'inf-m-8', topic: 'inflation', topicLabel: 'Inflation', difficulty: 'medium',
    question: 'Which group typically benefits most from unexpected inflation?',
    options: [
      'Pensioners on fixed nominal incomes',
      'Holders of long-term fixed-interest government bonds',
      'Borrowers with fixed-rate mortgages — their debt is eroded in real terms',
      'Firms with large cash holdings',
    ],
    correct: 2,
    explanation: 'Unexpected inflation benefits debtors: the real value of their debt falls as the price level rises. A £200,000 mortgage is effectively cheaper to repay in real terms when inflation is high. This is why high inflation is sometimes described as a "transfer from savers to borrowers" — and why the government itself benefits from unexpected inflation via reduced real value of national debt.',
  },

  // Fiscal & Monetary Policy
  {
    id: 'fm-m-4', topic: 'fiscal-monetary', topicLabel: 'Fiscal & Monetary Policy', difficulty: 'medium',
    question: 'A government has a structural deficit. This means:',
    options: [
      'The deficit exists because the economy is in recession and tax revenues are temporarily depressed',
      'The deficit would persist even if the economy returned to its potential output — it is built into the government\'s spending and tax structure',
      'The deficit is caused by excessive capital investment in infrastructure',
      'The deficit is funded by quantitative easing rather than bond issuance',
    ],
    correct: 1,
    explanation: 'A structural deficit is the underlying fiscal imbalance after removing cyclical effects (automatic stabilisers). A cyclical deficit disappears as the economy recovers; a structural deficit requires active policy changes (spending cuts or tax rises) to eliminate. The OBR separates UK borrowing into structural and cyclical components — the structural element is what fiscal rules target.',
  },
  {
    id: 'fm-m-5', topic: 'fiscal-monetary', topicLabel: 'Fiscal & Monetary Policy', difficulty: 'medium',
    question: 'Monetary policy is described as "expansionary" when the Bank of England:',
    options: [
      'Raises the base rate to attract capital inflows',
      'Sells gilts to reduce the money supply',
      'Cuts the base rate and/or uses QE to lower borrowing costs and stimulate spending',
      'Increases reserve requirements for commercial banks',
    ],
    correct: 2,
    explanation: 'Expansionary (loose) monetary policy: lower interest rates reduce the cost of borrowing, stimulating investment and consumption — raising AD. QE is an additional tool when the base rate approaches zero — the Bank creates money to buy gilts, lowering long-term yields and injecting liquidity into the financial system.',
  },
  {
    id: 'fm-m-6', topic: 'fiscal-monetary', topicLabel: 'Fiscal & Monetary Policy', difficulty: 'medium',
    question: 'The main advantage of automatic fiscal stabilisers over discretionary fiscal policy is:',
    options: [
      'They can be precisely targeted at specific industries',
      'They operate immediately without time lags for political decision-making — reducing the amplitude of the business cycle automatically',
      'They always generate budget surpluses during booms',
      'They are more effective at raising long-run productive capacity',
    ],
    correct: 1,
    explanation: 'Automatic stabilisers (unemployment benefits, income tax) respond instantly to economic conditions with no recognition, decision, or implementation lag. Discretionary policy suffers from all three lags — by the time a stimulus package is implemented, the recession may already be ending. The automatic system acts as a buffer that continuously dampens the cycle.',
  },
  {
    id: 'fm-m-7', topic: 'fiscal-monetary', topicLabel: 'Fiscal & Monetary Policy', difficulty: 'medium',
    question: 'Supply-side fiscal policy differs from demand-side fiscal policy in that it aims to:',
    options: [
      'Reduce the budget deficit in all circumstances',
      'Shift the LRAS curve rightward by improving the productive capacity and efficiency of the economy, rather than boosting short-run demand',
      'Reduce inflation by cutting government spending',
      'Increase consumer spending through tax cuts',
    ],
    correct: 1,
    explanation: 'Supply-side fiscal measures (R&D tax credits, investment allowances, training subsidies, deregulation) target LRAS — they improve productivity, incentivise investment, and expand potential output. Demand-side fiscal policy (stimulus spending, income tax cuts) shifts AD. Supply-side effects are slower (years, not months) but more sustainable and non-inflationary.',
  },
  {
    id: 'fm-m-8', topic: 'fiscal-monetary', topicLabel: 'Fiscal & Monetary Policy', difficulty: 'medium',
    question: 'If the UK government increases spending by £10bn funded by borrowing, and the fiscal multiplier is 1.5, the total increase in GDP will be approximately:',
    options: ['£6.7bn', '£10bn', '£15bn', '£25bn'],
    correct: 2,
    explanation: 'Fiscal multiplier = ΔGDP / ΔG → ΔGDP = multiplier × ΔG = 1.5 × £10bn = £15bn. The multiplier effect: initial government spending creates income, which is spent by recipients, creating further income, and so on. The leakages (savings, taxes, imports) at each round determine the multiplier size.',
  },

  // International Trade
  {
    id: 'it-m-4', topic: 'international-trade', topicLabel: 'International Trade', difficulty: 'medium',
    question: 'A quota on steel imports will benefit domestic steel producers but harm domestic steel users (e.g. car manufacturers) because:',
    options: [
      'The quota raises the domestic price of steel, increasing costs for manufacturers who use steel as an input',
      'The quota reduces the quality of domestically produced steel',
      'Car manufacturers must now export more steel to compensate',
      'The quota reduces competition, forcing car manufacturers to pay higher wages',
    ],
    correct: 0,
    explanation: 'Import quotas restrict supply in the domestic market, raising the domestic price above world price. Domestic steel producers gain (higher price, protected market share) but steel-using industries face higher input costs, reducing their competitiveness. US steel tariffs (Trump 2018) demonstrated this: steel workers gained but auto manufacturers faced higher costs and some relocated production.',
  },
  {
    id: 'it-m-5', topic: 'international-trade', topicLabel: 'International Trade', difficulty: 'medium',
    question: 'If the pound depreciates by 10% against the euro, what happens to the price of German cars sold in the UK?',
    options: [
      'German car prices in pounds fall by 10%',
      'German car prices in pounds rise by approximately 10% as the pound buys fewer euros',
      'German car prices are unchanged as the price is set in euros',
      'German car prices fall as German exporters benefit from the depreciation',
    ],
    correct: 1,
    explanation: 'Depreciation: £1 buys fewer euros. If a BMW costs €40,000 and £1 = €1.25 → UK price = £32,000. After 10% depreciation, £1 = €1.125 → UK price = €40,000 / 1.125 = £35,556 — an increase of ~11%. Import prices rise with sterling depreciation — contributing to UK inflation as import costs increase.',
  },
  {
    id: 'it-m-6', topic: 'international-trade', topicLabel: 'International Trade', difficulty: 'medium',
    question: 'A country\'s current account has four components. Which correctly identifies all four?',
    options: [
      'Exports, imports, investment income, and foreign aid',
      'Trade in goods, trade in services, primary income (investment income and wages), and secondary income (transfers like foreign aid and remittances)',
      'Trade in goods, capital flows, exchange rate changes, and government borrowing',
      'Consumer spending, investment, government spending, and net exports',
    ],
    correct: 1,
    explanation: 'Current account = (1) trade in goods (visible trade balance), (2) trade in services (invisibles — e.g. financial services, tourism), (3) primary income (interest, dividends, wages from cross-border investment and employment), (4) secondary income (transfers — foreign aid, remittances, EU contributions). The UK has a goods deficit but services surplus.',
  },
  {
    id: 'it-m-7', topic: 'international-trade', topicLabel: 'International Trade', difficulty: 'medium',
    question: 'Comparative advantage theory assumes free trade benefits all countries. A key assumption that may not hold in practice is:',
    options: [
      'Countries must have different absolute levels of productivity',
      'Resources are perfectly mobile between industries — workers and capital can shift costlessly from declining to expanding sectors',
      'All countries must have the same currency',
      'Trade must be balanced between every pair of trading countries',
    ],
    correct: 1,
    explanation: 'Ricardo\'s model assumes factors of production freely move between sectors. In reality, a former coal miner cannot easily become a software engineer; a textile factory cannot be repurposed as a pharmaceutical plant overnight. Transition costs are real and concentrated — the gains from trade may be diffuse (slightly lower consumer prices) while the losses are concentrated on specific workers and regions.',
  },
  {
    id: 'it-m-8', topic: 'international-trade', topicLabel: 'International Trade', difficulty: 'medium',
    question: 'Hot money flows refer to:',
    options: [
      'Physical cash transported illegally across borders',
      'Large, short-term international capital movements seeking the highest returns from interest rate differentials or exchange rate expectations — these flows can destabilise exchange rates',
      'Long-term Foreign Direct Investment in manufacturing plants',
      'IMF emergency loans to countries facing balance of payments crises',
    ],
    correct: 1,
    explanation: 'Hot money: highly mobile speculative capital that moves rapidly between countries in response to interest rate changes or currency expectations. When UK rates are higher than US rates, hot money flows into UK, buying sterling — causing appreciation. When sentiment shifts, rapid outflows can cause sharp depreciation. Hot money flows complicate monetary policy and can trigger currency crises.',
  },

  // ─── ADDITIONAL MEDIUM QUESTIONS (BATCH 2) ───────────────────

  // Economic Problem
  {
    id: 'ep-m-9', topic: 'economic-problem', topicLabel: 'The Economic Problem', difficulty: 'medium',
    question: 'Which of the following is an example of a capital good rather than a consumer good?',
    options: [
      'A smartphone bought by a student',
      'A commercial oven purchased by a bakery to produce bread',
      'A car bought for personal use',
      'A holiday taken by a family',
    ],
    correct: 1,
    explanation: 'Capital goods are used to produce other goods and services — they are factor inputs, not final consumption. The commercial oven produces bread (output) and is thus a capital good. Investing in capital goods shifts the PPF outward by expanding productive capacity.',
  },
  {
    id: 'ep-m-10', topic: 'economic-problem', topicLabel: 'The Economic Problem', difficulty: 'medium',
    question: 'The division of labour and specialisation can increase output because:',
    options: [
      'Workers become generalists and can perform any task efficiently',
      'Each worker focuses on specific tasks, becoming faster and more skilled through repetition, allowing economies of scale',
      'Specialisation eliminates the need for trade between countries',
      'It ensures resources are equally distributed among all workers',
    ],
    correct: 1,
    explanation: 'Adam Smith\'s pin factory: specialisation raises productivity through practice, elimination of task-switching time, and the ability to use specialised tools. However, it creates interdependence — specialists must trade to obtain goods they no longer produce themselves, requiring functioning markets.',
  },
  {
    id: 'ep-m-11', topic: 'economic-problem', topicLabel: 'The Economic Problem', difficulty: 'medium',
    question: 'If two countries have identical opportunity cost ratios for producing two goods, then:',
    options: [
      'Both countries should specialise in the good they produce most cheaply in absolute terms',
      'There is no basis for mutually beneficial trade — neither country has a comparative advantage',
      'One country must still have an absolute advantage, so trade is beneficial',
      'Trade can still occur based on differences in tastes and preferences',
    ],
    correct: 1,
    explanation: 'Comparative advantage requires different opportunity cost ratios. If both countries face the same opportunity cost (e.g. both sacrifice 2 units of wheat to gain 1 unit of cloth), neither has a comparative advantage and there are no efficiency gains from specialisation. Trade may still occur due to economies of scale or consumer preference for variety (Krugman\'s New Trade Theory).',
  },

  // Supply & Demand
  {
    id: 'sd-m-9', topic: 'supply-demand', topicLabel: 'Supply & Demand', difficulty: 'medium',
    question: 'A fall in the price of raw cotton will most directly affect which curve in the textile market?',
    options: [
      'Demand for textiles — consumers buy more at lower prices',
      'Supply of textiles — lower input costs shift supply rightward, reducing equilibrium price',
      'Both supply and demand simultaneously',
      'Neither — raw material prices only affect manufacturers, not the final market',
    ],
    correct: 1,
    explanation: 'Raw cotton is an input (factor of production) for textiles. Lower input costs reduce production costs for textile firms — shifting the supply curve rightward. The equilibrium price of textiles falls and quantity rises. This is a supply-side effect, not a demand-side one.',
  },
  {
    id: 'sd-m-10', topic: 'supply-demand', topicLabel: 'Supply & Demand', difficulty: 'medium',
    question: 'The market mechanism is said to "ration" goods. This refers to:',
    options: [
      'The government distributing goods equally among consumers',
      'Prices rising until quantity demanded equals quantity supplied — only those willing and able to pay the price receive the good',
      'Firms limiting output to maintain high prices',
      'Consumers queuing for goods in short supply',
    ],
    correct: 1,
    explanation: 'The price mechanism acts as a rationing device: prices rise when demand exceeds supply, pricing out some consumers until the market clears. Unlike queuing or government allocation, price rationing allocates goods to those with the highest willingness to pay — efficient but potentially inequitable.',
  },
  {
    id: 'sd-m-11', topic: 'supply-demand', topicLabel: 'Supply & Demand', difficulty: 'medium',
    question: 'An improvement in production technology for solar panels will most likely:',
    options: [
      'Shift the demand curve for solar panels rightward',
      'Shift the supply curve rightward, reducing price and increasing quantity',
      'Shift both supply and demand rightward simultaneously',
      'Have no effect on market equilibrium',
    ],
    correct: 1,
    explanation: 'Better technology reduces production costs and allows more output from given inputs — shifting supply rightward. The equilibrium price of solar panels falls and quantity installed rises. This explains why solar panel prices have fallen 90% since 2010 as technology improved dramatically.',
  },

  // Elasticity
  {
    id: 'el-m-10', topic: 'elasticity', topicLabel: 'Elasticity', difficulty: 'medium',
    question: 'A firm raises the price of its product from £10 to £12 and quantity sold falls from 500 to 420. The PED is approximately:',
    options: ['-0.5', '-0.8', '-1.0', '-2.0'],
    correct: 1,
    explanation: '%ΔQd = (420-500)/500 × 100 = -16%. %ΔP = (12-10)/10 × 100 = +20%. PED = -16%/20% = -0.8. Inelastic demand (|PED| < 1) — total revenue rises from £5,000 to £5,040. The firm benefits from the price rise.',
  },
  {
    id: 'el-m-11', topic: 'elasticity', topicLabel: 'Elasticity', difficulty: 'medium',
    question: 'Why do goods with few close substitutes tend to have inelastic demand?',
    options: [
      'Goods with few substitutes are always produced by monopolies',
      'When prices rise, consumers cannot easily switch to an alternative — they must continue buying or go without',
      'Goods without substitutes are always necessities with high income elasticity',
      'Inelastic demand only occurs in public sector markets',
    ],
    correct: 1,
    explanation: 'The availability of substitutes is the primary determinant of PED. If close substitutes exist (e.g. Pepsi for Coca-Cola), consumers switch when price rises — elastic demand. If no substitutes exist (e.g. insulin for diabetics, petrol for most drivers in the short run), consumers must keep buying regardless of price — inelastic demand.',
  },

  // Market Failure
  {
    id: 'mf-m-9', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'medium',
    question: 'Street lighting is typically provided by local councils rather than private firms because:',
    options: [
      'Private firms cannot produce street lighting efficiently',
      'It is a public good — non-excludable (impossible to charge individual users) and non-rival (one person\'s use doesn\'t reduce availability to others)',
      'Street lighting generates negative externalities for residents',
      'Local councils can produce it at lower cost than private firms',
    ],
    correct: 1,
    explanation: 'Street lighting is the textbook public good: once lit, everyone on the street benefits whether they pay or not (non-excludable) and one person\'s use doesn\'t reduce the light available (non-rival). The free rider problem means no private firm can profitably provide it — government must step in.',
  },
  {
    id: 'mf-m-10', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'medium',
    question: 'In the market for second-hand cars, sellers know more about the quality of cars than buyers. This information asymmetry causes:',
    options: [
      'Sellers to lower prices to attract buyers',
      'Buyers to offer prices based on average car quality — which drives good cars out of the market (adverse selection)',
      'Perfect competition as buyers and sellers negotiate freely',
      'The government to regulate used car prices',
    ],
    correct: 1,
    explanation: 'Akerlof\'s "Market for Lemons": buyers can\'t distinguish good cars from bad ones, so they offer an average price. Owners of good cars reject this (their car is worth more); only sellers of bad cars accept. Buyers anticipate this and lower their offer further — a "lemons equilibrium" where trade in good-quality used cars collapses entirely.',
  },
  {
    id: 'mf-m-11', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'medium',
    question: 'Congestion on a motorway represents which type of market failure?',
    options: [
      'A negative externality — each driver slows others down, imposing time costs not reflected in the private cost of driving',
      'A public good problem — roads are non-excludable',
      'A merit good — driving is under-consumed without subsidy',
      'A monopoly — one firm controls all road capacity',
    ],
    correct: 0,
    explanation: 'Traffic congestion is a negative externality: each additional driver on a congested road slows everyone else, imposing external time and fuel costs that the individual driver does not bear. The private cost of the journey (fuel, time) understates the social cost. A congestion charge (like London\'s) is the Pigouvian solution.',
  },

  // Government Intervention
  {
    id: 'gi-m-9', topic: 'government-intervention', topicLabel: 'Government Intervention', difficulty: 'medium',
    question: 'A government offers a subsidy to private firms providing childcare. The aim is most likely to:',
    options: [
      'Reduce competition between childcare providers',
      'Correct the under-provision of a merit good — parents may undervalue the long-term educational benefits of early childcare for their children, and there are positive externalities for society',
      'Nationalise the childcare sector',
      'Raise childcare prices to attract more providers',
    ],
    correct: 1,
    explanation: 'Childcare has characteristics of a merit good: parents may under-consume for financial or information reasons, while there are positive externalities (better educational outcomes, higher female labour market participation). A subsidy shifts supply rightward, lowering price and increasing quantity toward the social optimum.',
  },
  {
    id: 'gi-m-10', topic: 'government-intervention', topicLabel: 'Government Intervention', difficulty: 'medium',
    question: 'Privatisation of a state-owned utility is argued to improve efficiency because:',
    options: [
      'Private firms always charge lower prices than public firms',
      'Private ownership introduces profit incentive and competitive pressure, which drives cost minimisation and innovation',
      'Privatisation always increases government revenue indefinitely',
      'Private firms are not subject to regulation',
    ],
    correct: 1,
    explanation: 'The efficiency case for privatisation: private firms face a hard budget constraint (losses lead to bankruptcy) and shareholder pressure to maximise returns — incentivising cost efficiency and innovation. State firms may have soft budget constraints (government bail-outs) and political objectives that reduce efficiency. However, if the privatised firm becomes a private monopoly without effective regulation, consumer welfare may worsen.',
  },
  {
    id: 'gi-m-11', topic: 'government-intervention', topicLabel: 'Government Intervention', difficulty: 'medium',
    question: 'A specific tax of £2 per unit is placed on a product. If the demand is perfectly inelastic, the entire tax burden falls on:',
    options: [
      'Producers — they absorb the full tax in lower profits',
      'Consumers — they pay the full £2 per unit as a higher price',
      'Equally between producers and consumers',
      'The government directly, as it sets the tax',
    ],
    correct: 1,
    explanation: 'With perfectly inelastic demand, consumers buy the same quantity regardless of price. Producers simply add the full tax to the price and consumers pay it entirely. There is no quantity reduction and no deadweight loss — the tax is a pure transfer from consumers to government. This is the extreme case used to illustrate the elasticity-incidence relationship.',
  },

  // Market Structures
  {
    id: 'ms-m-10', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'medium',
    question: 'A firm in monopolistic competition earns supernormal profit in the short run. In the long run we expect:',
    options: [
      'The firm to expand output until supernormal profits disappear',
      'New firms to enter the market, attracted by the profits, competing away supernormal profit until normal profit remains',
      'The firm to merge with competitors to protect its profits',
      'The government to impose a windfall tax',
    ],
    correct: 1,
    explanation: 'Monopolistic competition has low barriers to entry. Supernormal short-run profits attract entrants with differentiated products. As more substitutes become available, the original firm\'s demand curve shifts left and becomes more elastic, until price equals average cost and only normal profit is earned — long-run equilibrium.',
  },
  {
    id: 'ms-m-11', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'medium',
    question: 'The Lerner Index of monopoly power is calculated as (P - MC) / P. A value of 0 indicates:',
    options: [
      'Maximum monopoly power',
      'Perfect competition — price equals marginal cost',
      'The firm is making a loss',
      'The firm has a 100% market share',
    ],
    correct: 1,
    explanation: 'The Lerner Index measures the mark-up above marginal cost as a proportion of price. In perfect competition, P = MC, so (P - MC)/P = 0 — no monopoly power. A pure monopolist has Lerner Index = 1/|PED|: the higher the index (closer to 1), the greater the market power and the larger the welfare loss.',
  },

  // Macro Objectives
  {
    id: 'mo-m-9', topic: 'macro-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'medium',
    question: 'Real GDP differs from nominal GDP in that real GDP:',
    options: [
      'Measures the value of goods produced only in the manufacturing sector',
      'Adjusts for price level changes using a price deflator, allowing comparison of output across different years without the distortion of inflation',
      'Includes the value of unpaid domestic work and volunteering',
      'Is always larger than nominal GDP',
    ],
    correct: 1,
    explanation: 'Nominal GDP measures output at current prices — it rises with both actual production and inflation. Real GDP strips out inflation using a price deflator (base year prices), showing changes in actual physical output. If nominal GDP rises 5% but inflation is 4%, real GDP has only grown 1% — a crucial distinction for policy assessment.',
  },
  {
    id: 'mo-m-10', topic: 'macro-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'medium',
    question: 'The "natural rate of unemployment" is not zero because:',
    options: [
      'Governments always create some unemployment through high taxes',
      'Some unemployment is structural and frictional — it persists even when the labour market is in equilibrium, as workers search for jobs and some have skills mismatched to vacancies',
      'Central banks maintain unemployment above zero to control inflation',
      'Trade unions prevent wages from falling to market-clearing levels',
    ],
    correct: 1,
    explanation: 'The natural rate (NAIRU) = frictional + structural unemployment. Even in a healthy economy at full employment, workers are always transitioning between jobs (frictional) and some lack skills for available vacancies (structural). The goal of demand management is to keep cyclical unemployment at zero — not to eliminate the natural rate, which requires supply-side intervention.',
  },
  {
    id: 'mo-m-11', topic: 'macro-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'medium',
    question: 'If the UK\'s productivity growth is consistently lower than its major trading partners, the long-run consequence is likely to be:',
    options: [
      'A strengthening pound as investors seek safer UK assets',
      'A gradual deterioration in UK export competitiveness and a worsening current account, unless offset by currency depreciation',
      'Higher wages for UK workers as firms compete for scarce labour',
      'An improvement in the UK\'s terms of trade',
    ],
    correct: 1,
    explanation: 'Productivity growth drives long-run competitiveness. If UK firms\' costs rise faster than rivals\' (due to lower productivity growth), UK exports become more expensive — losing market share. This worsens the current account and may eventually force currency depreciation to restore competitiveness. The UK\'s "productivity puzzle" since 2008 has been associated with persistently weak export growth.',
  },

  // AD-AS
  {
    id: 'adas-m-9', topic: 'ad-as', topicLabel: 'AD-AS Model', difficulty: 'medium',
    question: 'A negative output gap means:',
    options: [
      'The economy is growing faster than its long-run trend rate',
      'Actual GDP is below potential GDP — the economy has spare capacity and unemployment above the natural rate',
      'The government is running a budget deficit',
      'Inflation is below the 2% target',
    ],
    correct: 1,
    explanation: 'A negative (deflationary) output gap: actual output < potential output. Labour and capital are underutilised — unemployment is above the natural rate and inflation typically falls below target. This creates the case for expansionary fiscal or monetary policy to close the gap.',
  },
  {
    id: 'adas-m-10', topic: 'ad-as', topicLabel: 'AD-AS Model', difficulty: 'medium',
    question: 'The accelerator theory of investment states that:',
    options: [
      'Investment accelerates whenever interest rates fall',
      'Investment is driven by changes in the level of output — firms invest when demand is growing to expand capacity, and cut investment when demand growth slows',
      'Higher investment always accelerates economic growth in the following year',
      'Firms accelerate investment ahead of anticipated interest rate rises',
    ],
    correct: 1,
    explanation: 'The accelerator: investment (in new capital) depends on the rate of change of output (ΔY), not the level. Growing demand requires expanding capacity. When GDP growth slows — even if GDP is still rising — investment can collapse. This amplifies the business cycle: a slowdown in growth (not a recession) can trigger sharp investment falls.',
  },
  {
    id: 'adas-m-11', topic: 'ad-as', topicLabel: 'AD-AS Model', difficulty: 'medium',
    question: 'Net exports (X - M) in the AD equation will increase when:',
    options: [
      'Domestic income rises, increasing import spending',
      'The domestic currency appreciates, making exports more competitive',
      'Domestic inflation is higher than in trading partners, reducing export competitiveness',
      'UK interest rates fall relative to overseas, weakening sterling and making exports cheaper abroad',
    ],
    correct: 3,
    explanation: 'Lower UK rates relative to overseas → sterling weakens (less hot money inflow) → UK exports become cheaper for foreign buyers → export volumes rise. Simultaneously, imports become more expensive, reducing import volumes. Net exports (X - M) improve, shifting AD rightward.',
  },

  // Unemployment
  {
    id: 'un-m-9', topic: 'unemployment', topicLabel: 'Unemployment', difficulty: 'medium',
    question: 'The "discouraged worker effect" refers to:',
    options: [
      'Workers who take lower-skilled jobs than their qualifications justify',
      'People who have stopped actively looking for work after repeated failures to find jobs — they are not counted in official unemployment statistics',
      'Workers who are employed part-time but want full-time work',
      'Young people who delay entering the labour market to continue education',
    ],
    correct: 1,
    explanation: 'Discouraged workers drop out of the labour force after extended unsuccessful job searching. Since unemployment statistics require active job seeking, discouraged workers are classified as economically inactive — not unemployed. This means official unemployment figures can understate the true extent of joblessness during deep recessions.',
  },
  {
    id: 'un-m-10', topic: 'unemployment', topicLabel: 'Unemployment', difficulty: 'medium',
    question: 'Underemployment occurs when:',
    options: [
      'Workers are paid below the minimum wage',
      'People are working fewer hours than they desire, or in jobs below their skill level — a form of labour market slack not captured in headline unemployment',
      'The unemployment rate exceeds 10%',
      'Workers are employed in declining industries',
    ],
    correct: 1,
    explanation: 'Underemployment captures labour market weakness beyond unemployment: part-time workers wanting full-time hours, overqualified workers in low-skill jobs, zero-hours contract workers with few guaranteed hours. After 2008, UK headline unemployment recovered faster than economic output because of rising underemployment — the economy was weaker than unemployment alone suggested.',
  },

  // Inflation
  {
    id: 'inf-m-9', topic: 'inflation', topicLabel: 'Inflation', difficulty: 'medium',
    question: 'The "base effect" can cause misleading interpretation of annual inflation figures. This refers to:',
    options: [
      'The effect of central bank base rate changes on inflation',
      'When inflation appears high or low largely because the comparison period (12 months ago) had an unusually low or high price level — rather than genuine new price pressure',
      'The effect of a country\'s economic size on its inflation rate',
      'The minimum level of inflation required for economic growth',
    ],
    correct: 1,
    explanation: 'Base effect: annual inflation compares today\'s prices with 12 months ago. If prices fell sharply last year, this year\'s comparison makes inflation look high even with no new price pressures. In 2021, headline inflation surged partly because it was compared against the COVID price crash of 2020. Economists adjust for base effects to identify genuine inflationary momentum.',
  },
  {
    id: 'inf-m-10', topic: 'inflation', topicLabel: 'Inflation', difficulty: 'medium',
    question: 'Imported inflation occurs when:',
    options: [
      'The government imports economic policy from other countries',
      'Rising world commodity prices or currency depreciation raises the cost of imported goods, pushing up the domestic price level',
      'Other countries\' inflation is imported through trade agreements',
      'Inflation rises when the UK imports more consumer goods',
    ],
    correct: 1,
    explanation: 'Imported inflation: the UK imports around 25-30% of the goods it consumes. When world commodity prices rise (oil, food, metals) or sterling depreciates, import prices increase — raising the cost of inputs for UK firms and consumer goods prices directly. The 2022 UK inflation surge was partly imported: Ukraine war raised global energy and food prices.',
  },

  // Fiscal & Monetary
  {
    id: 'fm-m-9', topic: 'fiscal-monetary', topicLabel: 'Fiscal & Monetary Policy', difficulty: 'medium',
    question: 'The Bank Rate (base rate) affects consumer spending primarily through which mechanism?',
    options: [
      'It directly determines the price of goods in shops',
      'Changes in the base rate feed through to commercial banks\' lending rates — affecting mortgage costs, credit card rates, and business loan rates, changing the cost and availability of borrowing',
      'The base rate controls the money supply by setting how much banks must hold in reserve',
      'It directly influences government spending decisions',
    ],
    correct: 1,
    explanation: 'Transmission mechanism: Bank Rate → commercial bank rates → mortgage/loan costs → consumer spending and investment. A base rate rise makes borrowing more expensive and saving more attractive — reducing consumption and investment, dampening AD. The effect is gradual, taking 18-24 months to fully work through the economy.',
  },
  {
    id: 'fm-m-10', topic: 'fiscal-monetary', topicLabel: 'Fiscal & Monetary Policy', difficulty: 'medium',
    question: 'A progressive income tax system acts as an automatic stabiliser during a boom because:',
    options: [
      'The government raises tax rates during booms to prevent overheating',
      'As incomes rise during a boom, a larger proportion is taken in tax — automatically dampening the rise in disposable income and consumer spending without any policy change',
      'Progressive taxation increases investment incentives during booms',
      'Higher taxes during booms reduce the government\'s structural deficit',
    ],
    correct: 1,
    explanation: 'Automatic stabilisation: in a boom, rising incomes push more people into higher tax brackets and increase total tax take proportionally more than income rises. This automatically reduces disposable income growth, dampening consumption and moderating the expansion — without any active government decision. In recession, the reverse happens.',
  },
  {
    id: 'fm-m-11', topic: 'fiscal-monetary', topicLabel: 'Fiscal & Monetary Policy', difficulty: 'medium',
    question: 'The government announces a £50bn infrastructure investment programme. Which factor would reduce the fiscal multiplier effect of this spending?',
    options: [
      'High consumer confidence at the time of the announcement',
      'A high marginal propensity to import — much of the spending "leaks" abroad rather than circulating in the domestic economy',
      'Low interest rates that make private investment cheap',
      'The investment being focused on renewable energy',
    ],
    correct: 1,
    explanation: 'The multiplier is reduced by leakages: savings, taxes, and imports. A high marginal propensity to import means each round of extra income is partly spent on foreign goods — that spending doesn\'t generate further domestic income. The UK\'s relatively high import propensity (~28% of GDP) means fiscal multipliers tend to be smaller than in more closed economies.',
  },

  // International Trade
  {
    id: 'it-m-9', topic: 'international-trade', topicLabel: 'International Trade', difficulty: 'medium',
    question: 'A country\'s terms of trade improve when:',
    options: [
      'The volume of exports rises relative to imports',
      'Export prices rise relative to import prices — meaning each unit of exports buys more imports',
      'The current account deficit narrows',
      'The country joins a free trade area',
    ],
    correct: 1,
    explanation: 'Terms of trade = (Index of export prices / Index of import prices) × 100. Improvement: export prices rise faster (or fall slower) than import prices — the country gets more imports per unit of exports. Deterioration: imports become relatively more expensive. Oil-importing countries suffered terms of trade deterioration after 2022 when energy prices surged.',
  },
  {
    id: 'it-m-10', topic: 'international-trade', topicLabel: 'International Trade', difficulty: 'medium',
    question: 'Foreign Direct Investment (FDI) differs from portfolio investment in that FDI:',
    options: [
      'Only flows from developed to developing countries',
      'Involves a controlling stake in a foreign firm or the establishment of operations abroad — it is long-term and represents real economic activity, unlike portfolio investment which is purely financial',
      'Cannot be withdrawn in a crisis, making it less volatile than portfolio flows',
      'Is recorded on the current account of the balance of payments',
    ],
    correct: 1,
    explanation: 'FDI (e.g. Toyota building a factory in the UK, Amazon opening a warehouse) creates real productive capacity and employment — long-term commitment. Portfolio investment (buying foreign shares or bonds) is purely financial and more easily reversed. FDI is generally considered more stable and beneficial to the host country than hot money portfolio flows.',
  },
  {
    id: 'it-m-11', topic: 'international-trade', topicLabel: 'International Trade', difficulty: 'medium',
    question: 'The World Trade Organization (WTO) promotes free trade by:',
    options: [
      'Setting maximum tariff levels for all member countries',
      'Providing a rules-based framework for international trade, negotiating tariff reductions, and providing a dispute resolution mechanism when countries break agreed rules',
      'Lending money to countries with balance of payments deficits',
      'Fixing exchange rates between member countries',
    ],
    correct: 1,
    explanation: 'The WTO (successor to GATT) provides the legal framework governing international trade: it negotiates multilateral tariff reductions, sets rules on subsidies and dumping, and adjudicates trade disputes between member countries (e.g. US-China trade disputes). It does not fix exchange rates (IMF territory) or lend money (World Bank/IMF territory).',
  },

  // ─── FINAL MEDIUM TOP-UP ────────────────────────────────────

  {
    id: 'ep-m-12', topic: 'economic-problem', topicLabel: 'The Economic Problem', difficulty: 'medium',
    question: 'A government spends £500m on a new hospital. The opportunity cost of this decision is best described as:',
    options: [
      '£500m in cash held by the Treasury',
      'The next-best alternative use of the £500m — e.g. the school buildings or transport links that cannot now be funded',
      'The cost of construction materials used',
      'The tax revenue foregone by not taxing hospital profits',
    ],
    correct: 1,
    explanation: 'Opportunity cost is the value of the best alternative foregone. The £500m spent on the hospital cannot simultaneously be spent on schools, roads, or tax cuts. Economists insist on thinking in terms of trade-offs: every public spending decision crowds out something else, even if not directly visible.',
  },
  {
    id: 'sd-m-12', topic: 'supply-demand', topicLabel: 'Supply & Demand', difficulty: 'medium',
    question: 'Consumer surplus is the difference between:',
    options: [
      'The price consumers pay and the cost of production',
      'The maximum price consumers are willing to pay and the actual market price — it measures the welfare gain from being able to buy at the market price',
      'Total consumer spending and total producer revenue',
      'The quantity demanded and the quantity supplied at equilibrium',
    ],
    correct: 1,
    explanation: 'Consumer surplus = area below the demand curve and above the market price. It represents the total benefit consumers receive beyond what they pay — a measure of consumer welfare. Policies that raise prices (tariffs, monopoly pricing) reduce consumer surplus; lower prices (subsidies, competition) increase it.',
  },
  {
    id: 'mf-m-12', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'medium',
    question: 'The problem of "rational ignorance" in political markets means:',
    options: [
      'Politicians are deliberately ignorant of economic evidence',
      'Voters have little incentive to become fully informed about complex policies because their individual vote has negligible influence on the outcome — making government intervention less effective',
      'Consumers are rational about all economic decisions except voting',
      'Governments can exploit voter ignorance to pursue special interests',
    ],
    correct: 1,
    explanation: 'Rational ignorance (public choice theory): becoming fully informed about all policy issues is costly (time, effort) for individual voters whose single vote is essentially powerless. Voters rationally remain ignorant of complex policies, making them susceptible to lobbying and political packaging — a key government failure mechanism.',
  },
  {
    id: 'mo-m-12', topic: 'macro-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'medium',
    question: 'A country has GDP growth of 3%, inflation of 4%, and unemployment of 5%. Which objective is currently being missed?',
    options: [
      'Economic growth — 3% is too low',
      'Low inflation — CPI of 4% exceeds the typical 2% target',
      'Low unemployment — 5% is too high',
      'All three objectives are being missed simultaneously',
    ],
    correct: 1,
    explanation: 'With CPI at 4% vs a typical 2% target, the inflation objective is being missed. Growth at 3% is generally considered healthy (above trend for most developed economies) and unemployment at 5% is broadly near the natural rate. The central bank would likely be considering rate rises to bring inflation back to target.',
  },
  {
    id: 'un-m-11', topic: 'unemployment', topicLabel: 'Unemployment', difficulty: 'medium',
    question: 'Which supply-side policy is most targeted at reducing structural unemployment caused by deindustrialisation?',
    options: [
      'Cutting interest rates to boost business investment',
      'Government-funded retraining and reskilling programmes to help workers move into growing sectors',
      'Increasing unemployment benefit payments to support affected workers',
      'Devaluing the currency to make manufacturing exports more competitive',
    ],
    correct: 1,
    explanation: 'Structural unemployment results from skills mismatches — redundant steel workers cannot immediately become software developers. Retraining programmes directly address this by giving workers marketable skills in growing industries. Demand-side policies cannot fix a skills mismatch; they create jobs but not necessarily the right jobs for the affected workers.',
  },
  {
    id: 'it-m-12', topic: 'international-trade', topicLabel: 'International Trade', difficulty: 'medium',
    question: 'A country running a persistent current account deficit is likely to experience which long-run pressure on its currency?',
    options: [
      'Appreciation — as exporters receive foreign currency and convert it to domestic currency',
      'Depreciation — net outflows of currency to pay for excess imports create persistent selling pressure on the domestic currency',
      'No change — balance of payments always self-equilibrates immediately',
      'Appreciation — higher import prices reduce demand for imports, restoring balance',
    ],
    correct: 1,
    explanation: 'A current account deficit means more domestic currency is sold to buy foreign currency for imports than is received from exports. This persistent net selling pressure depreciates the currency over time — which is the automatic market mechanism that eventually corrects trade imbalances (making exports cheaper and imports dearer). However, financial account inflows can offset this pressure for prolonged periods.',
  },

  // ─── 50+ HARD EXTENSION QUESTIONS (MULTI-SELECT + 5-6 OPTIONS) ────────────────

  // MARKET FAILURE

  {
    id: 'mf-h-10', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'hard',
    question: 'In a negative externality diagram, what does the deadweight welfare loss triangle represent?',
    options: [
      'The tax revenue collected by the government to correct the externality',
      'The net social cost imposed on third parties by the market',
      'Output overproduced in the free market where social cost exceeds social benefit — avoidable net welfare loss',
      'The loss of producer surplus when a Pigouvian tax is imposed',
      'The external cost per unit at the free-market equilibrium output',
    ],
    correct: 2,
    explanation: 'The DWL triangle (between free-market output and social optimum) represents transactions where private benefit > private cost but social cost > social benefit — avoidable net welfare loss. The tax itself is a transfer, not a loss; the external cost per unit is the vertical gap between SMC and PMC, not the triangle.',
  },
  {
    id: 'mf-h-11', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'hard',
    type: 'multi',
    question: 'Which TWO conditions are required for the Coase theorem to achieve an efficient outcome without government intervention? Select ALL correct answers.',
    options: [
      'Property rights must be clearly defined and enforceable',
      'The government must set the correct Pigouvian tax rate',
      'Transaction costs of bargaining must be negligible',
      'Both parties must have symmetric market power',
      'The externality must be negative, not positive',
    ],
    correct: [0, 2],
    explanation: 'The Coase theorem requires: (1) well-defined property rights and (2) negligible transaction costs. If both hold, private bargaining produces the efficient outcome regardless of who holds the rights — government intervention is unnecessary. Symmetric power and externality type are irrelevant to Coase.',
  },
  {
    id: 'mf-h-12', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'hard',
    type: 'multi',
    question: 'Which TWO of the following are pure public goods (non-excludable AND non-rival)? Select ALL correct answers.',
    options: [
      'A national defence system',
      'A toll motorway at off-peak times',
      'Flood defence barriers protecting a coastal town',
      'A crowded public park (no entry fee)',
      'Free-to-air broadcast television',
    ],
    correct: [0, 2],
    explanation: 'National defence and flood defences are classic pure public goods — no one can be excluded and one person\'s consumption does not reduce availability for others. A toll motorway is excludable. A crowded park is rival (congestion). Free-to-air TV can technically be scrambled (excludable), making it a quasi-public good.',
  },
  {
    id: 'mf-h-13', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'hard',
    question: 'A Pigouvian tax set equal to the marginal external cost at the social optimum will:',
    options: [
      'Always raise sufficient revenue to compensate those harmed by the externality',
      'Internalise the externality so the firm\'s PMC equals SMC at the socially optimal output',
      'Eliminate all deadweight loss only if demand is perfectly inelastic',
      'Cause greater welfare loss than the original externality in markets with high supply elasticity',
      'Only be effective if combined with a tradeable permit scheme',
    ],
    correct: 1,
    explanation: 'A correctly calibrated Pigouvian tax shifts PMC up to SMC, so the profit-maximising output coincides with the social optimum. Revenue going to victims is a separate policy choice; DWL is eliminated at any elasticity; and Pigouvian taxes are standalone instruments.',
  },
  {
    id: 'mf-h-14', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'hard',
    question: 'Government failure in carbon taxation most likely occurs when:',
    options: [
      'Tax revenue is used to fund green infrastructure investments',
      'The marginal cost of administration exceeds the efficiency gain from correcting the externality',
      'Firms pass the full tax onto consumers through higher prices',
      'The tax is set below the true marginal external cost due to imperfect information',
      'International firms also face the same carbon pricing scheme',
    ],
    correct: 1,
    explanation: 'Government failure arises when the intervention itself creates more harm than the original market failure. If administrative costs, unintended incentives, or regulatory capture mean net welfare gain is negative, the policy is itself a source of inefficiency. Setting the tax below MEC (D) is measurement error causing under-correction — a different issue.',
  },
  {
    id: 'mf-h-15', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'hard',
    type: 'multi',
    question: 'Which TWO are advantages of a cap-and-trade scheme over a simple carbon tax? Select ALL correct answers.',
    options: [
      'The government receives more revenue than from an equivalent tax',
      'The total quantity of emissions is fixed with certainty — firms cannot collectively exceed the cap',
      'Firms with the lowest abatement costs make the most reductions, achieving the target at minimum total cost',
      'It eliminates price uncertainty for firms, making investment planning easier',
      'It automatically adjusts to economic conditions without any policy action',
    ],
    correct: [1, 2],
    explanation: 'Cap-and-trade advantages: (B) quantity certainty — unlike a tax, the cap fixes the total. (C) cost efficiency — permit prices equalise marginal abatement costs across firms so cheapest reductions happen first. A tax gives price certainty but uncertain quantity; cap-and-trade gives quantity certainty but volatile permit prices.',
  },
  {
    id: 'mf-h-16', topic: 'market-failure', topicLabel: 'Market Failure', difficulty: 'hard',
    question: 'Which BEST explains why free markets systematically undersupply vaccination programmes?',
    options: [
      'Vaccines are public goods — non-rival and non-excludable — so producers cannot charge, causing free-riding',
      'Vaccines are normal goods with low income elasticity, so demand is insufficient',
      'Vaccines are merit goods with a positive externality (herd immunity): private demand understates social demand, so the free market produces below the social optimum',
      'Pharmaceutical patent protection restricts supply, raising prices above the social optimum',
      'Government safety regulations raise production costs above the competitive price',
    ],
    correct: 2,
    explanation: 'Vaccines generate positive externalities — herd immunity benefits non-vaccinated people. Private demand reflects only personal benefit; social demand adds external benefit to third parties. Free market equates MPB = MPC, below MSB = MSC. This is why governments subsidise or mandate vaccination. Vaccines are not pure public goods — you can be excluded from private vaccination.',
  },

  // MARKET STRUCTURES

  {
    id: 'ms-h-10', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'hard',
    question: 'Under third-degree price discrimination, which condition is NOT required?',
    options: [
      'The firm must have market power (price-making ability)',
      'The firm must be able to identify and separate the markets',
      'Price elasticity of demand must differ between groups',
      'The firm must operate under conditions of decreasing marginal costs',
      'Resale or arbitrage between groups must be prevented',
    ],
    correct: 3,
    explanation: 'Third-degree price discrimination requires: (1) price-setting power, (2) ability to segment markets, (3) different PEDs between groups, and (4) prevention of arbitrage. Decreasing marginal costs are irrelevant — a monopolist can price-discriminate with any MC shape.',
  },
  {
    id: 'ms-h-11', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'hard',
    question: 'In a two-firm Prisoner\'s Dilemma, both firms produce Nash equilibrium output rather than the joint-profit-maximising cartel output because:',
    options: [
      'Both firms have identical cost structures, making cooperation redundant',
      'Each firm has a dominant strategy to expand output regardless of the rival\'s choice — unilateral defection is always more profitable',
      'Regulatory authorities impose output floors preventing firms from restricting supply',
      'The cartel output always falls on the inelastic portion of the demand curve',
      'Consumer preferences shift when firms restrict output, reducing demand',
    ],
    correct: 1,
    explanation: 'In the Prisoner\'s Dilemma, expanding output (defecting) is a dominant strategy — it yields higher profit whether the rival colludes or defects. This drives both firms to the Nash equilibrium, which is collectively sub-optimal. Each firm always has an individual incentive to cheat on the cartel, making the cooperative outcome unstable.',
  },
  {
    id: 'ms-h-12', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'hard',
    type: 'multi',
    question: 'Which TWO features characterise a perfectly contestable market? Select ALL correct answers.',
    options: [
      'A large number of firms currently operating in the market',
      'Zero sunk costs so firms can exit without irreversible loss',
      'Economies of scale that prevent new entrants from competing on cost',
      'Perfectly free entry and exit with no barriers',
      'Government ownership of key infrastructure',
    ],
    correct: [1, 3],
    explanation: 'Baumol\'s contestability theory (1982) requires free entry and exit AND zero sunk costs — so hit-and-run entry disciplines incumbent pricing even if only one firm operates. Many firms are not required; a monopoly can be contestable. Economies of scale (C) would be a barrier, contradicting contestability.',
  },
  {
    id: 'ms-h-13', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'hard',
    question: 'A natural monopoly exists where:',
    options: [
      'A single firm holds a government-granted exclusive licence to operate',
      'The long-run average cost curve is still declining at the output satisfying entire market demand, so one firm produces cheaper than two or more',
      'The firm produces a good with no close substitutes, giving absolute monopoly power',
      'Fixed costs are high and variable costs are low, inevitably producing supernormal profits',
      'The industry is nationalised and operated by the state',
    ],
    correct: 1,
    explanation: 'Natural monopoly arises from sub-additive costs — the cost structure means one firm can serve total market demand cheaper than any combination of smaller firms, because LRAC is still falling at the market output level. This distinguishes it from a legal monopoly (government licence), which may not have this cost structure.',
  },
  {
    id: 'ms-h-14', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'hard',
    question: 'In monopolistic competition, long-run equilibrium involves:',
    options: [
      'Supernormal profits, as product differentiation insulates firms from competition',
      'Normal profit with P = MC = AC, identical to perfect competition',
      'Normal profit, but P > MC and the firm operates at excess capacity — the "tangency solution"',
      'Zero economic profit because the market is perfectly contestable',
      'Supernormal profit because free entry is blocked by product differentiation',
    ],
    correct: 2,
    explanation: 'Free entry eliminates supernormal profits so AR = AC (tangency). But each firm faces a downward-sloping demand curve, so the tangency is on the falling AC — P > MC (allocative inefficiency) and output is below minimum efficient scale (excess capacity). This is Chamberlin\'s "waste of monopolistic competition".',
  },
  {
    id: 'ms-h-15', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'hard',
    question: 'The kinked demand curve (Sweezy, 1939) predicts price rigidity because the firm\'s MR curve has a vertical discontinuity. This discontinuity arises because:',
    options: [
      'Firms collude tacitly to maintain stable prices, so MR does not change with price',
      'Demand is perfectly inelastic at the prevailing price, making MR zero',
      'Above the kink demand is elastic (rivals don\'t follow price rises); below it is inelastic (rivals match cuts) — creating a gap in the MR schedule at the kink point',
      'The firm operates as a price-taker above the kink and a price-maker below',
      'Government regulation imposes a price floor at the kink point',
    ],
    correct: 2,
    explanation: 'Two-segment demand (elastic above kink, inelastic below) generates two different MR segments with a vertical gap at the kink. As long as MC passes through this gap, the profit-maximising output is unchanged by moderate cost shifts — explaining why oligopolists rarely change price in response to cost shocks.',
  },
  {
    id: 'ms-h-16', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'hard',
    type: 'multi',
    question: 'Which TWO regulatory approaches achieve allocative efficiency (P = MC) for a natural monopoly but may cause the firm to make a loss? Select ALL correct answers.',
    options: [
      'Average cost pricing (P = AC)',
      'Marginal cost pricing (P = MC)',
      'Rate-of-return regulation (setting a permitted profit margin)',
      'An RPI – X price cap formula',
      'Nationalisation with a statutory requirement to set P = MC',
    ],
    correct: [1, 4],
    explanation: 'For a natural monopoly, LRAC is still declining at the market output. At P = MC, price lies below AC — the firm makes a loss requiring taxpayer subsidy. Both strict marginal cost pricing (B) and a nationalised firm mandated to P = MC (E) face this problem. Average cost pricing (A) achieves normal profit but P > MC (allocatively inefficient). RPI–X caps limit price increases without forcing P = MC.',
  },
  {
    id: 'ms-h-17', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'hard',
    question: 'Limit pricing involves an incumbent setting price below the short-run profit-maximising level in order to:',
    options: [
      'Satisfy the CMA that no abuse of dominance is occurring',
      'Deter entry by signalling that post-entry prices will be unprofitable — typically by setting price at or below a potential entrant\'s average cost',
      'Maximise long-run profits by building market share at the expense of short-run margins',
      'Avoid triggering an investigation under the Competition Act 1998',
      'Maintain collusive equilibrium in a Bertrand duopoly',
    ],
    correct: 1,
    explanation: 'Limit pricing (Bain, 1956) deters entry by making the market appear unattractive. If the incumbent can credibly commit to maintaining output post-entry, the entrant faces below-expected prices and may find entry unprofitable. It works best when the incumbent has significant cost advantages via economies of scale.',
  },
  {
    id: 'ms-h-18', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'hard',
    type: 'multi',
    question: 'Which TWO are examples of predatory pricing the CMA would investigate as potential abuse of dominance? Select ALL correct answers.',
    options: [
      'A supermarket pricing below average variable cost in a specific region to drive out a new entrant',
      'A firm lowering prices due to genuine cost reductions from economies of scale',
      'An airline cutting fares on routes where a new budget carrier just launched — funded by monopoly route profits — with fares rising again after the entrant exits',
      'A firm accepting lower margins to win a public sector contract in a competitive tender',
      'A dominant broadband provider bundling streaming content at no extra charge',
    ],
    correct: [0, 2],
    explanation: 'Predatory pricing = pricing below cost with intent to exclude rivals, then raising prices once they exit. Option A (below AVC, targeted region) and Option C (below-cost on entry routes, cross-subsidised, reversed post-exit) show the classic predation pattern. Option B is legitimate cost-based competition. Option D is competitive bidding. Option E (tying/bundling) is a separate potential abuse.',
  },
  {
    id: 'ms-h-19', topic: 'market-structures', topicLabel: 'Market Structures', difficulty: 'hard',
    question: 'A firm practising first-degree (perfect) price discrimination will:',
    options: [
      'Produce the same output as a single-price monopolist',
      'Produce the perfectly competitive output (P = MC), converting all consumer surplus to producer surplus, with zero deadweight loss',
      'Produce below the competitive level to maximise total revenue across all consumer groups',
      'Always generate negative welfare effects because consumer surplus is entirely eliminated',
      'Only operate where demand is perfectly inelastic',
    ],
    correct: 1,
    explanation: 'Perfect price discrimination charges every consumer their maximum willingness to pay. MR = AR = demand curve for each unit, so MR = MC is satisfied at every point — production continues to the competitive output level. There is no DWL, but all consumer surplus is converted to producer surplus. Efficient but inequitable.',
  },

  // LABOUR MARKETS

  {
    id: 'lm-h-10', topic: 'labour-markets', topicLabel: 'Labour Markets', difficulty: 'hard',
    question: 'Compared to a competitive labour market, a monopsonist will:',
    options: [
      'Pay a higher wage and employ more workers, attracting the best talent',
      'Pay the same wage but employ fewer workers to maintain profits',
      'Pay a lower wage and employ fewer workers than the competitive equilibrium, creating a deadweight welfare loss',
      'Pay a lower wage but employ the competitive level of workers, exploiting only on wages',
      'Pay a higher wage because it must raise the wage for all existing workers when hiring one more',
    ],
    correct: 2,
    explanation: 'The monopsonist faces an upward-sloping labour supply and MLC above the supply curve. MRP = MLC gives employment below the competitive level; the wage is read off the supply curve at that employment level — below the competitive wage. The gap between MRP and wage, times the employment shortfall, is the deadweight welfare loss.',
  },
  {
    id: 'lm-h-11', topic: 'labour-markets', topicLabel: 'Labour Markets', difficulty: 'hard',
    type: 'multi',
    question: 'Which TWO factors would REDUCE the predicted job losses from a minimum wage set above the competitive equilibrium? Select ALL correct answers.',
    options: [
      'High price elasticity of demand for the product workers produce',
      'Monopsony power held by employers in the labour market',
      'Labour wages being a large proportion of total firm costs',
      'Low price elasticity of demand for the product workers produce',
      'The minimum wage being set far above the market wage',
    ],
    correct: [1, 3],
    explanation: 'In monopsony, a minimum wage can actually INCREASE both wages and employment up to the competitive level — standard unemployment predictions don\'t apply. Low product demand elasticity lets firms pass cost increases as higher prices without large sales falls, so they don\'t cut labour. High labour cost share (C) increases job losses. High product elasticity means more jobs lost as price rises reduce sales.',
  },
  {
    id: 'lm-h-12', topic: 'labour-markets', topicLabel: 'Labour Markets', difficulty: 'hard',
    question: 'In the bilateral monopoly model (trade union facing a monopsonist), the wage outcome is:',
    options: [
      'Uniquely determined at the intersection of the MRP and MLC curves',
      'Indeterminate within a range — the final outcome depends on relative bargaining power of union and employer',
      'Always equal to the competitive equilibrium, since the two monopolies cancel out',
      'Always equal to the monopsony wage, since employers retain all pricing power',
      'Determined solely by the elasticity of labour supply in that occupation',
    ],
    correct: 1,
    explanation: 'With bilateral monopoly, the union pushes for a higher wage and the monopsonist pushes for the monopsony wage. Economic theory cannot predict the outcome — it falls somewhere in the bargaining range depending on strike threats, union density, dispute costs, and relative power. This indeterminacy is confirmed by real-world wage negotiations.',
  },
  {
    id: 'lm-h-13', topic: 'labour-markets', topicLabel: 'Labour Markets', difficulty: 'hard',
    type: 'multi',
    question: 'Which TWO are consistent with human capital theory as an explanation for wage differentials? Select ALL correct answers.',
    options: [
      'Surgeons earn more than supermarket workers because surgery requires years of costly training that workers are compensated for',
      'City bankers earn premiums due to a compensating differential for stress and long hours',
      'Female workers earn less due to historical discrimination, not productivity differences',
      'Economics graduates earn higher wages because the degree signals productivity to employers (signalling theory)',
      'Coal miners earn higher wages to compensate for dangerous conditions',
    ],
    correct: [0, 3],
    explanation: 'Human capital theory (Becker) explains wage differentials through investment in education and training raising productivity. Surgeons\' higher wages reflect years of medical training (A). Signalling theory (Spence) is closely related — even if the degree doesn\'t directly raise productivity, it signals high-ability workers (D). Options B and E describe compensating differentials (different theory). Option C describes discrimination, not human capital.',
  },
  {
    id: 'lm-h-14', topic: 'labour-markets', topicLabel: 'Labour Markets', difficulty: 'hard',
    question: 'Card and Krueger\'s 1994 study of New Jersey and Pennsylvania fast food workers found that a minimum wage rise:',
    options: [
      'Reduced employment significantly, confirming the standard competitive model prediction',
      'Increased employment in New Jersey relative to Pennsylvania — suggesting employers had monopsony power and the minimum wage moved the market towards the competitive equilibrium',
      'Had no effect on employment because workers were already paid above the minimum',
      'Led to faster automation as firms replaced workers with self-service kiosks',
      'Reduced poverty but raised unemployment, confirming a trade-off between equity and efficiency',
    ],
    correct: 1,
    explanation: 'Card and Krueger found NJ employment in fast food ROSE relative to PA after the minimum wage increase — the opposite of competitive model prediction. Their explanation: fast food labour markets have monopsony features (low worker mobility, employer wage-setting power), so a wage floor corrects the monopsony distortion, simultaneously raising wages and employment. David Card received the 2021 Nobel Prize for this work.',
  },
  {
    id: 'lm-h-15', topic: 'labour-markets', topicLabel: 'Labour Markets', difficulty: 'hard',
    question: 'Elasticity of demand for labour is most INELASTIC when:',
    options: [
      'Labour costs are a very high proportion of total costs, making firms highly sensitive to wage rises',
      'The product workers produce has highly elastic demand, so firms can easily vary output',
      'Readily available capital substitutes can be deployed quickly when wages rise',
      'Labour costs are a small proportion of total costs AND the product has inelastic demand — the "importance of being unimportant" principle',
      'Workers are highly skilled with rare expertise but the firm employs many of them',
    ],
    correct: 3,
    explanation: 'Hicks-Marshall laws: labour demand elasticity is lower when (1) product demand is inelastic (firms pass wage costs on without large sales falls); (2) labour is a small cost share — "importance of being unimportant" — a wage rise barely affects total costs; (3) other factors cannot easily substitute; (4) substitute factor supply is inelastic. Option D precisely combines conditions 1 and 2.',
  },

  // MACROECONOMIC POLICY

  {
    id: 'fp-h-10', topic: 'fiscal-policy', topicLabel: 'Fiscal Policy', difficulty: 'hard',
    question: 'The fiscal multiplier is likely to be LARGEST when:',
    options: [
      'The economy is at full employment with zero output gap',
      'The marginal propensity to import is high and the MPC is low',
      'The economy has spare capacity, low MPI, and interest rates are at the zero lower bound (no monetary crowding out)',
      'The central bank raises interest rates in response to government borrowing, causing full financial crowding out',
      'Government spending is targeted at capital goods with high import content',
    ],
    correct: 2,
    explanation: 'Multiplier = 1/(1 − MPC(1−t) + MPM). It is large when MPC is high, MPM is low, the tax rate is low, and — crucially — when monetary policy is not tightened (zero lower bound removes crowding-out). Spare capacity means stimulus raises real output rather than just prices. At full employment the real multiplier is effectively zero.',
  },
  {
    id: 'fp-h-11', topic: 'fiscal-policy', topicLabel: 'Fiscal Policy', difficulty: 'hard',
    question: 'Ricardian Equivalence (Barro, 1974) implies that deficit-financed government spending will NOT stimulate aggregate demand because:',
    options: [
      'Government spending always crowds out private investment through higher interest rates',
      'Rational forward-looking consumers increase saving today in anticipation of higher future taxes to repay the deficit, exactly offsetting the stimulus',
      'The central bank raises interest rates to prevent any increase in nominal GDP',
      'Deficits are always inflationary, eroding the real value of the stimulus before it reaches households',
      'Governments cannot borrow without paying a risk premium that offsets the fiscal stimulus',
    ],
    correct: 1,
    explanation: 'Barro\'s Ricardian Equivalence: bonds and taxes are equivalent finance. If consumers are rational, forward-looking, and liquidity-unconstrained, they know debt today = taxes tomorrow, so they save the entire fiscal injection. Private savings increase exactly offsets the fiscal stimulus, leaving AD unchanged. Empirically contested but theoretically important.',
  },
  {
    id: 'fp-h-12', topic: 'fiscal-policy', topicLabel: 'Fiscal Policy', difficulty: 'hard',
    type: 'multi',
    question: 'Which TWO are examples of automatic stabilisers that cushion a recession without new policy decisions? Select ALL correct answers.',
    options: [
      'Progressive income tax revenues falling automatically as incomes fall',
      'Discretionary infrastructure spending voted on by Parliament',
      'Unemployment benefit payments that rise automatically as unemployment increases',
      'Quantitative easing conducted by the Bank of England',
      'Interest rate cuts in response to falling output',
    ],
    correct: [0, 2],
    explanation: 'Automatic stabilisers work without new policy decisions. Progressive income tax: average rate falls in a downturn, cushioning income falls. Unemployment benefits: automatically rise, supporting aggregate demand. Discretionary spending (B), QE (D), and rate cuts (E) are active policy choices — not automatic.',
  },
  {
    id: 'fp-h-13', topic: 'fiscal-policy', topicLabel: 'Fiscal Policy', difficulty: 'hard',
    type: 'multi',
    question: 'Which TWO are examples of supply-side fiscal policy (aimed at increasing LRAS rather than AD)? Select ALL correct answers.',
    options: [
      'Cutting income tax to increase work incentives and boost labour supply',
      'Increasing infrastructure spending to reduce firms\' logistics costs and expand productive capacity',
      'Raising unemployment benefits to support aggregate demand during a recession',
      'Running a budget deficit to stimulate spending through the multiplier',
      'Increasing national debt to fund higher public sector pay',
    ],
    correct: [0, 1],
    explanation: 'Supply-side fiscal policies shift LRAS rightward by improving productive potential. Income tax cuts (A) incentivise work and entrepreneurship, boosting effective labour supply. Infrastructure investment (B) directly augments productive capacity — ports, roads, broadband reduce business costs and improve allocative efficiency. Options C, D, E are Keynesian demand-side fiscal policies — they shift AD, not LRAS.',
  },
  {
    id: 'fp-h-14', topic: 'fiscal-policy', topicLabel: 'Fiscal Policy', difficulty: 'hard',
    question: 'The UK Office for Budget Responsibility (OBR) was established in 2010 primarily to address:',
    options: [
      'The UK\'s persistent current account deficit, requiring independent external monitoring',
      'The time-inconsistency problem in fiscal policy — governments pre-commit to prudent budgets but face electoral incentives to abandon them; independent fiscal forecasting increases credibility',
      'The inflationary bias in central bank policy when monetary and fiscal authorities are not independent',
      'The risk of sovereign debt default, requiring an international fiscal watchdog',
      'The complexity of the UK tax code, requiring an independent body to assess revenue forecasts',
    ],
    correct: 1,
    explanation: 'Time inconsistency in fiscal policy: governments know prudent budgets are optimal long-run policy but face election-cycle incentives to run larger deficits. The OBR provides independent, objective economic and fiscal forecasts outside political control — analogous to central bank independence for monetary policy. This reduces political bias in projections and improves fiscal credibility with bond markets.',
  },
  {
    id: 'mp-h-10', topic: 'monetary-policy', topicLabel: 'Monetary Policy', difficulty: 'hard',
    question: 'The liquidity trap (Keynes) occurs when:',
    options: [
      'Banks hold excess reserves rather than lending, so money supply rises but velocity falls, leaving nominal GDP unchanged',
      'Interest rates fall to zero and speculative demand for money becomes perfectly elastic — everyone prefers cash to bonds, so further money supply increases cannot lower rates or stimulate spending',
      'Firms face a credit crunch when banks refuse to lend despite high profit expectations',
      'The central bank\'s interest rate tool becomes blunt because the interbank market is frozen',
      'Consumers save all additional income due to extreme pessimism, even with negative real interest rates',
    ],
    correct: 1,
    explanation: 'In Keynes\'s formulation, at very low rates everyone expects rates to rise (bond prices to fall), so rational agents hold cash — speculative money demand is perfectly elastic. New money is absorbed as idle balances, not spent, breaking the monetary transmission mechanism. Distinct from a credit crunch (banks won\'t lend) and excess reserves (a post-2008 phenomenon).',
  },
  {
    id: 'mp-h-11', topic: 'monetary-policy', topicLabel: 'Monetary Policy', difficulty: 'hard',
    type: 'multi',
    question: 'Which TWO are direct channels through which a rise in the Bank Rate reduces inflation? Select ALL correct answers.',
    options: [
      'Higher Bank Rate raises commercial banks\' borrowing costs, increasing loan rates and reducing household and business spending',
      'Higher Bank Rate signals MPC anti-inflation credibility, anchoring expectations and reducing wage demands',
      'Higher Bank Rate causes the government to run a smaller budget deficit through reduced debt-servicing costs',
      'Higher Bank Rate attracts capital inflows, appreciating sterling and reducing import prices (the exchange rate channel)',
      'Higher Bank Rate causes commercial banks to reduce their reserve requirements',
    ],
    correct: [0, 3],
    explanation: 'Transmission channels: (A) interest rate channel — higher rates raise borrowing costs, reducing consumption and investment; (D) exchange rate channel — higher UK rates attract hot money inflows, appreciate sterling, cut import prices, and reduce AD. Option B describes an expectations channel (indirect). Option C is wrong — higher rates increase debt-servicing costs. Reserve requirements are set by regulation, not Bank Rate.',
  },
  {
    id: 'mp-h-12', topic: 'monetary-policy', topicLabel: 'Monetary Policy', difficulty: 'hard',
    question: 'Quantitative easing differs from conventional monetary policy because:',
    options: [
      'QE directly sets the interbank rate, whereas conventional policy operates through open market operations',
      'QE involves the central bank purchasing financial assets from banks and financial institutions, increasing reserves and lowering long-term yields, whereas conventional policy targets the short-term policy rate',
      'QE is a fiscal policy tool requiring Treasury approval, unlike the independent Bank of England\'s rate decisions',
      'QE reduces the money supply by selling bonds, tightening financial conditions when rates cannot rise further',
      'QE directly transfers money to households, bypassing the banking system entirely',
    ],
    correct: 1,
    explanation: 'QE is unconventional monetary policy used at the zero lower bound. The central bank creates new reserves and purchases assets — mainly government gilts — from financial institutions. This raises asset prices, lowers long-term yields, and aims to stimulate lending through portfolio rebalancing. It operates on quantity (reserves) rather than the price (short-term rate) of money.',
  },
  {
    id: 'mp-h-13', topic: 'monetary-policy', topicLabel: 'Monetary Policy', difficulty: 'hard',
    type: 'multi',
    question: 'Which TWO statements about inflation targeting are correct? Select ALL correct answers.',
    options: [
      'Inflation targeting requires the central bank to raise rates whenever inflation exceeds target, regardless of the output gap',
      'A credible inflation target anchors long-run expectations, reducing the sacrifice ratio (output lost per unit of inflation reduction)',
      'CPI-focused targeting ignores asset price inflation and financial stability — a failure contributing to the 2007-08 financial crisis',
      'Flexible inflation targeting never permits inflation to deviate from 2%',
      'In the UK, the Chancellor of the Exchequer sets interest rates monthly',
    ],
    correct: [1, 2],
    explanation: 'Option B: credible targeting (BoE 2% CPI target since 1997) anchors expectations — workers moderate wage demands, reducing inflationary persistence and lowering disinflation costs. Option C: CPI-focused central banks ignored house price and credit bubbles through 2003-07, contributing to financial instability. Flexible targeting explicitly allows short-term deviations for supply shocks (D is wrong). The independent MPC sets rates, not the Chancellor (E is wrong).',
  },

  // INTERNATIONAL TRADE

  {
    id: 'it-h-10', topic: 'international-trade', topicLabel: 'International Trade', difficulty: 'hard',
    question: 'Country A produces 8 units of wheat OR 4 units of steel per worker. Country B produces 3 units of wheat OR 3 units of steel per worker. Which is correct?',
    options: [
      'Country A has absolute advantage in both goods but no comparative advantage in either',
      'Country A should specialise in steel; Country B in wheat, as Country A has the lower opportunity cost in steel',
      'Country A should specialise in wheat; Country B in steel — Country A\'s opportunity cost of wheat (0.5 steel) is lower than Country B\'s (1 steel)',
      'No trade will occur because Country A has absolute advantage in both goods',
      'Country B has comparative advantage in wheat because it produces both at the same opportunity cost ratio',
    ],
    correct: 2,
    explanation: 'Opportunity costs: Country A — 1 wheat costs 0.5 steel; 1 steel costs 2 wheat. Country B — 1 wheat costs 1 steel; 1 steel costs 1 wheat. Country A\'s OC of wheat (0.5 steel) < Country B\'s (1 steel) → A has comparative advantage in wheat. Country B\'s OC of steel (1 wheat) < A\'s (2 wheat) → B has comparative advantage in steel. Absolute advantage is irrelevant to specialisation (Ricardo).',
  },
  {
    id: 'it-h-11', topic: 'international-trade', topicLabel: 'International Trade', difficulty: 'hard',
    question: 'The Marshall-Lerner condition states a depreciation improves the current account only if:',
    options: [
      'Inflation is below 2% so the real exchange rate falls following the nominal depreciation',
      'The sum |PEDx| + |PEDm| > 1 — demand for exports and imports must be sufficiently price-elastic',
      'The depreciation is permanent rather than temporary, incentivising firms to invest in export capacity',
      'The country has comparative advantage in the goods whose export volumes respond to the price change',
      'The central bank does not intervene to prevent the depreciation',
    ],
    correct: 1,
    explanation: 'Marshall-Lerner: for depreciation to improve the trade balance, |PEDx| + |PEDm| > 1. If export and import demand are elastic enough, volume effects outweigh the adverse price effect. If the sum < 1 (inelastic), depreciation worsens the trade balance — the import bill rises faster than export revenues.',
  },
  {
    id: 'it-h-12', topic: 'international-trade', topicLabel: 'International Trade', difficulty: 'hard',
    question: 'The J-curve effect following a depreciation occurs because:',
    options: [
      'Export prices in domestic currency rise immediately but consumers take time to find cheaper domestic substitutes',
      'In the short run, import and export volumes are inelastic (contracts fixed, habits slow to change) so the current account worsens initially; volumes adjust over time and the current account improves, tracing a J shape',
      'Depreciation initially raises inflation, temporarily reducing real consumer spending and aggregate demand',
      'The exchange rate overshoots its long-run equilibrium (Dornbusch) before returning, creating initial trade balance volatility',
      'Foreign central banks retaliate with their own depreciations, dampening the volume response',
    ],
    correct: 1,
    explanation: 'The J-curve arises from the lag between depreciation and volume response. Immediately after depreciation, prices change but quantities are sticky (existing contracts, habits, search costs). Import costs rise in domestic currency while export volumes don\'t yet increase — worsening the current account. As time passes, |PEDx| + |PEDm| rises above 1 and volumes adjust, tracing a J shape.',
  },
  {
    id: 'it-h-13', topic: 'international-trade', topicLabel: 'International Trade', difficulty: 'hard',
    type: 'multi',
    question: 'Which TWO would most directly cause a deterioration in a country\'s current account balance? Select ALL correct answers.',
    options: [
      'An appreciation of the exchange rate making exports more expensive and imports cheaper',
      'A rise in the domestic savings rate, reducing consumer spending on imports',
      'Faster domestic economic growth relative to trading partners, boosting demand for imports',
      'An improvement in the terms of trade (export prices rising relative to import prices)',
      'Domestic inflation falling below trading partner inflation, improving export competitiveness',
    ],
    correct: [0, 2],
    explanation: 'Exchange rate appreciation (A) worsens competitiveness — exports pricier in foreign currency, imports cheaper. Faster domestic growth (C) raises incomes and import spending more than partners increase demand for domestic exports. Higher savings (B) reduces imports, improving the current account. Better terms of trade (D) initially helps. Lower domestic inflation (E) improves competitiveness.',
  },
  {
    id: 'it-h-14', topic: 'international-trade', topicLabel: 'International Trade', difficulty: 'hard',
    type: 'multi',
    question: 'Which TWO are arguments FOR free trade supported by mainstream economic theory? Select ALL correct answers.',
    options: [
      'Free trade guarantees convergence of all countries\' living standards over time',
      'Specialisation according to comparative advantage expands the global production possibility frontier, increasing world output',
      'Free trade exposes domestic firms to competition, incentivising efficiency improvements and innovation',
      'Free trade always improves the current account balance of developing economies',
      'Free trade prevents governments from running budget deficits',
    ],
    correct: [1, 2],
    explanation: 'Comparative advantage (Ricardo): specialisation and trade expand the global PPF — all countries can consume beyond their individual PPFs. Competition through free trade disciplines domestic firms: contestability limits monopoly power and stimulates dynamic efficiency. Option A is wrong — trade may not equalise living standards (factor price equalisation is conditional). Option D is wrong — free trade can worsen developing nations\' trade balances. Option E is unrelated to fiscal policy.',
  },

  // GROWTH & DEVELOPMENT

  {
    id: 'gd-h-10', topic: 'economic-growth', topicLabel: 'Economic Growth', difficulty: 'hard',
    question: 'The Harrod-Domar model predicts equilibrium growth rate equals:',
    options: [
      'Growth rate of the labour force plus the rate of technological progress',
      'The savings rate divided by the incremental capital-output ratio (ICOR) — how efficiently savings convert into productive capital',
      'The rate of return on capital multiplied by the investment share of GDP',
      'The rate of population growth plus the depreciation rate of the capital stock',
      'The government\'s expenditure multiplier times the budget deficit as a share of GDP',
    ],
    correct: 1,
    explanation: 'Harrod-Domar: g = s/v, where s = savings rate and v = ICOR (capital needed per unit of additional output). Higher savings fund more investment; lower ICOR means capital is used more efficiently. The model implies poor countries are trapped in low growth if they cannot save enough — justifying foreign aid to supplement domestic savings. Its limitation (no factor substitution, ignores TFP) led to the Solow model.',
  },
  {
    id: 'gd-h-11', topic: 'economic-growth', topicLabel: 'Economic Growth', difficulty: 'hard',
    type: 'multi',
    question: 'Which TWO are valid criticisms of using GDP per capita as a measure of living standards? Select ALL correct answers.',
    options: [
      'GDP per capita measures total output, which overstates living standards by definition',
      'GDP per capita ignores income distribution — high average GDP can coexist with extreme inequality and widespread poverty',
      'GDP per capita fails to capture non-market production: household work, volunteering, and the value of leisure',
      'GDP per capita rises with inflation even when real output is unchanged',
      'GDP per capita is always lower than GNI per capita because of repatriated profits',
    ],
    correct: [1, 2],
    explanation: 'Two robust criticisms: (B) GDP is an average — Sen\'s capability approach shows high averages can mask entrenched poverty and inequality; (C) GDP excludes non-market activity (unpaid care, home production, leisure) that constitutes much of human welfare. Option D is an issue with nominal vs. real GDP, not GDP itself. Option E is false — GNI can be lower if profits flow out. Option A is tautological.',
  },
  {
    id: 'gd-h-12', topic: 'economic-growth', topicLabel: 'Economic Growth', difficulty: 'hard',
    question: 'The Kuznets curve hypothesis predicts that as a country develops:',
    options: [
      'Income inequality first rises then falls, forming an inverted-U, as the economy transitions from agriculture to industry to services',
      'Income inequality falls monotonically as higher average incomes allow redistribution through progressive taxation',
      'Carbon emissions have an inverted-U relationship with income — the Environmental Kuznets Curve',
      'Poverty headcount falls linearly with GDP per capita growth, regardless of initial distribution',
      'The share of manufacturing in GDP first rises then falls — the deindustrialisation hypothesis',
    ],
    correct: 0,
    explanation: 'Kuznets (1955): industrialisation initially concentrates income (workers move to higher-productivity urban sectors, widening urban-rural inequality) before broad gains from growth and redistribution reduce inequality at higher income levels. The inverted-U is empirically contested. Note: the Environmental Kuznets Curve (C) is a separate concept applying the same logic to pollution.',
  },
  {
    id: 'gd-h-13', topic: 'economic-growth', topicLabel: 'Economic Growth', difficulty: 'hard',
    question: 'In the Solow growth model, "steady state" is reached when:',
    options: [
      'The savings rate equals the depreciation rate of capital',
      'Investment per worker equals capital dilution (depreciation + population growth), so capital per worker is constant — growth in output per worker then requires technological progress',
      'The marginal product of capital equals the interest rate, achieving allocative efficiency',
      'Government spending equals tax revenue, balancing the national budget',
      'The labour force growth rate equals the capital accumulation rate',
    ],
    correct: 1,
    explanation: 'Solow steady state: sf(k*) = (δ + n)k*, so capital per worker is constant. Beyond steady state, growth in output per worker requires exogenous technological progress (the Solow residual/TFP). Key insight: capital accumulation alone cannot sustain growth — productivity growth is the only long-run engine.',
  },
  {
    id: 'gd-h-14', topic: 'economic-growth', topicLabel: 'Economic Growth', difficulty: 'hard',
    question: 'Endogenous growth theory (Romer, Lucas) allows sustained long-run growth without exogenous technological progress because:',
    options: [
      'Capital can be accumulated indefinitely as long as the savings rate exceeds the depreciation rate',
      'Knowledge and human capital are non-rival with positive spillovers — social returns exceed private returns, preventing diminishing aggregate returns',
      'Population growth continuously expands effective labour, ensuring the economy never reaches a steady state',
      'Government infrastructure investment fills the gap left by diminishing private capital returns',
      'International trade allows countries to specialise in high-growth sectors, continuously raising productivity',
    ],
    correct: 1,
    explanation: 'Endogenous growth\'s key insight: ideas are non-rival (one person\'s use doesn\'t deplete availability) and generate spillovers. When Firm A invests in R&D, the knowledge benefits other firms too. Aggregate returns to "broad capital" (including knowledge and human capital) need not diminish — AK models maintain constant returns. Romer explains how innovation is generated by profit-seeking firms and policy (education, R&D subsidies) can permanently raise the growth rate.',
  },
  {
    id: 'gd-h-15', topic: 'economic-growth', topicLabel: 'Economic Growth', difficulty: 'hard',
    question: 'A country with a persistent current account surplus (e.g., Germany or China) is, by national income accounting identity, necessarily:',
    options: [
      'Running a budget surplus, as exports exceed imports across all sectors',
      'Experiencing faster GDP growth than its deficit trading partners',
      'A net lender to the rest of the world — domestic savings exceed domestic investment, with the excess lent abroad through financial account outflows',
      'At risk of currency appreciation that will automatically eliminate the surplus within one year',
      'Violating WTO fair trade rules, since persistent surpluses indicate unfair competitive practices',
    ],
    correct: 2,
    explanation: 'National income identity: Current Account = National Savings − National Investment (CA = S − I). A current account surplus means the country saves more than it invests domestically — excess saving funds investment abroad. Germany and China are net capital exporters, accumulating foreign assets. This underlies the "global savings glut" debate: surplus countries finance deficit countries (e.g., the US).',
  },

  // INEQUALITY

  {
    id: 'ineq-h-10', topic: 'inequality', topicLabel: 'Inequality & Poverty', difficulty: 'hard',
    question: 'A country\'s Gini coefficient falls from 0.42 to 0.35 following strong economic growth. The MOST accurate interpretation is:',
    options: [
      'Absolute poverty has been eliminated since the Gini coefficient is below 0.4',
      'Income inequality has decreased, but this tells us nothing directly about whether absolute poverty has fallen',
      'The poorest households gained proportionally more than the richest, guaranteeing a reduction in absolute poverty',
      'The Lorenz curve shifted outward, meaning the top decile now captures a larger share of income',
      'The Gini approaching 0 means the country is approaching perfect equality with no rich or poor households',
    ],
    correct: 1,
    explanation: 'A falling Gini (moving towards 0) indicates a more equal income distribution. However, it is a relative measure — it captures income shares, not absolute levels. Even with falling inequality, absolute poverty could persist if overall incomes are very low. The Gini says nothing about absolute living standards.',
  },
  {
    id: 'ineq-h-11', topic: 'inequality', topicLabel: 'Inequality & Poverty', difficulty: 'hard',
    type: 'multi',
    question: 'Which TWO policies would most directly reduce the Gini coefficient in the UK? Select ALL correct answers.',
    options: [
      'Raising the personal income tax allowance, primarily benefiting those with low to moderate incomes',
      'Introducing more steeply progressive income tax with higher marginal rates on top incomes, redistributing through increased benefits',
      'Cutting corporation tax to attract FDI and boost economic growth',
      'Increasing means-tested benefits for households below the poverty line',
      'Quantitative easing, which tends to raise asset prices',
    ],
    correct: [1, 3],
    explanation: 'A more progressive income tax (B) directly compresses the distribution — higher earners pay proportionally more and the revenue funds redistribution. Means-tested benefits (D) target those at the bottom of the distribution, raising their relative income share. Raising the allowance (A) helps those below the threshold but not the very poorest (who may pay no tax). Corporation tax cuts (C) increase returns to capital, widening inequality. QE (E) inflates asset prices, typically benefiting wealthier asset-holders.',
  },
  {
    id: 'ineq-h-12', topic: 'inequality', topicLabel: 'Inequality & Poverty', difficulty: 'hard',
    question: 'Amartya Sen\'s capability approach argues development should be measured by expanding "capabilities" rather than income because:',
    options: [
      'Income is inherently subjective and cannot be compared across cultures',
      'The same income gives different capabilities depending on health, disability, social norms, and access to public goods — so welfare requires assessing what people can actually do and be, not just their resources',
      'GDP per capita growth always increases inequality before reducing it, making income unreliable',
      'Capabilities are objectively measurable while income is distorted by black markets',
      'Sen\'s approach is purely normative, providing no quantitative measure comparable to GDP',
    ],
    correct: 1,
    explanation: 'Sen\'s capability approach (Development as Freedom, 1999): income is merely instrumental. What people can do with income depends on conversion factors — a disabled person needs more income for the same mobility capability; a woman facing discrimination has restricted capabilities regardless of income. True welfare assessment examines functionings (what people can do and be) and capabilities (real freedoms to achieve these). This underpins the Human Development Index (HDI).',
  },

  // FINANCIAL MARKETS

  {
    id: 'fin-h-10', topic: 'financial-markets', topicLabel: 'Financial Markets', difficulty: 'hard',
    question: 'The quantity theory of money (MV = PQ) predicts a 10% increase in money supply leads to a 10% rise in the price level when:',
    options: [
      'The central bank raises interest rates to counter inflationary pressure from the money supply increase',
      'Velocity (V) is stable and real output (Q) is at its long-run potential — the price level absorbs all the monetary expansion',
      'The economy is in deep recession with a large output gap, allowing the real economy to absorb the monetary stimulus',
      'The money multiplier is less than 1, so the monetary base rise exceeds the broad money rise',
      'The income elasticity of demand for money is greater than 1',
    ],
    correct: 1,
    explanation: 'MV = PQ: if V is stable (the key monetarist assumption) and Q is fixed at full-employment output (long-run vertical AS), any increase in M must be fully absorbed by P. In a recession with an output gap, ΔM can raise Q with little effect on P. Velocity stability is the critical assumption Keynesian critics challenge.',
  },
  {
    id: 'fin-h-11', topic: 'financial-markets', topicLabel: 'Financial Markets', difficulty: 'hard',
    type: 'multi',
    question: 'Which TWO are consequences of a financial asset price bubble bursting (as in 2007-08)? Select ALL correct answers.',
    options: [
      'Bank balance sheets deteriorate as collateral values fall, causing banks to restrict lending — a credit crunch',
      'Inflation rises sharply as asset holders spend capital gains on consumer goods',
      'Negative wealth effects reduce consumer confidence and spending, contracting aggregate demand',
      'Government tax revenues increase due to higher capital gains tax receipts',
      'Firms increase investment as cheaper asset prices reduce the cost of capital',
    ],
    correct: [0, 2],
    explanation: 'When asset bubbles burst: (A) banks holding mortgage-backed securities suffer balance sheet losses — impaired collateral leads banks to restrict new lending (the 2008 credit crunch); (C) households with falling asset values (negative equity) cut spending — a negative wealth effect contracting AD. Inflation typically falls (B is wrong). Tax revenues fall as the recession reduces income (D is wrong). Investment falls as uncertainty rises (E is wrong).',
  },

  // SYNOPTIC

  {
    id: 'syn-h-10', topic: 'macroeconomic-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'hard',
    question: 'Stagflation (simultaneous high inflation and high unemployment) challenges the standard Phillips curve trade-off because:',
    options: [
      'The Phillips curve only applies to open economies where exchange rate movements offset domestic inflation',
      'An adverse supply shock shifts the short-run Phillips curve outward — firms face higher costs, reducing output and raising prices simultaneously, so any unemployment rate is now associated with higher inflation',
      'The natural rate of unemployment rises automatically when inflation exceeds 5%',
      'Central banks target inflation directly, so unemployment cannot rise when inflation is above target',
      'In open economies, domestic unemployment is determined by global labour markets, not domestic monetary conditions',
    ],
    correct: 1,
    explanation: 'The SRPC assumes a stable trade-off from demand-side shocks. An adverse supply shock (oil price spike, pandemic supply disruption) simultaneously raises costs (inflation) and reduces output (unemployment) — shifting the SRPC outward. Policymakers face an impossible choice: tighten to fight inflation (deepening recession) or loosen to fight unemployment (worsening inflation). This was the UK experience in 1974-75 and 2022-23.',
  },
  {
    id: 'syn-h-11', topic: 'macroeconomic-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'hard',
    type: 'multi',
    question: 'Which TWO represent genuine policy conflicts between macroeconomic objectives? Select ALL correct answers.',
    options: [
      'Higher interest rates to reduce inflation may raise unemployment and reduce growth — conflicting with the employment and growth objectives',
      'Fiscal expansion to reduce unemployment also reduces inflation if the output gap is negative',
      'Import tariffs to improve the current account may conflict with low inflation if protected domestic prices rise',
      'Supply-side policies improving productivity simultaneously reduce inflation AND support growth — no conflict',
      'A depreciation to improve the current account may simultaneously increase imported inflation, conflicting with price stability',
    ],
    correct: [0, 4],
    explanation: 'Option A: the classic inflation-unemployment trade-off — tighter monetary policy reduces inflation but may raise unemployment. Option E: exchange rate depreciation improves trade competitiveness but raises import prices — a conflict between external balance and price stability. Option B is wrong (fiscal expansion worsens inflation near full employment). Option D correctly identifies no conflict. Option C has flawed logic — tariffs raise domestic prices but this is price-level effect, not ongoing inflation.',
  },
  {
    id: 'syn-h-12', topic: 'macroeconomic-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'hard',
    question: '"Dutch disease" refers to:',
    options: [
      'An overvalued fixed exchange rate causing a permanent current account deficit, requiring periodic devaluations',
      'A natural resource boom causing currency appreciation and deindustrialisation, as manufacturing exports become uncompetitive — named after the Netherlands\' experience following 1959 natural gas discoveries',
      'Excessive government borrowing crowding out private investment, reducing long-run productive capacity',
      'A persistent trade deficit in manufactures as services exports dominate, hollowing out the industrial base',
      'Rapid inflation in the dominant traded sector eroding competitiveness across the entire economy',
    ],
    correct: 1,
    explanation: 'Dutch disease: a resource windfall causes (1) real currency appreciation as export revenues rise, making non-resource exports more expensive; and (2) resource movement effect — labour and capital shift into the booming sector, raising costs in manufacturing. Both damage the tradeable non-resource sector. Norway has partially avoided this through the Statens pensjonsfond (sovereign wealth fund), sterilising oil revenues.',
  },
  {
    id: 'syn-h-13', topic: 'macroeconomic-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'hard',
    question: 'Goodhart\'s Law states "When a measure becomes a target, it ceases to be a good measure." The most relevant economic policy application is:',
    options: [
      'Central banks should never target inflation because targeting changes firms\' price-setting, making CPI unreliable',
      'GDP growth targets are self-defeating because governments inflate nominal GDP through borrowing',
      'When policymakers target a specific economic indicator, agents adapt their behaviour in ways that undermine the indicator\'s reliability — e.g., banks restructuring loans to avoid regulatory triggers',
      'The money supply cannot be targeted because velocity is unstable, invalidating the quantity theory',
      'Any tax threshold becomes a focal point for avoidance, eroding the tax base faster than static analysis predicts',
    ],
    correct: 2,
    explanation: 'Goodhart\'s Law emerged from UK monetary targeting debates in the 1970s-80s but applies broadly: once an indicator becomes a policy target, the statistical regularity it embodies breaks down. Agents optimise against the target — banks restructure loans to meet capital ratios without reducing risk, universities game league table metrics. Related to the Lucas critique: policy changes alter the structural parameters that models rely on.',
  },
  {
    id: 'syn-h-14', topic: 'supply-side-policy', topicLabel: 'Supply-Side Policy', difficulty: 'hard',
    question: 'The strongest theoretical argument AGAINST privatising a natural monopoly is:',
    options: [
      'Private firms always charge higher prices than nationalised industries',
      'Privatisation eliminates the profit motive, reducing efficiency incentives',
      'A natural monopoly privatised without effective regulation will maximise profit at MR = MC (below the social optimum at P > MC), exploiting consumers more severely than a public monopoly constrained by political accountability',
      'Private shareholders demand dividends, diverting investment funds that nationalised firms could deploy for capacity expansion',
      'Privatisation always reduces employment through cost-cutting, increasing structural unemployment',
    ],
    correct: 2,
    explanation: 'The core problem: a profit-maximising private natural monopoly restricts output to MR = MC (below the social optimum), charging monopoly prices. A nationalised utility can be directed to set P = AC (breaking even) or P = MC (allocative efficiency, with subsidy). Without effective regulation, privatisation trades public bureaucratic inefficiency for private monopoly exploitation. The UK water and energy industries illustrate persistent concerns about regulatory capture.',
  },
  {
    id: 'syn-h-15', topic: 'macroeconomic-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'hard',
    question: 'The "impossible trinity" (Mundell-Fleming trilemma) states a country cannot simultaneously maintain:',
    options: [
      'Low inflation, full employment, and a balanced current account',
      'A fixed exchange rate, independent monetary policy, and free capital mobility — at most two of the three',
      'Economic growth, low inflation, and fiscal balance without currency depreciation',
      'Free trade, currency stability, and financial sector regulation under capital account liberalisation',
      'Independent fiscal policy, sovereign monetary policy, and membership of a monetary union',
    ],
    correct: 1,
    explanation: 'The Mundell-Fleming trilemma: a country can choose only two of (1) fixed exchange rate, (2) free capital flows, (3) independent monetary policy. The Eurozone chose (1) + (2) but surrendered independent policy. China chose (1) + (3) but restricts capital flows. The UK has (2) + (3) but a floating exchange rate. This is fundamental to understanding currency crises and monetary union design.',
  },
  {
    id: 'syn-h-16', topic: 'macroeconomic-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'hard',
    question: 'Following a persistent current account deficit, the automatic market adjustment mechanism predicts:',
    options: [
      'The government should impose import tariffs to reduce the deficit artificially',
      'Currency depreciation (net selling pressure from excess import spending) makes exports cheaper and imports dearer — subject to the Marshall-Lerner condition, gradually restoring balance',
      'Higher domestic inflation automatically corrects the deficit by reducing competitiveness further',
      'Capital account surpluses always perfectly and permanently offset current account deficits',
      'The deficit necessarily leads to sovereign debt crisis within five years',
    ],
    correct: 1,
    explanation: 'Automatic adjustment: excess import spending → net selling pressure on domestic currency → depreciation → export prices fall in foreign currency, import prices rise in domestic currency → volume effects improve trade balance, provided |PEDx| + |PEDm| > 1. This self-correcting mechanism explains why floating exchange rate countries can run sustained deficits without immediate crises, though the J-curve means correction takes time.',
  },
  {
    id: 'syn-h-17', topic: 'macroeconomic-objectives', topicLabel: 'Macroeconomic Objectives', difficulty: 'hard',
    type: 'multi',
    question: 'Which TWO correctly describe the "crowding out" effect of government borrowing? Select ALL correct answers.',
    options: [
      'Higher government borrowing raises bond supply, pushing bond prices up and yields down, reducing all borrowing costs',
      'Financial crowding out: increased government borrowing raises interest rates (bond supply rises, prices fall), increasing the cost of private investment and deterring capital formation',
      'Resource crowding out: at or near full employment, government demand for labour and capital directly competes with private sector demand, reducing private output',
      'Crowding out only occurs in closed economies — in open economies, foreign capital inflows offset government borrowing at unchanged rates',
      'Crowding out is most severe in deep recessions with large spare capacity',
    ],
    correct: [1, 2],
    explanation: 'Two valid crowding out mechanisms: (B) financial crowding out — government bond issuance increases supply → bond prices fall → yields rise → private investment falls; (C) resource crowding out — at full employment, government demand bids up prices for construction workers, materials, etc., making private projects unviable. Option A has the bond price logic reversed. Option D is wrong — capital inflows would appreciate the exchange rate, crowding out net exports. Crowding out is LEAST severe in a recession (E is wrong).',
  },

  // ECONOMIC PROBLEM

  {
    id: 'ep-h-10', topic: 'economic-problem', topicLabel: 'The Economic Problem', difficulty: 'hard',
    type: 'multi',
    question: 'Which TWO would cause a leftward (inward) shift of the Production Possibility Frontier? Select ALL correct answers.',
    options: [
      'A sudden fall in aggregate demand reducing consumer spending',
      'A large-scale natural disaster destroying significant amounts of physical capital',
      'A sharp rise in structural unemployment from deindustrialisation, leaving many workers with obsolete skills',
      'A fall in the government budget deficit, reducing public sector borrowing',
      'Higher interest rates reducing business investment below the capital stock depreciation rate',
    ],
    correct: [1, 2],
    explanation: 'The PPF shifts inward when productive CAPACITY falls. A natural disaster (B) physically destroys capital stock, reducing productive potential. Long-term structural unemployment with skills mismatch (C) permanently reduces effective labour — workers cannot contribute to output at current skill levels. A demand shock (A) moves the economy inside the PPF (underutilisation) without shifting it. Lower investment (E) may eventually reduce capital stock but is not immediate. Fiscal policy (D) doesn\'t directly affect productive capacity.',
  },
]

export const allDifficulties = ['easy', 'medium', 'hard']
export const allTopicIds = [...new Set(questionBank.map(q => q.topic))]

export function getQuestions({ difficulty = null, topic = null, shuffle = true } = {}) {
  let qs = questionBank
  if (difficulty) qs = qs.filter(q => q.difficulty === difficulty)
  if (topic) qs = qs.filter(q => q.topic === topic)
  if (shuffle) qs = [...qs].sort(() => Math.random() - 0.5)
  return qs
}
