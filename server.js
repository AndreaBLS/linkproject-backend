const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const cors = require("cors")

//Import Routes
const authRouter = require("./routes/auth")
const apiRouter = require("./routes/api")


dotenv.config()

//connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log("connected to your remote db hosted on Atlas!")
)

//Middleware 
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//cors
let frontendOrigin = '*'
app.use(
    cors({
        origin: [frontendOrigin], // HERE YOU CAN WHITELIST THE DOMAIN OF YOUR CLIENT
        credentials: true, // allow cookies from other origins
    })
);


// Route Middlewares
app.use("/auth", authRouter)
app.use("/api", apiRouter)

app.listen(3000, () => console.log("server up and running"))