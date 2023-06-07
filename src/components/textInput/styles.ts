import {StyleSheet, Dimensions} from 'react-native';

var width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  containerStyle: {
    flexDirection:'row',
    width: width*0.46,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#9E9E9E',
    paddingLeft:5
  },
  txtInputStyle: {
    width: 0.40 * width,
    height: 40,
    paddingLeft: 10,
  },
  searchIcon:{
    padding:10,
  }
});
