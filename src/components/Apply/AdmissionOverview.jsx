import StepBox from "./StepBox"
import { cdnURL } from "../../utils/constants"
import { AiOutlineFileSearch } from 'react-icons/ai'
import { FaEnvelopeOpenText, FaBusinessTime, FaFileInvoiceDollar } from 'react-icons/fa'
import { Table } from 'react-bootstrap'

const FirstStepData = {
    title: 'Admission Enquiry',
    description: <>Submit the online Enquiry Form from this <a class="text-mustard fw-bold text-decoration-underline" target="_blank" href={`${cdnURL}/pdf/pantheonAdmissionForm.pdf`}>link</a> or visit the school admissions office. Our counsellor will get back to you to answer your questions and collect the required information.</>,
    Icon: AiOutlineFileSearch
}

const StepData = [
    {
        title: 'Registration',
        description: 'The parents are requested to visit the school Admission Office, fill out the registration form and purchase the school prospectus. Kindly carry one latest passport size photo of the child and the parent along with the self-attested Date of Birth certificate.',
        Icon: FaEnvelopeOpenText
    },
    {
        title: 'Form Submission',
        description: 'The parent needs to fill up the admission form and ensure all documents are in order. Kinfly intimate the school in case your child requires some special assistance due to ant health reasons.',
        Icon: FaBusinessTime,
        additionalData: <Table className="text-center" striped bordered hover variant="dark" style={{fontSize:'0.6rem'}}>
            <thead>
                <tr>
                    <th>Class</th>
                    <th>Pre-Nursery</th>
                    <th>Nursery</th>
                    <th>LKG</th>
                    <th>UKG</th>
                    <th>Class 1</th>
                    <th>Class 2</th>
                    <th>Class 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Age</th>
                    <td>2+</td>
                    <td>3+</td>
                    <td>4+</td>
                    <td>5+</td>
                    <td>6+</td>
                    <td>7+</td>
                    <td>8+</td>
                </tr>
            </tbody>
        </Table>
    },
    {
        title: 'Payment of Fees',
        description: 'Once the above steps are satisfactorily completed, parents will recieve an admission offer and may pay the applicable fees to confirm admission.',
        Icon: FaFileInvoiceDollar
    }
]

const AdmissionOverview = () => {
    return (
        <div className="admisson-overview py-5 text-light" style={{ backgroundColor: '#84101b' }}>
            <div>
                <div className="row">
                    <div className="col mb-4">
                        <h1 className="text-uppercase text-mustard letter-spacing-1"><span className='display-3' style={{ fontWeight: '900' }}>Admission</span><br /><span className="display-4">Overview</span></h1>
                        <p className="mb-0 fw-bold admission-procedure">ADMISSION PROCEDURE</p>
                        <p className="fw-light small admission-procedure-para">At The Pantheon School we aim to make our admission process as simple as possible to ensure that all prospective parents enjoy a stress free application experience.</p>
                    </div>
                    <div className="col-md-5 col-lg-4">
                        <StepBox data={FirstStepData} index={1} />
                    </div>
                </div>
                <div className="second-step row mt-4 align-items-lg-end">
                    {StepData && StepData.reverse().map((step, index) => <div className="d-none d-lg-block col-md-6 col-lg-4 mb-5"><StepBox data={step} key={step.title + index} index={StepData.length - index + 1} /></div>)}
                    {StepData && StepData.map((step, index) => <div className="d-lg-none col-md-6 col-lg-4 mb-5"><StepBox data={step} key={step.description + index} index={index + 2} /></div>)}
                </div>
            </div>
        </div>
    )
}

export default AdmissionOverview