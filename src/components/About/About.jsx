import PantheonInfo from './PantheonInfo'
// import Mission from './Mission'
// import Vision from './Vision'
// import Approach from './Approach'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import CoverContainer from '../CoverContainer'
import { useContext } from 'react'
import { AuthContext } from '../../utils/ContextAPI/AuthContext'

import './about.css'

const About = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const VisionRef = useRef();
    const AboutRef = useRef();
    const MissionRef = useRef();
    const ApproachRef = useRef();

    const { navHeight } = useContext(AuthContext)

    const scrollQuery = {
        vision: VisionRef,
        mission: MissionRef,
        about: AboutRef,
        approach: ApproachRef
    }

    const ScrollFunction = () => {
        const query = searchParams.get('scrollTo');
        let refE;
        if (query) { refE = scrollQuery[query] }
        else refE = scrollQuery['about']

        window.scrollTo({
            top: refE.current.offsetTop,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        try {
            ScrollFunction();
        } catch (err) { console.error(err) }
    }, [])

    return (
        <CoverContainer path={['overview', 'pantheon at a glance']} _title='OVERVIEW'>
            <div className='pantheon-at-a-glance-container text-light text-justify overflow-hidden'>
                {/* <Cover/> */}
                <div className='container'>
                    <PantheonInfo AboutRef={AboutRef} navHeight={navHeight} />
                </div>
                {/* <Vision VisionRef={VisionRef} navHeight={navHeight}/>
            <Mission MissionRef={MissionRef} navHeight={navHeight}/>
            <Approach ApproachRef={ApproachRef} navHeight={navHeight}/> */}
            </div>
        </CoverContainer>
    )
}

export default About