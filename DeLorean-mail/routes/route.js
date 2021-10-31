import express from "express";
import { createMail, sendMail } from "../controller/mailController.js";

const router = express.Router();

router.post("/create", createMail);
router.get("/post", sendMail);

export default router;