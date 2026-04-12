import EnrollmentsDao from "./dao.js";

export default function EnrollmentsRoutes(app, db) {
  const dao = EnrollmentsDao(db);

  const enrollUserInCourse = (req, res) => {
    const { userId, courseId } = req.params;
    const status = dao.enrollUserInCourse(userId, courseId);
    res.sendStatus(status);
  };

  const unenrollUserInCourse = (req, res) => {
    const { userId, courseId } = req.params;
    const status = dao.unenrollUserInCourse(userId, courseId);
    res.sendStatus(status);
  };

  app.post("/api/users/:userId/courses/:courseId", enrollUserInCourse);
  app.delete("/api/users/:userId/courses/:courseId", unenrollUserInCourse);
}