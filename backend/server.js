require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const activityRoutes = require('./routes/activityRoutes')
const connectDB = require('./config/dbConn')
const corsOptions = require('./config/corsOptions')

connectDB()

app.use(cors(corsOptions))
app.use(express.json())
app.use('/activities', activityRoutes)

app.listen(process.env.PORT, () => {console.log(`Server is running on port ${process.env.PORT}`)})