const express = require('express');
const router = express.Router();
const {
  getAll,
  addToWatchlist,
  removeFromWatchlist,
} = require('../controllers/watchlist');

const auth = require('../middlwares/auth');

router.get('/api/user/watchlist/list', auth, getAll);
router.post('/api/user/watchlist/add', auth, addToWatchlist);
router.delete('/api/user/watchlist/remove/:id', auth, removeFromWatchlist);

module.exports = router;
