import { gql } from 'apollo-boost';

export const repoPartsFragment = gql`
  fragment RepoParts on Repository {
    id
    name
    ownerName
    createdAt
    fullName
    ratingAverage
    forksCount
    stargazersCount
    description
    language
    ownerAvatarUrl
    url
    reviewCount
  }
`;
