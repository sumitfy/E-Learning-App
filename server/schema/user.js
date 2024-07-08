const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserSchema = mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{    
        type:String
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

//using bcrypt.js to hash the password  -  next()  & this
UserSchema.pre('save' , async function(next){
    const userdata  = this;  //'this' is same as req.body
    console.log('user data from this ' , userdata)  ;
    if(!userdata.isModified){
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10); 
        const hash_pass = await bcrypt.hash(userdata.password , salt);
        userdata.password = hash_pass
    } catch (error) {
        console.log('there is some error while hashing ')
    }
    return next();
})
UserSchema.methods.generateToken = async function(){
    console.log('i am in token')
    try {
        return jwt.sign(
            {
              userId: this._id.toString(),
              email: this.email,
              isAdmin: this.isAdmin,
            },
            process.env.JWT_SECRET_KEY,
            {
              expiresIn: "30d",
            }
          );
    } catch (error) {
        console.error("Token Error: ", error);
    }
}
UserSchema.methods.isValidPassword = async function(password){
    return bcrypt.compare(password , this.password)
}

module.exports = mongoose.model("UserModel" , UserSchema)