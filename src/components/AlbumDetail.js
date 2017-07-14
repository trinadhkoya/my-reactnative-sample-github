import React, {Component} from 'react';
import {Text, View,Image} from 'react-native';
import AlbumCard from './AlbumCard';
import AlbumCardSection from './AlbumCardSection';

class AlbumDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AlbumCard>

        <AlbumCardSection>

          {/* this is for imagebased View*/}
          <View>

              <Image source={{uri:this.props.album.thumbnail_image}} style={styles.thumbnail_imageStyle}/>

          </View>

          {/* this is for Textbased  View */}
          <View style={styles.headerContentStyle}>
            <Text>{this.props.album.title}</Text>
            <Text>{this.props.album.artist}</Text>
          </View>
        </AlbumCardSection>
      </AlbumCard>
    );

  };

}

const styles = {

  headerContentStyle: {

      flexDirection:'column',
      justifyContent:'space-around'

  },
  thumbnail_imageStyle:{
    height:50,
    width:50,
  }


}
export default AlbumDetail;
