const User = require("../models/user");
const router = require("../routes/auth");
const { validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const { Result } = require("antd");
const jwt = require('jsonwebtoken');




exports.signin = (req, res, next) => {
  
  //console.log('be',req.body);

  const { username:email, password } = req.body;
  //console.log('loadedUser',email, password);
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


exports.signup = (req, res, next) => {
 // console.log(req.body);
  const { email,name, password } = req.body;
  User.findOne({
    where: { email: email },
  }).then(userInfo=>{
    console.log("ui",userInfo);
    if(userInfo){
      console.log("email already registered!")
      return res.send("emailError")
    }
    bcrypt
    .hash(password, 12)
    .then((hasPwd) => {
      const user = new User({
        email: email,
        password: hasPwd,
        Name: name
      });
      return user.save();
    })
    .then((result) => {
      res.status(201).json({
        message: "User Created",
        userId: result.id,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
  }).catch((err) => {console.log(err)})
  
  
};