import express from "express";
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("✅ Express server is running!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
