import { app } from "./server"
import { postRouter } from "./routers/post-router"

app.use("/posts", postRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
