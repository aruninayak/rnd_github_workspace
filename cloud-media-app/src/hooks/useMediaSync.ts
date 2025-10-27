import { useEffect, useState } from 'react';
import { uploadMedia, fetchMedia } from '../api/media';

const useMediaSync = () => {
    const [mediaItems, setMediaItems] = useState([]);
    const [syncStatus, setSyncStatus] = useState('idle');

    const syncMedia = async (mediaFiles) => {
        setSyncStatus('syncing');
        try {
            await Promise.all(mediaFiles.map(file => uploadMedia(file)));
            setSyncStatus('success');
            fetchMediaItems();
        } catch (error) {
            console.error('Error syncing media:', error);
            setSyncStatus('error');
        }
    };

    const fetchMediaItems = async () => {
        try {
            const items = await fetchMedia();
            setMediaItems(items);
        } catch (error) {
            console.error('Error fetching media:', error);
        }
    };

    useEffect(() => {
        fetchMediaItems();
    }, []);

    return { mediaItems, syncStatus, syncMedia };
};

export default useMediaSync;