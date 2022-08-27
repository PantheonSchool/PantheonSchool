import Cover from './Cover'
import navList from './Navbar/navList'
import { useState, useEffect } from 'react'

const AdmissionContainer = ({ children, path, _title, classN, CoverImg }) => {
    const [navData, setNavData] = useState()

    useEffect(() => {
        const data = navList.find(({ title }) => title === _title)
        setNavData(data)
    }, [])
    return (
        <>
            <Cover classN={classN} backgroundImg={CoverImg} navData={navData} path={path} />
            {children}
        </>
    )
}

export default AdmissionContainer