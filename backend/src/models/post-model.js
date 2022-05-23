const { Schema, model } = require("mongoose")

const postSchema = new Schema(
  {
    titulo: {
      type: String,
      required: true,
      trim: true,
    },
    comentario: {
      type: String,
      required: true,
      trim: true,
    },

    imagen: {
      url: String,
      public_id: String,
    },
  },
  {
    timestamps: true,
  }
)
postSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const PostModel = model("Post", postSchema)

export { PostModel }
