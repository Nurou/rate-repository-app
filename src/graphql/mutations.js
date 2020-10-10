import { gql } from 'apollo-boost';

export const SIGN_IN = gql`
  mutation Authorize($credentials: AuthorizeInput!) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview($review: CreateReviewInput!) {
    createReview(review: $review) {
      id
      user {
        id
        username
        reviewCount
      }
      rating
      createdAt
      text
      userId
      repositoryId
    }
  }
`;
