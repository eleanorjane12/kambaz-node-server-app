import { v4 as uuidv4 } from "uuid";
export default function EnrollmentsDao(db) {

    

  function enrollUserInCourse(userId, courseId) {
    const { enrollments } = db;
    enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
  }

  function unenrollUserInCourse(userId, courseId) {
    const { enrollments } = db;
    enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
    db.enrollments = enrollments.filter(
      (enrollment) => user._id !== userId && course._id !== courseId);
  }


  return { enrollUserInCourse, unenrollUserInCourse };
}
