import { model, Schema } from "mongoose";

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
      lowercase: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: "video",
      required: true,
    },
  },
  { timestamps: true },
);

export const Comment = model("comment", commentSchema);
