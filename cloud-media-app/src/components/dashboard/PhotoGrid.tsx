import React, { useContext } from 'react';
import { MediaContext } from '../../context/MediaContext';
import MediaItem from '../media/MediaItem';
import './PhotoGrid.css'; // Assuming you have some styles for the grid

const PhotoGrid: React.FC = () => {
    const { photos } = useContext(MediaContext);

    return (
        <div className="photo-grid">
            {photos.map(photo => (
                <MediaItem key={photo.id} media={photo} />
            ))}
        </div>
    );
};

export default PhotoGrid;