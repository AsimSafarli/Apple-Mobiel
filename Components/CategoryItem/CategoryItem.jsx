import React from "react";
import { View,Text,StyleSheet } from "react-native";
const CategoryItem = ({title}) => (
    <View style={styles.item} >
      <Text style={styles.itemtext}>{title}</Text>
    </View>
  );

  const styles = StyleSheet.create({
    item:{
      width:88,
      height:88,
      backgroundColor:"#242424",
      borderRadius:16
    },
    itemtext:{
      color:'white'
  
    }
  })
  export default CategoryItem