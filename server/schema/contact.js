const mongoose = require('mongoose')
const contactSchema = mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    message:{
        type:String
    }
})

module.exports = mongoose.model('contactModel' , contactSchema);