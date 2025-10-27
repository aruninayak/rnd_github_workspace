import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchMedia, uploadMedia } from '../api/media';

const MediaContext = createContext();

export const MediaProvider = ({ children }) => {
    const [mediaItems, setMediaItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadMedia = async () => {
            try {
                const media = await fetchMedia();
                setMediaItems(media);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadMedia();
    }, []);

    const addMedia = async (newMedia) => {
        setLoading(true);
        try {
            const uploadedMedia = await uploadMedia(newMedia);
            setMediaItems((prevItems) => [...prevItems, uploadedMedia]);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <MediaContext.Provider value={{ mediaItems, loading, error, addMedia }}>
            {children}
        </MediaContext.Provider>
    );
};

export const useMedia = () => {
    return useContext(MediaContext);
};