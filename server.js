const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//env config
dotenv.config();

// import Routes:
const userRoutes = require('./routes/userRoutes')
const blogRoutes = require('./routes/blogRoutes')

//MonoDB Connection
connectDB();

// rest objects
const app = express();

//middelwares
app.use(cors());
app.use(express.json()); // we can receive the  json client data
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);

// Port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server Running on ${process.env.DEV_MODE} mode port no ${PORT}`.bgCyan.white);
});
