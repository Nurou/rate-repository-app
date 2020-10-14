import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (variables) => {
  console.log('💩: useRepositories -> variables', variables);
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables,
  });

  if (error) {
    console.log(error);
  }

  if (loading) {
    return {};
  }

  const { repositories } = data;

  return { repositories };
};

export default useRepositories;
