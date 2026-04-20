import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export default function QuizAttemptsDao() {
      async function findQuizAttemptsForQuizForStudent(userId, quizId) {
      const quizAttempts = await model.find({ userId, quizId });
      return quizAttempts;
    }

    async function createQuizAttempt(quizAttemptData) {
      const quizAttempt = await model.create(quizAttemptData);
      return quizAttempt;
    }
    

    return { findQuizAttemptsForQuizForStudent, createQuizAttempt };
}

