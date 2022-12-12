const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const inquiryRouter = require("./routers/inquiry");
const adminRouter = require("./routers/admin");
const reviewRouter = require("./routers/review")
const newsRouter = require("./routers/news");
const facultyRouter = require("./routers/faculty")

require("./db/DB");

app.use(cors({
  origin: 'https://thepantheonschool.com'
}));

app.use(express.json());

app.use("/api/inquiry", inquiryRouter);

app.use("/api/admin", adminRouter);

app.use("/api/review", reviewRouter);

app.use("/api/news", newsRouter);

app.use("/api/faculty/", facultyRouter);

app.listen(port, (err) => {
  console.log(`Server Running @ http://localhost:${port}`);
});
