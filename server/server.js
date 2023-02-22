import express from "express";
import bodyParser from "body-parser";
import mongoose, { Schema, model } from "mongoose";
import dotenv from "dotenv";
import { router } from "./routes/memoRoutes.js";

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT;
const uri = process.env.URI;

mongoose.set("strictQuery", false);

mongoose
  .connect(uri)
  .then(console.log("Database connected successfully."))
  .catch((err) => {
    console.error(err);
  });

const memoSchema = Schema({
  title: String,
  content: String,
});

const Memo = model("memo", memoSchema);

app.get("/", router);

app.post("/", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  const memo = new Memo({
    title: title,
    content: content,
  });

  memo
    .save()
    .then(() => {
      res.json({
        Title: title,
        content: content,
      });
    })
    .catch((err) => {
      console.log("Error occurred while inserting post into DB.");
      console.error(err);
    });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
