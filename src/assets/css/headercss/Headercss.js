import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  headercontainer: {
    flex: 0,
    // backgroundColor:'powderblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    marginHorizontal: 10,
  },
  headercontainerlogo: {
    // height:20
  },
  headerlogo: {
    height: 50,
    width: 60,
  },
  headermenu: {
    height: 40,
    width: 20,
  },
  headertext: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    fontFamily: 'HelveticaNeue',
  },
  modal:{
    position:'absolute',
    top:60,
    right:0,
    // left:0,
    // bottom:20
  }
});
