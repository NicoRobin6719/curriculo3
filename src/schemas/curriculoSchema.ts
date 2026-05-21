import * as yup from "yup"

export const curriculoSchema = yup.object({
  nome: yup.string().required().min(3),
  cargo: yup.string().required().min(3),
  resumo: yup.string().required().min(10),
})