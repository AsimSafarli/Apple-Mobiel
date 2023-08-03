import React from 'react'
import { Text, View ,Image,StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
function Navbar() {
  return (
    <View style={styles.main}>
     <View style={styles.icons}>
     <Image  source={require("../../assets/logoapple.png")}/>
     <Text style={styles.mainText}>iStore</Text>
     </View>
     <View style={styles.icons}>
     <View style={styles.icon}><MaterialIcons name="favorite-outline" size={24} color="black" /></View>
     <View style={styles.icon}><AntDesign name="shoppingcart" size={24} color="black" /></View>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
    
},
mainText:{
    fontSize:17,
    fontWeight:'bold'
}
 ,
  icons:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:"center",
    gap:10
  }
,
    icon:{
        alignItems:'center',
        justifyContent:"center",
        height:37,
        width:37,
        padding:"1px",
        borderRadius:"50%",
        backgroundColor:"#fff"
    }
})
export default Navbar