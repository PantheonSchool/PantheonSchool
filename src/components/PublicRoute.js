import React, { useContext } from 'react'
import { Outlet, Navigate } from "react-router";
import { AuthContext } from '../utils/ContextAPI/AuthContext';

const PublicRoute = ({ restricted }) => {
    const { user } = useContext(AuthContext);
    return (user && restricted) ? <Navigate to='/' /> : <Outlet />
}

export default PublicRoute