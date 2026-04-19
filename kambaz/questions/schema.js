import mongoose from "mongoose";
const questionSchema = new mongoose.Schema({
    _id: String,
    title: String,
    quizId: String,
    questionType: String,
    questionText: String,
    points: Number,
    options: [String],
    correctAnswer: String,
}, { collection: "questions" });
export default questionSchema;