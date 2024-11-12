import { Document, model, Schema } from "mongoose";

interface iUser {
  name: string;
  password: string;
  image: string;
  phoneNumber: string;
  schoolName: string;
  email: string;
}

interface iUserData extends iUser, Document {}
const userModel = new Schema<iUserData>(
  {
    name: {
      type: String,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    phoneNumber: {
      type: String,
    },
    schoolName: {
      type: String,
    },

    image: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model<iUserData>("users", userModel);
