import model from "./model.js";

//export const findAllFollows = () => model.find();

export const createUserFollowsUser = (followerId, followedId) => model.create({follower: followerId, followed: followedId});

// this also works for creating user follows user and deleting one follows
// export const createUserFollowsUser = (followerId, followedId) => 
// model.create({follower: followerId, followed: followedId});
//export const deleteUserFollowsUser = (followerId, followedId) => model.deleteOne({follower: followerId, followed: followedId });

export const deleteUserFollowsUser = (followerId, followedId) => model.deleteOne({follower: followerId, followed: followedId});

export const findFollowersOfUser = (followed) => model.find({followed}).populate("follower");

export const findFollowedUsersOfUser = (follower) => model.find({follower}).populate("followed");

// export const findUsersFollowedByUser = (userId) => model.find({follower: userId});

// export const findUserFollowingUser = (userId) =>
// model.find({followed: userId});