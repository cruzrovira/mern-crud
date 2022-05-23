import { Router } from "express"

import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/post-controller"

const postRouter = Router()

postRouter.get("/", getPosts)
postRouter.get("/:id", getPost)
postRouter.post("/", createPost)
postRouter.put("/:id", updatePost)
postRouter.delete("/:id", deletePost)

export { postRouter }
