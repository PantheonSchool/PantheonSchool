import './about.css'
import CoverContainer from '../CoverContainer'
import { useEffect, useRef, useContext } from 'react'
import { AuthContext } from '../../utils/ContextAPI/AuthContext'

const Vision = () => {
    const VisionRef = useRef();

    const { navHeight } = useContext(AuthContext)

    useEffect(() => {
        window.scrollTo({
            top: VisionRef.current.offsetTop,
            behavior: 'smooth'
        })
    }, [])
    return (
        <CoverContainer path={['overview', 'our vision']} _title='OVERVIEW'>
            <div className='pantheon-at-a-glance-container text-light overflow-hidden'>
                <div className="px-lg-5 pb-lg-5 vision" ref={VisionRef} style={{ paddingTop: navHeight - 10 }}>
                    <div className="h-100">
                        <div className="row flex-column-reverse flex-md-row pe-md-2 py-md-2 col-12 m-0">
                            <div className="col-md-8 col-lg-5 content p-3">
                                <p className="fw-bold mb-0 mb-sm-5"></p>
                                <h1 className="text-mustard display-3 letter-spacing-1 mb-5"><span className='fw-bold'>OUR</span> VISION</h1>
                                <ul >
                                    <li>Foster a culture of high expectations, and strive for excellence.</li>
                                    <li>To put the child at the heart of learning to become a transformational
                                        leader through understanding, knowledge and skills which can drive
                                        innovation to shape a better future for all, so that our Children move
                                        forward with skills and confidence to be successful in our highly
                                        competitive society.</li>
                                    <li>To generate integrated focus on academics, services, supports and
                                        opportunities that will lead to improved student learning, stronger
                                        family bonding and healthier communities. Our children to
                                        demonstrate sensitivity towards the environment, people and
                                        communities that are different from expected norms and, to ensure
                                        that each child's abilities, however different, are to be honed so that
                                        they achieve their potential and grow into discerning and
                                        progressive individuals who contribute meaningfully to the local
                                        and global community.</li>
                                    <li>We aim to create and disseminate knowledge by developing the
                                        intellect of our students with enthusiasm and excellence.</li>
                                </ul>
                                <br />
                                <p className="fw-bold mb-2">Our Motto is:</p>
                                <p className="text-center">&emsp;&emsp;"Strengthen the body Sharpen the Mind Nourish the Soul"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CoverContainer>
    )
}

export default Vision