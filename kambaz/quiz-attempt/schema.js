import mongoose from "mongoose";

const quizAttemptSchema = new mongoose.Schema({
  _id: String,
  quizId: String,
  studentId: String,
  answers: { type: Map, of: String },
  score: Number,
  dateTaken: Date,
  attemptNumber: Number,
});  
export default quizAttemptSchema;