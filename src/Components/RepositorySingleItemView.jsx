import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-native';
import { GET_REPOSITORY } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';
import Text from './Text';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

const Review = styled.View`
  display: flex;
  flex-direction: row;
  padding: 30px;
  margin: 10px;
  background: white;
`;

const Content = styled.View`
  display: flex;
  flex-direction: column;
  max-width: 50%;
`;
const RatingContainer = styled.View`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 20px;
  border: 2px solid blue;
  margin-right: 10px;
  color: blue;
`;

const ReviewItem = ({ review }) => {
  const {
    node: {
      createdAt,
      rating,
      text,
      user: { username },
    },
  } = review;

  return (
    <Review>
      <RatingContainer>
        <Text>{rating}</Text>
      </RatingContainer>
      <Content>
        <Text style={{ fontWeight: '700' }}>{username}</Text>
        <Text style={{ opacity: 0.7 }}>{createdAt.substring(0, 10)}</Text>
        <Text>{text}</Text>
      </Content>
    </Review>
  );

  // Single review item
};

export const RepositorySingleItemView = () => {
  // get id from url pattern
  const { id } = useParams();

  const variables = { repoId: id, first: 3 };

  // fetch repo based on that id
  const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORY, {
    variables,
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_REPOSITORY,
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repository: {
            ...fetchMoreResult.repository,
            edges: [
              ...previousResult.repository.reviews.edges,
              ...fetchMoreResult.repository.reviews.edges,
            ],
          },
        };

        return nextResult;
      },
    });
  };

  const onEndReach = () => {
    handleFetchMore();
  };

  if (error) {
    console.log(error);
  }

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <FlatList
      style={{ backgroundColor: 'lightgray' }}
      data={data?.repository?.reviews?.edges}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryItem repository={data?.repository} showGhLink={true} />
      )}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositorySingleItemView;
