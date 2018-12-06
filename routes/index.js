const express = require('express');
const mongoose = require('mongoose');


const { body, validationResult } = require('express-validator/check');
const router = express.Router();
const Registration = mongoose.model('Registration');

router.get('/', (req, res) => {
    res.render('form', { title: 'Registration form' });
  });
  router.get('/registrations', (req, res) => {
    Registration.find()
      .then((registrations) => {
        res.render('index', { title: 'Listing registrations', registrations });
      })
      .catch(() => { res.send('Sorry! Something went wrong.'); });
  });
  router.get('/getDressed.html', (req, res) => {
    res.sendFile(__dirname + "/getDressed.html");
  });
  router.get('/index.html', (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
  router.get('/log.html', (req, res) => {
    //res.sendFile(__dirname + "/log.html");
    res.render('logform', { title: 'Log form' });
  });
  router.post('/',  
  [
    body('email')
      .isLength({ min: 1 })
      .withMessage('Please enter an email'),
    body('pass')
      .isLength({ min: 1 })
      .withMessage('Please enter a password'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    
    if (errors.isEmpty()) {
        const registration = new Registration(req.body);
        registration.save()
          .then(() => { res.sendFile(__dirname + "/index.html"); })
          .catch(() => { res.send('Sorry! Something went wrong.'); });
      } else {
      res.render('form', {
        title: 'Registration form',
        errors: errors.array(),
        data: req.body,
      });
    }
  });
module.exports = router;