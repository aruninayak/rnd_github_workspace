import React from 'react';

const SyncStatus: React.FC<{ isSyncing: boolean; progress: number }> = ({ isSyncing, progress }) => {
    return (
        <div className="sync-status">
            {isSyncing ? (
                <div>
                    <p>Syncing in progress...</p>
                    <progress value={progress} max={100} />
                </div>
            ) : (
                <p>All media is up to date.</p>
            )}
        </div>
    );
};

export default SyncStatus;