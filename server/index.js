require('dotenv').config()
const express = require('express')
const {connectDB} = require('./database/database')
const cors = require('cors')
const auth = require('./routes/auth')
const users = require('./routes/users')

connectDB()

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/auth',auth)
app.use('/api/users',users)
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))