/**
 * 
 * const data: TransformerUser = {
        name: "",
        email: "",
        age: null,
        phone: "",
        active: null
    };
 */

import {z} from 'zod';
import {ValidationError} from '../types/user';

export const UserSchema = z.object({
    name: z.string().min(1),
    email: z.email(),
    age: z.number().int().positive().nullable(),
    phone: z.string().optional(),
    active: z.boolean()
})

export function validateUser(user: any){
    const userValidated = UserSchema.safeParse(user);
    if(userValidated.success === false){
    
      throw new ValidationError("Validation failed", {cause: userValidated.error.issues});
    }

    return userValidated.data;
}