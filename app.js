//Application require
const express = require('express')
const app = express();
const port = 8080;
//Routes require
const userRoute = require('./routes/user')

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
app.get('/', function (req, res) {
    res.send("<h2>This is my first app</h2>");
})

//Application port server
app.listen(port, () => {
    console.log(`Server is running at ${port}`)
});