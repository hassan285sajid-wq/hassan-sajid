import dotenv from "dotenv"
import path from 'path'
import { fileURLToPath } from 'url'

// Resolve .env path relative to this file (public/temp/src/index.js -> public/temp/.env)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const envPath = path.resolve(__dirname, '../.env')
dotenv.config({ path: envPath })

import connectDB from "./db/index.js";
import { app } from './app.js'

// Attempt to connect to DB but do not prevent the server from starting in dev.
connectDB()
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((err) => {
        console.warn('Warning: MongoDB connection failed. Starting server without DB.');
        console.warn(err && err.message ? err.message : err);
    })
    .finally(() => {
        const port = process.env.PORT || 8000;
        app.listen(port, () => {
            console.log(`Server is running at port: ${port}`);
        });
    });