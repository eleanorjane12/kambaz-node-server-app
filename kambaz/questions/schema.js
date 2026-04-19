import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  _id: String,
  type: { type: String, enum: ["multiple_choice", "true_false", "fill_in_blank"] },
  title: String,
  points: { type: Number, default: 1 },
  question: String,
  choices: [String],
  correctAnswer: mongoose.Schema.Types.Mixed,
  correctAnswers: [String],
});

export default questionSchema;