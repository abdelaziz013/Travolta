const Amadeus = require("amadeus"),
    AppError = require('../utils/appError');
require('dotenv').config();
const clientId = process.env.AMADEUS_API_KEY;
const clientSecret = process.env.AMADEUS_SECRET_KEY;
// create amadeus API client
const amadeusClient = new Amadeus({ clientId, clientSecret });
//suggest city on city search
const path = require('path');
var fs = require("fs").promises
const suggestCity = async (req, res, next) => {
    try {
        const { keyword } = req.query;
        const response = await amadeusClient.referenceData.locations.get({
            keyword,
            subType: Amadeus.location.city,
        });
        const { data } = JSON.parse(response.body)
        const addressList = data.map(e => e.address)
        res.status(200).json(addressList);
    } catch (error) {
        const { description: { error_description } } = error
        next(new AppError(error_description, 406));
    }
}
// get hotels in selected city
const getCityHotels = async (req, res, next) => {
    try {
        const usersFilePath = path.join(__dirname, '../data/hotelsData.json');
        const data = await fs.readFile(usersFilePath, 'utf-8')
        res.header("Content-Type", 'application/json');
        res.status(200).send(data);
    } catch (error) {
        next(new AppError(error, 406));
    }
}
module.exports = { suggestCity, getCityHotels }