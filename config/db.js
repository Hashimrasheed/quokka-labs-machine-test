const mongoose = require("mongoose");
 
 const connectDB = () => {
  const url = "mongodb://127.0.0.1/quokka_labs_db";
 
  try {
    mongoose.connect(url);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
  const dbConnection = mongoose.connection;
  dbConnection.once("open", () => {
    console.log(`Database connected: ${url}`);
  });
 
  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });
  return;
}

module.exports = connectDB