import {View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import Btn from '../../components/BtnPrimary'


const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"100%",
    backgroundColor:"#F2F2F2",
  },
  title:{
    fontSize:65,
    fontWeight:"700",
    textAlign:"center",
    marginTop:112
  },
  heroWrap:{
    alignItems:"center"
  },
  buttonWrap:{
    paddingHorizontal:31
  }
})

const GetStarted = ({navigation}) => {

  const handleSubmit=()=>{
    navigation.navigate("welcome")
  }
    return (
    <View style={styles.container}>
      <View>
          <Text style={styles.title}>Coffee for Everyone</Text>
      </View>
      <View style={styles.heroWrap}>
          <Image
            style={{width:400 ,height:450}}
            source={require("../../images/herro-started.png")}
            resizeMode={'contain'}
          />
      </View >
      <View style={styles.buttonWrap}>
          <Btn title="Get started" onPress={handleSubmit} background="#6A4029" color="#F6F6F9" />
      </View>
    </View>
    )
}

export default GetStarted