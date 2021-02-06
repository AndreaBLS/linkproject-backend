const mongoose = require("mongoose")
const User = require("../models/userModel")
const Post = require("../models/postModel")

exports.createPost = async (req, res, next) => {
    try {
        const userID = req.userID._id
      /*   console.log(req.userID) */
        const post = new Post(req.body)
        console.log(req.body)
        //img: req.awsFile
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

exports.toggleLike = async (req, res, next) => {
    try {
        const user = await Post.findById(
            req.params.id
        );
        if (!user) throw new createError.NotFound();

        if (post) post.likes.pull(req.body.userID)
        post.likes.push(req.body.userID)

        const updatedPost = await post.save()
        res.status(200).send(updatedPost)
    } catch (e) {
        next(e)
    }
};

exports.sharePost = async (req, res, next) => {
    console.log(req.params.id, req.body.userID)
    try {
        const user = await User.findById(
            req.body.userID
        );
        if (!user) throw new createError.NotFound();
        user.sharedPosts.push(req.params.id)
        const savedUser = await user.save()
        res.status(200).send(savedUser)
    } catch (e) {
        next(e)
    }
}; 
