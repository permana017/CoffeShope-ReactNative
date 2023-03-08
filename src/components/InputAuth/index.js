

import { TextInput, StyleSheet} from 'react-native'
import React from 'react'

const  InputAuth = ({placeholder, onChange, keyboardType, mt, mb})=> {
    return(
    <TextInput
        style={[styles.input,{marginTop:mt, marginBottom:mb}]}
        onChangeText={onChange}
        // defaultValue="haii"
        placeholder={placeholder}
        keyboardType={keyboardType}
        />
    )
}

const styles = StyleSheet.create({
    input:{
        borderBottomWidth:1,
        paddingVertical:10,
        fontSize:15,
        fontWeight:"400"
    }
  })

export default InputAuth
