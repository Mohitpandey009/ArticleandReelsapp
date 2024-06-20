import {View, FlatList, Dimensions, TouchableOpacity,Image,Text} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import Video from 'react-native-video';
// import Newsreels from '../../screen/newsreelsscreen/Newsreels';
import Reelsvideocss from '../../../assets/css/reelsscreen/Reelsvideocss';
import Header from '../../commoncomponent/headercmp/Header';
import Dislikebtn from '../../commoncomponent/componentbtn/dislikebtn/Dislikebtn';
import Likebtn from '../../commoncomponent/componentbtn/likebtn/Likebtn';
import Whatsappbtn from '../../commoncomponent/sharingbtn/whatsappbtn/Whatsappbtn';
import Multisharebtn from '../../commoncomponent/sharingbtn/multishare/Multisharebtn';
import Userprofile from '../../commoncomponent/userprofile/Userprofile';
import Postads from '../../commoncomponent/postads/Postads';


const API = 'http:192.168.0.7:3001';
const HEIGHT = Dimensions.get('window').height;

export default function Showvideo() {
  const [likebtn, setLikebtn] = useState(false);
  const [allnewsreels, getAllnewsreels] = useState([]);
  const [currentindex, setCurrentindex] = useState(0);
  const [showskipads, setShowskipads] = useState(null);
  const [screenenable,setScreenenable] = useState(true)
  const [count, setCount] = useState(10);
  const countRef = useRef(null)

  const getallreeldata = async () => {
    try {
      axios
        .get(`${API}/news/getallnewsreeldata`)
        .then(res => {
          // console.log('the all reels data ', res.data);
          const data = res.data.data.reverse();
          getAllnewsreels(data);
        })
        .catch(e => {
          console.log('the error from server for reels data ', e);
        });
    } catch (error) {
      console.log('the error getting reels data ', error);
    }
  };

  useEffect(() => {
    getallreeldata();
  }, []);

  const responed = event => {
    let contentOffset = event.nativeEvent.contentOffset;
    let index = Math.round(contentOffset.y / HEIGHT);
    setCurrentindex(index);
  };

  useEffect(() => {
    if (currentindex !== 0 && (currentindex + 1) % 5 === 0) {
      setCount(10); // Reset count to 10 each time the condition is met
      setScreenenable(false)
      if (countRef.current) {
        clearInterval(countRef.current); // Clear any existing interval
      }

      countRef.current = setInterval(() => {
        setCount(prevCount => {
          if (prevCount > 1) {
            setScreenenable(false)
            return prevCount - 1;
          } else {
            clearInterval(countRef.current);
            setShowskipads(true); // Show skip ad message
            setScreenenable(true)
            return 10; // Reset count to 10
          }
        });
      }, 1000);
    } else {
      if (countRef.current) {
        clearInterval(countRef.current); // Clear the interval when condition is not met
      }
      setCount(10); // Reset count to 10
      setShowskipads(false);
    }

    return () => clearInterval(countRef.current); // Cleanup on component unmount
  }, [currentindex]);
  

// console.log("the showskipads is ",showskipads);

  return (
    <View style={Reelsvideocss.maincontainer}>

      <View>
        <Header />
      </View>

      <View style={Reelsvideocss.videocontainer}>
        <FlatList
          data={allnewsreels}
          keyExtractor={item => item._id}
          scrollEnabled={screenenable}
          
          renderItem={({item, index}) => {
            if (index !== 0 && (index + 1) % 5 === 0) {
              return (
                <View style={Reelsvideocss.videocontainer}>
                  <Postads/>
                  <View style={Reelsvideocss.skipadstextview}>
                   
                    {showskipads ? <Text style={Reelsvideocss.skipadstext}>Swipe up for Skip this ad..</Text> : <Text style={Reelsvideocss.skipadstext}>second interval... {count}</Text>  }
                
                  </View>
                </View>
              );
            }
            return (
              <View style={Reelsvideocss.videocontainer}>
                <View style={Reelsvideocss.maincontainer}>
                  <View style={Reelsvideocss.btnsgroup}>
                    <View>
                      <TouchableOpacity onPress={() => setLikebtn(!likebtn)}>
                        <View>{likebtn ? <Dislikebtn /> : <Likebtn />}</View>
                      </TouchableOpacity>
                    </View>

                    <View>
                      <Whatsappbtn />
                    </View>

                    <View>
                      <Multisharebtn />
                    </View>
                  </View>

                  <View style={Reelsvideocss.userprofile}>
                    <Userprofile name={item.name} />
                  </View>

                  <Video
                    source={{uri: `${API}/${item.reelsvideo}`}}
                    style={Reelsvideocss.videostyle}
                    resizeMode="cover"
                    controls={false}
                    repeat={true}
                    paused={currentindex == index ? false : true}
                    muted={currentindex == index ? false : true}
                  />
                </View>
              </View>
            );
          }}

          height="100%"
          pagingEnabled
          onScroll={responed}
        />
      </View>
    </View>
  );
}
