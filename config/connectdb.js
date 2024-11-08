const mongoose = require('mongoose');
require('dotenv').config(); // Nạp biến môi trường
const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        // Ket noi voi mongodb
        await mongoose.connect('mongodb+srv://thao101191:dBM8FYL4lcdSCyTX@cluster0.clm1j.mongodb.net/cloud_server?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Connect successfully!!!');

    }
    catch(error){
        console.log('Connect failure!!!',error);
        process.exit(1);
    }
};
module.exports = connectDB;