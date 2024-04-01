import { z } from 'zod';
import type { IUserInfo } from 'features/registration/model/models';
import { registrationRequirements } from './consts';

export const registrationForm: z.ZodType<IUserInfo> = z.object({
    username: z
        .string()
        .min(registrationRequirements.usernameLenght.min)
        .max(registrationRequirements.usernameLenght.max),
    email: z
        .string()
        .email(),
    password: z
        .string()
        .min(registrationRequirements.passLenght.min)
        .max(registrationRequirements.passLenght.max),
});
