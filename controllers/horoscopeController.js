const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');

import { getSign, getZodiac } from 'horoscope';

exports.get_horoscope = asyncHandler(async (req, res) => {
	const bdate = req.body.bday;
	const year = parseInt(bdate.substring(0,4));
	const month = parseInt(bdate.substring(5,7));
	const day = parseInt(bdate.substring(8,10));
	
	const sign = horoscope.getSign({month: month, day: day});
	const zodiac = horoscope.getZodiac(year);
	
	res.render('index', { title: 'Horoscope', sign: sign, zodiac: zodiac });
});