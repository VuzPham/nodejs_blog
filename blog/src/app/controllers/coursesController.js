const Course = require("../models/Course");
class CouresController {
  //[GET] /courses/slug
  async show(req, res, next) {
    //.lean() trả về một Plain JavaScript Object thay vì Mongoose Document, giúp
    try {
      const courses = await Course.findOne({ slug: req.params.slug }).lean();
      res.render("course/courseDetail", { courses });
    } catch (error) {
      next(error);
    }
  }
  //[GET] course/create
  create(req, res, next) {
    //.lean() trả về một Plain JavaScript Object thay vì Mongoose Document, giúp
    res.render("course/courseCreate");
  }
  //[GET] course/store
  async store(req, res, next) {
    try {
      const formData = req.body;
      formData.image = `https://i.ytimg.com/vi/${req.body.video}/hq720.jpg`;
      const course = new Course(formData);
      await course.save();
      res.redirect("/");
    } catch (error) {
      console.error("Lỗi khi lưu khóa học:", error);
      res.status(500).send("Lưu khóa học thất bại!");
    }
  }
  //[GET] courses/:id/edit
  async edit(req, res, next) {
    try {
      const courses = await Course.findOne({ _id: req.params.id }).lean();
      res.render("course/editCreate", { courses });
    } catch (next) {
      next(error);
    }
  }
  //[PUT] courses/:id
  async update(req, res, next) {
    try {
      const id = req.params.id;
      await Course.updateOne({ _id: id }, req.body);
      res.redirect("/");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CouresController();

//const newController = require('./NewsController')
