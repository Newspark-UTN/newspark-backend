const Controller = require('../../lib/controller');
const newsModel  = require('./news-facade');


class NewsController extends Controller {
}

module.exports = new NewsController(newsModel);
