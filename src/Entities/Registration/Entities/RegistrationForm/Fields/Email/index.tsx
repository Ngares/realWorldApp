import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'Bootstrap/Store/Hooks';
import { Field } from 'Common/ui-kit/Field';
import { Input } from 'Common/ui-kit/Input';
import { InputError } from 'Common/ui-kit/InputError';
import { ERegistrationKey } from 'Entities/Registration/Enums';
import { EmailSchema } from './Schema';
import { setInputErrors, setInputValue } from '../../Slice/Actions';
import { formErrorsSelector } from '../../Slice/Selector';

export function Email (): JSX.Element {
    const dispatch = useAppDispatch();
    const formErrors = useAppSelector(formErrorsSelector);
    const [value, setValue] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);

        const validationResult = EmailSchema.safeParse(e.target.value);

        if (validationResult.success && !isEmpty(formErrors.email)) {
            dispatch(setInputErrors(ERegistrationKey.EMAIL, []));
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
        dispatch(setInputValue(ERegistrationKey.EMAIL, e.target.value));

        const validationResult = EmailSchema.safeParse(e.target.value);

        if (validationResult.success) {
            dispatch(setInputErrors(ERegistrationKey.EMAIL, []));
        } else {
            const errors = validationResult.error.format();

            if (errors) {
                const { _errors: fieldErrors } = errors;

                dispatch(setInputErrors(ERegistrationKey.EMAIL, fieldErrors));
            }
        }
    };

    const renderInputErrors = (): JSX.Element => {
        return (
            <>
                {map(formErrors.email, (error, index) => <InputError key={ index } error={ error } />)}
            </>
        );
    };

    return (
        <Field
            input={ (
                <Input
                    id={ ERegistrationKey.EMAIL }
                    onBlur={ handleBlur }
                    onChange={ handleChange }
                    value={ value }
                />
            ) }
            inputErrors={ renderInputErrors() }
        />
    );
}
