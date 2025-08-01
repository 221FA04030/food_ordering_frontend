import foodmodel from "../models/foodmodel.js";
import fs from "fs";

// ➕ Add Food
const addFood = async (req, res) => {
  const image_filename = req.file.filename;

  const food = new foodmodel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error adding food" });
  }
};

// 📜 List All Foods
const listFood = async (req, res) => {
  try {
    const foods = await foodmodel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error fetching foods" });
  }
};

// ❌ Remove Food
const removeFood = async (req, res) => {
  try {
    const food = await foodmodel.findById(req.body.id);
    if (!food) return res.json({ success: false, message: "Food not found" });

    fs.unlink(`uploads/${food.image}`, () => {}); // delete image
    await foodmodel.findByIdAndDelete(req.body.id);

    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error deleting food" });
  }
};

export { addFood, listFood, removeFood };
