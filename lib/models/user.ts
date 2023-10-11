import { Schema, model, models, Document } from "mongoose";

export interface IUser extends Document {
  dateOfBirth: string;
  email: string;
  name: string;
  password: string;
  scores?: [{ game: string; points: number }];
  sessionId?: string;
  verified: boolean;
}

const scoreSchema = new Schema({
  game: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
});

const userSchema = new Schema(
  {
    dateOfBirth: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    scores: {
      type: [scoreSchema],
      default: [],
    },
    sessionId: {
      type: String,
      trim: true,
    },
    verified: {
      type: Boolean,
    },
  },
  { timestamps: true },
);

export default models.User || model<IUser>("User", userSchema);
