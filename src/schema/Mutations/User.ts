// Imports
import { GraphQLBoolean, GraphQLID, GraphQLString } from "graphql";

// Tipos de datos para graphql
import { UserType } from "../TypesDef/User";
import { MessageType } from "../TypesDef/Message";
import { UserInput } from "../TypesDef/UserInput";

// Entidades
import { Users } from "../../Entities/Users";

// Para encriptacion de datos
import bcrypt from "bcryptjs";

// Crear un usuario
export const CREATE_USER={
    // Tipo de dato del retorno de la mutacion
    type: UserType,
    args:{
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    // Cuando se ejecute la mutacion, ejecuta
    async resolve(_:any, args:any){
        // Destructuramos
        const { name, username, password } = args;

        // Encriptamos la contraseña
        const encryptPassword = await bcrypt.hash(password, 10);

        // Creamos el usuario
        const result = await Users.insert({
            name,
            username,
            password: encryptPassword
        });
        // Retornamos el usuario creado
        return {
            ...args,
            id: result.identifiers[0].id,
            password: encryptPassword
        }
    }
}

// Eliminar un usuario
export const DELETE_USER = {
    type: GraphQLBoolean,
    args: {
        id: { type: GraphQLID }
    },
    async resolve(_:any, { id }: any){
        // Eliminamos el usuario
        const deleteUser = await Users.delete(id);
        // Retornamos si elimino a uno o no 
        return deleteUser.affected === 1
    }
}

// Actualizar un usuario
export const UPDATE_USER = {
    type: MessageType,
    args:{
        id: { type: GraphQLID },
        user:{ type: UserInput }
    },
    async resolve(_:any, { id, user }: any){
        // Extraemos los datos del usuario
        const { name, username, password, oldPassword } = user;

        // Buscamos el usuario
        const userFound = await Users.findOne({
            where:{
                id
            }
        });

        // Si no existe, retornamos
        if (!userFound) {
            return {
                success: false,
                message:"No se encontro el usuario"
            };
        }

        // Comparamos contraseña
        const comparePass = await bcrypt.compare(oldPassword, userFound.password);

        // Si no es la misma contraseña
        if(!comparePass){
            return {
                success: false,
                message:"Las contraseñas no coinciden"
            };
        }

        // Hasheamos la nueva contraseña
        const newPassword = await bcrypt.hash(password, 10);

        // Actualizar objeto
        const response = await Users.update({ id }, { username, name, password: newPassword });

        // Validamos
        if(response.affected === 0){
            return {
                success: false,
                message: "No se actualizo el registro, verifique los datos"
            }
        }
        
        // Retornamos una respuesta correcta
        return {
            success: true,
            message: "Usuario actualizado correctamente"
        };
    }
}