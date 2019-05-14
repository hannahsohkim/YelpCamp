const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  text: String,
  user: String
})

const Comment = mongoose.model('Comment',commentSchema);

module.exports = Comment;