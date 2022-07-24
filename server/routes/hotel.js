const express = require('express');
const  router =express.Router()

const {suggestCity,getCityHotels}=require('../controller/hotelSearch.js');

router.get('/search',suggestCity)
router.get('/hotels',getCityHotels)
module.exports = router;