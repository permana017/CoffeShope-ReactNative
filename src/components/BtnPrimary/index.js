

import { View, Text, StyleSheet , TouchableOpacity} from 'react-native'
import React from 'react'


const styles = StyleSheet.create({
    checkoutBtn:{
        width:"100%",
        height:70,
        borderRadius:20,
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
        marginTop:15
    },
})

const Btn = ({onPress, title, background, color}) => {
  return (
      <TouchableOpacity backgroundColor="red" style={[styles.checkoutBtn, {backgroundColor:background}]} onPress={onPress}>
            <Text style={{fontSize:17, fontWeight:"900", color:color}}>{title}</Text>
        </TouchableOpacity>
  )
}

export default Btn