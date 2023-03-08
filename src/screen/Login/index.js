

import { View, Text, ToastAndroid, Image, ScrollView} from 'react-native'
import React,{useState, useEffect} from 'react'
import Btn from '../../components/BtnPrimary'
import InputAuth from '../../components/InputAuth'
import styles from './style'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'




 




const Login = ({navigation,getData}) => {

    const [formLogin, setFormLogin] = useState({
        email:"",
        password:""
    })

    const handleLogin = () =>{
        // console.log('helo world');
          axios({
            url: 'http://192.168.43.225:5000/api/v1/auth/login',
            method: 'post',
            data: formLogin
        }).then((res)=> {
            AsyncStorage.setItem('@userData', JSON.stringify(res.data.data))
            getData(true)
            ToastAndroid.show('Login Success', ToastAndroid.SHORT)
            // navigation.navigate("Home")
            // console.log(res);
        }).catch((err)=> {
            ToastAndroid.show(err.response.data.message, ToastAndroid.SHORT)
            // console.log(err.response)
        })
      } 
    return (
        <View style={styles.container}>
            <View style={styles.heroWrap}>
                <Image
                    style={{width:165 ,height:328}}
                    source={require("../../images/hero-login.png")}
                    resizeMode={'contain'}
                />
                <Text style={styles.title}>Log{`\n`}in</Text>
            </View >
            <View style={styles.buttonWrap}>  
                <InputAuth onChange={(e)=>setFormLogin({...formLogin, email:e})} placeholder="Enter your email adress" keyboardType="email-address"/>
                <InputAuth onChange={(e)=>setFormLogin({...formLogin, password:e})} placeholder="Enter your password" keyboardType="visible-password" mt={28}/>
                <Text style={styles.textForgot}>Forgot password?</Text>
                <Btn title="Login" background="#6A4029" color="#F6F6F9" onPress={handleLogin} />
                <View style={styles.hrLine}>
                    <Text style={styles.hrText}>or login in with</Text>
                </View>
                <Btn title="Login with Google" background="#FFFFFF"   />
            </View>
        </View>
    )
}

export default Login