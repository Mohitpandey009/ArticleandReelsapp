import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from '../../../assets/css/headercss/Headercss';
import headerlogo from '../../../assets/images/aajtak.png';
import headermenu from '../../../assets/images/menu.png';
import Headermodel from '../headermodal/Headermodel';

export default function Header() {
  const [displymodel, setDisplaymodel] = useState(false);

  const checkdisplaymodel = () => {
    setDisplaymodel(!displymodel);
  };

  return (
    <View style={styles.headercontainer}>
      <View style={styles.headercontainerlogo}>
        <Image source={headerlogo} style={styles.headerlogo} />
      </View>
      <View style={styles.headertextview}>
        <Text style={styles.headertext}>For You</Text>
      </View>
      <View style={styles.headercontainerlogo}>
        <TouchableOpacity onPress={checkdisplaymodel}>
          <Image source={headermenu} style={styles.headermenu} />
        </TouchableOpacity>
      </View>

      <View style={styles.modal}>
      {displymodel ? <Headermodel /> : null}
      </View>
    </View>
  );
}
