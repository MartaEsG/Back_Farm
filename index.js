const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { connect } = require("./src/utils/db");
const userRoutes = require("./src/api/routes/user.routes");
const calendarRoutes =require ("./src/api/routes/calendar.routes");
const invoiceRoutes = require("./src/api/routes/invoice.routes");
const parcelRoutes = require("./src/api/routes/parcel.routes");
const cloudinary = require("cloudinary").v2;


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
});

const PORT = process.env.PORT;
const app = express();

connect();
app.use(
  cors({
    origin: "*",
    credential: true,
  })
);

app.use(express.json());

app.use("/user", userRoutes); 
app.use("/calendar", calendarRoutes); 
app.use("/invoice", invoiceRoutes);
app.use("/parcel", parcelRoutes );

app.listen(PORT, () =>
  console.log(`escuchando en el puerto http://localhost:${PORT}`)
);
