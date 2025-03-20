const Course = require("../models/Course");

class SiteController {
  async index(req, res, next) {
    try {
      //.lean() trả về một Plain JavaScript Object thay vì Mongoose Document
      const courses = await Course.find({}).lean();
      res.render("home", { courses });
    } catch (err) {
      next(err);
    }
  }

  search(req, res) {
    res.render("search");
    // console.log(req.body.q);
  }
}

module.exports = new SiteController();
