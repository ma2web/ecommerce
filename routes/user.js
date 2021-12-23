const express = require('express');
const router = express.Router();
const {
  login,
  register,
  me,
  update,
  upload,
  home,
} = require('../controllers/user');
const auth = require('../middlwares/auth');

router.get('/', home);
router.get('/api/auth', auth, me);
router.post('/api/auth/login', login);
router.post('/api/auth/register', register);
router.put('/api/user/:id', auth, update);
router.post('/api/user/upload/:id', upload);

module.exports = router;
