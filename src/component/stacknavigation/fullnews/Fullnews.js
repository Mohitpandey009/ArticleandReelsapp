import { View } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';

export default function Fullnews({route}) {
  const { url } = route.params;
  return (
    <View style={{flex: 1,}}>
      <WebView source={{ uri: url }} style={{flex: 1,}} />
    </View>
  );
}


