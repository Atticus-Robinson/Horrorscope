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
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// set handlebar connection
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routes);

// connect database to server using Sequelize
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Ready to rock on port 3001.`));
});
