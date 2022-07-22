const Amadeus = require("amadeus"),
AppError = require('../utils/appError');
require('dotenv').config();
const clientId = process.env.AMADEUS_API_KEY;
const clientSecret = process.env.AMADEUS_SECRET_KEY;
// create amadeus API client
const amadeusClient = new Amadeus({ clientId:'pop', clientSecret });
//suggest city on city search
const suggestCity = async (req, res,next) => {
    // console.log(amadeusClient)
    try {
        const { keyword } = req.query;
        const response = await amadeusClient.referenceData.locations.get({
            keyword,
            subType: Amadeus.location.city,
        });
        const {data}=JSON.parse(response.body)
        res.status(200).json(data);
    } catch (error) {
        const {description:{error_description}}=error
        next(new AppError(error_description, 406));
    }
}
module.exports = { suggestCity }