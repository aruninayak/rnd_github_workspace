import React, { useState } from 'react';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('photos');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div className="tabs">
                <button 
                    className={activeTab === 'photos' ? 'active' : ''} 
                    onClick={() => handleTabClick('photos')}
                >
                    Photos
                </button>
                <button 
                    className={activeTab === 'videos' ? 'active' : ''} 
                    onClick={() => handleTabClick('videos')}
                >
                    Videos
                </button>
                <button 
                    className={activeTab === 'folders' ? 'active' : ''} 
                    onClick={() => handleTabClick('folders')}
                >
                    Folders
                </button>
            </div>
            <div className="tab-content">
                {activeTab === 'photos' && <div>Photo Grid Component</div>}
                {activeTab === 'videos' && <div>Video Grid Component</div>}
                {activeTab === 'folders' && <div>Folder List Component</div>}
            </div>
        </div>
    );
};

export default Tabs;