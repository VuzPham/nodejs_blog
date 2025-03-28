const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");
const methodOverride = require("method-override");

const app = express();
const port = 3002;

const route = require("./routes");
const db = require("./config/db");

// kết nối database
db.Connect();

// static route
app.use(express.static(path.join(__dirname, "public")));

// Cấu hình middlewaremiddleware
app.use(
  express.urlencoded({
    extended: true, // body-parser
  })
); // build middleware cầu nối giữa client và controller (form submit lên) FORM HTML
app.use(express.json()); // code js
// XML, fetch, axios
// GET, POST, ...
// HTTP Logger
// Morgan để phát hiện ra log terminal
app.use(morgan("combined"));

//overide method
app.use(methodOverride("_method"));

// Template engine:handlebar
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    helpers: {
      // custom sum trong handle bar
      sum: (a, b) => a + b,
    },
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource/views")); // convert lại Path
//console.log('PATH: ', path.join(__dirname, 'resource/views'))

// Route
route(app);

// Địa chỉ localhost
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// template engine
//Viết ra chứa má html nơi khác gọn gàng hơn chia layout, hiệu quả tương tự html thủ công
