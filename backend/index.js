// backend/index.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Route
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Contact Message Received:", { name, email, message });

  res.status(200).json({ success: true, msg: "Message received!" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
