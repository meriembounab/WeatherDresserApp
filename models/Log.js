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
  otemp:{
    type: Number,
    trim: true,
  }
});

module.exports = mongoose.model('Log', logSchema);