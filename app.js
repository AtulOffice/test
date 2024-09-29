import express from 'express';
import dotenv from "dotenv"
import cors from "cors";
import { CONNECTION_DB } from './db/db.js';
import { SampleRouter } from './router/sample.router.js';

dotenv.config();


const app = express();
app.use(express.json())
app.use(cors());
const port = process.env.PORT || 9000
app.get("/", (req, res) => {
    res.send("hello i am from server")
})

app.use("/api/v1", SampleRouter)


CONNECTION_DB(process.env.MONGO_URL)

app.listen(port, (req, res) => {
    console.log(`server is  running at port ${port}`)
})
