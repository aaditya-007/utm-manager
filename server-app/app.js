const express = require("express");
const app = express();
const _handlebars = require("handlebars");
const expressHbs = require("express-handlebars");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const userRouter = require("./routes/user");
const linkRoutes = require("./routes/links");
const templateRoutes = require("./routes/templates");
const errorController = require("./contollers/error");
const homeController = require("./contollers/home");
//const dotenv = require('dotenv').config();
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const port = 3000;

const sequelize = require("./util/database");

const baseDir = require("./util/path");
app.engine(
  "hbs",
  expressHbs({
    handlebars: allowInsecurePrototypeAccess(_handlebars),
  })
);
app.set("view engine", "hbs");
app.set("views", "views");

app.use((req,res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
})
//console.log("****",process.env)
app.use(express.static(baseDir + "/public"));
app.use(bodyParser.json());
app.use("/admin", adminRoutes);
app.use("/user", userRouter);
app.use("/links", linkRoutes);
app.use("/templates", templateRoutes);
app.get("/", homeController.getHome);
app.use(errorController.get404);

sequelize
  .sync()
  .then((result) => {
    console.log(result);
    app.listen(port, () =>
      console.log(`Example app listening at http://localhost:${port}`)
    );
  })
  .catch((err) => {
    console.log(err);
  });
