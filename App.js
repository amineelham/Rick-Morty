import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, AppRegistry } from 'react-native';
import {data} from './data'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { useQuery, gql } from '@apollo/client';

export default function App() {

  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  });
  const App = () => (
    <ApolloProvider client={client}>
      <MyRootComponent />
    </ApolloProvider>
  );
  AppRegistry.registerComponent('MyApplication', () => App);


  const episode = ({item}) => {
  return(
    <View style={ styles.item }>
      <View style={ styles.avatarContainer }>
        <Image source={item.image}  style={ styles.avatar }/>
      </View>
      <Text style={styles.name}>{item.name}</Text>
    </View>
    )
  }
  const HeaderComponent = () => {
    return(
      <Text style={styles.listHeadline}>Episodes</Text>
    )
  }

  const ItemSeparator = () => {
    return(
      <View style={styles.seperator} />
    )
  }
 
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponentStyle ={styles.listHeader}
        ListHeaderComponent = {HeaderComponent}
        data = {data}
        renderItem ={episode} 
        ItemSeparatorComponent = { ItemSeparator}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item:{
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    paddingVertical: 13,
  },
  avatarContainer:{
    backgroundColor:'#D9D9D9',
    borderRadius:100,
    height:89,
    width:89,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:2,
  },
  
  avatar:{
    height:55,
    width:55,
  },
  name:{
    fontWeight:'600',
    fontSize: 16,
    marginLeft: 13,
  },

  listHeadline:{
    color:'#822E9B',
    fontSize: 30,
    fontWeight:'bold',
  },
  listHeader:{
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  seperator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CCC'
  },
});
