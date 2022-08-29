import CoverContainer from '../../CoverContainer'
import { useState, useEffect } from 'react'
import ApiCall from '../../../utils/ApiCall'
import FacultyCard from './FacultyCard'
import './faculty.css'
import FacultySkeleton from './FacultySkeleton'

const Faculty = () => {
    const [facultyData, setFacultyData] = useState();

    const getFacultyData = async () => {
        const data = await ApiCall('/api/faculty', 'GET');
        if (data.status) setFacultyData(data.data)
    }

    useEffect(() => {
        getFacultyData()
    }, [])

    return (
        <CoverContainer path={['academics', 'faculty']} _title={'ACADEMICS'}>
            <div className='container-fluid pt-5 mt-3'>
                <h1 className='text-uppercase letter-spacing-1 display-3 fw-bold text-pantheon-blue'>Faculty</h1>
                {facultyData && facultyData.map((fac, idx) => <FacultyCard faculty={fac} key={fac.name + idx} />)}
                {!facultyData && <>
                    <FacultySkeleton/>
                    <FacultySkeleton/>
                    <FacultySkeleton/>
                    <FacultySkeleton/>
                </>}
            </div>
        </CoverContainer>
    )
}

export default Faculty