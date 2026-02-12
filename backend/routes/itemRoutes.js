// const express = require("express");
// const router = express.Router();
// const upload = require("../config/upload");
// const { createItem, getItems, getItemById } = require("../controllers/itemController");

// router.post("/", upload.single("image"), createItem);
// router.get("/", getItems);
// router.get("/:id", getItemById);

// module.exports = router;

const express = require("express");
const router = express.Router();

const upload = require("../config/upload");
const {
  createItem,
  getItems,
  getItemById,
} = require("../controllers/itemController");

// ✅ Create new lost item (with image upload)
router.post("/", upload.single("image"), createItem);

// ✅ Get all items
router.get("/", getItems);

// ✅ Get single item by id (used for claim request page)
router.get("/:id", getItemById);

module.exports = router;
