import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../theme';

const StyledView = styled.View`
  background-color: ${(props) => (props.bg ? props.bg : 'black')};
  padding: 40px 0px 20px 20px;
  font-weight: bold;
`;

const StyledText = styled.Text`
  color: ${(props) => props.color};
`;

const AppBar = () => {
  return (
    <StyledView bg='#24292e'>
      <StyledText color='white'>Repositories</StyledText>
    </StyledView>
  );
};

export default AppBar;
