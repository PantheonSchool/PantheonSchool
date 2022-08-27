import { IoLocationSharp } from 'react-icons/io5'
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const ContactUs = () => {
  return (
    <div className='container py-md-4'>
      <div className='row'>
        <div className='col-md-6 mb-3'>
          <div className='d-flex flex-row'>
            <div className='py-3 px-4 bg-mustard'>
              <IoLocationSharp className='text-light fs-3' />
            </div>
            <p className='ms-3'><span className='fw-bold'>Address: </span>Haidakhan Mandir Road, Kathgharia, Haldwani, 263139</p>
          </div>
          <div className='d-flex flex-row mt-3'>
            <div className='py-3 px-4 bg-mustard'>
              <AiOutlineMail className='text-light fs-3' />
            </div>
            <p className='ms-3'><span className='fw-bold'>Email: </span><a className='text-dark' href='mailto:thepantheon.2019@gmail.com'>thepantheon.2019@gmail.com</a></p>
          </div>
          <div className='d-flex flex-row mt-3'>
            <div className='py-3 px-4 bg-mustard'>
              <AiFillPhone className='text-light fs-3' />
            </div>
            <p className='ms-3'><span className='fw-bold'>Phone no: </span><a href='tel:7618671071' className='text-dark'>7618671071, 7618671075</a></p>
          </div>
        </div>
        <div className='col'>
            <p className='fw-bold fs-4 mb-1'>Inquiry</p>
            <p>for inquiry visit <Link className='text-primary' to='/inquire'>this</Link> page</p><br/>
            <p className='fw-bold fs-4 mb-1'>Appointment</p>
            <p>for appointment visit <Link className='text-primary' to='/visit'>this</Link> page</p>
        </div>
      </div>
    </div>
  )
}

export default ContactUs