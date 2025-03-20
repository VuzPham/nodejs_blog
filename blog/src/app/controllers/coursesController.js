const Course = require("../models/Course");
class CouresController {
  //[GET] /courses/slug
  async show(req, res, next) {
    //.lean() trả về một Plain JavaScript Object thay vì Mongoose Document, giúp
    try {
      const courses = await Course.findOne({ slug: req.params.slug }).lean();
      res.render("courseDetail", { courses });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CouresController();

//const newController = require('./NewsController')
