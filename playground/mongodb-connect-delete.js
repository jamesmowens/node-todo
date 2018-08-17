const { MongoClient } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/ToDoApp',
  (err, db) => {
    if (err) {
      console.log('Unable to connect to Mongodb');
      return;
    }

    //   db.collection('Todos')
    //     .deleteMany({ text: 'Eat Lunch' })
    //     .then(result => console.log(result));
    // }
    // db.collection('Todos')
    //   .deleteOne({ text: 'Eat Lunch' })
    //   .then(result => console.log(result));

    db.collection('Todos')
      .findOneAndDelete({ completed: false })
      .then(doc => console.log(doc));
  }
);
