import { Table } from 'react-bootstrap'
import AdmissionContainer from './AdmissionContainer'

const FeeStructure = () => {
    return (<>
        <AdmissionContainer path={['admission','fee structure']}>
            <div className="fee-container text-light mt-1">
                <div className='py-3'>
                    <div className='container'>
                        <h1 className='text-uppercase letter-spacing-1 mt-5 mt-md-0'><span className='display-2 fw-bold'>Fee</span><br /><span className='display-3'>Structure</span><br /><span className='display-4'>2024-25</span></h1>
                        <div className='overflow-auto scrollbar-v1 mb-5 p-pt-5'>
                            <Table bordered className='text-center border-dark '>
                                <thead className='text-light'>
                                    <tr style={{ verticalAlign: "middle" }}>
                                        <th>CLASS</th>
                                        <th>ADMISSION FEE</th>
                                        <th>ANNUAL FEE</th>
                                        {/* <th>ADMINISTRATIVE FEE</th> */}
                                        <th>TUITION FEE</th>
                                        <th>TRANSPORT FEE<br/>(OPTIONAL)</th>
                                        <th>OPTIONAL CHARGES</th>
                                    </tr>
                                </thead>
                                <tbody className='text-dark bg-light'>
                                    <tr style={{ fontWeight: "bold" }}>
                                        <td>FREQUENCY</td>
                                        <td>ONE TIME</td>
                                        <td>ANNUAL</td>
                                        {/* <td>ANNUAL</td> */}
                                        <td>MONTHLY</td>
                                        <td>MONTHLY</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>NURSERY</td>
                                        <td>&#8377;3,000</td>
                                        <td>&#8377;7,700</td>
                                        {/* <td>&#8377;1,000</td> */}
                                        <td>&#8377;1,540</td>
                                        <td rowSpan='12'>
                                            &#8377;1,000 (0-3km)<br /><br />
                                            &#8377;1,500 (3-5km)<br /><br />
                                            &#8377;2,000 (5-10km)<br />
                                        </td>
                                        <td rowSpan='12'>
                                            Swimming &#8377;650 per month<br /><br />
                                            Indoor Badminton &#8377;650 per month
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>LKG</td>
                                        <td>&#8377;3,000</td>
                                        <td>&#8377;7,700</td>
                                        {/* <td>&#8377;1,000</td> */}
                                        <td>&#8377;1,650</td>
                                    </tr>
                                    <tr>
                                        <td>UKG</td>
                                        <td>&#8377;3,000</td>
                                        <td>&#8377;7,700</td>
                                        {/* <td>&#8377;1,000</td> */}
                                        <td>&#8377;1,760</td>
                                    </tr>
                                    <tr>
                                        <td>I</td>
                                        <td>&#8377;3,000</td>
                                        <td>&#8377;11,000</td>
                                        {/* <td>&#8377;1,000</td> */}
                                        <td>&#8377;2,420</td>
                                    </tr>
                                    <tr>
                                        <td>II</td>
                                        <td>&#8377;3,000</td>
                                        <td>&#8377;11,000</td>
                                        {/* <td>&#8377;1,000</td> */}
                                        <td>&#8377;2,530</td>
                                    </tr>
                                    <tr>
                                        <td>III</td>
                                        <td>&#8377;3,000</td>
                                        <td>&#8377;11,000</td>
                                        {/* <td>&#8377;1,000</td> */}
                                        <td>&#8377;2,640</td>
                                    </tr>
                                    <tr>
                                        <td>IV</td>
                                        <td>&#8377;3,000</td>
                                        <td>&#8377;11,000</td>
                                        {/* <td>&#8377;1,000</td> */}
                                        <td>&#8377;2,750</td>
                                    </tr>
                                    <tr>
                                        <td>V</td>
                                        <td>&#8377;3,000</td>
                                        <td>&#8377;11,000</td>
                                        {/* <td>&#8377;1,000</td> */}
                                        <td>&#8377;2,860</td>
                                    </tr>
                                    <tr>
                                        <td>VI</td>
                                        <td>&#8377;3,000</td>
                                        <td>&#8377;11,000</td>
                                        {/* <td>&#8377;2,000</td> */}
                                        <td>&#8377;2,960</td>
                                    </tr>
                                    <tr>
                                        <td>VII</td>
                                        <td>&#8377;3,000</td>
                                        <td>&#8377;11,000</td>
                                        {/* <td>&#8377;2,000</td> */}
                                        <td>&#8377;3,080</td>
                                    </tr>
                                    <tr>
                                        <td>VIII</td>
                                        <td>&#8377;3,000</td>
                                        <td>&#8377;11,000</td>
                                        {/* <td>&#8377;2,000</td> */}
                                        <td>&#8377;3,190</td>
                                    </tr>
                                    <tr>
                                        <td>IX</td>
                                        <td>&#8377;3,000</td>
                                        <td>&#8377;13,000</td>
                                        {/* <td>&#8377;2,000</td> */}
                                        <td>&#8377;3,300</td>
                                    </tr>
                                    <tr style={{ fontWeight: "bold" }}>
                                        <td>PAYMENT</td>
                                        <td>APRIL</td>
                                        <td>APRIL</td>
                                        {/* <td>APRIL</td> */}
                                        <td colSpan='2'>TO BE PAID AT THE<br/>STARTING OF THE<br/>QUARTER<br/>(APR, JULY, OCT, JAN)</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                            <b>*25% DISCOUNT ON ANNUAL AND TUITION FEE OF YOUNGER SIBLING (TILL THE TIME BOTH SIBLINGS ARE IN SCHOOL)</b>
                            <br/>
                            <b>**10% FEE HIKE ONCE IN EVERY 3 YEARS AS PER THE RULES</b>
                        </div>
                    </div>
                </div>
            </div>
        </AdmissionContainer>
    </>
    )
}

export default FeeStructure
