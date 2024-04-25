import React, { useState } from 'react';
import {AppContext, useAppContext } from '../context/appContext.jsx'

const Create = () => {
    
    const {createStudent} = useAppContext(AppContext)
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        
        createStudent({id: Date.now(), name, age})
        setName('')
        setAge('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="floatingInput" placeholder="nombre" />
                <label htmlFor="floatingInput">Nombre</label>
            </div>
            <div className="form-floating">
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="form-control" id="floatingAge" placeholder="Edad" />
                <label htmlFor="floatingAge">Edad</label>
            </div>
            <div className="d-grid gap-2 mt-2">
                <button className="btn btn-primary" type="submit"> <i className="fa-solid fa-plus fa-2x"></i></button>
            </div>
        </form>
    )
}

export default Create;