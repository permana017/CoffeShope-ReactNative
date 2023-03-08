import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import Btn from '../../components/BtnPrimary'
import styles from './style'
import { useRoute } from '@react-navigation/native'





const Checkout = ({navigation}) => {

    const route = useRoute()
    console.log(route.params.caption);

    const price = route.params.caption


    const onSubmit = () =>{
        navigation.navigate("Payment", {caption:price})
    }

    const [active, setActive] = useState("");
    return (
        <View style={styles.checkout}>
            <Text style={styles.title}>
                Delivery
            </Text>
            <View style={styles.cardWrap}>
                <View style={{flexDirection: 'row',justifyContent: "space-between"}}>
                    <Text style={styles.titleAddress}>Address details</Text>
                    <Text style={styles.titleChange}>change</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.street}>Iskandar Street</Text>
                    <Text style={styles.streetDetail}>Km 5 refinery road oppsite republic road, effurun, Jakarta</Text>
                    <Text style={styles.phoneNum}>+62 81348287878</Text>
                </View>
            </View>
            <Text style={styles.deliveryTitle}>Delivery methods</Text>
            <View style={styles.cardWrap}>   
                <View style={styles.card}>
                    <TouchableOpacity style={styles.deliveryMethod} onPress={()=> setActive("Door delivery")}>
                        <View style={active === "Door delivery"  ? styles.borderRadioActive : styles.borderRadio}>
                            {active === "Door delivery" ? <View style={styles.dotChecked}></View> : null}
                        </View>
                        <Text style={styles.methodText}>Door delivery</Text>
                    </TouchableOpacity>  
                    <TouchableOpacity style={styles.deliveryMethod} onPress={()=> setActive('Pick up at store')}>
                        <View style={active === 'Pick up at store' ? styles.borderRadioActive : styles.borderRadio}>
                            {active === 'Pick up at store'? <View style={styles.dotChecked}></View> : null}
                        </View>
                        <Text style={styles.methodText}>Pick up at store</Text>
                    </TouchableOpacity>  
                    <TouchableOpacity style={styles.deliveryMethod} onPress={()=> setActive('Dine in')}>
                        <View style={active === 'Dine in' ? styles.borderRadioActive : styles.borderRadio}>
                            {active === 'Dine in' ? <View style={styles.dotChecked}></View> : null}
                        </View>
                        <Text style={[styles.methodText,{borderBottomWidth:0}]}>Dine in</Text>
                    </TouchableOpacity>  
                </View>
            </View>
            <View style={styles.cardWrap}>
                <View style={styles.wrapTotal}>
                    <Text style={styles.totalText}>Total</Text>
                    <Text style={styles.totalPrice}>IDR {price}</Text>
                </View> 
                <Btn onPress={()=>onSubmit()} title="Confirm and Pay" background='#6A4029' color="#F6F6F9" />
            </View>
        </View>
    )
}

export default Checkout