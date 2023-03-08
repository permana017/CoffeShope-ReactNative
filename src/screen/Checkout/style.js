

import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    checkout: {
        width: "100%",
        height: "100%",
        backgroundColor: "#F2F2F2"
    },
    title: {
        fontSize: 34,
        fontWeight: "900",
        marginLeft: 50,
        marginTop: 36,
        marginBottom: 35
    },
    titleAddress: {
        fontSize: 18,
        fontWeight: "700",
        color: '#000000'
    },
    titleChange: {
        fontSize: 16,
        fontWeight: "400",
        color: '#6A4029'
    },
    cardWrap:{
        paddingHorizontal: 50,
    },
    card: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        marginTop: 14,
        borderRadius: 20,
        padding: 30
    },
    street: {
        fontSize: 17,
        fontWeight: "500",
        borderBottomWidth: 0.5
    },
    streetDetail: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: "400",
        borderBottomWidth: 0.5,
        lineHeight: 22
    },
    phoneNum: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: "400"
    },
    borderRadio:{
        width:20,
        height:20,
        borderWidth:1,
        borderColor:"#9F9F9F",
        borderRadius:15,
        alignItems:"center",
        justifyContent:'center'
    },
    borderRadioActive:{
        width:20,
        height:20,
        borderWidth:1,
        borderColor:"#6A4029",
        borderRadius:15,
        alignItems:"center",
        justifyContent:'center'
    },
    dotChecked:{
        width:10,
        height:10,
        backgroundColor:"#6A4029",
        borderRadius:10
    },
    deliveryTitle:{
        marginTop:35,
        marginLeft:50,
    },
    deliveryMethod:{
        flexDirection:"row",
        alignItems:"center",
    },
    methodText:{
        marginLeft:16,
        fontSize:17,
        fontWeight:"500",
        borderBottomWidth:0.5,
        borderColor:"#000000",
        paddingVertical:16,
        width:"84%"

    },
    wrapTotal:{
        flexDirection:"row",
        justifyContent:'space-between',
        width:"100%",
        marginTop:28
    },
    totalPrice:{
        fontSize:22,
        fontWeight:"700",
    },
    totalText:{
        fontSize:17,
        fontWeight:"400",
    },
    checkoutBtn:{
        width:"100%",
        height:58,
        backgroundColor:"#6A4029",
        borderRadius:20,
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
        marginTop:15,
    },
    

})


export default styles