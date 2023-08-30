const express = require("express");
const {register,login, addParcel, addInvoice, getAllParcels, getUser, putUser, postUser, deleteUser} = require("../controllers/user.controllers");
// const {isAuth, isAdmin} = require("../../middlewares/auth")
const userRoutes = express.Router();

userRoutes.post("/register", register);
userRoutes.post("/login", login);
userRoutes.put("/userParcel/:id", addParcel);
userRoutes.put("/userInvoice/:id", addInvoice);
userRoutes.get("/userAllParcels/:id", getAllParcels);
userRoutes.get("", getUser);
userRoutes.put("/:id", putUser);
userRoutes.post("", postUser);
userRoutes.delete("/:id", deleteUser);



module.exports= userRoutes;