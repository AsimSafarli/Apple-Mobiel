import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import {  View,StyleSheet} from 'react-native';
import Category from '../../Components/Category/Category';

function Home() {
  return (
    <View style={styles.home}>
        <Navbar/>
        <Category/>
        <Banner/>
    </View>
  )
}
const styles = StyleSheet.create({
    home:{
        marginHorizontal:10,
    marginVertical:20
    }
})
export default Home