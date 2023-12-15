function LikesRoutes(app) {
    const findAllLikes = async (req, res) => {};
    const createUserLikesBusiness = async (req, res) => {
        const userId = req.params.userId;
        const businessId = req.params.businessId;
        const likes = await dao.createUserLikesBusiness(userId, businessId);
        res.json(likes);
    };
    const deleteUserLikesBusiness = async (req, res) => {
        const userId = req.params.userId;
        const businessId = req.params.businessId;
        const likes = await dao.deleteUserLikesBusiness(userId, businessId);
        res.json(likes);
    };
    const findUsersThatLikeBusiness = async (req, res) => {};
    const findBusinessThatUserLikes = async (req, res) => {};
    app.get("/project/api/likes", findAllLikes);
    app.post("/project/api/users/:userId/likes/:businessId", createUserLikesBusiness);
    app.delete("/project/api/users/:userId/likes/:businessId", deleteUserLikesBusiness);
    app.get("/project/api/likes/:businessId/users", findUsersThatLikeBusiness);
    app.get("/project/api/users/:businessId/likes", findBusinessThatUserLikes);
}

export default LikesRoutes;