const express = require("express")
const {getCalendar} = require("../controllers/calendar.controllers")
// const upload = require ("../../middlewares/upload.file")

const calendarRoutes = express.Router();

calendarRoutes.get("/:id", getCalendar);
// calendarRoutes.post("/insert", upload.single("image"), postActor);
// calendarRoutes.put("/:id", upload.single("image"), putActor);
// calendarRoutes.delete("/:id", deleteActor);


module.exports= calendarRoutes;