import mongoose from "mongoose";

const connectDb = async () => { 
  try {
    const connect = await mongoose.connect(`${process.env.CONNECTION_STRING}`);
    console.log("Connected to database:", connect.connection.host, connect.connection.name);

  } catch (error) {
    console.log("Error connecting to database", error);
    process.exit(1);
  }
};

export default connectDb;