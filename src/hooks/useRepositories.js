import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (variables) => {
  const { data, error, fetchMore, loading, ...result } = useQuery(
    GET_REPOSITORIES,
    {
      fetchPolicy: 'cache-and-network',
      variables,
    }
  );

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_REPOSITORIES,
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repositories: {
            ...fetchMoreResult.repositories,
            edges: [
              ...previousResult.repositories.edges,
              ...fetchMoreResult.repositories.edges,
            ],
          },
        };

        return nextResult;
      },
    });
  };

  if (error) {
    console.log(error);
  }

  if (loading) {
    return {};
  }

  return {
    repositories: data ? data.repositories : undefined,
    fetchMore: handleFetchMore,
    ...result,
  };
};

export default useRepositories;
