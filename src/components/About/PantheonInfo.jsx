import { cdnURL } from '../../utils/constants'
// import { useContext } from 'react'
// import { AuthContext } from '../../utils/ContextAPI/AuthContext'

const PantheonInfo = ({AboutRef}) => {
    // const { navHeight } = useContext(AuthContext)

    return (
        <div className='py-3 about text-justify' ref={AboutRef}>
            <h1 className='text-uppercase pt-3 display-3 mb-5 mt-4'><span className='fw-bold'>about</span> the school</h1>
            <div className='d-flex content'>
                <div id='_pantheon_at_a_glance_icon'>
                    <img src={cdnURL + '/Images/about.png'} alt='' className='img-fluid' />
                </div>
                <div className='px-lg-3 mt-4'>
                    <p>The Pantheon School is set up in three acres area amidst the well connected
                        location at the crossing of Kathgodam-Kathgharia Road and Haldwani-Kaladhungi
                        Road near by Haidakhan Mandir Kathgharia Haldwani. It is a Centrally Air
                        Conditioned School, with air Conditioned transport facility and with a Half Olympic
                        Size all weather Swimming pool and Indoor Badminton Court Facility. Lawn Tennis
                        court, Basket Ball Court Facility.<br/>
                    </p>

                    <p>The Pantheon School is going to be a CBSE affiliated co-educational school, which
                        uses the world class state of the art technology to impart Quality education. Our
                        thought and philosophy is based on providing the environment of deep rooted
                        Indian values integrated with a global mindset to our students.<br />
                    </p>

                    <p>We aspire to equip our students with skills that will help them excel in life and
                        prepare for their greater role of shaping the tomorrow..<br />
                    </p>

                    <p>From this paradigm, we aim to develop conscientious citizens, who are ingenious,
                        open-minded, creative, critical thinking, self-disciplined and energetic individuals.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PantheonInfo