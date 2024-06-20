// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Fullnews from './src/component/stacknavigation/fullnews/Fullnews';
import Playgame from './src/component/stacknavigation/playgame/Playgame';
import Topnavigation from './src/component/toptabnavigation/Topnavigation';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Topnavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Fullnews" component={Fullnews} />
        <Stack.Screen name="Playgame" component={Playgame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
