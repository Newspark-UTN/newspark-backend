const Router = require('express').Router;
const router = new Router();

const article = require('./model/article/article-router');
const news = require('./model/news/news-router');
const contactForm = require('./model/contact-form/contact-form-router');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to newspark-backend API!' });
});

router.use('/article', article);
router.use('/news', news);
router.use('/contact', contactForm);


module.exports = router;
