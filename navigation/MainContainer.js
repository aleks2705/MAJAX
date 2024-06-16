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
import Dakar from './screens/Dakar';
import SaintNazaire from './screens/SaintNazaire';
import Montpellier from './screens/Montpellier';
import Troyes from './screens/Troyes';
import Aero from './screens/Formations/aero';
import Management from './screens/Formations/engmana';
import Numerique from './screens/Formations/ingenum';
import Sante from './screens/Formations/ingesante';
import Materiaux from './screens/Formations/materiaux';
import Data from './screens/Formations/data';
import Environnement from './screens/Formations/engenvir';
import DesignIndus from './screens/Formations/designindus';

//Creation of Screen names
const homeName = 'Home';
const resultsName = 'Results';
const settingsName = 'Settings';
const testsName = 'Tests';
const campusName='Campus';
const formationName='Formation';
const pariscachanName='ParisCachan';
const nouveautestName='NouveauTest';
const troyesName='Troyes';
const montpellierName='Montpellier';
const saintnazaireName='SaintNazaire';
const dakarName='Dakar';
const aeroName='Aero';
const managementName='Management';
const numeriqueName='Numerique';
const santeName='Sante';
const materiauxName='Materiaux';
const dataName='Data';
const environnementName='Environnement';
const designindusName='DesignIndus';

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

      {/*Campus*/}
        <Stack.Screen name={pariscachanName} component={ParisCachan} options={{headerShown: false}}/>
        <Stack.Screen name={nouveautestName} component={NouveauTest} options={{headerShown: false}}/>
        <Stack.Screen name={troyesName} component={Troyes} options={{headerShown: false}}/>
        <Stack.Screen name={montpellierName} component={Montpellier} options={{headerShown: false}}/>
        <Stack.Screen name={saintnazaireName} component={SaintNazaire} options={{headerShown: false}}/>
        <Stack.Screen name={dakarName} component={Dakar} options={{headerShown: false}}/>
      
      {/*Formations*/}
        <Stack.Screen name={aeroName} component={Aero} options={{headerShown: false}}/>
        <Stack.Screen name={managementName} component={Management} options={{headerShown: false}}/>
        <Stack.Screen name={numeriqueName} component={Numerique} options={{headerShown: false}}/>
        <Stack.Screen name={santeName} component={Sante} options={{headerShown: false}}/>
        <Stack.Screen name={materiauxName} component={Materiaux} options={{headerShown: false}}/>
        <Stack.Screen name={dataName} component={Data} options={{headerShown: false}}/>
        <Stack.Screen name={environnementName} component={Environnement} options={{headerShown: false}}/>
        <Stack.Screen name={designindusName} component={DesignIndus} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  
  export default MainContainer;