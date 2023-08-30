const express = require("express")
const {getInvoice} = require("../controllers/invoice.controllers")
// const upload = require ("../../middlewares/upload.file")

const invoiceRoutes = express.Router();

invoiceRoutes.get("/:id", getInvoice);
// invoiceRoutes.post("/", upload.single("image"), postDirector);
// invoiceRoutes.put("/:id", upload.single("image"), putDirector);
// invoiceRoutes.delete("/:id", deleteDirector);


module.exports= invoiceRoutes;