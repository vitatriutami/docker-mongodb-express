import express from "express";
import mongoose from "mongoose";
import { Note } from "./models/note";

const app = express();
mongoose.connect("mongodb://localhost:27017");

app.use(express.json());

app.get("/", async (req, res) => {
  const allNotes = await Note.find();
  res.json(allNotes);
});

app.post("/", async (req, res) => {
  const { title, content } = req.body;
  const newNote = new Note({
    title,
    content,
  });
  await newNote.save();
  res.json({ message: "Note added" });
});

app.listen(8000);
