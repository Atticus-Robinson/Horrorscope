const { Signs } = require('../models');

const signsdata = [
  {
    sign_name: 'Taurus',
    sign_dates: 'APR 20 - MAY 20',
  },
  {
    sign_name: 'Gemini',
    sign_dates: 'MAY 21 - JUN 20',
  },
  {
    sign_name: 'Cancer',
    sign_dates: 'JUN 21 - JUL 22',
  },
  {
    sign_name: 'Leo',
    sign_dates: 'JUL 23 - AUG 22',
  },
  {
    sign_name: 'Virgo',
    sign_dates: 'AUG 23 - SEPT 22',
  },
  {
    sign_name: 'Libra',
    sign_dates: 'SEPT 23 - OCT 22',
  },
  {
    sign_name: 'Scorpio',
    sign_dates: 'OCT 23 - NOV 21',
  },
  {
    sign_name: 'Sagittarius',
    sign_dates: 'NOV 22 - DEC 21',
  },
  {
    sign_name: 'Capricorn',
    sign_dates: 'DEC 22 - JAN 19',
  },
  {
    sign_name: 'Aquarius',
    sign_dates: 'JAN 20 - FEB 18',
  },
  {
    sign_name: 'Pisces',
    sign_dates: 'FEB 19 - MAR 20',
  },
  {
    sign_name: 'Aries',
    sign_dates: 'MAR 21 - APR 19',
  }

]

const seedSigns = () => Signs.bulkCreate(signsdata);

module.exports = seedSigns;
