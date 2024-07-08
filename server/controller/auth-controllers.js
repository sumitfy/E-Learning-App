
const UserModel = require('../schema/user')
const ContactModel = require('../schema/contact')
const home = (req,res) =>{
    return res.status(200).send('this is the home page')
}
const register = async(req,res) =>{
    const data = await req.body;
    const email = data.email;
    const userdata = await UserModel.findOne({email});
    if(userdata){
        return res.status(400).json({message:'User already registered'})
    }
    const userGenerated = await UserModel.create(data);
    return res.status(200).json({
        msg:'user created',
        token:await userGenerated.generateToken(),
        userID:userGenerated._id
    })
}
const login = async(req,res) =>{
    try {
        const userData = req.body;
        // console.log("UserDATA" , userData)
        const validuser = await UserModel.findOne({email:userData.email})
        // console.log(validuser)
        if(validuser){
            // console.log("i am in if now  ....... ")
            //password validation
            const validpass = await validuser.isValidPassword(userData.password)
            // console.log("is pass valid " ,  validpass)
            if(validpass){
                // console.log("i am  in  valid passs now  ......")
                return res.status(200).json({
                    msg:'logined successfully',
                    token: await validuser.generateToken(),
                    userID:validuser._id.toString()
                })
            }
            else{
                return res.status(400).json({message:'Password is incorrect'})
            }
        }
        else{
            return res.status(400).json({message:'Email is incorrect'})
        }

        // return res.status(401).json({
        //     msg:'Invalid email or password'
        // }
    } catch (err) { 
        console.log(err)
    }
}

const contact = async(req,res) =>{
    try {
        const contact_data = req.body;
        await ContactModel.create(contact_data);
        return res.json({
            msg:'message sent successfully'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send('internal server error')
    }
}
const user = async(req,res)=>{
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json(userData)
    } catch (error) {
        console.log("error from user route" )
    }

}
module.exports = {home , register , login , contact , user}