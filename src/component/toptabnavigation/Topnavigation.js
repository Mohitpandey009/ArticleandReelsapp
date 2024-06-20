import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Showvideo from '../tabnavigationcmp/showvideo/Showvideo';
import Shownews from '../tabnavigationcmp/shownews/Shownews';
import Showgames from '../tabnavigationcmp/showgames/Showgames';
import Newsicon from '../../icons/navigatoricon/newsicon/Newsicon';
import Videoicon from '../../icons/navigatoricon/videoicon/Videoicon';
import Gameicon from '../../icons/navigatoricon/gameicon/Gameicon';
import Newsscreens from '../screen/newsscreen/Newsscreens';
import Gamescreen from '../screen/gamescreen/Gamescreen';

const Tab = createMaterialTopTabNavigator();

export default function Topnavigation() {
  return (
    <Tab.Navigator 
        tabBarPosition='bottom'
        screenOptions={{
            tabBarIndicatorStyle:{
                position:'absolute',
                bottom:0,
                height:6
            },
            swipeEnabled:false,
            tabBarShowLabel:false,
            tabBarStyle: { 
                backgroundColor: 'red',
                // color:'white'
            },
        }}
    >
      <Tab.Screen 
      name="Showvideo" 
      component={Showvideo} 
      options={{
        tabBarIcon:()=>(
            <Videoicon/>
        )
      }}
      />
      <Tab.Screen name="Shownews" component={Newsscreens} options={{
        tabBarIcon:()=>(
            <Newsicon/>
        )
      }}/>
      <Tab.Screen name="Showgames" component={Gamescreen} options={{
        tabBarIcon:()=>(
            <Gameicon/>
        )
      }}/>
    </Tab.Navigator>
  );
}