import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import styles from './style'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native'


const Cart = ({navigation}) => {

    const [dataOrder, setDataOrder] = useState("")
    console.log("data order", dataOrder);
    const [qty, setQty] = useState(1)
    const tax = (Number(dataOrder.price) * qty) * (10/100)
    const itemTotal = Number(dataOrder.price) * qty
    // console.log(dataOrder);
    const dataCheckout = {
        user_id:dataOrder.user_id,
        product_id:dataOrder.product_id,
        title:dataOrder.title,
        price:tax + itemTotal,
        size:dataOrder.size,
        qty:qty,
        img:dataOrder.img
    }

    const getDataAuth = async () => {
        try {
          const value = await AsyncStorage.getItem('@dataOrder')
          console.log("valuse order by deatil", value);
          const idData = JSON.parse(value)
          setDataOrder(idData)
        
        } catch(e) {
          // error reading value
        }
      }

    useEffect(() => {
        getDataAuth()
    }, [])

    // console.log("data last",dataCheckout);

    const handleCheckout = () =>{
        AsyncStorage.setItem('@dataOrder', JSON.stringify(dataCheckout))
        navigation.navigate("Checkout", {caption:dataCheckout.price})
    }

  return (
    <ScrollView>
        <View style={styles.cart}>
            <View style={styles.cardCart}>
                <Image
                style={{width:69, height:69, borderRadius:69, marginRight:18}}
                source={{uri:`http://192.168.43.225:5000/upload/images/${dataOrder.img}`}}
                // source={require("../../images/Cold-Brew.png")}
                resizeMode={'contain'}
                />
                <View style={styles.titleWrap}>
                    <Text style={styles.titleProd}>{dataOrder.title}</Text>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{fontSize:16, color:"#6A4029"}}>{dataOrder.price}</Text>
                        <View style={styles.wrapQty}>
                            <TouchableOpacity onPress={()=>setQty(qty - 1)}>
                                <Text style={styles.textQty}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.textQty}>{qty}</Text>
                            <TouchableOpacity onPress={()=>setQty(qty + 1)}>
                                <Text style={styles.textQty}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.couponBtn}>
                <Text style={{fontSize:15, fontWeight:"600"}}>Apply Delivery Coupons</Text>
                <Image
                style={{width:23, marginLeft:20}}
                source={require("../../images/arrow.png")}
                resizeMode={'contain'}
                />
            </TouchableOpacity>
            <View style={styles.formTotal}>
                <View style={styles.wrapTextList}>
                    <Text  style={styles.textList}>Item Total</Text>
                    <Text style={styles.textListPrice}>IDR {itemTotal}</Text>
                </View>
                <View style={styles.wrapTextList}>
                    <Text  style={styles.textList}>Delivery Charge  </Text>
                    <Text style={styles.textListPrice}>IDR {20000}</Text>
                </View>
                <View style={styles.wrapTextList}>
                    <Text  style={styles.textList}>Tax</Text>
                    <Text style={styles.textListPrice}>IDR { tax}</Text>
                </View>
                <View style={[styles.wrapTextList, {marginTop:31, marginBottom:0}]}>
                    <Text  style={styles.textTotal}>Total :</Text>
                    <Text style={styles.textTotal}>IDR {itemTotal + tax}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.checkoutBtn} onPress={handleCheckout}>
            {/* <TouchableOpacity style={styles.checkoutBtn} onPress={()=> navigation.navigate("Checkout")}> */}
                <Text style={{fontSize:15, fontWeight:"800"}}>CHECKOUT</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

export default Cart