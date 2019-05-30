import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	productsMutations,
	productsQueries,
	productsTypeDef
} from './products/typeDefs';

import productsResolvers from './products/resolvers';

import {
	storesMutations,
	storesQueries,
	storesTypeDef
} from './stores/typeDefs';

import storesResolvers from './stores/resolvers';

import {
	usersMutations,
	usersQueries,
	usersTypeDef
} from './users/typeDefs';

import usersResolvers from './users/resolvers';

import {
	paymentsMutations,
	paymentsQueries,
	paymentsTypeDef
} from './payments/typeDefs';

import paymentsResolvers from './payments/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		paymentsTypeDef,
		productsTypeDef,
		storesTypeDef,
		usersTypeDef
	],
	[
		paymentsQueries,
		productsQueries,
		storesQueries,
		usersQueries
	],
	[
		paymentsMutations,
		productsMutations,
		storesMutations,
		usersMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		paymentsResolvers,
		productsResolvers,
		usersResolvers,
		storesResolvers
	)
});
