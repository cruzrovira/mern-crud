import { postAction } from "../actions/postAction"

const postInitial = {
  post: [],
  isLoading: false,
  errorMessage: "",
}
const PostReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case postAction.LOAD_POST:
      return {
        ...state,
        loading: true,
      }

    case postAction.LOAD_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        post: payload,
      }

    case postAction.DELETE_POST:
      return {
        ...state,
        isLoading: true,
      }
    case postAction.DELETE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        post: state.post.filter((item) => item.id !== payload),
      }
    case postAction.LOAD_POST_SAVE:
      return {
        ...state,
        isLoading: true,
      }
    case postAction.LOAD_POST_SAVE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        post: [...state.post, payload],
      }
    case postAction.LOAD_POST_SAVE_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      }
    case postAction.UPDATE_POST:
      return {
        ...state,
        isLoading: true,
      }
    case postAction.UPDATE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        post: state.post.map((item) =>
          item.id === payload.id ? payload : item
        ),
      }
    case postAction.LOAD_POST_UPDATE_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      }
    default:
      return state
  }
}
export { PostReducer, postInitial }
