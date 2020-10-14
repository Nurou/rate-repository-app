import { gql } from 'apollo-boost';
import { repoPartsFragment } from './fragements';

export const GET_REPOSITORIES = gql`
  ${repoPartsFragment}
  query getRepositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
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
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
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
