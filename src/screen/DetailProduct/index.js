import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Button, ToastAndroid} from 'react-native'
import React, { useEffect, useState} from 'react'
import styles from './style'
import { useRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'


const DetailProduct = ({navigation}) => {
    const route = useRoute()
    const data = route.params.caption
    const [dataCart, setDataCart] = useState({
        user_id:"",
        product_id:data.id,
        title:data.tittle,
        price:data.price,
        size:"",
        qty:"",
        img:data.images[0].filename
    })
    // console.log(dataCart);

    const getDataAuth = async () => {
        try {
          const value = await AsyncStorage.getItem('@userData')
        //   console.log("valuse", value);
          const idData = JSON.parse(value)
          setDataCart({...dataCart,user_id:idData.user.id})
        
        } catch(e) {
          // error reading value
        }
      }

    useEffect(() => {
        getDataAuth()
    }, [])
        
    const handleCart = () =>{
        if (dataCart.size === "") {
            ToastAndroid.show('Choose a size', ToastAndroid.SHORT)
        }else{
            AsyncStorage.setItem('@dataOrder', JSON.stringify(dataCart))
            navigation.navigate("Cart")
        }
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.prodDetail}>
                <View style={styles.section}>
                    <View style={styles.sectionInner}>
                        <View style={styles.cardPrice}>
                            <Text style={styles.price}>{data.price}</Text>
                        </View>
                        <View style={styles.cardImgProd}>
                            <Image
                                style={{
                                    width: 206,
                                    height: 200,
                                    borderRadius: 200,
                                    margin: -100
                                }}
                                // source={require("../../images/Cold-Brew.png")}
                                source={{uri:`http://192.168.43.225:5000/upload/images/${data.images[0].filename}`}}
                                resizeMode={'contain'}/>
                            <Text style={styles.prodTitle}>{data.tittle}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.descDelivery}>Delivery only on 
                            <Text
                                style={{fontWeight: "700",color: "#6A4029"}}> Monday {`\n`}to friday </Text>
                                at <Text style={{fontWeight: "700",color: "#6A4029"}}> 1 - 7 pm</Text></Text>
                            <Text style={styles.descProd}>
                            {data.description}
                            </Text>
                    </View>
                    <View style={{alignItems:"center", paddingLeft:23, paddingRight:23}}>
                        <Text style={[styles.btnText, {marginTop:25, marginBottom:25}]}>Choose a size</Text>
                        <View style={styles.cotainerBtn} >
                            <TouchableOpacity style={dataCart.size === "R" ? styles.BtnSizeActive : styles.BtnSize} onPress={()=>setDataCart({...dataCart, size:"R"})}>
                                <Text style={dataCart.size === "R" ? styles.btnActive : styles.btnText}>R</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={dataCart.size === "L" ? styles.BtnSizeActive : styles.BtnSize} onPress={()=>setDataCart({...dataCart, size:"L"})}>
                                <Text style={dataCart.size === "L" ? styles.btnActive : styles.btnText}>L</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={dataCart.size === "XL" ? styles.BtnSizeActive : styles.BtnSize}  onPress={()=>setDataCart({...dataCart, size:"XL"})}>
                                <Text style={dataCart.size === "XL" ? styles.btnActive : styles.btnText}>XL</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.BtnAdd} onPress={handleCart}>
                            <Text style={[styles.btnText,{color:"white"}]}>Add to cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default DetailProduct