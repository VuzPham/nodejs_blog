const Course = require("../models/Course");
class SiteController {
  async index(req, res) {
    try {
      const courses = await Course.find({});
      res.json(courses);
      res.render("home");
    } catch (err) {
      res.status(400).json({ error: "error!" });
    }
  }

  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();

//const newController = require('./NewsController')
