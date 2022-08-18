import { useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../utils/ContextAPI/AuthContext'
import { cdnURL } from '../../utils/constants'

import './about.css'

const PrincipalMessage = () => {
    const { navHeight } = useContext(AuthContext)
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])

    return (
        <div className='director principal text-light text-justify'>
            <div className=''>
                <div className='logo d-none d-md-block col-3'>
                    <img className='img-fluid' alt='' src={cdnURL + '/Images/director.jpg'} />
                </div>
                <div className='content px-4' style={{ paddingTop: navHeight }}>
                    <div className='col-lg-11'>
                        <div className='d-flex justify-content-sm-between flex-column flex-sm-row mb-2'>
                            <h1 className='display-2 text-uppercase letter-spacing-1'>
                                <span className='fw-bold'>principal's</span><br />
                                <span>message</span>
                            </h1>
                            <div className='director_img text-center p-2 pe-0'>
                                {/* <img src={cdnURL + '/Images/director_photo.jpg'} className='img-fluid rounded-3' /> */}
                            </div>
                        </div>
                        <p>
                            <p className='font-monospace'>“The aim of education is the knowledge, not of facts, but of values.”</p>
                            It gives me great pleasure to welcome you to The Pantheon School Haldwani (TPS) Website. We have tried to create an online resource that provides all relevant information about (TPS), and I hope that as you pursue through the contents of this website, you will get a sense of the rich flavor of life at our school.<br />
                            Today, the role of a school is not only to pursue academic excellence but also to motivate and empower its students to be lifelong learners, critical thinkers, and productive members of an ever-changing global society. At (TPS) all aspects of our educational processes are carefully designed to cultivate and stimulate the intellectual, social, and personal development of the most important stakeholders at this institution; the students. We are passionate about creating a ‘learning’ institution that is dynamic and constantly seeking excellence to meet the needs of the present as well as the future, while learning from the ethical and moral value systems of the Indian past. (TPS) is committed to the complete development of a student; this includes academic knowledge, social skills, intellectual curiosity, Physical endurance and a special emphasis on self-discovery. At (TPS) we provide an atmosphere to our students for multifaceted development, where children are encouraged to channelize their potential in the pursuit of excellence. This can only be possible in a holistic, student-centric environment. The talents, skills, and abilities of each student needs to be identified, nurtured, and encouraged so that he / she is able to reach greater heights. Students need to be provided with a platform to think, express, and exhibit their skills. It is necessary to empower them to negotiate several issues that confront them, with the teacher being a facilitator.<br /><br />

                            The school is striving hard to make the best possible efforts to inculcate strong values combining with academics and extra-curricular activities in the children. Converting every individual into a self-reliant and independent citizen, the school provides an amalgam of scholastic and co-scholastic activities. No wonder, a student harnessed in such an atmosphere has every hope and possibility of becoming a responsible, balanced and a mature adult and is able to live in to contribute and to shoulder responsibilities of the society, of which he forms an integral part. Children need a supportive environment at home and at school. They need to set goals, within their reach until they gain confidence and determination. They should re-examine their priorities, set clean goals and make specific plans to achieve what they desire. Focusing on specific goals, helps them move forward purposefully in life. They would, thus, have the pleasure of watching their dreams into reality.<br /><br />

                            I would like the parents to know that my door is always open to discuss any concerns, questions, or ideas you may have regarding your child’s education. I welcome you all to an outstanding learning community where everyone is dedicated to a high standard of excellence.<br /><br />

                            We truly have a fantastic school with a supportive and involved parent community, dedicated and highly skillful staff, excellent resources and buildings and the most fantastic students to work with. We are very sure that with the help of all the stakeholders and with their continuous support, we will be able to take our school to the next highest level of excellence. At our end, we shall continue working with you for the best interests of our beloved students and our community at large.<br /><br />

                            My commitment to our community is to lead the school with enthusiasm and passion to enable us to reach our goals. Let us work together to make The Pantheon School as the best school in Haldwani, it can be. We look forward to welcoming you to be part of our vibrant learning community. I look forward to meeting each one of you personally.<br /><br />
                            <p className='font-monospace'>“Let noble thoughts come to us from every side”</p>
                            <p className='text-end'>
                                <span className='fw-bold fs-5'>Aaina Bhamrah</span>
                                <br/>
                                Principal,
                                <br/>
                                The Pantheon School.
                            </p>
                        </p>

                        {/* <div className='row '>
                            <div className='col-7 col-md-8 col-lg-9' />
                            <div className='col d-flex align-items-center sign flex-column pe-0'>
                                <img className='img-fluid' alt='' src={cdnURL + '/Images/director_sign1.png'} />
                                <div className='d-flex align-items-center flex-column w-100'>
                                    <span className='sign-under'>B.Tech (NIT Allahabad)</span>
                                    <span className='sign-under'>B.Ed, CTET I & II</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrincipalMessage