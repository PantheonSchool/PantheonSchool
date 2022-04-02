import { FaChevronCircleDown } from 'react-icons/fa'
import {BsChevronRight} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Cover = () => {
    return (
        <div className='position-relative'>
            <div className='pantheon-cover d-flex flex-column justify-content-center align-items-center'>
                <p style={{marginTop:'145px'}} className='display-4 text-center mb-1 mt-md-auto text-uppercase hero-content fw-bold text-light'><span>Education for a changing world</span></p>
                <div style={{ zIndex: '0' }} className='p-2 text-light mb-5 mt-auto mt-md-5 text-light d-flex align-items-center flex-column'>
                    <h6 className='text-uppercase drop-shadow-sm fw-bold'><span>Find Your Way</span></h6>
                    <div className="line my-1" />
                    <FaChevronCircleDown className='fs-5' id='cover-down-arrow' />
                </div>
            </div>
            <nav className="hero-links text-uppercase fw-bold small shadow-sm">
                <ul className='px-md-5 py-md-3 py-2'>
                    <li><a className='text-dark d-flex flex-row align-items-center' target='_blank' href="src/assets/pdf/       pantheonAdmissionForm.pdf">Apply <BsChevronRight className='small ms-1'/></a></li>
                    <li><Link className='text-dark d-flex flex-row align-items-center' to="/plan-a-visit">Visit <BsChevronRight className='small ms-1'/></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Cover