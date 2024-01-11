import {InferType, object, setLocale, string } from "yup";
import yupLocaleOptions from "../helpers/yupConfig";

setLocale(yupLocaleOptions);

export const loginSchema = object({
    loginEmail: string().email().required().max(24),
    loginPassword: string().required().min(6).max(24),
  }).required();

export type TLoginInput = InferType<typeof loginSchema>