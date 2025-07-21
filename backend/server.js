require('dotenv').config()


const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const ticketRoutes = require('./routes/ticketRoute')
const seatRoutes = require('./routes/seatRoute')
const userRoutes = require('./routes/userRoute')
const fighterRoutes = require('./routes/fighterRoute')

// express app
const SirRocPromotions = express()


// cors control
SirRocPromotions.use(cors({
    origin: '*', 
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
}))





// middleware
SirRocPromotions.use(express.json())

SirRocPromotions.use((req, res, next) => {  
    console.log(req.path, req.method)
    next()
}) 



SirRocPromotions.use(express.json())



// routes
SirRocPromotions.use('/api/ticket/', ticketRoutes)
SirRocPromotions.use('/api/user/', userRoutes)
SirRocPromotions.use('/api/fighter/', fighterRoutes)
SirRocPromotions.use('/api/seat/', seatRoutes)


// connect to mongodb
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        
        
        // listen requests
        SirRocPromotions.listen(process.env.PORT, () => {
            console.log('SirRoc Promotions server is connected to database and running on port ' + process.env.PORT)
        })        
                
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err)
    })



