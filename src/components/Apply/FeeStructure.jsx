import './apply.css'
import { useContext } from 'react'
import { AuthContext } from '../../utils/ContextAPI/AuthContext'
import { Table } from 'react-bootstrap'

const FeeStructure = () => {
    const { navHeight } = useContext(AuthContext)
    return (
        <div className="fee-container text-light">
            <div className='container' style={{ paddingTop: navHeight }}>
                <div className='py-3'>
                    <h1 className='text-uppercase letter-spacing-1'><span className='display-2 fw-bold'>Fee</span><br /><span className='display-3'>Structure</span></h1>
                    <div className='overflow-auto scrollbar-v1'>
                        <Table bordered className='text-center border-dark'>
                            <thead className='text-light'>
                                <tr>
                                    <th>CLASS</th>
                                    <th>ADMISSION FEE</th>
                                    <th>ANNUAL FEE</th>
                                    <th>ADMINISTRATIVE FEE</th>
                                    <th>TUTION FEE</th>
                                    <th>TRANSPORT FEE</th>
                                    <th>OPTIONAL CHARGES</th>
                                </tr>
                            </thead>
                            <tbody className='text-dark bg-light'>
                                <tr>
                                    <td>FREQUENCY</td>
                                    <td>ONE TIME</td>
                                    <td>ANNUAL</td>
                                    <td>ANNUAL</td>
                                    <td>MONTHLY</td>
                                    <td>MONTHLY</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>PAYMENT</td>
                                    <td>APRIL</td>
                                    <td>APRIL</td>
                                    <td>APRIL</td>
                                    <td>QUARTERLY<br />(APR, JULY, OCT, JAN)</td>
                                    <td>QUARTERLY<br />(APR, JULY, OCT, JAN)</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>PRE NURSURY</td>
                                    <td>&#8377;5000</td>
                                    <td>&#8377;4000</td>
                                    <td>&#8377;1000</td>
                                    <td>&#8377;2500</td>
                                    <td rowSpan='7'>
                                        &#8377;1000 (0-3km)<br /><br />
                                        &#8377;1500 (3-5km)<br /><br />
                                        &#8377;2000 (5-10km)<br />
                                    </td>
                                    <td rowSpan='7'>
                                        Swimming &#8377;650 per month<br /><br />
                                        Indoor Badminton &#8377;650 per month
                                    </td>
                                </tr>
                                <tr>
                                    <td>NURSURY</td>
                                    <td>&#8377;5000</td>
                                    <td>&#8377;4000</td>
                                    <td>&#8377;1000</td>
                                    <td>&#8377;2500</td>
                                </tr>
                                <tr>
                                    <td>LKG</td>
                                    <td>&#8377;6000</td>
                                    <td>&#8377;5000</td>
                                    <td>&#8377;1000</td>
                                    <td>&#8377;2700</td>
                                </tr>
                                <tr>
                                    <td>UKG</td>
                                    <td>&#8377;6000</td>
                                    <td>&#8377;5000</td>
                                    <td>&#8377;1000</td>
                                    <td>&#8377;2700</td>
                                </tr>
                                <tr>
                                    <td>FIRST</td>
                                    <td>&#8377;7000</td>
                                    <td>&#8377;7000</td>
                                    <td>&#8377;1000</td>
                                    <td>&#8377;3200</td>
                                </tr>
                                <tr>
                                    <td>SECOND</td>
                                    <td>&#8377;7000</td>
                                    <td>&#8377;7000</td>
                                    <td>&#8377;1000</td>
                                    <td>&#8377;3200</td>
                                </tr>
                                <tr>
                                    <td>THIRD</td>
                                    <td>&#8377;7000</td>
                                    <td>&#8377;7000</td>
                                    <td>&#8377;1000</td>
                                    <td>&#8377;3200</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeeStructure