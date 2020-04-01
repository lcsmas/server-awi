const express = require("express");
const app = express();
const cors = require("cors");
const users = require("./users");
const propositions = require("./propositions");
const tags = require("./tags");
const answers = require("./answers");
const ObjectID = require("mongodb").ObjectID;

const port = 3000;

const logInfo = (req, res, next) => {
  console.log(
    "[INFO]",
    "(" + new Date().toLocaleString() + ")",
    req.method,
    req.url,
    "from",
    req.hostname
  );
  next();
};

app.use(cors());
app.use(express.json());
app.use(logInfo);
app.use("/users", users);
app.use("/propositions", propositions);
app.use("/answers", answers);
app.use("/tags", tags);
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err);
});

app.get("/id", (req, res) => res.json({ id: ObjectID() }));

app.listen(port, () => console.log(`MoTee API listening on port ${port}`));
