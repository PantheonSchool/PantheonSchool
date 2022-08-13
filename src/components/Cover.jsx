import { cdnURL } from "../utils/constants"

const Cover = ({ backgroundImg,classN }) => {
    return (
        <div className={`position-relative ${classN}`}>
            <div className="pantheon-cover cover-mod fixed d-flex flex-column justify-content-center align-items-center" style={{ background: `url(${cdnURL + backgroundImg})` }} >
                <p className='display-4 text-center my-auto text-uppercase hero-content fw-bold text-light'><span></span></p>
            </div>
        </div>
    )
}

export default Cover