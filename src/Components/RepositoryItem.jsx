import React from 'react';
import { View, Text } from 'react-native';

const RepositoryItem = ({ repository }) => {
  console.log('💩: RepositoryItem -> repository', repository);
  return (
    <View>
      <Text>
        Full name: {repository.fullName}
        {'\n'}
        Description: {repository.description}
        {'\n'}
        Language: {repository.language}
        {'\n'}
        Starts: {repository.stargazersCount}
        {'\n'}
        Forks: {repository.forksCount}
        {'\n'}
        Reviews: {repository.reviewCount}
        {'\n'}
        Rating: {repository.ratingAverage}
        {'\n'}
      </Text>
    </View>
  );
};

export default RepositoryItem;
