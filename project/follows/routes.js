import * as dao from "./dao.js";

function FollowsRoutes(app) {
    const findAllFollows = async (req, res) => {}
    const createUserFollowsUser = async (req, res) => {
        const follower = req.session["currentUser"];
        const followed = req.params["followedId"];
        console.log(followed);
        const follows = await dao.createUserFollowsUser(follower, followed);
        res.json(follows);
    }
    const deleteUserFollowsUser = async (req, res) => {
        const follower = req.session["currentUser"];
        const followed = req.params["followedId"];
        const status = await dao.deleteUserFollowsUser(follower, followed);
        res.json(follows);
    }
    // const findUserFollowsUser = async (req, res) => {}
    const findFollowersOfUser = async (req, res) => {
        const followed = req.params["userId"];
        const followers = await dao.findFollowersOfUser(followed);
        res.json(followers);
        // const {userId} = req.params;
        // const followers = await dao.findUsersFollowingUser(userId);
        // res.send(followers);
    }
    const findFollowedUsersOfUser = async (req, res) => {
        const follower = req.params["userId"];
        const followed = await dao.findFollowedUsersOfUser(follower);
        res.json(followed);
        // const {userId} = req.params;
        // const following = await dao.findUsersFollowedByUser(userId);
        // res.send(followers);
    }


    app.get("/project/api/follows", findAllFollows);

    app.post("/project/api/users/:followedId/follows", createUserFollowsUser);
    app.delete("/project/api/users/:followedId/follows", deleteUserFollowsUser);

    // app.get("/project/api/users/:userId/:followedId", findUserFollowsUser);
    app.get("/project/api/users/:userId/followers", findFollowersOfUser);
    app.get("/project/api/users/:userId/following", findFollowedUsersOfUser);


}
export default FollowsRoutes;