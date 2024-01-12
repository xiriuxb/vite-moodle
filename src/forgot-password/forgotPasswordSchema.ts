import { InferType, object, setLocale, string } from "yup";
import yupLocaleOptions from "../helpers/yupConfig";

setLocale(yupLocaleOptions);

export const forgotPasswordSchema = object({
  userEmail: string().email().required().max(24),
}).required();

export type TForgotInput = InferType<typeof forgotPasswordSchema>;
