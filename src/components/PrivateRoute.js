import React, { useContext } from 'react'
import { Outlet, Navigate } from "react-router";
import { AuthContext } from '../utils/ContextAPI/AuthContext';

const PrivateRoute = () => {
    const { user } = useContext(AuthContext);
    return user ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute