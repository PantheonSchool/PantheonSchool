
import PantheonInfo from './PantheonInfo'
import Mission from './Mission'

import './about.css'

const About = () => {
    return (
        <div className='pantheon-at-a-glance-container text-light'>
            <div className='container'>
                <PantheonInfo />
            </div>
            <Mission />
        </div>
    )
}

export default About