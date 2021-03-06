import React from 'react';
import Constants from 'expo-constants';
import { View, StyleSheet } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Redirect, Route, Switch, useParams } from 'react-router-native';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { RepositorySingleItemView } from './RepositorySingleItemView';
import { CreateReviewContainer } from './ReviewForm';
import UserReviews from './UserReviews';

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
        <Route path='/signup' exact>
          <SignUp />
        </Route>
        <Route path='/create-review' exact>
          <CreateReviewContainer />
        </Route>
        <Route path='/reviews' exact>
          <UserReviews />
        </Route>
        <Route path='/:id' component={RepositorySingleItemView} />
        <Redirect to='/' />
      </Switch>
    </View>
  );
};

export default Main;
