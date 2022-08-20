import Cover from '../Cover'
import './apply.css'
import navList from '../Navbar/navList'
import { useState, useEffect } from 'react'

const AdmissionContainer = ({ children }) => {
    const [navData, setNavData] = useState()

    useEffect(() => {
        const data = navList.find(({ title }) => title === 'ADMISSION')
        setNavData(data)
    }, [])
    return (
        <>
            <Cover classN='apply-cover' backgroundImg='/Images/applyCoverImg7.jpg' navData={navData} />
            {children}
        </>
    )
}

export default AdmissionContainer