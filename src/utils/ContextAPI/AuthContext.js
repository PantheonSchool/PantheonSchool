import { useState, useEffect, createContext } from 'react';
import APICall from '../ApiCall';

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(false);

    useEffect(() => {
        const VerifyAuth = async () => {
            const data = await APICall('/api/admin/auth','GET');
            if(data.status) setUser(true);
            else setUser(false)
        }

        if (localStorage.pantheon_token != null) {
            setUser(true);
            VerifyAuth();
        }
    }, [])

    return <AuthContext.Provider value={{ user, setUser }}>
        {children}
    </AuthContext.Provider>
}