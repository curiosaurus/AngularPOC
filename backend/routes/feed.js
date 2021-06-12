const express = require('express');
const { body } = require('express-validator/check');

const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// POST /feed/post/:postId
router.get('/post/:postId', feedController.getPost);

// GET /feed/posts
router.get('/posts', feedController.getPosts);

// POST /feed/post
router.post(
  '/post',
  isAuth,
  [
    body('title')
      .trim()
      .isLength({ min: 4 }),
    body('description')
      .trim()
      .isLength({ min: 4 })
  ],
  feedController.testAddProduct
);

module.exports = router;
