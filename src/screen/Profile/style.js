

import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    containerProfile:{
      backgroundColor:"#F5F5F8",
      width:"100%",
      height:"100%"
  
    },
    wrapInfo:{
      marginTop:60,
      alignItems:"center",
      paddingBottom:28,
    },
    username:{
      fontSize:18,
      fontWeight:"700",
      color:"#6A4029"
    },
    infoText:{
      fontSize:14,
      fontWeight:"400",
      color:"#6A4029"
    },
    wrapHistory:{
      width:"100%",
      paddingVertical:25,
      borderBottomWidth:9,
      borderTopWidth:9,
      borderColor:"rgba(186, 186, 186, 0.29)"
    },
    wrapHistoryText:{
      marginBottom:16,
      paddingHorizontal:33,
      flexDirection:"row",
      width:"100%",
      justifyContent:"space-between",
      alignItems:"flex-start"
    },
    wrapList:{
      paddingHorizontal:34,
      paddingVertical:25
    },
    btnList:{
      backgroundColor:"#FFFFFF",
      height:60,
      width:"100%",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      borderRadius:20,
      paddingHorizontal:25,
      marginBottom:26
    },
    editCircle:{
      width:36,
      height:36,
      borderRadius:36,
      backgroundColor:"#6A4029",
      alignItems:"center",
      justifyContent:"center",
      position:'absolute',
      zIndex:2,
      right:0,
      bottom:0
    }
  })


  export default styles