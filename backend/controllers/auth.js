const { validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed.');
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  const email = req.body.email;
  const name = req.body.name;
  const password = req.body.password;
  bcrypt
    .hash(password, 12)
    .then(hashedPw => {
      User.create({
        email: email,
        password: hashedPw,
        name: name
      })
      .then(result => {
        res.status(201).json({ message: 'User created!', userId: result.id });
      })
    })
    .catch(err => {
      console.log(err)
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let loadedUser;
  User.findOne({ where: { email: email } })
    .then(user => {
      if (!user) {
        const error = new Error('A user with this email could not be found.');
        error.statusCode = 401;
        throw error;
      }
      loadedUser = user;
      console.log("user found")
      return bcrypt.compare(password, user.password);

    })
    .then(isEqual => {
      if (!isEqual) {
        const error = new Error('Wrong password!');
        console.log("password wri=ong")
        error.statusCode = 401;
        throw error;
      }
      console.log("password matched")
      const token = jwt.sign(
        {
          email: loadedUser.email,
          userId: loadedUser.id
        },
        'somesupersecretsecret',
        { expiresIn: '1h' }
      );
      console.log("login success",token)
      res.status(200).json({ token: token, userId: loadedUser.id });
    })
    .catch(err => {
      console.log(err)
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};