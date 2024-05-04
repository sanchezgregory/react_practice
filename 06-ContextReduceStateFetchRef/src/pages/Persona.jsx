import { useParams } from "react-router-dom"

function Persona() {

    let params = useParams()
    console.log(params)

    const {email, name, phone} = useParams()

  return (
    <>
        <h3>Perfil del usuario</h3>
        <hr />
        <div className="data-person">
            <p>Email: <strong>{email}</strong> </p>
            <p>Name: {name} </p>
            <p>Phone: {phone} </p>
        </div>
    </>
  )
}

export default Persona
