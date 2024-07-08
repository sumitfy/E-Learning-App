const UserModel = require('../schema/user')
const contactModel = require('../schema/contact')
const serviceModel = require('../schema/service');
const user = require('../schema/user');


const users = async(req , res ,next) =>{
    try {
        const userdata = await UserModel.find({})
        .select({
            password : 0,
        });
        if(!userdata || userdata.length === 0){
            return res.status(404).json({message:'no data available'})
        }
        return res.status(200).json(userdata)
    } catch (error) {
        // return res.status(404).json({message:'Error Occured'})
        next(error)
    }
}

const DeleteUserById = async(req,res,next) =>{
    try {
        const userid = req.params.id;
        if(userid == ""){
            return res.status(400).json({message:'No user Id found to delete'})
        }
        await UserModel.deleteOne({_id : userid})
        return res.status(200).json({message:'User deleted Successfully'})
    } catch (error) {
        next(error)
    }
}

const contacts = async(req,res,next) =>{
    try {
        const contactsData = await contactModel.find({})
        if(!contactsData || contactsData.length === 0){
            return res.status(404).json({message:'no data available'})
        }
        return res.status(200).json(contactsData)
    } catch (error) {
        next(error)
    }
}

const services = async(req,res,next) =>{
    try {
        const serviceData = await serviceModel.find({})
        if(!serviceData || serviceData.length === 0){
            return res.status(404).json({message:'no data available'})
        }
        return res.status(200).json(serviceData)
    } catch (error) {
        next(error)
    }
}

const UserDataById = async(req,res,next) =>{
    try {
        const userid = req.params.id;
        const data = await UserModel.find({_id:userid},{password:0})
        res.status(200).json(data);
    } catch (error) {
        next(error)
    }
}

const UpdateUserDataById = async(req,res,next) =>{
    try {
        const userId = req.params.id;
        const UpdateData = req.body;
        const data = await UserModel.updateOne({_id:userId} , {
            $set:UpdateData
        })
        return res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}

const DeleteContactById= async(req,res,next) =>{
    try{
        const id = req.params.id;
        if(id == ""){
            return res.status(404).json({message:'No contact Found'})
        }
        await contactModel.deleteOne({_id:id});
        return res.status(200).json({message:'User deleted Successfully'})
    }
    catch(error){
        next(error)
    }
}

module.exports = {users , contacts , services, UserDataById , DeleteUserById  , UpdateUserDataById , DeleteContactById}