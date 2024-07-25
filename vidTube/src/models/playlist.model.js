import { model, Schema } from "mongoose";

const playlistSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    videos: {
      type: [Schema.Types.ObjectId],
      ref: "video",
      default: [],
    },
    description: {
      type: String,
      required: true,
      lowercase: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true },
);

export const Playlist = model("playlist", playlistSchema);
