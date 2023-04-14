import { Table } from 'react-bootstrap'
import AdmissionContainer from './AdmissionContainer'

const FeeStructure = () => {
    return (<>
        <AdmissionContainer path={['admission','fee structure']}>
            <div className="fee-container text-light mt-1">
                <div className='py-3'>
                    <div className='container'>
                        <h1 className='text-uppercase letter-spacing-1 mt-5 mt-md-0'><span className='display-2 fw-bold'>Fee</span><br /><span className='display-3'>Structure</span><br /><span className='display-4'>2023-24</span></h1>
                        <div className='overflow-auto scrollbar-v1 mb-5 p-pt-5'>
                            <Table bordered className='text-center border-dark '>
                                <thead className='text-light'>
                                    <tr style={{ verticalAlign: "middle" }}>
                                        <th>CLASS</th>
                                        <th>ADMISSION FEE</th>
                                        <th>ANNUAL FEE</th>
                                        <th>ADMINISTRATIVE FEE</th>
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
                                        <td>ANNUAL</td>
                                        <td>MONTHLY</td>
                                        <td>MONTHLY</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>PRE NURSURY</td>
                                        <td>&#8377;5,000</td>
                                        <td>&#8377;8,000</td>
                                        <td>&#8377;1,000</td>
                                        <td>&#8377;2,500</td>
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
                                        <td>NURSURY</td>
                                        <td>&#8377;5,000</td>
                                        <td>&#8377;8,000</td>
                                        <td>&#8377;1,000</td>
                                        <td>&#8377;2,600</td>
                                    </tr>
                                    <tr>
                                        <td>LKG</td>
                                        <td>&#8377;6,000</td>
                                        <td>&#8377;8,000</td>
                                        <td>&#8377;1,000</td>
                                        <td>&#8377;2,700</td>
                                    </tr>
                                    <tr>
                                        <td>UKG</td>
                                        <td>&#8377;6,000</td>
                                        <td>&#8377;9,000</td>
                                        <td>&#8377;1,000</td>
                                        <td>&#8377;2,800</td>
                                    </tr>
                                    <tr>
                                        <td>I</td>
                                        <td>&#8377;7,000</td>
                                        <td>&#8377;9,000</td>
                                        <td>&#8377;1,000</td>
                                        <td>&#8377;3,200</td>
                                    </tr>
                                    <tr>
                                        <td>II</td>
                                        <td>&#8377;7,000</td>
                                        <td>&#8377;10,000</td>
                                        <td>&#8377;1,000</td>
                                        <td>&#8377;3,300</td>
                                    </tr>
                                    <tr>
                                        <td>III</td>
                                        <td>&#8377;7,000</td>
                                        <td>&#8377;10,000</td>
                                        <td>&#8377;1,000</td>
                                        <td>&#8377;3,400</td>
                                    </tr>
                                    <tr>
                                        <td>IV</td>
                                        <td>&#8377;7,000</td>
                                        <td>&#8377;10,000</td>
                                        <td>&#8377;1,000</td>
                                        <td>&#8377;3,500</td>
                                    </tr>
                                    <tr>
                                        <td>V</td>
                                        <td>&#8377;7,000</td>
                                        <td>&#8377;10,000</td>
                                        <td>&#8377;1,000</td>
                                        <td>&#8377;3,600</td>
                                    </tr>
                                    <tr>
                                        <td>VI</td>
                                        <td>&#8377;7,000</td>
                                        <td>&#8377;12,000</td>
                                        <td>&#8377;2,000</td>
                                        <td>&#8377;4,100</td>
                                    </tr>
                                    <tr>
                                        <td>VII</td>
                                        <td>&#8377;7,000</td>
                                        <td>&#8377;12,000</td>
                                        <td>&#8377;2,000</td>
                                        <td>&#8377;4,200</td>
                                    </tr>
                                    <tr>
                                        <td>VIII</td>
                                        <td>&#8377;7,000</td>
                                        <td>&#8377;12,000</td>
                                        <td>&#8377;2,000</td>
                                        <td>&#8377;4,300</td>
                                    </tr>
                                    <tr style={{ fontWeight: "bold" }}>
                                        <td>PAYMENT</td>
                                        <td>APRIL</td>
                                        <td>APRIL</td>
                                        <td>APRIL</td>
                                        <td colSpan='2'>TO BE PAID AT THE<br/>STARTING OF THE<br/>QUARTER<br/>(APR, JULY, OCT, JAN)</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                            <b>*25% Discount for Younger Sibling (Not Applicable on transport charges)</b>
                        </div>
                    </div>
                </div>
            </div>
        </AdmissionContainer>
    </>
    )
}

export default FeeStructure
