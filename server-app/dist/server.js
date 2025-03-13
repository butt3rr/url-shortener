"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //convert to es module
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); //fetch values from .env file
const port = process.env.PORT || 5001; //get port from .env file or use 5001
//create simple app
const app = (0, express_1.default)();
//create api
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
