import { Form } from "react-bootstrap"
import { useState } from 'react'

const NewsForm = () => {

    const [isImp, setImp] = useState(false)

    const SubmitNews = async e => {
        e.preventDefault();
        const fd = new FormData(e.target);
    }

    return (
        <div className="p-2 shadow">
            <Form onSubmit={(e) => SubmitNews(e)}>
                <Form.Group className='py-1'>
                    <Form.Floating>
                        <Form.Control type='text' />
                        <label>Photo Link</label>
                    </Form.Floating>
                </Form.Group>
                <Form.Group className='py-1'>
                    <Form.Floating>
                        <Form.Control type='text' />
                        <label>Title</label>
                    </Form.Floating>
                </Form.Group>
                <Form.Group className='py-1'>
                    <Form.Floating>
                        <textarea className="form-control" rows={3} />
                        <label>Body</label>
                    </Form.Floating>
                </Form.Group>
                <Form.Group className='py-1'>
                    <Form.Floating>
                        <Form.Control type='date' />
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