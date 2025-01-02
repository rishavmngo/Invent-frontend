import { z } from "zod";

const checkForNaN = (val: string) => {
  return !isNaN(Number(val));
};

export const AddFormSchema = z.object({
  name: z.string().min(2),
  sell_price: z
    .string()
    .default("")
    .refine(checkForNaN, { message: "Invalid price" }),
  purchase_price: z
    .string()
    .default("")
    .refine(checkForNaN, { message: "Invalid price" }),
  opening_stock: z
    .string()
    .default("")
    .refine(checkForNaN, { message: "Invalid quantity" }),
  price_per_unit: z
    .string()
    .default("")
    .refine(checkForNaN, { message: "Invalid price" }),
  min_quantity: z
    .string()
    .default("")
    .refine(checkForNaN, { message: "Invalid quantity" }),
});

export type FormFields = z.infer<typeof AddFormSchema>;
