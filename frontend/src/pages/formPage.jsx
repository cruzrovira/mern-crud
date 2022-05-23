import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { usePostContext } from "../context/index"
const shema = yup
  .object()
  .shape({
    titulo: yup.string().required("El titulo es requerido"),
    comentario: yup.string().required("El comentario es requerido"),
  })
  .required()

const FormPage = () => {
  const { id } = useParams()

  const navigate = useNavigate()
  const { post, savePost, updatePost } = usePostContext()
  const [editPost, setEditPost] = useState({ titulo: "", comentario: "" })

  useEffect(() => {
    if (id) {
      setEditPost(post.find((p) => p.id === id))
    }
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(shema),
  })

  const onSubmit = async (data) => {
    const newData = new FormData()
    newData.append("titulo", data.titulo)
    newData.append("comentario", data.comentario)
    data.imagen && newData.append("imagen", data.imagen[0])

    id ? await updatePost(id, newData) : await savePost(newData)

    navigate("/")
  }
  return (
    <div className="flex justify-center items-center mt-4 ">
      <form
        action=""
        className=" grid grid-cols-1 gap-2 shadow p-4"
        type="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="p-2 border outline-blue-700 "
          type="text"
          {...register("titulo")}
          defaultValue={editPost.titulo}
        />
        {errors.titulo && <p>{errors.titulo.message}</p>}
        <textarea
          className="p-2 border outline-blue-700 "
          cols="10"
          {...register("comentario")}
          defaultValue={editPost.comentario}
        />
        {errors.comentario && <p>{errors.comentario.message}</p>}
        <input
          className="border outline-blue-700 "
          type="file"
          {...register("imagen")}
        />
        <input
          className="border-0 bg-blue-700 text-white cursor-pointer p-2 rounded"
          type="submit"
          value="Enviar"
        />
        <input
          className="border-0 bg-blue-700 text-white cursor-pointer p-2 rounded"
          type="reset"
          value="Cancelar"
        />
      </form>
    </div>
  )
}

export { FormPage }
