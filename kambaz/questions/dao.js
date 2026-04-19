import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export default function QuestionsDao() {
  const findQuestionsForQuiz = (quizId) =>
    model.find({ quizId });

  const createQuestion = (question) =>
    model.create({ ...question, _id: uuidv4() });

  const updateQuestion = (questionId, question) =>
    model.updateOne({ _id: questionId }, { $set: question });

  const deleteQuestion = (questionId) =>
    model.deleteOne({ _id: questionId });

  const findQuestionById = (questionId) =>
    model.findById(questionId);

  return { findQuestionsForQuiz, createQuestion, updateQuestion, deleteQuestion, findQuestionById };
}
