const express = require('express');
const AppError =require('./utils/appError')
const app = express();



const PORT = process.env.PORT || 5000;

const hotelRoutes = require('./routes/hotel.js');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/hotel', hotelRoutes);
app.all('*',(req,res,next)=>{
    next(new AppError(`Cant find ${req.originalUrl} on this server`,404))
  })
  // error handler
  app.use((err,req,res,next)=>{
    res.status(err.status || 500);
    res.json( {
      status:err.status,
      message: err.message||'server error',
    })
  })

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));