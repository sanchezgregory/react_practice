import { createContext, useReducer } from "react"
import { personReducer } from "../reducers/personReducer"
import { initialPersons } from "../constants/personConstants"
import { ADD, REMOVE, UPDATE, LOAD, FILTER } from "../constants/personConstants"

export const AppContext = createContext()

export default function AppProvider({children}) {

    const [state, dispatch] = useReducer(personReducer, initialPersons)

    const loadPersons = (persons = {persons:[]}) => {
        persons.length && dispatch({type:LOAD, payload:persons})
    }
    const createPerson = (person) => {
        dispatch({type:ADD, payload:person})
    }
    const deletePerson = (id) => {
        dispatch({type:REMOVE, payload:id})
    }
    const updatePerson = (person) => {
        dispatch({type:UPDATE, payload:person})
    }
    const filterPersons = (str) => {
        dispatch({type:FILTER, payload:str})
    }

    return (
        <AppContext.Provider value ={{
            persons: state.persons,
            loadPersons,
            createPerson,
            deletePerson,
            updatePerson,
            filterPersons
        }}>
            {children}
        </AppContext.Provider>
    )
}