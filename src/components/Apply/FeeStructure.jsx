import { Table } from 'react-bootstrap'
import AdmissionContainer from './AdmissionContainer'

const FeeStructure = () => {
    return (<>
        <AdmissionContainer path={['admission','fee structure']}>
            <div className="fee-container text-light mt-1">
                <div className='py-3'>
                    <div className='container'>
                        <h1 className='text-uppercase letter-spacing-1 mt-5 mt-md-0'><span className='display-2 fw-bold'>Fee</span><br /><span className='display-3'>Structure</span></h1>
                        <div className='overflow-auto scrollbar-v1 mb-5 p-pt-10'>
                            <Table bordered className='text-center border-dark '>
                                <thead className='text-light'>
                                    <tr>
                                        <th>CLASS</th>
                                        <th>ADMISSION FEE</th>
                                        <th>ANNUAL FEE</th>
                                        <th>REGISTRATION FEE</th>
                                        <th>TUITION FEE</th>
                                        <th>TRANSPORT FEE</th>
                                        <th>OPTIONAL CHARGES</th>
                                    </tr>
                                </thead>
                                <tbody className='text-dark bg-light'>
                                    <tr>
                                        <td>FREQUENCY</td>
                                        <td>ONE TIME</td>
                                        <td>ANNUAL</td>
                                        <td>ONE TIME</td>
                                        <td>MONTHLY</td>
                                        <td>MONTHLY</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>PRE NURSURY</td>
                                        <td>&#8377;5,000</td>
                                        <td>&#8377;7,000</td>
                                        <td>&#8377;1,000</td>
                                        <td>&#8377;1,400</td>
                                        <td rowSpan='12'>
                                            &#8377;800 (0-3km)<br /><br />
                                            &#8377;1,000 (3-5km)<br /><br />
                                            {/* &#8377;2,000 (5-10km)<br /> */}
                                        </td>
                                        <td rowSpan='12'>
                                            Swimming &#8377;650 per month<br /><br />
                                            Indoor Badminton &#8377;650 per month
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>NURSURY</td>
                                        <td>&#8377;5,000</td>
                                        <td>&#8377;7,000</td>
                                        <td>&#8377;1,000</td>
                                        <td>&#8377;1,500</td>
                                    </tr>
                                    <tr>
                                        <td>LKG</td>
                                        <td>&#8377;6,000</td>
                                        <td>&#8377;7,000</td>
                                        <td>&#8377;1,000</td>
                                        <td>&#8377;1,600</td>
                                    </tr>
                                    <tr>
                                        <td>UKG</td>
                                        <td>&#8377;6,000</td>
                                        <td>&#8377;7,000</td>
                                        <td>&#8377;1,000</td>
                                        <td>&#8377;1,700</td>
                                    </tr>
                                    <tr>
                                        <td>I</td>
                                        <td>&#8377;7,000</td>
                                        <td>&#8377;10,000</td>
                                        <td>&#8377;1,000</td>
                                        <td>&#8377;2,200</td>
                                    </tr>
                                    <tr>
                                        <td>II</td>
                                        <td>&#8377;7,000</td>
                                        <td>&#8377;10,000</td>
                                        <td>&#8377;1,000</td>
                                        <td>&#8377;2,300</td>
                                    </tr>
                                    <tr>
                                        <td>III</td>
                                        <td>&#8377;7,000</td>
                                        <td>&#8377;10,000</td>
                                        <td>&#8377;1,000</td>
                                        <td>&#8377;2,400</td>
                                    </tr>
                                    <tr>
                                        <td>IV</td>
                                        <td>&#8377;7,000</td>
                                        <td>&#8377;10,000</td>
                                        <td>&#8377;1,000</td>
                                        <td>&#8377;2,500</td>
                                    </tr>
                                    <tr>
                                        <td>V</td>
                                        <td>&#8377;7,000</td>
                                        <td>&#8377;10,000</td>
                                        <td>&#8377;1,000</td>
                                        <td>&#8377;2,600</td>
                                    </tr>
                                    <tr>
                                        <td>VI</td>
                                        <td>&#8377;7,000</td>
                                        <td>&#8377;10,000</td>
                                        <td>&#8377;1,000</td>
                                        <td>&#8377;2,700</td>
                                    </tr>
                                    <tr>
                                        <td>VII</td>
                                        <td>&#8377;7,000</td>
                                        <td>&#8377;10,000</td>
                                        <td>&#8377;1,000</td>
                                        <td>&#8377;2,800</td>
                                    </tr>
                                    <tr>
                                        <td>VIII</td>
                                        <td>&#8377;7,000</td>
                                        <td>&#8377;10,000</td>
                                        <td>&#8377;1,000</td>
                                        <td>&#8377;2,900</td>
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
