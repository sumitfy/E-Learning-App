const express = require("express")
const serviceRouter = express.Router()
const serviceController = require('../controller/service-controller')

serviceRouter.route('/service').get(serviceController.service)

module.exports = serviceRouter