import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';

class RepositoryButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (

      <TouchableOpacity style={styles.buttonStyle} onPress={this.props.whenPressed}>

        <Text style={styles.textStyle}>
          View {this.props.buttonText}</Text>

      </TouchableOpacity>
    );
  };

}

const styles = {

  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },

  textStyle: {

    alignSelf: 'center',
    color: '#007aff',
    fontWeight: '600',
    fontSize: 16,
    padding: 10

  }

}

export default RepositoryButton;
