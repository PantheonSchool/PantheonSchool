import { cdnURL } from "../../utils/constants"

const Instructions = () => {
    return (
        <div className="pt-5">
            <div className="d-flex">
                <div className="py-4 px-2 px-md-4">
                    <h2 className="text-pantheon-blue fw-bold">The following documents need to be submitted along with the Registration Form</h2>
                    <p className="fw-bold mb-4" style={{ lineHeight: '1.1rem' }}>
                        Copy of the Birth Certificate <br />
                        Copy of Report Card of previous year (only needed for admission to class 1 onwards) <br />
                        List of documents required at the time of admission. <br />
                        Evidence of having graduated from the previous class. <br />
                        4 photographs student 2 parents photographs <br />
                    </p>
                    <ul>
                        <li>Original TC from the previous school (for students seeking admission from class 2 onwards)</li>
                        <li>Proof of residence</li>
                        <li>Original Certificates may be produced at the time of admission for verification</li>
                        <li>The Admission documentation booklet must also be completed and duly signed by both Parents. It contains information which will assist you in your relationship with the School.</li>
                    </ul>
                    <p className="mb-0 fw-bold text-pantheon-blue">Acceptance of Admission:</p>
                    <ol type='1'>
                        <li>Students are admitted on First Come, First Served basis depending on vacancies</li>
                        <li>We conduct noformal interviews with the child or the parent.</li>
                        <li>Selected candidates will be required to make the fee payment within 7 days of the
                            declaration of the result.</li>
                        <li>The school reserves the right to admissions. In all matters pertaining to admission, the
                            decision of the Admission Committee will be final. <br />
                            Once the Fee and documents are submitted, you will receive an Admission Confirmation
                            Letter through courier or E-mail, from the school. This will inform you about further
                            formalities, to be completed, if any. <br />
                            Parents will be intimated of the date and time of uniform &textbookiissue
                            Your ward will be allotted the section on the day of admission. The time table for your ward
                            will be handed over toyourward by the Class Teacher. <br />
                            Kindly inform the School of your joining date. This is mandatory because Staff need to be
                            informed to expect your child on a particular day and they in tum need to make
                            preparations accordingly. <br />
                            Teachers will assist your child with the syllabi which has been covered in the class till date.</li>
                    </ol>
                </div>
                <div id='instruction-img' className="d-none d-md-block">
                    <img src={cdnURL + '/Images/InstructionImage.png'} />
                </div>
            </div>
        </div>
    )
}

export default Instructions