import { useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../utils/ContextAPI/AuthContext'
import { cdnURL } from '../../utils/constants'

import './about.css'

const ChairmanMessage = () => {
    const { navHeight } = useContext(AuthContext)
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])

    return (
        <div className='director chairman text-light text-justify'>
            <div className='d-flex'>
                <div className='logo d-none d-md-block col-3'>
                    <img className='img-fluid' alt='' src={cdnURL + '/Images/director_1.jpg'} />
                </div>
                <div className='content px-4' style={{ paddingTop: navHeight }}>
                    <div className='col-lg-11'>
                        <div className='d-flex justify-content-sm-between flex-column flex-sm-row mb-2'>
                            <h1 className='display-2 text-uppercase letter-spacing-1'>
                                <span className='fw-bold'>message from</span><br />
                                <span>the chairman</span>
                            </h1>
                            <div className='director_img text-center p-2 pe-0'>
                                {/* <img src={cdnURL + '/Images/director_photo.jpg'} className='img-fluid rounded-3' /> */}
                            </div>
                        </div>
                        <p>We opened our doors to our students in April 2019 and over the past three years have established a reputation as an institution of innovation and quality.<br/>
                            The final stage of our development is almost complete and we have kept the highest standards in mind while developing the infrastructure for our students. Our endeavour is to create a world class institution that will be a centre of excellence in all respects.<br/>
                            Our children, whose individuality is nurtured by the child-centric curriculum, are our true ambassadors wherever they go. They are global in their outlook and yet are rooted in their heritage. Sensitive towards the environment as well as to each other, they hold integrity in the highest regard.<br/>
                            Your role as parents is critical as they grow into responsible individuals with a mind of their own. The three-way-handshake between the school, the parent, and the child is a cornerstone of our ethos at school.</p>

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

export default ChairmanMessage