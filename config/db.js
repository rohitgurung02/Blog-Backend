const mongoose = require('mongoose');
const colors = require('colors')

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connected to MongoDB database`.bgMagenta.red)
    } catch (error) {
        console.log(`MongoDB Connection Error ${error}`.bgMagenta.white)
    }
};

module.exports = connectDB;