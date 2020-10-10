import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-native';
import { SIGN_UP } from '../graphql/mutations';

const useSignUp = () => {
  const [mutate, result] = useMutation(SIGN_UP);
  let history = useHistory();

  const signUp = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { user: { username, password } },
    });

    history.push('/signin');
    return result;
  };
  return [signUp, result];
};

export default useSignUp;
