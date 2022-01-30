require("dotenv").config();
const mongoose=require("mongoose");
const express=require("express");
const cors=require("cors");
const issueRouter=require("./routes/Issue");
const orgRouter=require("./routes/Org");
const projRouter=require("./routes/Project");
const {router:authRouter}=require("./routes/Auth");
const userRouter=require("./routes/User");
const defaultRes=require("./middleware/defaults")
const errorHandler=require("./middleware/errorHandler")

const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/issues",issueRouter);
app.use("/api/org",orgRouter);
app.use("/api/projects",projRouter);
app.use("/api/auth",authRouter);
app.use("/api/users",userRouter);
app.use(errorHandler);
app.use(defaultRes);

app.use(defaultRes);
app.listen(process.env.PORT,()=>{
    mongoose.connect(process.env.MONGO_URI)
    console.log("Server has started; && connected to DB");
})