//Application require
const express = require('express')
const app = express();
const port = 8080;
//Routes require
const userRoute = require('./routes/user')
const homeRoute = require('./routes/home')
//Application setting
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
//Static files
app.use(express.static('assets'));

//Application routes
app.use('/users', userRoute);
app.use('/', homeRoute);

//Application port server
app.listen(process.env.PORT || 3000);