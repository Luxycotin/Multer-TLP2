import { body } from "express-validator";

export const validationsProduct = [
    body("name")
    .notEmpty()
    .withMessage("El nombre no puede estar vacio")
    .isString()
    .withMessage("El nombre debe ser un String"),
    body("description")
    .notEmpty()
    .withMessage("La descripcion no puede estar vacio")
    .isString()
    .withMessage("La descipcion debe ser un String"),
    body("price")
    .notEmpty()
    .withMessage("El precio no puede estar vacio")
    .isNumeric()
    .withMessage("El precio debe ser un numero")
]