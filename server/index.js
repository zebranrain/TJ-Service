const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const db = require('../database/index.js');
const data = require('../server/generated_data/seed');
const morgan = require('morgan');



const app = express();
const port = 3001;

app.use(cors());

app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/:ticker', express.static('./public'));

/** Data Seeder **/
db.seed(data);



app.get('/api/analystdata/:ticker', (req, res) => {
  const { ticker: stock } = req.params;

  db.datapull({ ticker: stock }, (err, results) => {
    if (err) { console.log('Error pulling data from DB'); }

    res.status(200).send(results).end();
    console.log('Ticker info has been updated!');
  });
  
});

app.get('/api/analystratings', (req, res) => {
  const stockId = req.query.ticker;

  db.apirequest(stockId, (err, results) => {
    if (err) { console.log('Error pulling Analyst Ratings from the DB'); }

    res.status(200).send(results).end();
    console.log('API request has been completed!');
  });

});

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});