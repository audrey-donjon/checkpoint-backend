// src/index.ts
import "reflect-metadata"; // Doit être importé avant tout
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { AppDataSource } from "./data-source.js";
import { CountryResolver } from "./resolvers/CountryResolver.js";

async function bootstrap() {
  // Initialisation de la connexion à la base de données
  await AppDataSource.initialize();
  console.log("Connexion à la base SQLite réussie.");

  // Construction du schéma GraphQL à partir des resolvers
  const schema = await buildSchema({
    resolvers: [CountryResolver],
  });

  // Création du serveur Apollo
  const server = new ApolloServer({ schema });

  // Démarrage du serveur en mode standalone
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`Serveur GraphQL démarré à l'adresse : ${url}`);
}

bootstrap().catch((err) => console.error(err));
