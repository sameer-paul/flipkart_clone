import express from 'express'

const app = express()

const PORT = process.env.PORT || 8080

app.use('/',(req,res) => {
    res.send('hello');
})

app.listen(PORT,() => {
    console.log(`Server is up and running at http://localhost:${PORT}`);
})


