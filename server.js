const express = require("express");
const app = express();
const port = process.env.PORT || 5123;
const dotenv = require("dotenv");
const cors = require("cors");

app.use(cors());
app.use(express.json());
const dbConnection = require("./db");

//env config
dotenv.config();

app.use("/api/cars/", require("./routes/carsRoute"));
app.use("/api/users/", require("./routes/usersRoute"));
app.use("/api/bookings/", require("./routes/bookingsRoute"));

const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.send("Hello world"); //File(path.resolve(__dirname, 'client/build/index.html'));
  });
}

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`));
