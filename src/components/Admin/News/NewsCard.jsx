import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { toast } from 'react-toastify'

const NewsCard = () => {

    const [edit, setEdit] = useState(false)

    const UpdateNews = async e => {
        e.preventDefault()
    }
    return (
        <div className='p-2 shadow'>
            <div className='d-flex justify-content-end'>
                <button className='btn' onClick={() => setEdit(!edit)}><AiFillEdit /></button>
                <button className='btn'><AiFillDelete /></button>
            </div>
            <Form onSubmit={(e) => UpdateNews(e)}>
                <Form.Group className='py-1'>
                    <Form.Floating>
                        <Form.Control readOnly={!edit} type='text' />
                        <label>Photo Link</label>
                    </Form.Floating>
                </Form.Group>
                <Form.Group className='py-1'>
                    <Form.Floating>
                        <Form.Control readOnly={!edit} type='text' />
                        <label>Title</label>
                    </Form.Floating>
                </Form.Group>
                <Form.Group className='py-1'>
                    <Form.Floating>
                        <textarea readOnly={!edit} className="form-control" rows={3} />
                        <label>Body</label>
                    </Form.Floating>
                </Form.Group>
                <Form.Group className='py-1'>
                    <Form.Floating>
                        <Form.Control readOnly={!edit} type='date' />
                        <label>Date</label>
                    </Form.Floating>
                </Form.Group>
                <Form.Check disabled={!edit} type="switch" label="Important?" className="py-1" />
                {edit && <button type='submit' className="btn-v3 text-dark px-5 py-2 mx-0">SUBMIT</button>}
            </Form>
        </div>
    )
}

export default NewsCard