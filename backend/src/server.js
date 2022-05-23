import express from "express"
import cors from "cors"
import fileupload from "express-fileupload"
import morgan from "morgan"
import "dotenv/config"
import "./services/mongoose"

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "uploads",
  })
)

export { app }
