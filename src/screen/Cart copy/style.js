
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    cart:{
        width:"100%",
        height:"100%",
        backgroundColor:"#F5F5F8",
        paddingTop:90,
        // paddingHorizontal:50,
        // justifyContent:"center",
        alignItems:"center"
    },
    cardCart:{
        width:"75%",
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
    wrapQty:{
        width:70,
        backgroundColor:"#6A4029",
        borderRadius:30,
        flexDirection:"row",
        justifyContent:'space-between',
        paddingHorizontal:10,
    },
    textQty:{
        fontSize:14,
        fontWeight:"900",
        color:"white"
    },
    couponBtn:{
        width:"75%",
        height:58,
        backgroundColor:"#FFBA33",
        borderRadius:20,
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
        marginTop:15
    },
    formTotal:{
        width:"75%",
        borderTopWidth:1,
        marginTop:33,
        paddingVertical:33
    },
    wrapTextList:{
        flexDirection:"row",
        justifyContent:'space-between',
        marginBottom:23
    },
    textListPrice : {
        fontSize: 15,
        fontWeight: "400"
    },
    textList: {
        fontSize: 15,
        fontWeight: "700",
        color:"#ADADAF"
    },
    textTotal: {
        fontSize: 20,
        fontWeight: "700",
    },
    checkoutBtn:{
        width:"75%",
        height:58,
        backgroundColor:"#FFBA33",
        borderRadius:20,
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
        marginTop:15
    },
})


export default styles