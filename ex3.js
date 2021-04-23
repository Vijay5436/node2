const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(morgan('combined'));


app.get('/name/:name', (req, res) => {
  res.send(`Entered name is : ${req.params}`);
});


app.get('/id/:name', (req, res) => {
  res.send(`Entered id is : ${req.params}`);
});

app.get('/place/:name', (req, res) => {
  res.send(`Entered place is : ${req.params.name}`);
});

app.get('/number/:from-:to', (req, res) => {
  res.send(req.params);
});

app.get('/value/:value1.:value2', (req, res) => {
  res.send(req.params);
});
app.get('/fullname/', (req, res) => {
  const { fristName, lastName } = req.query;
  const fullName = `${fristName}${lastName}`;
  res.send(`Full Name is : ${fullName}`);
});
app.get('/add', (req, res) => {
  const { a, b } = parseInt(req.query);
  const sum = a + b;
  res.send(`sum is : ${add}`);
});
app.post('/calculation', (req, res) => {
  const { a, b } = req.body;
  const sum = a + b;
  res.send(`sum = ${sum}`);
});

const server = app.listen({
  port,
  host: 'localhost',
  exclusive: true,
});
server.on('listening', () => {
  console.log('Listening', port);
});
server.on('error', () => {
  console.log('eroor', port);
});
