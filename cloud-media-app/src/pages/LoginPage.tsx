import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import OAuthButtons from '../components/auth/OAuthButtons';

const LoginPage: React.FC = () => {
    return (
        <div className="login-page">
            <h1>Login</h1>
            <LoginForm />
            <OAuthButtons />
        </div>
    );
};

export default LoginPage;