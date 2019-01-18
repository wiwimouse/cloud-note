const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const uniqueSlug = require('unique-slug');

const NoteSchema = new mongoose.Schema({
  slug: { type: String, lowercase: true, unique: true },
  body: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

NoteSchema.plugin(uniqueValidator);
NoteSchema.pre('validate', function (next) {
  if (!this.slug) this.slug = uniqueSlug();
  next();
});
NoteSchema.methods.toNoteJSON = function () {
  return {
    note: {
      slug: this.slug,
      body: this.body,
      author: this.author
    }
  }
}
NoteSchema.methods.isPermissioned = function (userId) {
  return this.author.toString() ===  userId;
}

module.exports = NoteSchema;
