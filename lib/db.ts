import mongoose, { mongo } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI

interface MongooseChache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

declare global {
    var mongoose: MongooseChache | undefined;
}

let cached: MongooseChache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
    global.mongoose = cached;
}

async function connetDB() {
    if (!MONGODB_URI) {
        throw new Error(
            "Definire MONGODB_URI nelle variabili d'ambiente in .env"
        );
    }

    if (!cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose;
        });
    }
    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

export default connetDB;

