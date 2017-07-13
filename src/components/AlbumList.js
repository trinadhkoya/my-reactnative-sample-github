import React, {Component} from 'react'
import {View, Text} from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail';


// const AlbumList = () => {

class AlbumList extends Component {

  state = {
    albums: []
  };

  componentWillMount() {

    console.log("componentWillMount in AlbumList");

    axios.get('http://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({albums: response.data}));

  }

  renderAlbums() {
  //   return this.state.albums.map(album =>
  //     <Text key={album.title} > {album.title}< /Text>
  // );

  return this.state.albums.map(album =>
    <AlbumDetail key={album.title}  album={album} />
  );

  // The below one is bit enhanced

  }

  render() {

    // console.log(this.state);
    return (
      <View>
        <Text>Album List</Text >
        {this.renderAlbums()}
      </View>
    );
  }

}

export default AlbumList;
