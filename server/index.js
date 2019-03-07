const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


app.use('/:ticker', express.static(__dirname + '/../public'));

app.get('api/:stockId', (req, res) => {
  const stockId = req.params;

  console.log('this is the stock id:', stockId);
});

app.listen(3001);