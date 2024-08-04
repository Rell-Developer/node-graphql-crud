// Imports
import app from "./app";
import { AppDataSource } from "./db";
import { SERVER_PORT } from "./config";

// Funcion principal
async function main() {
    try {
        // Realizamos la conexion con la db
        await AppDataSource.initialize();
    
        // Levantamos el servidor de node
        app.listen(SERVER_PORT);
        
        // Mensaje
        console.log("Escuchando en el puerto: ", SERVER_PORT);
    } catch (error) {
        console.error(error);
    }
}

// Invocamos la funcion principal
main();