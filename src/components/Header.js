// import libraries
import React from 'react';
import {Text, View} from 'react-native';

// make a component

const Header = () => {

  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        GitHub:TRINADH KOYA</Text>
    </View>
  );
};

// creating another component to add some styles to other components

const styles = {

  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 20
    },
    shadowOpacity: 0.2
  },

  textStyle: {
    fontSize: 20,
    color: '#000'
  }

}

//make components to available for other parts of the code
export default Header;
