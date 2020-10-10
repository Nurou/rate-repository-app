import { gql } from 'apollo-boost';
import { repoPartsFragment } from './fragements';

export const GET_REPOSITORIES = gql`
  ${repoPartsFragment}
  query {
    repositories {
      edges {
        node {
          ...RepoParts
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  ${repoPartsFragment}
  query getRepository($repoId: ID!) {
    repository(id: $repoId) {
      ...RepoParts
    }
  }
`;

export const GET_AUTHORIZED_USER = gql`
  {
    authorizedUser {
      id
      username
    }
  }
`;
