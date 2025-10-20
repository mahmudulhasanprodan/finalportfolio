
const mongoose = require("mongoose");

const peopleSchema = mongoose.Schema({
     name : {
        type : String,
        required : true,
     },
     email :{
        type : String,
        required: true,
     },
     message : {
        type: String,
        required: true,
     }
})


const People = mongoose.model("People", peopleSchema);

module.exports = People;