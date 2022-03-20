import { FaChevronCircleDown } from 'react-icons/fa'
import {BsChevronRight} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Cover = () => {
    return (
        <div className='position-relative'>
            <div className='pantheon-cover d-flex flex-column justify-content-center align-items-center'>
                <p className='display-4 text-center mb-5 text-uppercase hero-content fw-bold mt-auto text-light'><span>Education for a changing world</span></p>
                <div style={{ zIndex: '0' }} className='p-2 text-light mb-5 text-light d-flex align-items-center flex-column'>
                    <h6 className='text-uppercase drop-shadow-sm fw-bold'><span>Find Your Way</span></h6>
                    <div className="line my-1" />
                    <FaChevronCircleDown className='fs-5' id='cover-down-arrow' />
                </div>
            </div>
            <nav class="hero-links text-uppercase fw-bold small">
                <ul className='px-md-5 py-md-3 py-2'>
                    <li><Link className='text-dark d-flex flex-row align-items-center' to="/apply">Apply <BsChevronRight className='small ms-1'/></Link></li>
                    <li><Link className='text-dark d-flex flex-row align-items-center' to="/plan-a-visit">Visit <BsChevronRight className='small ms-1'/></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Cover