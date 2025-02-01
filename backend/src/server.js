import app from './app.js'
import connectDB from './db/dBConnection.js'
import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
}) 

const PORT = process.env.PORT


connectDB()
.then(() => {
    app.listen(PORT,() => {
        console.log(`server is running at PORT http://localhost:${PORT}`)  
    })
})
.catch((error) => {
    console.log("MongoDB Connection failed !!",error);
})




