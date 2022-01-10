require('dotenv').config()
const express = require('express')
const {connectDB} = require('./database/database')
const cors = require('cors')
const users = require('./routes/users')
const adv = require('./routes/adv')
const admins = require('./routes/admins')
const coachs = require('./routes/coachs')
const calendars = require('./routes/calendars')
connectDB()

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/users',users)
app.use('/api/admins',admins)
app.use('/api/coachs',coachs)
app.use('/api/adv',adv)
app.use('/api/calendars',calendars)

app.use(express.urlencoded({ extended: false }))



const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))