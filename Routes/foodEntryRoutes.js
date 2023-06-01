const express = require('express');
const router = express.Router();
const foodEntryController = require('../controllers/foodEntryController');

router.get('/', foodEntryController.getAllEntries);
router.post('/', foodEntryController.createEntry);
router.get('/:id', foodEntryController.getEntry);
router.put('/:id', foodEntryController.updateEntry);
router.delete('/:id', foodEntryController.deleteEntry);

module.exports = router;
