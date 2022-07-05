import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  Picker
} from "react-native";

import db from "../config";
import firebase from "firebase";
import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import { SearchBar, ListItem, Input } from "react-native-elements";
import { Appbar } from 'react-native-paper';


class CompareScreen extends Component{
 state= {user: '', user1: ''}
 updateUser = (user) => {
   this.setState({ user: user})
 }
 updateUser1 = (user1) => {
   this.setState({ user1: user1})
 }
  render() {
    return(
      <View style={styles.container}>
       <Appbar.Header style={{ backgroundColor: '#fff' }}>
          <Appbar.Content
            style={{ display: 'flex', alignItems: 'center' }}
            title="Electric Car App"
          />
      
        </Appbar.Header>
       <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}
         style={{ height: 50, width: 150 , marginLeft:10, marginTop: 10}}>
           <Picker.Item label = "Choose One" value = ""/>
           <Picker.Item label = "Tesla Model 3" value = "$44,990" />
           
           <Picker.Item label = "Tesla Model Y" value = "$58,990"/>
           <Picker.Item label = "Tesla Model X" value = "$104,990"/>
           <Picker.Item label = "Tesla Model S" value = "$94,990"/>
        </Picker>


       <Picker selectedValue = {this.state.user1} onValueChange = {this.updateUser1}
         style={{ height: 50, width: 150 , marginLeft:175, marginTop: -50}}>
           <Picker.Item label = "Choose One" value = ""/>
           <Picker.Item label = "BMW iX" value = "$83,200"/>
           <Picker.Item label = "Tesla Model Y" value = <Image
              source={require("logo.png")}
              style={styles.santaImage}
            />/>
           <Picker.Item label = "Tesla Model X" value = "$104,990"/>
           <Picker.Item label = "Tesla Model S" value = "$94,990"/>
        </Picker>
        <Text style = {styles.value}> Price: </Text><Text style ={styles.text}>{this.state.user}</Text>
        <Text style ={styles.text1}>{this.state.user1}</Text>
        
      </View>
    )
  } 
}
export default CompareScreen

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: "#6fc0b8"
  },
  text: {
    fontSize:20,
    alignSelf: 'left',
    marginLeft:50,
    color: 'green'
  },
  text1: {
    fontSize:20,
    alignSelf: 'right',
    marginLeft: 175,
    color: 'green',
    marginTop:-30
  },
  
  loginBox: {
    width: "80%",
    height: RFValue(50),
    borderWidth: 1.5,
    borderColor: "#ffffff",
    fontSize: RFValue(20),
    paddingLeft: RFValue(10)
  },
  button: {
    width: "80%",
    height: RFValue(50),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(25),
    backgroundColor: "#ffff",
    shadowColor: "#000",
    marginBottom: RFValue(10),
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16
  },
  buttonText: {
    color: "#32867d",
    fontWeight: "200",
    fontSize: RFValue(20)
  },
  label: {
    fontSize: RFValue(13),
    color: "#717D7E",
    fontWeight: "bold",
    paddingLeft: RFValue(10),
    marginLeft: RFValue(20)
  },
  formInput: {
    width: "90%",
    height: RFValue(45),
    padding: RFValue(10),
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "grey",
    paddingBottom: RFValue(10),
    marginLeft: RFValue(20),
    marginBottom: RFValue(14)
  },
  registerButton: {
    width: "75%",
    height: RFValue(50),
    marginTop: RFValue(20),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(3),
    backgroundColor: "#32867d",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: RFValue(10)
  },
  
  registerButton1: {
    width: "75%",
    height: RFValue(50),
    marginTop: RFValue(20),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(3),
    backgroundColor: "#32867d",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: RFValue(25)
  },
  
  registerButton2: {
    width: "75%",
    height: RFValue(50),
    marginTop: RFValue(20),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(3),
    backgroundColor: "#32867d",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: RFValue(25)
  },
  
  registerButtonText: {
    fontSize: RFValue(23),
    fontWeight: "bold",
    color: "#fff"
  },
  cancelButtonText: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "#32867d",
    marginTop: RFValue(10)
  },
  registerButton: {
    width: "75%",
    height: RFValue(50),
    marginTop: RFValue(20),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(3),
    backgroundColor: "#32867d",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: RFValue(10)
  },
  registerButtonText: {
    fontSize: RFValue(23),
    fontWeight: "bold",
    color: "#fff",
  },
  scrollview: {
    flex: 1,
    backgroundColor: "#fff"
  },
  signupView: {
    flex: 0.05,
    justifyContent: "center",
    alignItems: "center"
  },
  signupText: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "#32867d"
  },
  santaView: {
    flex: 0.85,
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  santaImage: {
    width: "100%",
    height: "50%",
    marginTop: 50,
    padding: 75,
    marginRight: 175
  },
  santaImage1: {
    width: "37.5%",
    height: "37.5%",
    resizeMode: "stretch",
    marginTop: 50,
    padding: 50,
    marginLeft: 175

  },
  santaImage2: {
    width: "50%",
    height: "50%",
    resizeMode: "stretch",
    marginTop: 50,
    padding: 50,
    marginLeft: 175

  },
  santaImage3: {
    width: "50%",
    height: "50%",
    resizeMode: "stretch",
    marginTop: -150,
    padding: 50,
    marginLeft: 25

  },
  textInput: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center"
  },
  bookImage: {
    width: "100%",
    height: RFValue(220)
  }, 
  value: {
    marginTop: 10,
    fontSize: 12
  }
})