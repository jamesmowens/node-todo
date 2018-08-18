const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/ToDoApp',
  (err, db) => {
    if (err) {
      console.log('Unable to connect to Mongodb');
      return;
    }

    db.collection('Todos')
      .findOneAndUpdate(
        { _id: new ObjectId('5b7737ff458ababc6aedeb10') },
        { $set: { completed: true } },
        { returnOriginal: false }
      )
      .then(doc => console.log(doc));
  }
);
