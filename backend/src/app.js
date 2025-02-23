import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({
    limit: '16kb'
}))
app.use(express.urlencoded({extended: true, limit: '16kb'}))
app.use(express.static('public'))
app.use(cookieParser())



// routes

import authRouter from "./routes/auth.routes.js" 
import productRouter from "./routes/products.routes.js"
import sellerProfileRouter from "./routes/seller/sellerProfile.routes.js"


// routes declaration


app.use("/api/v1/auth",authRouter)
app.use("/api/v1/seller",sellerProfileRouter)
app.use("/api/v1/product",productRouter)

export default app