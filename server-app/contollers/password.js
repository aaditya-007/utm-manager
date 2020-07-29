const jwt = require('jsonwebtoken');
const emailhelper=require("../util/email");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const router = require("../routes/auth");

const usePasswordHashToMakeToken = ({
  password,
     id, 
    createdAt
  }) => {
    
    console.log(password);
    console.log(id);
    console.log(createdAt);
    const secret = password + "-" + createdAt
    const token = jwt.sign({ 
      id }, secret, {
      expiresIn: 3600 // 1 hour
    })
  
    return token
  }

  exports.sendPasswordResetEmail =  (req, res) => {
    const { email } = req.body
    User.findOne({
      where: { email: email },
    }).then(user=>{
      //console.log('user',user);
      if(user){
        const token = usePasswordHashToMakeToken(user);
        const url = emailhelper.getPasswordResetURL(user.id, token);
         const emailTemplate = emailhelper.resetPasswordTemplate(user, url)
       // console.log(emailTemplate);
        const sendEmail = () => {
          emailhelper.transporter.sendMail(emailTemplate, (err, info) => {
            if (err) {
              res.status(500).json("Error sending email")
              console.log(`** Email not sent **`, err)
            }else{
              res.send("sent!")
            }
           
          })
        }
        sendEmail()
      }else{
        res.send("no user with this email")
      }
    }).catch(err=>console.log(err))
  }

  exports.receiveNewPassword = (req, res) => {

    const { password ,userId,token} = req.body
   
//     // highlight-start
     User.findOne({where: { id: userId }})
       .then(user => {
         const secret = user.password + "-" + user.createdAt
         const payload = jwt.decode(token, secret)
         console.log("pay",payload);
        if (payload.id === user.id) {
          bcrypt.genSalt(10, function(err, salt) {
            // Call error-handling middleware:
            if (err) return
            bcrypt.hash(password, salt, function(err, hash) {
              // Call error-handling middleware:
              if (err) return
              User.findOne({ id: userId }).then((user)=>user.update({ password: hash }))
                .then(() => res.status(202).json("Password changed accepted"))
                .catch(err => res.status(500).json(err))
            })
          })
        }
      })
      // highlight-end
      .catch(() => {
        res.status(404).json("Invalid user")
      })
  }