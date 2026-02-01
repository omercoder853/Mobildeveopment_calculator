import { StyleSheet } from "react-native";

    export const styles = StyleSheet.create({
        display_container:{
            display:'flex',
            flexDirection:'column',
            backgroundColor:'black',
            flex:1,
            justifyContent:'flex-end',
            alignItems:'flex-start'
        },
        button_container:{
            display:'flex',
            flexDirection:'row',
            marginTop:'auto',
            alignItems:'center',
            backgroundColor:'#262a33',
            borderTopStartRadius:25,
            borderTopEndRadius:25,
            
        },
        main_area:{
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
            flex:3,
            paddingTop:20,
            justifyContent:'center'
        },
        side_area:{
            display:'flex',
            flexDirection:'column',
            flex:1,
            paddingTop:20,
        },
        default_button : {
            padding:10,
            backgroundColor:'#262a33',
            marginBottom:25,
            borderRadius:25,
            marginRight:5,
            alignItems:'center',
            justifyContent:'center',
            borderWidth:1,
            borderColor:'#eeeeee37'
        },
        input_area : {
            width:'100%',
            marginBottom:10
        },
        input:{
            fontSize:45,
            textAlign:'right',
            marginTop:'auto',
            marginLeft:'auto',
            color:'white'
        },
        output:{
            fontSize:35,
            textAlign:'right',
            marginTop:'auto',
            marginLeft:'auto',
            color:'white'
        }
    })