import { useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../utils/ContextAPI/AuthContext'
import { cdnURL } from '../../utils/constants'

import './about.css'

const DirectorMessage = () => {
    const { navHeight } = useContext(AuthContext)
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])

    return (
        <div className='director text-light text-justify'>
            <div className='d-flex'>
                <div className='logo d-none d-md-block'>
                    <img className='img-fluid' alt='' src={cdnURL + '/Images/director.jpg'} />
                </div>
                <div className='content px-4' style={{ paddingTop: navHeight }}>
                    <div className='col-lg-11'>
                        <div className='d-flex justify-content-sm-between flex-column flex-sm-row mb-2'>
                            <h1 className='display-2 text-uppercase letter-spacing-1'>
                                <span className='fw-bold'>director's</span><br />
                                <span>message</span>
                            </h1>
                            <div className='director_img text-center p-2 pe-0'>
                                <img src={cdnURL + '/Images/director_photo.jpg'} className='img-fluid rounded-3'/>
                            </div>
                        </div>
                        <p>It is my privilege to welcome you to The Pantheon School, Haldwani. We endeavor to create a learning environment in which all children will feel enabled and encouraged to become successful learners. A caring and challenging school culture will ensure that students grow into responsible and courageous members of our society. At the heart of our effort is the attempt to give the right values to our children.<br />
                            we promote these through all aspects of school life. Each student is encouraged to accept responsibility for self discipline, to develop self respect and compassion, to contribute to the community and through their school life – develop a love of learning whilst continually striving for excellence.<br />
                            We take pride in our dedicated faculty and all our members of staff are committed to creating a learning environment which maximizes the quality of education.<br />
                            We also recognize the vital role that parents play in contributing to children's success and happiness at school. We therefore seek to build strong and supportive partnerships with our parent community and look forward to their close involvement with the school and its programs.<br />
                            Our endeavor is to create a world class institution that will be a centre of excellence in all respects.<br />
                            We look forward to continuing our successful partnership with our parents and working closely together towards building a strong and vibrant school community.</p>
                        <div className='d-flex justify-content-end sign'>
                            <img className='img-fluid' alt='' src={cdnURL + '/Images/director_sign1.png'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DirectorMessage