import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js"
import tableDataRouter from "./routes/tableData.js"

dotenv.config();
const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected mongoose!");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("database disconnected");
});

//middleware
app.use(cors());
app.use(express());
app.use(express.json())

app.get("/",(req,res,next) => {
    res.send('welcome to api')
})
app.use("/api/auth", authRouter)
app.use("/api/tableData", tableDataRouter)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Someting went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

  const PORT = process.env.PORT

app.listen(PORT, () => {
  connect();
  console.log("server is runing?");
});
