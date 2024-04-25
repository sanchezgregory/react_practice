import React, {useState} from "react"
import { AppContext, useAppContext } from "../context/appContext.jsx"
import EditModal from "./EditModal.jsx"

const Show = () => {

    const {students, deleteStudent} = useAppContext(AppContext)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [rowData, setRowData] = useState({});

    const handleShow = (student) => {
        setRowData(student)
        setShow(true);
    }

    return (
        <div>
            <table className="table table-stripped mt-5" >
                <thead className="bg-dark text-white">
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key = {student.id}>
                            <th scope="row">{student.id}</th>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>
                                <div className="btn-group">
                                    <button onClick={() => handleShow(student)} className="btn btn-primary "> <i className="fa-regular fa-pen-to-square"></i> </button>
                                    <button onClick={ () => deleteStudent(student.id)} className="btn btn-danger"> <i className="fa-regular fa-trash-can"></i> </button>
                                </div>
                            </td>
                        </tr>
                        ))
                    }
                    
                </tbody>
            </table>

            <EditModal show={show} onClose={handleClose} rowData={rowData} />
        </div>
    )
}

export default Show