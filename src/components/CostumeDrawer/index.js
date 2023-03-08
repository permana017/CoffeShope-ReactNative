import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import { Text, View, Image, StyleSheet} from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import axios from 'axios';




function CustomDrawerContent(props) {


    const [userId, setUserId] = useState({
        token:"",
        id:""
    })

    const [dataUser, setDataUser] = useState({
        username:"",
        email:"",
        img:""
    })
    

    // console.log("data in drawer new",dataUser);
    const getDataAuth = async () => {
        try {
        const value = await AsyncStorage.getItem('@userData')
        let idData = JSON.parse(value)
        setUserId({...userId,
            token:idData.token,
            id:idData.user.id})
        } catch(e) {
            // error reading value
        }
    }
    useEffect(()=> {
        if (userId.id == '') {
        getDataAuth()
       }else{
        // console.log("data userr", dataUser);
       }
    },[])

    useEffect(() => {
        if (userId.id != '' && userId.id !== undefined) {
            axios
            .get(`http://192.168.43.225:5000/api/v1/users/${userId.id}`)
            .then(res => {
              // console.log(res.data.data);
              setDataUser({...dataUser,
                  username:res.data.data.username,
                  email:res.data.data.email,
                  img:res.data.data.img
              })
            })
            .catch(err => console.log(err))
        }else{
            // console.log("user iddd", userId);
        } 
      }, [userId])
    


    const Avatar = () =>{
        if (dataUser.img == null || dataUser.img == "") {
            return (<Image
            style={{width:140, height:140, borderRadius:140}}
            source={require("../../images/profile-default.png")}
            resizeMode={'contain'}
            />)
        } else {
            return (<Image
            style={{width:140, height:140, borderRadius:140}}
            source={{uri:`http://192.168.43.225:5000/upload/images/${dataUser.img}`}}
            resizeMode={'contain'}
            />)
            
        }
    }
    

    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.wraping}>
                <Avatar/>
                <Text style={styles.title}>{dataUser.username}</Text>
                <Text style={styles.titleEmail}>{dataUser.email}</Text>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

export default CustomDrawerContent
