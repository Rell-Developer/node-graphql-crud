// Imports
import "reflect-metadata"
import { DataSource } from "typeorm";
import { Users } from "./Entities/Users";

// Variables
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from "./config";

// Conexion con la base de datos
export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    entities: [Users],
    synchronize: false,
    logging: true,
    ssl: false
})