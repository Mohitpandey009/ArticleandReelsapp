import {View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
export default function Playgame() {
  return (
    <View style={{flex: 1}}>
      <WebView
        source={{
          uri: 'https://2dbfqan57.play.gamezop.com/game/B1fSpMkP51m/Bottle-Shoot',
        }}
        style={{flex: 1}}
      />
    </View>
  );
}
