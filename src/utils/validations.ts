import * as yup from "yup";

export const errMessages = {
  req: "Este campo es obligatorio",
  text: "Este campo debería ser una cadena de texto",
  number: "Este campo debería ser un número.",
  integer: "Este campo debería ser un número entero",
  positive: "Este campo debería ser un número positivo",
  email: "Debes introducir un correo electrónico válido.",
  password:
    "La contraseña debe contener mínimo 8 caracteres, una letra minúscula, mayúscula y carácter especial.",
  select: "Debe completar el campo de selección para continuar.",
};

export const stringValidation = yup
  .string()
  .typeError(errMessages.text)
  .required(errMessages.req);
export const emailValidation = yup
  .string()
  .email(errMessages.email)
  .required(errMessages.req);
export const passwordValidation = yup
  .string()
  .min(8, errMessages.password)
  .required(errMessages.req)
  .matches(
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/,
    errMessages.password
  );
export const roleValidation = yup
  .number()
  .positive(errMessages.positive)
  .integer(errMessages.integer)
  .typeError(errMessages.number)
  .oneOf([2, 3], "Seleccione un rol válido.")
  .required(errMessages.req);
export const dateValidation = yup.date().required(errMessages.req);
export const integerValidation = yup
  .number()
  .positive(errMessages.positive)
  .integer(errMessages.integer)
  .typeError(errMessages.number)
  .required(errMessages.req);
export const phoneValidation = yup
  .string()
  .length(10, "El teléfono debe tener exactamente 10 dígitos")
  .matches(/^\d{10}$/, "El teléfono debe ser númerico")
  .required(errMessages.req);
export const contactNumbersValidation = yup
  .array()
  .of(phoneValidation)
  .min(1, "Debe proporcionar al menos un número de contacto")
  .required(errMessages.req);
export const informationEmailsValidation = yup
  .array()
  .of(emailValidation)
  .min(1, "Debe proporcionar al menos un correo para información")
  .required(errMessages.req);

export const createStatusValidation = (validValues: string[]) =>
  yup
    .string()
    .oneOf(validValues, "Seleccione un estado correcto.")
    .required(errMessages.req);

export const observationValidation = yup
  .string()
  .typeError(errMessages.text)
  .optional();

export const fileValidation = yup
  .mixed()
  .nullable()
  .test(
    "fileType",
    "Solo se aceptan archivos PDF",
    (value) => !value || (value && (value as File).type === "application/pdf")
  )
  .test(
    "fileSize",
    "El archivo es demasiado grande (máximo 5 MB)",
    (value) => !value || (value && (value as File).size <= 5000000)
  );
