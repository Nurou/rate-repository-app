import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { useContext } from 'react';
import { useHistory } from 'react-router-native';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { SIGN_IN } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  const client = useApolloClient();
  const authStorage = useContext(AuthStorageContext);
  let history = useHistory();

  const signIn = async ({ username, password }) => {
    const {
      data: {
        authorize: { accessToken },
      },
    } = await mutate({
      variables: { credentials: { username, password } },
    });

    await authStorage.setAccessToken(accessToken);
    history.push('/');
    client.clearStore();
    return result;
  };
  return [signIn, result];
};

export default useSignIn;
