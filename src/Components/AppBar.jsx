import { useApolloClient, useQuery } from '@apollo/react-hooks';
import React, { useContext } from 'react';
import {
  Button,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { Link } from 'react-router-native';
import styled from 'styled-components/native';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { GET_AUTHORIZED_USER } from '../graphql/queries';
import Text from './Text';

const StyledView = styled.View`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => (props.bg ? props.bg : 'black')};
  padding: 40px 0px 20px 20px;
  font-weight: bold;
`;

const StyledText = styled.Text`
  margin-right: 20px;
  color: ${(props) => props.color};
`;

const AppBar = () => {
  const { client, loading, data } = useQuery(GET_AUTHORIZED_USER, {
    fetchPolicy: 'network-only',
  });
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  if (loading) return <Text>Loading ...</Text>;

  return (
    <>
      <StyledView bg='#24292e'>
        <ScrollView horizontal>
          <Link to='/' component={TouchableOpacity} activeOpacity={0.8}>
            <StyledText color='white'>Repositories</StyledText>
          </Link>
          {data && data?.authorizedUser ? (
            <TouchableWithoutFeedback onPress={handleSignOut}>
              <StyledText color='white'>Sign out</StyledText>
            </TouchableWithoutFeedback>
          ) : (
            <Link to='/Signin' component={TouchableOpacity} activeOpacity={0.8}>
              <StyledText color='white'>Sign in</StyledText>
            </Link>
          )}
        </ScrollView>
      </StyledView>
    </>
  );
};

export default AppBar;
