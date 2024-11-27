import { $Enums, Prisma } from '@prisma/client';
import { DecimalJsLike } from '@prisma/client/runtime/library';

export class Film implements Prisma.filmCreateInput {
  title: string;
  description?: string;
  release_year?: number;
  rental_duration?: number;
  rental_rate?: string | number | Prisma.Decimal | DecimalJsLike;
  length?: number;
  replacement_cost?: string | number | Prisma.Decimal | DecimalJsLike;
  rating?: $Enums.mpaa_rating;
  last_update?: string | Date;
  special_features?: string[] | Prisma.filmCreatespecial_featuresInput;
  language_film_language_idTolanguage: Prisma.languageCreateNestedOneWithoutFilm_film_language_idTolanguageInput;
  language_film_original_language_idTolanguage?: Prisma.languageCreateNestedOneWithoutFilm_film_original_language_idTolanguageInput;
  film_actor?: Prisma.film_actorCreateNestedManyWithoutFilmInput;
  film_category?: Prisma.film_categoryCreateNestedManyWithoutFilmInput;
  inventory?: Prisma.inventoryCreateNestedManyWithoutFilmInput;
}
