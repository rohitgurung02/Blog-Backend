const express = require('express');
const { getAllBlogsController, createBlogController, updateBlogController, getBlogByIdController, deleteBlogController, userBlogControlller } = require('../controllers/blogController');

// router object:
const router = express.Router();

// routes:

// Get || All Blogs
router.get('/all-blog', getAllBlogsController);

// Post || Create Blog
router.post('/create-blog', createBlogController);

// Post || Update Blog
router.put('/update-blog/:id', updateBlogController);

// Post || Single Blog Details
router.get('/get-blog/:id', getBlogByIdController);

// Delete || Delete Blog
router.delete('/delete-blog/:id', deleteBlogController);

// GET || User Blog
router.get('/user-blog/:id', userBlogControlller)

module.exports = router;