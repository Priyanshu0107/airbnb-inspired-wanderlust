const mongoose = require("mongoose");
const data = require("./data.js");
const Listing = require("../models/listing.js");

mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    await Listing.insertMany(data.data);
    console.log("Data seeded successfully");
  } catch (err) {
    console.error("Error seeding data:", err);
  } finally {
    mongoose.connection.close(); // ✅ IMPORTANT
  }
};

initDB();
