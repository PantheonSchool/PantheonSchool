import { FaChevronCircleDown } from 'react-icons/fa'
const Cover = () => {
    return (
        <div className='pantheon-cover d-flex flex-column justify-content-center align-items-center'>
            <p className='display-4 text-center text-uppercase hero-content fw-bold mt-auto text-light'><span>Education for a changing world</span></p>
            <div style={{zIndex:'0'}} className='p-2 text-light mt-auto mb-5 text-light d-flex align-items-center flex-column'>
                <h6 className='text-uppercase drop-shadow-sm fw-bold'><span>Find Your Way</span></h6>
                <div className="line my-1" />
                <FaChevronCircleDown className='fs-5' id='cover-down-arrow' />
            </div>
        </div>
    )
}

export default Cover