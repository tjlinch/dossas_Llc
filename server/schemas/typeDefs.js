const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
}

type Post {
    _id: ID
    title: String
    content: String
    date: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    user(userId: ID!): User
    posts: [Post]
    post(postId: ID!): Post
}
`;

module.exports = typeDefs;