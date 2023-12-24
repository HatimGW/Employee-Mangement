const express = require("express");
const app = express();
const cors = require("cors")
const bodyparser = require("body-parser")
require("dotenv").config()
const cookieParser = require("cookie-parser")
app.use(cookieParser())
app.use(bodyparser.json())


const PORT = process.env.PORT || 3009

app.use(cors({
    origin:"https://employeemanagemnt.netlify.app",
    credentials:true
}))

require("./db/connect")

const API = require("./API/Api")
app.use(API)

app.listen(PORT,()=>{
    console.log(PORT)
})