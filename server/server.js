const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { User } = require('./models/user');
const { Todo } = require('./models/todo');

const idPrint = id => console.log(id);
const app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  new Todo({ text: req.body.text })
    .save()
    .then(doc => res.send(doc), err => res.status(400).send(err));
});

app.get('/todos', (req, res) => {
  console.log('hi');
  Todo.find().then(todos => res.send({ todos }), e => res.status(400).send(e));
});

app.listen(3000, () => {
  console.log('started on port 3000');
});

module.exports = { app };
