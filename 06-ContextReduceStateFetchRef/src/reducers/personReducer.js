import {ADD, REMOVE, UPDATE, LOAD, FILTER} from '../constants/personConstants.js';

export function personReducer(state, action) {
    
    switch (action.type) {
        case LOAD:
            return {persons: action.payload}
        case ADD:
            console.log(state.persons)
            return {
                ...state,
                persons: [...state.persons, action.payload]
            }
        case REMOVE:
            return {
                ...state,
                persons: state.persons.filter(person => person.id!== action.payload)
            }
        case UPDATE:
            
            // let aux = [...state.persons]
            
            // for (let i = 0; i < aux.length; i++) {
            //     if (aux[i].id == action.payload.id) {
            //         console.log('action.payload.id: ', action.payload.id)
            //         aux[i] = action.payload
            //     }
            // }
            // console.log('aux: ' , aux)
            // return {
            //     ...state,
            //      persons: aux
            // }

            return {
                    ...state,
                    persons: state.persons.map(person => person.id === action.payload.id? action.payload : person)
                }
        case FILTER:
            return {
                ...state,
                 persons: state.persons.filter(person => person.name.toLowerCase().includes(action.payload.toLowerCase()))
            }
        default: return state
    }
}