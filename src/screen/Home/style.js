import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container:{
     flex: 1,
     flexDirection: 'column',
     backgroundColor: "#EBEBEB"
    },
    title:{
        fontSize:34,
        marginTop:132,
        fontWeight: '900',
        marginLeft:50
    },
    titleProduct:{
        fontSize:22,
        marginTop:10,
        fontWeight: '900',
        textAlign:"center"
    },
    titlePrice:{
        fontSize:17,
        marginTop:10,
        fontWeight: '700',
        textAlign:"center"
    },
    input:{
        backgroundColor: "#EFEEEE",
        borderRadius:30,
        padding: 16,
        marginRight:60,
        marginLeft:50

    },
    listFilter:{
        flexDirection: 'row',
        marginTop: 46,
        
    },
    listFilterText:{
        marginRight: 29,
        marginLeft: 29,
        fontSize: 17,
        fontWeight:'400',
        color: '#6A4029',
        borderBottomWidth: 3,
        borderBottomColor: '#6A4029',
        height: 30,
        
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
      },
    cardWrap:{
        width:220,
        height:270,
        backgroundColor:"white",
        borderRadius: 30,
        marginTop: 53,
        alignItems:"center",
        marginLeft:30
    }
    
})

export default styles