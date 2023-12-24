const mongoose = require("mongoose")


const schema = new mongoose.Schema({
    email:String,
    password:String
})

const admin = mongoose.model("admin",schema)

// const add = async()=>{
//    await admin.deleteMany({})
//    await admin.insertMany({
//         email:process.env.Admin_Email,
//         password: process.env.Admin_Password
//     })
// }
// add()

module.exports = admin