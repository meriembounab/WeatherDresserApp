const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
  },
  outfit: {
    type: String,
    trim: false,
  },
  temp: {
    type: String,
    trim: false,
  },
});

module.exports = mongoose.model('Log', logSchema);