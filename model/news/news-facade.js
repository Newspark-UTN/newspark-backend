const Model = require('../../lib/facade');
const newsSchema  = require('./news-schema');


class NewsModel extends Model {
  find(query) {
    return this.Schema
    .find(query)
    .sort('-articlesCount')
    .exec();
  }

   findOne(query) {
    return this.Schema
    .findOne(query)
    .populate('articles')
    .exec();
  }

  findById(id) {
    return this.Schema
    .findOneAndUpdate({ _id: id }, { $inc: { viewsCount: 1 }})
    .populate('articles')
    .exec();
  } 


}

module.exports = new NewsModel(newsSchema);
