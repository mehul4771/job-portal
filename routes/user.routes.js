// routes/user.routes.js

import express from "express";
import { register, login, logout, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js"; // Adjust the path as necessary

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/update-profile").post(isAuthenticated, updateProfile); // Add the middleware here

export default router;
