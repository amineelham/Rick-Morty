import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import HomeScreen from './src/HomeScreen';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});


export default function App() {
  return (
    <ApolloProvider client={client}>
    <View style={styles.container}>
      <Text style={styles.title}>My Countries App</Text>
      <HomeScreen/>
    </View>
    </ApolloProvider>
  );
}

export const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    paddingLeft:20,
    paddingRight: 20
  },
});