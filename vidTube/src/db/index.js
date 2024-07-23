import { connect } from "mongoose";
import { appConstant } from "../constent.js";

const connectDB = async () => {
    try {
        const db = await connect(appConstant.dbURL + "/" + appConstant.dbName);
        console.log(db.connection.host);
    } catch (e) {
        console.log("Database connection failed ", e);
        process.exit(1);
    }
};

export { connectDB };
