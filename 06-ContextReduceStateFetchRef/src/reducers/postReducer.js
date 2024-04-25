import { ADD, UPDATE, REMOVE } from "../constants/postsConstants"

export default function PostReducer(state, action) {

    switch (action.type) {

        case ADD:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }

        case UPDATE:
            return state;

        case REMOVE:
            return state;

        default:
            return state

    }
}