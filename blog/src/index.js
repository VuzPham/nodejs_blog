const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path')
const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended:true
})); // build middleware cầu nối giữa client và controller (form submit lên) FORM HTML
app.use(express.json()); // code js
// XML, fetch, axios 
// GET, POST, ...  

// HTTP Logger
// Morgan để phát hiện ra log terminal
app.use(morgan('combined'));

// Template engine:handlebar
app.engine('hbs', handlebars.engine({
    extname:'.hbs'
}));  

app.set('view engine', 'hbs'); 
app.set('views', path.join(__dirname, 'resource/views')); // convert lại Path

//console.log('PATH: ', path.join(__dirname, 'resource/views'))

// Route
// req = request
// res = response 
// app.METHOd(PATH, Handler)
//* Method: lowdercase

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/new', (req, res) => {   
  console.log(req.query)
  res.render('news');
})
app.get('/search', (req, res) => {   
  res.render('search');
})
app.post('/search', (req, res) => {   
  console.log(req.body)
  res.send("")
})

// Địa chỉ localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// template engine
//Viết ra chứa má html nơi khác gọn gàng hơn chia layout, hiệu quả tương tự html thủ công