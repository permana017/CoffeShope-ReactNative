

import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ToastAndroid} from 'react-native'
import React,{useState} from 'react'
import PagerView from 'react-native-pager-view';
import Btn from '../../components/BtnPrimary';
import styles from './style';
import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';




const Payment = ({navigation}) => {

    const [data, setData] = useState([])
    console.log(data.img);


    const route = useRoute()
    const total = route.params.caption

    const handlePayment = () =>{
        // console.log('helo world');
          axios({
            url: 'http://192.168.43.225:5000/api/v1/order',
            method: 'post',
            data: data
        }).then((res)=> {
            ToastAndroid.show('Payment Success', ToastAndroid.SHORT)
              navigation.navigate("Home")
        }).catch((err)=> {
            ToastAndroid.show(err.response.data.message, ToastAndroid.SHORT)
          //   console.log(err.response.data.message)
        })
      }


    const getDataAuth = async () => {
        try {
          const value = await AsyncStorage.getItem('@dataOrder')
          const idData = JSON.parse(value)
          console.log("valuse", idData);
          setData(idData)
        
        } catch(e) {
          // error reading value
        }
      }

    useEffect(() => {
        getDataAuth()
    }, [])


    const [active, setActive] = useState("");
    return (
        <ScrollView style={{flex:1}}>
            <View style={styles.payment}>
                <View style={styles.productWrap}>
                    <Text style={styles.title}>Product</Text>
                    <View style={styles.cardProduct}>
                        <View style={styles.containerProd}>
                            <View style={{flexDirection:"row"}}>
                                <Image
                                style={{width:54, height:64, borderRadius:20}}
                                source={{uri:`http://192.168.43.225:5000/upload/images/${data.img}`}}
                                resizeMode={'contain'}
                                />
                                <View>
                                    <Text style={styles.prodTitle}>{data.title}</Text>
                                    <Text style={styles.prodTitle}>x {data.qty}</Text>
                                    <Text style={styles.prodTitle}>{data.size}</Text>
                                </View>
                            </View>
                            <Text>IDR {data.price}</Text>
                        </View>
                    </View>
                    <View style={styles.paymentWrap}>
                        <Text style={styles.title}>Delivery methods</Text>
                        <View style={styles.card}>
                            <TouchableOpacity style={styles.deliveryMethod} onPress={()=> setActive("Door delivery")}>
                                <View style={active === "Door delivery"  ? styles.borderRadioActive : styles.borderRadio}>
                                    {active === "Door delivery" ? <View style={styles.dotChecked}></View> : null}
                                </View>
                                <View style={styles.methodText}>

                                    <Text >Door delivery</Text>
                                </View>
                            </TouchableOpacity>  
                            <TouchableOpacity style={styles.deliveryMethod} onPress={()=> setActive('Pick up at store')}>
                                <View style={active === 'Pick up at store' ? styles.borderRadioActive : styles.borderRadio}>
                                    {active === 'Pick up at store'? <View style={styles.dotChecked}></View> : null}
                                </View>
                                <View style={styles.methodText}>

                                    <Text >Pick up at store</Text>
                                </View>
                            </TouchableOpacity>  
                            <TouchableOpacity style={styles.deliveryMethod} onPress={()=> setActive('Dine in')}>
                                <View style={active === 'Dine in' ? styles.borderRadioActive : styles.borderRadio}>
                                    {active === 'Dine in' ? <View style={styles.dotChecked}></View> : null}
                                </View>
                                <View style={[styles.methodText,{borderBottomWidth:0}]}>

                                    <Text>Dine in</Text>
                                </View>
                            </TouchableOpacity>  
                        </View>
                    </View>
                </View>
                <View style={styles.wrapMyCard}>
                    <Text style={[styles.title, {marginLeft:37}]}>My Card</Text>
                    <PagerView style={styles.viewPager} initialPage={0}>
                        <View style={styles.page} key="1">
                            <Image
                            style={{width:350, height:300}}
                            source={require("../../images/atm-bri.png")}
                            resizeMode={'contain'}
                            />
                        </View>
                        <View style={styles.page} key="2">
                            <Image
                                style={{width:350, height:300}}
                                source={require("../../images/atm-bri.png")}
                                resizeMode={'contain'}
                                />
                        </View>
                    </PagerView>
                </View>
                <View style={styles.totalWrap}>
                    <Text style={styles.totalText}>Total</Text>
                    <Text style={styles.totalPrice}>{total}</Text>
                </View>
                <View style={styles.btnsubmit}>
                    <Btn onPress={handlePayment} title='Pay Now' background="#6A4029" color="#F6F6F9"  />
                </View>
            </View>
        </ScrollView>
    )
}

export default Payment