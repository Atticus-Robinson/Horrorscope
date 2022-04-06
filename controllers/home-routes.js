const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
  res.render('homepage2')
})

router.get('/daily-reading', (req, res) => {
  console.log(req.session)
  let date;
  const signArray = [{
    sign_name: 'bull',
    sign_dates: 'APR 20 - MAY 20',
  },
  {
    sign_name: 'gemini',
    sign_dates: 'MAY 21 - JUN 20',
  },
  {
    sign_name: 'cancer',
    sign_dates: 'JUN 21 - JUL 22',
  },
  {
    sign_name: 'leo',
    sign_dates: 'JUL 23 - AUG 22',
  },
  {
    sign_name: 'virgo',
    sign_dates: 'AUG 23 - SEPT 22',
  },
  {
    sign_name: 'libra',
    sign_dates: 'SEPT 23 - OCT 22',
  },
  {
    sign_name: 'scorpio',
    sign_dates: 'OCT 23 - NOV 21',
  },
  {
    sign_name: 'sagittarius',
    sign_dates: 'NOV 22 - DEC 21',
  },
  {
    sign_name: 'capricorn',
    sign_dates: 'DEC 22 - JAN 19',
  },
  {
    sign_name: 'aquarius',
    sign_dates: 'JAN 20 - FEB 18',
  },
  {
    sign_name: 'pisces',
    sign_dates: 'FEB 19 - MAR 20',
  },
  {
    sign_name: 'aries',
    sign_dates: 'MAR 21 - APR 19',
  }

]
  for (i=0; i<signArray.length; i++){
    if (signArray[i].sign_name == req.session.birthday) {
      date = signArray[i].sign_dates
    }
  }
 
  res.render('daily-reading', {
   email: req.session.email,
   birthday: req.session.birthday,
   login: req.session.loggedIn,
   date: date,
   image: '/images/cards/'+req.session.birthday+'.png'
  })
})

router.get('/all-signs', (req, res) => {
  res.render('all-signs')
})

router.get('/abyss', (req, res) => {

  console.log(req.session);
  console.log('======================');
  Post.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'description',
      'created_at'
    ],
    include: [
      // {
      //   model: Comment,
      //   attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
      //   include: {
      //     model: User,
      //     attributes: ['birthday']
      //   }
      // },
      {
        model: User,
        attributes: ['birthday']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('abyss', { posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

router.get('/create-account', (req, res) => {
  res.render('create-account')
})

router.get('/logout', (req, res) => {
  res.render('/')
})

// get single post
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'post_url',
      'title',
      'created_at'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['birthday']
        }
      },
      {
        model: User,
        attributes: ['birthday']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const post = dbPostData.get({ plain: true });

      res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
