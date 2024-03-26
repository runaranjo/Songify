// APP require
const express = require('express')
const expressLayouts = require('express-ejs-layouts')

// Create express instance
const app = express()

// Routers
const indexRouter = require('./routes/index')
const songRouter = require('./routes/songs/songs')

// APP SET
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')

// APP USE
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.urlencoded({ limit: '10mb', extended: false } ))

//Routers
app.use('/', indexRouter)
app.use('/songs', songRouter)


app.listen(process.env.PORT || 3000, () => {
    console.log('Connected to port 3000')
})


