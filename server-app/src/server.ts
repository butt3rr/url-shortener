import express from 'express'; //convert to es module
import dotenv from "dotenv";
import cors from 'cors';
import connectDb from './config/dbConfig';
import shortUrl from './routes/shortUrl';
dotenv.config(); //fetch values from .env file
connectDb(); //connect to database

const port = process.env.PORT || 5001; //get port from .env file or use 5001

//create simple app
const app = express();

//run api at frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

//create api/route
app.use("/api", shortUrl);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});