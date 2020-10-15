import { gql } from 'apollo-boost';
import { repoPartsFragment } from './fragements';

export const GET_REPOSITORIES = gql`
  ${repoPartsFragment}
  query getRepositories(
    $after: String
    $first: Int
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      after: $after
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      edges {
        node {
          ...RepoParts
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  ${repoPartsFragment}
  query getRepository($repoId: ID!, $after: String, $first: Int) {
    repository(id: $repoId) {
      ...RepoParts
      reviews(first: $first, after: $after) {
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
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          totalCount
          hasNextPage
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
