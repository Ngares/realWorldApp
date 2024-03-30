import React from 'react';
import './styles/index.scss';
import { RegistrationPage } from 'pages/registrationPage';

export default function App (): JSX.Element {
    return (
        <div className="app">
            <RegistrationPage />
        </div>
    );
}
