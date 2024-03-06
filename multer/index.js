const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
const mongoose = require("mongoose");
const Image = require("./model/image");
const cloudinary = require("cloudinary");
// import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
  cloud_name: "dt9arlfna",
  api_key: "378925881274759",
  api_secret: "Li5SniEcs5KqsSC0_svCo78fHs8",
});
app.use(express.static(path.join(__dirname, "static")));
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); //tb bhejna hai ye jb /uploads pr se request aaye
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "hbs");
app.get("/upload", (req, res) => {
  res.render("form");
});
app.post("/upload", upload.single("img"), async (req, res) => {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.body);
  console.log(req.file);
  const { filename } = req.body;
  const { path } = req.file;
  let result = await cloudinary.uploader.upload(
    path,
    { public_id: "olympic_flag" },
    function (error, result) {
      console.log(result);
    }
  );
  const newImage = new Image({ filename: filename, filepath: result.url});
  await newImage.save();
  
  console.log(result);
  res.end("file uploaded");
});
app.get("/blog", async (req, res) => {
  const images = await Image.find({});
  //how to send dynamic data to hbs
  res.render("blog", { images });
});
app.post("/upload", (req, res) => {});
mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => {
  console.log("connectted");
});
app.listen(3334, () => {
  console.log("server staarted at port 3334");
});
