'use strict';
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Jay_movie = new Schema(
  {
    name: { type: String, require: true },
    directer: { type: String, require: true },
    review: { type: Number, require: true },
    type: { type: String, enum: ["action", "horror", "drama"] },
    blockbuster: { type: Boolean },
  },
  {
    id: true,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);
const movle = mongoose.model("Jay_movie", Jay_movie);
module.exports = movle;
