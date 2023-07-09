const express = require("express");
const {
  createPost,
  deletePost,
  getAllPosts,
} = require("../controllers/postController");

const router = express.Router();
//Create a post: Returns the post
router.route("/").post(createPost);
//Delete post
router.route(`/delete/:id`).delete(deletePost);
//Get all posts
router.route("/").get(getAllPosts);
module.exports = router;
