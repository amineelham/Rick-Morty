import { Text, FlatList, Pressable, View, SafeAreaView, Image } from "react-native";
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { EPISODES_QUERY } from "./gql/Query";
import { styles } from "../App";

export default function HomeScreen() {
  const { data, loading, error } = useQuery(EPISODES_QUERY);

  const EpisodesItem = ({ episode }) => {
    const { name, air_date } = episode;
    const { image } = episode;
    return (
      <View style={styles.item}>
        <View style={styles.avatarContainer}>
        <Image source={{ uri: image }} style={styles.avatar} />
        </View>
        <Text style={styles.name } >{ name }</Text>
      </View>
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
