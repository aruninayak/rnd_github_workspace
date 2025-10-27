import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getBillingInfo = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/billing/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching billing information');
    }
};

export const updateBillingInfo = async (userId, billingData) => {
    try {
        const response = await axios.put(`${API_URL}/billing/${userId}`, billingData);
        return response.data;
    } catch (error) {
        throw new Error('Error updating billing information');
    }
};

export const subscribeToPro = async (userId, subscriptionData) => {
    try {
        const response = await axios.post(`${API_URL}/billing/subscribe`, { userId, ...subscriptionData });
        return response.data;
    } catch (error) {
        throw new Error('Error subscribing to Pro version');
    }
};

export const cancelSubscription = async (userId) => {
    try {
        const response = await axios.delete(`${API_URL}/billing/cancel/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error canceling subscription');
    }
};