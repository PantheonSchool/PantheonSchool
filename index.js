const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const inquiryRouter = require("./routers/inquiry");

require("./db/DB");

app.use(cors());

app.use(express.json());

app.use(inquiryRouter);

app.listen(port, (err) => {
  console.log(`Server Running @ http://localhost:${port}`);
});
