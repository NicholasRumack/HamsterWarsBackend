const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

// "app" should be called server

const hamsters = require('./routes/hamsters.js')

const PORT = process.env.PORT || 1338
const staticFolder = path.join(__dirname, 'frontend')
const staticimgs = path.join(__dirname, 'img')

//Middleware
//Logger - Write info about incoming requests

app.use((req, res, next) => {
	console.log(`${req.method}  ${req.url} `, req.params);
	next()
})

app.use( express.json() )
app.use( cors() )
app.use( express.static(staticFolder) )
app.use( '/img', express.static(staticimgs))




//This is a route
app.get('/', (req, res) => {
	res.send('the project')
})

//REST API
app.use('/hamsters', hamsters)

app.listen(PORT, () => {
	console.log('server is listening' + PORT)
})