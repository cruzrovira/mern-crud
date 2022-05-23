import fs from "fs-extra"

import { PostModel } from "../models/post-model"
import { uploadImage, deleteImage } from "../lib/cloudinary"

const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find()
    return res.json(posts)
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
}

const getPost = async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id)
    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      })
    }
    return res.json(post)
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
}

const createPost = async (req, res) => {
  console.log(req.body)
  try {
    const { titulo, comentario } = req.body
    let imagen
    if (req.files?.imagen) {
      const newImagen = await uploadImage(req.files.imagen.tempFilePath)
      imagen = { url: newImagen.url, public_id: newImagen.public_id }
      await fs.remove(req.files.imagen.tempFilePath)
    }

    const newPost = new PostModel({
      titulo,
      comentario,
      imagen,
    })

    await newPost.save()
    return res.status(201).json(newPost)
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
}

const updatePost = async (req, res) => {
  try {
    const { titulo, comentario } = req.body
    const post = await PostModel.findByIdAndUpdate(
      req.params.id,
      {
        titulo,
        comentario,
      },
      { new: true }
    )
    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      })
    }
    return res.json(post)
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
}

const deletePost = async (req, res) => {
  try {
    const post = await PostModel.findByIdAndDelete(req.params.id)
    if (!post) {
      return res.status(404).json({
        message: "Post not found",
      })
    }
    await deleteImage(post.imagen.public_id)
    return res.json(post)
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
}

export { getPosts, getPost, createPost, updatePost, deletePost }
