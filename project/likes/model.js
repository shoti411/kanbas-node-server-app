import schema from "./schema";
import mongoose from "mongoose";
const model = mongoose.model("likes", schema);
export default model;