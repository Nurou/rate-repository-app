import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import styled from 'styled-components/native';

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
  return (
    <>
      <StyledView bg='#24292e'>
        <Link to='/' component={TouchableOpacity} activeOpacity={0.8}>
          <StyledText color='white'>Repositories</StyledText>
        </Link>
        <Link to='/Signin' component={TouchableOpacity} activeOpacity={0.8}>
          <StyledText color='white'>Sign in</StyledText>
        </Link>
      </StyledView>
    </>
  );
};

export default AppBar;
