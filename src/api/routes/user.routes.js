const express = require("express");
const {register,login, addParcel} = require("../controllers/user.controllers");
// const {isAuth, isAdmin} = require("../../middlewares/auth")
const userRoutes = express.Router();

userRoutes.post("/register", register);
userRoutes.post("/login", login);
userRoutes.put("/:id", addParcel);


module.exports= userRoutes;