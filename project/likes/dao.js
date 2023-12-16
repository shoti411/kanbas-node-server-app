import model from "./model.js";

// export const findAllLikes = () => model.find();

export const createUserLikesBusiness = (userId, businessId) => model.create({user: userId, businessId: businessId});

export const deleteUserLikesBusiness = (userId, businessId) => model.deleteOne({user: userId, businessId: businessId});

export const findUsersThatLikeBusiness = (businessId) => model.find({businessId: businessId}).populate("user");

export const findBusinessThatUserLikes = (userId) => model.find({user: userId});