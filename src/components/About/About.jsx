import PantheonInfo from './PantheonInfo'
import Mission from './Mission'
import Vision from './Vision'
import Approach from './Approach'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useRef } from 'react'

import './about.css'

const About = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const VisionRef = useRef();
    const AboutRef = useRef();
    const MissionRef = useRef();
    const ApproachRef = useRef();

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
        <div className='pantheon-at-a-glance-container text-light text-justify'>
            <div className='container'>
                <PantheonInfo AboutRef={AboutRef} />
            </div>
            <Vision VisionRef={VisionRef} />
            <Mission MissionRef={MissionRef} />
            <Approach ApproachRef={ApproachRef} />
        </div>
    )
}

export default About