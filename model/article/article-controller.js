const Controller = require('../../lib/controller');
const articleModel  = require('./article-facade');


class ArticleController extends Controller {}

module.exports = new ArticleController(articleModel);
