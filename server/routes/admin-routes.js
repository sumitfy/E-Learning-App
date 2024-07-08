const express = require("express")
const {users , contacts , services , DeleteUserById , UpdateUserDataById ,UserDataById, DeleteContactById} = require('../controller/admin-controllers')
const authMiddleware = require('../middleware/auth-middleware')
const adminMiddleware = require('../middleware/admin-middleware')
const router = express.Router()

router.route('/users').get(authMiddleware , adminMiddleware ,users)
router.route('/contacts').get(authMiddleware , adminMiddleware ,contacts)
router.route('/services').get(authMiddleware , adminMiddleware ,services)
router.route('/users/delete/:id').delete(authMiddleware , adminMiddleware , DeleteUserById)
router.route('/contact/delete/:id').delete(authMiddleware , adminMiddleware , DeleteContactById)
router.route('/user/:id').get(authMiddleware ,adminMiddleware, UserDataById)
router.route('/user/update/:id').patch(authMiddleware ,adminMiddleware, UpdateUserDataById)


module.exports = router;