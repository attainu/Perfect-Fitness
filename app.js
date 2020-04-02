const express = require('express')
const passport = require('passport')
const dotenv = require('dotenv')
const cors = require("cors")

dotenv.config()
require('./db')
require('./utils/passport')
require('./utils/razorpay')
const app = express()
app.use(express.json())
app.use(
    cors({
      origin: "http://localhost:1234",
      allowedHeaders: ["Content-Type"]
    })
  )
app.use(passport.initialize())

app.use(require('./routers/apiRoutes/userApiRoutes'))
app.use(require('./routers/normalRoutes/userNormalRoutes'))
app.use(require('./routers/apiRoutes/adminApiRoutes'))
app.use(require('./routers/normalRoutes/adminNormalRoues'))
app.use(require('./routers/apiRoutes/trainerApiRoutes'))
app.use(require('./routers/normalRoutes/trainerNormalRoutes'))
app.use(require('./routers/apiRoutes/productApiRoutes'))
app.use(require('./routers/normalRoutes/productNormalRoutes'))
app.use(require('./routers/apiRoutes/commonApiRoutes'))
app.use(require('./routers/apiRoutes/gymsApiRoutes'))
app.use(require('./routers/normalRoutes/gymNormalRoutes'))
app.use(require('./routers/apiRoutes/membershipApiRoutes'))
app.use(require('./routers/normalRoutes/membershipNormalRoutes'))
app.use(require('./routers/apiRoutes/orderApiRoutes'))
app.use(require('./routers/normalRoutes/workoutNormalRoutes'))

app.get('/', (_, res)=>{res.status(200).json({Hey: 'Your project is gonna be awesome....!!!!!!!' })})

module.exports = app