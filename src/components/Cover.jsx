import { cdnURL } from "../utils/constants"
import SideNav from "./SideNav/SideNav"
import { Link } from "react-router-dom"
import { BsChevronRight } from 'react-icons/bs'

const Cover = ({ backgroundImg, classN, navData, path }) => {
    return (
        <div className={`position-relative ${classN}`}>
            <div className="pantheon-cover cover-mod fixed d-flex flex-column justify-content-center align-items-center" style={{ background: `url(${cdnURL + backgroundImg})` }} >
                {/* <p className='display-4 text-center my-auto text-uppercase hero-content fw-bold text-light'><span></span></p> */}
                {navData && <SideNav navData={navData} />}
            </div>
            <div className="cover_path d-flex align-items-center">
                <Link className="text-dark" to='/'>Home</Link>
                {path && path.map((pt) => <>
                    <BsChevronRight className="path_left_icon"/>
                    <span className="text-dark">{pt}</span>
                </>)}
            </div>
        </div>
    )
}

export default Cover