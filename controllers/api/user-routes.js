const express = require('express');
const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const nodemailer = require('nodemailer');

// get all users
router.get('/', (req, res) => {
  User.findAll({
    // attributes: { exclude: ['password'] }
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Post,
        attributes: ['id', 'title', 'post_url', 'created_at']
      },
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'created_at'],
        include: {
          model: Post,
          attributes: ['title']
        }
      }
    ]
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // expects {email: 'rawk@rad.com', password: 'password1234', birthday: Libra}
  User.create({
    email: req.body.email,
    password: req.body.password,
    birthday: req.body.birthday
  })

    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.loggedIn = true;
        req.session.birthday = dbUserData.birthday;

        //nodemailer transporter
        // let transporter = nodemailer.createTransport({
        //   service: 'gmail', //gmail domain
        //   auth: {
        //     user: process.env.EMAIL,
        //     pass: process.env.PASSWORD,
        //   }
        // });
        //nodemailer
        // let mailOptions = {
        //   from: process.env.EMAIL, // our email address
        //   to: dbUserData.email, // email addresss upon sign up.
        //   subject: 'Welcome to Horrorscopes', // Subject line
        //   text: 'Welcome to Horrorscopes! Please let us know what you think of our application as well as other features you would like to see in a future update.' // body of email
        // };

        // transporter.sendMail(mailOptions, function (err, data) {
        //   if (err) console.log(err);
        //   else console.log('email successfully sent');
        // });

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  console.log(req.body);

  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then((dbUserData) => {
    if (!dbUserData) {
      console.log('user not found');
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      console.log('incorrect password');
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.email = dbUserData.email;
      req.session.id = dbUserData.id;
      req.session.birthday = dbUserData.birthday;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: 'You are now logged in!' });
    });
  });
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.put('/:id', (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234', birthday: '10081978'}

  // pass in req.body instead to only update what's passed through
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
