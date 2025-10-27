import React from 'react';

interface MediaItemProps {
    id: string;
    title: string;
    type: 'photo' | 'video';
    thumbnailUrl: string;
    onClick: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({ id, title, type, thumbnailUrl, onClick }) => {
    return (
        <div className="media-item" onClick={() => onClick(id)}>
            <img src={thumbnailUrl} alt={title} className="media-thumbnail" />
            <h3 className="media-title">{title}</h3>
            <p className="media-type">{type}</p>
        </div>
    );
};

export default MediaItem;