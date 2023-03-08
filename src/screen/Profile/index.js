
import { View, Text, StyleSheet, Image, ScrollView, FlatList,TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'
import Icons from '@expo/vector-icons/Ionicons';
import IconFeather from '@expo/vector-icons/Feather';
import Btn from '../../components/BtnPrimary';
import styles from './style';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';






const Profile = ({ navigation: { navigate }}) => {

  const [userId, setUserId] = useState({
    token:"",
    id:""
  })

const [dataUser, setDataUser] = useState([])
const [dataHistory, setDataHistory] = useState([])

// console.log("data history", dataHistory[0].img);


// console.log("data ahdi",dataUser);
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
        setDataUser(res.data.data)
      })
      .catch(err => console.log(err))
  }else{
      // console.log("user iddd", userId);
  } 
}, [userId])


useEffect(() => {
  if (userId.id != '' && userId.id !== undefined) {
      axios
      .get(`http://192.168.43.225:5000/api/v1/order/${userId.id}`)
      .then(res => {
        // console.log(res.data.data);
        setDataHistory(res.data.data)
      })
      .catch(err => console.log(err))
  }else{
      // console.log("user iddd", userId);
  } 
}, [userId])


  const Avatar = () =>{
    if (dataUser.img == null || dataUser.img == "") {
        return (<Image
        style={{borderRadius:100, width:100,height:100}}
        source={require("../../images/profile-default.png")}
        resizeMode={'contain'}
        />)
    } else {
        return (<Image
        style={{borderRadius:100, width:100,height:100}}
        source={{uri:`http://192.168.43.225:5000/upload/images/${dataUser.img}`}}
        resizeMode={'contain'}
        />)
        
    }
}


  return (
    <View style={styles.containerProfile}>
      <View style={styles.wrapInfo}>
          <View style={{position:"relative"}}>
            <TouchableOpacity onPress={()=>navigate("edit-profile", {caption:dataUser})}  style={styles.editCircle}>
              <IconFeather name="edit-2" size={20} color="#fff" />
            </TouchableOpacity>
            <Avatar/>
          </View>
          <Text style={[styles.username, {marginTop:17,marginBottom:8}]}>{dataUser.username}</Text>
          <Text style={styles.infoText}>{dataUser.email}</Text>
          <Text style={styles.infoText}>{dataUser.phone}</Text>
          <Text style={styles.infoText}>{dataUser.address}</Text>
      </View>
      <View style={styles.wrapHistory}>
        <View style={styles.wrapHistoryText}>
          <Text style={[styles.username, {marginTop:0}]}>Order History</Text>
          <TouchableOpacity onPress={()=>navigate("history", {caption:dataHistory})}>
            <Text style={styles.infoText}>See more</Text>
          </TouchableOpacity>
        </View>
        <View >
          <FlatList horizontal
              showsHorizontalScrollIndicator={false}
              data={dataHistory}
              renderItem={({item})=>{
                  // console.log(item.images[0]);
                  return(
                    <Image
                    style={{width:64, height:66, borderRadius:20, marginLeft:25}}
                    source={{uri:`http://192.168.43.225:5000/upload/images/${item.img}`}}
                    resizeMode={'contain'}
                  />
                  )
              }}/>
        </View>
      </View>
      <View style={styles.wrapList}>
          <TouchableOpacity style={styles.btnList}>
              <Text style={styles.username}>Edit Password</Text>
              <Icons name="chevron-forward" size={28} color="#6A4029" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnList}>
              <Text style={styles.username}>FAQ</Text>
              <Icons name="chevron-forward" size={28} color="#6A4029" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnList}>
              <Text style={styles.username}>Help</Text>
              <Icons name="chevron-forward" size={28} color="#6A4029" />
          </TouchableOpacity>
          <Btn title="Save" background='#6A4029' color="#F6F6F9"  />
      </View>
    </View>
  )
}



export default Profile