const mongoose = require("mongoose");
 
const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  date: { type: Date, default: Date.now },
});
 
const ArticleModel = mongoose.model("Article", ArticleSchema);
module.exports = ArticleModel;
