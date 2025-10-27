import React from 'react';

const OAuthButtons: React.FC = () => {
    const handleGoogleLogin = () => {
        // Logic for Google login
    };

    const handleMicrosoftLogin = () => {
        // Logic for Microsoft login
    };

    return (
        <div className="oauth-buttons">
            <button onClick={handleGoogleLogin} className="google-login">
                Login with Google
            </button>
            <button onClick={handleMicrosoftLogin} className="microsoft-login">
                Login with Microsoft
            </button>
        </div>
    );
};

export default OAuthButtons;