import { PromiseHandler } from "../utils/PromiseHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const healthCheck = PromiseHandler(async (req, res) => {
    return res.status(200).json(new ApiResponse(200, "success", "ok"));
});
