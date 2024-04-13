import { z } from 'zod';
import { USERNAME_REQUIREMENTS } from './Requirements';

export const UsernameSchema = z.string().min(USERNAME_REQUIREMENTS.minLength).max(USERNAME_REQUIREMENTS.maxLength);

export type IUsername = z.infer<typeof UsernameSchema>;
