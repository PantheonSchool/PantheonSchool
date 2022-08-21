import Cover from '../Cover'
import './apply.css'
import navList from '../Navbar/navList'
import { useState, useEffect } from 'react'

const AdmissionContainer = ({ children, path }) => {
    const [navData, setNavData] = useState()

    useEffect(() => {
        const data = navList.find(({ title }) => title === 'ADMISSION')
        setNavData(data)
    }, [])
    return (
        <>
            <Cover classN='apply-cover' backgroundImg='/Images/applyCoverImg7.jpg' navData={navData} path={path}/>
            {children}
        </>
    )
}

export default AdmissionContainer