import React, { useContext, useRef } from 'react'
import { AppContext } from '../contexts/AppContext'
import Person from './Person'

function Body() {

    const {persons, createPerson, deletePerson, updatePerson, filterPersons} = useContext(AppContext)
    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const nameFilterRef = useRef()

    
    const handleAdd = () => {
        const name = nameRef.current.value 
        const email = emailRef.current.value
        const phone = phoneRef.current.value
        const person = {
            id:Date.now(),
            name,
            email,
            phone
        }
        createPerson(person)
        nameRef.current.value = ''
        emailRef.current.value = ''
        phoneRef.current.value = ''
    }

    const handleFilter = () => {
        const name = nameFilterRef.current.value
        console.log(name)
        filterPersons(name)
    }

  return (
    <>
        <h1>Body Component</h1>
        <h3>Add person:</h3>
        <div className='form-child3'>
            Name: <input type="text" placeholder="name" ref={nameRef} />
            Email <input type="text" placeholder="email" ref={emailRef} />
            Phone <input type="text" placeholder="phone" ref={phoneRef} />
            <button onClick={handleAdd}>Add</button>

            <h3>Filter person:</h3>
            <div>
                Filter by name: <input type="text" placeholder="filtering by name" onChange={handleFilter} ref={nameFilterRef} />
            </div>
        </div>

        
        <div className='person-container'>
            <div className='banner-person'>
                <h3>Person Component</h3>
            </div>

            {persons && persons.length > 0 ? persons.map( person => (
                <Person key={person.id} person={person}/>
            )) : <h2> No hay datos </h2>}

        </div>
    </>
  )
}

export default Body