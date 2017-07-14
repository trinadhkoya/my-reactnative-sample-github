import React, {Component} from 'react';
import {Text, View, Image,Linking} from 'react-native';
import AlbumCard from './AlbumCard';
import AlbumCardSection from './AlbumCardSection';
import AlbumButton from './AlbumButton';

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

            <Image source={{
              uri: this.props.album.thumbnail_image
            }} style={styles.thumbnail_imageStyle}></Image>

          </View>

          {/* this is for Textbased  View */}
          <View style={styles.headerContentStyle}>
            <Text style={styles.headerTextStyle}>{this.props.album.title}</Text>
            <Text>{this.props.album.artist}</Text>
          </View>
        </AlbumCardSection>

        <AlbumCardSection>

          <View>

            <Image source={{
              uri: this.props.album.image
            }} style={styles.bannerImageStyle}></Image>

          </View>

        </AlbumCardSection>

        <AlbumCardSection>

          <AlbumButton whenPressed={() => Linking.openURL(this.props.album.url)} buttonText={this.props.album.title}></AlbumButton>

        </AlbumCardSection>

      </AlbumCard>
    );

  };

}

const styles = {

  headerContentStyle: {

    flexDirection: 'column',
    justifyContent: 'space-around'

  },

  headerTextStyle: {
    fontSize: 18,
    color: '#000'
  },

  thumbnail_imageStyle: {
    height: 50,
    width: 50
  },

  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  bannerImageStyle: {
    height: 300,
    flex: 1,
    width: 320
  }
}
export default AlbumDetail;
