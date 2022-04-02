// dependencies
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const nodemailer = require('nodemailer');

// middleware
const app = express();
const PORT = process.env.PORT || 3001;
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// establish session rules
const sess = {
  secret: 'secretSquirrel',
  cookie: {
    // end session on idle for 10 minutes
    expires: 10 * 60 * 1000
  },
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// set express rules
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// set handlebar connection
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routes);

// connect database to server using Sequelize
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Ready to rock on port 3001.`));
});

//nodemailer transporter
var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
         user: 'horrorscope_project@outlook.com',
         pass: 'horrorscopes*123'
     }
 });

 //nodemailer
 const mailOptions = {
  from: 'horrorscope_project@outlook.com', // our email address
  to: '', // email addresss upon sign up. Pull from DataBase
  subject: 'Welcome to Horrorscopes', // Subject line
  html: '<p>Welcome to Horrorscopes! Please let us know what you think of our application as well as other features you would like to see in a future update.</p>'// plain text body
};

// transporter.sendMail(mailOptions, function (err, info) {
//   if(err)
//     console.log(err)
//   else
//     console.log(info); 
// });