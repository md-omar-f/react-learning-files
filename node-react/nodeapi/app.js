const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotEnv = require("dotenv");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
dotEnv.config();
const app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
.then(() => {
  console.log("DB connected");
});

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});

const postRoutes = require("./routes/posts");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/", postRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`A node js API is listening on port: ${port}`);
})