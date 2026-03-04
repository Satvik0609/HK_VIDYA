// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const Razorpay = require("razorpay");
// const crypto = require("crypto");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// app.post("/create-order", async (req, res) => {
//   try {
//     const { amount, name, email, phone } = req.body;

//     if (!amount || amount <= 0) {
//       return res.status(400).json({ error: "Invalid amount" });
//     }

//     const order = await razorpay.orders.create({
//       amount: amount * 100,
//       currency: "INR",
//       receipt: "receipt_" + Date.now(),
//       notes: { name, email, phone },
//     });

//     res.json(order);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.post("/verify-payment", (req, res) => {
//   const {
//     razorpay_order_id,
//     razorpay_payment_id,
//     razorpay_signature,
//   } = req.body;

//   const body = razorpay_order_id + "|" + razorpay_payment_id;

//   const expectedSignature = crypto
//     .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//     .update(body)
//     .digest("hex");

//   if (expectedSignature === razorpay_signature) {
//     res.json({ success: true });
//   } else {
//     res.status(400).json({ success: false });
//   }
// });

// app.listen(process.env.PORT || 5000, () =>
//   console.log("Server running on port 5000")
// );




//implementing mysql database below



require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const db = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

/*
===============================
1️⃣ CREATE ORDER + SAVE DONOR
===============================
*/

app.post("/create-order", async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      pan,
      planType,
      childrenCount,
      amount,
    } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    // Create Razorpay Order
    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    });

    // Insert donor into database
    await db.execute(
      `INSERT INTO donors 
       (full_name, email, phone, pan, plan_type, children_count, amount, razorpay_order_id)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        fullName,
        email,
        phone,
        pan,
        planType,
        childrenCount,
        amount,
        order.id,
      ]
    );

    res.json(order);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

/*
===============================
2️⃣ VERIFY PAYMENT
===============================
*/

app.post("/verify-payment", (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      res.json({ success: true });
    } else {
      res.status(400).json({ success: false });
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () =>
  console.log("Server running on port 5000")
);


