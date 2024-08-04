// Imports
import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { GREETING } from "./Queries/Greeting";
import { GET_ALL_USERS, GET_USER } from "./Queries/User";
import { CREATE_USER, DELETE_USER, UPDATE_USER } from "./Mutations/User";

// Declaramos el query principal
const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields:{
        greeting: GREETING,
        getAllUsers: GET_ALL_USERS,
        getUser: GET_USER
    }
});

// Declaramos el mutation principal
const RootMutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: CREATE_USER,
        deleteUser: DELETE_USER,
        updateUser: UPDATE_USER
    }
});

// Declaramos la esquema principal
export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});