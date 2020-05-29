const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IdeaSchema = new Schema({
  idea: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
  },
  category: {
    type: String,
  },
  creation: { type: Date, default: Date.now },
});
module.exports = Idea = mongoose.model('idea', IdeaSchema);
