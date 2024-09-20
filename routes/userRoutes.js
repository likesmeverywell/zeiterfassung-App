const express = require('express');
const { getAllUsers, updateUser, deleteUser } = require('../controllers/userController');
const { authMiddleware, authorizeRoles } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, authorizeRoles('admin'), getAllUsers);
router.put('/:id', authMiddleware, authorizeRoles('admin'), updateUser);
router.delete('/:id', authMiddleware, authorizeRoles('admin'), deleteUser);

module.exports = router;
