const express = require('express');
const mongoose = require('mongoose');


const { body, validationResult } = require('express-validator/check');
const router = express.Router();
const Registration = mongoose.model('Registration');
const Log = mongoose.model('Log');

var username="";

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
  router.get('/signin.html', (req, res) => {
    res.render('signinform', { title: 'Sign in form' });
  });
  // router.get('/log.html', (req, res) => {
  //   //res.sendFile(__dirname + "/log.html");
  //   res.render('logform', { title: 'Log form' });
  // });
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
        username = req.body.email;
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

  router.post('/signin',  
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
        var myreg = Registration.findOne(
          {
            $and: [
                   { email : body('email')},
                   { birth : body('pass') }
                 ]
          }
       )
       if(myreg){
        //registration.save()
          username = req.body.email;
          res.sendFile(__dirname + "/index.html"); 
        }
        else{
          res.render('siform', {
            title: 'Sign in form',
            errors: errors.array(),
            data: req.body,
          });
        }
      } else {
      res.render('form', {
        title: 'Registration form',
        errors: errors.array(),
        data: req.body,
      });
    }
  });

  router.get('/log.html', (req, res) => {
    res.render('logform', { title: 'Log form' });
  });
  router.post('/logform',
  [
    body('outfit')
      .isLength({ min: 1 })
      .withMessage('Please enter an outfit'),
    body('temp')
      .isLength({ min: 1 })
      .withMessage('Please enter how you felt'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const log = new Log(req.body);
      log.email = username;
      log.save()

        .then(() => {  res.render('logform', { title: 'Log form' }); })
        .catch(() => { res.send('Sorry! Something went wrong.'); });
    } else {
      res.render('logform', { 
        title: 'Log form',
        errors: errors.array(),
        data:req.body,
   });
    }
  }
);
//module.exports = username;
module.exports = router;