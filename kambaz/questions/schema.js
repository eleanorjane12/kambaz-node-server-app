import mongoose from "mongoose";
const questionSchema = new mongoose.Schema({
    _id: String,
    quizId: String,
    questionType: String,
    questionText: String,
    points: Number,
    options: [String],
    correctAnswer: String,
}, { collection: "questions" });
export default questionSchema;