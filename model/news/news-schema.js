const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const newsSchema = new Schema({

  concepts: [{ 
    type: String 
  }],
  articles: [{
    type: Schema.ObjectId,
    ref: 'Articles'
  }],
  imagen: { 
    type: String 
  },
  category: {
     type: String
    },
  viewsCount: { 
    type: Number, 
    default: 0 
  },
  articlesCount: {
     type: Number,
      default: 0 
    }

}, { collection: 'groups' });


module.exports = mongoose.model('News', newsSchema);
