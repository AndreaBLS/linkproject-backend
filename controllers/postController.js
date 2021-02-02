const mongoose = require("mongoose")
const User = require("../models/userModel")
const Post = require("../models/postModel")

/* createPost,
getPosts,
getPost,
editPost,
deletePost,
toggleLike,
share */

exports.createPost = async (req, res, next) => {
    try {
        const userID = req.userID._id
        const post = new Post(req.body)
        await post.save()
        if (!post) throw new createError.NotFound();
        res.status(200).send(post)
    } catch (e) {
        next(e);
    }
};

exports.getPost = async (req, res, next) => {
    try {
        const post = await Post.find(req.params.id)
        if (!post) throw new createError.NotFound();
        res.status(200).send(post)
    } catch (e) {
        next(e);
    }
};

exports.editPost = async (req, res, next) => {
    try {
        const post = await findByIdAndUpdate(
            req.params.id,
            {
                $set: { ...req.body },
            },
            {
                new: true
            })
        if (!post) throw new createError.NotFound();
        res.status(200).send(post)
    } catch (e) {
        next(e);
    }
};

exports.deletePost = async (req, res, next) => {
    try {
        const post = await User.findByIdAndDelete(
            req.params.id
        );
        if (!user) throw new createError.NotFound();
        res.status(200).send(user)
    } catch (e) {
        next(e)
    }
};

exports.editPost = async (req, res, next) => {
    try {
        const post = await User.findByIdAndDelete(
            req.params.id
        );
        if (!user) throw new createError.NotFound();
        res.status(200).send(user)
    } catch (e) {
        next(e)
    }
};
