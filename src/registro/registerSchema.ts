import {InferType, object, ref, setLocale, string } from "yup";
import yupLocaleOptions from "../helpers/yupConfig";

setLocale(yupLocaleOptions);

export const registerSchema = object({
    regFirstName: string().required().matches(/^[A-Za-z]+$/).max(24),
    regLastName: string().required().matches(/^[A-Za-z]+$/).max(24),
    regEmail: string().email().required().max(24),
    regPassword: string().required().min(6).max(24),
    regConfirmPassword: string().required().oneOf([ref('regPassword')],'Las contraseñas no coinciden'),
  }).required();

export type TRegisterInput = InferType<typeof registerSchema>