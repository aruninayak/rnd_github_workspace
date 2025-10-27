import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/media';

export const uploadMedia = async (file) => {
    const formData = new FormData();
    formData.append('media', file);

    try {
        const response = await axios.post(`${API_URL}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Error uploading media: ' + error.message);
    }
};

export const fetchMedia = async () => {
    try {
        const response = await axios.get(`${API_URL}/all`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching media: ' + error.message);
    }
};

export const deleteMedia = async (mediaId) => {
    try {
        const response = await axios.delete(`${API_URL}/delete/${mediaId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error deleting media: ' + error.message);
    }
};