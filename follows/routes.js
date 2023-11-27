// import * as dao from "./dao.js";

// function FollowsRoutes(app) {
//     const findAllFollows = async (req, res) => {}
//     const createUserFollowsUser = async (req, res) => {}
//     const deleteUserFollowsUser = async (req, res) => {}
//     const findUserFollowsUser = async (req, res) => {}
//     const findUsersFollowedByUser = async (req, res) => {
//         const {userId} = req.params;
//         const following = await dao.findUsersFollowedByUser(userId);
//         res.send(followers);
//     }
//     const findUsersFollowingUser = async (req, res) => {
//         const {userId} = req.params;
//         const followers = await dao.findUsersFollowingUser(userId);
//         res.send(followers);
//     }

//     app.get("/api/follows", findAllFollows);
//     app.post("/api/users/:followerId/follows/:followedId", createUserFollowsUser)
//     app.delete("/api/users/:followerId/follows/:followedId", deleteUserFollowsUser);

//     app.get("/api/users/:userId/:followedId", findUserFollowsUser);
//     app.get("/api/users/:userId/following", findUsersFollowedByUser);
//     app.get("/api/users/:userId/followers", findUsersFollowingUser);

// }
