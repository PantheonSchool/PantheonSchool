const jwt = require("jsonwebtoken");
const Admin = require("../models/admin.model");

require("dotenv").config({ path: "../config.env" });

module.exports = async (req, res, next) => {
 

  try {
     let decodedToken = jwt.verify(
    req.headers["x-access-token"],
    process.env.SECRET
  );
    let admin = await Admin.findOne({ username: decodedToken.username });
    if (admin) {
      res.locals.admin = admin;
      next();
    } else {
      throw new Error("User Not Found");
    }
  } catch (err) {
    console.log(err);
    res.status(401).send({ status: false, error: err });
  }
};
