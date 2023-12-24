const mongoose = require("mongoose")

const db = process.env.DATABASE

mongoose.connect(db,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>{
    console.log("Connection Established")
}).catch((error)=>console.log(error))