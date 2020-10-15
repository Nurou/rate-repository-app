import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import Text from './Text';
import { FlatList } from 'react-native';
import useRepository from '../hooks/useRepository';
import { ReviewItem } from './ReviewItem';

export const RepositorySingleItemView = () => {
  // get id from url pattern
  const { id } = useParams();

  const variables = { repoId: id, first: 3 };

  const { repository, fetchMore, loading } = useRepository(variables);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <FlatList
      style={{ backgroundColor: 'lightgray' }}
      data={repository?.reviews?.edges}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryItem repository={repository} showGhLink={true} />
      )}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositorySingleItemView;
