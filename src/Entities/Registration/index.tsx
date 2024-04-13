import React from 'react';
import { FormLayout } from 'Bootstrap/Application/Layouts/FormLayout';
import { RegistrationForm } from './Entities/RegistrationForm';

export function Registration (): JSX.Element {
    return (
        <FormLayout>
            <RegistrationForm />
        </FormLayout>
    );
}
