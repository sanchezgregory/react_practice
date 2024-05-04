import { ADD, UPDATE, REMOVE, LOAD } from "../constants/postsConstants"

export default function PostReducer(state, action) {

    switch (action.type) {

        case ADD:
            return {
                ...state,
                pokemons: [...state.pokemons, action.payload]
            }

        case UPDATE:
            return state;

        case REMOVE:
            return state;

        case LOAD:
            return {pokemons: action.payload}

        default:
            return state

    }
}