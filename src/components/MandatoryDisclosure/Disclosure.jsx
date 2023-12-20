import AdmissionContainer from "../CoverContainer";
import filesList, { schoolGeneral, staffList, schoolInfrastructure, academicLinks } from "./filesList";
import { cdnURL } from "../../utils/constants"
import { Table } from 'react-bootstrap'

import "./mandatory.css"

const Disclosure = () => {
    return <>
        <AdmissionContainer path={['mandatory disclosure']} _title='MANDATORY DISCLOSURE'>
            <div className="fee-container text-light mt-1">
                <div className='py-3'>
                    <div className='container'>
                    <h1 className='text-uppercase letter-spacing-1 mt-5 mt-md-0 text-center'><br/><span className='display-4 fw-bold'>MANDATORY DISCLOSURE</span></h1>
                    <h1 className='text-uppercase letter-spacing-1 mt-5 mt-md-0'><br/><span className='display-5 fw-bold'>A) GENERAL INFORMATION</span></h1>
                        <div className='overflow-auto scrollbar-v1 mb-0 pt-3'>
                            <Table bordered className='text-left border-dark '>
                                <thead className='text-light'>
                                    <tr style={{ verticalAlign: "middle" }}>
                                        <th>S.NO.</th>
                                        <th>INFORMATION</th>
                                        <th>DETAILS</th>
                                    </tr>
                                </thead>
                                <tbody className='text-dark bg-light'>
                                {schoolGeneral.map((data, idx) => {
                                    return (
                                        <tr>
                                            <td>{idx+1}.</td>
                                            <td>{data.title}</td>
                                            {!data.link &&
                                                <td>{data.details}</td>
                                            }
                                            {data.link &&
                                                <td>
                                                    <a href={`${cdnURL}${data.link}`} target="_blank" rel="noreferrer">
                                                        Click Here
                                                    </a>
                                                </td>
                                            }
                                        </tr>
                                    )
                                })
                                }
                                </tbody>
                            </Table>
                        </div>
                        <h1 className='text-uppercase letter-spacing-1 mt-5 mt-md-0'><br/><span className='display-5 fw-bold'>B) DOCUMENTS AND INFORMATION</span></h1>
                        <div className='overflow-auto scrollbar-v1 mb-0 pt-3'>
                            <Table bordered className='text-left border-dark '>
                                <thead className='text-light'>
                                    <tr style={{ verticalAlign: "middle" }}>
                                        <th>S.NO.</th>
                                        <th>DOCUMENTS/INFORMATION</th>
                                        <th>UPLOAD DOCUMENTS</th>
                                    </tr>
                                </thead>
                                <tbody className='text-dark bg-light'>
                                {filesList.map((data, idx) => {
                                    return (
                                        <tr>
                                            <td>{idx+1}.</td>
                                            <td>{data.title}</td>
                                            <td>
                                                <a href={`${cdnURL}${data.link}`} target="_blank" rel="noreferrer">
                                                    Click Here
                                                </a>
                                            </td>
                                        </tr>
                                    )
                                })
                                }
                                </tbody>
                            </Table>
                        </div>
                        <h1 className='text-uppercase letter-spacing-1 mt-5 mt-md-0'><br/><span className='display-5 fw-bold'>C) RESULT AND ACADEMICS</span></h1>
                        <div className='overflow-auto scrollbar-v1 mb-0 pt-3'>
                            <Table bordered className='text-left border-dark '>
                                <thead className='text-light'>
                                    <tr style={{ verticalAlign: "middle" }}>
                                        <th>S.NO.</th>
                                        <th>DOCUMENTS/INFORMATION</th>
                                        <th>UPLOAD DOCUMENTS</th>
                                    </tr>
                                </thead>
                                <tbody className='text-dark bg-light'>
                                {academicLinks.map((data, idx) => {
                                    return (
                                        <tr>
                                            <td>{idx+1}.</td>
                                            <td>{data.title}</td>
                                            <td>
                                                <a href={data.isCDN ? `${cdnURL}${data.link}` : data.link} target="_blank" rel="noreferrer">
                                                    Click Here
                                                </a>
                                            </td>
                                        </tr>
                                    )
                                })
                                }
                                </tbody>
                            </Table>
                        </div>
                        <h1 className='text-uppercase letter-spacing-1 mt-5 mt-md-0'><br/><span className='display-5 fw-bold'>D) STAFF (TEACHING)</span></h1>
                        <div className='overflow-auto scrollbar-v1 mb-5 pt-3'>
                            <Table bordered className='text-left border-dark '>
                                <thead className='text-light'>
                                    <tr style={{ verticalAlign: "middle" }}>
                                        <th>S.NO.</th>
                                        <th>INFORMATION</th>
                                        <th>DETAILS</th>
                                    </tr>
                                </thead>
                                <tbody className='text-dark bg-light'>
                                {staffList.map((data, idx) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{idx+1}.</td>
                                                <td>{data.information}</td>
                                                <td>{data.details}</td>
                                            </tr>
                                            {data.sub &&
                                                data.sub.map((d) => {
                                                    return <>
                                                        <tr>
                                                            <td></td>
                                                            <td>{d.information}</td>
                                                            <td>{d.details}</td>
                                                        </tr>
                                                    </>
                                                })
                                            }
                                        </>
                                    )
                                })
                                }
                                </tbody>
                            </Table>
                        </div>
                        <h1 className='text-uppercase letter-spacing-1 mt-5 mt-md-0'><br/><span className='display-5 fw-bold'>E) SCHOOL INFRASTRUCTURE</span></h1>
                        <div className='overflow-auto scrollbar-v1 mb-5 pt-3'>
                            <Table bordered className='text-left border-dark '>
                                <thead className='text-light'>
                                    <tr style={{ verticalAlign: "middle" }}>
                                        <th>S.NO.</th>
                                        <th>ROOM</th>
                                        <th>NUMBER</th>
                                        <th>LENGTH</th>
                                        <th>BREADTH</th>
                                    </tr>
                                </thead>
                                <tbody className='text-dark bg-light'>
                                {schoolInfrastructure.map((data, idx) => {
                                    return (
                                        <tr>
                                            {!data.nonNumbered && <td>{idx+1}.</td>}
                                            <td colSpan={data.nonNumbered && 2}>{data.room}</td>
                                            {!data.html && !data.hyperlink && <td>{data.number}</td>}
                                            {!data.html && !data.hyperlink && <td>{data.length}</td>}
                                            {!data.html && !data.hyperlink && <td>{data.breadth}</td>}
                                            {data.html && <div contentEditable='true' dangerouslySetInnerHTML={{ __html: `${data.details}` }} />}
                                            {data.hyperlink && <a href={data.link} target="_blank" rel="noreferrer">Click Here</a>}
                                        </tr>
                                    )
                                })
                                }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </AdmissionContainer>
    </>;
}

export default Disclosure;