import { cdnURL } from '../../utils/constants'
import { Form } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import { useRef } from 'react'
import ApiCall from '../../utils/ApiCall'

import './login.css'

const Register = () => {

    const register_msg = useRef()

    const RegisterFunc = async e => {
        e.preventDefault();
        const fd = new FormData(e.target)
        if (fd.get('password') != fd.get('re-pass')) register_msg.current.innerHTML = 'Password doesn\'t match'
        else {
            const data = await ApiCall('/api/admin/register', 'POST', Object.fromEntries(fd));
            if (data.status) register_msg.current.innerHTML = 'Registration Successful'
            else register_msg.current.innerHTML = JSON.stringify(data.error.keyValue) + ' is already present'
        }
        setTimeout(() => register_msg.current.innerHTML = '', 3000);
    }

    return (
        <div className="container">
            <div id='_login_container' className="d-flex justify-content-center align-items-center pt-5 mt-5">
                <div className='d-flex p-4 flex-column align-items-center col-12 col-lg-5 shadow'>
                    <div id='_login_banner_img' className='p-2'>
                        <img alt='' className='img-fluid' src={cdnURL + '/Images/PantheonLogo.png'} />
                    </div>
                    <div className='text-center mb-2'>
                        <h3 id='_login_header_title' className='my-3'>The Pantheon School</h3>
                        <p className='fw-bold mb-1'>If you have any questions regarding your account, please contact Technology Support.</p>
                        <a href='mailto:ujjwalpandey24@gmail.com'>ujjwalpandey24@gmail.com</a>
                    </div>
                    <Form onSubmit={e => RegisterFunc(e)} className='col-12'>
                        <Form.Group className='py-1'>
                            <Form.Floating>
                                <Form.Control type='text' name='username' required />
                                <label>USERNAME</label>
                            </Form.Floating>
                        </Form.Group>
                        <Form.Group className='py-1'>
                            <Form.Floating>
                                <Form.Control type='password' name='password' required />
                                <label>PASSWORD</label>
                            </Form.Floating>
                        </Form.Group>
                        <Form.Group className='py-1'>
                            <Form.Floating>
                                <Form.Control type='password' name='re-pass' required />
                                <label>RE-TYPE PASSWORD</label>
                            </Form.Floating>
                        </Form.Group>
                        <button type='submit' className='btn-v3 text-dark px-5 py-2 mx-0'>REGISTER</button>
                        <br />
                        <small className='text-danger' ref={register_msg} />
                    </Form>
                    {/* <Link to='/register' className='text-start'>already registered?</Link> */}
                    <small className='text-black-50 mt-2'>The Pantheon School &#169; 2022</small>
                </div>
            </div>
        </div>
    )
}

export default Register