// src/data-source.ts
import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true, // Pour auto-créer/mise-à-jour les tables en dev
  logging: true,
  entities: ["./src/entities/*.ts"], // En dev, le loader TS détecte les .ts
});
