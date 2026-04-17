import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema({
    _id: String,
    title: String,
    description: String,
    points: String,
    due: Date,
    available_from: String,
    available_until: String,
    course: String,
  },
  { collection: "assignments" }
);
export default assignmentSchema;