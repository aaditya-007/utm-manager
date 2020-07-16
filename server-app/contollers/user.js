const User = require("../models/user");
const router = require("../routes/auth");
const { validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const { Result } = require("antd");
const jwt = require('jsonwebtoken');

exports.signUp = (req, res, next) => {
  const { email, name, password } = req.body;
  bcrypt
    .hash(password, 12)
    .then((hasPwd) => {
      const user = new User({
        email: email,
        password: hasPwd,
        firstName: name,
      });
      return user.save();
    })
    .then((result) => {
      res.status(201).json({
        message: "User Created",
        userId: result._id,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.login = (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({
    where: { email: email },
  })
    .then((user) => {
      if (!user) {
        res.status(200).json({
          message: "Not found",
        });
      } else {

        const loadedUser = user;

        bcrypt.compare( password, user.password)
        .then( isEqual => {
           if ( !isEqual) {
             const error = new Error('Wrong Password');
             res.status(200).json({
              message:'Not Found'
            });
           };

           console.log(loadedUser);
           const token = jwt.sign({ 
             email: loadedUser.email,
             userId: loadedUser._id
            }, 'thisisasecret', {
              expiresIn: '1h'
            });
            res.status(200).json({
              token: token,
              userId: loadedUser.id.toString()
            });
        })
      }
    })
    .catch((err) => {});
};
