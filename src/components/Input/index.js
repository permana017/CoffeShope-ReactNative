


import { View, Text, StyleSheet,TextInput} from 'react-native'
import React from 'react'

const Input = ({label, placeholder, value, onChange,type, defaultValue}) => {
  return (
    <View style={styles.inputWrap}>
        <Text style={styles.labelInput}>{label}</Text>
        <TextInput
            style={styles.input}
            editable
            placeholder={placeholder}
            value={value}
            keyboardType={type}
            defaultValue={defaultValue}
            dataDetectorTypes="calendarEvent"
            onChangeText={onChange}
        />
    </View>
  )
}


const styles = StyleSheet.create({
    inputWrap:{
        width:"100%",
        marginBottom:27
      },
      labelInput:{
        fontSize:16,
        fontWeight:"700",
        color:"#9F9F9F"
      },
      input:{
        paddingVertical: 10,
        borderBottomWidth:1,
        borderColor:"#9F9F9F", 
        fontSize:16,
        fontWeight:"400"
      }
})


export default Input