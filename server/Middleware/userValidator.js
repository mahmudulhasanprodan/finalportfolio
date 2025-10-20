const {check, validationResult} = require("express-validator")
const createError = require("http-errors");
const People = require("../Schema/userSchema");

const userValidation = [
    check("name")
    .isLength({min: 1})
    .withMessage("Name is required")
    .isAlpha("en-US", {ignore : " -"})
    .withMessage("Name must contain only letters")
    .trim(), 

    check("email")
    .isEmail()
    .withMessage("Email is Required")
    .trim()
    .custom(async (value) => {
      try {
       const newUser = await People.findOne({email : value});
       if(newUser){
         throw createError("Email already in use!");
       };
      } catch (err) {
        throw createError(err.message)
      }
    }),

    check("message")
    .isLength({min : 1})
    .withMessage("Message is required")
    .trim()
];

const validationErrorHandler  = function (req,res,next) {
      const error = validationResult(req);
      const MappedError = error.mapped();
      if(Object.keys(MappedError).length === 0){
        next()
      }else{
      res.status(500).json({
          error : MappedError
        })
      }
};




module.exports = {
    userValidation,
    validationErrorHandler
}