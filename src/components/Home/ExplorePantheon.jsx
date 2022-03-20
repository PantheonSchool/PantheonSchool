import { Link } from "react-router-dom"
import portals from "./PortalData"

const PortalComp = ({ portal }) => {
    return <div className="portal pe-3">
        <Link to={portal.link} className="position-relative" style={{ backgroundImage: `url(${portal.img})` }}>
            <h6 className="text-uppercase">{portal.title}</h6>
        </Link>
    </div>
}

const ExplorePantheon = () => {
    return (
        <div className='position-relative find-your-way mt-5'>
            <div className='mt-3 p-md-5 p-2 text-light text-center'>
                <div className='content'>
                    <h2 className='fw-bold display-4 my-4'>EXPLORE PANTHEON</h2>
                    <p>The Pantheon School is set up in three acres area amidst the well connected location at the crossing of Kathgodam-Kathgharia Road and Haldwani-Kaladhungi Road near by Haidakhan Mandir Kathgharia Haldwani.</p>
                </div>
                <Link to='/pantheon-at-a-glance' className="btn-v3 px-4 py-2 mx-auto">learn more</Link>
            </div>
            <div className='explore_portals d-flex my-5 p   p-3 flex-row justify-content-md-center overflow-auto overflow_hide'>
                {portals && portals.map((portal, index) => <PortalComp portal={portal} key={portal.title + index} />)}
            </div>
        </div>
    )
}

export default ExplorePantheon