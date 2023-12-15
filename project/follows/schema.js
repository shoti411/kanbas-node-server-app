import mongoose from "mongoose";
const schema = new mongoose.Schema({
    follower: {type: mongoose.Schema.Types.ObjectId, ref: "users",},
    follwed: {type: mongoose.Schema.Types.ObjectId, ref: "users",},
}, {
    collection: "follows",
});

export default schema;