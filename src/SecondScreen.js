import React from "react";
import{View, Text, Button, StyleSheet} from 'react-native';

const Details = (props) => {
  return(
    <View style={styles.container}>
      <Text>Episode id :{props.routes.params.id}</Text>
    </View>
  )
}
export default Details;

export const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})