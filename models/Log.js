const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    
  email: {
    type: String,
    trim: true,
  },
  temp: {
    type: Number,
    trim: true,
  },
  wore: {
      type: String,
      trim: true,
  },
  felt:{
      type: String,
      trim: true
  }
});

module.exports = mongoose.model('Log', logSchema);