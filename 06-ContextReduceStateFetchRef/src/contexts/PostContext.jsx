import { createContext, useReducer } from "react"
import PostReducer from "../reducers/postReducer"
import { initialData, ADD, REMOVE, UPDATE, LOAD } from "../constants/postsConstants"

export const PostContext = createContext()

export default function PostProvider({children}) {

    const [state, dispatch] = useReducer(PostReducer, initialData)

    const createPokemon = (pokemon) => {
        dispatch({type:ADD, payload:pokemon})
    }
    const updatePokemon = (pokemon) => {
        dispatch({type:UPDATE, payload:pokemon})
    }
    const removePokemon = (id) => {
        dispatch({type:REMOVE, payload:id})
    }
    const loadPokemons = (pokemons) => {
        dispatch({type:LOAD, payload:pokemons.results})
    }
    
    return (
        <PostContext.Provider value={{
            pokemons: state.pokemons,
            createPokemon,
            updatePokemon,
            removePokemon,
            loadPokemons
        }} >
            {children}
        </PostContext.Provider>
    )
        

}
