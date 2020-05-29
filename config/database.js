const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  
  //THIS IS WHAT CONNECTS APP TO THE CLOUD
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  mongoose.connect('mongodb://localhost/mongoose-meal-planner', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
//^^^^^^^^^^^ connection to local host ^^^^^^^^^^^^^^^^^^^^^

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});