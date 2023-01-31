import { Text, FlatList, Pressable, View, SafeAreaView, Image, Button, TouchableOpacity } from "react-native";
import { useQuery } from "@apollo/client";
import { EPISODES_QUERY } from "./gql/Query";
import { styles } from "../App";
import React from 'react';
import SecondScreen from './SecondScreen';

export default function HomeScreen({ navigation }) {
  const { data, loading, error } = useQuery(EPISODES_QUERY);

  const EpisodesItem = ({ episode }) => {
    const { name, airdate } = episode;
    const { image } = episode;
    const { id } = episode;
    return (
      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Details" ,{id : data.episodes.results})}>
        <View style={styles.avatarContainer}> 
        <Image source={require('../images/episodeI.jpg')} style={styles.avatar} />
        </View>
        <Text style={styles.name } >{ name }</Text>
      </TouchableOpacity>
    );
  };
  
  if (error) return `Error! ${error.message}`;

  if (loading) {
    return <Text>Fetching data...</Text>;
  }
  return (
    
    <>
    <SafeAreaView>
      <FlatList
        ListHeaderComponentStyle={styles.listHeader}
        ListHeaderComponent={HeaderComponent}
        ItemSeparatorComponent={ itemSeparator }
        data={ data.episodes.results }
        renderItem={({ item }) => <EpisodesItem episode={item} />}
        keyExtractor={( item, index) => index}
      />
    </SafeAreaView>
    </>
  );
}
