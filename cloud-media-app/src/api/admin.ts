import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/admin';

export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching users');
    }
};

export const deleteUser = async (userId) => {
    try {
        await axios.delete(`${API_URL}/users/${userId}`);
    } catch (error) {
        throw new Error('Error deleting user');
    }
};

export const updateUserRole = async (userId, role) => {
    try {
        const response = await axios.put(`${API_URL}/users/${userId}/role`, { role });
        return response.data;
    } catch (error) {
        throw new Error('Error updating user role');
    }
};