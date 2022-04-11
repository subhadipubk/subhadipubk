import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {useState, useEffect} from 'react';
import Moment from 'moment';
const HelloWorldApp = () => {
  const [color, setColor] = useState('green');
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [post, setPostData] = useState({});
  // console.log(post);
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json',
    )
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
    let requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({title: 'React Hooks POST Request Example'}),
    };
    fetch('https://reqres.in/api/posts', requestOptions)
      .then(response => response.json())
      .then(json => setPostData(json))
      .catch(error => console.error(error));
  }, []);
  const itemData = ({item, key}) => {
    return (
      <View>
        <Text style={{color: 'red'}}>{item.id + '. ' + item.title}</Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, color: 'green', textAlign: 'center'}}>
            {data.title}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: 'green',
              textAlign: 'center',
              paddingBottom: 10,
            }}>
            Articles:
          </Text>
          {/* <View>
            {data.articles.map((item, key) => (
              <View key={key}>
                <Text style={{color: 'blue'}}>
                  {item.id + '. ' + item.title}
                </Text>
              </View>
            ))}
          </View> */}
          <FlatList
            data={data.articles}
            keyExtractor={({id}, index) => id}
            renderItem={item => itemData(item)}
          />
          {/* <FlatList
            data={data.articles}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.id + '. ' + item.title}</Text>
            )}
          /> */}
          <Text style={{color: 'blue'}}>
            {Moment(post.createdAt).format('DD MMM YYYY, h:mm:ss a')}
          </Text>
          <Text style={{color: 'blue'}}>{post.title}</Text>
        </View>
      )}
    </View>
    // </SafeAreaView>
  );
};
export default HelloWorldApp;
