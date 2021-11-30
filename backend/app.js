const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/post");

const app = express();

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://garrettpipes:CxTAqwZ76VAj8k4c@cluster0.rp4zf.mongodb.net/node-angular?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch(() => {
    console.log("Connection failed");
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, ,PUT, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  // console.log(post);
  post.save();
  res.status(201).json({
    message: "Post added",
  });
});

app.get("/api/posts", (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json(documents);
  });
});

module.exports = app;
