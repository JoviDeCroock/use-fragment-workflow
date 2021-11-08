/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

declare module "urql" {

  export function gql(source: "fragment PokemonFields on Pokemon {\n  name\n  classification\n  maxHP\n  maxCP\n  types\n  weight {\n    minimum\n    maximum\n  }\n  evolutions { id name evolutions { id name } }\n}"): typeof import('./graphql').PokemonFieldsFragmentDoc;
  export function gql(source: "query Pokemons {\n  pokemons(limit: 1) {\n    id\n    __typename\n    ...PokemonFields\n  }\n}"): typeof import('./graphql').PokemonsDocument;
  export function gql(source: string): unknown;

    export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<    infer TType,    any  >    ? TType    : never;  
}