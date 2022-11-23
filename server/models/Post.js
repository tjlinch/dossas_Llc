const { Schema, model } = require("mongoose");

const postSchema = new Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
});

const Post = model("Post", postSchema);

module.exports = Post;