const { Horoscope } = require("../models");

const horoscopeData = [
  {
    horoscope_text:
      "Much like your friends and family, the universe has grown tired of your crap. Probably a good idea to just sit this one out today and take the L.",
    user_id: 1,
    sign_id: 2,
  },
  {
    horoscope_text:
      "You know those days when you feel like the world is against you, but you can stay mentally strong and persevere? Yeah- today isn't one of those days. However, you can still have a useful and eventful day... by walking head-long into traffic.",
    user_id: 2,
    sign_id: 3,
  },
  {
    horoscope_text:
      "Sweet luna is passing through your 4th house of connections, so be on the lookout for an unexpected call or text. From a friend, maybe- which would be incredibly unexpected for you.",
    user_id: 3,
    sign_id: 4,
  },
  {
    horoscope_text:
      "You have completely struck out with your children, so parenting is clearly not your strong suit. It's an auspicious day to try your hand at pet parenting. But not a real pet.. maybe like a goldfish. The memory of a goldfish is far too short to remember your shortcomings, of which there are plenty.",
    user_id: 4,
    sign_id: 5,
  },
  {
    horoscope_text:
      "Nope. Not today. The universe is done making things easy for you. And let's face it- you haven't exactly taken advantage of the easy times. Grab a blanket, some booze, and wrap yourself in a self-hug, as you have no one in your life to hold you.",
    user_id: 1,
    sign_id: 3,
  },
  {
    horoscope_text:
      "Your 7th house of passion and intimate associations is scorching! Today is the day to make your move on that special someone. Carpe diem! For real, don't do any of that. You strike out harder than the '52 Pittsburgh Pirates. Intense self-reflection should be your priority for the day; perhaps then you will get some answers. And then share them with the universe so that we all know precisely what's wrong with you.",
    user_id: 2,
    sign_id: 1,
  },
];

const seedComments = () => Horoscope.bulkCreate(horoscopeData);

module.exports = seedComments;