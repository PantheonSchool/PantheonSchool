import { cdnURL } from '../../utils/constants'
import AdmissionOverview from './AdmissionOverview'
import Instructions from './Instructions'
// import Banner from '../Images/applyCover.jpg'

import './apply.css'

const Apply = () => {
    return (
        <>
            {/* <div className="position-relative">
                <div className="pantheon-cover cover-mod fixed d-flex flex-column justify-content-center align-items-center" style={{ background: `url(${cdnURL}/Images/applyCove.jpg)` }} >
                    <p className='display-4 text-center my-auto text-uppercase hero-content fw-bold text-light'><span></span></p>
                </div>
            </div> */}
            <div className='cover'>
                <img src={cdnURL + '/Images/applyCoverImg.jpg'} alt='Apply Cover' className='img-fluid'/>
            </div>
            <div className='container'>
                <AdmissionOverview />
            </div>
            <Instructions/>
        </>
    )
}

export default Apply