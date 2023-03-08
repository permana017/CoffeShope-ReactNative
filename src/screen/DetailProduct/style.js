

import { StyleSheet } from "react-native"



const styles = StyleSheet.create({
    prodDetail: {
        flexDirection: "column",
        backgroundColor: "#362115",
        height: '100%',
        width: '100%'
    },
    section: {
        marginTop: 268,
        backgroundColor: "#EBEBEB",
        height: "100%",
        borderTopRightRadius: 30,
        flexDirection: "column"
    },
    sectionInner: {
        flexDirection: 'row'
    },
    cardPrice: {
        width: 147,
        height: 54,
        backgroundColor: '#FFBA33',
        marginTop: -54,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: "center",
        alignItems: 'center',
        marginLeft: 16
    },
    price: {
        color: '#000000',
        fontSize: 25,
        fontWeight: "700"
    },
    cardImgProd: {
        flexDirection: "column",
        alignItems: "center",
        width: 200,
        marginLeft: 16,
    },
    prodTitle: {
        marginTop: 120,
        fontSize: 28,
        fontWeight: "800",
        color: '#000000'
    },
    descDelivery: {
        marginTop: 32,
        marginLeft: 54,
        fontSize: 14,
        color:"#6A4029"
    },
    descProd: {
        marginTop: 31,
        marginLeft: 54,
        fontSize: 15,
        color:"#6A4029",
        fontWeight:"700",
        lineHeight:21,
        letterSpacing:1,
        height:80
    },
    cotainerBtn:{
        flexDirection:"row",
        justifyContent:"center",
        marginBottom:23
    },
    BtnSize:{
        width:50,
        height:50,
        backgroundColor:'#FFBA33',
        marginLeft:17,
        marginRight:17,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'
    },
    BtnSizeActive:{
        width:50,
        height:50,
        backgroundColor:'#6A4029',
        color:"#FFFFFF",
        marginLeft:17,
        marginRight:17,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'
    },
    BtnAdd:{
        width:"100%",
        height:70,
        backgroundColor:'#6A4029',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:41
    },
    btnText:{
        fontSize:20,
        fontWeight:'700'
    },
    btnActive:{
        fontSize:20,
        fontWeight:'700',
        color:"#FFF"
    }
})


export default styles