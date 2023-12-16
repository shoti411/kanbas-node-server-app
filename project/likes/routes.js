import * as dao from "./dao.js";

function LikesRoutes(app) {
    // const findAllLikes = async (req, res) => {};
    const createUserLikesBusiness = async (req, res) => {
        const userId = req.params['userId'];
        const businessId = req.params['businessId'];
        console.log(userId);
        console.log(businessId);
        const likes = await dao.createUserLikesBusiness(userId, businessId);
        res.json(likes);
    };
    const deleteUserLikesBusiness = async (req, res) => {
        const userId = req.params['userId'];
        const businessId = req.params['businessId'];
        const likes = await dao.deleteUserLikesBusiness(userId, businessId);
        res.json(likes);
    };
    const findUsersThatLikeBusiness = async (req, res) => {
        const businessId = req.params['businessId'];
        const likers = await dao.findUsersThatLikeBusiness(businessId);
        return res.json(likers);
    };
    const findBusinessThatUserLikes = async (req, res) => {
        const userId = req.params['userId'];
        const businesses = await dao.findBusinessThatUserLikes(userId);
        return res.json(businesses);
    };
    // app.get("/project/api/likes", findAllLikes);
    app.post("/project/api/users/:userId/likes/:businessId", createUserLikesBusiness);
    app.delete("/project/api/users/:userId/likes/:businessId", deleteUserLikesBusiness);
    app.get("/project/api/likes/:businessId/users", findUsersThatLikeBusiness);
    app.get("/project/api/users/:userId/likes", findBusinessThatUserLikes);
}

export default LikesRoutes;