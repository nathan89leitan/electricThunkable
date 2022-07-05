import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ToastAndroid
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import firebase from 'firebase';
import { Appbar } from 'react-native-paper';
import {
  Ionicons,
  AntDesign,
  SimpleLineIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  const [selectedItems, setselectedItems] = useState([]);
  const [selectedItems1, setselectedItems1] = useState([]);
  useEffect(() => {
    
    const FetchData = async () => {
      const db = firebase.firestore();
      await db.collection('Writing').onSnapshot((data) => {
        setselectedItems(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
        setselectedItems1(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
    };
    FetchData();
  }, []);
  const [search,setSearch] = useState('')
  const Deeleete = async (id) => {
    const db = firebase.firestore();
    db.collection('Writing').doc(id).delete();
      ToastAndroid.show(
    'Deleted Successfully',
       ToastAndroid.SHORT
     );
  };

 const searchData = (text) => {
    const newData = selectedItems1.filter(item => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1
    });

    setselectedItems(newData)
    setSearch(text)
  }
  return (
    <ScrollView>
      <View>
        <Appbar.Header style={{ backgroundColor: '#fff' }}>
          <Appbar.Content
            style={{ display: 'flex', alignItems: 'center' }}
            title="Read Reviews"
          />
      
        </Appbar.Header>
         
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>  
            <TextInput
                  style={{
                    padding: 10,
                    width: 280,
                    borderWidth: 1,
                    borderRadius: 5,
                    marginTop: 30
                  }}
                  placeholder="Search Here"
                  multiline
                  value={search}
                  onChangeText={(text)=>searchData(text)}
                />
          {selectedItems.map((val) => {
            return (
              <View style={{ marginTop: 10, textAlign: 'justify' }}>
               
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: 5,
                    marginTop:10,
                  }}>
                  {val.name}
                </Text>
                <Text
                  style={{
                    fontSize: 22,
                    textAlign: 'center',
                  }}>
                  {val.story}
                  <AntDesign
                    name="delete"
                    size={24}
                    style={{ paddingLeft: 10, marginTop: 5 }}
                    color="black"
                    onPress={() => Deeleete(val.id)}
                  />
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

class Search extends React.Component {
  state = {
    text: '',
    name: '',
  };
  pressed = () => {
    if (this.state.text.length > 10 && this.state.name !== '') {
      const db = firebase.firestore();
      db.collection('Writing').add({
        story: this.state.text.toUpperCase().trim(),
        name: this.state.name.toUpperCase().trim(),
      });
      alert('Added');
      this.props.navigation.navigate('Home');
      this.setState({
        text: '',
        name: '',
      });
    } else {
      alert('There Should Be Minimum 10 Letters');
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Appbar.Header style={{ backgroundColor: '#fff' }}>
          <Appbar.Content
            style={{ display: 'flex', alignItems: 'center' }}
            title="Read Review"
          />
        </Appbar.Header>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TextInput
            style={{
              padding: 10,
              width: 280,
              borderWidth: 1,
              borderRadius: 5,
              marginBottom: 10,
            }}
            placeholder="Name Of The Story"
            value={this.state.name}
            onChangeText={(name) => this.setState({ name })}
          />
          <TextInput
            style={{
              padding: 10,
              width: 280,
              borderWidth: 1,
              borderRadius: 5,
            }}
            placeholder="Write A Story"
            value={this.state.text}
            onChangeText={(text) => this.setState({ text })}
            multiline
          />

          <TouchableOpacity
            style={{
              margin: 10,
              padding: 10,
              backgroundColor: '#6fc0b8',
              width: 275,
              textAlign: 'center',
            }}
            onPress={this.pressed}>
            <Text
              style={{
                color: '#000000',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'read',
          tabBarIcon: () => <AntDesign name="book" size={24} color="#483D8B" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Writing',
          tabBarIcon: () => (
            <FontAwesome name="pencil" size={24} color="#483D8B" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
