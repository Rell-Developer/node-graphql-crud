// Imports
import { GraphQLInputObjectType, GraphQLString } from "graphql"

// Objecto del usuario
export const UserInput = new GraphQLInputObjectType({
    name:"UserInput",
    fields:{
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        oldPassword: { type: GraphQLString }
    }
})