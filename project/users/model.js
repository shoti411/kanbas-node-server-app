import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("projectusers", schema);
export default model;
// load mongoose library
// load users schema
// create mongoose model from the schema
// export so it can be used elsewhere

