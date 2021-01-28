import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import fetch from "node-fetch";

const link = createHttpLink({
    uri: 'http://localhost:4000/'
})

const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link,
});

export  default client