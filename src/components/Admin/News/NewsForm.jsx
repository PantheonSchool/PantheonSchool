import { Form } from "react-bootstrap"
import { useState } from 'react'
import ApiCall from "../../../utils/ApiCall"
import { toast } from 'react-toastify'

const NewsForm = ({ getNewsData }) => {

    const [isImp, setImp] = useState(false)

    const SubmitNews = async e => {
        e.preventDefault();
        toast.info('Processing...')
        const fd = new FormData(e.target);
        fd.append('important', isImp);
        const data = await ApiCall('/api/news', 'POST', Object.fromEntries(fd));
        toast.dismiss();
        if (data.status) {
            toast.success('News Added Successfully')
            getNewsData()
        }
        else {
            console.error(data.error)
            toast.error('Some Error Occurred')
        }
    }

    return (
        <div className="p-2 shadow border">
        <h3 className="my-0 text-center text-pantheon-blue fw-bold">ADD NEWS</h3>
            <Form onSubmit={(e) => SubmitNews(e)}>
                <Form.Group className='py-1'>
                    <Form.Floating>
                        <Form.Control type='text' name='imgURL' />
                        <label>Photo Link</label>
                    </Form.Floating>
                </Form.Group>
                <Form.Group className='py-1'>
                    <Form.Floating>
                        <Form.Control type='text' name='title' required />
                        <label>Title</label>
                    </Form.Floating>
                </Form.Group>
                <Form.Group className='py-1'>
                    <Form.Floating>
                        <textarea className="form-control" rows={3} name='body' required />
                        <label>Body</label>
                    </Form.Floating>
                </Form.Group>
                <Form.Group className='py-1'>
                    <Form.Floating>
                        <Form.Control type='date' name='date' required />
                        <label>Date</label>
                    </Form.Floating>
                </Form.Group>
                <Form.Check type="switch" onChange={() => setImp(!isImp)} checked={isImp} label="Important?" className="py-1" />
                <button type='submit' className="btn-v3 text-dark px-5 py-2 mx-0">SUBMIT</button>
            </Form>
        </div>
    )
}

export default NewsForm