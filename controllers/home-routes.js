const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
  res.render('homepage2')
})

router.get('/daily-reading', (req, res) => {
  console.log(req.session)
  res.render('daily-reading', {
   email: req.session.email,
   username: req.session.username,
   login: req.session.loggedIn 
  })
})

router.get('/all-signs', (req, res) => {
  res.render('all-signs')
})

router.get('/abyss', (req, res) => {
  res.render('abyss')
})

router.get('/create-account', (req, res) => {
  res.render('create-account')
})

router.get('/logout', (req, res) => {
  res.render('/')
})

// get all posts for homepage2
// router.get('/', (req, res) => {
//   console.log('======================');
//   Post.findAll({
//     attributes: [
//       'id',
//       'post_url',
//       'title',
//       'created_at'
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       const posts = dbPostData.map(post => post.get({ plain: true }));

//       res.render('index', {
//         posts,
//         loggedIn: true
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

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
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
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
