const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const connectDB = async() => {
    try{
        // Ket noi voi mongodb
        await mongoose.connect('mongodb://localhost:27017/ltdd');
        console.log('Connect successfully!!!');

    }
    catch(error){
        console.log('Connect failure!!!',error);
        process.exit(1);
    }
};
module.exports = connectDB;