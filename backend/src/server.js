import connectDB from './db/dBConnection.js'
import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
}) 

connectDB()


