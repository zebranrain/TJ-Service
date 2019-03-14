const mongoose = require('mongoose');
const path = require('path');
const config = require(path.join(__dirname, './config'));


console.log(config.username);

mongoose.connect('mongodb+srv://username:password@friartuck-6zclk.mongodb.net/test?retryWrites=true', { 
  useNewUrlParser: true,
  user: config.username,
  pass: config.password
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('database connected!');
});

const tickerSchema = new mongoose.Schema({
  'ticker': String,
  'company': String,
  'ratings': {
    'buy': Number,
    'hold': Number,
    'sell': Number,
    'total': Number
  },
  'buySummary': {
    '1': String,
    '2': String,
    '3': String
  },
  'sellSummary': {
    '1': String,
    '2': String,
    '3': String
  }
});

let Ticker = mongoose.model('Ticker', tickerSchema);

let seed = (data) => {
  // db.dropDatabase();
  
  data.forEach((symbol) => {
    let newTicker = new Ticker(symbol);
    newTicker.save((err) => {
      if (err) { console.log('Error saving to DB'); }
    });
  });

  console.log('DB has been seeded');
};

let datapull = ({ ticker: symbol }, callback) => {
  Ticker.findOne({ ticker: symbol }, null, (err, docs) => {
    if (err) { console.error('Error pulling data from DB'); }

    callback(null, docs);
  });
};

let apirequest = (symbol, callback) => {
  Ticker.findOne( { ticker: symbol }, { ticker: 1, ratings: 1 }, (err, docs) => {
    if (err) { console.error('Error pulling API Request data from DB'); }

    callback(null, docs);
  });
};

module.exports = {
  // seed,
  datapull,
  apirequest
};