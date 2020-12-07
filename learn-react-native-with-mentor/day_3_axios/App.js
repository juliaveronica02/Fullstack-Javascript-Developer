import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import HomeScreen from './components/homeScreen'
import HomeScreen from "./components/homeScreen2"
import Playing from "./components/playingMovie/playing"
import Search from "./components/SearchMovie/search"
import Details from "./components/Details/Detail"
import {createStackNavigator} from "@react-navigation/stack"
import {Provider} from "react-redux"
import {store} from "./components/Redux/store"

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name ="Home" component={HomeScreen}/>
      <HomeStack.Screen name ="Details" component={Details} />
    </HomeStack.Navigator>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Playing" component={Playing} />
      <Tab.Screen name="Search" component={Search} />

    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <Provider store={store}>

    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    </Provider>
  );
};


export default App;
