const router = require('express').Router();
const {
  getAllPosts, getSpecificPost,
} = require('../controllers');

router.get('/', getAllPosts);
router.get('/:postId', getSpecificPost);

module.exports = router;
