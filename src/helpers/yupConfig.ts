import { LocaleObject } from "yup"; 

const yupLocaleOptions: LocaleObject = {
    mixed: {
      required: 'Campo requerido',
    },
    string: {
      email: 'Email no válido',
      matches: 'No se admiten caracteres especiales',
      min: ({min})=>`Debe tener mínimo ${min} caracteres`,
      max: ({max})=>`Debe tener máximo ${max} caracteres`,
    },
  };

export default yupLocaleOptions;