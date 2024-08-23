import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
  try {
    const dbConntion = await mongoose.connect(
      `${process.env.DB_CONNECNTION_STRING}/${DB_NAME}`
    )
    console.log(dbConntion)
  } catch (error) {
    console.log("db connection error: ", error)
    process.exit(1)
  }
}

export default connectDB
