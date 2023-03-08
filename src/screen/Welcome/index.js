

import { View, Text, Image } from 'react-native'
import React from 'react'
import Btn from '../../components/BtnPrimary'
import styles from './style'




const Welcome = ({navigation}) => {
    return (
        <View style={styles.container}>
          <View>
              <Text style={styles.title}>Welcome!</Text>
              <Text style={styles.desc}>Get a cup of coffee for free only {`\n`} for new user</Text>
          </View>
          <View style={styles.heroWrap}>
              <Image
                style={{width:350 ,height:430}}
                source={require("../../images/hero-welcome.png")}
                resizeMode={'contain'}
              />
          </View >
          <View style={styles.buttonWrap}>
              <Btn title="Create New Account" background="#6A4029" color="#F6F6F9" onPress={()=>navigation.navigate("signup")}  />
              <Btn title="Login" onPress={()=>navigation.navigate("login")} background="#FFBA33" />
          </View>
        </View>
        )
}

export default Welcome