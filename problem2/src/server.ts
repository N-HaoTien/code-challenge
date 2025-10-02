import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import router from "./routes";
import { exceptionHandler } from "./middlewares/exceptionHandler";

const envFile = process.env.NODE_ENV ? `.${process.env.NODE_ENV}.env` : ".env";
dotenv.config({ path: envFile });

const PORT = process.env.PORT || 5000;

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use("/api", router);
app.use(exceptionHandler);

app.get("/test", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, async () => {
  try {
    await prisma.$connect();
    console.log("Database connected");
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  } catch (err) {
    console.error("DB connection error:", err);
  }
});

export const server = app; // for testing