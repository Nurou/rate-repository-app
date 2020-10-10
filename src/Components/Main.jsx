import React from 'react';
import Constants from 'expo-constants';
import { View, StyleSheet } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Redirect, Route, Switch, useParams } from 'react-router-native';
import SignIn from './SignIn';
import RepositoryItem from './RepositoryItem';
import { GET_REPOSITORY } from '../graphql/queries';
import { useQuery } from '@apollo/react-hooks';
import Text from './Text';
import RepositorySingleItemView from './RepositorySingleItemView';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Route path='/signin' exact>
          <SignIn />
        </Route>
        <Route path='/:id'>
          <RepositorySingleItemView />
        </Route>
        {/* <Redirect to='/' /> */}
      </Switch>
    </View>
  );
};

export default Main;
