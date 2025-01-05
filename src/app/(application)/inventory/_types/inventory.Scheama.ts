// import { z } from "zod";
//
// const checkForNaN = (val: string) => {
//   return !isNaN(Number(val));
// };
//
// export const AddFormSchema = z.object({
//   name: z.string().min(2),
//   sell_price: z
//     .string()
//     .default("")
//     .refine(checkForNaN, { message: "Invalid price" })
//     .transform((val) => (val === "" ? undefined : Number(val)))
//     .optional(),
//   purchase_price: z
//     .string()
//     .default("")
//     .refine(checkForNaN, { message: "Invalid price" })
//     .transform((val) => (val === "" ? undefined : Number(val)))
//     .optional(),
//   opening_stock: z
//     .string()
//     .default("")
//     .refine(checkForNaN, { message: "Invalid quantity" })
//     .transform((val) => (val === "" ? undefined : Number(val)))
//     .optional(),
//   price_per_unit: z
//     .string()
//     .default("")
//     .refine(checkForNaN, { message: "Invalid price" })
//     .transform((val) => (val === "" ? undefined : Number(val)))
//     .optional(),
//
//   min_quantity: z
//     .string()
//     .default("")
//     .refine(checkForNaN, { message: "Invalid quantity" })
//     .transform((val) => (val === "" ? undefined : Number(val)))
//     .optional(),
// });
//
// export type FormFields = z.infer<typeof AddFormSchema>;
