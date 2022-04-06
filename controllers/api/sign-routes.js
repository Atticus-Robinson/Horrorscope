const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Signs, User } = require('../../models');
const withAuth = require('../../utils/auth');

// get all signs
router.get('/', (req, res) => {
    console.log('==============');
    Signs.findAll ({
        attributes: [
            'sign_name',
            'sign_dates'
        ]
    })
})

module.exports = router;