const express = require('express');
const app = express();
const hbs = require('hbs');
require('dotenv').config();


// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// servir contenido estatico
app.use(express.static('public'))


// app.use('/', (req, res)=>{
//     res.render('home')
// })
// app.use('/generic', (req, res)=>{
//     res.render('generic')
// })
// app.use('/elements', (req, res)=>{
//     res.render('elements')
// })
app.use('*', (req, res)=>{
    res.render(__dirname + '/public/index.html')
})




app.listen(process.env.PORT)

