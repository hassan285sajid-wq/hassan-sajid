import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
        // Prefer full connection string in MONGODB_URI. If only a base URI is provided,
        // do not append the DB name if it's already present.
        const baseUri = process.env.MONGODB_URI || process.env.MONGO_URI;
        if (!baseUri) {
            throw new Error('MONGODB_URI or MONGO_URI environment variable is not set');
        }

        // If the provided URI already contains a database name or query params, use as-is.
        const connectionString = baseUri.includes('/') && /mongodb(?:\+srv)?:\/\/.+\/.+/.test(baseUri)
            ? baseUri
            : `${baseUri}/${DB_NAME}`;

        const connectionInstance = await mongoose.connect(connectionString);
        console.log(`\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED", error.message || error);
        // Throw to allow caller to decide how to handle (do not exit process here)
        throw error;
    }
}

export default connectDB