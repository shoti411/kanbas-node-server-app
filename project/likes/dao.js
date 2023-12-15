import model from "./model.js";

export const findAllLikes = () => model.find();

export const createUserLikesBusiness = (userId, businessId) => model.create({user: userId, businessId: businessId});

export const deleteUserLikesBusiness = (userId, businessId) => model.deleteOne({user: userId, businessId: businessId});

export const findUsersThatLikeBusiness = (userId, businessId) = (businessId) => model.find({businessId: businessId});

export const findBusinessThatUserLikes = (userId) => model.find({user: userId});