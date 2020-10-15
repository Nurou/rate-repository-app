import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { FlatList, View } from 'react-native';
import { Text } from './Text';
import { GET_AUTHORIZED_USER } from '../graphql/queries';
import { ReviewItem } from './ReviewItem';

const UserReviews = () => {
  const variables = { includeReviews: true };

  const { client, loading, data } = useQuery(GET_AUTHORIZED_USER, {
    fetchPolicy: 'network-only',
    variables,
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      {data && data?.authorizedUser ? (
        <FlatList
          style={{ backgroundColor: 'lightgray' }}
          data={data.authorizedUser?.reviews?.edges}
          renderItem={({ item }) => {
            console.log(item);
            return <ReviewItem review={item} personal />;
          }}
          keyExtractor={({ id }) => id}
        />
      ) : null}
    </>
  );
};

export default UserReviews;
