import CoverContainer from '../../CoverContainer'

import './curriculum.css'


const Curriculum = () => {
    return (
        <CoverContainer path={['academics', 'curriculum']} _title='ACADEMICS'>
            <div className='__curriculum container p-2 pt-3 p-md-3 pt-5 position-relative'>
                {/* <img className='img-fluid __content-bg' alt='' src={cdnURL + '/Images/Pantheon Prospectus-11.jpg'}/> */}
                <div className='d-flex'>
                    <div className='__curriculum-content col-sm-6 text-light text-justify'>
                        <h1 className="text-mustard display-2 mb-5 fw-bold mt-4">CURRICULUM</h1>
                        <p>Teachers to become facilitators of knowledge; and to help the learners to extract solutions, question preset theories and be responsive and adaptable.</p>
                        <p>Another factor to be kept in mind is that children need to become equipped with 21st century skills, social and emotional skills while developing themselves in areas they have talent in. They need to be proficient in creative and critical thinking, analysis, reasoning, problem solving, synthesis, data handling, applying their learning, and presentation skills. They need to practices, the latest technological tools and liberation from the tyranny of rote learning.</p>
                        <p>At the end of the years of schooling, the confident and responsible person that needs to emerge out of the school system requires careful nurturing. Thus, the system needs to be given opportunities to build values unconsciously in the minds of the child so s/he becomes an asset to society and a harbinger of progress.</p>
                    </div>
                </div>
            </div>
        </CoverContainer>
    )
}

export default Curriculum