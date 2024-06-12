import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';


//Import screens
import HomeScreen from './screens/HomeScreen'
import ResultsScreen from './screens/ResultsScreen'
import SettingsScreen from '../components/SettingsScreen'
import TestsScreen from './screens/TestsScreen'
import CampusScreen from './screens/CampusScreen'
import FormationScreen from './screens/FormationScreen'
import ParisCachan from './screens/ParisCachan'
import NouveauTest from './screens/NouveauTest';

//Creation of Screen names
const homeName = 'Home';
const resultsName = 'Results';
const settingsName = 'Settings';
const testsName = 'Tests';
const campusName='Campus';
const formationName='Formation';
const pariscachanName='ParisCachan';
const nouveautestName='NouveauTest';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
  
          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === resultsName) {
            iconName = focused ? 'list' : 'list-outline';
          } else if (rn === settingsName) {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (rn === testsName) {
            iconName = focused ? 'bar-chart' : 'bar-chart-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name={homeName} component={HomeScreen} options={{headerShown: false}} />
      <Tab.Screen name={testsName} component={TestsScreen} options={{headerShown: false}}/>
      <Tab.Screen name={resultsName} component={ResultsScreen} options={{headerShown: false}}/>
      <Tab.Screen name={settingsName} component={SettingsScreen} options={{headerShown: false}}/>
    </Tab.Navigator>
);

const MainContainer = () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}}/>
        <Stack.Screen name={campusName} component={CampusScreen} options={{headerShown: false}}/>
        <Stack.Screen name={formationName} component={FormationScreen} options={{headerShown: false}}/>
        <Stack.Screen name={pariscachanName} component={ParisCachan} options={{headerShown: false}}/>
        <Stack.Screen name={nouveautestName} component={NouveauTest} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  
  export default MainContainer;