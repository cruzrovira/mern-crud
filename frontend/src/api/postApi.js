const getPostsRequest = async () => {
  return await fetch(import.meta.env.VITE_SERVER_URL + "/posts")
}
const getPostIdRequest = async (id) => {
  return await fetch(import.meta.env.VITE_SERVER_URL + "/posts/" + id)
}
const delePostRequest = async (id) => {
  return await fetch(import.meta.env.VITE_SERVER_URL + "/posts/" + id, {
    method: "DELETE",
  })
}
const savePostRequest = async (post) => {
  return await fetch(import.meta.env.VITE_SERVER_URL + "/posts", {
    method: "POST",
    body: post,
  })
}
const updatePostRequest = async (id, post) => {
  return await fetch(import.meta.env.VITE_SERVER_URL + "/posts/" + id, {
    method: "PUT",
    body: post,
  })
}

export {
  getPostsRequest,
  delePostRequest,
  savePostRequest,
  getPostIdRequest,
  updatePostRequest,
}
