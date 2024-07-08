const jwt = require('jsonwebtoken')
const UserModel = require('../schema/user')
const authMiddleware = async(req,res,next) =>{

    const token = req.header('Authorization');
    
    if (!token) {
        return res.status(401).json({
        message: 'Unauthorized HTTP, Token not provided',
        });
    }
    const jwttoken = token.replace('Bearer', "").trim()
    try {
        const isverified = jwt.verify(jwttoken, process.env.JWT_SECRET_KEY);
        // console.log("isverified : ",isverified)
        const userData = await UserModel.findOne({ email: isverified.email }).select({
            password: 0,
        });
        // console.log("userData:" , userData)
        req.token = token;
        req.user = userData;
        req.userID = userData._id
        next();
    } catch (error) {
        return res.status(401).json({
        message: 'Invalid token',
        });
    }
}

module.exports = authMiddleware