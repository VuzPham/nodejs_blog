const newRouter = require('./news.routes')
const siteRouter = require('./site.routes')
function route(app) {     
    // Route
    // req = request
    // res = response 
    // app.METHOd(PATH, Handler)
    //* Method: lowdercase
    
    // app.get('/new', (req, res) => {   
    //   res.render('news');
    // })
    app.use("/news",newRouter)
    app.use("/",siteRouter)
}

module.exports = route