import React, { useState } from 'react';
import { Button, View, Text,StyleSheet,SafeAreaView,TouchableOpacity,Image,ScrollView,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// screens import //
import InfoPage from './screens/InfoPage'
import AddPage from './screens/AddBook'
import PageRead from './screens/PageRead'
// screens import //


function HomeScreen({ navigation }) {

  
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.MainSection}>
          <Image
            style={styles.WelcomeLogo}
            source={require('./screens/Gallary/menubook.png')}
          /> 
          <Text style={styles.WelcomeTxt}> Welcome to the bookPalace</Text>

          <TouchableOpacity style={styles.ContinueButton} onPress={() => navigation.navigate('InfoPage')}>
            <Text style={styles.ContinueButtonTxt}> Info Page </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ContinueButton} onPress={() => navigation.navigate('AddPage')}>
            <Text style={styles.ContinueButtonTxt}> Add Page </Text>
          </TouchableOpacity>
          
        </View>

    </SafeAreaView>
  );
}



const Stack = createNativeStackNavigator();



function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Cart" >
        <Stack.Screen name="" component={HomeScreen} options={{ headerShown: true }} />
        <Stack.Screen name="InfoPage" component={InfoPage} options={{ headerShown: true }} />
        <Stack.Screen name="AddPage" component={AddPage} options={{ headerShown: true }} />
        <Stack.Screen name="PageRead" component={PageRead} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  MainSection:{
    top:-120,
    left:80,
  },
  WelcomeLogo:{
    width:200,
    height:200,
  },
  WelcomeTxt:{
    fontSize:20,
    width:200,
    padding:20,
  },
  ContinueButton:{
    backgroundColor:"#527a4d",
    width:100,
    height:50,
    borderRadius:10,
    top:50,
    left:40,
  },
  ContinueButtonTxt:{
    fontSize:20,
    color:"white",
    top:9,
  },
});