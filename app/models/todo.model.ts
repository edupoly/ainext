import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: String,
  status: Boolean,
});

export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
