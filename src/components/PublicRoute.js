import React, { useContext } from 'react'
import { Outlet, Navigate } from "react-router";
import { AuthContext } from '../utils/ContextAPI/AuthContext';

const PublicRoute = ({ restricted }) => {
    const { user, navHeight } = useContext(AuthContext);
    return (user && restricted) ? <Navigate to='/' /> : <div className='pb-5' style={{ marginTop: navHeight }}>
        <Outlet />
    </div>
}

export default PublicRoute