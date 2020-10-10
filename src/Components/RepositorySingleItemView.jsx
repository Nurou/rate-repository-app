import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-native';
import { GET_REPOSITORY } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';
import Text from './Text';

const RepositorySingleItemView = () => {
  // get id from url pattern
  const { id } = useParams();

  // fetch repo based on that id
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    variables: { repoId: id },
    fetchPolicy: 'cache-and-network',
  });

  if (error) {
    console.log(error);
  }

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return <RepositoryItem repository={data?.repository} showGhLink={true} />;
};

export default RepositorySingleItemView;
