const express = require('express');
const router = express.Router();
const {
  getAll,
  addToWatchlist,
  removeFromWatchlist,
} = require('../controllers/watchlist');

const auth = require('../middlwares/auth');

router.post('/api/user/watchlist/list', auth, getAll);
router.post('/api/user/watchlist/add', auth, addToWatchlist);
router.post('/api/user/watchlist/remove', auth, removeFromWatchlist);

module.exports = router;
