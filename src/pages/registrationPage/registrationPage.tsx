import React, { type ChangeEvent, useState, type MouseEventHandler } from 'react';
import type { z } from 'zod';
import type { IUserInfo } from 'features/registration/model/models';
import { registerUser } from 'features/registration/model/slice/actions';
import { useAppDispatch } from 'shared/hooks/redux';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { registrationForm } from './model/models';
import styles from './registrationForm.module.scss';

export function RegistrationPage (): JSX.Element {
    const dispatch = useAppDispatch();

    const [userData, setUserData] = useState<IUserInfo>({
        username: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState<z.inferFlattenedErrors<typeof registrationForm>>({
        formErrors: [],
        fieldErrors: {},
    });

    const [isDisabled, setIsDisabled] = useState(true);

    const handleValidationCheck = (): void => {
        const validationResult = registrationForm.safeParse(userData);

        if (validationResult.success) {
            setErrors({
                formErrors: [],
                fieldErrors: {},
            });
            setIsDisabled(false);
        } else {
            setErrors(validationResult.error.flatten());
            setIsDisabled(true);
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>):void => {
        const { name, value } = e.target;

        setUserData({
            ...userData, [name]: value,
        });
    };

    const handleSubmit: MouseEventHandler = (e):void => {
        e.preventDefault();

        dispatch(registerUser(userData));
    };

    return (
        <div className={ styles.container }>
            <form className={ styles.form }>
                <h2 className={ styles.title }>Регистрация нового пользователя</h2>
                <Input
                    className={ styles.input }
                    error={ errors.fieldErrors.username }
                    name="username"
                    onBlur={ handleValidationCheck }
                    onChange={ handleInputChange }
                    placeholder="Логин"
                    type="text"
                    value={ userData.username }
                />
                <Input
                    className={ styles.input }
                    error={ errors.fieldErrors.email }
                    name="email"
                    onBlur={ handleValidationCheck }
                    onChange={ handleInputChange }
                    placeholder="Электронная почта"
                    type="email"
                    value={ userData.email }
                />
                <Input
                    className={ styles.input }
                    error={ errors.fieldErrors.password }
                    name="password"
                    onBlur={ handleValidationCheck }
                    onChange={ handleInputChange }
                    placeholder="Пароль"
                    type="password"
                    value={ userData.password }
                />
                <Button
                    className={ styles.button }
                    disabled={ isDisabled }
                    onClick={ handleSubmit }
                    type="submit"
                >
                    Зарегистрироваться
                </Button>
            </form>
        </div>
    );
}
