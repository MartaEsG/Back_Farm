const express = require("express")
const {getParcel} = require("../controllers/parcel.controllers")
// const {isAuth, isAdmin} = require("../../middlewares/auth")
const upload = require ("../../middlewares/upload.file")

const parcelRoutes = express.Router();

parcelRoutes.get("/:id", getParcel);
// movieRoutes.post("/", upload.single("image"), postMovie);
// movieRoutes.put("/:id", upload.single("image"), putMovie);
// movieRoutes.delete("/:id", deleteMovie);


module.exports= parcelRoutes;