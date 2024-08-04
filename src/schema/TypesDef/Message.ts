// Imports
import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from "graphql";

// Objeto a retornar al cliente
export const MessageType = new GraphQLObjectType({
    name: "Message",
    fields:{
        success: { type: GraphQLBoolean },
        message: { type: GraphQLString },
    }
})