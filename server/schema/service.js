const mongoose = require('mongoose')
const serviceSchema = mongoose.Schema({
    "title": "string",
    "description": "string",
    "instructor": "string",
    "duration": "string",
    "price": "string",
    "category": "string",
    "imageUrl": "string",
})

const serviceModel = mongoose.model("Service" , serviceSchema);
module.exports = serviceModel;