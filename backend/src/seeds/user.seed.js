import { config } from "dotenv";
import  connectDB  from "../config/db.js";
import {User} from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "ananya.sharma@example.com",
    fullName: "Ananya Sharma",
    password: "123456",
    profilePic: "https://i.pravatar.cc/300?img=1",
  },
  {
    email: "ishita.mehra@example.com",
    fullName: "Ishita Mehra",
    password: "123456",
    profilePic: "https://i.pravatar.cc/300?img=2",
  },
  {
    email: "riya.verma@example.com",
    fullName: "Riya Verma",
    password: "123456",
    profilePic: "https://i.pravatar.cc/300?img=3",
  },
  {
    email: "priya.kapoor@example.com",
    fullName: "Priya Kapoor",
    password: "123456",
    profilePic: "https://i.pravatar.cc/300?img=4",
  },
  {
    email: "isha.patel@example.com",
    fullName: "Isha Patel",
    password: "123456",
    profilePic: "https://i.pravatar.cc/300?img=5",
  },
  {
    email: "sanya.jain@example.com",
    fullName: "Sanya Jain",
    password: "123456",
    profilePic: "https://i.pravatar.cc/300?img=6",
  },
  {
    email: "kriti.chopra@example.com",
    fullName: "Kriti Chopra",
    password: "123456",
    profilePic: "https://i.pravatar.cc/300?img=7",
  },
  {
    email: "megha.das@example.com",
    fullName: "Megha Das",
    password: "123456",
    profilePic: "https://i.pravatar.cc/300?img=8",
  },

  // Male Users
  {
    email: "arjun.singh@example.com",
    fullName: "Arjun Singh",
    password: "123456",
    profilePic: "https://i.pravatar.cc/300?img=9",
  },
  {
    email: "rohan.agarwal@example.com",
    fullName: "Rohan Agarwal",
    password: "123456",
    profilePic: "https://i.pravatar.cc/300?img=10",
  },
  {
    email: "akash.gupta@example.com",
    fullName: "Akash Gupta",
    password: "123456",
    profilePic: "https://i.pravatar.cc/300?img=11",
  },
  {
    email: "vivek.mishra@example.com",
    fullName: "Vivek Mishra",
    password: "123456",
    profilePic: "https://i.pravatar.cc/300?img=12",
  },
  {
    email: "krishna.iyer@example.com",
    fullName: "Krishna Iyer",
    password: "123456",
    profilePic: "https://i.pravatar.cc/300?img=13",
  },
  {
    email: "rahul.deshmukh@example.com",
    fullName: "Rahul Deshmukh",
    password: "123456",
    profilePic: "https://i.pravatar.cc/300?img=14",
  },
  {
    email: "manish.joshi@example.com",
    fullName: "Manish Joshi",
    password: "123456",
    profilePic: "https://i.pravatar.cc/300?img=15",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
