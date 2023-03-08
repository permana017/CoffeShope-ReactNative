
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    cart:{
        width:"100%",
        height:"100%",
        backgroundColor:"#F5F5F8",
        paddingTop:60,
        // paddingHorizontal:50,
        // justifyContent:"center",
        alignItems:"center"
    },
    cardCart:{
        width:"95%",
        height:100,
        backgroundColor:"#FFFFFF",
        borderRadius:20,
        flexDirection:"row",
        alignItems:'center',
        paddingVertical:12,
        paddingHorizontal:17,
        marginBottom:14
    },
    titleWrap:{
        flexDirection:"column",
        width:"65%",
        justifyContent:"space-between",
        height:57
    },
    titleProd:{
        color:"#000000",
        fontSize:17,
        fontWeight:"700"

    },
    textTitle: {
        fontSize: 35,
        fontWeight: "900",
        width:"100%",
        textAlign:"left",
        marginLeft:100,
        marginBottom:50
    },
})


export default styles