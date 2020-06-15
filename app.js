const express = require("express");
const app = express();
const _handlebars = require("handlebars");
const expressHbs = require("express-handlebars");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const userRouter = require("./routes/user");
const leadRoutes = require("./routes/leads");
const linkRoutes = require("./routes/links");
const errorController = require("./contollers/error");
const homeController = require("./contollers/home");
const {
  allowInsecurePrototypeAccess
} = require("@handlebars/allow-prototype-access");
const port = 3000;

const sequelize = require("./util/database");

const baseDir = require("./util/path");
app.engine(
  "hbs",
  expressHbs({
    handlebars: allowInsecurePrototypeAccess(_handlebars)
  })
);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static(baseDir + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRoutes);
app.use("/user", userRouter);
app.use("/leads", leadRoutes);
app.use("/link", linkRoutes);
app.get("/", homeController.getHome);
app.use(errorController.get404);

sequelize
  .sync()
  .then(result => {
    console.log(result);
    app.listen(port, () =>
      console.log(`Example app listening at http://localhost:${port}`)
    );
  })
  .catch(err => {
    console.log(err);
  });
