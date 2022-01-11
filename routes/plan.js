const express = require("express");
const router = express.Router();
const {
  getAll,
  create,
  update,
  remove
} = require("../controllers/plan");

router.get("/api/plans", getAll);
router.post("/api/plan", create);
router.put("/api/plan/:id", update);
router.delete("/api/plan/:id", remove);

module.exports = router;
