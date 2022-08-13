import React, { useContext, useEffect } from 'react'
import { Outlet, Navigate } from "react-router";
import { AuthContext } from '../utils/ContextAPI/AuthContext';

const PublicRoute = ({ restricted }) => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])
    const { user, navHeight } = useContext(AuthContext);
    return (user && restricted) ? <Navigate to='/' /> : <div className='pb-5' style={{ marginTop: navHeight }}>
        <Outlet />
    </div>
}

export default PublicRoute