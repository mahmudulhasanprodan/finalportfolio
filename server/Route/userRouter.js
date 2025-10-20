// External Imports
const express = require("express");
const router = express.Router();

// Internal Imports
const {userMessage} = require('../Middleware/userControler')
const {userValidation,validationErrorHandler} = require("../Middleware/userValidator")
// User Message Router is Here

router.post("/",userValidation,validationErrorHandler, userMessage);




module.exports = router