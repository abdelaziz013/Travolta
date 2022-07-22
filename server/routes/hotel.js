const express = require('express');
const  router =express.Router()

const {suggestCity }=require('../controller/hotelSearch.js');

router.get('/search',suggestCity)

module.exports = router;