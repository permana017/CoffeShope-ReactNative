


import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    payment:{
        width:"100%",
        height:"100%",
        backgroundColor:"#F2F2F2",
        alignItems:"center"
    },
    productWrap:{
        marginTop:57,
        width:"100%",
        paddingHorizontal:35,
        
    },
    cardProduct:{
        backgroundColor:"#FFFFFF",
        width:"100%",
        marginTop:23,
        borderRadius:30,
        padding:21,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.50,
        shadowRadius: 40,
        elevation: 40,
    },
    title:{
        fontSize:17,
        fontWeight:"700",
        color:"#000000"
    },
    prodTitle:{
        fontSize:14,
        fontWeigth:"400",
        color:"#000000",
        marginLeft:19
    },
    containerProd:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:7,
        alignItems:"center"
    },
    price:{

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
    paymentWrap:{
        marginTop:33
    },
    viewPager: {
        flex: 1,
        width:"100%",
    },
    page: {
    justifyContent: 'center',
    alignItems: 'center',
    width:"100%"
    },
    wrapMyCard:{ 
    flex: 1,
    height:'100%',
    width:'100%',
    marginTop:54,
    height:280,
    },
    totalWrap:{
        width:"100%",
        flexDirection:"row",
        paddingHorizontal:37,
        justifyContent:"space-between",
    },
    totalPrice:{
        fontSize:22,
        fontWeight:"900"
    },
    totalText:{
        fontSize:17,
        fontWeight:"400"
    },
    btnsubmit:{
        paddingHorizontal:37,
        width:'100%',
        marginVertical:33
    }
})

export default styles
