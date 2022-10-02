import dotenv from "dotenv";
dotenv.config();
import path from "path"
import express from "express";

import connectDB from "./config/db.js";
import router from "./routes/route.js";

connectDB();
const __dirname = path.resolve();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.use("/", router);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server running on PORT : ${PORT}`);
})