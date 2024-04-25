import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { AppContext, useAppContext } from '../context/appContext';


const EditModal = ({show, onClose, rowData}) => {
   
    const {updateStudent} = useAppContext(AppContext)
    
    const [formData, setFormData] = useState({
        id:'',
        name:'',
        age:''
    })  
    
    const handleChange = (key, value) => {
        setFormData({
            ...formData, 
            [key]: value
        })
    }

    const {name, age} = rowData
    

    const handleSubmit = (e) => {
        e.preventDefault()
        updateStudent(formData)
        onClose()
    }

    useEffect( () => {
        setFormData(rowData)
    }, [rowData])

    return (
        <>
        <form onSubmit={handleSubmit}>
            <Modal show={show} onHide={onClose}>
                <Modal.Header className='bg-info text-white' closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control defaultValue={name} type="text" onChange={e => handleChange('name', e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" defaultValue={age} onChange={e => handleChange('age', e.target.value)}/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </form>
        </>
    )
}

export default EditModal