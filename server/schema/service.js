const mongoose = require('mongoose')
const serviceSchema = mongoose.Schema({
    "E_mainDesc": "string",
    "E_name": "string",
    "E_url": "string",
    "E_desc": "string",
    "step1": "string",
    "step2": "string",
    "step3": "string",
    "step4": "string",
    "step5": "string",
    "name": "string"
})

const serviceModel = mongoose.model("Service" , serviceSchema);
module.exports = serviceModel;