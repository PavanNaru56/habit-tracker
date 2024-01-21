const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/habit_tracker');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting the mongodb"));

db.once('open', function(){
    console.log("Connected to the database");
});

module.exports = db;