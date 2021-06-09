const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const jay_movies = new Schema(
  {
    name: { type: String },
    description: { type: String },
    director: { type: String },
    actor: { type: String },
    blockbuster:{ type: Boolean}, 
    types: [
      {
        type: String,
        enum: ["action", "comedy", "remantic", "drama", "sci-fi"],
      },
    ],
    Review : { type: Number },
  },
  {
    strict: false,
    versionKey: false,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);
module.exports = mongoose.model("jay_movies", jay_movies);