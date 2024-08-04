// Imports
import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

// Campos para la creacion de usuario
export const UserType = new GraphQLObjectType({
    name: "User",
    fields:{
        id: { type: GraphQLID },
        name:{ type: GraphQLString },
        username:{ type: GraphQLString },
        password: { type: GraphQLString },
    }
})