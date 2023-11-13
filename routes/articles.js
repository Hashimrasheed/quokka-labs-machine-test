const express = require('express');
const router = express.Router();
const articlesController = require("../controller/articlesController");
const { verifyToken } = require('../utils/jwt');

/* Article routes */
router.get('/', articlesController.getArticles);
router.get('/:articleId', articlesController.getSingleArticle);
router.post('/', verifyToken, articlesController.createArticle);
router.patch('/:articleId', verifyToken, articlesController.updateArticle);
router.delete('/:articleId', verifyToken, articlesController.deleteArticle);

module.exports = router;
