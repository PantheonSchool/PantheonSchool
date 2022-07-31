import { cdnURL } from '../../utils/constants'
import { Form } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import APICall from '../../utils/ApiCall'
import { useRef, useContext } from 'react'
import { AuthContext } from '../../utils/ContextAPI/AuthContext'
import { useNavigate } from 'react-router'
import {toast} from 'react-toastify'

import './login.css'

const Login = () => {

    const login_msg = useRef()
    const { setUser } = useContext(AuthContext)
    let navigate = useNavigate()

    const LoginFunc = async e => {
        e.preventDefault();
        const fd = new FormData(e.target)
        const data = await APICall('/api/admin/login', 'POST', Object.fromEntries(fd))
        if (data.status) {
            localStorage.pantheon_token = data.token;
            localStorage.pantheon_username = data.username;
            login_msg.current.innerHTML = 'Login Successful';
            toast.success('Login Successful')
            setTimeout(() => {
                setUser(true)
                navigate('/admin')
            }, 1500);
        }
        else {
            login_msg.current.innerHTML = data.error;
            toast.error(data.error)
        }
        setTimeout(() => login_msg.current.innerHTML = '', 3000);
    }

    return (
        <div className="container pt-2">
            <div className="d-flex justify-content-center align-items-center pt-5 mt-5">
                <div className='d-flex p-4 flex-column align-items-center col-12 col-lg-5 shadow'>
                    <div id='_login_banner_img' className='p-2'>
                        <img alt='' className='img-fluid' src={cdnURL + '/Images/PantheonLogo.png'} />
                    </div>
                    <div className='text-center mb-2'>
                        <h3 id='_login_header_title' className='my-3'>The Pantheon School</h3>
                        <p className='fw-bold mb-1'>If you have any questions regarding your account, please contact Technology Support.</p>
                        <a href='mailto:ujjwalpandey24@gmail.com'>ujjwalpandey24@gmail.com</a>
                    </div>
                    <Form onSubmit={e => LoginFunc(e)} className='col-12'>
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
                        <button type='submit' className='btn-v3 text-dark px-5 py-2 mx-0'>LOGIN</button><br />
                        <small className='text-danger' ref={login_msg} />
                    </Form>
                    {/* <Link to='/register' className='text-start'>create an account?</Link> */}
                    <small className='text-black-50 mt-2'>The Pantheon School &#169; 2022</small>
                </div>
            </div>
        </div>
    )
}

export default Login