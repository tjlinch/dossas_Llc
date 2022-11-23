const { AuthenticationError } = require("apollo-server-express");
const { User, Post } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({});
        },
        user: async (parent, args) => {
            return await User.findOne({ _id: args.userId });
        },
        posts: async () => {
            return await Post.find({});
        },
        post: async (parent, { postId }) => {
            return await Post.findOne({ _id: postId });
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);

            return { token, user };
        },
    }
};

module.exports = resolvers;