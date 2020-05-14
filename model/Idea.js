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
});
module.exports = Idea = mongoose.model('idea', IdeaSchema);
