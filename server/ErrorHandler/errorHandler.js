const createError  = require("http-errors")


const notFoundHandler = (req,res,next) => {
    next(createError(401,"This Content is not found"));
};

const errorHandler = (err,req,res,next) => {
   if(process.env.NODE_ENV === "development"){
     res.send(err)
   }else{
    res.send(err.message)
   }
     
};



module.exports = {
    notFoundHandler,
    errorHandler
}