const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path')
const app = express();
const port = 3001;

const route = require(  './routes')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
  extended:true  // body-parser
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


route(app)


// Địa chỉ localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// template engine
//Viết ra chứa má html nơi khác gọn gàng hơn chia layout, hiệu quả tương tự html thủ công