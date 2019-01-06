const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const uniqueSlug = require('unique-slug');

const NoteSchema = new mongoose.Schema({
  slug: { type: String, lowercase: true, unique: true },
  body: String,
  // author: String
}, { timestamps: true });

NoteSchema.plugin(uniqueValidator);
NoteSchema.pre('validate', function (next) {
  if (!this.slug) this.slug = uniqueSlug();
  next();
});

module.exports = NoteSchema;
