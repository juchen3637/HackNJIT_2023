require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const activityRoutes = require('./routes/activityRoutes')

app.use('/activities', activityRoutes)

app.listen(process.env.PORT, `Server is running on port ${process.env.PORT}`)