import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength:6
  },
  profilePic: {
    type: String,
    default: "",
  },
},{timestamps:true});

export const User = mongoose.model("User", userModel);
