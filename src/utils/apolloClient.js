import ApolloClient from 'apollo-boost';
import Constants from 'expo-constants';

const createApolloClient = () => {
  const {
    manifest: {
      extra: { apolloUrl },
    },
  } = Constants;

  return new ApolloClient({
    uri: apolloUrl,
  });
};

export default createApolloClient;
