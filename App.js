import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,useWindowDimensions,TouchableOpacity ,TextInput} from 'react-native';
import {SafeAreaProvider,SafeAreaView} from 'react-native-safe-area-context'
import { styles } from './styles/global';
import {Feather} from '@expo/vector-icons';
const mainButtons = [
  { label: 'C', is_icon: false, color: '#2196F3', action: 'clear'},
  { label: '/', is_icon: true, color: '#2196F3', action: 'divide' },
  { label: '*', is_icon: true, color: '#2196F3', action: 'x' },

  { label: '7', is_icon: false, color: 'white', action: 'number' },
  { label: '8', is_icon: false, color: 'white', action: 'number' },
  { label: '9', is_icon: false, color: 'white', action: 'number' },

  { label: '4', is_icon: false, color: 'white', action: 'number' },
  { label: '5', is_icon: false, color: 'white', action: 'number' },
  { label: '6', is_icon: false, color: 'white', action: 'number' },

  { label: '1', is_icon: false, color: 'white', action: 'number' },
  { label: '2', is_icon: false, color: 'white', action: 'number' },
  { label: '3', is_icon: false, color: 'white', action: 'number' },

  { label: '%', is_icon: false, color: 'white', action: 'operator' },
  { label: '0', is_icon: false, color: 'white', action: 'number' },
  { label: ',', is_icon: false, color: 'white', action: 'operator' },
];

const sideButtons = [
  { label: '<-', is_icon: true, color: '#2196F3', action: 'delete', is_double: false },
  { label: '-', is_icon: true, color: '#2196F3', action: 'minus', is_double: false },
  { label: '+', is_icon: true, color: '#2196F3', action: 'plus', is_double: false },
  { label: '=', is_icon: false, color: 'white', action: 'calculate', is_double: true },
];

const operators = ["+","-","*","/",","]


export default function App() {
  const [display,setdisplay] = useState("0");
  const [output,setoutput] = useState("");
  const handlePress = (label,action) => {
  setdisplay(prev =>{
    if (prev=="0" && action=="number" ) {
      return label
    }
    else if (action=="clear") {
      setoutput("")
      return "0"
    }
    else if (action=='calculate') {
      let formula = display
      if (display.includes(",")) {
        formula = display.replaceAll(",",".")
      }
      else if (operators.includes(display.at(-1))) {
        return display
      }
      try {
        setoutput(String(eval(formula)))
        return prev
      } 
      catch (error) {
        setoutput("Error")
        setTimeout(() => {
          setdisplay("0");
          setoutput("");
        },700)
      }
    }
    else if (action=='delete') {
      if (display!="" && display!="0") {
        const text = display.slice(0,-1)
        if (text=="") {
          return "0"
        }
        return text
      }
      else{return "0"}
    }
    else if (operators.includes(label) && operators.includes(prev.at(-1))) {
      return prev
    }
    return prev+label
    })}

  const {width,height} = useWindowDimensions();
  console.log(height)
  return (
    <SafeAreaProvider style={{flex:1}}>
      <SafeAreaView style={{flex:1,backgroundColor:'black'}}>
        <View style={styles.display_container}>
          <View style={[styles.input_area]}>
            <TextInput editable={false} value={display} style={styles.input}/>
          </View>
          <View style={[styles.input_area]}>
            <TextInput editable={false} value={output} style={styles.output}/>
          </View>
        </View>
        <View style={[styles.button_container,{height:height*0.60}]}>
          <View style={styles.main_area}>
            {mainButtons.map((btn,ind) =>(
              <TouchableOpacity key={ind} onPress={() => handlePress(btn.label,btn.action)} style={[styles.default_button,{width:(width*0.75-30) / 3,height:(height*0.55 -120)/5}]}>
                {btn.is_icon ? (<Feather name={btn.action} size={24} color={btn.color} />):(<Text style={{textAlign:'center',color:btn.color,fontSize:30}}>{btn.label}</Text>)}
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.side_area}>
            {sideButtons.map((btn,ind) =>(
              <TouchableOpacity key={ind} onPress={() => handlePress(btn.label,btn.action)} style={[styles.default_button,{width:(width*0.75-30) / 3}, btn.is_double ? {height:(height*0.55-70)/2.5,backgroundColor:'#2196F3'}:{height:(height*0.55-120)/5}]}>
                {btn.is_icon ? (<Feather name={btn.action} size={24} color={btn.color} />):(<Text style={{textAlign:'center',color:btn.color,fontSize:30}}>{btn.label}</Text>)}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

