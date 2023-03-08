
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, ToastAndroid } from 'react-native'
import React,{useState, useEffect} from 'react'
import Icons from '@expo/vector-icons/Ionicons';
import IconFeather from '@expo/vector-icons/Feather';
import Btn from '../../components/BtnPrimary';
import Input from '../../components/Input';
import { useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';





const EditProfile = ({navigation}) => {

  const route = useRoute()
  const dataUser = route.params.caption


  const [image, setImage] = useState(null);
  const [formEdit, setFormEdit] = useState({
    username:"",
    email:"",
    phone:"",
    address:"",
    img:""
  })


  // console.log("dat",dataUser.img);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setFormEdit({...formEdit,img:result.assets});
    }
  };


  const handleEdit = () => {
      const body = new FormData();
      body.append('username',formEdit.username);
      body.append('email', formEdit.email);
      body.append('phone', formEdit.phone);
      body.append('address', formEdit.address);
      // body.append('img', formEdit.img);
      body.append("img", {
          uri: formEdit.img[0].uri,
          name: `profile-${Date.now()}.jpg`,
          type: 'image/jpeg'
      });
      axios.patch(`http://192.168.43.225:5000/api/v1/users/${dataUser.id}`, body, {
        method: 'PATCH',
        headers: {
          'Content-type': 'multipart/form-data',
        }
      }).then(function (response) {
        ToastAndroid.show('Success Update Data', ToastAndroid.SHORT)
        console.log(response.data.data);
        })
        .catch(function (error) {
          ToastAndroid.show('Failed Update Data', ToastAndroid.SHORT)
            console.log(error);
        })
    }

    // console.log(formEdit.img);

  const Avatar = () =>{
    if (formEdit.img == null || formEdit.img == "" || formEdit.img == undefined) {
        if (dataUser.img == null || dataUser.img == "" || dataUser.img == undefined) {
          return (<Image
            style={{borderRadius:130, width:130,height:130}}
            source={require("../../images/profile-default.png")}
            resizeMode={'contain'}
          />)
        } else {
          return (<Image
            style={{borderRadius:130, width:130,height:130}}
            source={{ uri: `http://192.168.43.225:5000/upload/images/${dataUser.img}` }}
            resizeMode={'contain'}
          />)
        }
    } else {
      return (<Image
        source={{ uri: formEdit.img[0].uri }}
        style={{borderRadius:130, width:130,height:130}}
        // source={require("../../images/Profile.png")}
        resizeMode={'contain'}
      />) 
    }
  }


  return (
    <ScrollView style={styles.containerProfile}>
      <View style={styles.wrapImage}>
          <View style={{position:"relative"}}>
            <TouchableOpacity onPress={pickImage}  style={styles.editCircle}>
              <IconFeather name="edit-2" size={20} color="#fff" />
            </TouchableOpacity>
            <Avatar/>
          </View>
      </View>
      <View style={styles.containerInput}>
        <Input label="Name :" defaultValue={dataUser.username}
            onChange={(e)=>setFormEdit({...formEdit, username:e })}
        />
        <Input
            label="Email Adress :"
            defaultValue={dataUser.email}
            type="email-address"
            onChange={(e)=>setFormEdit({...formEdit, email:e }
            )}/>
        <Input label="Phone Number :" defaultValue={dataUser.phone} type="numeric"
            onChange={(e)=>setFormEdit({...formEdit, phone:e })}
        />
        <Input label="Date of Birth" defaultValue="20.02.20" />
        <Input label="Delivery Adress :" defaultValue={dataUser?.address} onChange={(e)=>setFormEdit({...formEdit, address:e })}/>
        <Btn
            title="Save and Update"
            background='#6A4029'
            color="#F6F6F9"
            onPress={handleEdit}/>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  containerProfile:{
    backgroundColor:"#F5F5F8",
    width:"100%",
    height:"100%"

  },
  wrapImage:{
    marginTop:40,
    alignItems:"center",
    paddingBottom:28,
  },
  editCircle:{
    width:40,
    height:40,
    borderRadius:40,
    backgroundColor:"#6A4029",
    alignItems:"center",
    justifyContent:"center",
    position:'absolute',
    zIndex:2,
    right:0,
    bottom:0
  },
  containerInput:{
    paddingHorizontal:50,
  },

})

export default EditProfile