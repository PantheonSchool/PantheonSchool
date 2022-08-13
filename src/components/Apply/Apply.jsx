import AdmissionOverview from './AdmissionOverview'
import Instructions from './Instructions'
import Cover from '../Cover'
// import Banner from '../Images/applyCover.jpg'

import './apply.css'

const Apply = () => {
    return (
        <>
            <Cover classN='apply-cover' backgroundImg='/Images/applyCoverImg7.jpg'/>
            <div className='container'>
                <AdmissionOverview />
            </div>
            <Instructions/>
        </>
    )
}

export default Apply