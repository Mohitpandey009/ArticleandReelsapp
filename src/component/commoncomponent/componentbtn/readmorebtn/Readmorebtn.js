import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Componentbtn from '../../../../assets/css/componrntbtns/Componentbtn';

export default function Readmorebtn() {
  return (
    <View style={Componentbtn.readmore}>
    
      <View>
        <Text style={Componentbtn.readmoretext}>Read Full</Text>
      </View>
    
    </View>
  );
}
