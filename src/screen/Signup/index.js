import { View, Text, ToastAndroid, Image, ScrollView} from 'react-native'
import React,{useState} from 'react'
import Btn from '../../components/BtnPrimary'
import InputAuth from '../../components/InputAuth'
import styles from './style'
import axios from 'axios'





const Signup = ({navigation}) => {


    const [formLogin, setFormLogin] = useState({
        username:"",
        password:"",
        email:"",
        phone:"",
    })
    // console.log(formLogin)

    const handleLogin = () =>{
      // console.log('helo world');
        axios({
          url: 'http://192.168.43.225:5000/api/v1/auth/register',
          method: 'post',
          data: formLogin
      }).then((res)=> {
          ToastAndroid.show('SignUp Success', ToastAndroid.SHORT)
            navigation.navigate("login")
      }).catch((err)=> {
          ToastAndroid.show(err.response.data.message, ToastAndroid.SHORT)
        //   console.log(err.response.data.message)
      })
    }


    return (
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.heroWrap}>
                <Image
                    style={{width:300 ,height:300,}}
                    source={require("../../images/hero-signup.png")}
                    resizeMode={'contain'}
                />
                <Text style={styles.title}>Sign{`\n`}Up</Text>
            </View >
            <View style={styles.buttonWrap}>  
                <InputAuth onChange={(e)=>setFormLogin({...formLogin, username:e})} placeholder="Enter your name" keyboardType="default"/>
                <InputAuth onChange={(e)=>setFormLogin({...formLogin, email:e})} placeholder="Enter your email adress" keyboardType="email-address" mt={28}/>
                <InputAuth onChange={(e)=>setFormLogin({...formLogin, password:e})} placeholder="Enter your password" keyboardType="visible-password" mt={28}/>
                <InputAuth onChange={(e)=>setFormLogin({...formLogin, phone:e})} placeholder="Enter your phone number" keyboardType="numeric" mt={28} mb={30} />
                <Btn title="Create Account" background="#6A4029" color="#F6F6F9" onPress={handleLogin} />
            </View>
            </View>
        </ScrollView>
        )
}

export default Signup