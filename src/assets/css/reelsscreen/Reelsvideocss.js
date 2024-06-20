import {StyleSheet, Dimensions} from 'react-native';
const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  maincontainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // height:HEIGHT
  },
  videocontainer: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    height: HEIGHT,
  },
  videostyle: {
    // width: '100%',
    height: '100%',
  },
  btnsgroup: {
    flex: 1,
    zIndex: 1,
    position: 'absolute',
    bottom: 150,
    right: 2,
  },
  userprofile: {
    flex: 1,
    position: 'absolute',
    zIndex: 1,
    bottom: 150,
    left: 8,
  },
  adsimage: {
    height: 100,
    width: 200,
  },
  skipadstextview: {
    flex: 1,
    // marginLeft:80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipadstext: {
    fontWeight: 'bold',
    fontSize:20
  },
});
