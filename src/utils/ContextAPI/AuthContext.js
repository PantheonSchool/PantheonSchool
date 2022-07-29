import { useState, useEffect, createContext, useRef } from 'react';
import APICall from '../ApiCall';

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(false);
    const navHeight = useRef()

    useEffect(() => {
        const VerifyAuth = async () => {
            const data = await APICall('/api/admin/auth', 'GET');
            if (data.status) setUser(true);
            else setUser(false)
        }

        if (localStorage.pantheon_token != null) {
            setUser(true);
            VerifyAuth();
        }
    }, [])

    return <AuthContext.Provider value={{ user, setUser, navHeight }}>
        {children}
    </AuthContext.Provider>
}