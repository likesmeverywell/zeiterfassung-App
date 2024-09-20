const express = require('express');
const { createTimeCategory, getAllTimeCategories } = require('../controllers/timeCategoryController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createTimeCategory);
router.get('/', authMiddleware, getAllTimeCategories);

module.exports = router;
