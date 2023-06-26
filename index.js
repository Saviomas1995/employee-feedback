// Add Express
import express from "express";
// Initialize Express
const app = express();
// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});
// Initialize server
app.listen(8082, () => {
  console.log("Running on port 8082.");
});
