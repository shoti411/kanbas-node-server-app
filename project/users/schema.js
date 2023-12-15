import mongoose from "mongoose";
const projectUserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    email: String,
    lastName: String,
    dob: Date,
    role: {
      type: String,
      enum: ["COMPANY", "MANAGER", "ADMIN", "USER"],
      default: "USER" },
  },
  { collection: "users" });
export default projectUserSchema;
// load the mongoose library
// create the schema
// String field that is required and unique
// String field that in required but not unique
// String fields
// with no additional
// configurations
// Date field with no configurations

// String field
// allowed string values
// default value if not provided


// store data in "users" collection

