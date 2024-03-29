const express = require("express");
const router = express.Router();
const Faculty = require("../models/faculty.model");
const multer = require("multer");
const auth = require("../libs/auth");

//******Multer Config******

const fileFilter = (req, file, cb) => {
  if (file.mimetype == "image/jpeg"){
    cb(null, true);
  } else {
    cb(new Error("File type incorrect"), false)
  }
};

const upload = multer({
  limits: {
    fileSize: 1024 * 1024,
  },
  fileFilter: fileFilter,
})

//*************************


router.get("/", async (req, res) => {
  try {
    let facultyData = await Faculty.find({}).sort({ sno: 1 });
    res.status(200).send({ status: true, data: facultyData });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: false, error: err });
  }
});

router.get(
  "/:id/profilePicture",
  async (req, res) => {
    try {
      const faculty = await Faculty.findById(req.params.id);
      if (!faculty | !faculty.profileImage) {
        throw new Error("image not found");
      }

      res.set("Content-Type", "image/jpeg");
      res.status(200).send(faculty.profileImage);
    } catch (err) {
      console.log(err);
      res.status(500).send("Not Found");
    }
  },
  (error, req, res, next) => {
    res.status(404).send({ error: error.message });
  }
);

router.post("/", auth, upload.single("profileImage"), async (req, res) => {
  try {
    if (req.file) {
        let body = req.body;

        let sno = body.sno;
        let profileImage = req.file.buffer;
        let name = body.name;
        let role = body.role;

        let facultyData = new Faculty({ sno, profileImage, name, role });
        await facultyData.save();
    } else {
      let facultyData = new Faculty(req.body);
      await facultyData.save();
    }
    res.status(201).send({ status: true })
  } catch (err) {
      console.log(err);
      res.status(500).send({ status: false, error: err })
  }
});

router.patch("/:id", auth, upload.single("profileImage"), async (req, res) => {
  try {
      let body = req.body;

      let sno = body.sno;
      let name = body.name;
      let role = body.role;

      let updates = {
        sno,
        name,
        role,
      };

      if (req.file) {
        let profileImage = req.file.buffer
        updates.profileImage = profileImage;
      }

      await Faculty.findByIdAndUpdate( req.params.id, { $set: updates }, { new: true } );

      res.status(201).send({ status: true });

  } catch (err) {
      console.log(err);
      res.status(500).send({ status: false, error: err })
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    await Faculty.findByIdAndDelete(req.params.id);
    res.send({ status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: false, error: err });
  }
});

module.exports = router;
