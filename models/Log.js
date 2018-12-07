const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  outfit: {
    type: String,
    trim: true,
  },
  temp: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('Log', logSchema);