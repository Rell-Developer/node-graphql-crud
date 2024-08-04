// Imports
import { GraphQLID, GraphQLList } from "graphql";
import { Users } from "../../Entities/Users";
import { UserType } from "../TypesDef/User";

// Obtener todos los usuarios
export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    async resolve(){
        return await Users.find();
    }
}

// Obtener un solo usuario
export const GET_USER = {
    type: UserType,
    args: {
        id: { type: GraphQLID }
    },
    async resolve(_:any, args: any){
        // Buscamos el usuario por su id
        return await Users.findOne({
            where:{
                id: args.id
            }
        });
    }
}