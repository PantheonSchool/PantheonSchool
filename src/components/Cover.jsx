import { cdnURL } from "../utils/constants"
import SideNav from "./SideNav/SideNav"

const Cover = ({ backgroundImg, classN, navData }) => {
    return (
        <div className={`position-relative ${classN}`}>
            <div className="pantheon-cover cover-mod fixed d-flex flex-column justify-content-center align-items-center" style={{ background: `url(${cdnURL + backgroundImg})` }} >
                {/* <p className='display-4 text-center my-auto text-uppercase hero-content fw-bold text-light'><span></span></p> */}
                {navData && <SideNav navData={navData} />}
            </div>
        </div>
    )
}

export default Cover