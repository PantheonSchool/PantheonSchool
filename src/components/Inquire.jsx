import { Draw } from "../utils/Images"
import { Form } from "react-bootstrap"
const Inquire = () => {

    const submitInquiry = async e => {
        e.preventDefault();
        let fd = new FormData(e.target);
        alert('hello ')
    }

    return (
        <>
            <div className="position-relative">
                <div className="pantheon-cover cover text-white" style={{ background: `url(${Draw})` }}>
                    <div className="caption">
                        <div className="fw-bold text-uppercase title">Pantheon's Inquiry Form</div>
                        <Form className='text-dark' onSubmit={e => submitInquiry(e)}>
                            <Form.Group className='py-1'>
                                <div className='form-floating'>
                                    <Form.Control type='text' className='border-11 bg-snow' name='fullname' required/>
                                    <label>Full Name</label>
                                </div>
                            </Form.Group>
                            <Form.Group className='py-1'>
                                <div className='form-floating'>
                                    <Form.Control type='tel' className='border-11 bg-snow' name='contact_no' pattern='^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$' required/>
                                    <label>Contact No.</label>
                                </div>
                            </Form.Group>
                            <Form.Group className='py-1'>
                                <div className='form-floating'>
                                    <Form.Control type='email' className='border-11 bg-snow' name='email' pattern='[^ @]*@[^ @]*' />
                                    <label>E-mail</label>
                                </div>
                            </Form.Group>
                            <Form.Group className='py-1'>
                                <div className='form-floating'>
                                    <Form.Control as='textarea' rows={4} className='border-11 bg-snow' name='message' />
                                    <label>Message</label>
                                </div>
                            </Form.Group>
                            <div className="d-flex pt-1">
                                <button type='submit' className="btn-v3 px-5 py-2 ms-auto">Submit</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inquire