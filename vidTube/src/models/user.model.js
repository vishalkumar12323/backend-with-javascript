import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    watchHistory: {
      type: Schema.Types.ObjectId,
      ref: "video",
      default: [],
    },
    fullName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
    },
    refreshToken: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const User = model("user", userSchema);
