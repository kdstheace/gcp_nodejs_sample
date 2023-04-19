const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

const obj = {
  name: "test",
  id: "12345",
};

app.get("/", (req, res) => {
  res.send("Hello from App Engine!!");
});

app.get("/sexy", (req, res) => {
  res.send("<h1>PIKABOO</h1>");
  console.log("cmon sexy");

  console.log(req.body);
});

app.get("/obj", (req, res) => {
  res.json(obj);
});

app.listen(PORT, () => {
  console.log(`You got the right choice ....${PORT}...`);
});
