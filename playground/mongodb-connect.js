const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(
  'mongodb://localhost:27017/ToDoApp',
  (err, db) => {
    if (err) {
      console.log('Unable to connect to Mongodb');
      return;
    }

    console.log('Connected to db');

    // db.collection('Todos').insertOne(
    //   {
    //     text: 'Something to do',
    //     completed: false,
    //   },
    //   (err, result) => {
    //     if (err) {
    //       console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );

    db.collection('Users').insertOne(
      {
        name: 'Jack Sparrow',
        age: 32,
        location: 'Tortuga',
      },
      (err, result) => {
        if (err) {
          console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
      }
    );

    db.close();
  }
);
