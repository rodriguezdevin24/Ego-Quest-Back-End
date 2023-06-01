const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const foodEntryRoutes = require('./foodEntryRoutes');


router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

router.use('/:id/food-entries', foodEntryRoutes);

module.exports = router;
