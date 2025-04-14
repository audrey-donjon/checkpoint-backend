// src/resolvers/CountryResolver.ts
import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Country } from "../entities/Country.js";
import { AppDataSource } from "../data-source.js";

@Resolver()
export class CountryResolver {
  // Query pour renvoyer la liste complète de tous les pays
  @Query(() => [Country])
  async countries(): Promise<Country[]> {
    return await AppDataSource.getRepository(Country).find();
  }

  // Query pour récuperer un pays par son code
  @Query(() => Country, { nullable: true })
  async country(@Arg("code") code: string): Promise<Country | null> {
    return await AppDataSource.getRepository(Country).findOneBy({ code });
  }

  // Query pour récupérer tous les pays appartenant à un continent donnée
  @Query(() => [Country])
  async countriesByContinent(
    @Arg("continent") continent: string
  ): Promise<Country[]> {
    return await AppDataSource.getRepository(Country).findBy({ continent });
  }

  // Mutation pour créer un nouveau pays
  @Mutation(() => Country)
  async createCountry(
    @Arg("code") code: string,
    @Arg("name") name: string,
    @Arg("emoji") emoji: string,
    @Arg("continent") continent: string
  ): Promise<Country> {
    const countryRepository = AppDataSource.getRepository(Country);
    const country = countryRepository.create({ code, name, emoji, continent });
    return await countryRepository.save(country);
  }
}
