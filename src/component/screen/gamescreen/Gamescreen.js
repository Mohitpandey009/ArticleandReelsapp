import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Gamescreencss from '../../../assets/css/gamescreencss/Gamescreencss';
import gameimg from '../../../assets/images/gameimg.png';
import Header from '../../commoncomponent/headercmp/Header';
export default function Gamescreen({navigation}) {
  return (
    <View style={Gamescreencss.maincontainer}>

      <View>
        <Header />
      </View>

      <View style={Gamescreencss.gamecontainer}>
        
        <View style={Gamescreencss.imgcontainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Playgame')}>
            <Image source={gameimg} style={Gamescreencss.gameimg} />
          </TouchableOpacity>
        </View>

        <View style={Gamescreencss.imgcontainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Playgame')}>
            <Image source={gameimg} style={Gamescreencss.gameimg} />
          </TouchableOpacity>
        </View>

        <View style={Gamescreencss.imgcontainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Playgame')}>
            <Image source={gameimg} style={Gamescreencss.gameimg} />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}
