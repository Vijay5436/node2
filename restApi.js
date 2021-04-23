const experss = require('express');

const app = experss();
const bodyparser = require('body-parser');
const morgan = require('morgan');

app.use(bodyparser.json());
app.use(morgan('combined'));
const port = 8008;

let user = {
  name: null,
  age: null,
  id: null,
};

app.get('/refresh', (req, res) => {
  res.send({ user });
});
app.post('/create', (req, res) => {
  const { name, age, id } = req.body;
  user.name = name;
  user.age = age;
  user.id = id;
  res.status(200).json({
    message: 'user created',
    updatedUser: user,
  });
  res.status(404).json({
    message: 'Page Not Found',
  });
});
app.put('/put', (req, res) => {
  user = req.body.user;
  res.status(200).json({
    message: 'user updeted succesfully',
    updatedUser: user,
  });
  res.status(404).json({
    message: 'Page Not Found',
  });
});
app.patch('/patch', (req, res) => {
  if (req.body.user && req.body.user.name) user.name = req.body.user.name;
  if (req.body.user && req.body.user.age) user.age = req.body.user.age;
  if (req.body.user && req.body.user.id) user.id = req.body.id;
  res.status(200).json({
    message: 'Value updated succesfully',
    updatedUser: user,
  });
  res.status(404).json({
    message: 'Page Not Found',
  });
});
app.delete('/del', (req, res) => {
  if (req.body.user && req.body.user.name) delete user.name;
  if (req.body.user && req.body.user.age) delete user.age;
  if (req.body.user && req.body.user.id) delete user.id;
  res.status(200).json({
    message: 'deleted succesfully',
    updatedUser: user,
  });
  res.status(404).json({
    message: 'Page Not Found',
  });
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
