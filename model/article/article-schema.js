const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const articleSchema = new Schema({
  content: { type: String, required: true },
  link: { type: String },
  title: { type: String },
  tag: { type: String },
  source: { type: String }
},  { collection: 'news' });


module.exports = mongoose.model('Articles', articleSchema);
