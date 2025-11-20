// models/User.ts
import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Please provide a firstname."],
  },
  lastname: {
    type: String,
    required: [true, "Please provide a lastname."],
  },
  place: {
    type: String,
    required: [true, "Please provide a place."],
  },
  age: {
    type: Number,
    required: [true, "Please provide a Age."],
  },
  gender: {
    type: String,
    required: [true, "Please provide a Gender."],
  },
});
// This line is crucial:
// It prevents Mongoose from recompiling the model every time
// in a serverless environment (which causes errors).
export default mongoose.models.Student ||
  mongoose.model("Student", StudentSchema);
