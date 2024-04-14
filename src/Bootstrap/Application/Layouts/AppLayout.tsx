import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { getPath } from 'Bootstrap/Application/Utils';
import { RegistrationPage } from 'Entities/Registration/Pages/RegistrationPage';
import { REGISTRATION_PAGE_PATH } from 'Entities/Registration/Pages/RegistrationPage/Path';

export function AppLayout (): JSX.Element {
    return (
        <Routes>
            <Route element={ <div>index</div> } index />

            <Route element={ <RegistrationPage /> } path={ getPath(REGISTRATION_PAGE_PATH) } />
        </Routes>
    );
}
