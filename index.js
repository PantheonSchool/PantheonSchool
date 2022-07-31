const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const inquiryRouter = require("./routers/inquiry");
const adminRouter = require("./routers/admin");
const newsRouter = require("./routers/news");

require("./db/DB");

app.use(cors());

app.use(express.json());

app.use("/api/inquiry", inquiryRouter);

app.use("/api/admin", adminRouter);

app.use("/api/news", newsRouter);

app.listen(port, (err) => {
  console.log(`Server Running @ http://localhost:${port}`);
});
