import { cdnURL } from "../../utils/constants"

const Instructions = () => {
    return (
        <div className="pt-5 instructions-section">
            <div className="d-flex">
                <div className="py-4 px-2 px-md-4">
                    <h2 className="text-pantheon-blue fw-bold">The following documents need to be submitted along with the Registration Form:</h2>
                    {/* <p className=" mb-4" style={{ lineHeight: '1.1rem'}}> */}
                    <ul className="py-4">
                        <li>Copy of the <b>Birth Certificate</b>.</li> 
                        <li>Copy of <b>Report Card</b> of previous year. (Only Needed For Admission In Class 1 And Onwards)</li>
                        <li>Evidence of graduation from the previous class.</li> 
                        <li>4 photographs of student and parents.</li> 
                        <li><b>Original TC</b> from the previous school (for students seeking admission from class 2 onwards)</li>
                        <li><b>Proof of Residence.</b></li>
                        <li>Original Certificates may be produced at the time of admission for verification.</li>
                        <li>The Admission documentation booklet must also be completed and duly signed by both Parents. It contains information which will assist you in your relationship with the School.</li>
                    </ul>
                    <p className="mb-0 fw-bold text-pantheon-blue h5">Acceptance of Admission:</p>
                    <ul type='1' className="pt-4">
                        <li>Students are admitted on First Come, First Served basis depending on vacancies.</li>
                        <li>We conduct written tests and interviews with the child.</li>
                        <li>Selected candidates will be required to make the fee payment within 7 days of
                            declaration of the results.</li>
                        <li>The school reserves the right to admissions. In all matters pertaining to admission, the
                            decision of the Admission Committee will be final.</li>
                        <li>Once the Fee and documents are submitted, you will receive an Admission Confirmation
                            Letter through courier or E-mail, from the school. This will inform you about further
                            formalities, to be completed, if any.</li>
                        <li>Parents will be intimated of the date and time of uniform & textbook issue</li>
                        <li>Your ward will be allotted the section on the day of admission.</li>
                        <li>The time table for your ward will be handed over to your ward by the Class Teacher.</li>
                        <li>Kindly inform the School of your joining date. This is mandatory because Staff needs to be
                            informed to expect your child on a particular day and they in turn need to make preparations accordingly.</li>
                        <li>Teachers will assist your child with the syllabi which has been covered in the class till date.</li>
                    </ul>
                </div>
                <div id='instruction-img' className="d-none d-md-block">
                    <img src={cdnURL + '/Images/InstructionImg.png'} />
                </div>
            </div>
        </div>
    )
}

export default Instructions