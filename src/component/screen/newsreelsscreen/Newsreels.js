// not workiong

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import styles from '../../../assets/css/reelsscreen/Reelsvideocss';
import test1 from '../../../assets/video/test1.mp4';
import Dislikebtn from '../../commoncomponent/componentbtn/dislikebtn/Dislikebtn';
import Whatsappbtn from '../../commoncomponent/sharingbtn/whatsappbtn/Whatsappbtn';
import Multisharebtn from '../../commoncomponent/sharingbtn/multishare/Multisharebtn';
import Likebtn from '../../commoncomponent/componentbtn/likebtn/Likebtn';
import Userprofile from '../../commoncomponent/userprofile/Userprofile';

export default function Newsreels({item}) {
  const [likebtn, setLikebtn] = useState(false);

  return (
    <View style={styles.maincontainer}>

      <View style={styles.btnsgroup}>
        <View>
          <TouchableOpacity onPress={() => setLikebtn(!likebtn)}>
            <View>
              {likebtn ? <Dislikebtn /> : <Likebtn />}
              </View>
          </TouchableOpacity>
        </View>

        <View>
          <Whatsappbtn />
        </View>

        <View>
          <Multisharebtn />
        </View>
      </View>
      
      <View style={styles.userprofile}>
        <Userprofile/>
      </View>

      <Video
        source={test1}
        style={styles.videostyle}
        resizeMode="cover"
        controls={false}
        repeat={true}
      />
    </View>
  );
}

// const styles = StyleSheet.create({
//   maincontainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   video: {
//     width: '100%',
//     height: '100%',
//   },
// });
