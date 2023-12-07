import { object, string, } from 'yup';

export const validationSchemaBookTrail = object({
    reason: string().required(),
    name:   string().required(),
    email:  string().email().required(),
    phone:  string().required(),
})