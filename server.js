const express = require('express')
const connectDB = require('./config/connectDB')

const app = express()
//middleware instead of bodyParser;
app.use(express.json())
const port = process.env.PORT || 5000

connectDB()

app.use('/person',require('./routes/person'))



app.listen(port, err=>
    err
    ?console.log('erreur')
    :console.log(`Serveur running on port : ${port}`)
    )