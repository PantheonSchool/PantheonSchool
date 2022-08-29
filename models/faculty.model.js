const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema(
  {
    sno: { type: Number, min: 1 },
    profileImage: { type: Buffer },
    name: { type: String, required: true, trim: true },
    role: { type: String, trim: true },
    qualif: { type: String, trim: true },
  }
);

facultySchema.methods.toJSON = function () {
  const faculty = this;
  const facultyObject = faculty.toObject();

  delete facultyObject.profileImage;

  return facultyObject;
};

module.exports = mongoose.model("faculty", facultySchema);
