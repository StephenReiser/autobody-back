const cors = require('cors')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3003
const mongoose = require('mongoose')



///////middleware
app.use(express.json()); 
// converting to json

app.use(cors())

// Just trying to avoid cors issues


///////mongoose connection
mongoose.connection.on('error', err => console.log(err.message + 'is Mongod not running?'))

mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/autobodyshops';


mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
})


/////Routes
const customerController = require('./controllers/customers')
app.use('/customers', customerController)



app.listen(PORT, () => {
    console.log('express running on port: ' + PORT)
})
