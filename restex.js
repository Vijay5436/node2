const experss = require('express');
const app = experss();
const bodyparser = require('body-parser');
const morgan = require('morgan');
app.use(bodyparser.json());
app.use(morgan('combined'));
const port = 8007;
var user =[]

app.post('/create/',(req,res) => {
    const {name,age,id} = req.body;
    console.log(name,age,id);
   user.push(name,age,id)
    res.send(user);
});
console.log(user);
app.delete('/delete/', (req, res) => {
    const { id } = req.body;
    console.log(id);
  
    if (id in user) {
      delete user[id];
      res.status(200).json({
        message: 'deleted successfully',
        user,
      });
     
    } else {
      res.status(404).json({
        message: 'Not found',
      });
    }
  });
app.put('/add',(req,res) => {
    const {value} = req.query;
    user.push(value);
    if(res.status(200)){
        res.send(user);
    }
    else {
        res.status(404).json(
            {
                massage:'Not found'
            }
        );
    }
});
var server = app.listen({
    port : port,
    host : 'localhost',
    exclusive: true
});
server.on('listening', () => {
   console.log('Listening',port);
});
server.on('error',() => {
   console.log('eroor',port);
});