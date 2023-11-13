const express = require('express');
const router = express.Router();
const articlesController = require("../controller/articlesController")

/* GET users listing. */
router.get('/', articlesController.getArticles);
router.get('/:articleId', articlesController.getSingleArticle);
router.post('/', articlesController.createArticle);
router.patch('/:articleId', articlesController.updateArticle);
router.delete('/:articleId', articlesController.deleteArticle);

module.exports = router;
