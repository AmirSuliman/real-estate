import dotenv from 'dotenv'
import express from 'express' 
import mongoose from 'mongoose'

dotenv.config();

mongoose.connect(process.env.MONGOOSE_URI)
.then(() => console.log("connected to MongoDB."))
.catch((error) => console.log("Cannot connect to MongoDB:", error))

const app = express()

app.listen(3000, () => console.log("Server is running on port 3000"))