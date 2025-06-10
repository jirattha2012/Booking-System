import { z } from "zod";

export const campingSchema = z.object({
    title: z.string().trim().min(2, 'Title must be between 2 and 30 characters').max(30, 'Title must be between 2 and 30 characters'),
    price: z.coerce.number(),
    description: z.string().trim().max(200, 'Description must be less than 200 characters'),
    category: z.string(),
    latitude: z.coerce.number(),
    longitude: z.coerce.number(),
    file: z.any()
})

export const profileSchema = z.object({
    first_name: z.string().trim().min(2, 'Title must be between 2 and 30 characters').max(30, 'Title must be between 2 and 30 characters'),
    last_name: z.string().trim().min(2, 'Title must be between 2 and 30 characters').max(30, 'Title must be between 2 and 30 characters'),
})
