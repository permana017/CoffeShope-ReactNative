import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList} from 'react-native'
import React from 'react'
import styles from './style'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native'


const History = ({navigation}) => {

    const route = useRoute()
    const dataHistory = route.params.caption

    console.log("data last",dataHistory);

    const handleCheckout = () =>{

    }

  return (
    <ScrollView>
        <View style={styles.cart}>
            <Text style={styles.textTitle}>Order History</Text>
            <FlatList vertical
                showsVeticalScrollIndicator={false}
                data={dataHistory}
                renderItem={({item})=>{
                    // console.log(item.images[0]);
                    return(
                        <View style={styles.cardCart}>
                            <Image
                            style={{width:69, height:69, borderRadius:69, marginRight:18}}
                            source={{uri:`http://192.168.43.225:5000/upload/images/${item.img}`}}
                            // source={require("../../images/Cold-Brew.png")}
                            resizeMode={'contain'}
                            />
                            <View style={styles.titleWrap}>
                                <Text style={styles.titleProd}>{item.title}</Text>
                                <Text style={{fontSize:16, color:"#6A4029"}}>IDR {item.price}</Text>
                                <Text style={{fontSize:16, color:"#6A4029"}}>{item.qty} X</Text>
                            </View>
                        </View>
                    )
                }}/>
        </View>
    </ScrollView>
  )
}

export default History