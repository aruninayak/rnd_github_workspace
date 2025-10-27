import React, { useContext } from 'react';
import { MediaContext } from '../../context/MediaContext';
import MediaItem from '../media/MediaItem';
import './VideoGrid.css';

const VideoGrid: React.FC = () => {
    const { videos } = useContext(MediaContext);

    return (
        <div className="video-grid">
            {videos.length === 0 ? (
                <p>No videos available.</p>
            ) : (
                videos.map(video => (
                    <MediaItem key={video.id} media={video} />
                ))
            )}
        </div>
    );
};

export default VideoGrid;