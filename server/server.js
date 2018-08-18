const express = require('express');
const bodyParser = require('body-parser');
var { ObjectID } = require('mongodb');

const { mongoose } = require('./db/mongoose');
const { User } = require('./models/user');
const { Todo } = require('./models/todo');

const idPrint = id => console.log(id);
const app = express();
const process = process.env.PORT || 3000;
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

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id)
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }

      res.send({ todo });
    })
    .catch(e => {
      res.status(400).send();
    });
});

app.listen(port, () => {
  console.log(`started on ${port}`);
});

module.exports = { app };
