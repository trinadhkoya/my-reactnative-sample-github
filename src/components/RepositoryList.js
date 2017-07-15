import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import axios from 'axios';
import RepositoryDetail from './RepositoryDetail';

// const RepositoryList = () => {

class RepositoryList extends Component {

  state = {
    repos: []
  };

  componentWillMount() {

    console.log("componentWillMount in RepositoryList");

    axios.get('https://api.github.com/users/trinadhkoya/repos').then(response => this.setState({repos: response.data}));

  }

  renderRepositories() {
    //   return this.state.albums.map(album =>
    //     <Text key={album.title} > {album.title}< /Text>
    // );

    return this.state.repos.map(repo => <RepositoryDetail key={repo.name} repo={repo}/>);

    // The below one is bit enhanced

  }

  render() {

    // console.log(this.state);
    return (
      <ScrollView>
        {this.renderRepositories()}
      </ScrollView>

    );
  }

}

export default RepositoryList;
