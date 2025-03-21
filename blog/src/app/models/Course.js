const mongoose = require("mongoose");
const slugUpdater = require("mongoose-slug-updater");

mongoose.plugin(slugUpdater);
const Schema = mongoose.Schema;

const CourseSchema = new Schema(
  {
    name: { type: String, required: true, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    video: { type: String, required: true },
    level: { type: String }, // 1: Dễ, 2: Trung bình, 3: Khó
    image: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", CourseSchema);
