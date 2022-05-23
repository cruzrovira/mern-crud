import { useNavigate } from "react-router-dom"

import { usePostContext } from "../context/index"
const HomePage = () => {
  const { post, deletePost } = usePostContext()
  const navigate = useNavigate()
  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
        {post.map((item) => (
          <article key={item.id} className=" shadow p-2">
            <h2 className="text-x font-bold ">{item.titulo}</h2>
            <p>{item.comentario}</p>
            {item.imagen && <img className="w-full" src={item.imagen.url} />}

            <button
              className=" bg-blue-800 mt-2 p-2 cursor-pointer text-white rounded"
              onClick={() => deletePost(item.id)}
            >
              eliminar
            </button>
            <button
              className=" bg-blue-800 ml-2 mt-2 p-2 cursor-pointer text-white rounded"
              onClick={() => navigate(`update/${item.id}`)}
            >
              editar
            </button>
          </article>
        ))}
      </div>
    </div>
  )
}

export { HomePage }
