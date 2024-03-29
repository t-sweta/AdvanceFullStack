import express from "express";
import userRoute from "../routes/user";
import loginRoute from "../routes/login";
import likeRoute from "../routes/like";
import twittRoute from "../routes/tweet";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 3000;

app.use(cookieParser());
app.use(express.json());
app.set("view engine", "hbs");
app.get("/", (req, res) => {
  res.render("home");
});

//routes
app.use("/user", userRoute);
app.use("/twitt", twittRoute);
app.use("/login",loginRoute)
app.use("/likes",likeRoute);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
