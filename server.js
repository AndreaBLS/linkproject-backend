const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const cors = require("cors")
let frontendOrigin = 'http://localhost:4000'
const port = 4000

//Import Routes


dotenv.config()

//connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log("connected to your remote db hosted on Atlas!")
)

//Middleware 
app.use(
    cors({
        origin: [frontendOrigin], // HERE YOU CAN WHITELIST THE DOMAIN OF YOUR CLIENT
        credentials: true, // allow cookies from other origins
    })
);
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//cors

// Route Middlewares
const authRouter = require("./routes/auth")
const apiRouter = require("./routes/api")

app.use("/auth", authRouter)
app.use("/api", apiRouter)

app.listen(port, () => console.log("server up and running"))