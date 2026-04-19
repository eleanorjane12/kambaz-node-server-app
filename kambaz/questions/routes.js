import QuestionsDao from "./dao.js";

export default function QuestionRoutes(app) {
  const dao = QuestionsDao();

  app.get("/api/quizzes/:qid/questions", async (req, res) => {
    const { cid } = req.params;
    const questions = await dao.findQuestionsForQuiz(cid);
    res.json(questions);
  });

  app.post("/api/quizzes/:qid/questions", async (req, res) => {
    const { cid } = req.params;
    const question = await dao.createQuestion({ ...req.body, quizId: cid });
    res.json(question);
  });

  app.put("/api/questions/:qid", async (req, res) => {
    const { qid } = req.params;
    const status = await dao.updateQuestion(qid, req.body);
    res.json(status);
  });

  app.delete("/api/questions/:qid", async (req, res) => {
    const { qid } = req.params;
    const status = await dao.deleteQuestion(qid);
    res.json(status);
  });

  app.get("/api/questions/:qid", async (req, res) => {
    const { qid } = req.params;
    const question = await dao.findQuestionById(qid);
    res.json(question);
  });
}