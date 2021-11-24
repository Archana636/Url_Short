const express = require('express')
const mongoose = require('mongoose')

const app = express()

//Middleware
app.use(express.json())
app.set('view engine', 'ejs')

const db = 'mongodb+srv://archu_123:zhv2OUkGHzIZfkBe@url.uafje.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose
    .connect(db, {
        useNewUrlParser : true,
        // useCreateIndex : true,
        useUnifiedTopology : true
    })
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Database connection error : '+err))

app.use('/', require('./routes/url'))
// app.use('/',(req,res) => res.render('home'))

app.listen(5000, () => console.log('Server is running on PORT 5000'))