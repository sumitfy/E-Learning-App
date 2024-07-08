const adminMiddleware = async(req,res,next) =>{
    try {
        const Adminrole = req.user.isAdmin;
        // console.log(Adminrole);
        if(!Adminrole){
            return res.status(400).json({message : 'User is not Admin'})
        }
        // return res.status(200).json({message:Adminrole})
        next();
    } catch (error) {
        next(error)
    }
}

module.exports = adminMiddleware