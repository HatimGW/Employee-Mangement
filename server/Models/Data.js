const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    id:String,
    name:String,
    age :String,
    city:String,
    salary:String,
})

const Data = mongoose.model("Data",schema)
module.exports=Data;