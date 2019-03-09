const stocks = [
  { 'ticker': 'ATVI', 'company': 'Activision Blizzard, Inc' },
  { 'ticker': 'ADBE', 'company': 'Adobe Inc.' },
  { 'ticker': 'AMD', 'company': 'Advanced Micro Devices, Inc.' },
  { 'ticker': 'ALXN', 'company': 'Alexion Pharmaceuticals, Inc.' },
  { 'ticker': 'ALGN', 'company': 'Align Technology, Inc.' },
  { 'ticker': 'GOOG', 'company': 'Alphabet Inc.' },
  { 'ticker': 'GOOGL', 'company': 'Alphabet Inc.' },
  { 'ticker': 'AMZN', 'company': 'Amazon.com, Inc.' },
  { 'ticker': 'AAL', 'company': 'American Airlines Group, Inc.' },
  { 'ticker': 'AMGN', 'company': 'Amgen Inc.' },
  { 'ticker': 'ADI', 'company': 'Analog Devices, Inc.' },
  { 'ticker': 'AAPL', 'company': 'Apple Inc.' },
  { 'ticker': 'AMAT', 'company': 'Applied Materials, Inc.' },
  { 'ticker': 'ASML', 'company': 'ASML Holding N.V.' },
  { 'ticker': 'ADSK', 'company': 'Autodesk, Inc.' },
  { 'ticker': 'ADP', 'company': 'Automatic Data Processing, Inc.' },
  { 'ticker': 'BIDU', 'company': 'Baidu, Inc.' },
  { 'ticker': 'BIIB', 'company': 'Biogen Inc.' },
  { 'ticker': 'BMRN', 'company': 'BioMarin Pharmaceutical Inc.' },
  { 'ticker': 'BKNG', 'company': 'Booking Holdings Inc.' },
  { 'ticker': 'AVGO', 'company': 'Broadcom Inc.' },
  { 'ticker': 'CDNS', 'company': 'Cadence Design Systems, Inc.' },
  { 'ticker': 'CELG', 'company': 'Celgene Corporation' },
  { 'ticker': 'CERN', 'company': 'Cerner Corporation' },
  { 'ticker': 'CHTR', 'company': 'Charter Communications, Inc.' },
  { 'ticker': 'CHKP', 'company': 'Check Point Software Technologies Ltd.' },
  { 'ticker': 'CTAS', 'company': 'Cintas Corporation' },
  { 'ticker': 'CSCO', 'company': 'Cisco Systems, Inc.' },
  { 'ticker': 'CTXS', 'company': 'Citrix Systems, Inc.' },
  { 'ticker': 'CTSH', 'company': 'Cognizant Technology Solutions Corporation' },
  { 'ticker': 'CMCSA', 'company': 'Comcast Corporation' },
  { 'ticker': 'COST', 'company': 'Costco Wholesale Corporation' },
  { 'ticker': 'CSX', 'company': 'CSX Corporation' },
  { 'ticker': 'CTRP', 'company': 'Ctrip.com International, Ltd.' },
  { 'ticker': 'DLTR', 'company': 'Dollar Tree, Inc.' },
  { 'ticker': 'EBAY', 'company': 'eBay Inc.' },
  { 'ticker': 'EA', 'company': 'Electronic Arts Inc.' },
  { 'ticker': 'EXPE', 'company': 'Expedia Group, Inc.' },
  { 'ticker': 'FB', 'company': 'Facebook, Inc.' },
  { 'ticker': 'FAST', 'company': 'Fastenal Company' },
  { 'ticker': 'FISV', 'company': 'Fiserv, Inc.' },
  { 'ticker': 'GILD', 'company': 'Gilead Sciences, Inc.' },
  { 'ticker': 'HAS', 'company': 'Hasbro, Inc.' },
  { 'ticker': 'HSIC', 'company': 'Henry Schein, Inc.' },
  { 'ticker': 'IDXX', 'company': 'IDEXX Laboratories, Inc.' },
  { 'ticker': 'ILMN', 'company': 'Illumina, Inc.' },
  { 'ticker': 'INCY', 'company': 'Incyte Corporation' },
  { 'ticker': 'INTC', 'company': 'Intel Corporation' },
  { 'ticker': 'INTU', 'company': 'Intuit Inc.' },
  { 'ticker': 'ISRG', 'company': 'Intuitive Surgical, Inc.' },
  { 'ticker': 'JBHT', 'company': 'J.B. Hunt Transport Services, Inc.' },
  { 'ticker': 'JD', 'company': 'JD.com, Inc.' },
  { 'ticker': 'KLAC', 'company': 'KLA-Tencor Corporation' },
  { 'ticker': 'LRCX', 'company': 'Lam Research Corporation' },
  { 'ticker': 'LBTYA', 'company': 'Liberty Global plc' },
  { 'ticker': 'LBTYK', 'company': 'Liberty Global plc' },
  { 'ticker': 'LULU', 'company': 'lululemon athletica inc.' },
  { 'ticker': 'MAR', 'company': 'Marriott International' },
  { 'ticker': 'MXIM', 'company': 'Maxim Integrated Products, Inc.' },
  { 'ticker': 'MELI', 'company': 'MercadoLibre, Inc.' },
  { 'ticker': 'MCHP', 'company': 'Microchip Technology Incorporated' },
  { 'ticker': 'MU', 'company': 'Micron Technology, Inc.' },
  { 'ticker': 'MSFT', 'company': 'Microsoft Corporation' },
  { 'ticker': 'MDLZ', 'company': 'Mondelez International, Inc.' },
  { 'ticker': 'MNST', 'company': 'Monster Beverage Corporation' },
  { 'ticker': 'MYL', 'company': 'Mylan N.V.' },
  { 'ticker': 'NTAP', 'company': 'NetApp, Inc.' },
  { 'ticker': 'NTES', 'company': 'NetEase, Inc.' },
  { 'ticker': 'NFLX', 'company': 'Netflix, Inc.' },
  { 'ticker': 'NVDA', 'company': 'NVIDIA Corporation' },
  { 'ticker': 'NXPI', 'company': 'NXP Semiconductors N.V.' },
  { 'ticker': 'ORLY', 'company': 'O\'Reilly Automotive, Inc.' },
  { 'ticker': 'PCAR', 'company': 'PACCAR Inc.' },
  { 'ticker': 'PAYX', 'company': 'Paychex, Inc.' },
  { 'ticker': 'PYPL', 'company': 'PayPal Holdings, Inc.' },
  { 'ticker': 'PEP', 'company': 'PepsiCo, Inc.' },
  { 'ticker': 'QCOM', 'company': 'QUALCOMM Incorporated' },
  { 'ticker': 'REGN', 'company': 'Regeneron Pharmaceuticals, Inc.' },
  { 'ticker': 'ROST', 'company': 'Ross Stores, Inc.' },
  { 'ticker': 'SIRI', 'company': 'Sirius XM Holdings Inc.' },
  { 'ticker': 'SWKS', 'company': 'Skyworks Solutions, Inc.' },
  { 'ticker': 'SBUX', 'company': 'Starbucks Corporation' },
  { 'ticker': 'SYMC', 'company': 'Symantec Corporation' },
  { 'ticker': 'SNPS', 'company': 'Synopsys, Inc.' },
  { 'ticker': 'TMUS', 'company': 'T-Mobile US, Inc.' },
  { 'ticker': 'TTWO', 'company': 'Take-Two Interactive Software, Inc.' },
  { 'ticker': 'TSLA', 'company': 'Tesla, Inc. ' },
  { 'ticker': 'TXN', 'company': 'Texas Instruments Incorporated' },
  { 'ticker': 'KHC', 'company': 'The Kraft Heinz Company' },
  { 'ticker': 'FOX', 'company': 'Twenty-First Century Fox, Inc.' },
  { 'ticker': 'FOXA', 'company': 'Twenty-First Century Fox, Inc.' },
  { 'ticker': 'ULTA', 'company': 'Ulta Beauty, Inc.' },
  { 'ticker': 'UAL', 'company': 'United Continental Holdings, Inc.' },
  { 'ticker': 'VRSN', 'company': 'VeriSign, Inc.' },
  { 'ticker': 'VRSK', 'company': 'Verisk Analytics, Inc.' },
  { 'ticker': 'VRTX', 'company': 'Vertex Pharmaceuticals Incorporated' },
  { 'ticker': 'WBA', 'company': 'Walgreens Boots Alliance, Inc.' },
  { 'ticker': 'WDC', 'company': 'Western Digital Corporation' },
  { 'ticker': 'WLTW', 'company': 'Willis Towers Watson Public Limited Company' },
  { 'ticker': 'WDAY', 'company': 'Workday, Inc.' },
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
    summary[key] = summaries[getRandomInt(23)];
  }

  return summary;

};

const dataCreator = (tickers) => {
  // iterate through tickers 
  stocks.forEach((company) => {
    let stock = {};
    stock.ticker = company.ticker;
    stock.company = company.company;
    stock.ratings = ratingsGenerator();
    stock.buySummary = summaryGenerator();
    stock.sellSummary = summaryGenerator();

    data.push(stock);

  });
};

