const serviceModel = require('../schema/service')

const service = async(req,res) =>{
    try {
        const servicedata = await serviceModel.find({});
        // console.log("service data ; ", servicedata)
        res.status(200).json(servicedata)
    } catch (error) {
        console.log(`there is some error in service controller ${error}`)
        res.status(500).json({msg:'error in srevice data '})
    }   
}

module.exports = {service}
