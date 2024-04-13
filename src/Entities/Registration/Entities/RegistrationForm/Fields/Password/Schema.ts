import { z } from 'zod';
import { PASSWORD_REQUIREMENTS } from './Requirements';

export const PasswordSchema = z.string().min(PASSWORD_REQUIREMENTS.minLength).max(PASSWORD_REQUIREMENTS.maxLength);

export type IPassword = z.infer<typeof PasswordSchema>;
