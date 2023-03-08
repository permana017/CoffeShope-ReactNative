import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "../screen/Home"
import DetailProduct from '../screen/DetailProduct';
import Checkout from '../screen/Checkout';
import Cart from '../screen/Cart';
import Payment from '../screen/Payment';
import Profile from '../screen/Profile';
import GetStarted from '../screen/GetStarted';
import Signup from '../screen/Signup';
import Login from '../screen/Login';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../components/CostumeDrawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import LogOutIcon from '@expo/vector-icons/SimpleLineIcons';
import EditProfile from '../screen/EditProfile';
import { useState, useEffect} from 'react';
import Welcome from '../screen/Welcome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import History from '../screen/History';




const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


const LogOut = async () =>{
  try {
    await AsyncStorage.removeItem('@userData')
  } catch(e) {
    // remove error
  }
}




function MyDrawer() {

const DataStatis = {
  drawerLabelStyle:{
    fontWeight:"600",
    fontSize:17,

  },
  drawerInactiveTintColor:"#6A4029",
  drawerActiveTintColor:"#F2F2F2",
  drawerActiveBackgroundColor:"#6A4029",
}

  const CustomData = ({focused,name1}) =>{
  if (focused) {
      return <Ionicons name={name1} size={24} color="#F2F2F2" />
      } else {
      return <Ionicons name={name1} size={24} color="#6A4029" />
      }
  }
  return (
    <Drawer.Navigator useLegacyImplementation 
    drawerContent={(props) => <CustomDrawerContent {...props}/>}
    screenOptions={{
      drawerStyle: {
        backgroundColor: '#EBEBEB',
        width: 310,
      },
    }}
    >
        <Drawer.Screen name="Home-drawer"  component={Home} 
            options={{
                headerShown: false,
                drawerIcon:({focused})=>
                <CustomData focused={focused} name1="home-outline" />,
                title:"Home",
                ...DataStatis  
            }} />
        <Drawer.Screen name="Cart-drawer"  component={Cart} 
            options={{
                headerShown: false,
                drawerIcon:({focused})=>
                <CustomData focused={focused} name1="cart-outline"/>,
                title:"MyCart",
                ...DataStatis   
            }} />
        <Drawer.Screen name="profile"  component={Profile} 
            options={{
                headerShown: false,
                drawerIcon:({focused})=>
                <CustomData focused={focused} name1="person-circle-outline"/>,
                title:"MyProfile",
                ...DataStatis   
            }} />
        <Stack.Screen name="logout"  component={LogOut} 
            options={{
                headerShown: false,
                drawerIcon:({focused})=>
                <LogOutIcon name="logout" size={24} color="#6A4029" />,
                title:"Logout",
                ...DataStatis   
            }} />
    </Drawer.Navigator>
  );
}


export default function Router() {

  const [isLogin, setIsLogin] = useState(false)

    // console.log("isLogin", isLogin);
  const getDataAuth = async () => {
    try {
      const value = await AsyncStorage.getItem('@userData')
      // console.log("valuse", value);
      if(value !== null) {
        setIsLogin(true)
      }else {
        setIsLogin(false)
      }
    
    } catch(e) {
      // error reading value
    }
  }
  useEffect(()=> {
    // console.log("masuk use effect");
    getDataAuth()
  },[AsyncStorage])

  const getDataLogin = (value) =>{
    // console.log('value',value)
       setIsLogin(true)
  }

  const ComponentLogin = ()=>(
    <Login getData={getDataLogin}/>
  )


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='drawer'>
                {isLogin ? <>
                    <Stack.Screen  name="drawer" component={MyDrawer} options={{headerShown:false}} />
                    <Stack.Screen name="Home" component={Home} options={{
                        headerShown: false
                    }}/>
                    <Stack.Screen name="detail-product" component={DetailProduct} options={{ title: 'Home' }} />
                    <Stack.Screen name="Checkout" component={Checkout}/>
                    <Stack.Screen name="Cart" component={Cart}/>
                    <Stack.Screen name="Payment" component={Payment}/>
                    <Stack.Screen name="profile" component={Profile}/>
                    <Stack.Screen name="edit-profile" component={EditProfile}/>
                    <Stack.Screen name="history" component={History}/>
                </> : <>
                    <Stack.Screen name="get-started" component={GetStarted} options={{headerShown:false}}/>
                    <Stack.Screen name="welcome" component={Welcome} options={{headerShown:false}}/>
                    <Stack.Screen name="login" component={ComponentLogin} options={{headerShown:false}}/>
                    <Stack.Screen name="signup" component={Signup} options={{headerShown:false}}/>
                </>}
            </Stack.Navigator>
        </NavigationContainer>
    );
} 