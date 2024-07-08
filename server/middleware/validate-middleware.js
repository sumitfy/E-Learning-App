

const validate = (schema) => async(req,res,next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        //"parseAsync" is the functiom in zod which takes the req.body and compare with
        //the zod schema that weather the entered details are correct or not 
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 442;
        const message = "Fill the input correctly"
        const extraDetails  = err.errors[0].message;
        const error = {
            status,
            message,
            extraDetails
        }
        console.log(error) 
        next(error) //this will go to error-middleware
    }
}

module.exports = validate