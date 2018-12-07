const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  /*name: {
    type: String,
    trim: true,
  },*/
  email: {
    type: String,
    trim: true,
  },
  pass: {
      type: String,
      trim: true,
  }
});
/*const logSchema = new mongoose.Schema({
  outfit: {
    type: String,
    trim: true,
  },
  feel: {
      type: String,
      trim: true,
  }
});
module.exports = mongoose.model('Log', logSchema);*/
module.exports = mongoose.model('Registration', registrationSchema);