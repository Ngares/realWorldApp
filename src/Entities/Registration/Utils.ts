import includes from 'lodash/includes';
import { ERegistrationKey } from 'Entities/Registration/Enums';

export const isRegistrationKey = (key: string): key is ERegistrationKey => {
    return includes(ERegistrationKey, key);
};
