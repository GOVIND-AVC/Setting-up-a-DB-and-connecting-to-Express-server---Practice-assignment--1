const mongoose = require('mongoose')

const connectDb = async () => {
    try{
        mongoose.connect(process.env.MONGO_URI);
        console.log("connected")

    }catch(error){
        console.log("database not connected")
    }
}

module.exports = connectDb;