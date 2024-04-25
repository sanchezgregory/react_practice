import { useState, useEffect } from 'react'
import Nav from './Nav.jsx'


function App() {

  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  
  // fetching de data
  const URL = 'https://jsonplaceholder.typicode.com/users'
  async function getUsers() {
    const response = await fetch(URL)
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    console.log('asd')
    getUsers()
  }, [])

  function handleFilter(e) {
    const {value} = e.target
    setSearch(value)
  }

  let results = !search ? users : users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
    {/* Oneway */}
      <div className='filtrar'>
        <label htmlFor="filterText">Filtrar por nombre</label>
        <input type='text' id='filterText' onChange={handleFilter} />
      </div>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            { results.map((user) => (
                  <Nav key = {user.id} 
                  name = {user.name} 
                  username = {user.username}
                />
          ))}
          </tbody>

        </table>
        
    </>
  )
}

export default App
