import forEach from 'lodash/forEach';
import React from 'react';
import { useAppDispatch, useAppSelector } from 'Bootstrap/Store/Hooks';
import { Button } from 'Common/ui-kit/Button';
import { Form } from 'Common/ui-kit/Form';
import { Title } from 'Common/ui-kit/Title';
import { isRegistrationKey } from 'Entities/Registration/Utils';
import { Email } from './Fields/Email';
import { Password } from './Fields/Password';
import { Username } from './Fields/Username';
import { RegistrationFormSchema } from './Schema';
import { registerUser, setInputErrors } from './Slice/Actions';
import { formDataSelector } from './Slice/Selector';

export function RegistrationForm (): JSX.Element {
    const dispatch = useAppDispatch();
    const formData = useAppSelector(formDataSelector);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const validationResult = RegistrationFormSchema.safeParse(formData);

        if (validationResult.success) {
            dispatch(registerUser(formData));
        } else {
            const errors = validationResult.error.flatten().fieldErrors;

            forEach(errors, (validationErrors, key): void => {
                validationErrors && isRegistrationKey(key) && dispatch(setInputErrors(key, validationErrors));
            });
        }
    };

    return (
        <Form onSubmit={ handleSubmit }>
            <Title tag="h2">Пожалуйста зарегистрируйтесь</Title>

            <Username />

            <Email />

            <Password />

            <Button type="submit">Зарегистрироваться</Button>
        </Form>
    );
}
