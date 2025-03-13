const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path')
const app = express();
const port = 3001;

// HTTP Logger
// morgan để phát hiện ra log terminal
app.use(morgan('combined'));

// Template engine:handlebar
app.engine('hbs', handlebars.engine({
    extname:'.hbs'
}));  
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views')); // convert lại Path

//console.log('PATH: ', path.join(__dirname, 'resource/views'))

// Route
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/new', (req, res) => {
  res.render('news');
})
// Địa chỉ localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// template engine
//Viết ra chứa má html nơi khác gọn gàng hơn chia layout, hiệu quả tương tự html thủ công