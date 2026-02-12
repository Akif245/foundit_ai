// const mongoose = require("mongoose");

// const claimSchema = new mongoose.Schema(
//   {
//     itemId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Item",
//       required: true,
//     },
//     claimerName: { type: String, required: true },
//     claimerPhone: { type: String, required: true },
//     claimerEmail: { type: String },
//     claimerAnswer: { type: String, required: true },
//     status: {
//       type: String,
//       enum: ["pending", "approved", "rejected"],
//       default: "pending",
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Claim", claimSchema);
const mongoose = require("mongoose");

const claimSchema = new mongoose.Schema(
  {
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
      required: true,
    },

    claimerName: { type: String, required: true },
    claimerPhone: { type: String, required: true },
    claimerEmail: { type: String, default: "" },

    claimerAnswer: { type: String, required: true },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Claim", claimSchema);
