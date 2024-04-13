import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Registration } from 'Entities/Registration';

export function RegistrationPage (): JSX.Element {
    return (
        <Routes>
            <Route element={ <Registration /> } index />
        </Routes>
    );
}
