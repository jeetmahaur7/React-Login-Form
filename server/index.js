const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");

const app = express();

app.listen(4000, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Server Started Succcessfully");
    }
});

mongoose.connect("mongodb://127.0.0.1:27017/jwt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => {
        console.log("DB Connection Successfull");
    })
    .catch((err) => {
        console.log(err.message);
    });


app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());
app.use("/", authRoutes);