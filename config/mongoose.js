const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const uri = process.env.HABIT_URI;


// local db settingss
mongoose.connect('mongodb://127.0.0.1:27017/habit_tracker');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB Error'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
