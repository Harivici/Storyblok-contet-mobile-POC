import React from 'react'
import 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native'
import Home from './routes/home.js';
import Blog from './routes/blog.js';
import Post from './routes/post.js';
import TaxiRide from './routes/taxi.js'
const Tab = createBottomTabNavigator();

export default class Routes extends React.Component {
   render() {
      return (
         <NavigationContainer>
            <Tab.Navigator>
               <Tab.Screen name="home" component={Home} initial={true} 
                  options={{
                     tabBarIcon: ({ color, size }) => (
                     <MaterialCommunityIcons name="home" color={color} size={size} />
                     ),
               }}/>
               <Tab.Screen name="blog" component={Blog} 
                  options={{
                  tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="blogger" color={color} size={size} />
                  ),
               }}/>
               <Tab.Screen name="post" component={Post} 
               options={{
                  tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="post" color={color} size={size} />
                  ),
               }}/>
               <Tab.Screen name="taxi ride" component={TaxiRide} 
               options={{
                  tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="taxi" color={color} size={size} />
                  ),
               }}/>
            </Tab.Navigator>
         </NavigationContainer>
      )
   }
}
const styles = StyleSheet.create({
   mainview: {
      height: '80vh'
   },
   scene: {
      backgroundColor: '#F5FCFF',
      shadowOpacity: 1,
      shadowRadius: 3,
    },
})