import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import HomeScreen from './src/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});


export default function App() {
  let [fontsLoaded] = useFonts({
    'buffalo':require('./assets/fonts/Buffalo.otf'),
  })
  HeaderComponent = () => {
    return <Text style={styles.listHeadline}>RICK AND MORTY EPISODES</Text>
  } 
  itemSeparator = () => {
    return <View style={styles.separator} />
  }
  return (
    <ApolloProvider client={client}>
    <SafeAreaView>
      <HomeScreen/>
    </SafeAreaView>
    </ApolloProvider>
  );
}

export const styles = StyleSheet.create({
  item:{
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    paddingVertical:13,
  },
  avatarContainer:{
    backgroundColor:"#D9D9D9",
    height:89,
    width:89,
    justifyContent:"center",
    alignItems:"center",
    marginLeft:6,
  },
  avatar:{
    height:55,
    width:55,
  },
  name:{
    flex: 0.8,
    fontWeight:"600",
    fontSize:16,
    marginLeft:13,
  },
  listHeader:{
    height:55,
    alignItems:"center",
    justifyContent:"center",
  },
  listHeadline:{
    paddingTop:16,
    color:"black",
    fontSize:21,
    fontWeight:"bold",
  },
  separator:{
    borderTopWidth: 1,
    height:1,
    width:"100%",
    backgroundColor:"#5F5F5F",
  },
  date:{
    fontWeight:"600",
    fontSize:16,
    marginLeft:13,
  },
});