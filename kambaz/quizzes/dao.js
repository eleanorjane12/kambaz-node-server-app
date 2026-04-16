import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export default function QuizzesDao() {
  const findQuizzesForCourse = (courseId) =>
    model.find({ course: courseId });

  const createQuiz = (quiz) =>
    model.create({ ...quiz, _id: uuidv4() });

  const updateQuiz = (quizId, quiz) =>
    model.updateOne({ _id: quizId }, { $set: quiz });

  const deleteQuiz = (quizId) =>
    model.deleteOne({ _id: quizId });

  const findQuizById = (quizId) =>
    model.findById(quizId);

  return { findQuizzesForCourse, createQuiz, updateQuiz, deleteQuiz, findQuizById };
}
