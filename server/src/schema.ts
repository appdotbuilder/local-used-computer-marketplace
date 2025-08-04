import { z } from 'zod';

// Enum for computer condition
export const computerConditionEnum = z.enum(['new', 'used', 'for_parts']);
export type ComputerCondition = z.infer<typeof computerConditionEnum>;

// Computer listing schema
export const computerListingSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  condition: computerConditionEnum,
  seller_contact: z.string(),
  created_at: z.coerce.date()
});

export type ComputerListing = z.infer<typeof computerListingSchema>;

// Input schema for creating computer listings
export const createComputerListingInputSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.number().positive('Price must be positive'),
  condition: computerConditionEnum,
  seller_contact: z.string().min(1, 'Seller contact is required')
});

export type CreateComputerListingInput = z.infer<typeof createComputerListingInputSchema>;