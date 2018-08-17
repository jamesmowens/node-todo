const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(
  'mongodb://localhost:27017/ToDoApp',
  (err, db) => {
    if (err) {
      console.log('Unable to connect to Mongodb');
      return;
    }

    db.collection('Todos')
      .find()
      .toArray()
      .then(
        docs => {
          console.log('Todos');
          console.log(JSON.stringify(docs, undefined, 2));
        },
        err => console.log('failed')
      );
  }
);
