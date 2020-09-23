import ApolloClient from 'apollo-boost';

const createApolloClient = () => {
  return new ApolloClient({
    uri: 'http://192.168.43.122:5000/graphql',
  });
};

export default createApolloClient;
