import { useState, useRef } from 'react'
import ApiCall from '../../../utils/ApiCall'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { serverURL } from '../../../utils/constants'
import { toast } from 'react-toastify'
import { Form } from 'react-bootstrap'
import ApiCallV2 from '../../../utils/APICallv2'

const FacultyCard = ({ faculty, getFacultyData }) => {

    const [edit, setEdit] = useState(false)
    const facultyImgRef = useRef()

    const deleteFaculty = async () => {
        if (window.confirm(`Are you sure?`)) {
            try {
                toast.error(`Deleting ${faculty.name} data...`)
                const data = await ApiCall(`/api/faculty/${faculty._id}`, 'DELETE')
                toast.dismiss();
                if (data.status) {
                    getFacultyData()
                    toast.success('Successfully Deleted')
                } else toast.error('Some error occured')

            } catch (err) {
                console.error(err);
                toast.error('Some error occured')
            }
        }
    }

    const updateFacultyData = async e => {
        e.preventDefault();
        const fd = new FormData(e.target);
        try {
            toast.warn(`Updating ${faculty.name} data...`)
            const data = await ApiCallV2(`/api/faculty/${faculty._id}`, 'PATCH',fd);
            toast.dismiss();
            if (data.status) {
                getFacultyData()
                toast.success('Successfully Updated')
            } else toast.error('Some error occured')
        } catch (err) {
            console.error(err);
            toast.error('Some error occured')
        }
    }

    const previewImg = (inp) => {
        if (inp.files && inp.files[0]) {
            let reader = new FileReader();

            reader.onload = (e) => {
                // console.log(facultyImgRef)
                facultyImgRef.current.src = e.target.result
            }

            reader.readAsDataURL(inp.files[0])
        }
    }

    return (
        <div className='col-12 col-md-6 mb-4 __card'>
            <div className='shadow-sm border p-2'>
                <div className='d-flex justify-content-end'>
                    <button className='btn' onClick={() => setEdit(!edit)}><AiFillEdit /></button>
                    <button className='btn' onClick={deleteFaculty}><AiFillDelete /></button>
                </div>
                <div className='d-flex'>
                    <img ref={facultyImgRef} alt='' src={serverURL + `/api/faculty/${faculty._id}/profilePicture`} className='img-fluid' style={{
                        maxHeight: '200px',
                        objectFit: 'cover'
                    }} />
                    <Form className='px-3 w-100' onSubmit={(e) => updateFacultyData(e)}>
                        <Form.Group className='py-1'>
                            <label>Profile Image</label>
                            <Form.Control disabled={!edit} accept=".jpeg" onChange={e => previewImg(e.target)} type='file' name='profileImage' />
                        </Form.Group>
                        <Form.Group className='py-1'>
                            <Form.Floating>
                                <Form.Control defaultValue={faculty.sno} readOnly={!edit} type='number' name='sno' required />
                                <label>S. No.</label>
                            </Form.Floating>
                        </Form.Group>
                        <Form.Group className='py-1'>
                            <Form.Floating>
                                <Form.Control defaultValue={faculty.name} readOnly={!edit} type='text' name='name' required />
                                <label>Name</label>
                            </Form.Floating>
                        </Form.Group>
                        <Form.Group className='py-1'>
                            <Form.Floating>
                                <Form.Control defaultValue={faculty.role} readOnly={!edit} type='text' name='role' required />
                                <label>Role</label>
                            </Form.Floating>
                        </Form.Group>
                        {edit && <button type='submit' className="btn-v3 text-dark px-5 py-2 mx-0">SUBMIT</button>}
                    </Form>
                </div>

            </div>
        </div>
    )
}

export default FacultyCard