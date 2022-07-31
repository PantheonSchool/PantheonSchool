import React, { useContext } from 'react'
import { Outlet, Navigate } from "react-router";
import { AuthContext } from '../utils/ContextAPI/AuthContext';

const PrivateRoute = () => {
    const { user, navHeight } = useContext(AuthContext);
    return user ? <div className='container pb-5' style={{ marginTop: navHeight + 50 }}>
        <Outlet />
    </div> : <Navigate to='/login' />
}

export default PrivateRoute