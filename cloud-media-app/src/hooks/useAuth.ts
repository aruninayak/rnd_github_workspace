import { useState, useEffect, createContext, useContext } from 'react';
import { loginUser, signupUser, logoutUser } from '../api/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUser = async () => {
            // Logic to check if user is logged in (e.g., check token)
            const currentUser = await getCurrentUser(); // Implement this function
            setUser(currentUser);
            setLoading(false);
        };
        checkUser();
    }, []);

    const login = async (credentials) => {
        const loggedInUser = await loginUser(credentials);
        setUser(loggedInUser);
    };

    const signup = async (userData) => {
        const newUser = await signupUser(userData);
        setUser(newUser);
    };

    const logout = async () => {
        await logoutUser();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};