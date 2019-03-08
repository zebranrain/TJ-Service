const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/friartuck', { useNewUrlParser: true });

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

// let save = (symbol) => {
//   let newTicker = new Ticker(symbol);
//   newTicker.save((err) => {
//     if (err) { console.log('Error saving to DB'); }
//     console.log('Ticker data saved to DB');
//   });
// };

let seed = (data) => {

  //   console.log('this is the data:', data);
  
  //   Ticker.remove({}, (err) => {
  //     if (err) { console.log('Error dropping documents'); }
  //     console.log('Collection dropped');
  //   });

  db.dropDatabase();
  
  data.forEach((symbol) => {
    let newTicker = new Ticker(symbol);
    newTicker.save((err) => {
      if (err) { console.log('Error saving to DB'); }
    });
  });

  console.log('DB has been seeded');
};

let pull = (symbol, callback) => {
  // write the query with the symbol
  Ticker.find({ ticker: symbol }, (err, docs) => {
    if (err) { console.error(err); }

    callback(null, docs);
  });
};

module.exports = {
//   save,
  seed,
  pull
};