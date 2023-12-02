import { object, string, } from 'yup';

export const validationSchemaRegister = object({
    name: string().required().min(6).max(50),
    email: string().email().required(),
    password: string().min(6).required()
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Password must contain at least one digit')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
});