const { getSpecificPost, getAllPosts } = require('./posts');

const { getSpecificUser, getAllUsers, createUser } = require('./users');

module.exports = {
  getAllUsers, getSpecificUser, getAllPosts, getSpecificPost, createUser,
};
