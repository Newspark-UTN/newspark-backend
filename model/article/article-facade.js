const Model = require('../../lib/facade');
const articleSchema  = require('./article-schema');


class ArticleModel extends Model {}

module.exports = new ArticleModel(articleSchema);
