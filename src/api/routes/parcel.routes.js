const express = require("express")
const {getParcel, getParcelInfo, postParcel, putParcel, deleteParcel} = require("../controllers/parcel.controllers")
// const {isAuth, isAdmin} = require("../../middlewares/auth")
const upload = require ("../../middlewares/upload.file")

const parcelRoutes = express.Router();

parcelRoutes.get("", getParcel);
parcelRoutes.get("/:id", getParcelInfo);
parcelRoutes.post("", postParcel);
parcelRoutes.put("/:id", putParcel);
parcelRoutes.delete("/:id", deleteParcel);

module.exports= parcelRoutes;