import React,{useState, useEffect} from 'react';
import {View,Text, StyleSheet, TextInput, ScrollView,Image,Button, TouchableOpacity, FlatList} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './style';
import axios from 'axios';


const Home =({ navigation }) => {

const [isData, setIsData] = useState([])
const [search, setSearch] = useState("")
const [filter, setFilter] = useState("")
console.log(filter);

const url = () =>{
    if (search != "") {
        return (`http://192.168.43.225:5000/api/v1/products/?search=${search}`)
    } else if(filter != ""){
        return (`http://192.168.43.225:5000/api/v1/products/?cat=${filter}`)
    }
    else {
        return (`http://192.168.43.225:5000/api/v1/products/`)
    }
}
    
useEffect(() => {
        axios
        .get(url())
        .then(res => {
          // console.log(res.data.data);
          setIsData(res.data.data)
        })
        .catch(err => console.log(err))
  }, [search, filter])

    return (
        <ScrollView vertical={true} > 
            <View style={styles.container} >
                <View>
                    <Text style={styles.title}>A good coffee is a good day</Text>
                    <TextInput
                        placeholder='Search'
                        style={[styles.input, {marginTop:10}]}
                        onChangeText={(e)=>setSearch(e)}
                    />
                </View>
                <ScrollView horizontal={true} style={{padding:0,flexGrow:0}} showsHorizontalScrollIndicator={false}>
                    <View style={styles.listFilter}>
                        <TouchableOpacity onPress={()=>{setFilter(""), setSearch("")}}>
                            <Text style={styles.listFilterText}>Favorite</Text>
                        </TouchableOpacity>
                        <Text style={styles.listFilterText}>Promo</Text>
                        <TouchableOpacity onPress={()=>setFilter("Coffee")}>
                            <Text style={styles.listFilterText}>Coffee</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setFilter("non coffee")}>
                            <Text style={styles.listFilterText}>Non Coffee</Text>  
                        </TouchableOpacity >
                        <TouchableOpacity onPress={()=>setFilter("foods")}>
                            <Text style={styles.listFilterText}>Foods</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <View>
                    <Text style={{margin:0, fontWeight:'700', color:'#6A4029', fontSize:17,marginTop: 40, marginLeft:50}}>Coffee</Text>
                </View>
                <FlatList horizontal
                    showsHorizontalScrollIndicator={false}
                    data={isData}
                    renderItem={({item})=>{
                        // console.log(item.images[0]);
                        return(
                            <View style={{ flexGrow:0}}>
                                <TouchableOpacity style={styles.cardWrap} 
                                 onPress={() => navigation.navigate('detail-product', {caption:item})}>
                                    <Image
                                    // source={require("../../images/Hazelnut-Latte.png")}
                                    source={{uri:`http://192.168.43.225:5000/upload/images/${item.images[0].filename}`}}
                                    style={{width:"80%",height:189, borderRadius:30, marginTop: -30, resizeMode:"contain"}}
                                    />
                                    <Text style={styles.titleProduct}>{item.tittle}</Text>
                                    <Text style={styles.titlePrice}>IDR {item.price}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}/>
                
                <View>
                    <Text style={{margin:0, fontWeight:'700', color:'#6A4029', fontSize:17,marginTop: 40,marginLeft:50}}>Non Coffee</Text>
                </View>
                <ScrollView style={{ flexGrow:0}} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {[1,1,1].map((item,i)=>(
                        <View key={i} style={styles.cardWrap}>
                            <Image
                            style={{width:"100%", marginTop: -30, resizeMode:"contain"}}
                            source={require("../../images/Hazelnut-Latte.png")}
                            resizeMode={'contain'}
                            />
                            <Text style={styles.titleProduct}>Hazelnut{`\n`}Latte</Text>
                            <Text style={styles.titlePrice}>IDR 25.000</Text>
                        </View>
                    ))}
                </ScrollView>
                <View>
                    <Text style={{margin:0, fontWeight:'700', color:'#6A4029', fontSize:17,marginTop: 40,marginLeft:50}}>Foods</Text>
                </View>
                <ScrollView style={{ flexGrow:0}} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {[1,1,1].map((item,i)=>(
                        <View key={i} style={styles.cardWrap}>
                            <Image
                            style={{width:"100%", marginTop: -30, resizeMode:"contain"}}
                            source={require("../../images/Hazelnut-Latte.png")}
                            resizeMode={'contain'}
                            />
                            <Text style={styles.titleProduct}>Hazelnut{`\n`}Latte</Text>
                            <Text style={styles.titlePrice}>IDR 25.000</Text>
                        </View>
                    ))}
                </ScrollView>
                <StatusBar style='auto'/>
            </View>
        </ScrollView>
    );
};

export default Home;
