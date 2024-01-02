const mongoose = require('mongoose')
const { Schema } = mongoose

const postSchema = new Schema(
  {
    title: { type: String, required: false },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String },
    isPublic: { type: Boolean, default: false },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
  },
  { timestamps: true }
)

const Post = mongoose.model('Post', postSchema)
module.exports = Post
