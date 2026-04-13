import EnrollmentsDao from "./dao.js";

export default function EnrollmentsRoutes(app, db) {
  const dao = EnrollmentsDao(db);

  const enrollUserInCourse = async (req, res) => {
    const { userId, courseId } = req.params;
    await dao.enrollUserInCourse(userId, courseId);
  };

  const unenrollUserInCourse = async (req, res) => {
    const { userId, courseId } = req.params;
    await dao.unenrollUserInCourse(userId, courseId);
   
  };

  app.post("/api/users/:userId/courses/:courseId", enrollUserInCourse);
  app.delete("/api/users/:userId/courses/:courseId", unenrollUserInCourse);
}