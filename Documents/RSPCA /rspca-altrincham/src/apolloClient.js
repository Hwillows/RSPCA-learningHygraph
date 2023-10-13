import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-eu-west-2.hygraph.com/v2/clj8pi2kp1hee01uefdyv3pmo/master",
  cache: new InMemoryCache(),
});

export default client;
