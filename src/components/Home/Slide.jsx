import { Link } from "react-router-dom"
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
const StatComp = ({ stat }) => {
    return <div className="stat col-4">
        <Zoom>
            <div>
                <h4 className="fw-bold">{stat.data}</h4>
            </div>
            <p className="text-center small">{stat.title}</p>
        </Zoom>
    </div>
}

const Slide = ({ slide, index }) => {
    return (
        <div style={{ backgroundColor: slide.backgroundColor }} className={slide.class + 'p-md-5 p-3 slide text-uppercase position-relative'}>
            {index % 2 ? <Fade left><div className="bg-image" style={{ backgroundImage: `url(${slide.img})` }} /></Fade> : <Fade right><div className="bg-image" style={{ backgroundImage: `url(${slide.img})` }} /></Fade>}
            <div className='p-md-5 p-1 fw-bold text-light'>
                <Fade bottom>
                    <div className="d-flex flex-column align-items-center">
                        <h3 className="text-light fw-bold text-center">{slide.title}</h3>
                        <Link to={slide.learnMoreLink} className='btn-v3 px-4 py-2'>Learn More</Link>
                    </div>
                </Fade>

                <div className="mt-3 row stats">
                    {slide.slideData && slide.slideData.map((stat, index) => <StatComp stat={stat} key={stat.title + index} />)}
                </div>
            </div>
        </div>
    )
}

export default Slide