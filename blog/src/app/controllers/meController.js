const Course = require("../models/Course");
class meController {
  async store(req, res, next) {
    try {
      const courses = await Course.find({}).lean();
      res.render("me/meStoredCourse", { courses });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new meController();

//const newController = require('./NewsController')
