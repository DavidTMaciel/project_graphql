const ApolloServer = require ('@apollo/server');
const startStandaloneServer = require  ('@apollo/server/standalone');
const {typeDefs, resolvers} = require('./src/graphql')

async function startServer(){

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        formatError: (err) =>{
            if(err.message.startsWith('Usuario Existente:')){
                return new Error(err.message);
            }
        }
    });
    
    
    const { url } = await startStandaloneServer(server)
    console.log(`🚀 Server ready at ${url}`);
    
}
startServer().catch((error) => {
  console.error('Error starting the server:', error);
});

