import { serverURL, cdnURL } from "../../../utils/constants"

const FacultyCard = ({ faculty, idx }) => {
    return (<>
        <div className='col-12 p-3 col-sm-6 h-100'>
            <div className="d-flex border rounded-3 shadow">
                <img className="img-fluid rounded-start my-auto p-0 col" alt='' src={(serverURL + `/api/faculty/${faculty._id}/profilePicture`)} style={{
                    maxWidth: '150px',
                    height: '200px',
                    objectFit: 'cover'
                }} onError={(e) => {
                    e.target.src = cdnURL + `/Images/avatar-1577909.svg`
                }} />
                <div className="p-2 col-7 col-md-9">
                    <p className="fw-bold text-biasBlue fs-5 mb-0">{faculty.name}</p>
                    <p className="fst-italic mb-1">{faculty.role}</p>
                    {faculty.qualif && <p className="mb-1"><b>Qualifications: </b>{faculty.qualif}</p>}
                    {faculty.aoi && <p className="mb-1"><b>Area of Interest: </b>{faculty.aoi}</p>}
                    {faculty.contactNo && <p className="mb-1"><b>Contact No.: </b>{faculty.contactNo}</p>}
                    {faculty.email && <p style={{ overflowWrap: 'break-word' }} className="mb-1"><b>Email Id: </b>{faculty.email}</p>}
                </div>
            </div>
        </div>
        {(idx === 0) && <div className="col-12" />}
    </>
    )
}

export default FacultyCard