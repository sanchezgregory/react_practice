import { createContext, useContext, useReducer } from "react"
import { CREATE, UPDATE, DELETE } from "./actions"
import reducer from "./reducer.js"

export const AppContext = createContext()

const initialState = {
    students : [
        {id: 1, name: 'Juan Perez', age:25},
        {id: 2, name: 'Maria Ger', age:35},
        {id: 3, name: 'Javier Hola', age:45},
    ]
}

export const AppProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initialState) 

    const createStudent = (student) => {
        dispatch({type:CREATE, payload:student})
    }
    const deleteStudent = (student) => {
        dispatch({type:DELETE, payload:student})
    }
    const updateStudent = (student) => {
        dispatch({type:UPDATE, payload:student})
    }

    return (
        <AppContext.Provider value={{
                students: state.students,
                createStudent,
                deleteStudent,
                updateStudent,
                dispatch
            }}>
            {children}
        </AppContext.Provider>
    )
 }

 export const useAppContext = () => {
    return useContext(AppContext)
 }
