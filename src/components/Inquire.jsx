import { Draw } from "../utils/Images"
import { Form } from "react-bootstrap"
import { cdnURL } from '../utils/constants'
import ApiCall from "../utils/ApiCall"
import { useState} from "react"
const Inquire = () => {

    const [loading, setLoading] = useState(false);

    const submitInquiry = async e => {
        e.preventDefault();
        setLoading(true);
        let fd = new FormData(e.target);
        const data = await ApiCall('/api/inquiry', 'POST', Object.fromEntries(fd));
        if (data.status) {
            e.target.reset();
            alert('Form Submitted Successfully')
        }
        setLoading(false)
    }

    return (
        <>
            <div className="position-relative">
                <div className="pantheon-cover cover-mod fixed d-flex flex-column justify-content-center align-items-center" style={{ background: `url(${Draw})` }} >
                    <p className='display-4 text-center my-auto text-uppercase hero-content fw-bold text-light'><span></span></p>
                </div>
            </div>
            <div className="container mt-2">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="fw-bold text-uppercase fs-3 title">Pantheon's Inquiry Form</div>
                        <Form className='text-dark' onSubmit={e => submitInquiry(e)}>
                            <Form.Group className='py-1'>
                                <div className='form-floating'>
                                    <Form.Control type='text' className='border-11 bg-form' name='fullname' required />
                                    <label>Full Name</label>
                                </div>
                            </Form.Group>
                            <Form.Group className='py-1'>
                                <div className='form-floating'>
                                    <Form.Control type='tel' className='border-11 bg-form' name='contact_no' pattern='^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$' required />
                                    <label>Contact No.</label>
                                </div>
                            </Form.Group>
                            <Form.Group className='py-1'>
                                <div className='form-floating'>
                                    <Form.Control type='email' className='border-11 bg-form' name='email' pattern='[^ @]*@[^ @]*' />
                                    <label>E-mail</label>
                                </div>
                            </Form.Group>
                            <Form.Group className='py-1'>
                                <div className='form-floating'>
                                    <Form.Control as='textarea' rows={4} className='border-11 bg-form' name='message' />
                                    <label>Message</label>
                                </div>
                            </Form.Group>
                            <div className="d-flex pt-1">
                                <button type='submit' className="btn-v3 text-dark px-5 py-2 ms-auto me-0">{loading ? <div class="spinner-border" role="status" /> : 'Submit'}</button>
                            </div>
                        </Form>
                    </div>
                    <div className="col-md-2"/>
                    <div className="col-md-4" id='_inquire_form_img'>
                        <img alt='' className="img-fluid" src={cdnURL + '/Images/PantheonPlaytime.svg'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inquire