import { body } from "express-validator";
import { validarCampos } from "./validate-fields.js";
import { handleErrors } from "./handle-errors.js";
import { appointExists } from "../helpers/db-validators.js";

export const createAppointmentValidator = [
    body("date").notEmpty().withMessage("La fecha es requerida"),
    body("pet").notEmpty().withMessage("La mascota es requerida"),
    body("pet").isMongoId().withMessage("No es un ID válido de MongoDB"),
    validarCampos,
    handleErrors
];

export const getPetsByIdValidator = [
    body("num").isMongoId().withMessage("No es un id válido"),
    param("num").customn(appointExists),
    validarCampos,
    handleErrors
]

export const updateAppointValidator = [
    param("num", "No es un ID válido").isMongoId(),
    param("num").custom(appointExists),
    validarCampos,
    handleErrors
]
export const deleteAppointValidator = [
    param("num").isMongoId().withMessage("No es un ID válido de MongoDB"),
    param("num").custom(appointExists),
    validarCampos,
    handleErrors
]