import dotenv from "dotenv";
dotenv.config();

export const appConstant = {
    corsOrigin: String(process.env.CORS_ORIGIN),
    port: Number(process.env.PORT),
    dbURL: String(process.env.DATABASE_URL),
    dbName: String(process.env.DATABASE_NAME),
};
