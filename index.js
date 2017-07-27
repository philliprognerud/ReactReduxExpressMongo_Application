const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ bye: "buddy" });
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("server has started");
});
