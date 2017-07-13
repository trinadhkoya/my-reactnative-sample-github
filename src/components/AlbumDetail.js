import React, {Component} from 'react';
import {Text, View} from 'react-native';

class AlbumDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <Text>
      {this.props.album.title}!</Text>;

  }

}
export default AlbumDetail;
