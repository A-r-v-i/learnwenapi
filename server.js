const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require('helmet');
const routes = require("./router/route");

const port = process.env.PORT || 5000;

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

const mUri =
  `mongodb+srv://${process.env.M_USER}:${process.env.M_PWD}@cluster0.y2oxa.mongodb.net/${process.env.M_DB}?retryWrites=true&w=majority`;

app.use(bodyParser.json());

app.use(routes);
app.use(helmet());

mongoose
  .connect(mUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(port, () => {
      console.log(port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
