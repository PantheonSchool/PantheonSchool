import { useState, useEffect } from 'react';
import ApiCall from '../../../utils/ApiCall';
import FacultyForm from './FacultyForm';
import FacultyCard from './FacultyCard';

import './faculty.css'

const Faculty = () => {
    const [facultyData, setFacultyData] = useState([]);

    const getFacultyData = async () => {
        const data = await ApiCall('/api/faculty', 'GET');
        if (data.status) setFacultyData(data.data)
    }

    useEffect(() => {
        getFacultyData()
    }, [])
    return (
        <>
            <h1 className="text-center fw-bold text-pantheon-blue mb-3">FACULTY SECTION</h1>
            <div className="row">
                <div className="col-12 mb-4">
                    <FacultyForm getFacultyData={getFacultyData} />
                </div>
                <div className="col-12 row __faculty-cards px-0 mx-auto">
                    {facultyData && facultyData.map((faculty, idx) => <FacultyCard faculty={faculty} key={faculty.name + idx} getFacultyData={getFacultyData} />)}
                </div>
            </div>
        </>
    )
}

export default Faculty