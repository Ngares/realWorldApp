import { z } from 'zod';

export const EmailSchema = z.string().email();

export type IEmail = z.infer<typeof EmailSchema>;
