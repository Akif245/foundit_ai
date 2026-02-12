// const express = require("express");
// const router = express.Router();

// const Claim = require("../models/Claim");
// const Item = require("../models/Item");

// /**
//  * ✅ Create Claim (User)
//  * POST /api/claims/create
//  */
// router.post("/create", async (req, res) => {
//   try {
//     const { itemId, claimerName, claimerPhone, claimerEmail, claimerAnswer } =
//       req.body;

//     if (!itemId || !claimerName || !claimerPhone || !claimerAnswer) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const item = await Item.findById(itemId);
//     if (!item) return res.status(404).json({ message: "Item not found" });

//     const userAns = claimerAnswer.trim().toLowerCase();
//     const dbAns = item.secretAnswer.trim().toLowerCase();

//     if (userAns !== dbAns) {
//       return res.status(401).json({ message: "Wrong answer ❌ Claim rejected" });
//     }

//     const claim = await Claim.create({
//       itemId,
//       claimerName,
//       claimerPhone,
//       claimerEmail: claimerEmail || "",
//       claimerAnswer: userAns,
//       status: "pending",
//     });

//     res.status(201).json({
//       message: "✅ Claim submitted successfully! Waiting for admin approval.",
//       claim,
//     });
//   } catch (error) {
//     console.error("Create Claim Error:", error.message);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// /**
//  * ✅ Get All Claims (Admin)
//  * GET /api/claims
//  */
// router.get("/", async (req, res) => {
//   try {
//     const claims = await Claim.find()
//       .populate("itemId")
//       .sort({ createdAt: -1 });

//     res.json(claims);
//   } catch (error) {
//     console.error("Get Claims Error:", error.message);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// /**
//  * ✅ Update Claim Status (Admin)
//  * PUT /api/claims/:id
//  */
// router.put("/:id", async (req, res) => {
//   try {
//     const { status } = req.body;

//     if (!["approved", "rejected"].includes(status)) {
//       return res.status(400).json({ message: "Invalid status" });
//     }

//     const updated = await Claim.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       { new: true }
//     );

//     if (!updated) return res.status(404).json({ message: "Claim not found" });

//     res.json({ message: "✅ Claim status updated", claim: updated });
//   } catch (error) {
//     console.error("Update Claim Error:", error.message);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();

const Claim = require("../models/Claim");
const Item = require("../models/Item");

// ✅ Create Claim (User)
router.post("/create", async (req, res) => {
  try {
    const { itemId, claimerName, claimerPhone, claimerEmail, claimerAnswer } =
      req.body;

    if (!itemId || !claimerName || !claimerPhone || !claimerAnswer) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const item = await Item.findById(itemId);
    if (!item) return res.status(404).json({ message: "Item not found" });

    const userAns = claimerAnswer.trim().toLowerCase();
    const dbAns = item.secretAnswer.trim().toLowerCase();

    if (userAns !== dbAns) {
      return res.status(401).json({ message: "Wrong answer ❌ Claim rejected" });
    }

    const claim = await Claim.create({
      itemId,
      claimerName,
      claimerPhone,
      claimerEmail: claimerEmail || "",
      claimerAnswer: userAns,
      status: "pending",
    });

    res.status(201).json({
      message: "✅ Claim submitted successfully! Waiting for admin approval.",
      claim,
    });
  } catch (error) {
    console.error("Create Claim Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Get All Claims (Admin)
router.get("/", async (req, res) => {
  try {
    const claims = await Claim.find()
      .populate("itemId")
      .sort({ createdAt: -1 });

    res.json(claims);
  } catch (error) {
    console.error("Get Claims Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Update Claim Status (Admin)
router.put("/:id", async (req, res) => {
  try {
    const { status } = req.body;

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const claim = await Claim.findById(req.params.id).populate("itemId");
    if (!claim) return res.status(404).json({ message: "Claim not found" });

    // ✅ update claim status
    claim.status = status;
    await claim.save();

    // ✅ if approved -> update the item status as claimed
    if (status === "approved" && claim.itemId) {
      await Item.findByIdAndUpdate(claim.itemId._id, {
        status: "claimed",
        claimedTo: claim.claimerName,
        claimedAt: new Date(),
      });
    }

    res.json({ message: "✅ Claim status updated", claim });
  } catch (error) {
    console.error("Update Claim Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
