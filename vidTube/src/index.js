import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./db/index.js";
import { appConstant } from "./constent.js";

dotenv.config();

connectDB()
    .then(() => {
        app.listen(appConstant.port, () =>
            console.log(`server listening on port ${appConstant.port}`),
        );
    })
    .catch((e) => console.log(e));
