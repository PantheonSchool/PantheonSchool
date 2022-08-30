import './about.css'
import CoverContainer from '../CoverContainer'
import { useEffect, useRef,useContext } from 'react';
import { AuthContext } from '../../utils/ContextAPI/AuthContext';

const Approach = () => {
    const ApproachRef = useRef();
    const { navHeight } = useContext(AuthContext)


    useEffect(() => {
        window.scrollTo({
            top: ApproachRef.current.offsetTop,
            behavior: 'smooth'
        })
    }, [])
    return (
        <CoverContainer path={['overview', 'our approach']} _title='OVERVIEW'>
            <div className='pantheon-at-a-glance-container text-light overflow-hidden'>
                <div className="px-lg-5 pb-lg-5 approach row" ref={ApproachRef} style={{ paddingTop: navHeight }}>
                    <div className="h-100 col p-3 text-justify">
                        <div className="px-3">
                            <h1 className="text-mustard display-3 text-uppercase"><span className="fw-bold">Our</span> <span>Approach</span></h1>
                            <br />
                            <div className="p-2 p-lg-0">
                                <p>The Pantheon School follows a child-centric unique curriculum to develop each child's inherent potential. The entire learning process is well phased out across four distinctive learning stages designed to help every child to realize his/her talent to the fullest. Our approach is, fostering a better understanding, igniting curiosity and a joyous learning environment for the students. The entire content is mapped to the curriculum class-wise.</p>
                                <p>A child learns in many ways - questioning adults, collaborating with peers, and experiencing the world through his or her unique perspective. The Pantheon School transforms these ways of learning into a methodology of relevance. This means that every child at our schools is equipped with a toolkit of concepts, skills and knowledge, which he or she can shape into endless possibilities and solutions. In a dynamic and shifting world, this kind of learning impacts individual growth as well as global consciousness.</p>
                                <ul>
                                    <li>Brings abstract and difficult curriculum concepts to life.</li>
                                    <li>Improves the teacher's effectiveness and productivity.</li>
                                    <li>Makes learning an enjoyable experience for students.</li>
                                    <li>Maximizes the academic performance of students.</li>
                                    <li>Enables a constant monitoring of your child's progress in class.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6"></div>
                </div>
            </div>
        </CoverContainer>
    )
}

export default Approach