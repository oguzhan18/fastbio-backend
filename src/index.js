import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import { userRouter } from "./routes/users.js";
import { profilesRouter } from "./routes/profiles.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/profiles", profilesRouter);

mongoose.connect('mongodb+srv://oguzhancart1:dYgnbqstqAhX0vHa@cluster0.ohju9wl.mongodb.net/');

app.listen(3001, () => console.log("Server Started!"));
