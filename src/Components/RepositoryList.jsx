import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import RepositoryItem from './RepositoryItem';
import styled from 'styled-components/native';
import useRepositories from '../hooks/useRepositories';
import { useHistory } from 'react-router-native';
import { useDebounce } from 'use-debounce';
import { PickerSelect } from './PickerSelect';
import SearchBar from './SearchBar';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const StyledList = styled.FlatList`
  background: lightgray;
`;

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { setOrderBy, searchValue, handleSearch } = this.props;

    return (
      <>
        <SearchBar searchValue={searchValue} handleSearch={handleSearch} />
        <PickerSelect setOrderBy={setOrderBy} />
      </>
    );
  };

  render() {
    const { repositories, handlePress } = this.props;
    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];

    return (
      <StyledList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item.id)}>
            <RepositoryItem repository={item} showGhLink={false} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={this.renderHeader}
      />
    );
  }
}

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('latest');
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue] = useDebounce(searchValue, 500);

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const ob =
    orderBy === 'lowest' || orderBy === 'highest'
      ? 'RATING_AVERAGE'
      : 'CREATED_AT';

  const od = orderBy === 'lowest' ? 'ASC' : 'DESC';

  const variables = {
    orderBy: ob,
    orderDirection: od,
    searchKeyword: debouncedSearchValue,
  };

  let history = useHistory();
  const handlePress = (repoId) => {
    history.push(`/${repoId}`);
  };

  const { repositories } = useRepositories(variables);

  return (
    <RepositoryListContainer
      repositories={repositories}
      handlePress={handlePress}
      searchValue={searchValue}
      handleSearch={handleSearch}
      setOrderBy={setOrderBy}
      setSearchValue={setSearchValue}
    />
  );
};

export default RepositoryList;
