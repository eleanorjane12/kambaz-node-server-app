import QuizAttemptsDao from "./dao.js";

export default function QuizAttemptRoutes(app) {
  const dao = QuizAttemptsDao();


    app.get("/api/users/:uid/quizzes/:qid/quiz-attempts", async (req, res) => {
    const { uid, qid } = req.params;
    const quizAttempts = await dao.findQuizAttemptsForQuizForStudent(uid, qid);
    res.json(quizAttempts);
  });

    app.post("/api/users/:uid/quizzes/:qid/quiz-attempts", async (req, res) => {
    const { uid, qid } = req.params;
    const quizAttempt = await dao.createQuizAttempt({ ...req.body, userId: uid, quizId: qid });
    res.json(quizAttempt);
  });
}