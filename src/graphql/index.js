const { join } = require('path');
const { importSchema } = require('graphql-import');
const { mergeTypeDefs, mergeResolvers } = require('graphql-tools');
const { loadFilesSync } = require('@graphql-tools/load-files');

const allTypes = importSchema(join(__dirname, 'modules', '**', '*.gql'));
const allResolvers = loadFilesSync(join(__dirname, 'modules', '**', 'resolvers.js'));

const typeDefs = mergeTypeDefs(allTypes);
const resolvers = mergeResolvers(allResolvers);

module.exports = { typeDefs, resolvers };

