import { useReducer, useRef } from 'react'
import { ADD,REMOVE } from './actions'

function App() {
  
  const inputRef = useRef()

  const[tasks, dispatch] = useReducer((state = [], action) => {
    switch(action.type) {
      case ADD:
        return [...state, 
          { id: Date.now(), title:action.payload} ]
      case REMOVE:
        return state.filter(student => student.id!== action.payload)
      default:
        return state
    }
  })

  function createTask(task) {
    dispatch({
      type: ADD,
      payload: task
    })
  }

  function removeTask(id) {
    dispatch({
      type:REMOVE,
      payload: id
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask(inputRef.current.value)
    inputRef.current.value = ''
  }

  const handleRemove = (id) => {
    console.log(id)
    removeTask(id)
  }

  return (

    <>
      <div>
        <h1>Add a task </h1>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Add task" ref={inputRef}/>
          <button type="submit">Add</button>
        </form>

        <h1>List task | To do list</h1>
        <div>
        <ul>
            {tasks && tasks.map(task => ( 
              <li key = {task.id}>{task.title}  | <button onClick={() => handleRemove(task.id)}> Borrar </button></li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
