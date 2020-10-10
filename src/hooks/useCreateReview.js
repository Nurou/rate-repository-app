import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-native';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);
  const client = useApolloClient();
  let history = useHistory();

  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    const {
      data: {
        createReview: { repositoryId },
      },
    } = await mutate({
      variables: {
        review: { ownerName, repositoryName, rating: parseInt(rating), text },
      },
    });
    history.push(`/${repositoryId}`);
    return result;
  };
  return [createReview, result];
};

export default useCreateReview;
