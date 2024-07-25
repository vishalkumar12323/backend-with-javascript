import { model, Schema } from "mongoose";

const likeSchema = new Schema(
  {
    likedBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: "video",
      required: true,
    },
    tweet: {
      type: Schema.Types.ObjectId,
      ref: "tweet",
      required: true,
    },
    comment: {
      type: Schema.Types.ObjectId,
      ref: "comment",
      required: true,
    },
  },
  { timestamps: true },
);

export const Like = model("like", likeSchema);
