import { createContext, useContext, useEffect, useReducer } from "react"

import { PostReducer, postInitial } from "../reducers/postReducer"
import {
  getPostsRequest,
  delePostRequest,
  savePostRequest,
  updatePostRequest,
} from "../../api/postApi"
import { postAction } from "../actions/postAction"
const PostContext = createContext(null)

const usePostContext = () => {
  return useContext(PostContext)
}

const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PostReducer, postInitial)

  useEffect(() => {
    getposts()
  }, [])

  const getposts = async () => {
    try {
      dispatch({ type: postAction.LOAD_POST })
      const res = await getPostsRequest()
      const json = await res.json()
      dispatch({ type: postAction.LOAD_POST_SUCCESS, payload: json })
    } catch (error) {
      dispatch({ type: postAction.LOAD_POST_ERROR, payload: error.message })
    }
  }

  const deletePost = async (id) => {
    try {
      dispatch({ type: postAction.DELETE_POST })
      await delePostRequest(id)
      dispatch({ type: postAction.DELETE_POST_SUCCESS, payload: id })
    } catch (error) {
      dispatch({ type: postAction.DELETE_POST_ERROR, payload: error.message })
    }
  }

  const savePost = async (post) => {
    try {
      dispatch({ type: postAction.LOAD_POST_SAVE })
      const res = await savePostRequest(post)

      const json = await res.json()
      dispatch({ type: postAction.LOAD_POST_SAVE_SUCCESS, payload: json })
    } catch (error) {
      dispatch({
        type: postAction.LOAD_POST_SAVE_ERROR,
        payload: error.message,
      })
    }
  }
  const updatePost = async (id, post) => {
    try {
      dispatch({ type: postAction.UPDATE_POST })
      const res = await updatePostRequest(id, post)
      const json = await res.json()
      dispatch({ type: postAction.UPDATE_POST_SUCCESS, payload: json })
    } catch (error) {
      dispatch({
        type: postAction.LOAD_POST_UPDATE_ERROR,
        payload: error.message,
      })
    }
  }

  return (
    <PostContext.Provider
      value={{ ...state, deletePost, savePost, updatePost }}
    >
      {children}
    </PostContext.Provider>
  )
}

export { PostContextProvider, usePostContext }
