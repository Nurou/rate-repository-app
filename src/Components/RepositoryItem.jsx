import React from 'react';
import * as Linking from 'expo-linking';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import { Text as ThemeText } from './Text';

const StyledAvatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 4px;
`;

const InfoContainerWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

const TextualInfo = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 20px;
`;

const Wrapper = styled.View`
  padding: 30px;
  margin: 15px;
  background: white;
`;

const Description = styled.Text`
  opacity: 0.7;
  margin-bottom: 8px;
`;
const Language = styled.Text`
  background: navy;
  color: white;
  border-radius: 4px;
  max-width: 80px;
  padding: 5px;
  margin-bottom: 8px;
`;

const RepoName = styled.Text`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Stats = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 20px;
`;

const SingleStat = styled.View`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  border: 1px solid red;
`;

const thousandize = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : value;
};

const RepositoryItem = ({ repository, showGhLink }) => {
  const {
    ownerAvatarUrl,
    url,
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    ratingAverage,
    reviewCount,
  } = repository;

  const onPress = () => {
    Linking.openURL(url);
  };

  return (
    <Wrapper>
      <InfoContainerWrapper>
        <StyledAvatar source={{ uri: ownerAvatarUrl }} />
        <TextualInfo>
          <RepoName testID='repoName'>{fullName}</RepoName>
          <Description testID='repoDescription'>{description}</Description>
          <Language testID='repoLanguage'>{language}</Language>
        </TextualInfo>
      </InfoContainerWrapper>
      <Stats>
        <SingleStat>
          <ThemeText testID='repoStars' fontWeight='bold'>
            {thousandize(stargazersCount)}
          </ThemeText>
          <ThemeText color='textSecondary'>Stars</ThemeText>
        </SingleStat>
        <SingleStat>
          <ThemeText testID='repoForks' fontWeight='bold'>
            {thousandize(forksCount)}
          </ThemeText>
          <ThemeText color='textSecondary'>Forks</ThemeText>
        </SingleStat>
        <SingleStat>
          <ThemeText testID='repoReviewCount' fontWeight='bold'>
            {thousandize(reviewCount)}
          </ThemeText>
          <ThemeText color='textSecondary'>Reviews</ThemeText>
        </SingleStat>
        <SingleStat>
          <ThemeText testID='repoRatingAverage' fontWeight='bold'>
            {thousandize(ratingAverage)}
          </ThemeText>
          <ThemeText color='textSecondary'>Rating</ThemeText>
        </SingleStat>
      </Stats>
      {showGhLink && <StyledButton title='Open in GitHub' onPress={onPress} />}
    </Wrapper>
  );
};

export default RepositoryItem;
