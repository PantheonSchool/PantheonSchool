import { Form } from "react-bootstrap"
import { toast } from 'react-toastify'
import { useRef } from "react"
import { serverURL } from "../../../utils/constants"
import ApiCallV2 from "../../../utils/APICallv2"

const FacultyForm = ({ getFacultyData }) => {

    const facultyImgRef = useRef()

    const AddFaculty = async (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        toast.info('Processing...')
        const data = await ApiCallV2('/api/faculty', 'POST', fd);
        // const response = await fetch(serverURL + '/api/faculty', {
        //     method: 'POST',
        //     headers: {
        //         'x-access-token': localStorage.pantheon_token
        //     },
        //     body: fd
        // });
        // const data = await response.json()
        toast.dismiss();
        if (data.status) {
            toast.success('Faculty Added Successfully')
            e.target.reset()
            getFacultyData();
        } else {
            console.error(data.error)
            toast.error('Some Error Occurred')
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
        <div className="p-2 border shadow">
            <h3 className="my-0 text-center text-pantheon-blue fw-bold">ADD FACULTY</h3>
            <div className="text-center my-1">
                <img alt='' ref={facultyImgRef} className='img-fluid' />
            </div>
            <Form onSubmit={e => AddFaculty(e)}>
                <Form.Group className='py-1'>
                    <label>Profile Image</label>
                    <Form.Control onChange={e => previewImg(e.target)} type='file' accept=".jpeg" name='profileImage' />
                </Form.Group>
                <Form.Group className='py-1'>
                    <Form.Floating>
                        <Form.Control type='number' name='sno' required />
                        <label>S. No.</label>
                    </Form.Floating>
                </Form.Group>
                <Form.Group className='py-1'>
                    <Form.Floating>
                        <Form.Control type='text' name='name' required />
                        <label>Name</label>
                    </Form.Floating>
                </Form.Group>
                <Form.Group className='py-1'>
                    <Form.Floating>
                        <Form.Control type='text' name='role' required />
                        <label>Role</label>
                    </Form.Floating>
                </Form.Group>
                <button type='submit' className="btn-v3 text-dark px-5 py-2 mx-0">SUBMIT</button>
            </Form>
        </div>
    )
}

export default FacultyForm