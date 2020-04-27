import * as React from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';

import TestHome from '../screens/TestHome.js'
import ListButtons from '../screens/Controls/ListButtons.js'

import ListPhoto from '../screens/ListPhoto.js'
import ListPhotoListView from '../screens/ListPhotoListView.js'
import ListPhotoPaging from '../screens/ListPhotoPaging.js'
import DetailScreen from '../screens/DetailScreen';





function SettingsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    );
  }
  
  function ProfileScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
    );
  }
  
  function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button style={styles.buttonContainer}
          title="List of Photo Paging"
          onPress={() => navigation.navigate('ListPhotoPaging')}
        />
  
        <Button style={styles.buttonContainer}
          title="List View Test"
          onPress={() => navigation.navigate('ListPhotoListView')}
        />      
  
        <Button style={styles.buttonContainer}
          title="Flat List Photos"
          onPress={() => navigation.navigate('ListPhoto')}
        />      
      </View>
    );
  }
  
  function DemoControls({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Demo Controls</Text>
        <Button
          title="List Buttons"
          onPress={() => navigation.navigate('ListButtons')}
        />
  
        <Button
          title="Go to test"
          onPress={() => navigation.navigate('Test')}
        />      
  
        <Button
          title="List Photos"
          onPress={() => navigation.navigate('ListPhoto')}
        />      
  
      </View>
    );
  }
  
  function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details')}
        />
      </View>
    );
  }
  
const Tab = createBottomTabNavigator();
const SettingsStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ControlsStack = createStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
        <Tab.Navigator >
        <Tab.Screen name="Apps" options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}>
            {() => (
              <HomeStack.Navigator>
                <HomeStack.Screen name="Home" component={HomeScreen} />
                <HomeStack.Screen name="Details" component={DetailsScreen} />
                <HomeStack.Screen name="ListPhotoPaging" component={ListPhotoPaging} />
                <HomeStack.Screen name="ListPhotoListView" component={ListPhotoListView} />
                <HomeStack.Screen name="ListPhoto" component={ListPhoto} />
                <HomeStack.Screen name="DetailScreen" component={DetailScreen} />

              </HomeStack.Navigator>
            )}
          </Tab.Screen> 
          <Tab.Screen name="Settings" options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}> 
            {() => (
              <SettingsStack.Navigator>
                <SettingsStack.Screen name="Settings" component={SettingsScreen}/>
                <SettingsStack.Screen name="Profile" component={ProfileScreen} />
              </SettingsStack.Navigator>
            )}
          </Tab.Screen>
       
          <Tab.Screen name="Controls" options={{
          title: 'Controls',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}> 
            {() => (
              <ControlsStack.Navigator>
                <ControlsStack.Screen name="DemoControls" component={DemoControls} />
                <ControlsStack.Screen name="ListButtons" component={ListButtons} />
                <ControlsStack.Screen name="Test" component={TestHome} />
                <ControlsStack.Screen name="ListPhoto" component={ListPhoto} />
              </ControlsStack.Navigator>
            )}
          </Tab.Screen>     
          </Tab.Navigator>
      </NavigationContainer>
  
    )
}



const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    width:120,
    height:40,
    marginTop: 10,
    marginBottom: 20,
  },    
});
