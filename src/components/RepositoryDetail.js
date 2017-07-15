import React, {Component} from 'react';
import {Text, View, Image, Linking} from 'react-native';
import AlbumCard from './AlbumCard';
import RepositoryCardSection from './RepositoryCardSection';
import RepositoryButton from './RepositoryButton';

class RepositoryDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <AlbumCard>

        <RepositoryCardSection>

          {/* this is for imagebased View*/}
          <View>

            <Image source={{
              uri: this.props.repo.owner.avatar_url
            }} style={styles.thumbnail_imageStyle}></Image>

          </View>

          {/* this is for Textbased  View */}
          <View style={styles.headerContentStyle}>
            <Text style={styles.headerTextStyle}>{this.props.repo.name}</Text>
            <Text>{this.props.repo.owner.login}</Text>
          </View>
        </RepositoryCardSection>

        <RepositoryCardSection>

          <View>

            <Image source={{
              uri: this.props.repo.owner.avatar_url
            }} style={styles.bannerImageStyle}></Image>

          </View>

        </RepositoryCardSection>

        <RepositoryCardSection>

          <RepositoryButton whenPressed={() => Linking.openURL(this.props.repo.owner.html_url)} buttonText={this.props.repo.name}></RepositoryButton>

        </RepositoryCardSection>

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
export default RepositoryDetail;
