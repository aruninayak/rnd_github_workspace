import React from 'react';

const UploadButton: React.FC = () => {
    const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            // Handle file upload logic here
            console.log('Files to upload:', files);
        }
    };

    return (
        <div>
            <input
                type="file"
                multiple
                onChange={handleUpload}
                style={{ display: 'none' }}
                id="upload-button"
            />
            <label htmlFor="upload-button" style={{ cursor: 'pointer', padding: '10px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px' }}>
                Upload Media
            </label>
        </div>
    );
};

export default UploadButton;