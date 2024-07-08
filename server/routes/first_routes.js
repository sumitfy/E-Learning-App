const express = require('express');
const router = express.Router();
const authControllers = require('../controller/auth-controllers')
const authMiddleware = require('../middleware/auth-middleware')
const {registerSchema,LoginSchema} = require('../validators/auth-validator')
// const LoginSchema = require('../validators/auth-validator')
const validate = require('../middleware/validate-middleware')

router.route('/').get(authControllers.home)
router.route('/register').post(validate(registerSchema),authControllers.register)
router.route('/login').post(validate(LoginSchema),authControllers.login)
router.route('/contact').post(authControllers.contact)
router.route('/user').get(authMiddleware , authControllers.user)


module.exports = router;
