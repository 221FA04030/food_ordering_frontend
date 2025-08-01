import express from "express";
import multer from "multer";
import { addFood, listFood, removeFood } from "../controllers/foodcontroller.js";

const foodrouter = express.Router();

// Configure image storage
const storage = multer.diskStorage({
  destination: "uploads", // ✅ make sure this folder exists
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Routes
foodrouter.post("/add", upload.single("image"), addFood);
foodrouter.get("/list", listFood);
foodrouter.post("/remove", removeFood);

export default foodrouter;
