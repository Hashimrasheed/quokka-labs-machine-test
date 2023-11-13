const ArticleModel = require("../models/article")

const getArticles = async (req, res) => {
  try {
    const articles = await ArticleModel.find({});
     res.json(articles);
   } catch (error) {
     res.status(400).json(error.message);
   }
}

const getSingleArticle = async (req, res) => {
  try {
    const article = await ArticleModel.findOne({ _id: req.params.articleId });
    res.json(article);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const createArticle = async (req, res) => {
  const article = new ArticleModel(req.body);
  try {
    await article.save();
    res.json(article);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const updateArticle = async (req, res) => {
  try {
    const article = await ArticleModel.findByIdAndUpdate(
      req.params.articleId,
      req.body
    );
    await article.save();
    res.json(article);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
const deleteArticle = async (req, res) => {
  try {
    const article = await ArticleModel.findByIdAndDelete(req.params.articleId);
    if (!article) {
      return res.status(404).json("Article not found");
    }
    res.status(204).json();
  } catch (error) {
    res.status(400).json(error.message);
  }
}


module.exports = { getArticles, getSingleArticle, createArticle, updateArticle, deleteArticle }