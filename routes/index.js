const express = require('express');
const router = express.Router();

const horoscope_controller = require('../controllers/horoscopeController');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Horoscope' });
});

router.get('/horoscope', horoscope_controller.get_horoscope);

module.exports = router;
