import { createContext, useReducer } from "react"
import PostReducer from "../reducers/postReducer"
import { initialPosts, ADD, REMOVE, UPDATE } from "../constants/postsConstants"

export const PostContext = createContext()

export default function PostProvider({children}) {

    const [state, dispatch] = useReducer(PostReducer, initialPosts)

    const createPost = (post) => {
        dispatch({type:ADD, payload:post})
    }
    const updatePost = (post) => {
        dispatch({type:UPDATE, payload:post})
    }
    const removePost = (id) => {
        dispatch({type:REMOVE, payload:id})
    }

    return (
        <PostContext.Provider value={{
            posts: state.posts,
            createPost,
            updatePost,
            removePost
        }} >
            {children}
        </PostContext.Provider>
    )
        

}
