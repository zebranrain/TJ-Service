const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/');

app.listen(3001);