// src/entities/Country.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, Int, InputType } from "type-graphql";

//  * Représente un pays dans la base de données
//  * @Entity : Indique que cette classe est une entité de base de données
//  * @ObjectType : Indique que cette classe est un type GraphQL
@ObjectType()
@Entity()
export class Country {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  code!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  emoji!: string;

  @Field()
  @Column()
  continent!: string;
}

// * Représente les données d'entrée pour créer un pays
@InputType()
export class CountryInput {
  @Field()
  code!: string;

  @Field()
  name!: string;

  @Field()
  emoji!: string;

  @Field()
  continent!: string;
}
