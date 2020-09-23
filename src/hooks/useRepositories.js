import { useQuery } from '@apollo/react-hooks';
import { useState, useEffect } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  if (error) {
    console.log(error);
  }

  if (loading) {
    return {};
  }

  const { repositories } = data;

  return { repositories };
};

export default useRepositories;
