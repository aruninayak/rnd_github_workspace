import React, { useContext } from 'react';
import { MediaContext } from '../../context/MediaContext';

const FolderList: React.FC = () => {
    const { folders } = useContext(MediaContext);

    return (
        <div className="folder-list">
            <h2>Your Folders</h2>
            <ul>
                {folders.map((folder) => (
                    <li key={folder.id}>
                        <h3>{folder.name}</h3>
                        <p>{folder.mediaCount} items</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FolderList;