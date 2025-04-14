# Checkpoint Backend - API GraphQL avec TypeScript

Ce projet est une API GraphQL développée en Node.js avec TypeScript. L'objectif est de fournir un service de gestion des pays (code, nom, emoji et continent) en utilisant Apollo Server, TypeGraphQL et TypeORM avec SQLite comme base de données. Ce projet a été réalisé dans le cadre d'un checkpoint de backend.

## Technologies utilisées

- **Node.js** et **TypeScript**
- **Apollo Server** pour créer l'API GraphQL
- **TypeGraphQL** pour définir le schéma GraphQL avec des décorateurs TypeScript
- **TypeORM** comme ORM pour gérer la base de données SQLite
- **SQLite** pour la base de données
- **ts-node-dev** (ou **nodemon** avec `ts-node/esm`) pour le rechargement automatique en développement

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/audrey-donjon/checkpoint-backend.git
   cd checkpoint-backend
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

## Lancer le projet

1. Dans votre terminal

    ```bash
    npm run dev
    ```

Le serveur devrait se lancer sur le port 4000 avec un message indiquant :

- La connexion à la base SQLite générée automatiquement grâce à synchronize: true
- L'URL du serveur, par exemple :
- Serveur GraphQL démarré à l'adresse : http://localhost:4000/
