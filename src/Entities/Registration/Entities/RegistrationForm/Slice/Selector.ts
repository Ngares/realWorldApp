import type { RootState } from 'Bootstrap/Store/Models';
import type { ERegistrationKey } from 'Entities/Registration/Enums';
import type { IRegistrationForm } from '../Schema';

export function formDataSelector (state: RootState): IRegistrationForm {
    return state.register.formData;
}

export function formErrorsSelector (state: RootState): Record<ERegistrationKey, string[]> {
    return state.register.formErrors;
}
