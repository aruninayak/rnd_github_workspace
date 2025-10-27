import React from 'react';
import Tabs from '../components/dashboard/Tabs';
import PhotoGrid from '../components/dashboard/PhotoGrid';
import VideoGrid from '../components/dashboard/VideoGrid';
import FolderList from '../components/dashboard/FolderList';
import { useMedia } from '../context/MediaContext';

const Dashboard: React.FC = () => {
    const { mediaType } = useMedia();

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <Tabs />
            {mediaType === 'photos' && <PhotoGrid />}
            {mediaType === 'videos' && <VideoGrid />}
            {mediaType === 'folders' && <FolderList />}
        </div>
    );
};

export default Dashboard;