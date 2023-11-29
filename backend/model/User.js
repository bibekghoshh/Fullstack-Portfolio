import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: [true, "Please Enter Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Password"],
    select: false,
  },

  timeline: [
    {
      title: String,
      description: String,
      startdate: Date,
      enddate: Date,
    },
  ],

  skills: [
    {
      title: String,
      image: {
        public_id: String,
        url: String,
      },
    },
  ],


  youtube: [
    {
      url: String,
      title: String,
      image: {
        public_id: String,
        url: String,
      },
    },
  ],

  projects: [
    {
      title: String,
      startdate: Date,
      enddate: Date,
      description: String,
      detailsDescription:String,
      techStack: String,
      liveUrl: String,
      githubUrl: String,
      image: {
        public_id: String,
        url: String,
      },
    },
  ],

  about: {
    name: String,
    title: String,
    subtitle: String,
    description: String,
    quote: String,
    avatar: {
      public_id: String,
      url: String,
    },
  },
});

export const User = mongoose.model("User", userSchema);