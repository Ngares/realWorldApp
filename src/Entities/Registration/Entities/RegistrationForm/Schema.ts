import { z } from 'zod';
import { ERegistrationKey } from 'Entities/Registration/Enums';
import { EmailSchema } from './Fields/Email/Schema';
import { PasswordSchema } from './Fields/Password/Schema';
import { UsernameSchema } from './Fields/Username/Schema';

export const RegistrationFormSchema = z.object({
    [ERegistrationKey.USERNAME]: UsernameSchema,
    [ERegistrationKey.EMAIL]: EmailSchema,
    [ERegistrationKey.PASSWORD]: PasswordSchema,
});

export type IRegistrationForm = z.infer<typeof RegistrationFormSchema>;
