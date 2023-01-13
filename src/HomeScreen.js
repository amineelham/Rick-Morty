import { Text, FlatList, Pressable, View } from "react-native";
import React, { useState } from "react";
import { styles } from "../App";
import { useQuery } from "@apollo/client";
import { EPISODES_QUERY } from "./gql/Query";

export default function HomeScreen() {
  const { data, loading } = useQuery(EPISODES_QUERY); //execute query

  const EpisodesItem = ({ episodes }) => {
    const { name } = name; //get the name of episodes

    return (
      <View>
        <Text>{ name }</Text> //display name of continent
      </View>
    );
  };

  if (loading) {
    return <Text>Fetching data...</Text> //while loading return this
  }

  return (
      <FlatList
        data={data.results}
        renderItem={({ item }) => <EpisodesItem episode={item} />}
        keyExtractor={(item, index) => index}
      />
  );
}