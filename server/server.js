const { ApolloServer } = require('apollo-server');
const connectDb = require('./config/db');
const typeDefs = require('./types');
const resolvers = require('./resolvers');
const models = require('./models');

const PORT = 5000;

connectDb();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { models }
});

server.listen({ port: process.env.PORT || PORT}).then(res => {
    console.log(`Server is ready at ${res.url}`);
})