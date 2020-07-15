const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')
const http = require('http')

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
const authRoute = require('./auth/routes')

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(cors())

app.use('/api/auth', authRoute)

server.listen(PORT, () => {
    console.log('Server up and running')
})


