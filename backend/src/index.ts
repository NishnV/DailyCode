import express from "express";
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import { route } from "./routes/auth";
import { probRoute } from "./routes/prob";

const PORT = 3000;
const app = express();
const MONGO_URL = 'mongodb://localhost:27017/Auth';

app.use(bodyParser.json());
app.use('/auth', route);
app.use('/problem', probRoute);

mongoose.connect(MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });