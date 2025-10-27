import React from 'react';
import SignupForm from '../components/auth/SignupForm';

const SignupPage: React.FC = () => {
    return (
        <div className="signup-page">
            <h1>Sign Up</h1>
            <SignupForm />
        </div>
    );
};

export default SignupPage;