import React, {useState, useRef} from "react";
import { useContext } from "react"; 
import { AppContext } from "../contexts/AppContext";
import { Link } from "react-router-dom";


export default function Person({person}) {

    const idRef = useRef()
    const emailRef = useRef()
    const nameRef = useRef()
    const phoneRef = useRef()

    const { updatePerson, deletePerson } = useContext(AppContext)

    const [updateP, setUpdateP] = useState(false)
    const [deleteP, setDeleteP] = useState(false)

    const {name, phone, email, id} = person

    const handleUpdate = () => {
        setUpdateP(!updateP)
    }
    const handleDelete = () => {
        setDeleteP(!deleteP)
    }

    const handleUpdateConfirm = () => {
        const person = {
            id: Number(idRef.current.value),
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value
        }
        
        updatePerson(person)
        handleUpdate()
    }

    const handleDeleteConfirm = (id) => {
        deletePerson(Number(id))
        handleDelete()
    }

    return (
        <>
            { updateP ?
                <div className="person-item-upd">    
                    email: <input type="text" defaultValue= {email} ref={emailRef} />
                    name: <input type="text" defaultValue= {name} ref = {nameRef} />
                    phone: <input type="text" defaultValue= {phone} ref = {phoneRef} />
                    <input type="hidden" value={person.id} ref= {idRef}/>
                    <span><button onClick={handleUpdateConfirm}>Aceptar</button></span>
                    <span><button onClick={handleUpdate}>Cancelar</button></span>
                </div>
            :
              deleteP ? 
                <div className="person-item-del">
                    <div>Realmente desea eliminar el elemento de la lista</div>
                    <span><button onClick={() => handleDeleteConfirm(person.id)}>Aceptar</button></span>
                    <span><button onClick={handleDelete}>Cancelar</button></span>
                </div>
                :
                <div className="person-item">
                    <Link to={`/persona/${email}`} > Email: {email} </Link>
                    
                    <span>Name: {name} </span>
                    <span>Phone: {phone} </span>
                    <span><button onClick={handleUpdate}>Upd</button></span>
                    <span><button onClick={handleDelete}>Del</button></span>
                </div>
            }
        </>
    )
}