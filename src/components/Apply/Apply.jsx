import AdmissionOverview from './AdmissionOverview'
import Instructions from './Instructions'

import AdmissionContainer from './AdmissionContainer'

import './apply.css'

const Apply = () => {
    return (
        <>
            <AdmissionContainer>
                <div className='container'>
                    <AdmissionOverview />
                </div>
                <Instructions />
            </AdmissionContainer>
        </>
    )
}

export default Apply