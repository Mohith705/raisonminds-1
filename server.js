const express = require("express");
const data = require("./DATA.json");
const data2 = require("./courses.json");
const fs = require("fs");

const app = express();
const PORT = 8000;

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

//PDF API
app.get("/api/data", (req, res) => {
  return res.json(data);
});

app.post("/api/data", (req, res) => {
  const body = req.body;
  data.push({ ...body });
  fs.writeFile("./DATA.json", JSON.stringfy(data), (err, data) => {
    return res.json({ status: "success" });
  });
});

//EXCEL API
app.get("/api/excel", (req, res) => {
  return res.json(data2);
});

app.listen(PORT, () => console.log("Server started at PORT"));