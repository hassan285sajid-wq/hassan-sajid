import express from "express"
import  cors from "cors"
import cookiesParser from "cookies-parser"


const app = express()
app.use(cors({
    origin: process.env .Cors_ORIGEN,
    credentials:true

}))
app.use(express.json({limit: "16Kb"}))
app.use(express.urlencoded({extended:true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookiesParser)

export { app }