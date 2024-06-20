import {View, TouchableOpacity, FlatList,Dimensions,Text} from 'react-native';
import React, {useState, useEffect,useRef} from 'react';
import axios from 'axios';
import newsscreen from '../../../assets/css/newsscreencss/Newsscreens';
import Header from '../../commoncomponent/headercmp/Header';
import Headerads from '../../commoncomponent/headerads/Headerads';
import Newstitleimg from '../../newscomponent/newstitleimg/Newstitleimg';
import Newsheading from '../../newscomponent/newsheading/Newsheading';
import Newsparagraph from '../../newscomponent/newsparagraph/Newsparagraph';
import Readmorebtn from '../../commoncomponent/componentbtn/readmorebtn/Readmorebtn';
import Sharenewsbtn from '../../commoncomponent/componentbtn/sharenewscmp/Sharenewsbtn';
import Whatsappbtn from '../../commoncomponent/sharingbtn/whatsappbtn/Whatsappbtn';
import Postads from '../../commoncomponent/postads/Postads';
import Reelsvideocss from '../../../assets/css/reelsscreen/Reelsvideocss'
const API = 'http:192.168.0.7:3001';
const HEIGHT = Dimensions.get('window').height;

export default function Newsscreens({navigation}) {
  const [allnewsdata, setAllnewsdata] = useState([]);
  const [showskipads, setShowskipads] = useState(null);
  const [screenenable,setScreenenable] = useState(true)
  const [currentindex, setCurrentindex] = useState(0);
  const [count, setCount] = useState(10);
  const countRef = useRef(null)

  const getnewsdata = async () => {
    try {
      axios
        .get(`${API}/news/getallarticaldata`)
        .then(res => {
          // console.log('the all news data ', res.data);
          const data = res.data.data.reverse()
          setAllnewsdata(data);
        })
        .catch(e => {
          console.log('server responce error ', e);
        });
    } catch (error) {
      console.log('the all error in getting data ', error);
    }
  };

  useEffect(() => {
    getnewsdata();
  }, []);

  const responed = event => {
    let contentOffset = event.nativeEvent.contentOffset;
    let index = Math.round(contentOffset.y / HEIGHT);
    setCurrentindex(index);
  };

  // its used for ads
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


  return (
    <View style={newsscreen.maincontainer}>
      <View style={newsscreen.headercontainer}>
        <Header />
      </View>

      <View style={newsscreen.listcontainer}>
        <FlatList
          data={allnewsdata}
          scrollEnabled={screenenable}
          keyExtractor={item => item._id}
          renderItem={({item, index}) =>{
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
            <View style={newsscreen.maincontainer}>
              <View style={newsscreen.headeradscontainer}>
                <Headerads />
              </View>
        
              <View style={newsscreen.adsimgcontainer}>
                <Newstitleimg API={API} img={item.articalimage} />
              </View>
        
              <View style={newsscreen.headingcontainer}>
                <Newsheading title={item.title} language={item.language} />
              </View>
        
              <View style={newsscreen.paracontainer}>
                <Newsparagraph
                  discription={item.discription}
                  language={item.language}
                />
              </View>
        
              <View style={newsscreen.btngroupcontainer}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Fullnews', {url: item.fullnewslink})
                  }>
                  <View>
                    <Readmorebtn />
                  </View>
                </TouchableOpacity>
        
                <View style={newsscreen.sharebtncontainer}>
                  <View>
                    <Sharenewsbtn />
                  </View>
                  <View>
                    <Whatsappbtn />
                  </View>
                </View>
              </View>
            </View>
          )}}
          height="100%"
          pagingEnabled
          onScroll={responed}
        />
      </View>
    </View>
  );
}
