import { StyleSheet,Dimensions } from 'react-native'
const HEIGHT = Dimensions.get('window').height

export default StyleSheet.create({
    maincontainer:{
        flex:1,
        height:HEIGHT
    },
    headercontainer:{
        flex:0
    },
    headeradscontainer:{
        flex:0,
        // backgroundColor:'red'
    },
    adsimgcontainer:{
        flex:0
    },
    headingcontainer:{
        flex:0,
        marginHorizontal:8
    },
    paracontainer:{
        flex:0,
        marginHorizontal:8
    },
    btngroupcontainer:{
        flex:1,
        flexDirection:'row',
        marginHorizontal:10,
        position:'absolute',
        bottom:150,
    },
    readbtncontainer:{
        flex:1
    },
    sharebtncontainer:{
        flex:1,
        flexDirection:'row-reverse'
    },
    whatsappbtncontainer:{
        flex:1,
        // flexDirection:'row'
    },
    listcontainer:{
        height:HEIGHT
    }
})