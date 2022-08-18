const router = require('express').Router();
const {
  getAllUsers, getSpecificUser, createUser,
} = require('../controllers');
const { authorizationCheck } = require('../middlewares');

router.route('/').get(getAllUsers).post(authorizationCheck, createUser);
// router.get('/', getAllUsers);
// router.post('/', authorizationCheck, createUser);

router.get('/:userId', getSpecificUser);
module.exports = router;
