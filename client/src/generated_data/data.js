const tickers = [
  'ATVI',
  'ADBE',
  'AMD',
  'ALXN',
  'ALGN',
  'GOOG',
  'GOOGL',
  'AMZN',
  'AAL',
  'AMGN',
  'ADI',
  'AAPL',
  'AMAT',
  'ASML',
  'ADSK',
  'ADP',
  'BIDU',
  'BIIB',
  'BMRN',
  'BKNG',
  'AVGO',
  'CDNS',
  'CELG',
  'CERN',
  'CHTR',
  'CHKP',
  'CTAS',
  'CSCO',
  'CTXS',
  'CTSH',
  'CMCSA',
  'COST',
  'CSX',
  'CTRP',
  'DLTR',
  'EBAY',
  'EA',
  'EXPE',
  'FB',
  'FAST',
  'FISV',
  'GILD',
  'HAS',
  'HSIC',
  'IDXX',
  'ILMN',
  'INCY',
  'INTC',
  'INTU',
  'ISRG',
  'JBHT',
  'JD',
  'KLAC',
  'LRCX',
  'LBTYA',
  'LBTYK',
  'LULU',
  'MAR',
  'MXIM',
  'MELI',
  'MCHP',
  'MU',
  'MSFT',
  'MDLZ',
  'MNST',
  'MYL',
  'NTAP',
  'NTES',
  'NFLX',
  'NVDA',
  'NXPI',
  'ORLY',
  'PCAR',
  'PAYX',
  'PYPL',
  'PEP',
  'QCOM',
  'REGN',
  'ROST',
  'SIRI',
  'SWKS',
  'SBUX',
  'SYMC',
  'SNPS',
  'TMUS',
  'TTWO',
  'TSLA',
  'TXN',
  'KHC',
  'FOX',
  'FOXA',
  'ULTA',
  'UAL',
  'VRSN',
  'VRSK',
  'VRTX',
  'WBA',
  'WDC',
  'WLTW',
  'WDAY'
];

const summaries = [
  'Lorem ipsum dolor amet tofu single-origin coffee la croix, cardigan vaporware scenester pinterest whatever authentic literally.',
  'Mlkshk cloud bread paleo, ugh everyday carry XOXO cornhole gochujang forage mustache enamel pin. Slow-carb cornhole before they sold out venmo kitsch food truck.',
  'Four dollar toast taxidermy af butcher, gluten-free artisan direct trade vexillologist normcore sriracha tacos.',
  'Occupy banh mi cray, iPhone live-edge forage paleo franzen neutra la croix tousled microdosing narwhal. ',
  'Banh mi health goth twee kickstarter, humblebrag YOLO ramps kogi 8-bit.',
  'VHS biodiesel health goth roof party, humblebrag prism cardigan lyft mlkshk brunch everyday carry hell of yr succulents. ',
  'Woke poke synth tbh vegan.',
  'Single-origin coffee chillwave asymmetrical street art hammock affogato, next level ramps flannel hell of twee pug keytar poutine biodiesel.',
  'Cardigan selfies tumeric bitters, leggings air plant wayfarers.',
  'Distillery art party offal flexitarian gochujang seitan vexillologist 90\'s butcher adaptogen gluten-free venmo copper mug.',
  'Irony mustache flexitarian kogi, humblebrag bitters truffaut tattooed venmo etsy listicle retro squid air plant.',
  'Wolf pork belly photo booth gentrify, whatever shoreditch vape crucifix thundercats brooklyn hell of street art distillery chicharrones.',
  'Pork belly waistcoat next level, pinterest swag skateboard trust fund cred vegan succulents godard vinyl.',
  'Whatever humblebrag tilde ennui glossier twee banh mi XOXO yr tbh deep v.',
  'Godard raclette sriracha trust fund.',
  'Pickled cold-pressed portland, tattooed 8-bit paleo authentic shaman brooklyn selvage cloud bread.',
  'Fixie DIY single-origin coffee kitsch put a bird on it gentrify readymade hammock skateboard kombucha waistcoat next level paleo authentic venmo.',
  'Vexillologist semiotics echo park, lomo godard roof party pug glossier venmo swag.',
  'Bushwick beard tote bag shoreditch letterpress asymmetrical pug you probably haven\'t heard of them four loko crucifix dreamcatcher.',
  'Organic bitters hoodie tumblr portland, cold-pressed DIY fashion axe PBR&B.',
  'Banjo freegan cold-pressed, beard cloud bread kogi ramps bespoke health goth try-hard iPhone.',
  'Affogato pug bitters sriracha beard VHS try-hard fingerstache kale chips.',
  'Kombucha vape you probably haven\'t heard of them meditation ugh biodiesel.',
  'Cliche knausgaard meditation echo park umami plaid truffaut tousled synth portland meh pickled.',
];


let data = [];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const ratingsGenerator = () => {
  let ratings =
  {
    buy: 0,
    hold: 0,
    sell: 0
  };
  // newer code
  for (key in ratings) {
    ratings[key] = getRandomInt(30);
  }

  ratings.total = ratings.buy + ratings.hold + ratings.sell;

  return ratings;

};

const summaryGenerator = () => {
  let summary = {
    '1': '',
    '2': '',
    '3': ''
  };

  for (var key in summary) {
    summary[key] = getRandomInt(23);
  }

  return summary;

};

const dataCreator = (tickers) => {
  // iterate through tickers 
  tickers.forEach((ticker) => {
    let stock = {};
    stock.ticker = ticker;
    stock.ratings = ratingsGenerator();
    stock.buySummary = summaryGenerator();
    stock.sellSummary = summaryGenerator();

    data.push(stock);

  });
};

const createdData = [
  {
    ticker: 'AAPL',
    company: 'Apple',
    ratings: {
      buy: 18,
      hold: 18,
      sell: 4
    },
    buySummary: {
      '1': '"Hammock +1 chartreuse, organic offal microdosing marfa cray. Skateboard microdosing poutine, XOXO retro you probably haven\'t heard of them cronut prism kickstarter godard vinyl occupy.',
      '2': 'sTilde williamsburg butcher, subway tile bitters man bun succulents letterpress fingerstache quinoa shoreditch freegan etsy direct trade taiyaki.',
      '3': 'Pug brooklyn paleo twee. Ugh thundercats gluten-free pinterest portland."'
    },
    sellSummary: {
      '1': '"Chicharrones etsy pork belly, snackwave kinfolk pinterest helvetica everyday carry swag lomo taiyaki street art post-ironic four dollar toast glossier. Roof party glossier ennui, humblebrag stumptown fashion axe skateboard',
      '2': 'Banh mi tattooed hoodie truffaut distillery. Stumptown palo santo godard you probably haven\'t heard of them vice.',
      '3': 'Fixie poke dreamcatcher YOLO locavore shabby chic hella ennui ugh cardigan."'
    }
  }
];

