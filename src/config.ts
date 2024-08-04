// Imports
import { config } from "dotenv";

// Invocamos la funcion para leer las variables de entorno
config();

// Nombre de la base de datos
export const DB_NAME = process.env.DB_NAME;

// Usuario para la db
export const DB_USER = process.env.DB_USER;

// Clave para el usuario de la db
export const DB_PASS = process.env.DB_PASSWORD;

// Puerto donde corre la db
export const DB_PORT = process.env.DB_PORT;

// Direccion donde esta la base de datos
export const DB_HOST = process.env.DB_HOST;

// Puerto para el servidor
export const SERVER_PORT = process.env.SERVER_PORT;