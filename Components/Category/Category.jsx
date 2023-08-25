import React from 'react'
import {  FlatList, View,StyleSheet } from 'react-native';
import data from '../../Data/category.json'
import CategoryItem from '../CategoryItem/CategoryItem';
function Category() {
  return (
    <View style={styles.data}>
     <FlatList
       horizontal
       showsHorizontalScrollIndicator={false} 
        data={data}
        renderItem={({item}) => 
        <CategoryItem title={item.name}  />
       }
        keyExtractor={item => item.id}
        ItemSeparatorComponent={()=> <View style={styles.separator}/>}
      />
    </View>
  )
}
 const styles = StyleSheet.create({
  data:{
    flexDirection: "row",
    alignItems: "center", 
    paddingVertical: 10, 
  },
  separator: {
    width: 10, 
  }
 })
export default Category