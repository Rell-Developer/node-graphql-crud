// Imports
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";

// Inicio del servidor
const app = express();

// Configuracion para el Graphql
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

// Exportamos el servidor
export default app;