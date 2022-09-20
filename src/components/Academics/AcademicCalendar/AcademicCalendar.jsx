import CoverContainer from '../../CoverContainer'
import { cdnURL } from '../../../utils/constants'

import './acadmicCalendar.css'
const AcademicCalendar = () => {
    return (
        <CoverContainer path={['academics', 'academic calendar']} _title='ACADEMICS'>
            <div className='__academic-calendar-container pt-3 pt-sm-0'>
                {['AC_001', 'AC_002', 'AC_003', 'AC_004', 'AC_005', 'AC_006', 'AC_007', 'AC_008', 'AC_009', 'AC_010', 'AC_011', 'AC_012', 'AC_013'].map((img, idx) => <img src={cdnURL + `/Images/AcademicCalendar/${img}.jpg`} key={img + idx} className='img-fluid' alt=''/>)}
            </div>
        </CoverContainer>
    )
}

export default AcademicCalendar